<?php
/**
 * Plugin Name: Custom Contact Form API
 * Description: Creates a custom post type for forms and a REST API endpoint for form submissions
 * Version: 1.0.0
 * Author: Inas AL-Kamachy
 * Author URI: Your Website
 */

function create_form_post_type() {
    register_post_type('form',
        array(
            'labels' => array(
                'name' => __('Forms'),
                'singular_name' => __('Form')
            ),
            'public' => true,
            'has_archive' => false,
            'supports' => array('title')
        )
    );
}
add_action('init', 'create_form_post_type');

// Register REST API endpoint
function register_form_submission_endpoint() {
          register_rest_route('InasAlKamachy/v1', '/contact-form', array(
        'methods' => 'POST',
        'callback' => 'handle_form_submission',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'register_form_submission_endpoint');

function handle_form_submission($request) {
    $parameters = $request->get_params();

    if (empty($parameters['name']) || empty($parameters['email']) || empty($parameters['message'])) {
        return new WP_Error('missing_fields', 'Please provide name, email, and message.', array('status' => 400));
    }
    // here retreive data from the request ok . i google cpt is custom post type
    $name = sanitize_text_field($parameters['name']);
    $email = sanitize_email($parameters['email']);
    $message = sanitize_textarea_field($parameters['message']);

    if (!is_email($email)) {
        return new WP_Error('invalid_email', 'Please provide a valid email address.', array('status' => 400));
    }

    $existing_submissions = get_posts(array(
        'post_type' => 'form',
        'meta_query' => array(
            array(
                'key' => 'email',
                'value' => $email,
                'compare' => '='
            )
        ),
        'date_query' => array(
            'after' => '1 hour ago'
        )
    ));

    if (!empty($existing_submissions)) {
        return new WP_Error('duplicate_submission', 'A submission with this email was received within the last hour. Please try again later.', array('status' => 429));
    }
    // this the post content
    $post_id = wp_insert_post(array(
        // and this is title , i can remove post_content as you see no cp
        'post_title' => $name,
        'post_type' => 'form',
        'post_status' => 'publish'
    ));

    if (is_wp_error($post_id)) {
        return new WP_Error('submission_failed', 'Failed to save the form submission.', array('status' => 500));
    }
    // thoses are custom meta
    update_post_meta($post_id, 'email', $email);
    update_post_meta($post_id, 'message', $message);

    return new WP_REST_Response('Form submitted successfully', 200);
}

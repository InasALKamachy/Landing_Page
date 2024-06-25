<?php

class FormSubmissionEndpoint {
    public function register_routes() {
        register_rest_route('InasAlKamachy/v1', '/contact-form', [
            'methods' => 'POST',
            'callback' => [$this, 'handle_submission'],
            'permission_callback' => '__return_true'
        ]);
    }

    public function handle_submission(WP_REST_Request $request) {
        $parameters = $request->get_params();

        if (empty($parameters['name']) || empty($parameters['email']) || empty($parameters['message'])) {
            return new WP_Error('missing_fields', 'Please provide name, email, and message.', ['status' => 400]);
        }

        $name = sanitize_text_field($parameters['name']);
        $email = sanitize_email($parameters['email']);
        $message = sanitize_textarea_field($parameters['message']);

        if (!is_email($email)) {
            return new WP_Error('invalid_email', 'Please provide a valid email address.', ['status' => 400]);
        }

        $existing_submissions = get_posts([
            'post_type' => 'form',
            'meta_query' => [
                [
                    'key' => 'email',
                    'value' => $email,
                    'compare' => '='
                ]
            ],
            'date_query' => [
                'after' => '1 hour ago'
            ]
        ]);

        if (!empty($existing_submissions)) {
            return new WP_Error('duplicate_submission', 'A submission with this email was received within the last hour. Please try again later.', ['status' => 429]);
        }

        $post_id = wp_insert_post([
            'post_title' => $name,
            'post_type' => 'form',
            'post_status' => 'publish'
        ]);

        if (is_wp_error($post_id)) {
            return new WP_Error('submission_failed', 'Failed to save the form submission.', ['status' => 500]);
        }

        update_post_meta($post_id, 'email', $email);
        update_post_meta($post_id, 'message', $message);

        return new WP_REST_Response('Form submitted successfully', 200);
    }
}

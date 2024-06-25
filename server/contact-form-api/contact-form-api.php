<?php
/**
 * Plugin Name: Contact Form REST API
 * Description: Creates a custom post type for forms and a REST API endpoint for form submissions
 * Version: 1.0.0
 * Author: Inas AL-Kamachy
 * Author URI: Your Website
 */

if (!defined('ABSPATH')) {
    exit;
}

require_once plugin_dir_path(__FILE__) . 'includes/ContactFormPlugin.php';

function custom_contact_form_api_init() {
    $plugin = new ContactFormPlugin();
    $plugin->init();
}

add_action('plugins_loaded', 'custom_contact_form_api_init');

<?php

class ContactFormPlugin {
    public function init() {
        $this->register_post_type();
        $this->register_rest_endpoint();
    }

    private function register_post_type() {
        require_once plugin_dir_path(__FILE__) . 'FormPostType.php';
        $formPostType = new FormPostType();
        add_action('init', [$formPostType, 'create_post_type']);
    }

    private function register_rest_endpoint() {
        require_once plugin_dir_path(__FILE__) . 'FormSubmissionEndpoint.php';
        $formSubmissionEndpoint = new FormSubmissionEndpoint();
        add_action('rest_api_init', [$formSubmissionEndpoint, 'register_routes']);
    }
}

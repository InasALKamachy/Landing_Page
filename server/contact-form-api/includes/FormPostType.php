<?php

class FormPostType {
    public function create_post_type() {
        register_post_type('form', [
            'labels' => [
                'name' => __('Forms'),
                'singular_name' => __('Form')
            ],
            'public' => true,
            'has_archive' => false,
            'supports' => ['title']
        ]);
    }
}

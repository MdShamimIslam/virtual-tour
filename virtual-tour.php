<?php
/**
 * Plugin Name: Virtual Tour 
 * Description: Short description of Virtual Tour plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: virtual-tour
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'VT_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'VT_DIR_URL', plugin_dir_url( __FILE__ ) );

if( !class_exists( 'VTPlugin' ) ){
	class VTPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_action('enqueue_block_assets', [$this, 'enqueue_block_assets']);
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}

		public function enqueue_block_assets(){
			wp_enqueue_script( 'bppiv-pannellum-js', VT_DIR_URL . 'public/assets/js/pannellum.js', [], '2.5.6', true);
			wp_enqueue_style( 'bppiv-pannellum-css', VT_DIR_URL . 'public/assets/css/pannellum.min.css', [], '2.5.6' );
		}

	}
	new VTPlugin();
}
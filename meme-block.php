<?php
/**
 * Plugin Name:     Meme Block
 * Description:     Generate your meme and be awesome
 * Version:         1.0.0
 * Author:          Cristian Ungureanu
 * Author URI: 		https://themeisle.com
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     meme-block
 *
 * @package         meme-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function init_meme_block() {
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
	
	wp_register_script(
		'gutenberg-examples-01-esnext',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	
	register_block_type( 'gutenberg-examples/example-01-basic-esnext', array(
		'editor_script' => 'gutenberg-examples-01-esnext',
	) );
}

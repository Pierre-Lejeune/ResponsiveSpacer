 <?php
/**
* Plugin Name: Librairie de blocs customisés Wordpress
* Description: Cette extension propose à ses utilisateurs un espaceur responsive !
* Author: Pierre Lejeune
* Author URI: https://pierrelejeune.fr
* Version: 0.1
*/
if( !defined( 'WPINC' ) ) { die; } // On vérifie que notre extension se trouve bien dans un répertoire Wordpress

/**
 *  On renseigne les dépendances de notre extension à charger dans l'éditeur Gutenberg
 * */
function load_bloccustomises_gutenberg_dependencies() {
	$dir = plugin_dir_url(__FILE__) . 'build';
	wp_enqueue_script( "bloccustomises-js", "$dir/index.js", [ 'wp-blocks', 'wp-dom' ] , false, true );
	wp_enqueue_style( "bloccustomises-css", "$dir/index.css", [ 'wp-edit-blocks' ] );
}
add_action( 'enqueue_block_editor_assets', 'load_bloccustomises_gutenberg_dependencies', 100 );

/**
 * On renseigne les dépendances de notre extension à charger sur la partie public
 */
function load_bloccustomises_frontoffice_dependencies() {
	$dir = plugin_dir_url(__FILE__) . 'build';
	wp_enqueue_style( "bloccustomises-css", "$dir/index.css");
}
add_action( 'wp_enqueue_scripts', 'load_bloccustomises_frontoffice_dependencies' );
<?php
add_action( 'admin_init', 'remove_menu_pages' );
function remove_menu_pages() {
	remove_menu_page('edit.php');
	remove_menu_page('edit.php?post_type=page');
	remove_menu_page('edit-comments.php');

	remove_menu_page('plugins.php');
	remove_menu_page('themes.php');
	remove_menu_page('users.php');
	remove_menu_page('tools.php');
	remove_menu_page('options-general.php');
}
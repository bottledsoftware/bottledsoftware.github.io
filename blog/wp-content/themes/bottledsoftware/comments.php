<?php
/**
 * The template for displaying Comments.
 *
 * The area of the page that contains both current comments
 * and the comment form. The actual display of comments is
 * handled by a callback to twentyeleven_comment() which is
 * located in the functions.php file.
 */

  function mytheme_comment($comment, $args, $depth) {
		$GLOBALS['comment'] = $comment;
		extract($args, EXTR_SKIP);

		if ( 'div' == $args['style'] ) {
			$tag = 'div';
			$add_below = 'comment';
		} else {
			$tag = 'li';
			$add_below = 'div-comment';
		}
		$tag = 'div';
		$add_below = 'comment';
?>
		<<?php echo $tag ?> <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
		<?php if ( 'div' != $args['style'] ) : ?>
		<div id="div-comment-<?php comment_ID() ?>" class="comment-body">
		<?php endif; ?>
		<div class="comment-author vcard">
		<div class="author-avatar">
		<?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['avatar_size'] ); ?>
		</div>
		<?php printf(__('<div class="comment-details"><cite class="fn">%s</cite> <span class="comment-time">schrieb am %s um %s Uhr %s</span></div>'), get_comment_author_link(), translateDateToGerman(get_comment_date('j. F Y')), get_comment_time("G:i"), edit_comment_link(__('(Bearbeiten)'),'  ','' )) ?>
		</div>
<?php if ($comment->comment_approved == '0') : ?>
		<em class="comment-awaiting-moderation"><?php _e('Ihr Kommentar muss erst von einem Moderator freigeschaltet werden.') ?></em>
		<br />
<?php endif; ?>
		<div class="comment-text">
		<?php comment_text() ?>
		</div>
		<div class="reply">
		<?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
		</div>
		<?php if ( 'div' != $args['style'] ) : ?>
		</div>
		<hr class="comment-separator">
		<?php endif; ?>
<?php
        }
 
?>
	<div id="comments">
	<?php if ( post_password_required() ) : ?>
		<p class="nopassword"><?php _e( 'Dieser Post ist Passwort geschützt. Geben Sie ihr Passwort ein, um die Kommentare zu sehen.', 'twentyeleven' ); ?></p>
	</div><!-- #comments -->
	<?php
			/* Stop the rest of comments.php from being processed,
			 * but don't kill the script entirely -- we still have
			 * to fully load the template.
			 */
			return;
		endif;
	?>

	<?php // You can start editing here -- including this comment! ?>

	<?php if ( have_comments() ) : ?>
		<h2 id="comments-title">
			Kommentare
		</h2>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
		<nav id="comment-nav-above">
			<h1 class="assistive-text"><?php _e( 'Comment navigation', 'twentyeleven' ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'twentyeleven' ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'twentyeleven' ) ); ?></div>
		</nav>
		<?php endif; // check for comment navigation ?>

		<ol class="commentlist">
			<?php
				/* Loop through and list the comments. Tell wp_list_comments()
				 * to use twentyeleven_comment() to format the comments.
				 * If you want to overload this in a child theme then you can
				 * define twentyeleven_comment() and that will be used instead.
				 * See twentyeleven_comment() in twentyeleven/functions.php for more.
				 */
				 wp_list_comments('type=comment&callback=mytheme_comment');
			?>
		</ol>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
		<nav id="comment-nav-below">
			<h1 class="assistive-text"><?php _e( 'Comment navigation', 'twentyeleven' ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'twentyeleven' ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'twentyeleven' ) ); ?></div>
		</nav>
		<?php endif; // check for comment navigation ?>

	<?php
		/* If there are no comments and comments are closed, let's leave a little note, shall we?
		 * But we don't want the note on pages or post types that do not support comments.
		 */
		elseif ( ! comments_open() && ! is_page() && post_type_supports( get_post_type(), 'comments' ) ) :
	?>
		<p class="nocomments"><?php _e( 'Comments are closed.', 'twentyeleven' ); ?></p>
	<?php endif; ?>

	<?php 
	$comments_args = array(
	'title_reply' => 'Neuer Kommentar',
	
	'logged_in_as' => '<p class="logged-in-as">' . sprintf( __( 'Eingeloggt als <a href="%1$s">%2$s</a>. <a href="%3$s" title="Aus diesem Account ausloggen">Ausloggen?</a>' ), admin_url( 'profile.php' ), $user_identity, wp_logout_url( apply_filters( 'the_permalink', get_permalink( ) ) ) ) . '</p>',
	
	'comment_field' => '<p class="comment-form-comment"><label for="comment">' . _x( 'Kommentar', 'noun' ) . '</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p>',
	
	'comment_notes_after' => '',
	
	'id_submit' => 'comment-submit-button',
	
	'label_submit' => 'Kommentar abschicken',
	
	'comment_notes_before' => '<p class="comment-notes">' . __( 'Ihre E-Mail Adresse wird nicht veröffentlicht.' ) . ( $req ? $required_text : '' ) . '</p>',
	
	'title_reply_to' => 'Antwort auf den Kommentar von %s',
	
	'cancel_reply_link' => '(abbrechen)'
	);
	
	comment_form($comments_args); 
	
	
	?>

</div><!-- #comments -->

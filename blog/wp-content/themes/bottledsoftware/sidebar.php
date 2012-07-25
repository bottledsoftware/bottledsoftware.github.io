<?php
/**
 * The Sidebar containing the main widget area.
 */

$options = twentyeleven_get_theme_options();
$current_layout = $options['theme_layout'];

if ( 'content' != $current_layout ) :
?>
		<div class="blog-navigation">
		        		<div class="blog-navigation-item">
			        		<h2>Suche</h2>
			        		<form role="search" method="get" action="<?php echo home_url( '/' ); ?>">
			        			<input type="search" results=5 name=s>
			        			<input class="btn" type="submit"value="Suchen">
			        		</form>
			        		<hr>
		        		</div>
		        		<div class="blog-navigation-item">
			        		<h2>Kategorien</h2>
			        			<ul>
				        			<?php
										$args=array(
										  'orderby' => 'name',
										  'order' => 'ASC'
										  );
										$categories=get_categories($args);
										  foreach($categories as $category) { 
										    echo '<li><a href="' . get_category_link( $category->term_id ) . '" title="' . sprintf( __( "Alle Posts in %s ansehen" ), $category->name ) . '" ' . '>' . $category->name.'</a> </li> ';
										    } 
										?>
			        			</ul>
			        		<hr>
		        		</div>
		        		<div class="blog-navigation-item">
		        			<h2>Archiv</h2>
			        			<ul>
									<?php echo translateDateToGerman(wp_get_archives( array( 'type' => 'monthly', 'echo' => '0' ) )); ?>
			        			</ul>
			        		<hr>
		        		</div>
		        	</div>
<?php endif; ?>
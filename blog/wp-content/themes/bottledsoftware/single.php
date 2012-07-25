<?php
/**
 * The Template for displaying all single posts.
 */

function translateDateToGerman($date) {
	$date = str_replace('January', 'Januar', $date);
	$date = str_replace('February', 'Februar', $date);
	$date = str_replace('March', 'März', $date);
	$date = str_replace('May', 'Mai', $date);
	$date = str_replace('June', 'Juni', $date);
	$date = str_replace('July', 'Juli', $date);
	$date = str_replace('October', 'Oktober', $date);
	$date = str_replace('December', 'Dezember', $date);
	
	$date = str_replace('Monday', 'Montag', $date);
	$date = str_replace('Tuesday', 'Dienstag', $date);
	$date = str_replace('Wednesday', 'Mittwoch', $date);
	$date = str_replace('Thursday', 'Donnerstag', $date);
	$date = str_replace('Friday', 'Freitag', $date);
	$date = str_replace('Saturday', 'Samstag', $date);
	$date = str_replace('Sunday', 'Sonntag', $date);
		
	return $date;
}

get_header(); ?>

		<div class="blog-container">
	        	<div class="blog-inner-container">
	        		<div class="blog-summary">

					<?php if ( have_posts() ) : ?>
		
						<?php while ( have_posts() ) : the_post(); ?>
						
						
						<div class="blog-entry">
			        		<h2 class="blog-entry-title"><?php the_title(); ?></h2>
			        		<div class="blog-entry-metadata">
			        			von <?php the_author() ?> | <?php echo translateDateToGerman(get_the_time('j. F Y')) ?> | <?php the_time('G:i') ?> Uhr
			        		</div>
			        		<div class="blog-entry-content">
			        			<?php the_content(__('(Mehr...)')); ?>
			        		</div>
			        		<?php comments_template( '', true ); ?>
		        		</div>
<!-- 		        		<hr style="height:3px;width:90%;margin-left:auto;margin-right:auto;background-color:#2f88cc;"> -->
		
						<?php endwhile; ?>
		
					<?php else : ?>
					

					<div class="blog-entry">
		        		<a href="#" class="blog-entry-title">Kein Artikel gefunden</a>
		        		<div class="blog-entry-content">
		        			Leider konnte kein Artikel zu dem von Ihnen gewählten Suchbegriff gefunden werden.
		        		</div>
	        		</div>

					<?php endif; ?>
	        		</div>
					<?php get_sidebar(); ?>
			
			</div>
		</div>

 </div>
        <!-- <div class="row-fluid">
            <div class="span12 footer">
            </div>
        </div>    -->
  </body>
</html>
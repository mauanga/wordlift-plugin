<?php

/**
 * Add a new term to the Entity Type taxonomy
 *
 * @since 3.53.0
 */

class Wordlift_Install_3_53_0 extends Wordlift_Install {

	/**
	 * @inheritdoc
	 */
	protected static $version = '3.53.1';

	/**
	 * The OnlineBusiness Entity Type term we would like to add.
	 *
	 * @since  3.53.0
	 * @access private
	 * @var array $term The entity type term.
	 */
	private static $term = array(
		'slug'        => 'onlinebusiness',
		'label'       => 'OnlineBusiness',
		'description' => 'An online business.'
	);

	/**
	 * @inheritdoc
	 */
	public function install() {
		$this->log->debug( 'Updating Entity Type terms...' );

		// Get the slug of the term we want to add.
		$term = self::$term;
		$slug = $term['slug'];

		// Check whether the term exists and create it if it doesn't.
		$term_id = $this->get_term_or_create_if_not_exists( $slug );

		// Bail if the term doesn't exists or it's not created.
		if ( empty( $term_id ) ) {
			$this->log->debug( 'Entity Type terms update failed.' );
			return;
		}

		wp_update_term(
			$term_id,
			Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME,
			array(
				'name'        => $term['label'],
				'slug'        => $slug,
				'description' => $term['description'],
				// We give to WP taxonomy just one parent.
				'parent'      => 0,
			)
		);

		$this->log->debug( 'Entity Type terms updated.' );
	}

	/**
	 * Checks whether the term exists and create it if it doesn't.
	 *
	 * @since 3.53.0
	 *
	 * @param string $slug Term slug.
	 *
	 * @return mixed Term id if the term exists or if it's created. False on failure
	 */
	private function get_term_or_create_if_not_exists( $slug ) {
		// Create the term if it does not exist, then get its ID.
		$term_id = term_exists( $slug, Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );

		if ( empty( $term_id ) ) {
			// The term doesn't exist, so create it.
			$maybe_term = wp_insert_term( $slug, Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );
		} else {
			// Get the term.
			$maybe_term = get_term( $term_id['term_id'], Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME, ARRAY_A );
		}

		// Check for errors.
		if ( is_wp_error( $maybe_term ) ) {
			$this->log->info( 'wl_install_entity_type_data [ ' . $maybe_term->get_error_message() . ' ]' );

			return false;
		}

		// Finally return the term id.
		return $maybe_term['term_id'];
	}
}
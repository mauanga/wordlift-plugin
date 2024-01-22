<?php

/**
 * Module:  Google Organization Knowledge Panel
 * Class:   About_Page_Organization_Filter
 *
 * @package Wordlift/modules/google-organization-kp
 *
 * @since 3.53.0
 */

namespace Wordlift\Modules\Google_Organization_Kp;

class About_Page_Organization_Filter {

	/**
	 * @var \Wordlift_Publisher_Service
	 */
	private $wl_publisher_service;

	/**
	 * @var \Wordlift_Configuration_Service
	 */
	private $wl_configuration_service;

	/**
	 * @var \Wordlift_Entity_Service
	 */
	private $wl_entity_service;

	/**
	 * @var \Wordlift_Post_To_Jsonld_Converter
	 */
	private $wl_post_jsonld_service;

	/**
	 * @param \Wordlift_Publisher_Service        $wl_publisher_service
	 * @param \Wordlift_Configuration_Service    $wl_configuration_service
	 * @param \Wordlift_Entity_Service           $wl_entity_service
	 * @param \Wordlift_Post_To_Jsonld_Converter $wl_post_jsonld_service
	 */
	public function __construct(
		$wl_publisher_service,
		$wl_configuration_service,
		$wl_entity_service,
		$wl_post_jsonld_service
	) {
		$this->wl_publisher_service     = $wl_publisher_service;
		$this->wl_configuration_service = $wl_configuration_service;
		$this->wl_entity_service        = $wl_entity_service;
		$this->wl_post_jsonld_service   = $wl_post_jsonld_service;
	}

	/**
	 * Initialize hooks.
	 *
	 * `wl_after_get_jsonld` is the main  filter hook and gets called on almost all JSON-LD conversions.
	 * However, on `WebSite` conversion this hook gets bypassed, so we also hook into `wl_website_jsonld`.
	 *
	 * @since 3.53.0
	 */
	public function register_hooks() {
		add_filter( 'wl_website_jsonld', array( $this, 'add_organization_jsonld' ), 10, 2 );
		add_filter( 'wl_after_get_jsonld', array( $this, 'add_organization_jsonld' ), 10, 2 );
	}

	/**
	 * Utility function to check if the provided $post_id is the `About Us` page specific in the options.
	 *
	 * @param $post_id int The post ID.
	 *
	 * @return bool
	 *
	 * @since 3.53.0
	 */
	public function is_about_page( $post_id ) {
		$about_page_id = get_option( 'wl_about_page_id' );

		if ( ! $about_page_id || empty( $about_page_id ) ) {
			return false;
		}

		return $about_page_id === $post_id;
	}

	/**
	 * Utility function to check if the Publisher exists in the JSON-LD structure already.
	 *
	 * @param $jsonld       array JSON-LD structure.
	 * @param $publisher_id int   Publisher Post ID.
	 *
	 * @return bool
	 *
	 * @since 3.53.0
	 */
	public function is_publisher_entity_in_graph( $jsonld, $publisher_id ) {
		$publisher_uri = $this->wl_entity_service->get_uri( $publisher_id );

		foreach ( $jsonld as $item ) {
			if ( $item && array_key_exists( '@id', $item ) && $item['@id'] === $publisher_uri ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Add the extra fields to the Publisher JSON-LD structure.
	 *
	 * @param &$publisher_jsonld array Reference to the Publisher JSON-LD array within the main JSON-LD array.
	 * @param $publisher_id      int   The Publisher Post ID.
	 *
	 * @since 3.53.0
	 */
	public function expand_publisher_jsonld( &$publisher_jsonld, $publisher_id ) {

		// Add alternativeName if set.
		$alternative_name = $this->wl_configuration_service->get_alternate_name();

		if ( ! empty( $alternative_name ) ) {
			$publisher_jsonld['alternateName'] = $alternative_name;
		}

		/*
		 * Set the logo, only for http://schema.org/ + Organization, LocalBusiness, or OnlineBusiness
		 * as Person doesn't support the logo property.
		 *
		 * @see http://schema.org/logo.
		 */
		$organization_types = array(
			'Organization',
			'LocalBusiness',
			'OnlineBusiness',
		);

		if ( ! in_array( $publisher_jsonld['@type'], $organization_types, true ) ) {
			return;
		}

		// Get the publisher logo.
		$publisher_logo = $this->wl_publisher_service->get_publisher_logo( $publisher_id );

		// Bail out if the publisher logo isn't set.
		if ( false === $publisher_logo ) {
			return;
		}

		/*
		 * Copy over some useful properties.
		 *
		 * @see https://developers.google.com/search/docs/data-types/articles.
		 */
		$publisher_jsonld['logo']['@type'] = 'ImageObject';
		$publisher_jsonld['logo']['url']   = $publisher_logo['url'];

		/*
		 * If you specify a "width" or "height" value you should leave out 'px'.
		 * For example: "width":"4608px" should be "width":"4608".
		 *
		 * @see: https://github.com/insideout10/wordlift-plugin/issues/451.
		 */
		$publisher_jsonld['logo']['width']  = $publisher_logo['width'];
		$publisher_jsonld['logo']['height'] = $publisher_logo['height'];
	}

	/**
	 * Main callback for the filter hooks.
	 *
	 * Conditionally add the Organization data if we are on the `About Us` page, or if
	 * no `About Us` page is set, and we are on the home page.
	 *
	 * @param $jsonld  array JSON-LD structure.
	 * @param $post_id int   Post ID.
	 *
	 * @return mixed
	 *
	 * @since 3.53.0
	 */
	public function add_organization_jsonld( $jsonld, $post_id ) {
		$publisher_id = $this->wl_configuration_service->get_publisher_id();

		// Exit if the Publisher is not set or correctly configured.
		if ( ! isset( $publisher_id ) || $publisher_id === 'none' ) {
			return $jsonld;
		}

		// @@todo what if $post_id is false? i.e. Latest posts as Home Page.
		// I think it's safe. $this->is_about_page() does a comparison, and if $post_id is null then it would return false.

		$is_about_us = $this->is_about_page( $post_id );
		$is_homepage = is_home() || is_front_page();

		// Return when we are not looking at `About Us` page, or the `Home Page` when `About Us` is not set.
		if ( ! ( $is_about_us || ! $is_about_us && $is_homepage ) ) {
			return $jsonld;
		}

		// Add publisher to the JSON-LD if it doesn't exist in the graph.
		if ( ! $this->is_publisher_entity_in_graph( $jsonld, $publisher_id ) ) {
			$publisher_jsonld = $this->wl_post_jsonld_service->convert( $publisher_id );

			// Add a reference to the publisher in the main Entity of the JSON-LD.
			$jsonld[0]['publisher'] = array(
				'@id' => $publisher_jsonld['@id'],
			);

			$jsonld[] = $publisher_jsonld;
		}

		// Add the Organization data to the Publisher JSON-LD.
		$publisher_uri = $this->wl_entity_service->get_uri( $publisher_id );

		foreach ( $jsonld as &$jsonld_item ) {
			if (
				$jsonld_item
				&& array_key_exists( '@id', $jsonld_item )
				&& $jsonld_item['@id'] === $publisher_uri
			) {
				$this->expand_publisher_jsonld( $jsonld_item, $publisher_id );
			}
		}

		return $jsonld;
	}
}

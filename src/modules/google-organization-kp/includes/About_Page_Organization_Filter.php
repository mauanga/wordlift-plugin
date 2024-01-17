<?php

/**
 * Module: 	Google Organization Knowledge Panel
 * Class: 	About_Page_Organization_Filter
 *
 * @since
 * @package Wordlift/modules/google-organization-kp
 */

namespace Wordlift\Modules\Google_Organization_Kp;

use Wordlift\Modules\Google_Organization_Kp\Organization_Extra_Fields_Service;
use Wordlift_Storage_Factory;
use Wordlift_Schema_Service;

class About_Page_Organization_Filter {
	/**
	 * Hook into wl_post_jsonld
	 *
	 * @since
	 */
	public function init() {
		add_filter( 'wl_website_jsonld', array( $this, '_wl_website_jsonld__add_organization_jsonld' ), 10, 3 );
		add_filter( 'wl_after_get_jsonld', array( $this, '_wl_after_get_jsonld__add_organization_jsonld' ), 10, 3 );
	}

	public function _wl_website_jsonld__add_organization_jsonld( $jsonld, $post_id ) {
		return $this->add_organization_jsonld( $jsonld, $post_id );
	}

	public function _wl_after_get_jsonld__add_organization_jsonld( $jsonld, $post_id, $context ) {
		return $this->add_organization_jsonld( $jsonld, $post_id );
	}

	public function is_publisher_entity_in_graph() {
		// @todo
		return;
	}

	public function add_organization_jsonld( $jsonld, $post_id ) {
		$is_about_us = false; // @todo: Check if this is the about us page.
		$is_homepage = is_home() || is_front_page();

		// Return when we are not looking at `About Us` page, or the `Home Page` when `About Us` is not set.
		if ( ! ( $is_about_us || ! $is_about_us && $is_homepage ) ) {
			return $jsonld;
		}

		// Exit if the Publisher is not set or correctly configured.
		if ( ! \Wordlift_Publisher_Service::get_instance()->is_publisher_set() ) {
			return $jsonld;
		}

		// Build the base JSON-LD
		$publisher_id        = \Wordlift_Configuration_Service::get_instance()->get_publisher_id();
		$organization_jsonld = \Wordlift_Post_To_Jsonld_Converter::get_instance()->convert( $publisher_id );

		$schema_service                   = Wordlift_Schema_Service::get_instance();
		$storage_factory                  = Wordlift_Storage_Factory::get_instance();
		$organization_extra_field_service = Organization_Extra_Fields_Service::get_instance();

		// Get custom fields.
		$street_address = $storage_factory->post_meta( $schema_service::FIELD_ADDRESS )->get( $publisher_id );
		$locality       = $storage_factory->post_meta( $schema_service::FIELD_ADDRESS_LOCALITY )->get( $publisher_id );
		$region         = $storage_factory->post_meta( $schema_service::FIELD_ADDRESS_REGION )->get( $publisher_id );
		$country        = $storage_factory->post_meta( $schema_service::FIELD_ADDRESS_COUNTRY )->get( $publisher_id );
		$postal_code    = $storage_factory->post_meta( $schema_service::FIELD_ADDRESS_POSTAL_CODE )->get( $publisher_id );
		$telephone      = $storage_factory->post_meta( $schema_service::FIELD_TELEPHONE )->get( $publisher_id );
		$email          = $storage_factory->post_meta( $schema_service::FIELD_EMAIL )->get( $publisher_id );

		// Set custom fields.

		// If all address fields are available, build the `address` property with its sub properties.
		if (
			isset( $street_address ) && ! empty( $street_address )
			&& isset( $locality ) && ! empty( $locality )
			&& isset( $region ) && ! empty( $region )
			&& isset( $country ) && ! empty( $country )
			&& isset( $postal_code ) && ! empty( $postal_code )
		) {
			$organization_jsonld['address'] = array(
				$organization_jsonld['address']['@type']           => 'PostalAddress',
				$organization_jsonld['address']['streetAddress']   => $street_address,
				$organization_jsonld['address']['addressLocality'] => $locality,
				$organization_jsonld['address']['addressCountry']  => $region,
				$organization_jsonld['address']['addressRegion']   => $country,
				$organization_jsonld['address']['postalCode']      => $postal_code
			);
		}

		if ( isset( $telephone ) && ! empty( $telephone ) ) {
			$organization_jsonld['telephone'] = $telephone;
		}

		if ( isset( $email ) && ! empty( $email ) ) {
			$organization_jsonld['email'] = $email;
		}

		// Set extra fields.
		$extra_fields = $organization_extra_field_service->get_all_field_data();
		foreach( $extra_fields as $label => $value ) {
			$organization_jsonld[$label] = $value;
		}

		return $jsonld;
	}
}
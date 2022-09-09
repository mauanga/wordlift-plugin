<?php
/**
 * Module Name: Pods
 * Description: Integrates pods framework for displaying schema.org fields
 * Experimental: Yes
 *
 * @since   1.0.0
 * @package wordlift
 */

use Wordlift\Entity\Query\Entity_Query_Service;
use Wordlift\Modules\Common\Symfony\Component\Config\FileLocator;
use Wordlift\Modules\Common\Symfony\Component\DependencyInjection\ContainerBuilder;
use Wordlift\Modules\Common\Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Wordlift\Modules\Pods\Definition;
use Wordlift\Object_Type_Enum;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'PODS_VERSION' ) ) {
	return;
}


add_action(
	'plugins_loaded',
	function () {
		// Autoloader for plugin itself.
		if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
			require __DIR__ . '/vendor/autoload.php';
		}

		$container_builder = new ContainerBuilder();
		$loader            = new YamlFileLoader( $container_builder, new FileLocator( __DIR__ ) );
		$loader->load( 'services.yml' );
		$container_builder->compile();
		$container_builder->get( Definition::class );
		pods_register_related_object( 'wlentity', 'WordLift Entity', array( 'simple' => false ) );
	}
);

add_filter(
	'pods_form_ui_field_pick_ajax',
	function ( $result, $name, $value, $field_options ) {

		if ( ! isset( $field_options['pick_object'] ) ) {
			return $result;
		}

		return is_string( $field_options['pick_object'] ) &&
			   'wlentity' === $field_options['pick_object'];
	},
	10,
	4
);

add_filter(
	'pods_api_get_table_info',
	function ( $info, $object_type, $object, $name, $pod, $field ) {

		if ( $field === null || 'wlentity' !== $field->get_arg( 'pick_object', false ) ) {
			return $info;
		}
		// We need to return an non empty array here to prevent pods from querying a table.
		// This is necessary to prevent errors on ui.
		return array( 'foo' => 'bar' );
	},
	10,
	6
);


function wl_pods_transform_data_for_pick_field( $item ) {

	$content = $item->get_content();

	return array(
		'id'        => sprintf( '%s_%d', Object_Type_Enum::to_string( $content->get_object_type_enum() ), $content->get_id() ),
		'icon'      => 'https:\/\/wordlift.localhost\/wp-content\/plugins\/wordlift\/images\/svg\/wl-vocabulary-icon.svg',
		'name'      => $item->get_title() . ' (' . $item->get_schema_type() . ')',
		'edit_link' => $content->get_edit_link(),
		'link'      => $content->get_permalink(),
		'selected'  => false,
	);
}


add_filter(
	'pods_field_pick_data_ajax',
	function ( $data, $name, $_, $field ) {

		if ( ( ! $field instanceof Pods\Whatsit\Field ) || $field->get_arg( 'pick_object', false ) !== 'wlentity' ) {
			return $data;
		}

		$query         = sanitize_text_field( wp_unslash( $_REQUEST['query'] ) );
		$query_service = Entity_Query_Service::get_instance();

		return array_map( 'wl_pods_transform_data_for_pick_field', $query_service->query( $query, $field->get_arg( 'supported_schema_types', array( 'Thing' ) ) ) );

	},
	10,
	4
);


add_filter(
	'pods_field_pick_object_data',
	function ( $_, $name, $value, $options, $pod, $id, $object_params ) {

		$object_params = json_decode( json_encode( $object_params ), true );

		$query_service = Entity_Query_Service::get_instance();

		if ( is_array( $object_params ) && isset( $object_params['options']['pick_object'] )
		 && is_string( $object_params['options']['pick_object'] )
		 && 'wlentity' === $object_params['options']['pick_object']
		 && isset( $object_params['pod']['data']['pod_data']['type'] )
		 && is_string( $object_params['pod']['data']['pod_data']['type'] ) ) {

			$type              = $object_params['pod']['data']['pod_data']['type'];
			$linked_entity_ids = array();

			if ( 'post_type' === $type ) {
				$linked_entities = get_post_meta( $id, $name );
			} elseif ( 'taxonomy' === $type ) {
				$linked_entities = get_term_meta( $id, $name );
			}
			return array_map( 'wl_pods_transform_data_for_pick_field', $query_service->get( $linked_entities ) );

		}

		return $_;

	},
	10,
	7
);



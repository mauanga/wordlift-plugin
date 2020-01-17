<?php
/**
 * The class to hold all the transform functions for the JSON-LD Mapping.
 * Define the {@link Wordlift_Mapping_Transform_Function_Registry} class.
 *
 * @since      3.25.0
 * @package    Wordlift
 * @subpackage Wordlift/includes/sync-mappings
 */
class Wordlift_Mapping_Transform_Function_Registry {
	/**
	 * Holds an array of transformation functions, all the transformation
	 * functions are instance of { @link \Wordlift_Mapping_Transform_Function} Interface
	 *
	 * @since  3.25.0
	 * @access private
	 * @var \Wordlift_Mapping_Validator $validator The {@link Wordlift_Mapping_Validator} instance to test.
	 */
	private $transform_function_array = array();
	/**
	 * Construct a list of transform function array.
	 */
	public function __construct() {
		$this->transform_function_array = apply_filters( 'wordlift_sync_mappings_register_transformation_function', array() );
	}

	/**
	 * Return options required for ui
	 *
	 * @return array An Array of transform function options.
	 */
	public function get_options() {
		$options = array();
		foreach ( $this->transform_function_array as $transform_function ) {
			array_push(
				$options,
				array(
					'label' => $transform_function->get_label(),
					'value' => $transform_function->get_name(),
				)
			);
		}
		return $options;
	}

	/**
	 * Return instance of the transform function.
	 *
	 * @param  String $transform_function_name The name of the transform function which needs to applied.
	 * @return Wordlift_Mapping_Transform_Function|null An Instance of transform function from any one of
	 * the classes extending this interface, if nothing matches null is returned.
	 */
	public function get_transform_function( $transform_function_name ) {
        $this->sync_transformation_functions_from_external_plugins();
        foreach ( $this->transform_function_array as $transform_function_instance ) {
			if ( $transform_function_instance->get_name() === $transform_function_name ) {
				return $transform_function_instance;
			}
		}
		// Returns null if the transform function doesn't match.
		return null;
	}

    /**
     * Sync the transformation function from external plugins to registry.
     */
    private function sync_transformation_functions_from_external_plugins()
    {
        $this->transform_function_array = apply_filters(
            'wordlift_sync_mappings_register_transformation_function',
            $this->transform_function_array
        );
        $this->remove_duplicate_transformation_functions_after_sync();
    }

    /**
     * @return int|void Returns the number of transformation functions present in registry.
     */
    public function get_transform_function_count()
    {
        return count( $this->transform_function_array );
    }

    /**
     * @return array
     */
    private function remove_duplicate_transformation_functions_after_sync()
    {
        // Check for duplication, and remove the duplicate items.
        $transformation_function_names = array();
        $transformation_functions = array();
        foreach ($this->transform_function_array as $transformation_function) {
            if (!in_array($transformation_function->get_name(), $transformation_function_names)) {
                array_push($transformation_function_names, $transformation_function->get_name());
                array_push($transformation_functions, $transformation_function);
            }
        }
        $this->transform_function_array = $transformation_functions;
    }
}

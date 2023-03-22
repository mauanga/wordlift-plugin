<?php

namespace Wordlift\Modules\Gardening_Kg\Main_Entity;

use Wordlift\Modules\Gardening_Kg\Gardening_Kg_Store;

class Gardening_Kg_Post_Store implements Gardening_Kg_Store {

	public function list_items( $id_greater_than, $batch_size ) {
		global $wpdb;

		return array_map(
			function ( $value ) {
				return (int) $value;
			},
			$wpdb->get_col(
				$wpdb->prepare(
					"SELECT ID FROM $wpdb->posts WHERE ID > %d LIMIT %d",
					$id_greater_than,
					$batch_size
				)
			)
		);
	}

}

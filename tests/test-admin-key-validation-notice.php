<?php

use Wordlift\Admin\Key_Validation_Notice;

/**
 * @since 3.27.8
 * @author Naveen Muthusamy <naveen@wordlift.io>
 * @group admin
 */
class Admin_Key_Notice_Test extends Wordlift_Unit_Test_Case {


	public function setUp() {
		parent::setUp();
		global $wp_filter;
		$wp_filter = array();

	}

	public function test_instance_not_null() {
		$instance = new Key_Validation_Notice( null );
		$this->assertNotNull( $instance );
	}

	public function test_when_key_validation_is_errored_should_show_error() {
		// Create a mock key validation service.
		$stub = $this->getMockBuilder( Wordlift_Key_Validation_Service::class );

		$stub->method('is_key_valid')
		     ->willReturn('false');

		$instance = new Key_Validation_Notice( null );
		ob_start();
		do_action( 'admin_notices' );
		$html = ob_get_contents();
		ob_end_clean();
		$this->assertNotNull( $html );
		$this->assertTrue( strlen( $html ) !== 0 );
	}


}
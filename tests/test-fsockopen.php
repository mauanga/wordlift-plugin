<?php
/**
 * Tests: fsockopen Test.
 *
 * Test the {@link Requests_Transport_fsockopen} with WordLift's api server, since
 * we had issues of timeouts:
 * https://github.com/insideout10/wordlift-plugin/issues/528
 *
 * @since      3.12.2
 * @package    Wordlift
 * @subpackage Wordlift/tests
 */

/**
 * Define the {@link Wordlift_FsockOpen_Test} class.
 *
 * @since      3.12.2
 * @package    Wordlift
 * @subpackage Wordlift/tests
 */
class Wordlift_FsockOpen_Test extends Wordlift_Unit_Test_Case {

	/**
	 * Test `fsockopen` with https://api.wordlift.it
	 *
	 * @since 3.12.2
	 */
	public function test() {

		$transport = new Requests_Transport_fsockopen();

		$response = $transport->request( WL_CONFIG_WORDLIFT_API_URL_DEFAULT_VALUE, array(), array(), self::get_default_options() );

	}

	/**
	 * Get the default options for the transport as defined in {@link Requests}.
	 *
	 * @since 3.12.2
	 * @return array An array of options.
	 */
	private static function get_default_options() {
		$defaults = array(
			'timeout'          => 10,
			'connect_timeout'  => 10,
			'useragent'        => 'wordlift/Wordlift_FsockOpen_Test',
			'protocol_version' => 1.1,
			'redirected'       => 0,
			'redirects'        => 10,
			'follow_redirects' => true,
			'blocking'         => true,
			'type'             => 'GET',
			'data_format'      => 'query',
			'filename'         => false,
			'auth'             => false,
			'proxy'            => false,
			'cookies'          => false,
			'max_bytes'        => false,
			'idn'              => true,
			'hooks'            => new Requests_Hooks(),
			'transport'        => null,
			'verify'           => Requests::get_certificate_path(),
			'verifyname'       => true,
		);

		return $defaults;
	}

}

<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Wordlift\Modules\Common\Symfony\Component\DependencyInjection;

use Wordlift\Modules\Common\Symfony\Component\ExpressionLanguage\ExpressionLanguage as BaseExpressionLanguage;
/**
 * Adds some function to the default ExpressionLanguage.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 *
 * @see ExpressionLanguageProvider
 */
class ExpressionLanguage extends BaseExpressionLanguage {

	/**
	 * {@inheritdoc}
	 */
	public function __construct( $cache = null, array $providers = array(), callable $serviceCompiler = null ) {
		// prepend the default provider to let users override it easily
		\array_unshift( $providers, new ExpressionLanguageProvider( $serviceCompiler ) );
		parent::__construct( $cache, $providers );
	}
}

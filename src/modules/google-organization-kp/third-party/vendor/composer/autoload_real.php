<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit49a68bb2d005be69073b7c260dd70bff
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Wordlift_Modules_Google_Organization_Kp_Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Wordlift_Modules_Google_Organization_Kp_Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit49a68bb2d005be69073b7c260dd70bff', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Wordlift_Modules_Google_Organization_Kp_Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit49a68bb2d005be69073b7c260dd70bff', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Wordlift_Modules_Google_Organization_Kp_Composer\Autoload\ComposerStaticInit49a68bb2d005be69073b7c260dd70bff::getInitializer($loader));

        $loader->setClassMapAuthoritative(true);
        $loader->register(true);

        return $loader;
    }
}

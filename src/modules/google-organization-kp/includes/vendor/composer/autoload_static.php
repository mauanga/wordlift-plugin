<?php

// autoload_static.php @generated by Composer

namespace Wordlift_Modules_Google_Organization_Kp_Composer\Autoload;

class ComposerStaticInit546267c9f0ed88cb2edc07161b61968e
{
    public static $classMap = array (
        'ComposerAutoloaderInit546267c9f0ed88cb2edc07161b61968e' => __DIR__ . '/..' . '/composer/autoload_real.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Wordlift\\Modules\\Google_Organization_Kp\\Organization_Knowledge_Panel_Service' => __DIR__ . '/../..' . '/Organization_Knowledge_Panel_Service.php',
        'Wordlift\\Modules\\Google_Organization_Kp\\Rest_Controller' => __DIR__ . '/../..' . '/Rest_Controller.php',
        'Wordlift_Modules_Google_Organization_Kp_Composer\\Autoload\\ClassLoader' => __DIR__ . '/..' . '/composer/ClassLoader.php',
        'Wordlift_Modules_Google_Organization_Kp_Composer\\Autoload\\ComposerStaticInit546267c9f0ed88cb2edc07161b61968e' => __DIR__ . '/..' . '/composer/autoload_static.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit546267c9f0ed88cb2edc07161b61968e::$classMap;

        }, null, ClassLoader::class);
    }
}

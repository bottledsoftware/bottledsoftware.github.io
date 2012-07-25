<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'WordPress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'pw4root');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'lyOg|YW.Fg;/-x*#y=r+%y(ee@]{12sWPytWeV$JmVwuc=%k8&_+wNYDIenz#X(C');
define('SECURE_AUTH_KEY',  '87~:WOM|IHInKLb[{C!@yA$nH/b&E)0oi,J_Vg/v-|,t=HAimDZbhSDH}zwR_N@A');
define('LOGGED_IN_KEY',    'Q=KPZd`/ j;[038|?AHcB%6xk6X X5/A|3(n,VsLYccGBUj~!k]rFe$I,r:VV-St');
define('NONCE_KEY',        'XU$w_/ ~ 6^hL$a[F6PB}e7wGg$iV1p;_O6~)MkXg6#-w`^oYqXe>%{><(P-!&X+');
define('AUTH_SALT',        '][nkQUA3rBUoH]Vf2$R:IWN4FE@y,s[pmDw4`J,%lY3ws5v,q+3bojNd?rg{-O_D');
define('SECURE_AUTH_SALT', 're.8y@D0i :pyTMn~uD*5FJSzp&J-^WHRk%y)f>qsT%FW^u~U:d Yp3aO;QFTK;f');
define('LOGGED_IN_SALT',   ':.c:NC<wA_/bl{jrjySI,}Smt7tD[lq=JR%M+/H+#&*H5G+^t~n;CVw}@D+Kb-Bj');
define('NONCE_SALT',       'fZme5+9]d@D1m:!l<,J9BR;6+yhZJ30D+>&$WvvTX96kiGNv;!hS]K^l8KVj9fTJ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', 'de_DE');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

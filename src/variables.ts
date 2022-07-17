/**
 * The base path of the project.
 *
 * Currently, it is used by the images (indirectly) & editor voices.
 *
 * @note if this value changes, the package.json homepage should change too.
 * @see EditorVoices
 */
export const BASE_PATH = 'smm-encyclopedia';

/**
 * A basic representation of the base path.
 * It is a simple alias for the name to use instead of <b>typeof BASE_PATH</b>.
 *
 * @see BASE_PATH
 */
export type BasePath = typeof BASE_PATH;

/**
 * Define if the application is in production.
 */
export const isInProduction = process.env.NODE_ENV === 'production';

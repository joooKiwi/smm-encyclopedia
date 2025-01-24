/**
 * The base path of the project.
 *
 * Currently, it is used by the images (indirectly) & editor voices.
 *
 * @note if this value changes, the package.json homepage should change too.
 * @see EditorVoices
 */
export const BASE_PATH = 'smm-encyclopedia'

/**
 * A basic representation of the base path.
 * It is a type-alias for the name to use instead of <b>typeof BASE_PATH</b>.
 *
 * @see BASE_PATH
 */
export type BasePath = typeof BASE_PATH

/** Define if the application is in development */
export const isInDevelopment = import.meta.env.DEV

/** Define if the application is in production */
export const isInProduction = import.meta.env.PROD

/** The resource path from GitHub. The folder aliased is in the local project "resources" folder */
export const RESSOURCE_PATH = 'https://github.com/joooKiwi/smm-encyclopedia/raw/main/resources/'

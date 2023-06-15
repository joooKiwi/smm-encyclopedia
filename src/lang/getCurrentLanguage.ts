import {ProjectLanguages} from 'lang/ProjectLanguages'

/**
 * Get the current navigator language
 * and return the {@link ProjectLanguages} if there is one associated.
 *
 * Otherwise, it returns the {@link ProjectLanguages.default default language}.
 *
 * @see https://phrase.com/blog/posts/detecting-a-users-locale/
 */
export function getCurrentLanguage(): ProjectLanguages {
    const locale = (navigator.languages?.[0] ?? navigator.language).trim().toLowerCase()

    return ProjectLanguages.values.find(it => locale.includes(it.projectAcronym.toLowerCase()))
        ?? ProjectLanguages.default
}
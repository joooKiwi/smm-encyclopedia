import {ProjectLanguages} from 'lang/ProjectLanguages'

/** The user {@link ProjectLanguages language} held in order to do the calculation only once */
let userLanguage: ProjectLanguages

/**
 * Get the current navigator language
 * and return the {@link ProjectLanguages} if there is one associated.
 *
 * Otherwise, it returns the {@link ProjectLanguages.default default language}.
 *
 * @see https://phrase.com/blog/posts/detecting-a-users-locale/
 */
export function getUserLanguage(): ProjectLanguages {
    if (userLanguage != null)
        return userLanguage

    const locale = (navigator.languages?.[0] ?? navigator.language).trim().toLowerCase()

    return userLanguage = ProjectLanguages.values.find(it => locale.includes(it.projectAcronym.toLowerCase()))
        ?? ProjectLanguages.default
}

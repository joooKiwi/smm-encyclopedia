import type {Nullable} from '@joookiwi/type'
import type {Location} from 'history'

import type {EveryPossibleRoutes} from 'route/EveryRoutes.types'

import {ColorThemes}      from 'color/ColorThemes'
import {ProjectLanguages} from 'lang/ProjectLanguages'

import ColorCompanion =    ColorThemes.Companion
import LanguageCompanion = ProjectLanguages.Companion

/**
 * Retrieve the route URL from a {@link Location} via its {@link Location.pathname path}
 * and replace the {@link ProjectLanguages language} if it has been received
 *
 * @param location The {@link Location} to retrieve its {@link Location.pathname path}
 * @param language The {@link ProjectLanguages language} to replace in the url
 * @param color    The {@link ColorThemes colour} to replace in the url
 */
export function routeFromLocation({pathname,}: Location, language?: Nullable<ProjectLanguages>, color?: Nullable<ColorThemes>,): EveryPossibleRoutes
export function routeFromLocation({pathname,}: Location, language?: Nullable<ProjectLanguages>, color?: Nullable<ColorThemes>,) {
    language ??= LanguageCompanion.current
    color ??= ColorCompanion.current

    if (language.isCurrent)
        if (color.isCurrent)
            return pathname
        else
            return pathname.replace(ColorCompanion.current.colorMode, color.colorMode,)
    if (color.isCurrent)
        return pathname.replace(LanguageCompanion.current.projectAcronym, language.projectAcronym,)
    return pathname.replace(LanguageCompanion.current.projectAcronym, language.projectAcronym,)
        .replace(ColorCompanion.current.colorMode, color.colorMode,)
}

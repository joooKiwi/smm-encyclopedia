import type {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'
import type {ColorThemes}                                from 'color/ColorThemes'
import type {CompanionEnumRetrievableInUrl}              from 'util/enumerable/companion/CompanionEnumRetrievableInUrl'

export interface CompanionEnumDeclaration_ColorThemes
    extends CompanionEnumWithCurrentAndSetCurrentEvent<ColorThemes, typeof ColorThemes>,
        CompanionEnumRetrievableInUrl<ColorThemes, typeof ColorThemes> {

    readonly PREFIX: 'color-'

    readonly LIGHT_MEDIA_QUERY: MediaQueryList
    readonly DARK_MEDIA_QUERY: MediaQueryList

}

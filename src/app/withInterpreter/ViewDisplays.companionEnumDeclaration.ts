import type {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'
import type {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import type {NullOr}                                     from '@joookiwi/type'

export interface CompanionEnumDeclaration_ViewDisplays
    extends CompanionEnumWithCurrentAndSetCurrentEvent<ViewDisplays, typeof ViewDisplays> {

    /**
     * Get a selected {@link ViewDisplays} from an url or <b>null</b> if it doesn't exist
     *
     * @param url The url to find the value
     */
    getValueInUrl(url: string,): NullOr<ViewDisplays>

}

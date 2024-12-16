import type {NullOr} from '@joookiwi/type'

import type {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'
import type {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'

export interface CompanionEnumDeclaration_ViewDisplays
    extends CompanionEnumWithCurrentAndSetCurrentEvent<ViewDisplays, typeof ViewDisplays> {

    /**
     * Get a selected {@link ViewDisplays} from an url or <b>null</b> if it doesn't exist
     *
     * @param url The url to find the value
     */
    findInUrl(url: string,): NullOr<ViewDisplays>

    /**
     * Get a selected {@link ViewDisplays} from a name or <b>null</b> if it doesn't exist
     *
     * @param name The name to find the value
     */
    findInName(name: string,): NullOr<ViewDisplays>

}

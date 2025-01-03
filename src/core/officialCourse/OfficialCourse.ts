import type {CollectionHolder} from '@joookiwi/collection'
import type {NullOr}           from '@joookiwi/type'

import type {GameStyles}                from 'core/gameStyle/GameStyles'
import type {MysteryMushrooms}          from 'core/mysteryMushroom/MysteryMushrooms'
import type {PossibleAmountOfTime}      from 'core/officialCourse/loader.types'
import type {Themes}                    from 'core/theme/Themes'
import type {Name}                      from 'lang/name/Name'
import type {NameTraitWithADescription} from 'lang/name/NameTraitWithADescription'

export interface OfficialCourse
    extends NameTraitWithADescription<string, string, Name<string>> {

    readonly reward: CollectionHolder<MysteryMushrooms>

    readonly releaseDate: Date
    readonly removalDate: NullOr<| Date | UnknownReference>

    readonly gameStyle: GameStyles

    readonly courseThemeInTheMainArea: Themes
    readonly courseThemeInTheSubArea: NullOr<Themes>

    readonly amountOfTime: PossibleAmountOfTime

}

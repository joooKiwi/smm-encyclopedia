import type {GameStyles}                from 'core/gameStyle/GameStyles'
import type {MysteryMushrooms}          from 'core/mysteryMushroom/MysteryMushrooms'
import type {PossibleAmountOfTime}      from 'core/officialCourse/loader.types'
import type {Themes}                    from 'core/theme/Themes'
import type {Name}                      from 'lang/name/Name'
import type {NameTraitWithADescription} from 'lang/name/NameTraitWithADescription'

export interface OfficialCourse
    extends NameTraitWithADescription<string, string, Name<string>> {

    get reward(): readonly MysteryMushrooms[]


    get releaseDate(): Date

    get removalDate(): NullOr<| Date | UnknownReference>


    get gameStyle(): GameStyles


    get courseThemeInTheMainArea(): Themes

    get courseThemeInTheSubArea(): NullOr<Themes>


    get amountOfTime(): PossibleAmountOfTime

}

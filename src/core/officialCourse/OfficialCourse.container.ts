import type {CollectionHolder} from '@joookiwi/collection'
import type {NullOr}           from '@joookiwi/type'

import type {GameStyles}           from 'core/gameStyle/GameStyles'
import type {MysteryMushrooms}     from 'core/mysteryMushroom/MysteryMushrooms'
import type {PossibleAmountOfTime} from 'core/officialCourse/loader.types'
import type {OfficialCourse}       from 'core/officialCourse/OfficialCourse'
import type {Themes}               from 'core/theme/Themes'
import type {Name}                 from 'lang/name/Name'

import {ClassContainingANameWithADescription} from 'lang/name/ClassContainingANameWithADescription'

export class OfficialCourseContainer
    extends ClassContainingANameWithADescription<string, string, Name<string>>
    implements OfficialCourse {

    //region -------------------- Fields --------------------

    readonly #reward
    readonly #releaseDate
    readonly #removalDate
    readonly #gameStyle
    readonly #courseThemeInTheMainArea
    readonly #courseThemeInTheSubArea
    readonly #amountOfTime

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(
        name: Name<string>, description: Name<string>,
        reward: CollectionHolder<MysteryMushrooms>,
        releaseDate: Date, removalDate: NullOr<| Date | UnknownReference>,
        gameStyle: GameStyles,
        courseThemeInMainArea: Themes, courseThemeInSubArea: NullOr<Themes>,
        amountOfTime: PossibleAmountOfTime,) {
        super(name, description,)
        this.#reward = reward
        this.#releaseDate = releaseDate
        this.#removalDate = removalDate
        this.#gameStyle = gameStyle
        this.#courseThemeInTheMainArea = courseThemeInMainArea
        this.#courseThemeInTheSubArea = courseThemeInSubArea
        this.#amountOfTime = amountOfTime
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get reward() { return this.#reward }

    public get releaseDate() { return this.#releaseDate }
    public get removalDate() { return this.#removalDate }

    public get gameStyle() { return this.#gameStyle }

    public get courseThemeInTheMainArea() { return this.#courseThemeInTheMainArea }
    public get courseThemeInTheSubArea() {  return this.#courseThemeInTheSubArea }

    public get amountOfTime() { return this.#amountOfTime }

    //endregion -------------------- Getter methods --------------------

}

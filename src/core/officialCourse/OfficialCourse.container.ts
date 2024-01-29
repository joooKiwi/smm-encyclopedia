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
    readonly #courseTheme
    readonly #courseThemeInTheMainArea
    readonly #courseThemeInTheSubArea
    readonly #amountOfTime

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(
        name: Name<string>, description: Name<string>,
        reward: readonly MysteryMushrooms[],
        releaseDate: Date, removalDate: NullOr<| Date | UnknownReference>,
        gameStyle: GameStyles,
        courseTheme: readonly [Themes, NullOr<Themes>,],
        amountOfTime: PossibleAmountOfTime,) {
        super(name, description,)
        this.#reward = reward
        this.#releaseDate = releaseDate
        this.#removalDate = removalDate
        this.#gameStyle = gameStyle
        this.#courseTheme = courseTheme
        this.#courseThemeInTheMainArea = courseTheme[0]
        this.#courseThemeInTheSubArea = courseTheme[1]
        this.#amountOfTime = amountOfTime
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get reward(): readonly MysteryMushrooms[] {
        return this.#reward
    }


    public get releaseDate(): Date {
        return this.#releaseDate
    }

    public get removalDate(): NullOr<| Date | UnknownReference> {
        return this.#removalDate
    }


    public get gameStyle(): GameStyles {
        return this.#gameStyle
    }


    public get courseThemes(): readonly [Themes, NullOr<Themes>,] {
        return this.#courseTheme
    }

    public get courseThemeInTheMainArea(): Themes {
        return this.#courseThemeInTheMainArea
    }

    public get courseThemeInTheSubArea(): NullOr<Themes> {
        return this.#courseThemeInTheSubArea
    }


    public get amountOfTime(): PossibleAmountOfTime {
        return this.#amountOfTime
    }

    //endregion -------------------- Getter methods --------------------

}

import type {NullOr} from '@joookiwi/type'

import type {GameStyles}                                                                             from 'core/gameStyle/GameStyles'
import type {SampleCourse}                                                                           from 'core/sampleCourse/SampleCourse'
import type {PossibleAmountOfTime, PossibleFirstNumberInFirst10MarioChallenges, PossibleWorldNumber} from 'core/sampleCourse/loader.types'
import type {Themes}                                                                                 from 'core/theme/Themes'
import type {Name}                                                                                   from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class SampleCourseContainer
    extends ClassContainingAName<string>
    implements SampleCourse {

    //region -------------------- Fields --------------------

    readonly #worldNumber
    readonly #firstNumberInFirst10MarioChallenges
    readonly #gameStyle
    readonly #themeInMainArea
    readonly #themeInSubArea
    readonly #amountOfTime

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       worldNumber: PossibleWorldNumber,
                       firstNumberInFirst10MarioChallenges: PossibleFirstNumberInFirst10MarioChallenges,
                       gameStyle: GameStyles,
                       themeInMainArea: Themes,
                       themeInSubArea: NullOr<Themes>,
                       amountOfTime: PossibleAmountOfTime,) {
        super(name,)
        this.#worldNumber = worldNumber
        this.#firstNumberInFirst10MarioChallenges = firstNumberInFirst10MarioChallenges
        this.#gameStyle = gameStyle
        this.#themeInMainArea = themeInMainArea
        this.#themeInSubArea = themeInSubArea
        this.#amountOfTime = amountOfTime
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get worldNumber(): PossibleWorldNumber {
        return this.#worldNumber
    }

    public get firstNumberInFirst10MarioChallenges(): PossibleFirstNumberInFirst10MarioChallenges {
        return this.#firstNumberInFirst10MarioChallenges
    }

    public get gameStyle(): GameStyles {
        return this.#gameStyle
    }

    public get themeInMainArea(): Themes {
        return this.#themeInMainArea
    }

    public get themeInSubArea(): NullOr<Themes> {
        return this.#themeInSubArea
    }

    public get amountOfTime(): PossibleAmountOfTime {
        return this.#amountOfTime
    }

    //endregion -------------------- Getter methods --------------------

}
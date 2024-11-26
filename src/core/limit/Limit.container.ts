import type {NullOrString} from '@joookiwi/type'

import type {Games}                                                                                                                         from 'core/game/Games'
import type {AlternativeLimit}                                                                                                              from 'core/limit/AlternativeLimit'
import type {Limit}                                                                                                                         from 'core/limit/Limit'
import type {PossibleAcronym}                                                                                                               from 'core/limit/Limits.types'
import type {LimitTypes}                                                                                                                    from 'core/limit/LimitTypes'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount, PossibleLimitDescription} from 'core/limit/loader.types'
import type {Name}                                                                                                                          from 'lang/name/Name'

import {NOT_APPLICABLE}                       from 'util/commonVariables'
import {GameMap}                              from 'util/collection/GameMap'
import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'

export class LimitContainer
    extends ClassContainingANameAndAnAlternative<string, string, AlternativeLimit>
    implements Limit {

    //region -------------------- Fields --------------------

    readonly #acronym
    readonly #type
    readonly #limitAmountInSMM1AndSMM3DS
    readonly #isUnknownLimitInSMM1AndSMM3DS
    readonly #limitAmountInSMM2
    readonly #isUnknownLimitInSMM2
    readonly #amountComment
    readonly #description

    #isInSMM1OrSMM3DS?: boolean
    #gameMap?: GameMap<Limit>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       acronym: NullOrString<PossibleAcronym>,
                       alternative: AlternativeLimit,
                       type: LimitTypes,
                       limitAmountInSMM1AndSMM3DS: | PossibleLimitAmount_SMM1And3DS_Amount | NotApplicable, isUnknownLimitInSMM1AndSMM3DS: boolean,
                       limitAmountInSMM2: PossibleLimitAmount_SMM2_Amount, isUnknownLimitInSMM2: boolean,
                       amountComment: NullOrString<PossibleLimitAmount_Comment>,
                       description: PossibleLimitDescription,) {
        super(name, alternative,)
        this.#acronym = acronym
        this.#type = type
        this.#limitAmountInSMM1AndSMM3DS = limitAmountInSMM1AndSMM3DS
        this.#isUnknownLimitInSMM1AndSMM3DS = isUnknownLimitInSMM1AndSMM3DS
        this.#limitAmountInSMM2 = limitAmountInSMM2
        this.#isUnknownLimitInSMM2 = isUnknownLimitInSMM2
        this.#amountComment = amountComment
        this.#description = description
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): LimitTypes {
        return this.#type
    }

    public get acronym() {
        return this.#acronym
    }

    public get alternativeAcronym(): this['alternativeContainer']['acronym'] {
        return this.alternativeContainer.acronym
    }

    public get description() {
        return this.#description
    }

    //region -------------------- Amount --------------------

    public get limitAmountInSMM1AndSMM3DS() {
        return this.#limitAmountInSMM1AndSMM3DS
    }

    public get isUnknownLimitInSMM1AndSMM3DS() {
        return this.#isUnknownLimitInSMM1AndSMM3DS
    }


    public get limitAmountInSMM2() {
        return this.#limitAmountInSMM2
    }

    public get isUnknownLimitInSMM2() {
        return this.#isUnknownLimitInSMM2
    }


    public get amountComment() {
        return this.#amountComment
    }

    //endregion -------------------- Amount --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Game properties --------------------

    public get isInSuperMarioMaker1Or3DS() {
        return this.#isInSMM1OrSMM3DS ??= this.limitAmountInSMM1AndSMM3DS !== NOT_APPLICABLE
    }

    public get isInSuperMarioMaker1() {
        return this.isInSuperMarioMaker1Or3DS
    }

    public get isInSuperMarioMakerFor3DS() {
        return this.isInSuperMarioMaker1Or3DS
    }

    public get isInSuperMarioMaker2(): true {
        return true
    }

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Game properties --------------------

}

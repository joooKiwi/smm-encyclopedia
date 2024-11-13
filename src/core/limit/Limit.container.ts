import type {NullOrString} from '@joookiwi/type'
import {lazyOf}            from '@joookiwi/lazy'

import type {Games}                                                                                               from 'core/game/Games'
import type {AlternativeLimit, Limit, LimitWithPossibleAlternativeLimit}                                          from 'core/limit/Limit'
import type {PossibleAcronym}                                                                                     from 'core/limit/Limits.types'
import type {LimitTypes}                                                                                          from 'core/limit/LimitTypes'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/limit/loader.types'
import type {Name}                                                                                                from 'lang/name/Name'

import {NOT_APPLICABLE}                       from 'util/commonVariables'
import {GameMap}                              from 'util/collection/GameMap'
import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'

export class LimitContainer
    extends ClassContainingANameAndAnAlternative<string, string, AlternativeLimit>
    implements LimitWithPossibleAlternativeLimit {

    //region -------------------- Fields --------------------

    readonly #acronym
    readonly #type
    readonly #limitAmountInSMM1AndSMM3DS
    readonly #isUnknownLimitInSMM1AndSMM3DS
    readonly #limitAmountInSMM2
    readonly #isUnknownLimitInSMM2
    readonly #amountComment

    #isInSMM1OrSMM3DS?: boolean
    #gameMap?: GameMap<boolean, Limit>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       acronym: NullOrString<PossibleAcronym>,
                       alternative: AlternativeLimit,
                       type: LimitTypes,
                       limitAmountInSMM1AndSMM3DS: | PossibleLimitAmount_SMM1And3DS_Amount | NotApplicable, isUnknownLimitInSMM1AndSMM3DS: boolean,
                       limitAmountInSMM2: PossibleLimitAmount_SMM2_Amount, isUnknownLimitInSMM2: boolean,
                       amountComment: NullOrString<PossibleLimitAmount_Comment>,) {
        super(name, lazyOf(alternative,),)
        this.#acronym = acronym
        this.#type = type
        this.#limitAmountInSMM1AndSMM3DS = limitAmountInSMM1AndSMM3DS
        this.#isUnknownLimitInSMM1AndSMM3DS = isUnknownLimitInSMM1AndSMM3DS
        this.#limitAmountInSMM2 = limitAmountInSMM2
        this.#isUnknownLimitInSMM2 = isUnknownLimitInSMM2
        this.#amountComment = amountComment
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): LimitTypes {
        return this.#type
    }

    public get acronym() {
        return this.#acronym
    }

    public get amountComment() {
        return this.#amountComment
    }

    //region -------------------- Alternative entity limit --------------------

    public get alternativeAcronym(): this['alternativeContainer']['acronym'] {
        return this.alternativeContainer.acronym
    }

    public get alternativeAmountComment(): null {
        return null
    }

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get alternativeLimitAmountInSMM1AndSMM3DS(): this['alternativeContainer']['limitAmountInSMM1AndSMM3DS'] {
        return this.alternativeContainer.limitAmountInSMM1AndSMM3DS
    }

    public get isUnknownAlternativeLimitInSMM1AndSMM3DS(): this['alternativeContainer']['isUnknownLimitInSMM1AndSMM3DS'] {
        return this.alternativeContainer.isUnknownLimitInSMM1AndSMM3DS
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get alternativeLimitAmountInSMM2(): this['alternativeContainer']['limitAmountInSMM2'] {
        return this.alternativeContainer.limitAmountInSMM2
    }

    public get isUnknownAlternativeLimitInSMM2(): this['alternativeContainer']['isUnknownLimitInSMM2'] {
        return this.alternativeContainer.isUnknownLimitInSMM2
    }

    //endregion -------------------- SMM2 limit --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get limitAmountInSMM1AndSMM3DS() {
        return this.#limitAmountInSMM1AndSMM3DS
    }

    public get isUnknownLimitInSMM1AndSMM3DS() {
        return this.#isUnknownLimitInSMM1AndSMM3DS
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get limitAmountInSMM2() {
        return this.#limitAmountInSMM2
    }

    public get isUnknownLimitInSMM2() {
        return this.#isUnknownLimitInSMM2
    }

    //endregion -------------------- SMM2 limit --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Game properties --------------------

    public get isInSuperMarioMaker1Or3DS() {
        return this.#isInSMM1OrSMM3DS ??= this.limitAmountInSMM1AndSMM3DS !== NOT_APPLICABLE
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.isInSuperMarioMaker1Or3DS
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
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

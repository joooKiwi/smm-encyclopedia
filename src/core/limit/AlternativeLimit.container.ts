import type {Lazy} from '@joookiwi/lazy'
import type {NullOr} from '@joookiwi/type'
import {lazy}      from '@joookiwi/lazy'

import type {Games}                      from 'core/game/Games'
import type {AlternativeLimit, Limit}    from 'core/limit/Limit'
import type {PossibleAlternativeAcronym} from 'core/limit/Limits.types'
import type {LimitTypes}                 from 'core/limit/LimitTypes'
import type {Name}                       from 'lang/name/Name'

import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'
import {NOT_APPLICABLE}                       from 'util/commonVariables'
import {GameMap}                              from 'util/collection/GameMap'

export class AlternativeLimitContainer
    extends ClassContainingANameAndAnAlternative<string, string, AlternativeLimit>
    implements AlternativeLimit {

    //region -------------------- Fields --------------------

    readonly #acronym
    readonly #type

    #isInSMM1OrSMM3DS?: boolean
    #gameMap?: GameMap<boolean, Limit>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>, acronym: NullOr<PossibleAlternativeAcronym>, regularLimit: Lazy<LimitTypes>,) {
        super(name, lazy(() => this,),)
        this.#acronym = acronym
        this.#type = regularLimit
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): LimitTypes {
        return this.#type.value
    }

    public get acronym(): NullOr<PossibleAlternativeAcronym> {
        return this.#acronym
    }

    //region -------------------- Alternative entity limit --------------------

    public override get alternativeContainer(): this {
        return this
    }


    public get alternativeAcronym(): this['acronym'] {
        return this.acronym
    }

    public get alternativeAmountComment(): this['amountComment'] {
        return this.amountComment
    }

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get alternativeLimitAmountInSMM1AndSMM3DS(): this['limitAmountInSMM1AndSMM3DS'] {
        return this.limitAmountInSMM1AndSMM3DS
    }

    public get isUnknownAlternativeLimitInSMM1AndSMM3DS(): this['isUnknownLimitInSMM1AndSMM3DS'] {
        return this.isUnknownLimitInSMM1AndSMM3DS
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get alternativeLimitAmountInSMM2(): this['limitAmountInSMM2'] {
        return this.limitAmountInSMM2
    }

    public get isUnknownAlternativeLimitInSMM2(): this['isUnknownLimitInSMM2'] {
        return this.isUnknownLimitInSMM2
    }

    //endregion -------------------- SMM2 limit --------------------

    //endregion -------------------- Alternative entity limit --------------------

    public get amountComment() { return null }

    public get limitAmountInSMM1AndSMM3DS() { return null }
    public get isUnknownLimitInSMM1AndSMM3DS() { return false }

    public get limitAmountInSMM2() { return null }
    public get isUnknownLimitInSMM2() { return false }

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

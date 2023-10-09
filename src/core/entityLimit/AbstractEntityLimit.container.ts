import type {Lazy} from '@joookiwi/lazy'

import type {AlternativeEntityLimit, EntityLimit}                                                                 from 'core/entityLimit/EntityLimit'
import type {EntityLimitTypes}                                                                                    from 'core/entityLimit/EntityLimitTypes'
import type {PossibleAcronym, PossibleAlternativeAcronym}                                                         from 'core/entityLimit/EntityLimits.types'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/entityLimit/loader.types'
import type {EntityLimitAmount}                                                                                   from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                                                                                                from 'lang/name/Name'

import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'
import {NOT_APPLICABLE}                       from 'util/commonVariables'
import {GameMap}                              from 'util/collection/GameMap'

export abstract class AbstractEntityLimitContainer<ACRONYM extends NullOr<| PossibleAcronym | PossibleAlternativeAcronym>, >
    extends ClassContainingANameAndAnAlternative<string, string, AlternativeEntityLimit>
    implements EntityLimit {

    //region -------------------- Fields --------------------

    readonly #acronym: ACRONYM
    readonly #typeHolder
    readonly #limitHolder

    #isInSMM1OrSMM3DS?: boolean
    #gameMap?: GameMap<boolean, EntityLimit>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(name: Name<string>,
                          acronym: ACRONYM,
                          alternative: Lazy<AlternativeEntityLimit>,
                          type: Lazy<EntityLimitTypes>,
                          limitAmount: EntityLimitAmount,) {
        super(name, alternative,)
        this.#acronym = acronym
        this.#typeHolder = type
        this.#limitHolder = limitAmount
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Type --------------------

    public get type(): EntityLimitTypes {
        return this.#typeHolder.value
    }

    //endregion -------------------- Type --------------------
    //region -------------------- Acronym --------------------

    public get acronym(): ACRONYM {
        return this.#acronym
    }

    //endregion -------------------- Acronym --------------------
    //region -------------------- Alternative entity limit --------------------

    public get alternativeAcronym(): NullOr<PossibleAlternativeAcronym> {
        return this.alternativeContainer.acronym
    }

    //region -------------------- Limit amount --------------------

    public get alternativeLimitContainer(): EntityLimitAmount {
        return this.alternativeContainer.limitContainer
    }

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get alternativeLimitContainerInSMM1AndSMM3DS(): this['alternativeLimitContainer']['limitContainerInSMM1AndSMM3DS'] {
        return this.alternativeLimitContainer.limitContainerInSMM1AndSMM3DS
    }

    public get alternativeLimitAmountInSMM1AndSMM3DS(): | NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable {
        return this.alternativeLimitContainerInSMM1AndSMM3DS.value
    }

    public get isUnknownAlternativeLimitInSMM1AndSMM3DS(): boolean {
        return this.alternativeLimitContainerInSMM1AndSMM3DS.isUnknown
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get alternativeLimitContainerInSMM2(): this['alternativeLimitContainer']['limitContainerInSMM2'] {
        return this.alternativeLimitContainer.limitContainerInSMM2
    }

    public get alternativeLimitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount> {
        return this.alternativeLimitContainerInSMM2.value
    }

    public get isUnknownAlternativeLimitInSMM2(): boolean {
        return this.alternativeLimitContainerInSMM2.isUnknown
    }

    //endregion -------------------- SMM2 limit --------------------

    public get alternativeAmountComment(): PossibleLimitAmount_Comment {
        return this.alternativeLimitContainer.comment
    }

    //endregion -------------------- Limit amount --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    public get limitContainer(): EntityLimitAmount {
        return this.#limitHolder
    }

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get limitContainerInSMM1AndSMM3DS(): this['limitContainer']['limitContainerInSMM1AndSMM3DS'] {
        return this.limitContainer.limitContainerInSMM1AndSMM3DS
    }

    public get limitAmountInSMM1AndSMM3DS(): | NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable {
        return this.limitContainerInSMM1AndSMM3DS.value
    }

    public get isUnknownLimitInSMM1AndSMM3DS(): boolean {
        return this.limitContainerInSMM1AndSMM3DS.isUnknown
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get limitContainerInSMM2(): this['limitContainer']['limitContainerInSMM2'] {
        return this.limitContainer.limitContainerInSMM2
    }

    public get limitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount> {
        return this.limitContainerInSMM2.value
    }

    public get isUnknownLimitInSMM2(): boolean {
        return this.limitContainerInSMM2.isUnknown
    }

    //endregion -------------------- SMM2 limit --------------------

    public get amountComment(): PossibleLimitAmount_Comment {
        return this.limitContainer.comment
    }

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Game properties --------------------

    public get isInSuperMarioMaker1Or3DS() {
        return this.#isInSMM1OrSMM3DS ??= this.limitContainer.limitAmountInSMM1AndSMM3DS !== NOT_APPLICABLE
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

    public toGameMap(): GameMap<boolean, EntityLimit> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Game properties --------------------

}

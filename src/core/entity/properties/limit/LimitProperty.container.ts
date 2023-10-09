import type {GameStructureForEditorLimit, LimitProperty, PossibleIsInCollectedCoinLimit, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleIsInRenderedObjectLimit, PossibleOtherLimit} from 'core/entity/properties/limit/LimitProperty'
import type {PossibleGeneralLimitComment, PossibleGeneralGlobalLimitComment, PossibleOtherLimitComment, PossibleProjectileLimitComment, PossibleRenderedObjectLimitTypeComment}                                                                                from 'core/entity/properties/limit/loader.types'

import type {Limits} from 'core/limit/Limits'
import {Import}      from 'util/DynamicImporter'
import {nonNull}     from 'util/utilitiesMethods'

export class LimitPropertyContainer
    implements LimitProperty {

    //region -------------------- Fields --------------------

    readonly #editorLimitContainer
    readonly #isInGeneralLimitContainer
    readonly #isInGeneralGlobalLimitContainer
    readonly #isInPowerUpLimitContainer
    readonly #isInProjectileLimitContainer
    readonly #isInRenderedObjectLimitContainer
    readonly #isInCollectedCoinLimitContainer
    readonly #isOtherLimitContainer

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(editorLimit: GameStructureForEditorLimit,
                [generalLimit, generalGlobalLimit,]: readonly [value: PossibleIsInGeneralLimit, superGlobal: PossibleIsInGeneralGlobalLimit,],
                powerUpLimit: PossibleIsInPowerUpLimit,
                projectileLimit: PossibleIsInProjectileLimit,
                renderedObjectLimit: PossibleIsInRenderedObjectLimit,
                collectedCoinLimit: PossibleIsInCollectedCoinLimit,
                otherLimit: PossibleOtherLimit,) {
        this.#editorLimitContainer = editorLimit
        this.#isInGeneralLimitContainer = generalLimit
        this.#isInGeneralGlobalLimitContainer = generalGlobalLimit
        this.#isInPowerUpLimitContainer = powerUpLimit
        this.#isInProjectileLimitContainer = projectileLimit
        this.#isInRenderedObjectLimitContainer = renderedObjectLimit
        this.#isInCollectedCoinLimitContainer = collectedCoinLimit
        this.#isOtherLimitContainer = otherLimit
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer(): GameStructureForEditorLimit {
        return this.#editorLimitContainer
    }

    public get editorLimit_smm1And3ds(): NullOr<Limits> {
        return this.editorLimitContainer.superMarioMaker
    }

    public get editorLimit_smm2(): NullOr<| Limits | NotApplicable> {
        return this.editorLimitContainer.superMarioMaker2.value
    }

    public get isUnknown_editorLimit_smm2(): boolean {
        return this.editorLimitContainer.superMarioMaker2.isUnknown
    }

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    public get isInGeneralLimitContainer(): PossibleIsInGeneralLimit {
        return this.#isInGeneralLimitContainer
    }

    public get isInGeneralLimit(): BooleanOrNotApplicable {
        return this.isInGeneralLimitContainer.value
    }

    public get isInGeneralLimitComment(): NullOr<PossibleGeneralLimitComment> {
        return this.isInGeneralLimitContainer.comment
    }

    //endregion -------------------- General limit --------------------
    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitContainer(): PossibleIsInGeneralGlobalLimit {
        return this.#isInGeneralGlobalLimitContainer
    }

    public get isInGlobalGeneralLimit(): BooleanOrNotApplicable {
        return this.isInGlobalGeneralLimitContainer.value
    }

    public get isInGlobalGeneralLimitComment(): NullOr<PossibleGeneralGlobalLimitComment> {
        return this.isInGlobalGeneralLimitContainer.comment
    }

    //endregion -------------------- Global general limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitContainer(): PossibleIsInPowerUpLimit {
        return this.#isInPowerUpLimitContainer
    }

    public get isInPowerUpLimit(): NullOr<BooleanOrNotApplicable> {
        return this.isInPowerUpLimitContainer.value
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitContainer(): PossibleIsInProjectileLimit {
        return this.#isInProjectileLimitContainer
    }

    public get isInProjectileLimit(): NullOr<BooleanOrNotApplicable> {
        return this.isInProjectileLimitContainer.value
    }

    public get isInProjectileLimitComment(): NullOr<PossibleProjectileLimitComment> {
        return this.isInProjectileLimitContainer.comment
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Rendered object limit --------------------

    public get isInRenderedObjectLimitContainer(): PossibleIsInRenderedObjectLimit {
        return this.#isInRenderedObjectLimitContainer
    }

    public get isInRenderedObjectLimit(): NullOr<BooleanOrNotApplicable> {
        return this.isInRenderedObjectLimitContainer.value
    }

    public get isInRenderedObjectLimitComment(): NullOr<PossibleRenderedObjectLimitTypeComment> {
        return this.isInRenderedObjectLimitContainer.comment
    }

    //endregion -------------------- Rendered object limit --------------------
    //region -------------------- Collected object limit --------------------

    public get isInCollectedCoinLimitContainer(): PossibleIsInCollectedCoinLimit {
        return this.#isInCollectedCoinLimitContainer
    }

    public get isInCollectedCoinLimit(): NullOr<BooleanOrNotApplicable> {
        return this.isInCollectedCoinLimitContainer.value
    }

    //endregion -------------------- Collected object limit --------------------
    //region -------------------- Other limit --------------------

    public get otherLimitContainer(): PossibleOtherLimit {
        return this.#isOtherLimitContainer
    }

    public get otherLimit(): NullOr<| Limits | NotApplicable> {
        return this.otherLimitContainer.value
    }

    public get otherLimitComment(): NullOr<PossibleOtherLimitComment> {
        return this.otherLimitContainer.comment
    }

    //endregion -------------------- Other limit --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    /**
     * Create a new map of limit based on the {@link Limits} received.
     *
     * @param values the values (null are ignored)
     */
    #newMap(...values: readonly Nullable<Limits>[]): ReadonlyMap<Limits, boolean> {
        const newValues = nonNull(values)
        return new Map(Import.Limits.CompanionEnum.get.values.map(limit => [limit, newValues.includes(limit,),],),)
    }

    public toLimitMap(): ReadonlyMap<Limits, boolean> {
        return new Map([...this.toEditorLimitMap(), ...this.toPlayLimitMap(),])
    }

    public toEditorLimitMap(): ReadonlyMap<Limits, boolean> {
        const editorLimits = [this.editorLimit_smm1And3ds, this.editorLimit_smm2,]

        return this.#newMap(...editorLimits.map(editorLimit => editorLimit instanceof Import.Limits ? editorLimit : null))
    }

    public toPlayLimitMap(): ReadonlyMap<Limits, boolean> {
        const otherLimits = this.otherLimit

        return this.#newMap(
            this.isInGeneralLimit === true ? Import.Limits.GENERAL_ENTITY_LIMIT : null,
            this.isInGlobalGeneralLimit === true ? Import.Limits.GENERAL_ENTITY_LIMIT : null,
            this.isInPowerUpLimit === true ? Import.Limits.POWER_UP_ENTITY_LIMIT : null,
            this.isInProjectileLimit === true ? Import.Limits.PROJECTILE_LIMIT : null,
            this.isInRenderedObjectLimit === true ? Import.Limits.RENDERED_OBJECT_LIMIT : null,
            this.isInCollectedCoinLimit === true ? Import.Limits.COLLECTED_COIN_LIMIT : null,
            otherLimits instanceof Import.Limits ? otherLimits : null,
        )
    }

    //endregion -------------------- Convertor methods --------------------

}

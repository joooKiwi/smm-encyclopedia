import type {GameStructureForEditorLimit, LimitProperty, PossibleIsInCollectedCoinLimit, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleIsInRenderedObjectLimit, PossibleOtherLimit} from 'core/entity/properties/limit/LimitProperty'
import type {PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment, PossibleRenderedObjectLimitTypeComment}                                                              from 'core/entity/properties/limit/loader.types'
import type {Nullable, NullOr}                                                                                                                                                                                                                                   from 'util/types/nullable'
import type {BooleanOrNotApplicable, NotApplicable}                                                                                                                                                                                                              from 'util/types/variables'

import type {EntityLimits} from 'core/entityLimit/EntityLimits'
import {Import}            from 'util/DynamicImporter'
import {nonNull}           from 'util/utilitiesMethods'

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

    public get editorLimit_smm1And3ds(): NullOr<EntityLimits> {
        return this.editorLimitContainer.superMarioMaker
    }

    public get editorLimit_smm2(): NullOr<| EntityLimits | NotApplicable> {
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

    public get isInGeneralLimitComment(): NullOr<PossibleGeneralEntityLimitComment> {
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

    public get isInGlobalGeneralLimitComment(): NullOr<PossibleGeneralGlobalEntityLimitComment> {
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

    public get isInProjectileLimitComment(): NullOr<PossibleProjectileEntityLimitComment> {
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

    public get otherLimit(): | EntityLimits | NotApplicable {
        return this.otherLimitContainer.value
    }

    public get otherLimitComment(): NullOr<PossibleOtherLimitComment> {
        return this.otherLimitContainer.comment
    }

    //endregion -------------------- Other limit --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    /**
     * Create a new map of limit based on the {@link EntityLimits entity limit} received.
     *
     * @param values the values (null are ignored)
     */
    #newMap(...values: readonly Nullable<EntityLimits>[]): ReadonlyMap<EntityLimits, boolean> {
        const newValues = nonNull(values)
        return new Map(Import.EntityLimits.values.map(limit => [limit, newValues.includes(limit),]))
    }

    public toLimitMap(): ReadonlyMap<EntityLimits, boolean> {
        return new Map([...this.toLimitInTheEditorMap(), ...this.toLimitWhilePlayingMap(),])
    }

    public toLimitInTheEditorMap(): ReadonlyMap<EntityLimits, boolean> {
        const editorLimits = [this.editorLimit_smm1And3ds, this.editorLimit_smm2,]

        return this.#newMap(...editorLimits.map(editorLimit => editorLimit instanceof Import.EntityLimits ? editorLimit : null))
    }

    public toLimitWhilePlayingMap(): ReadonlyMap<EntityLimits, boolean> {
        const otherLimitWhilePlaying = this.otherLimit

        return this.#newMap(
            this.isInGeneralLimit === true ? Import.EntityLimits.GENERAL_ENTITY_LIMIT : null,
            this.isInGlobalGeneralLimit === true ? Import.EntityLimits.GENERAL_ENTITY_LIMIT : null,
            this.isInPowerUpLimit === true ? Import.EntityLimits.POWER_UP_ENTITY_LIMIT : null,
            this.isInProjectileLimit === true ? Import.EntityLimits.PROJECTILE_LIMIT : null,
            this.isInRenderedObjectLimit === true ? Import.EntityLimits.RENDERED_OBJECT_LIMIT : null,
            this.isInCollectedCoinLimit === true ? Import.EntityLimits.COLLECTED_COIN_LIMIT : null,
            otherLimitWhilePlaying instanceof Import.EntityLimits ? otherLimitWhilePlaying : null,
        )
    }

    //endregion -------------------- Convertor methods --------------------

}

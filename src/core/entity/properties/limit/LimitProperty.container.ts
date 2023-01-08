import type {GameStructureForEditorLimit, LimitProperty, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleOtherLimit} from 'core/entity/properties/limit/LimitProperty'
import type {PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment}                                     from 'core/entity/properties/limit/loader.types'
import type {Nullable, NullOr}                                                                                                                                                                from 'util/types/nullable'
import type {BooleanOrNotApplicable, NotApplicable}                                                                                                                                           from 'util/types/variables'

import {EntityLimits} from 'core/entityLimit/EntityLimits'

export class LimitPropertyContainer
    implements LimitProperty {

    //region -------------------- Fields --------------------

    readonly #editorLimitContainer
    readonly #isGeneralLimitContainer
    readonly #isGeneralGlobalLimitContainer
    readonly #isPowerUpLimitContainer
    readonly #isProjectileLimitContainer
    readonly #isOtherLimitContainer

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(editorLimit: GameStructureForEditorLimit,
                [generalLimit, generalGlobalLimit,]: readonly [value: PossibleIsInGeneralLimit, superGlobal: PossibleIsInGeneralGlobalLimit,],
                powerUpLimit: PossibleIsInPowerUpLimit,
                projectileLimit: PossibleIsInProjectileLimit,
                otherLimit: PossibleOtherLimit,) {
        this.#editorLimitContainer = editorLimit
        this.#isGeneralLimitContainer = generalLimit
        this.#isGeneralGlobalLimitContainer = generalGlobalLimit
        this.#isPowerUpLimitContainer = powerUpLimit
        this.#isProjectileLimitContainer = projectileLimit
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

    public get isInGeneralLimitWhilePlayingContainer(): PossibleIsInGeneralLimit {
        return this.#isGeneralLimitContainer
    }

    public get isInGeneralLimitWhilePlaying(): BooleanOrNotApplicable {
        return this.isInGeneralLimitWhilePlayingContainer.value
    }

    public get isInGeneralLimitWhilePlayingComment(): NullOr<PossibleGeneralEntityLimitComment> {
        return this.isInGeneralLimitWhilePlayingContainer.comment
    }

    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitWhilePlayingContainer(): PossibleIsInGeneralGlobalLimit {
        return this.#isGeneralGlobalLimitContainer
    }

    public get isInGlobalGeneralLimitWhilePlaying(): BooleanOrNotApplicable {
        return this.isInGlobalGeneralLimitWhilePlayingContainer.value
    }

    public get isInGlobalGeneralLimitWhilePlayingComment(): NullOr<PossibleGeneralGlobalEntityLimitComment> {
        return this.isInGlobalGeneralLimitWhilePlayingContainer.comment
    }

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitWhilePlayingContainer(): PossibleIsInPowerUpLimit {
        return this.#isPowerUpLimitContainer
    }

    public get isInPowerUpLimitWhilePlaying(): NullOr<BooleanOrNotApplicable> {
        return this.isInPowerUpLimitWhilePlayingContainer.value
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitWhilePlayingContainer(): PossibleIsInProjectileLimit {
        return this.#isProjectileLimitContainer
    }

    public get isInProjectileLimitWhilePlaying(): NullOr<BooleanOrNotApplicable> {
        return this.isInProjectileLimitWhilePlayingContainer.value
    }

    public get isInProjectileLimitWhilePlayingComment(): NullOr<PossibleProjectileEntityLimitComment> {
        return this.isInProjectileLimitWhilePlayingContainer.comment
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    public get otherLimitWhilePlayingContainer(): PossibleOtherLimit {
        return this.#isOtherLimitContainer
    }

    public get otherLimitWhilePlaying(): | EntityLimits | NotApplicable {
        return this.otherLimitWhilePlayingContainer.value
    }

    public get otherLimitWhilePlayingComment(): NullOr<PossibleOtherLimitComment> {
        return this.otherLimitWhilePlayingContainer.comment
    }

    //endregion -------------------- Custom limit --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    /**
     * Create a new map of limit based on the {@link EntityLimits entity limit} received.
     *
     * @param values the values (null are ignored)
     */
    #newMap(...values: readonly Nullable<EntityLimits>[]): ReadonlyMap<EntityLimits, boolean> {
        const newValues = values.filter(limit => limit != null) as EntityLimits[]
        return new Map(EntityLimits.values.map(limit => [limit, newValues.includes(limit),]))
    }

    public toLimitMap(): ReadonlyMap<EntityLimits, boolean> {
        return new Map([...this.toLimitInTheEditorMap(), ...this.toLimitWhilePlayingMap(),])
    }

    public toLimitInTheEditorMap(): ReadonlyMap<EntityLimits, boolean> {
        const editorLimits = [this.editorLimit_smm1And3ds, this.editorLimit_smm2,]

        return this.#newMap(...editorLimits.map(editorLimit => editorLimit instanceof EntityLimits ? editorLimit : null))
    }

    public toLimitWhilePlayingMap(): ReadonlyMap<EntityLimits, boolean> {
        const otherLimitWhilePlaying = this.otherLimitWhilePlaying

        return this.#newMap(
            this.isInGeneralLimitWhilePlaying === true ? EntityLimits.GENERAL_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInGlobalGeneralLimitWhilePlaying === true ? EntityLimits.GENERAL_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInPowerUpLimitWhilePlaying === true ? EntityLimits.POWER_UP_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInProjectileLimitWhilePlaying === true ? EntityLimits.PROJECTILE_LIMIT : null,
            otherLimitWhilePlaying instanceof EntityLimits ? otherLimitWhilePlaying : null,
        )
    }

    //endregion -------------------- Convertor methods --------------------

}

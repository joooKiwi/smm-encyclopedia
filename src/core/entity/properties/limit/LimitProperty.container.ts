import type {EditorLimitType_SMM1And3DS, EditorLimitType_SMM2, GeneralEntityLimitType, GeneralGlobalEntityLimitType, OtherLimitCommentType, OtherLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType}             from './Loader.types';
import type {ExtendedMap}                                                                                                                                                                                                  from '../../../../util/extended/ExtendedMap';
import type {LimitProperty, PossibleEditorLimit_SMM1And3DS, PossibleEditorLimit_SMM2, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleOtherLimit} from './LimitProperty';
import type {GameStructure}                                                                                                                                                                                                from '../../../game/GameStructure';

import {EntityLimits}         from '../../../entityLimit/EntityLimits';
import {ExtendedMapContainer} from '../../../../util/extended/ExtendedMap.container';

/**
 * @multiton
 * @provider
 */
export class LimitPropertyContainer
    implements LimitProperty {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<Key, LimitProperty> = new ExtendedMapContainer();

    readonly #editorLimitContainer;
    readonly #isGeneralLimitContainer;
    readonly #isGeneralGlobalLimitContainer;
    readonly #isPowerUpLimitContainer;
    readonly #isProjectileLimitContainer;
    readonly #isOtherLimitContainer;

    //endregion -------------------- Fields --------------------

    private constructor([editorLimit, [generalLimit, generalGlobalLimit,], powerUpLimit, projectileLimit, otherLimit,]: ArgumentsReceived,) {
        this.#editorLimitContainer = editorLimit;
        this.#isGeneralLimitContainer = generalLimit;
        this.#isGeneralGlobalLimitContainer = generalGlobalLimit;
        this.#isPowerUpLimitContainer = powerUpLimit;
        this.#isProjectileLimitContainer = projectileLimit;
        this.#isOtherLimitContainer = otherLimit;
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer() {
        return this.#editorLimitContainer;
    }

    public get editorLimit_smm1And3ds() {
        return this.editorLimitContainer.superMarioMaker;
    }

    public get editorLimit_smm2() {
        return this.editorLimitContainer.superMarioMaker2.value;
    }

    public get isUnknown_editorLimit_smm2() {
        return this.editorLimitContainer.superMarioMaker2.isUnknown;
    }

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    public get isInGeneralLimitWhilePlayingContainer() {
        return this.#isGeneralLimitContainer;
    }

    public get isInGeneralLimitWhilePlaying() {
        return this.isInGeneralLimitWhilePlayingContainer.value;
    }

    public get isInGeneralLimitWhilePlayingComment() {
        return this.isInGeneralLimitWhilePlayingContainer.comment;
    }

    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitWhilePlayingContainer() {
        return this.#isGeneralGlobalLimitContainer;
    }

    public get isInGlobalGeneralLimitWhilePlaying() {
        return this.isInGlobalGeneralLimitWhilePlayingContainer.value;
    }

    public get isInGlobalGeneralLimitWhilePlayingComment() {
        return this.isInGlobalGeneralLimitWhilePlayingContainer.comment;
    }

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitWhilePlayingContainer() {
        return this.#isPowerUpLimitContainer;
    }

    public get isInPowerUpLimitWhilePlaying() {
        return this.isInPowerUpLimitWhilePlayingContainer.value;
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitWhilePlayingContainer() {
        return this.#isProjectileLimitContainer;
    }

    public get isInProjectileLimitWhilePlaying() {
        return this.isInProjectileLimitWhilePlayingContainer.value;
    }

    public get isInProjectileLimitWhilePlayingComment() {
        return this.isInProjectileLimitWhilePlayingContainer.comment;
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    public get otherLimitWhilePlayingContainer() {
        return this.#isOtherLimitContainer;
    }

    public get otherLimitWhilePlaying() {
        return this.otherLimitWhilePlayingContainer.value;
    }

    public get otherLimitWhilePlayingComment() {
        return this.otherLimitWhilePlayingContainer.comment;
    }

    //endregion -------------------- Custom limit --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    /**
     * Create a new map of limit based on the {@link EntityLimits entity limit} received.
     *
     * @param values the values (null are ignored)
     */
    #newMap(...values: readonly (EntityLimits | null)[]): ReadonlyMap<EntityLimits, boolean> {
        const newValues = values.filter(limit => limit != null) as EntityLimits[];
        return new Map(EntityLimits.values.map(limit => [limit, newValues.includes(limit),]));
    }

    public toLimitMap() {
        return new Map([...this.toLimitInTheEditorMap(), ...this.toLimitWhilePlayingMap(),]);
    }

    public toLimitInTheEditorMap() {
        const editorLimits = [this.editorLimit_smm1And3ds, this.editorLimit_smm2,];

        return this.#newMap(...editorLimits.map(editorLimit => editorLimit instanceof EntityLimits ? editorLimit : null));
    }

    public toLimitWhilePlayingMap() {
        const otherLimitWhilePlaying = this.otherLimitWhilePlaying;

        return this.#newMap(
            this.isInGeneralLimitWhilePlaying === true ? EntityLimits.GENERAL_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInGlobalGeneralLimitWhilePlaying === true ? EntityLimits.GENERAL_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInPowerUpLimitWhilePlaying === true ? EntityLimits.POWER_UP_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInProjectileLimitWhilePlaying === true ? EntityLimits.PROJECTILE_LIMIT : null,
            otherLimitWhilePlaying instanceof EntityLimits ? otherLimitWhilePlaying : null,
        );
    }

    //endregion -------------------- Convertor methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(argumentsReceived: ArgumentsReceived, key: Key,): LimitProperty {
        return this.#EVERY_CONTAINERS.if(map => map.has(key))
            .isNotMet(map => map.set(key, new this(argumentsReceived,)))
            .get(key);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type Key = readonly [
    editorLimit: readonly [EditorLimitType_SMM1And3DS, EditorLimitType_SMM2,],
    generalLimit: readonly [GeneralEntityLimitType, GeneralGlobalEntityLimitType,],
    powerUpLimit: PowerUpEntityLimitType,
    projectileLimit: ProjectileEntityLimitType,
    otherLimit: readonly [OtherLimitType, OtherLimitCommentType,],
]
type ArgumentsReceived = readonly [
    editorLimit: GameStructure<PossibleEditorLimit_SMM1And3DS, PossibleEditorLimit_SMM1And3DS, PossibleEditorLimit_SMM2>,
    generalLimit: [value: PossibleIsInGeneralLimit, superGlobal: PossibleIsInGeneralGlobalLimit,],
    powerUpLimit: PossibleIsInPowerUpLimit,
    projectileLimit: PossibleIsInProjectileLimit,
    otherLimit: PossibleOtherLimit,
];

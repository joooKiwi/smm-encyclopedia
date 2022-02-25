import type {OtherLimitContainer, OtherLimitReceived, EditorLimitContainer, EditorLimitReceived, GeneralLimitReceived, PowerUpLimitContainer, PowerUpLimitReceived, ProjectileLimitContainer, ProjectileLimitReceived, SingleGeneralGlobalLimitContainer, SingleGeneralGlobalLimitReceived, SingleGeneralLimitContainer, SingleGeneralLimitReceived} from './LimitProperty.types';
import type {OtherLimitCommentType, OtherLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType}                                                                                                                                                                        from './Loader.types';
import type {ExtendedList}                                                                                                                                                                                                                                                                                                                            from '../../../../util/extended/ExtendedList';
import type {LimitProperty}                                                                                                                                                                                                                                                                                                                            from './LimitProperty';

import {EmptyLimitProperty}                           from './EmptyLimitProperty';
import {EntityLimits}                                 from '../../../entityLimit/EntityLimits';
import {ExtendedSetContainer}                         from '../../../../util/extended/ExtendedSet.container';
import {isArrayEquals}                                from '../../../../util/utilitiesMethods';
import {PropertyContainer}                            from '../../../_properties/Property.container';
import {PropertyProvider}                             from '../../../_properties/PropertyProvider';
import {PropertyThatCanBeUnknownWithCommentContainer} from '../../../_properties/PropertyThatCanBeUnknownWithComment.container';
import {PropertyWithCommentContainer}                 from '../../../_properties/PropertyWithComment.container';

/**
 * @provider
 */
export class LimitPropertyContainer
    implements LimitProperty {

    //region -------------------- Static attributes --------------------

    static readonly #EVERY_CONTAINERS: ExtendedList<LimitPropertyContainer> = new ExtendedSetContainer();

    readonly #originalValues: OriginalValues;

    //endregion -------------------- Static attributes --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #editorLimitContainer: EditorLimitContainer;
    readonly #isGeneralLimitContainer: SingleGeneralLimitContainer;
    readonly #isGeneralGlobalLimitContainer: SingleGeneralGlobalLimitContainer;
    readonly #isPowerUpLimitContainer: PowerUpLimitContainer;
    readonly #isProjectileLimitContainer: ProjectileLimitContainer;
    readonly #isOtherLimitContainer: OtherLimitContainer;


    private constructor([[editorLimit, callbackToGetEntityLimit1,], generalLimit, powerUpLimit, projectileLimit, [otherLimit, customLimitComment, callbackToGetEntityLimit2,],]: ArgumentsReceived, originalValues: OriginalValues,) {
        this.#originalValues = originalValues;

        this.#editorLimitContainer = editorLimit == null || editorLimit === '?' ? PropertyProvider.newStringContainer(editorLimit, true,) : new PropertyWithCommentContainer(callbackToGetEntityLimit1(editorLimit), null,);
        if (generalLimit == null) {
            this.#isGeneralLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
            this.#isGeneralGlobalLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
        } else if (generalLimit instanceof Array) {
            this.#isGeneralLimitContainer = PropertyProvider.newBooleanContainer<SingleGeneralLimitReceived, true, true, true>(generalLimit[0], true, true,);
            this.#isGeneralGlobalLimitContainer = PropertyProvider.newBooleanContainer<SingleGeneralGlobalLimitReceived, true, false, true>(generalLimit[1], true, false,);
        } else {
            this.#isGeneralLimitContainer = PropertyProvider.newBooleanContainer<SingleGeneralLimitReceived, true, true, true>(generalLimit, true, true,);
            this.#isGeneralGlobalLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
        }
        this.#isPowerUpLimitContainer = PropertyProvider.newBooleanContainer<PowerUpLimitReceived, true, false, true>(powerUpLimit, true, false,);
        this.#isProjectileLimitContainer = PropertyProvider.newBooleanContainer<ProjectileLimitReceived, true, true, true>(projectileLimit, true, true,);
        this.#isOtherLimitContainer = otherLimit == null || otherLimit === '?' ? PropertyProvider.newStringContainer(otherLimit, true, customLimitComment,) : new PropertyThatCanBeUnknownWithCommentContainer(callbackToGetEntityLimit2(otherLimit), false, customLimitComment,);
    }

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer() {
        return this.#editorLimitContainer;
    }

    public get editorLimit() {
        return this.editorLimitContainer.value;
    }

    public get isEditorLimitUnknown() {
        return this.editorLimitContainer.isUnknown;
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

    public get isInPowerUpLimitWhilePlayingComment() {
        return this.isInPowerUpLimitWhilePlayingContainer.comment;
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitWhilePlayingContainer() {
        return this.#isProjectileLimitContainer;
    }

    public get isInProjectileLimitWhilePlaying() {
        return this.isInProjectileLimitWhilePlayingContainer.value;
    }

    public get isInProjectileLimitWhilePlayingUnknown() {
        return this.isInProjectileLimitWhilePlayingContainer.isUnknown;
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

    public get isOtherLimitWhilePlayingUnknown() {
        return this.otherLimitWhilePlayingContainer.isUnknown;
    }

    public get otherLimitWhilePlayingComment() {
        return this.otherLimitWhilePlayingContainer.comment;
    }

    //endregion -------------------- Custom limit --------------------

    private __newMap(...values: readonly (EntityLimits | null)[]): Map<EntityLimits, boolean> {
        const newValues = values.filter(limit => limit != null) as EntityLimits[];
        return new Map(EntityLimits.values.map(limit => [limit, newValues.includes(limit),]));
    }

    public toLimitMap() {
        return new Map([...this.toLimitInTheEditorMap(), ...this.toLimitWhilePlayingMap(),]);
    }

    public toLimitInTheEditorMap() {
        const editorLimit = this.editorLimit;

        return this.__newMap(editorLimit instanceof EntityLimits ? editorLimit : null,);
    }

    public toLimitWhilePlayingMap() {
        const otherLimitWhilePlaying = this.otherLimitWhilePlaying;

        return this.__newMap(
            this.isInGeneralLimitWhilePlaying === true ? EntityLimits.GENERAL_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInGlobalGeneralLimitWhilePlaying === true ? EntityLimits.GENERAL_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInPowerUpLimitWhilePlaying === true ? EntityLimits.POWER_UP_ENTITY_LIMIT_WHILE_PLAYING : null,
            this.isInProjectileLimitWhilePlaying === true ? EntityLimits.PROJECTILE_LIMIT : null,
            otherLimitWhilePlaying instanceof EntityLimits ? otherLimitWhilePlaying : null,
        );
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(editorLimit: EditorLimitReceived, generalLimit: GeneralLimitReceived, powerUpLimit: PowerUpLimitReceived, projectileLimit: ProjectileLimitReceived, otherLimit: OtherLimitReceived,): LimitProperty {
        const [_generalLimit, globalGeneralLimit,] = generalLimit instanceof Array ? generalLimit : [generalLimit, null,];
        const [_otherLimit,] = otherLimit;

        if (editorLimit == null && generalLimit == null && powerUpLimit == null && projectileLimit == null && _otherLimit == null)
            return EmptyLimitProperty.get;

        const originalValues: OriginalValues = [editorLimit[0], _generalLimit, globalGeneralLimit, powerUpLimit, projectileLimit, _otherLimit, otherLimit[1],];
        return this.#EVERY_CONTAINERS.find(value => isArrayEquals(value.#originalValues, originalValues,))
            ?? this.#EVERY_CONTAINERS.addAndGet(new this([editorLimit, generalLimit, powerUpLimit, projectileLimit, otherLimit,], originalValues,));
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [EditorLimitReceived, GeneralLimitReceived, PowerUpLimitReceived, ProjectileLimitReceived, OtherLimitReceived,];

type OriginalValues = readonly [
    EditorLimitType,
    GeneralEntityLimitType, | GeneralGlobalEntityLimitType | null,
    PowerUpEntityLimitType,
    ProjectileEntityLimitType,
    OtherLimitType, OtherLimitCommentType,
];

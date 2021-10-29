import type {CustomLimitContainer, CustomLimitReceived, EditorLimitContainer, EditorLimitReceived, GeneralLimitReceived, PowerUpLimitContainer, PowerUpLimitReceived, ProjectileLimitContainer, ProjectileLimitReceived, SingleGeneralGlobalLimitContainer, SingleGeneralGlobalLimitReceived, SingleGeneralLimitContainer, SingleGeneralLimitReceived} from './LimitProperty.types';
import type {LimitProperty}                                                                                                                                                                                                                                                                                                                            from './LimitProperty';

import {EmptyLimitProperty}                           from './EmptyLimitProperty';
import {PropertyContainer}                            from '../../_properties/Property.container';
import {PropertyProvider}                             from '../../_properties/PropertyProvider';
import {PropertyThatCanBeUnknownWithCommentContainer} from '../../_properties/PropertyThatCanBeUnknownWithComment.container';
import {PropertyWithCommentContainer}                 from '../../_properties/PropertyWithComment.container';

/**
 * @provider
 */
export class LimitPropertyContainer
    implements LimitProperty {

    //region -------------------- Static attributes --------------------

    //endregion -------------------- Static attributes --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #editorLimitContainer: EditorLimitContainer;
    readonly #isGeneralLimitContainer: SingleGeneralLimitContainer;
    readonly #isGeneralGlobalLimitContainer: SingleGeneralGlobalLimitContainer;
    readonly #isPowerUpLimitContainer: PowerUpLimitContainer;
    readonly #isProjectileLimitContainer: ProjectileLimitContainer;
    readonly #isCustomLimitContainer: CustomLimitContainer;


    private constructor([editorLimit, callbackToGetEntityLimit1,]: EditorLimitReceived, generalLimit: GeneralLimitReceived, powerUpLimit: PowerUpLimitReceived, projectileLimit: ProjectileLimitReceived, [customLimit, customLimitComment, callbackToGetEntityLimit2,]: CustomLimitReceived,) {
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
        this.#isCustomLimitContainer = customLimit == null || customLimit === '?' ? PropertyProvider.newStringContainer(customLimit, true, customLimitComment,) : new PropertyThatCanBeUnknownWithCommentContainer(callbackToGetEntityLimit2(customLimit), false, customLimitComment,);
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

    public get customLimitWhilePlayingContainer() {
        return this.#isCustomLimitContainer;
    }

    public get customLimitWhilePlaying() {
        return this.customLimitWhilePlayingContainer.value;
    }

    public get isCustomLimitWhilePlayingUnknown() {
        return this.customLimitWhilePlayingContainer.isUnknown;
    }

    public get customLimitWhilePlayingComment() {
        return this.customLimitWhilePlayingContainer.comment;
    }

    //endregion -------------------- Custom limit --------------------

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(editorLimit: EditorLimitReceived, generalLimit: GeneralLimitReceived, powerUpLimit: PowerUpLimitReceived, projectileLimit: ProjectileLimitReceived, customLimit: CustomLimitReceived,): LimitProperty {
        const [_editorLimit,] = editorLimit;
        const [_customLimit, customLimitComment,] = customLimit;

        if (editorLimit == null && generalLimit == null && powerUpLimit == null && projectileLimit == null && _customLimit == null)
            return EmptyLimitProperty.get;
        //TODO if the values have already been made, return the instance.


        return new LimitPropertyContainer(editorLimit, generalLimit, powerUpLimit, projectileLimit, customLimit,);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}


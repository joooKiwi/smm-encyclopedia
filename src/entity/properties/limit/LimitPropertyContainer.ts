import type {CallbackCaller}                                                                                                                                                                                                       from '../../../util/CallbackCaller';
import type {LimitProperty, PossibleCustomLimitWhilePlaying, PossibleEditorLimit, PossibleGeneralLimitWhilePlaying, PossibleGlobalGeneralLimitWhilePlaying, PossiblePowerUpLimitWhilePlaying, PossibleProjectileLimitWhilePlaying} from './LimitProperty';

import type {CommentReceived, CustomLimitContainer, CustomLimitReceived, EditorLimitContainer, EditorLimitReceived, GeneralLimitReceived, PowerUpLimitContainer, PowerUpLimitReceived, ProjectileLimitContainer, ProjectileLimitReceived, SingleGeneralGlobalLimitContainer, SingleGeneralGlobalLimitReceived, SingleGeneralLimitContainer} from './LimitProperty.types';

import {EntityLimits}                 from '../../limit/EntityLimits';
import {SingleLimitPropertyContainer} from './single/SingleLimitPropertyContainer';

/**
 * @multiton
 * @provider
 */
export class LimitPropertyContainer
    implements LimitProperty {

    //region -------------------- Constants --------------------

    public static readonly VARIABLE_STRING = 'Variable';
    public static readonly ONLY_WHEN_COLLECTED_STRING = 'Only when collected';
    public static readonly NOT_ON_TRACK_STRING = 'Not on track';
    public static readonly TEMPORARY_AS_IT_COMES_OUT_STRING = 'Temporary as it comes out';
    public static readonly EACH_ONE_SEPARATED_STRING = 'Each one separated';

    static readonly #NULL_LIMIT: readonly [null, null,] = [null, null,];
    static readonly #TRUE_LIMIT: readonly [true, null,] = [true, null,];
    static readonly #FALSE_LIMIT: readonly [true, null,] = [true, null,];

    //endregion -------------------- Constants --------------------
    //region -------------------- Predefined containers --------------------

    static readonly #IS_IN_NONE_PROPERTY =                                 new LimitPropertyContainer(null,                                                             LimitPropertyContainer.#NULL_LIMIT,                                          LimitPropertyContainer.#NULL_LIMIT,  LimitPropertyContainer.#NULL_LIMIT,                                           LimitPropertyContainer.#NULL_LIMIT,                   );

    static readonly #POWER_UP_LIMIT_ONLY_PROPERTY =                        new LimitPropertyContainer(EntityLimits.POWER_UP_ENTITY_LIMIT,       [LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,], LimitPropertyContainer.#TRUE_LIMIT,  LimitPropertyContainer.#FALSE_LIMIT,                                         LimitPropertyContainer.#NULL_LIMIT,                     );
    static readonly #BLOCK_LIMIT_IN_EDITOR_ONLY_PROPERTY =                 new LimitPropertyContainer(EntityLimits.BLOCK_LIMIT,                 [LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,], LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,                                         LimitPropertyContainer.#NULL_LIMIT,                     );
    static readonly #OTHER_GROUND_AND_VINE_LIMIT_IN_EDITOR_ONLY_PROPERTY = new LimitPropertyContainer(EntityLimits.OTHER_GROUND_AND_VINE_LIMIT, [LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,], LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,                                         LimitPropertyContainer.#NULL_LIMIT,                     );
    static readonly #GENERAL_LIMIT_ONLY_PROPERTY =                         new LimitPropertyContainer(EntityLimits.GENERAL_ENTITY_LIMIT,        [LimitPropertyContainer.#TRUE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,],  LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,                                         LimitPropertyContainer.#NULL_LIMIT,                     );
    static readonly #KEY_PROPERTY =                                        new LimitPropertyContainer(EntityLimits.GENERAL_ENTITY_LIMIT,        [LimitPropertyContainer.#TRUE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,],  LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,                                          [EntityLimits.KEY_LIMIT, null,],            );
    static readonly #WARP_DOOR_ONLY_PROPERTY =                             new LimitPropertyContainer(EntityLimits.WARP_DOOR_LIMIT,             [LimitPropertyContainer.#TRUE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,],  LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,                                          LimitPropertyContainer.#NULL_LIMIT,                    );
    static readonly #WARP_BOX_ONLY_PROPERTY =                              new LimitPropertyContainer(EntityLimits.WARP_BOX_LIMIT,              [LimitPropertyContainer.#TRUE_LIMIT, LimitPropertyContainer.#TRUE_LIMIT,],   LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,                                          LimitPropertyContainer.#NULL_LIMIT,                    );

    static readonly #PROJECTILE_PROPERTY =                                 new LimitPropertyContainer(null,                            [LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,], LimitPropertyContainer.#FALSE_LIMIT,  LimitPropertyContainer.#TRUE_LIMIT,                                           LimitPropertyContainer.#NULL_LIMIT,                   );
    static readonly #PROJECTILE_IN_GENERAL_LIMIT_PROPERTY =                new LimitPropertyContainer(null,                            [LimitPropertyContainer.#TRUE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,],  LimitPropertyContainer.#FALSE_LIMIT,  LimitPropertyContainer.#TRUE_LIMIT,                                           LimitPropertyContainer.#NULL_LIMIT,                   );
    static readonly #TEMPORARY_PROJECTILE_PROPERTY =                       new LimitPropertyContainer(null,                            [LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,], LimitPropertyContainer.#FALSE_LIMIT,  [LimitPropertyContainer.TEMPORARY_AS_IT_COMES_OUT_STRING, null,],  LimitPropertyContainer.#NULL_LIMIT,                  );
    static readonly #SEPARATED_PROJECTILES_PROPERTY =                      new LimitPropertyContainer(null,                            [LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,], LimitPropertyContainer.#FALSE_LIMIT,  [LimitPropertyContainer.EACH_ONE_SEPARATED_STRING, null,],         LimitPropertyContainer.#NULL_LIMIT,                  );
    static readonly #YOSHI_PROPERTY =                                      new LimitPropertyContainer(null,                            [LimitPropertyContainer.#FALSE_LIMIT, LimitPropertyContainer.#FALSE_LIMIT,], LimitPropertyContainer.#FALSE_LIMIT,  LimitPropertyContainer.#FALSE_LIMIT,                                           [EntityLimits.HATCHED_YOSHI_LIMIT, null,],);

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Other containers --------------------
    //endregion -------------------- Other containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #editorLimitContainer: | EditorLimitContainer | null;
    readonly #editorLimitHolder: CallbackCaller<| PossibleEditorLimit | null>;
    readonly #isEditorLimitKnownHolder: CallbackCaller<boolean>;

    readonly #isGeneralLimitContainer: | SingleGeneralLimitContainer | null;
    readonly #isGeneralLimitHolder: CallbackCaller<| PossibleGeneralLimitWhilePlaying | null>;
    readonly #isGeneralLimitCommentHolder: CallbackCaller<| string | null>;

    readonly #isGeneralGlobalLimitContainer: | SingleGeneralGlobalLimitContainer | null;
    readonly #isGlobalGeneralLimitHolder: CallbackCaller<| PossibleGlobalGeneralLimitWhilePlaying | null>;
    readonly #isGlobalGeneralLimitCommentHolder: CallbackCaller<| string | null>;

    readonly #isPowerUpLimitContainer: | PowerUpLimitContainer | null;
    readonly #isPowerUpLimitHolder: CallbackCaller<| PossiblePowerUpLimitWhilePlaying | null>;
    readonly #isPowerUpLimitCommentHolder: CallbackCaller<| string | null>;

    readonly #isProjectileLimitContainer: | ProjectileLimitContainer | null;
    readonly #isProjectileLimitHolder: CallbackCaller<| PossibleProjectileLimitWhilePlaying | null>;
    readonly #isProjectileLimitKnownHolder: CallbackCaller<boolean>;
    readonly #isProjectileLimitCommentHolder: CallbackCaller<| string | null>;

    readonly #isCustomLimitContainer: | CustomLimitContainer | null;
    readonly #isCustomLimitHolder: CallbackCaller<| PossibleCustomLimitWhilePlaying | null>;
    readonly #isCustomLimitKnownHolder: CallbackCaller<boolean>;
    readonly #isCustomLimitCommentHolder: CallbackCaller<| string | null>;


    private constructor(editorLimit: EditorLimitReceived, [generalLimitOrLimit, globalLimitOrComment,]: GeneralLimitReceived, powerUpLimit: PowerUpLimitReceived, projectileLimit: ProjectileLimitReceived, customLimit: CustomLimitReceived,) {
        [this.#editorLimitContainer, this.#editorLimitHolder, this.#isEditorLimitKnownHolder,] = SingleLimitPropertyContainer.newLimitThatCanBeUnknown(editorLimit);
        if (generalLimitOrLimit == null) {
            [this.#isGeneralLimitContainer, this.#isGeneralLimitHolder, this.#isGeneralLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithComment(null);
            [this.#isGeneralGlobalLimitContainer, this.#isGlobalGeneralLimitHolder, this.#isGlobalGeneralLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithComment(null);
        } else if (generalLimitOrLimit instanceof Array) {
            [this.#isGeneralLimitContainer, this.#isGeneralLimitHolder, this.#isGeneralLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithComment(...generalLimitOrLimit);
            [this.#isGeneralGlobalLimitContainer, this.#isGlobalGeneralLimitHolder, this.#isGlobalGeneralLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithComment(...globalLimitOrComment as SingleGeneralGlobalLimitReceived);
        } else {
            [this.#isGeneralLimitContainer, this.#isGeneralLimitHolder, this.#isGeneralLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithComment(generalLimitOrLimit, globalLimitOrComment as CommentReceived,);
            [this.#isGeneralGlobalLimitContainer, this.#isGlobalGeneralLimitHolder, this.#isGlobalGeneralLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithComment(null);
        }
        [this.#isPowerUpLimitContainer, this.#isPowerUpLimitHolder, this.#isPowerUpLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithComment(...powerUpLimit);
        [this.#isProjectileLimitContainer, this.#isProjectileLimitHolder, this.#isProjectileLimitKnownHolder, this.#isProjectileLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithCommentThatCanBeUnknown(...projectileLimit);
        [this.#isCustomLimitContainer, this.#isCustomLimitHolder, this.#isCustomLimitKnownHolder, this.#isCustomLimitCommentHolder,] = SingleLimitPropertyContainer.newLimitWithCommentThatCanBeUnknown(...customLimit);
    }

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer() {
        return this.#editorLimitContainer;
    }

    public get editorLimit() {
        return this.#editorLimitHolder.get;
    }

    public get isEditorLimitKnown() {
        return this.#isEditorLimitKnownHolder.get;
    }

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    public get isInGeneralLimitWhilePlayingContainer() {
        return this.#isGeneralLimitContainer;
    }

    public get isInGeneralLimitWhilePlaying() {
        return this.#isGeneralLimitHolder.get;
    }

    public get isInGeneralLimitWhilePlayingComment() {
        return this.#isGeneralLimitCommentHolder.get;
    }

    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitWhilePlayingContainer() {
        return this.#isGeneralGlobalLimitContainer;
    }

    public get isInGlobalGeneralLimitWhilePlaying() {
        return this.#isGlobalGeneralLimitHolder.get;
    }

    public get isInGlobalGeneralLimitWhilePlayingComment() {
        return this.#isGlobalGeneralLimitCommentHolder.get;
    }

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitWhilePlayingContainer() {
        return this.#isPowerUpLimitContainer;
    }

    public get isInPowerUpLimitWhilePlaying() {
        return this.#isPowerUpLimitHolder.get;
    }

    public get isInPowerUpLimitWhilePlayingComment() {
        return this.#isPowerUpLimitCommentHolder.get;
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitWhilePlayingContainer() {
        return this.#isProjectileLimitContainer;
    }

    public get isInProjectileLimitWhilePlaying() {
        return this.#isProjectileLimitHolder.get;
    }

    public get isInProjectileLimitWhilePlayingKnown() {
        return this.#isProjectileLimitKnownHolder.get;
    }

    public get isInProjectileLimitWhilePlayingComment() {
        return this.#isProjectileLimitCommentHolder.get;
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    public get customLimitWhilePlayingContainer() {
        return this.#isCustomLimitContainer;
    }

    public get customLimitWhilePlaying() {
        return this.#isCustomLimitHolder.get;
    }

    public get isCustomLimitWhilePlayingKnown() {
        return this.#isCustomLimitKnownHolder.get;
    }

    public get customLimitWhilePlayingComment() {
        return this.#isCustomLimitCommentHolder.get;
    }

    //endregion -------------------- Custom limit --------------------

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider/Multiton method --------------------

    public static get(editorLimit: EditorLimitReceived, generalLimit: GeneralLimitReceived, powerUpLimit: PowerUpLimitReceived, projectileLimit: ProjectileLimitReceived, customLimit: CustomLimitReceived,): LimitProperty {
        const [generalLimitOrLimit, globalLimitOrLimitComment,] = generalLimit;
        const [_powerUpLimit, powerUpLimitComment,] = powerUpLimit;
        const [_projectileLimit, projectileLimitComment,] = projectileLimit;
        const [_customLimit, customLimitComment,] = customLimit;

        if (editorLimit == null && generalLimitOrLimit == null && _powerUpLimit == null && _projectileLimit == null && _customLimit == null)
            return this.#IS_IN_NONE_PROPERTY;
        if (editorLimit == null && generalLimitOrLimit instanceof Array && globalLimitOrLimitComment instanceof Array) {
            if (generalLimitOrLimit[0] === true) {
                if (generalLimitOrLimit[1] == null && globalLimitOrLimitComment[0] === false && globalLimitOrLimitComment[1] == null
                    && _projectileLimit === true && projectileLimitComment == null
                    && _powerUpLimit === false && powerUpLimitComment == null
                    && _customLimit == null)
                    return this.#PROJECTILE_IN_GENERAL_LIMIT_PROPERTY;
            } else if (generalLimitOrLimit[0] === false) {
                if (generalLimitOrLimit[1] == null && globalLimitOrLimitComment[0] === false && globalLimitOrLimitComment[1] == null
                    && _projectileLimit === true && projectileLimitComment == null
                    && _powerUpLimit === false && powerUpLimitComment == null
                    && _customLimit == null)
                    return this.#PROJECTILE_PROPERTY;
                if (generalLimitOrLimit[0] === false && generalLimitOrLimit[1] == null && globalLimitOrLimitComment[0] === false && globalLimitOrLimitComment[1] == null
                    && _projectileLimit === LimitPropertyContainer.EACH_ONE_SEPARATED_STRING && projectileLimitComment == null
                    && _powerUpLimit === false && powerUpLimitComment == null
                    && _customLimit == null)
                    return this.#SEPARATED_PROJECTILES_PROPERTY;
                if (generalLimitOrLimit[0] === false && generalLimitOrLimit[1] == null && globalLimitOrLimitComment[0] === false && globalLimitOrLimitComment[1] == null
                    && _projectileLimit === LimitPropertyContainer.TEMPORARY_AS_IT_COMES_OUT_STRING && projectileLimitComment == null
                    && _powerUpLimit === false && powerUpLimitComment == null
                    && _customLimit == null)
                    return this.#TEMPORARY_PROJECTILE_PROPERTY;
                if (generalLimitOrLimit[0] === false && generalLimitOrLimit[1] == null && globalLimitOrLimitComment[0] === false && globalLimitOrLimitComment[1] == null
                    && _projectileLimit === false && projectileLimitComment == null
                    && _powerUpLimit === false && powerUpLimitComment == null
                    && _customLimit === EntityLimits.HATCHED_YOSHI_LIMIT && customLimitComment == null)
                    return this.#TEMPORARY_PROJECTILE_PROPERTY;
            }
        }
        switch (editorLimit) {
            case EntityLimits.POWER_UP_ENTITY_LIMIT:
                return this.#POWER_UP_LIMIT_ONLY_PROPERTY;
            case EntityLimits.BLOCK_LIMIT:
                return this.#BLOCK_LIMIT_IN_EDITOR_ONLY_PROPERTY;
            case EntityLimits.OTHER_GROUND_AND_VINE_LIMIT:
                return this.#OTHER_GROUND_AND_VINE_LIMIT_IN_EDITOR_ONLY_PROPERTY;
            case EntityLimits.GENERAL_ENTITY_LIMIT:
                if (generalLimitOrLimit instanceof Array && generalLimitOrLimit[0] === true && generalLimitOrLimit[1] == null
                    && globalLimitOrLimitComment instanceof Array && globalLimitOrLimitComment[0] === false && globalLimitOrLimitComment[1] == null
                    && _powerUpLimit === false && powerUpLimitComment == null
                    && _projectileLimit === false && projectileLimitComment == null) {
                    if (_customLimit == null && customLimitComment == null)
                        return this.#GENERAL_LIMIT_ONLY_PROPERTY;
                    if (_customLimit === EntityLimits.KEY_LIMIT && customLimitComment == null)
                        return this.#KEY_PROPERTY;
                }
                break;
            case EntityLimits.WARP_DOOR_LIMIT:
                return this.#WARP_DOOR_ONLY_PROPERTY;
            case EntityLimits.WARP_BOX_LIMIT:
                return this.#WARP_BOX_ONLY_PROPERTY;
        }
        return new LimitPropertyContainer(editorLimit, generalLimit, powerUpLimit, projectileLimit, customLimit,);
    }

    //endregion -------------------- Provider/Multiton method --------------------

}


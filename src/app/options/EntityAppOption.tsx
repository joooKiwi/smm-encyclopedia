import {Fragment, lazy} from 'react';

import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {Entities}                                                                                                                                                              from '../../core/entity/Entities';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EntityAppOption.types';
import type {EntityAppStates}                                                                                                                                                       from '../AppStates.types';
import type {SingleHeaderContent}                                                                                                                                                   from '../tools/table/SimpleHeader';
import type {ReactElement}                                                                                                                                                          from '../../util/react/ReactProperty';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {AbstractAppOption}             from './AbstractAppOption';
import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component';
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component';
import {CommonOptions}                 from './CommonOptions';
import ContentTranslationComponent     from '../../lang/components/ContentTranslationComponent';
import {Enum}                          from '../../util/enum/Enum';
import {EntityCategories}              from '../../core/entityCategory/EntityCategories';
import {EntityLimitTypes}              from '../../core/entityLimit/EntityLimitTypes';
import {EmptyAppOption}                from './component/EmptyAppOption';
import {EmptyEditorImage}              from '../../core/entity/images/editor/EmptyEditorImage';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Games}                         from '../../core/game/Games';
import {GameStyles}                    from '../../core/gameStyle/GameStyles';
import {Themes}                        from '../../core/theme/Themes';
import {Times}                         from '../../core/time/Times';
import {ViewDisplays}                  from '../withInterpreter/ViewDisplays';

//region -------------------- dynamic imports --------------------

const CourseThemeComponent =        lazy(() => import('../../core/theme/CourseTheme.component'));
const EditorVoiceSoundComponent =   lazy(() => import('../../core/editorVoice/EditorVoiceSound.component'));
const InstrumentPropertyComponent = lazy(() => import( '../../core/entity/properties/instrument/InstrumentProperty.component'));
const GameComponent =               lazy(() => import('../../core/game/Game.component'));
const GameStyleComponent =          lazy(() => import('../../core/gameStyle/GameStyle.component'));
const LimitComponent =              lazy(() => import('../../core/entityLimit/Limit.component'));
const TimeComponent =               lazy(() => import('../../core/time/Time.component'));
const TextComponent =               lazy(() => import( '../tools/text/TextComponent'));

//endregion -------------------- dynamic imports --------------------

/**
 * @todo merge all of the "image" into 1 type
 * @todo merge all of the "game" into 1 type
 * @todo merge all of the "game style" into 1 type
 * @todo merge all of the "time" into 1 type
 * @todo merge all of the "category" into 1 type
 * @todo merge all of the "limit" into 1 type
 */
export abstract class EntityAppOption
    extends AbstractAppOption<boolean, EntityAppStates, Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    /**
     * Display every image.
     */
    public static readonly IMAGES = new class EntityAppOption_Images extends EntityAppOption {

        get #createImageOnEditor(): PossibleRenderReactElement {
            const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();
            const image = enumeration.editorImage;

            return EntityAppOption._gameStyles.map(gameStyle => <Fragment key={`editor image (${enumeration.englishName})`}>{
                [...new Set(EntityAppOption.themes.map(theme =>
                    EntityAppOption.times.map(time => image.get(true, gameStyle, theme, time,)
                        .map((image, index,) => [theme, time, image, index,] as const))).flat(2))]
                    .map(([theme, time, image, index,]) =>
                        <img src={image} alt={`${gameStyle.acronym}-${theme.englishName}-${time.englishName}-${index + 1}`}/>)
            }</Fragment>);
        }

        get #createImageOnClearCondition(): PossibleRenderReactElement {
            const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();
            const image = enumeration.clearConditionImage;

            return EntityAppOption._gameStyles.map(gameStyle =>
                <Fragment key={`clear condition image (${enumeration.englishName})`}>{
                    image.get(gameStyle).map((image, index,) => <img src={image} alt={`${gameStyle.acronym}-${index + 1}`}/>)
                }</Fragment>);
        }

        protected override get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();

                return enumeration.editorImage === EmptyEditorImage.get
                    ? this.#createImageOnClearCondition
                    : this.#createImageOnEditor;
            };
        }

        protected override get _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,
                subHeaders: EntityAppOption._gameStyles.map<SingleHeaderContent>(gameStyle =>
                    ({key: `image-${gameStyle.acronym}`, element: gameStyle.renderSingleComponent,})),
            };
        }

    }(true,);
    /**
     * Display an animation or not.
     *
     * If the value is "separated", then, it will display every image animation separated.
     * @see AnimatedImages
     */
    public static readonly IMAGES_ON_EDITOR = new class EntityAppOption_ImagesOnEditor extends EntityAppOption {}(true,);
    public static readonly IMAGES_ON_CLEAR_CONDITION = new class EntityAppOption_ImagesOnClearCondition extends EntityAppOption {}(true,);
    public static readonly IMAGES_ON_WHILE_PLAYING = new class EntityAppOption_ImagesOnWhilePlaying extends EntityAppOption {}(false,);
    public static readonly IMAGES_ON_UNUSED = new class EntityAppOption_ImagesOnUnused extends EntityAppOption {}(false,);

    public static readonly NAME = new class EntityAppOption_Name extends EntityAppOption {

        protected override get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();

                return <div className="nameAndEditorVoiceSound-container container">
                    {CommonOptions.get.getNameContent(enumeration)}
                    <div className="properties">
                        <InstrumentPropertyComponent value={enumeration}/>
                    </div>
                    <EditorVoiceSoundComponent editorVoiceSound={enumeration.editorVoiceSound} name={enumeration.englishName}/>
                </div>;
            };
        }

        protected override get _createTableHeaderOption(): PossibleOptionWithTable {
            return CommonOptions.get.nameHeader;
        }

    }(true,);

    public static readonly GAME = new class EntityAppOption_Game extends EntityAppOption {

        protected override get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <GameComponent reference={entity} name={entity} displayAllAsText={EntityAppOption.WHEN_ALL_SELECTED_GAME.get}/>;
            };
        }

        protected override get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,};
        }

    }(false,);
    public static readonly WHEN_ALL_SELECTED_GAME = new class EntityAppOption_WhenAllSelectedGame extends EntityAppOption {
    }(false,);

    public static readonly GAME_STYLE = new class EntityAppOption_GameStyle extends EntityAppOption {

        protected override get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <GameStyleComponent reference={entity} name={entity} displayAllAsText={EntityAppOption.WHEN_ALL_SELECTED_GAME_STYLE.get}/>;
            };
        }

        protected override get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'gameStyle', element: <GameContentTranslationComponent translationKey="Game style"/>,};
        }

    }(false,);
    public static readonly WHEN_ALL_SELECTED_GAME_STYLE = new class EntityAppOption_WhenAllSelectedGameStyle extends EntityAppOption {}(false,);

    public static readonly COURSE_THEME = new class EntityAppOption_CourseTheme extends EntityAppOption {

        protected override get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <CourseThemeComponent reference={entity} name={entity} displayAllAsText={EntityAppOption.WHEN_ALL_SELECTED_COURSE_THEME.get}/>;
            };
        }

        protected override get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'courseTheme', element: <GameContentTranslationComponent translationKey="Course theme"/>,};
        }

    }(false,);
    public static readonly WHEN_ALL_SELECTED_COURSE_THEME = new class EntityAppOption_WhenAllSelectedCourseTheme extends EntityAppOption {}(false,);

    public static readonly TIME = new class EntityAppOption_Time extends EntityAppOption {

        protected override get _createContentOption(): PossibleOptionWithContent {

            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <TimeComponent reference={entity} name={entity} displayAllAsText={EntityAppOption.WHEN_ALL_SELECTED_TIME.get}/>;
            };
        }

        protected override get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'time', element: <GameContentTranslationComponent translationKey="Time"/>,};
        }

    }(false,);
    public static readonly WHEN_ALL_SELECTED_TIME = new class EntityAppOption_WhenAllSelectedTime extends EntityAppOption {}(false,);

    public static readonly CATEGORY = new class EntityAppOption_Category extends EntityAppOption {

        protected override get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION(),
                    categoryName = enumeration.reference.categoryNameContainer;

                return CommonOptions.get.getCategoryContent(enumeration,
                    () => EntityAppOption.CATEGORY_AS_TEXT.get
                        ? categoryName
                        : EntityCategories.getValue(categoryName.english)!.imagePath,);
            };
        }

        protected override get _createTableHeaderOption(): PossibleOptionWithTable {
            return CommonOptions.get.categoryHeader;
        }

    }(true,);
    /**
     * Tell whenever a {@link EntityAppOption.CATEGORY category} is displayed
     * as a text (<i>true</i>) or an image (<i>false</i>).
     */
    public static readonly CATEGORY_AS_TEXT = new class EntityAppOption_CategoryAsText extends EntityAppOption {}(false,);

    public static readonly LIMIT = new class EntityAppOption_Limit extends EntityAppOption {

        protected override get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();
                const entity = enumeration.reference;

                const editorLimit_SMM1And3DS = entity.editorLimit_smm1And3ds;
                const editorLimit_SMM2 = entity.editorLimit_smm2;

                return [
                    editorLimit_SMM1And3DS == null
                        ? <TextComponent id={`editor-SuperMarioMaker1And3DS-${enumeration.englishNameInHtml}`} content={'N/A'}/>
                        : <LimitComponent id={`editor-SuperMarioMaker1And3DS-${enumeration.englishNameInHtml}`} limits={editorLimit_SMM1And3DS}
                                          displayAcronymIfApplicable={EntityAppOption.IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT.get}/>,
                    editorLimit_SMM2 == null || editorLimit_SMM2 === 'N/A'
                        ? <TextComponent id={`editor-SuperMarioMaker2-${enumeration.englishNameInHtml}`} content={editorLimit_SMM2} isUnknown={entity.isUnknown_editorLimit_smm2}/>
                        : <LimitComponent id={`editor-SuperMarioMaker2-${enumeration.englishNameInHtml}`} limits={editorLimit_SMM2}
                                          displayAcronymIfApplicable={EntityAppOption.IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT.get}/>,
                    <LimitComponent id={`whilePlaying-${enumeration.englishNameInHtml}`} limits={entity.toLimitWhilePlayingMap()}
                                    displayAcronymIfApplicable={EntityAppOption.IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT.get}/>,
                ];
            };
        }

        protected override get _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'limit', element: <GameContentTranslationComponent translationKey="Limit"/>,
                subHeaders: [
                    {
                        key: 'limit-editor', element: <GameContentTranslationComponent translationKey={EntityLimitTypes.EDITOR.englishCommonText}/>,
                        tooltip: {namespace: 'gameContent', translationKey: 'Limit in the editor',},
                        subHeaders: [
                            {key: 'limit-editor-SuperMarioMaker1And3DS', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                            {key: 'limit-editor-SuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                        ],
                    },
                    {
                        key: 'limit-whilePlaying', element: <GameContentTranslationComponent translationKey={EntityLimitTypes.WHILE_PLAYING.englishCommonText}/>,
                        tooltip: {namespace: 'gameContent', translationKey: 'Limit while playing',},
                    },
                ],
            };
        }

    }(true,);
    public static readonly IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT = new class EntityAppOption_IfApplicableAcronymOnLimitAsText extends EntityAppOption {}(true,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityAppOption;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EveryEntitiesApp} and get by {@link EntityAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => Entities;

    static #gameStyles?: readonly GameStyles[];
    static #gameStyles_unusedImages?: readonly [GameStyles,] | readonly [];
    static #times?: readonly Times[];
    static #themes?: readonly Themes[];

    #appOptionWithContent?: AppOptionWithContent;
    #appOptionWithTable?: AppOptionWithTable;

    //endregion -------------------- Fields --------------------

    private constructor(defaultValue: boolean,) {
        super(defaultValue,);
    }

    //region -------------------- Getter methods --------------------

    public static get createDefaultState(): EntityAppStates {
        return {
            typeDisplayed: ViewDisplays.TABLE,
        };
    }


    protected static get _gameStyles() {
        return this.#gameStyles ??= GameStyles.values;
    }

    protected static get _gameStyles_unusedImages() {
        return this.#gameStyles_unusedImages ??= [GameStyles.SUPER_MARIO_BROS,];
    }

    protected static get times() {
        return this.#times ??= Times.values;
    }

    protected static get themes() {
        return this.#themes ??= Themes.courseThemes;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected get _createContentOption(): PossibleOptionWithContent {
        return null;
    }

    protected get __appOptionWithContent(): AppOptionWithContent {
        if (this.#appOptionWithContent == null) {
            const content = this._createContentOption;
            this.#appOptionWithContent = content == null
                ? EmptyAppOption.get
                : new AppOptionWithContentComponent(content,);
        }
        return this.#appOptionWithContent;
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent;
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected get _createTableHeaderOption(): PossibleOptionWithTable {
        return null;
    }

    protected get __appOptionWithTable(): AppOptionWithTable {
        if (this.#appOptionWithTable == null) {
            const content = this._createTableHeaderOption;
            this.#appOptionWithTable = content == null ? EmptyAppOption.get : new AppOptionWithTableComponent(() => content,);
        }
        return this.#appOptionWithTable;
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<EntityAppOption> {
        return EntityAppOption;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends EntityAppOption = EntityAppOption, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EntityAppOption
    public static getValue(value: PossibleValue,): | EntityAppOption | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleOptionWithContent = | (() => PossibleRenderReactElement) | null;
type PossibleOptionWithTable = | SingleHeaderContent | null;

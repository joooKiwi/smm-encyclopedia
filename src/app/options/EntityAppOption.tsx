import {Fragment, lazy} from 'react';

import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {AppOptionStatic}                                                                                                                                                       from './AppOption';
import type {Entities}                                                                                                                                                              from '../../core/entity/Entities';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EntityAppOption.types';
import type {PossibleEnglishName as PossibleEnglishName_Category}                                                                                                                   from '../../core/entityCategory/EntityCategories.types';
import type {EntityAppStates, PossibleImageAnimation}                                                                                                                               from '../AppStates.types';
import type {SingleHeaderContent}                                                                                                                                                   from '../tools/table/SimpleHeader';
import type {ReactComponentWithState}                                                                                                                                               from '../../util/react/ReactComponent';
import type {ReactElement}                                                                                                                                                          from '../../util/react/ReactProperty';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {AbstractAppOption}               from './AbstractAppOption';
import {AppOptionWithContentComponent}   from './component/AppOptionWithContent.component';
import {AppOptionWithTableComponent}     from './component/AppOptionWithTable.component';
import ContentTranslationComponent       from '../../lang/components/ContentTranslationComponent';
import {Enum}                            from '../../util/enum/Enum';
import {EntityCategories}                from '../../core/entityCategory/EntityCategories';
import {EntityLimitTypes}                from '../../core/entityLimit/EntityLimitTypes';
import {EMPTY_ARRAY}                     from '../../util/emptyVariables';
import {EMPTY_REACT_ELEMENT}             from '../../util/emptyReactVariables';
import {EmptyAppOption}                  from './component/EmptyAppOption';
import {EmptyEditorImage}                from '../../core/entity/images/editor/EmptyEditorImage';
import {EmptyName}                       from '../../lang/name/EmptyName';
import {GameContentTranslationContainer} from '../../lang/containers/GameContentTranslation.container';
import GameContentTranslationComponent   from '../../lang/components/GameContentTranslationComponent';
import {GameStyles}                      from '../../core/gameStyle/GameStyles';
import {ProjectLanguages}                from '../../lang/ProjectLanguages';
import {Themes}                          from '../../core/theme/Themes';
import {Times}                           from '../../core/time/Times';

//region -------------------- dynamic imports --------------------

const CourseThemeComponent = lazy(() => import('../../core/theme/CourseTheme.component'));
const GameComponent =        lazy(() => import('../../core/game/Game.component'));
const GameStyleComponent =   lazy(() => import('../../core/gameStyle/GameStyle.component'));
const Image =                lazy(() => import('../tools/images/Image'));
const LimitComponent =       lazy(() => import('../../core/entityLimit/Limit.component'));
const NameComponent =        lazy(() => import('../../lang/name/component/Name.component'));
const TimeComponent =        lazy(() => import('../../core/time/Time.component'));

//endregion -------------------- dynamic imports --------------------

export abstract class EntityAppOption<T = | boolean | PossibleImageAnimation, >
    extends AbstractAppOption<T, EntityAppStates, Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    /**
     * Display every images.
     */
    public static readonly IMAGES =                                 new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.section.images;
        }

        protected _set(nextState: EntityAppStates, value: boolean,): void {
            nextState.display.section.images = value;
        }

        private get __createImageOnEditor(): PossibleRenderReactElement {
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

        private get __createImageOnClearCondition(): PossibleRenderReactElement {
            const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();
            const image = enumeration.clearConditionImage;

            return EntityAppOption._gameStyles.map(gameStyle =>
                <Fragment key={`clear condition image (${enumeration.englishName})`}>{
                    image.get(gameStyle).map((image, index,) => <img src={image} alt={`${gameStyle.acronym}-${index + 1}`}/>)
                }</Fragment>);
        }

        protected get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();

                return enumeration.editorImage === EmptyEditorImage.get
                    ? this.__createImageOnClearCondition
                    : this.__createImageOnEditor;
            };
        }

        protected get _createTableHeaderOption(): PossibleOptionWithTable {
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
    public static readonly IMAGE_ANIMATION =                        new class extends EntityAppOption<PossibleImageAnimation> {

        protected _get(state: EntityAppStates,): PossibleImageAnimation {
            return state.display.imageAnimations;
        }

        protected _set(nextState: EntityAppStates, value: PossibleImageAnimation,) {
            nextState.display.imageAnimations = value;
        }

    }(true,);
    public static readonly IMAGES_ON_EDITOR =                       new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.images.editor;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.images.editor = value;
        }

    }(true,);
    public static readonly IMAGES_ON_CLEAR_CONDITION =              new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.images.clearCondition;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.images.clearCondition = value;
        }

    }(true,);
    public static readonly IMAGES_ON_WHILE_PLAYING =                new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.images.whilePlaying;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.images.whilePlaying = value;
        }

    }(false,);
    public static readonly IMAGES_ON_UNUSED =                       new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.images.unused;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.images.unused = value;
        }

    }(false,);

    public static readonly NAME =                                   new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.section.name;
        }

        protected _set(nextState: EntityAppStates, value: boolean,): void {
            nextState.display.section.name = value;
        }


        protected get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <NameComponent id="name" name={entity} popoverOrientation="right"/>;
            };
        }

        protected get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,};
        }

    }(true,);

    public static readonly GAME =                                   new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.section.game;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.section.game = value;
        }

        protected get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <GameComponent reference={entity} name={entity} displayAllAsText={EntityAppOption.WHEN_ALL_SELECTED_GAME.get}/>;
            };
        }

        protected get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,};
        }

    }(true,);
    public static readonly WHEN_ALL_SELECTED_GAME =                 new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.asText.whenAll.game;
        }

        protected _set(nextState: EntityAppStates, value: boolean,): void {
            nextState.display.asText.whenAll.game = value;
        }

    }(false,);

    public static readonly GAME_STYLE =                             new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.section.gameStyle;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.section.gameStyle = value;
        }

        protected get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <GameStyleComponent reference={entity} name={entity} displayAllAsText={EntityAppOption.WHEN_ALL_SELECTED_GAME_STYLE.get}/>;
            };
        }

        protected get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'gameStyle', element: <GameContentTranslationComponent translationKey="Game style"/>,};
        }

    }(true,);
    public static readonly WHEN_ALL_SELECTED_GAME_STYLE =           new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.asText.whenAll.gameStyle;
        }

        protected _set(nextState: EntityAppStates, value: boolean,): void {
            nextState.display.asText.whenAll.gameStyle = value;
        }

    }(false,);

    public static readonly COURSE_THEME =                           new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.section.courseTheme;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.section.courseTheme = value;
        }

        protected get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <CourseThemeComponent reference={entity} name={entity} displayAllAsText={EntityAppOption.WHEN_ALL_SELECTED_COURSE_THEME.get}/>;
            };
        }

        protected get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'courseTheme', element: <GameContentTranslationComponent translationKey="Course theme"/>,};
        }

    }(true,);
    public static readonly WHEN_ALL_SELECTED_COURSE_THEME =         new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.asText.whenAll.courseTheme;
        }

        protected _set(nextState: EntityAppStates, value: boolean,): void {
            nextState.display.asText.whenAll.courseTheme = value;
        }

    }(false,);

    public static readonly TIME =                                   new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.section.time;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.section.time = value;
        }

        protected get _createContentOption(): PossibleOptionWithContent {

            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference;

                return <TimeComponent reference={entity} name={entity} displayAllAsText={EntityAppOption.WHEN_ALL_SELECTED_TIME.get}/>;
            };
        }

        protected get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'time', element: <GameContentTranslationComponent translationKey="Time"/>,};
        }

    }(true,);
    public static readonly WHEN_ALL_SELECTED_TIME =                 new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.asText.whenAll.time;
        }

        protected _set(nextState: EntityAppStates, value: boolean,): void {
            nextState.display.asText.whenAll.time = value;
        }

    }(false,);

    public static readonly CATEGORY =                               new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.section.category;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.section.category = value;
        }

        protected get _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();
                const categoryName = enumeration.reference.categoryName;
                if (categoryName === EmptyName.get)
                    return EMPTY_REACT_ELEMENT;

                if (EntityAppOption.CATEGORY_AS_TEXT.get)
                    return <NameComponent id={`category-name-${enumeration.englishNameInHtml}`} name={categoryName} popoverOrientation="left"/>;

                const categoryEnglishName = ProjectLanguages.getEnglish(categoryName) as PossibleEnglishName_Category;
                return <Image source={EntityCategories.getValue(categoryEnglishName).imagePath} fallbackName={`${categoryEnglishName} - image`}/>;
            };
        }

        protected get _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'category', element: <GameContentTranslationComponent translationKey="Category"/>,};
        }

    }(true,);
    /**
     * Tell whenever a {@link EntityAppOption.CATEGORY category} is displayed
     * as a text (<i>true</i>) or an image (<i>false</i>).
     */
    public static readonly CATEGORY_AS_TEXT =                       new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.asText.category;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.asText.category = value;
        }

    }(false,);

    public static readonly LIMIT =                                  new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.section.limit;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.section.limit = value;
        }

        protected get _createContentOption(): PossibleOptionWithContent {
            return () => {

                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION();
                const entity = enumeration.reference;

                return [<LimitComponent id={`editor-${enumeration.englishNameInHtml}`} limits={entity.toLimitInTheEditorMap()}
                                        displayAcronymIfApplicable={EntityAppOption.IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT.get}/>,
                    <LimitComponent id={`whilePlaying-${enumeration.englishNameInHtml}`} limits={entity.toLimitWhilePlayingMap()}
                                    displayAcronymIfApplicable={EntityAppOption.IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT.get}/>,
                ];
            };
        }

        protected get _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'limit', element: <GameContentTranslationComponent translationKey="Limit"/>,
                subHeaders: [
                    {
                        key: 'limit-editor', element: <GameContentTranslationComponent translationKey={EntityLimitTypes.EDITOR.englishCommonText}/>,
                        tooltip: new GameContentTranslationContainer('Limit in the editor'),
                    },
                    {
                        key: 'limit-whilePlaying', element: <GameContentTranslationComponent translationKey={EntityLimitTypes.WHILE_PLAYING.englishCommonText}/>,
                        tooltip: new GameContentTranslationContainer('Limit while playing'),
                    },
                ],
            };
        }

    }(true,);
    public static readonly IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT = new class extends EntityAppOption<boolean> {

        protected _get(state: EntityAppStates,): boolean {
            return state.display.asText.ifApplicable.acronymOnLimits;
        }

        protected _set(nextState: EntityAppStates, value: boolean,) {
            nextState.display.asText.ifApplicable.acronymOnLimits = value;
        }

    }(true,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: EntityAppOption;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE: ReactComponentWithState<EntityAppStates>;
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

    //endregion -------------------- Attributes --------------------

    private constructor(defaultValue: T,) {
        super(defaultValue,);
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE(): ReactComponentWithState<EntityAppStates> {
        return this.#REFERENCE;
    }

    public static set REFERENCE(value: ReactComponentWithState<EntityAppStates>,) {
        this.#REFERENCE = value;
    }

    public static get createDefaultState(): EntityAppStates {
        return {
            display: {
                section: {
                    images: EntityAppOption.IMAGES._lastValueRetrieved,
                    name: EntityAppOption.NAME._lastValueRetrieved,
                    game: EntityAppOption.GAME._lastValueRetrieved,
                    gameStyle: EntityAppOption.GAME_STYLE._lastValueRetrieved,
                    courseTheme: EntityAppOption.COURSE_THEME._lastValueRetrieved,
                    time: EntityAppOption.TIME._lastValueRetrieved,
                    category: EntityAppOption.CATEGORY._lastValueRetrieved,
                    limit: EntityAppOption.LIMIT._lastValueRetrieved,
                },
                imageAnimations: EntityAppOption.IMAGE_ANIMATION._lastValueRetrieved,
                asText: {
                    category: EntityAppOption.CATEGORY_AS_TEXT._lastValueRetrieved,
                    whenAll: {
                        game: EntityAppOption.WHEN_ALL_SELECTED_GAME._lastValueRetrieved,
                        gameStyle: EntityAppOption.WHEN_ALL_SELECTED_GAME_STYLE._lastValueRetrieved,
                        courseTheme: EntityAppOption.WHEN_ALL_SELECTED_COURSE_THEME._lastValueRetrieved,
                        time: EntityAppOption.WHEN_ALL_SELECTED_TIME._lastValueRetrieved,
                    },
                    ifApplicable: {
                        acronymOnLimits: EntityAppOption.IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT._lastValueRetrieved,
                    },
                },
                images: {
                    editor: EntityAppOption.IMAGES_ON_EDITOR._lastValueRetrieved,
                    clearCondition: EntityAppOption.IMAGES_ON_CLEAR_CONDITION._lastValueRetrieved,
                    whilePlaying: EntityAppOption.IMAGES_ON_WHILE_PLAYING._lastValueRetrieved,
                    unused: EntityAppOption.IMAGES_ON_UNUSED._lastValueRetrieved,
                },
            },
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
        return this.get
            ? this.__appOptionWithContent.renderContent
            : EMPTY_ARRAY;
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
        return this.get
            ? this.__appOptionWithTable.renderTableHeader
            : null;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<EntityAppOption> & AppOptionStatic<EntityAppStates> {
        return EntityAppOption;
    }

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
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleOptionWithContent = | (() => PossibleRenderReactElement) | null;
type PossibleOptionWithTable = | SingleHeaderContent | null;
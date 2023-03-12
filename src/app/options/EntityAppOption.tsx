import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'
import {Fragment, lazy}                                                          from 'react'

import type {Names, Ordinals}                                  from 'app/options/EntityAppOption.types'
import type {AppOptionWithContent, PossibleRenderReactElement} from 'app/options/component/AppOptionWithContent'
import type {AppOptionWithTable}                               from 'app/options/component/AppOptionWithTable'
import type {SingleHeaderContent}                              from 'app/tools/table/SimpleHeader'
import type {Entities}                                         from 'core/entity/Entities'
import type {ReactElement}                                     from 'util/react/ReactProperties'
import type {NullOr}                                           from 'util/types/nullable'
import type {EmptyArray}                                       from 'util/types/variables'

import {CommonOptions}                              from 'app/options/CommonOptions'
import {AppOptionWithContentComponent}              from 'app/options/component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}                from 'app/options/component/AppOptionWithTable.component'
import {EmptyAppOption}                             from 'app/options/component/EmptyAppOption'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {EntityCategories}                           from 'core/entityCategory/EntityCategories'
import {Games}                                      from 'core/game/Games'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import {Themes}                                     from 'core/theme/Themes'
import {Times}                                      from 'core/time/Times'

//region -------------------- dynamic imports --------------------

const CourseThemeComponent =        lazy(() => import('core/theme/CourseTheme.component'))
const EditorVoiceSoundComponent =   lazy(() => import('core/editorVoice/EditorVoiceSound.component'))
const Image =                       lazy(() => import('app/tools/images/Image'))
const InstrumentPropertyComponent = lazy(() => import('core/entity/properties/instrument/InstrumentProperty.component'))
const GameComponent =               lazy(() => import('core/game/Game.component'))
const GameStyleComponent =          lazy(() => import('core/gameStyle/GameStyle.component'))
const LimitComponent =              lazy(() => import('core/entityLimit/Limit.component'))
const TimeComponent =               lazy(() => import('core/time/Time.component'))
const TextComponent =               lazy(() => import('app/tools/text/TextComponent'))

//endregion -------------------- dynamic imports --------------------

/**
 * @todo convert the "_createTableHeaderOption" to have the enumerable as an argument and to be non-null
 * @todo merge all of the "image" into 1 type
 * @todo merge all of the "game" into 1 type
 * @todo merge all of the "game style" into 1 type
 * @todo merge all of the "time" into 1 type
 * @todo merge all of the "category" into 1 type
 * @todo merge all of the "limit" into 1 type
 */
export class EntityAppOption
    extends Enum<Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    /**
     * Display every image.
     */
    public static readonly IMAGES = new class EntityAppOption_Images extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION(),
                    {englishName, englishNameInHtml, uniqueImage,} = enumeration

                return EntityAppOption._gameStyles.map(gameStyle => <Fragment key={`unique image (${englishName})`}>{
                    uniqueImage.get(gameStyle).map(image =>
                        <Image className={`entity-image ${englishNameInHtml}-image`} file={image}/>)
                }</Fragment>)
            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'image', element: contentTranslation('Image'),
                subHeaders: EntityAppOption._gameStyles.map<SingleHeaderContent>(gameStyle =>
                    ({key: `image-${gameStyle.acronym}`, element: gameStyle.renderSingleComponent,})),
            }
        }

    }()
    /**
     * Display an animation or not.
     *
     * If the value is "separated", then, it will display every image animation separated.
     * @see AnimatedImages
     */
    public static readonly IMAGES_ON_EDITOR = new EntityAppOption()
    public static readonly IMAGES_ON_CLEAR_CONDITION = new EntityAppOption()
    public static readonly IMAGES_ON_WHILE_PLAYING = new EntityAppOption()
    public static readonly IMAGES_ON_UNUSED = new EntityAppOption()

    public static readonly NAME = new class EntityAppOption_Name extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION()

                return <div className="nameAndEditorVoiceSound-container container">
                    {CommonOptions.get.getNameContent(enumeration)}
                    <div className="properties">
                        <InstrumentPropertyComponent value={enumeration}/>
                    </div>
                    <EditorVoiceSoundComponent editorVoiceSound={enumeration.editorVoiceSoundFileHolder} name={enumeration.englishName}/>
                </div>
            }
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }()

    public static readonly GAME = new class EntityAppOption_Game extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference

                return <GameComponent reference={entity} name={entity} displayAllAsText/>
            }
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.gameHeader
        }

    }()
    public static readonly WHEN_ALL_SELECTED_GAME = new EntityAppOption()

    public static readonly GAME_STYLE = new class EntityAppOption_GameStyle extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference

                return <GameStyleComponent reference={entity} name={entity} displayAllAsText/>
            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'gameStyle', element: gameContentTranslation('game style.singular'),}
        }

    }()
    public static readonly WHEN_ALL_SELECTED_GAME_STYLE = new EntityAppOption()

    public static readonly COURSE_THEME = new class EntityAppOption_CourseTheme extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference

                return <CourseThemeComponent reference={entity} name={entity} displayAllAsText/>
            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'courseTheme', element: gameContentTranslation('theme.course.singular'),}
        }

    }()
    public static readonly WHEN_ALL_SELECTED_COURSE_THEME = new EntityAppOption()

    public static readonly TIME = new class EntityAppOption_Time extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const entity = EntityAppOption.CALLBACK_TO_GET_ENUMERATION().reference

                return <TimeComponent reference={entity} name={entity} displayAllAsText/>
            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'time', element: gameContentTranslation('time.singular'),}
        }

    }()
    public static readonly WHEN_ALL_SELECTED_TIME = new EntityAppOption()

    public static readonly CATEGORY = new class EntityAppOption_Category extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION(),
                    categoryName = enumeration.reference.categoryNameContainer

                return CommonOptions.get.getCategoryContent(enumeration, () => EntityCategories.getValueByName(categoryName.english).imageFile,)
            }
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.categoryHeader
        }

    }()
    /**
     * Tell whenever a {@link EntityAppOption.CATEGORY category} is displayed
     * as a text (<i>true</i>) or an image (<i>false</i>).
     */
    public static readonly CATEGORY_AS_TEXT = new EntityAppOption()

    public static readonly LIMIT = new class EntityAppOption_Limit extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION()
                const entity = enumeration.reference

                const editorLimit_SMM1And3DS = entity.editorLimit_smm1And3ds
                const editorLimit_SMM2 = entity.editorLimit_smm2

                return [
                    editorLimit_SMM1And3DS == null
                        ? <TextComponent id={`editor-SuperMarioMaker1And3DS-${enumeration.englishNameInHtml}`} content={'N/A'}/>
                        : <LimitComponent id={`editor-SuperMarioMaker1And3DS-${enumeration.englishNameInHtml}`} limits={editorLimit_SMM1And3DS} displayAcronymIfApplicable/>,
                    editorLimit_SMM2 == null || editorLimit_SMM2 === 'N/A'
                        ? <TextComponent id={`editor-SuperMarioMaker2-${enumeration.englishNameInHtml}`} content={editorLimit_SMM2} isUnknown={entity.isUnknown_editorLimit_smm2}/>
                        : <LimitComponent id={`editor-SuperMarioMaker2-${enumeration.englishNameInHtml}`} limits={editorLimit_SMM2} displayAcronymIfApplicable/>,
                    <LimitComponent id={`whilePlaying-${enumeration.englishNameInHtml}`} limits={entity.toLimitWhilePlayingMap()} displayAcronymIfApplicable/>,
                ]
            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'limit', element: gameContentTranslation('limit.singular'),
                subHeaders: [
                    {
                        key: 'limit-editor', element: gameContentTranslation('limit.editor.value'),
                        tooltip: gameContentTranslation('limit.editor.limit'),
                        subHeaders: [
                            {key: 'limit-editor-SuperMarioMaker1And3DS', alt: Games.SUPER_MARIO_MAKER_1.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_1.imageFile.fullName,},
                            {key: 'limit-editor-SuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_2.imageFile.fullName,},
                        ],
                    },
                    {
                        key: 'limit-whilePlaying', element: gameContentTranslation('limit.play.value'),
                        tooltip: gameContentTranslation('limit.play.limit'),
                    },
                ],
            }
        }

    }()
    public static readonly IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT = new EntityAppOption()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityAppOption

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EntityApp} and get by {@link EntityAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => Entities

    static #gameStyles?: readonly GameStyles[]
    static #gameStyles_unusedImages?: | readonly [GameStyles,] | EmptyArray
    static #times?: readonly Times[]
    static #themes?: readonly Themes[]

    #appOptionWithContent?: AppOptionWithContent
    #appOptionWithTable?: AppOptionWithTable

    //endregion -------------------- Fields --------------------

    private constructor() {
        super()
    }

    //region -------------------- Getter methods --------------------

    protected static get _gameStyles(): readonly GameStyles[] {
        return this.#gameStyles ??= GameStyles.values.toArray()
    }

    protected static get _gameStyles_unusedImages(): | readonly [GameStyles,] | EmptyArray {
        return this.#gameStyles_unusedImages ??= [GameStyles.SUPER_MARIO_BROS,]
    }

    protected static get times(): readonly Times[] {
        return this.#times ??= Times.values.toArray()
    }

    protected static get themes(): readonly Themes[] {
        return this.#themes ??= Themes.courseThemes
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected _createContentOption(): PossibleOptionWithContent {
        return null
    }

    private get __appOptionWithContent(): AppOptionWithContent {
        if (this.#appOptionWithContent == null) {
            const content = this._createContentOption()
            this.#appOptionWithContent = content == null
                ? EmptyAppOption.get
                : new AppOptionWithContentComponent(content,)
        }
        return this.#appOptionWithContent
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected _createTableHeaderOption(): PossibleOptionWithTable {
        return null
    }

    private get __appOptionWithTable(): AppOptionWithTable {
        if (this.#appOptionWithTable == null) {
            const content = this._createTableHeaderOption()
            this.#appOptionWithTable = content == null ? EmptyAppOption.get : new AppOptionWithTableComponent(() => content,)
        }
        return this.#appOptionWithTable
    }

    public get renderTableHeader(): NullOr<SingleHeaderContent> {
        return this.__appOptionWithTable.renderTableHeader
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EntityAppOption
    }

    public static getValue(value: PossibleValueByEnumerable<EntityAppOption>,): EntityAppOption {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EntityAppOption> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<EntityAppOption> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleOptionWithContent = NullOr<() => PossibleRenderReactElement>
type PossibleOptionWithTable = NullOr<SingleHeaderContent>

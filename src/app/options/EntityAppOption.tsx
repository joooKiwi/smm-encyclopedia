import type {CollectionHolder, CollectionIterator}              from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'
import {Fragment}                                               from 'react'

import type {Names, Ordinals}                                  from 'app/options/EntityAppOption.types'
import type {AppOptionWithContent, PossibleRenderReactElement} from 'app/options/component/AppOptionWithContent'
import type {AppOptionWithTable}                               from 'app/options/component/AppOptionWithTable'
import type {SingleHeaderContent}                              from 'app/tools/table/SimpleHeader'
import type {Entities}                                         from 'core/entity/Entities'

import {CommonOptions}                              from 'app/options/CommonOptions'
import {AppOptionWithContentComponent}              from 'app/options/component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}                from 'app/options/component/AppOptionWithTable.component'
import {EmptyAppOption}                             from 'app/options/component/EmptyAppOption'
import Image                                        from 'app/tools/images/Image'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import InstrumentPropertyComponent                  from 'core/entity/properties/instrument/InstrumentProperty.component'
import {EntityCategories}                           from 'core/entityCategory/EntityCategories'
import PlayLimitComponent                           from 'core/entityLimit/PlayLimit.component'
import SMM1And3DSEditorLimitComponent               from 'core/entityLimit/SMM1And3DSEditorLimit.component'
import SMM2EditorLimitComponent                     from 'core/entityLimit/SMM2EditorLimit.component'
import {Games}                                      from 'core/game/Games'
import GameComponent                                from 'core/game/Game.component'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleComponent                           from 'core/gameStyle/GameStyle.component'
import CourseThemeComponent                         from 'core/theme/CourseTheme.component'
import {Themes}                                     from 'core/theme/Themes'
import {Times}                                      from 'core/time/Times'
import TimeComponent                                from 'core/time/Time.component'

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

                return <TimeComponent reference={entity} name={entity} displayAllAsText={false}/>
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

                return [
                    <SMM1And3DSEditorLimitComponent reference={enumeration}/>,
                    <SMM2EditorLimitComponent reference={enumeration}/>,
                    <PlayLimitComponent reference={enumeration}/>,
                ]
            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return CommonOptions.get.getLimitHeader(
                CommonOptions.get.getPlayLimitHeader(
                    {key: 'limit-editor-SuperMarioMaker1And3DS', alt: Games.SUPER_MARIO_MAKER_1.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_1.imageFile.fullName,},
                    {key: 'limit-editor-SuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_2.imageFile.fullName,},
                ),
                CommonOptions.get.editorLimitHeader,
            )
        }

    }()
    public static readonly LIMIT_IN_SMM1_AND_3DS = new class EntityLimitOption_LimitInSMM1And3DS extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION()

                return [
                    <SMM1And3DSEditorLimitComponent reference={enumeration}/>,
                    <PlayLimitComponent reference={enumeration}/>,
                ]
            }
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.limitWithSubHeaders
        }

    }()
    public static readonly LIMIT_IN_SMM2 = new class EntityLimitOption_LimitInSMM2 extends EntityAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = EntityAppOption.CALLBACK_TO_GET_ENUMERATION()

                return [
                    <SMM2EditorLimitComponent reference={enumeration}/>,
                    <PlayLimitComponent reference={enumeration}/>,
                ]
            }
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.limitWithSubHeaders
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<EntityAppOption, typeof EntityAppOption> = class CompanionEnum_EntityAppOption
        extends CompanionEnum<EntityAppOption, typeof EntityAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityAppOption

        private constructor() {
            super(EntityAppOption,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
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
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
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

    public static getValue(value: PossibleEnumerableValueBy<EntityAppOption>,): EntityAppOption {
        return EntityAppOption.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<EntityAppOption> {
        return EntityAppOption.CompanionEnum.get.values
    }

    public static [Symbol.iterator](): CollectionIterator<EntityAppOption> {
        return EntityAppOption.CompanionEnum.get[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleOptionWithContent = NullOr<() => PossibleRenderReactElement>
type PossibleOptionWithTable = NullOr<SingleHeaderContent>

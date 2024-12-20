import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOr}                 from '@joookiwi/type'
import {forEachByArray}              from '@joookiwi/collection'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'
import {Fragment}                    from 'react'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/EntityAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {Entities}            from 'core/entity/Entities'

import {isInProduction}                 from 'variables'
import {CommonOptions}                  from 'app/options/CommonOptions'
import Image                            from 'app/tools/images/Image'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import EditorVoiceSoundComponent        from 'core/editorVoice/EditorVoiceSound.component'
import CanBeFiredOutOfABulletLauncher   from 'core/entity/properties/component/CanBeFiredOutOfABulletLauncher'
import CanBeInAParachute                from 'core/entity/properties/component/CanBeInAParachute'
import CanBePutInABlock                 from 'core/entity/properties/component/CanBePutInABlock'
import CanBePutInAClownCar              from 'core/entity/properties/component/CanBePutInAClownCar'
import CanBePutInALakituCloud           from 'core/entity/properties/component/CanBePutInALakituCloud'
import CanBePutInATree                  from 'core/entity/properties/component/CanBePutInATree'
import CanBePutOnASwingingClaw          from 'core/entity/properties/component/CanBePutOnASwingingClaw'
import CanBeStacked                     from 'core/entity/properties/component/CanBeStacked'
import CanBeThrownByALakitu             from 'core/entity/properties/component/CanBeThrownByALakitu'
import CanContainOrSpawnAKey            from 'core/entity/properties/component/CanContainOrSpawnAKey'
import CanHaveWings                     from 'core/entity/properties/component/CanHaveWings'
import CanMakeASoundOutOfAMusicBlock    from 'core/entity/properties/component/CanMakeASoundOutOfAMusicBlock'
import CanSpawnOutOfAPipe               from 'core/entity/properties/component/CanSpawnOutOfAPipe'
import HasAMushroomVariant              from 'core/entity/properties/component/HasAMushroomVariant'
import IsAffectedDirectlyByAnOnOffState from 'core/entity/properties/component/IsAffectedDirectlyByAnOnOffState'
import {EntityCategories}               from 'core/entityCategory/EntityCategories'
import EntityCategoryIcon               from 'core/entityCategory/component/EntityCategoryIcon'
import GameComponent                    from 'core/game/Game.component'
import {GameStyles}                     from 'core/gameStyle/GameStyles'
import GameStyleComponent               from 'core/gameStyle/GameStyle.component'
import GameStyleImage                   from 'core/gameStyle/component/GameStyleImage'
import PlayLimitComponent               from 'core/limit/PlayLimit.component'
import SMM1And3DSEditorLimitComponent   from 'core/limit/SMM1And3DSEditorLimit.component'
import SMM2EditorLimitComponent         from 'core/limit/SMM2EditorLimit.component'
import CourseThemeComponent             from 'core/theme/CourseTheme.component'
import TimeComponent                    from 'core/time/Time.component'
import {Empty}                          from 'util/emptyVariables'

import CategoryCompanion = EntityCategories.Companion
import EMPTY_STRING =      Empty.EMPTY_STRING
import NSMBU =             GameStyles.NSMBU
import SMB =               GameStyles.SMB
import SMB3 =              GameStyles.SMB3
import SMW =               GameStyles.SMW
import SM3DW =             GameStyles.SM3DW

export class EntityAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<Entities> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE_IN_SMB = new class EntityAppOption_Images extends EntityAppOption {

        protected override _createContentOption({englishName, englishNameInHtml, image,}: Entities,) {
            const imageFiles = image.get(SMB,)
            if (imageFiles == null) {
                if (!isInProduction)
                    console.warn("The images were null when attempting to retrieve the SMB images", image,)
                return null
            }

            const images = new Array<ReactJSXElement>(imageFiles.length,)
            forEachByArray(imageFiles, (it, i,) =>
                images[i] = <Image key={`Entity image (${englishName} - SMB - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>,)
            return <Fragment key={`unique image (${englishName})`}>{images}</Fragment>
        }

        protected override _createTableHeaderOption() {
            return {key: `image-smb`, element: <GameStyleImage reference={SMB}/>,} as const satisfies SingleHeaderContent
        }

    }('smb-images',)
    public static readonly IMAGE_IN_SMB3 = new class EntityAppOption_Images extends EntityAppOption {

        protected override _createContentOption({englishName, englishNameInHtml, image,}: Entities,) {
            const imageFiles = image.get(SMB3,)
            if (imageFiles == null) {
                if (!isInProduction)
                    console.warn("The images were null when attempting to retrieve the SMB3 images", image,)
                return null
            }

            const images = new Array<ReactJSXElement>(imageFiles.length,)
            forEachByArray(imageFiles, (it, i,) =>
                images[i] = <Image key={`Entity image (${englishName} - SMB3 - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>,)
            return <Fragment key={`unique image (${englishName})`}>{images}</Fragment>
        }

        protected override _createTableHeaderOption() {
            return {key: `image-smb3`, element: <GameStyleImage reference={SMB3}/>,} as const satisfies SingleHeaderContent
        }

    }('smb3-images',)
    public static readonly IMAGE_IN_SMW = new class EntityAppOption_Images extends EntityAppOption {

        protected override _createContentOption({englishName, englishNameInHtml, image,}: Entities,) {
            const imageFiles = image.get(SMW,)
            if (imageFiles == null) {
                if (!isInProduction)
                    console.warn("The images were null when attempting to retrieve the SMW images", image,)
                return null
            }

            const images = new Array<ReactJSXElement>(imageFiles.length,)
            forEachByArray(imageFiles, (it, i,) =>
                images[i] = <Image key={`Entity image (${englishName} - SMW - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>,)
            return <Fragment key={`unique image (${englishName})`}>{images}</Fragment>
        }

        protected override _createTableHeaderOption() {
            return {key: `image-smw`, element: <GameStyleImage reference={SMW}/>,} as const satisfies SingleHeaderContent
        }

    }('smw-images',)
    public static readonly IMAGE_IN_NSMBU = new class EntityAppOption_Images extends EntityAppOption {

        protected override _createContentOption({englishName, englishNameInHtml, image,}: Entities,) {
            const imageFiles = image.get(NSMBU,)
            if (imageFiles == null) {
                if (!isInProduction)
                    console.warn("The images were null when attempting to retrieve the NSMBU images", image,)
                return null
            }

            const images = new Array<ReactJSXElement>(imageFiles.length,)
            forEachByArray(imageFiles, (it, i,) =>
                    images[i] = <Image key={`Entity image (${englishName} - NSMBU - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>,)
            return <Fragment key={`unique image (${englishName})`}>{images}</Fragment>
        }

        protected override _createTableHeaderOption() {
            return {key: `image-nsmbu`, element: <GameStyleImage reference={NSMBU}/>,} as const satisfies SingleHeaderContent
        }

    }('nsmbu-images',)
    public static readonly IMAGE_IN_SM3DW = new class EntityAppOption_Images extends EntityAppOption {

        protected override _createContentOption({englishName, englishNameInHtml, image,}: Entities,) {
            const imageFiles = image.get(SM3DW,)
            if (imageFiles == null) {
                if (!isInProduction)
                    console.warn("The images were null when attempting to retrieve the SM3DW images", image,)
                return null
            }

            const images = new Array<ReactJSXElement>(imageFiles.length,)
            forEachByArray(imageFiles, (it, i,) =>
                    images[i] = <Image key={`Entity image (${englishName} - SM3DW - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>,)
            return <Fragment key={`unique image (${englishName})`}>{images}</Fragment>
        }

        protected override _createTableHeaderOption() {
            return {key: `image-sm3dw`, element: <GameStyleImage reference={SM3DW}/>,} as const satisfies SingleHeaderContent
        }

    }('sm3dw-images',)

    public static readonly NAME = new class EntityAppOption_Name extends EntityAppOption {

        protected override _createContentOption(enumeration: Entities,) {
            return <div className="nameAndEditorVoiceSound-container container">
                <div className="nameAndEditorVoiceSound-nameAndProperties-container">
                    <div className="properties">
                        <HasAMushroomVariant value={enumeration}/>
                        <CanBeInAParachute value={enumeration}/>
                        <CanHaveWings value={enumeration}/>
                        <CanMakeASoundOutOfAMusicBlock value={enumeration}/>
                        <CanContainOrSpawnAKey value={enumeration}/>
                        <IsAffectedDirectlyByAnOnOffState value={enumeration}/>
                        <CanSpawnOutOfAPipe value={enumeration}/>
                        <CanBePutOnASwingingClaw value={enumeration}/>
                        <CanBeThrownByALakitu value={enumeration}/>
                        <CanBePutInALakituCloud value={enumeration}/>
                        <CanBePutInAClownCar value={enumeration}/>
                        <CanBeFiredOutOfABulletLauncher value={enumeration}/>
                        <CanBePutInABlock value={enumeration}/>
                        <CanBePutInATree value={enumeration}/>
                        <CanBeStacked value={enumeration}/>
                    </div>
                    {CommonOptions.get.getNameContent(enumeration,)}
                </div>
                <EditorVoiceSoundComponent editorVoiceSound={enumeration.editorVoiceSoundFileHolder} name={enumeration.englishName}/>
            </div>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly GAME = new class EntityAppOption_Game extends EntityAppOption {

        protected override _createContentOption({reference,}: Entities,) {
            return <GameComponent reference={reference} name={reference} displayAllAsText/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.gameHeader
        }

    }('game',)
    public static readonly GAME_STYLE = new class EntityAppOption_GameStyle extends EntityAppOption {

        protected override _createContentOption({reference,}: Entities,) {
            return <GameStyleComponent reference={reference} name={reference} displayAllAsText/>
        }

        protected override _createTableHeaderOption() {
            return {key: 'gameStyle', element: gameContentTranslation('game style.singular',),} satisfies SingleHeaderContent
        }

    }('gameStyle',)
    public static readonly COURSE_THEME = new class EntityAppOption_CourseTheme extends EntityAppOption {

        protected override _createContentOption({reference,}: Entities,) {
            return <CourseThemeComponent reference={reference} name={reference} displayAllAsText/>
        }

        protected override _createTableHeaderOption() {
            return {key: 'courseTheme', element: gameContentTranslation('theme.course.singular',),} satisfies SingleHeaderContent
        }

    }('courseTheme',)
    public static readonly TIME = new class EntityAppOption_Time extends EntityAppOption {

        protected override _createContentOption({reference,}: Entities,) {
            return <TimeComponent reference={reference} name={reference} displayAllAsText={false}/>
        }

        protected override _createTableHeaderOption() {
            return {key: 'time', element: gameContentTranslation('time.singular',),} satisfies SingleHeaderContent
        }

    }('time',)
    public static readonly CATEGORY = new class EntityAppOption_Category extends EntityAppOption {

        protected override _createContentOption(enumeration: Entities,) {
            const name = enumeration.reference.categoryAmericanEnglish
            if (name === EMPTY_STRING)
                return null
            return <EntityCategoryIcon reference={CategoryCompanion.getValueByName(name,)}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.categoryHeader
        }

    }('category',)

    public static readonly EDITOR_LIMIT_IN_SMM1_AND_3DS = new class EntityAppOption_LimitInSMM1And3DS extends EntityAppOption {

        protected override _createContentOption(enumeration: Entities,) {
            return <SMM1And3DSEditorLimitComponent reference={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.completeEditorLimitInSmm1And3dsHeader
        }

    }('smm1And3ds-editorLimit',)
    public static readonly EDITOR_LIMIT_IN_SMM1_AND_3DS_ONLY = new class EntityAppOption_LimitInSMM1And3DS extends EntityAppOption {

        protected override _createContentOption(enumeration: Entities,) {
            return <SMM1And3DSEditorLimitComponent reference={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.completeEditorLimitHeader
        }

    }('editorLimit',)
    public static readonly EDITOR_LIMIT_IN_SMM2 = new class EntityAppOption_LimitInSMM2 extends EntityAppOption {

        protected override _createContentOption(enumeration: Entities,) {
            return <SMM2EditorLimitComponent reference={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.completeEditorLimitInSmm2Header
        }

    }('smm2-editorLimit',)
    public static readonly EDITOR_LIMIT_IN_SMM2_ONLY = new class EntityAppOption_LimitInSMM2 extends EntityAppOption {

        protected override _createContentOption(enumeration: Entities,) {
            return <SMM2EditorLimitComponent reference={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.completeEditorLimitHeader
        }

    }('editorLimit',)
    public static readonly PLAY_LIMIT = new class EntityAppOption_PlayLimit extends EntityAppOption {

        protected override _createContentOption(enumeration: Entities,) {
            return <PlayLimitComponent reference={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.completePlayLimitHeader
        }
    }('playLimit',)

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

    readonly #associatedClass
    readonly #additionalClasses

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super()
        this.#additionalClasses = [this.#associatedClass = associatedClass,] as const
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get associatedClass(): string {
        return this.#associatedClass
    }

    public get additionalClasses(): readonly [string,] {
        return this.#additionalClasses
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected _createContentOption(enumeration: Entities,): ReactElement {
        throw new ReferenceError(`The EntityAppOption.${this.name} cannot create a content option`,)
    }

    public renderContent(enumeration: Entities,): readonly [ReactElement,] {
        return [this._createContentOption(enumeration,),]
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected _createTableHeaderOption(): NullOr<SingleHeaderContent> {
        throw new ReferenceError(`The EntityAppOption.${this.name} cannot create a table header option`,)
    }

    public renderTableHeader(): NullOr<SingleHeaderContent> {
        const content = this._createTableHeaderOption()
        if (content == null)
            return null
        return content
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------

}

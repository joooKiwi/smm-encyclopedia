import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOr}                 from '@joookiwi/type'
import {CompanionEnum}               from '@joookiwi/enumerable'
import {Fragment}                    from 'react'

import type {Names, Ordinals}   from 'app/options/EntityAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'
import type {Entities}          from 'core/entity/Entities'

import {isInDevelopment}                from 'variables'
import {CommonOptions}                  from 'app/options/CommonOptions'
import Image                            from 'app/tools/images/Image'
import ImageAs3dModel                   from 'app/tools/images/ImageAs3dModel'
import {TableOption}                    from 'app/tools/table/TableOption'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import EditorVoiceSound                 from 'core/editorVoice/component/EditorVoiceSound'
import CanBeAffectedByATwister          from 'core/entity/properties/component/CanBeAffectedByATwister'
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
import PlayLimit                        from 'core/limit/component/PlayLimit'
import Smm1And3dsEditorLimit            from 'core/limit/component/Smm1And3dsEditorLimit'
import Smm2EditorLimit                  from 'core/limit/component/Smm2EditorLimit'
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

export abstract class EntityAppOption
    extends TableOption<Entities, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE_IN_SMB = new class EntityAppOption_ImageInSmb extends EntityAppOption {

        public override renderContent({englishName, englishNameInHtml, image,}: Entities,): NullOr<ReactJSXElement> {
            const images = image.getSmb()
            if (images == null) {
                if (isInDevelopment)
                    console.warn("The images were null when attempting to retrieve the SMB images", image,)
                return null
            }

            // if (images.length === 0)
            //     if (reference.isInSuperMarioBrosStyle)
            //         return <ImageAs3dModel key={`unique image (${englishName})`}/>

            return <Fragment key={`unique image (${englishName})`}>{images.map((it, i,) =>
                <Image key={`Entity image (${englishName} - SMB - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>
            ,)}</Fragment>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: `image-smb`, element: <GameStyleImage reference={SMB}/>,}
        }

    }('smb-images',)
    public static readonly IMAGE_IN_SMB3 = new class EntityAppOption_ImageInSmb3 extends EntityAppOption {

        public override renderContent({englishName, englishNameInHtml, image,}: Entities,): NullOr<ReactJSXElement> {
            const images = image.getSmb3()
            if (images == null) {
                if (isInDevelopment)
                    console.warn("The images were null when attempting to retrieve the SMB3 images", image,)
                return null
            }

            // if (images.isEmpty)
            //     if (reference.isInSuperMarioBros3Style)
            //         return <ImageAs3dModel key={`unique image (${englishName})`}/>

            return <Fragment key={`unique image (${englishName})`}>{images.map((it, i,) =>
                <Image key={`Entity image (${englishName} - SMB3 - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>
            ,)}</Fragment>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: `image-smb3`, element: <GameStyleImage reference={SMB3}/>,}
        }

    }('smb3-images',)
    public static readonly IMAGE_IN_SMW = new class EntityAppOption_ImageInSmw extends EntityAppOption {

        public override renderContent({englishName, englishNameInHtml, image,}: Entities,): NullOr<ReactJSXElement> {
            const images = image.getSmw()
            if (images == null) {
                if (isInDevelopment)
                    console.warn("The images were null when attempting to retrieve the SMW images", image,)
                return null
            }

            // if (images.isEmpty)
            //     if (reference.isInSuperMarioWorldStyle)
            //         return <ImageAs3dModel key={`unique image (${englishName})`}/>

            return <Fragment key={`unique image (${englishName})`}>{images.map((it, i,) =>
                <Image key={`Entity image (${englishName} - SMW - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>
            ,)}</Fragment>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: `image-smw`, element: <GameStyleImage reference={SMW}/>,}
        }

    }('smw-images',)
    public static readonly IMAGE_IN_NSMBU = new class EntityAppOption_ImageInNsmbu extends EntityAppOption {

        public override renderContent({englishName, englishNameInHtml, image,}: Entities,): NullOr<ReactJSXElement> {
            const images = image.getNsmbu()
            if (images == null) {
                if (isInDevelopment)
                    console.warn("The images were null when attempting to retrieve the NSMBU images", image,)
                return null
            }

            // if (images.isEmpty)
            //     if (reference.isInNewSuperMarioBrosUStyle)
            //         return <ImageAs3dModel key={`unique image (${englishName})`}/>

            return <Fragment key={`unique image (${englishName})`}>{images.map((it, i) =>
                <Image key={`Entity image (${englishName} - NSMBU - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>
            ,)}</Fragment>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: `image-nsmbu`, element: <GameStyleImage reference={NSMBU}/>,}
        }

    }('nsmbu-images',)
    public static readonly IMAGE_IN_SM3DW = new class EntityAppOption_ImageInSm3dw extends EntityAppOption {

        public override renderContent({englishName, englishNameInHtml, image, reference,}: Entities,): NullOr<ReactJSXElement> {
            const images = image.getSm3dw()
            if (images == null) {
                if (isInDevelopment)
                    console.warn("The images were null when attempting to retrieve the SM3DW images", image,)
                return null
            }

            if (images.isEmpty)
                if (reference.isInSuperMario3DWorldStyle)
                    return <ImageAs3dModel key={`unique image (${englishName})`}/>

            return <Fragment key={`unique image (${englishName})`}>{images.map((it, i,) =>
                <Image key={`Entity image (${englishName} - SM3DW - image #${i + 1})`} className={`entity-image ${englishNameInHtml}-image`} file={it}/>
            ,)}</Fragment>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: `image-sm3dw`, element: <GameStyleImage reference={SM3DW}/>,}
        }

    }('sm3dw-images',)

    public static readonly NAME = new class EntityAppOption_Name extends EntityAppOption {

        public override renderContent(enumeration: Entities,): ReactJSXElement {
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
                        <CanBeAffectedByATwister value={enumeration}/>
                        <CanBeStacked value={enumeration}/>
                    </div>
                    {CommonOptions.get.getNameContent(enumeration,)}
                </div>
                <EditorVoiceSound editorVoice={enumeration.editorVoiceReference} name={enumeration.englishName}/>
            </div>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly GAME = new class EntityAppOption_Game extends EntityAppOption {

        public override renderContent({reference,}: Entities,): ReactJSXElement {
            return <GameComponent reference={reference} name={reference} displayAllAsText/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.gameHeader
        }

    }('game',)
    public static readonly GAME_STYLE = new class EntityAppOption_GameStyle extends EntityAppOption {

        public override renderContent({reference,}: Entities,): ReactJSXElement {
            return <GameStyleComponent reference={reference} name={reference} displayAllAsText/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'gameStyle', element: gameContentTranslation('game style.singular',),}
        }

    }('gameStyle',)
    public static readonly COURSE_THEME = new class EntityAppOption_CourseTheme extends EntityAppOption {

        public override renderContent({reference,}: Entities,): ReactJSXElement {
            return <CourseThemeComponent reference={reference} name={reference} displayAllAsText/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'courseTheme', element: gameContentTranslation('theme.course.singular',),}
        }

    }('courseTheme',)
    public static readonly TIME = new class EntityAppOption_Time extends EntityAppOption {

        public override renderContent({reference,}: Entities,): ReactJSXElement {
            return <TimeComponent reference={reference} name={reference} displayAllAsText={false}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'time', element: gameContentTranslation('time.singular',),}
        }

    }('time',)
    public static readonly CATEGORY = new class EntityAppOption_Category extends EntityAppOption {

        public override renderContent(enumeration: Entities,): NullOr<ReactJSXElement> {
            const name = enumeration.reference.categoryAmericanEnglish
            if (name === EMPTY_STRING)
                return null
            return <EntityCategoryIcon reference={CategoryCompanion.getValueByName(name,)}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.categoryHeader
        }

    }('category',)

    public static readonly EDITOR_LIMIT_IN_SMM1_AND_3DS = new class EntityAppOption_LimitInSMM1And3DS extends EntityAppOption {

        public override renderContent(enumeration: Entities,): ReactJSXElement {
            return <Smm1And3dsEditorLimit reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.completeEditorLimitInSmm1And3dsHeader
        }

    }('smm1And3ds-editorLimit',)
    public static readonly EDITOR_LIMIT_IN_SMM1_AND_3DS_ONLY = new class EntityAppOption_LimitInSMM1And3DS extends EntityAppOption {

        public override renderContent(enumeration: Entities,): ReactJSXElement {
            return <Smm1And3dsEditorLimit reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.completeEditorLimitHeader
        }

    }('editorLimit',)
    public static readonly EDITOR_LIMIT_IN_SMM2 = new class EntityAppOption_LimitInSMM2 extends EntityAppOption {

        public override renderContent(enumeration: Entities,): ReactJSXElement {
            return <Smm2EditorLimit reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.completeEditorLimitInSmm2Header
        }

    }('smm2-editorLimit',)
    public static readonly EDITOR_LIMIT_IN_SMM2_ONLY = new class EntityAppOption_LimitInSMM2 extends EntityAppOption {

        public override renderContent(enumeration: Entities,): ReactJSXElement {
            return <Smm2EditorLimit reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.completeEditorLimitHeader
        }

    }('editorLimit',)
    public static readonly PLAY_LIMIT = new class EntityAppOption_PlayLimit extends EntityAppOption {

        public override renderContent(enumeration: Entities,): ReactJSXElement {
            return <PlayLimit reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
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
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super(associatedClass,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

import type {Enumerable} from '@joookiwi/enumerable/dist/types'

import type {SimpleImageHeader, SimpleReactHeader, SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {ClassWithEnglishName}                                      from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                        from 'core/ClassWithReference'
import type {ClassInAnySuperMarioMakerGame}                             from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Themes}                                                    from 'core/theme/Themes'
import type {Name}                                                      from 'lang/name/Name'
import type {NameTrait}                                                 from 'lang/name/NameTrait'
import type {NameTraitFromACategory}                                    from 'lang/name/NameTraitFromACategory'
import type {ImageFile}                                                 from 'util/file/image/ImageFile'

import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                                             from 'app/tools/images/Image'
import {Games}                                           from 'core/game/Games'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import {EmptyStringName}                                 from 'lang/name/EmptyStringName'
import NameComponent                                     from 'lang/name/component/Name.component'

/** @singleton */
export class CommonOptions {

    //region -------------------- Singleton usage --------------------

    static #instance?: CommonOptions

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Fields --------------------

    #nameHeader?: SimpleReactHeader
    #smm1And3DSGameHeader?: SimpleImageHeader
    #smm2GameHeader?: SimpleImageHeader
    #gameHeader?: SimpleReactHeader
    #categoryHeader?: SimpleReactHeader

    #limitHeader?: SimpleReactHeader
    #completePlayLimitHeader?: SimpleReactHeader
    #completeEditorLimitHeader?: SimpleReactHeader
    #completeEditorLimitInSmm1And3dsHeader?: SingleHeaderContent
    #completeEditorLimitInSmm2Header?: SingleHeaderContent

    //endregion -------------------- Fields --------------------

    public get nameHeader(): SimpleReactHeader {
        return this.#nameHeader ??= {key: 'name', element: contentTranslation('Name'),}
    }

    public getNameContent(enumeration: EnumerationWithReference,): ReactElement {
        return <NameComponent id="name" name={enumeration.reference} popoverOrientation="left"/>
    }


    public get categoryHeader(): SimpleReactHeader {
        return this.#categoryHeader ??= {key: 'category', element: gameContentTranslation('Category'),}
    }

    public getCategoryContent(enumeration: EnumerationWithCategoryReference, imagePath_or_nameCallback: () => | ImageFile | Name<string>,): ReactElement {
        const name = enumeration.reference.categoryNameContainer
        if (name === EmptyStringName.get)
            return null

        const imagePath_or_name = imagePath_or_nameCallback()
        const englishName = name.english
        const startingKey = `category name (${englishName})`
        if ('toNameMap' in imagePath_or_name)
            return <NameComponent key={`${startingKey} name`} id={`category-name-${enumeration.englishNameInHtml}`} name={name} popoverOrientation="left"/>
        return <Image key={`${startingKey} image`} file={imagePath_or_name}/>
    }


    public get gameHeader(): SimpleReactHeader {
        return this.#gameHeader ??= {key: 'game', element: gameContentTranslation('game.singular'),}
    }

    public get smm1And3dsGameHeader(): SimpleImageHeader {
        return this.#smm1And3DSGameHeader ??= {key: 'isInSuperMarioMaker1And3DS', alt: Games.SUPER_MARIO_MAKER_1.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_1.imageFile.fullName,}//TODO create a animated image for both games (SMM1 & SMM3DS)
    }
    public get smm2GameHeader(): SimpleImageHeader {
        return this.#smm2GameHeader ??= {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_2.imageFile.fullName,}
    }

    /**
     * Get a {@link HTMLDivElement} containing each images (if true)
     * of the {@link Games} contained in the {@link Enum} {@link ClassWithReference reference}.
     *
     * @param enumeration The enumerable to retrieve the {@link Games} properties & {@link ClassWithEnglishName english name}.
     */
    public getGameContent(enumeration: EnumerationWithInSuperMarioMakerGameReference,): ReactElement {
        const reference = enumeration.reference
        const isInSMM1 = reference.isInSuperMarioMaker1
        const isInSMM3DS = reference.isInSuperMarioMakerFor3DS
        const isInSMM2 = reference.isInSuperMarioMaker2

        return <div key={`${enumeration.englishName} (game content images)`} id={`${enumeration.englishNameInHtml}-gameContentImages-container`} className="gameContentImages-container">
            {isInSMM1 ? Games.SUPER_MARIO_MAKER_1.renderSingleComponent : null}
            {isInSMM3DS ? Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.renderSingleComponent : null}
            {isInSMM2 ? Games.SUPER_MARIO_MAKER_2.renderSingleComponent : null}
        </div>
    }


    public getThemeContent(enumeration: Themes,): ReactElement {
        const reference = enumeration.reference

        return <div key={`${enumeration.englishName} (theme content images)`} id={`${enumeration.englishNameInHtml}-themeContentImages-container`} className="themeContentImages-container">
            {reference.isInCourseTheme ? <Image file={COURSE_THEME_IMAGE_FILE}/> : null}
            {reference.isInWorldTheme ? <Image file={WORLD_THEME_IMAGE_FILE}/> : null}
        </div>
    }


    public get limitHeader(): SimpleReactHeader {
        return this.#limitHeader ??= {key: 'limit', element: gameContentTranslation('limit.singular'),}
    }

    public get completePlayLimitHeader(): SimpleReactHeader {
        return this.#completePlayLimitHeader ??= {key: 'limit-play', element: gameContentTranslation('limit.play.complete'),}
    }
    public get completeEditorLimitHeader(): SimpleReactHeader {
        return this.#completeEditorLimitHeader ??= {key: 'limit-editor', element: gameContentTranslation('limit.editor.complete'),}
    }

    public get completeEditorLimitInSmm1And3dsHeader(): SingleHeaderContent {
        return this.#completeEditorLimitInSmm1And3dsHeader ??= {
            key: 'limit-editor-smm1-and-smm3ds', element: gameContentTranslation('limit.editor.complete in SMM1&3DS', {
                Name1: Games.SUPER_MARIO_MAKER_1.acronym,
                Name3ds: Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.acronym,
            }),
        }
    }

    public get completeEditorLimitInSmm2Header(): SingleHeaderContent {
        return this.#completeEditorLimitInSmm2Header ??= {
            key: 'limit-editor-smm2', element: gameContentTranslation('limit.editor.complete in SMM2', {
                Name: Games.SUPER_MARIO_MAKER_2.acronym,
            }),
        }
    }

}

type EnumerationWithReference = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<Name<string>>
type EnumerationWithCategoryReference = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<NameTraitFromACategory<string, NameTrait<string>>>
type EnumerationWithInSuperMarioMakerGameReference = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<ClassInAnySuperMarioMakerGame>

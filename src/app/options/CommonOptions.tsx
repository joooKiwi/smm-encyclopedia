import type {Enumerable} from '@joookiwi/enumerable/dist/types'

import type {SingleHeaderContent, SingleHeadersContent} from 'app/tools/table/SimpleHeader'
import type {ClassWithEnglishName}                      from 'core/ClassWithEnglishName'
import type {ClassWithReference}                        from 'core/ClassWithReference'
import type {ClassInAnySuperMarioMakerGame}             from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Themes}                                    from 'core/theme/Themes'
import type {Name}                                      from 'lang/name/Name'
import type {NameTrait}                                 from 'lang/name/NameTrait'
import type {NameTraitFromACategory}                    from 'lang/name/NameTraitFromACategory'
import type {ImageFile}                                 from 'util/file/image/ImageFile'
import type {ReactElement}                              from 'util/react/ReactProperties'

import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                                             from 'app/tools/images/Image'
import {Games}                                           from 'core/game/Games'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import {EmptyStringName}                                 from 'lang/name/EmptyStringName'
import NameComponent                                     from 'lang/name/component/Name.component'

/**
 * @singleton
 */
export class CommonOptions {

    //region -------------------- Singleton usage --------------------

    static #instance?: CommonOptions

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Fields --------------------

    #nameHeader?: SingleHeaderContent
    #gameHeader?: SingleHeaderContent
    #gameHeaderWithAllGames?: SingleHeaderContent
    #gameHeaderWithMainGames?: SingleHeaderContent
    #mainGames?: readonly [SingleHeaderContent, SingleHeaderContent,]
    #categoryHeader?: SingleHeaderContent

    #limitHeader?: SingleHeaderContent
    #playLimitHeader?: SingleHeaderContent
    #editorLimitHeader?: SingleHeaderContent
    #limitWithSubHeaders?: SingleHeaderContent

    //endregion -------------------- Fields --------------------

    public get nameHeader(): SingleHeaderContent {
        return this.#nameHeader ??= {key: 'name', element: contentTranslation('Name'),}
    }

    public getNameContent(enumeration: EnumerationWithReference,): ReactElement {
        return <NameComponent id="name" name={enumeration.reference} popoverOrientation="left"/>
    }


    public get categoryHeader(): SingleHeaderContent {
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


    public get gameHeader(): SingleHeaderContent {
        return this.#gameHeader ??= {key: 'game', element: gameContentTranslation('game.singular'),}
    }

    public getGameHeader(...subHeaders: SingleHeadersContent): SingleHeaderContent {
        return {key: 'game', element: gameContentTranslation('game.singular'), subHeaders: subHeaders,}
    }

    /**@deprecated Relocate the games in the name content */
    public get gameHeaderWithAllGames(): SingleHeaderContent {
        return this.#gameHeaderWithAllGames ??= this.getGameHeader(
            {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_1.imageFile.fullName,},
            {key: 'isInSuperMarioMakerFor3DS', alt: Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.imageFile.fullName,},
            {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_2.imageFile.fullName,},
        )
    }

    public get gameHeaderWithMainGames(): SingleHeaderContent {
        return this.#gameHeaderWithMainGames ??= this.getGameHeader(...this.mainGames)
    }

    public get mainGames(): readonly [SingleHeaderContent, SingleHeaderContent,] {
        return this.#mainGames ??= [
            {key: 'isInSuperMarioMaker1And3DS', alt: Games.SUPER_MARIO_MAKER_1.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_1.imageFile.fullName,},//TODO create a animated image for both games (SMM1 & SMM3DS)
            {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_2.imageFile.fullName,},
        ]
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


    public get limitHeader(): SingleHeaderContent {
        return this.#limitHeader ??= {key: 'limit', element: gameContentTranslation('limit.singular'),}
    }

    public getLimitHeader(...subHeaders: SingleHeadersContent): SingleHeaderContent {
        return {key: 'limit', element: gameContentTranslation('limit.singular'), subHeaders: subHeaders,}
    }

    public get playLimitHeader(): SingleHeaderContent {
        return this.#playLimitHeader ??= {key: 'limit-play', element: gameContentTranslation('limit.play.simple'), tooltip: gameContentTranslation('limit.play.tooltip'),}
    }

    public getPlayLimitHeader(...subHeaders: SingleHeadersContent) {
        return {key: 'limit-play', element: gameContentTranslation('limit.play.simple'), tooltip: gameContentTranslation('limit.play.tooltip'), subHeaders: subHeaders,}
    }

    public get editorLimitHeader(): SingleHeaderContent {
        return this.#editorLimitHeader ??= {key: 'limit-editor', element: gameContentTranslation('limit.editor.simple'), tooltip: gameContentTranslation('limit.editor.tooltip'),}
    }

    public get limitWithSubHeaders(): SingleHeaderContent {
        return this.#limitWithSubHeaders ??= this.getLimitHeader(this.editorLimitHeader, this.playLimitHeader,)
    }


}

type EnumerationWithReference = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<Name<string>>
type EnumerationWithCategoryReference = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<NameTraitFromACategory<string, NameTrait<string>>>
type EnumerationWithInSuperMarioMakerGameReference = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<ClassInAnySuperMarioMakerGame>

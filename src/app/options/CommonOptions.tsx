import type {Enumerable} from '@joookiwi/enumerable'

import type {SimpleImageHeader, SimpleReactHeader, SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {ClassWithEnglishName}                                      from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                        from 'core/ClassWithReference'
import type {ClassInAnySuperMarioMakerGame}                             from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Name}                                                      from 'lang/name/Name'
import type {NameTrait}                                                 from 'lang/name/NameTrait'
import type {NameTraitFromACategory}                                    from 'lang/name/NameTraitFromACategory'

import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'

import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

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
    #iconHeader?: SimpleReactHeader
    #soundHeader?: SimpleReactHeader
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
        return this.#nameHeader ??= {key: 'name', element: contentTranslation('Name',),}
    }

    public getNameContent(enumeration: EnumerationWithReference,): NonNullReactElement {
        return <NameComponent id="name" name={enumeration.reference} popoverOrientation="left"/>
    }


    public get iconHeader(): SimpleReactHeader {
        return this.#iconHeader ??= {key: 'icon', element: contentTranslation('Icon',),}
    }

    public get soundHeader(): SimpleReactHeader {
        return this.#soundHeader ??= {key: 'sound', element: contentTranslation('sound.singular',),}
    }

    public get categoryHeader(): SimpleReactHeader {
        return this.#categoryHeader ??= {key: 'category', element: gameContentTranslation('Category',),}
    }


    public get gameHeader(): SimpleReactHeader {
        return this.#gameHeader ??= {key: 'game', element: gameContentTranslation('game.singular',),}
    }

    public get smm1And3dsGameHeader(): SimpleImageHeader {
        return this.#smm1And3DSGameHeader ??= {key: 'isInSuperMarioMaker1And3DS', alt: SMM1.imageFile.fallbackName, path: SMM1.imageFile.fullName,}//TODO create a animated image for both games (SMM1 & SMM3DS)
    }
    public get smm2GameHeader(): SimpleImageHeader {
        return this.#smm2GameHeader ??= {key: 'isInSuperMarioMaker2', alt: SMM2.imageFile.fallbackName, path: SMM2.imageFile.fullName,}
    }

    /**
     * Get a {@link HTMLDivElement} containing each images (if true)
     * of the {@link Games} contained in the {@link Enum} {@link ClassWithReference reference}.
     *
     * @param enumeration The enumerable to retrieve the {@link Games} properties & {@link ClassWithEnglishName english name}.
     */
    public getGameContent(enumeration: EnumerationWithInSuperMarioMakerGameReference,): NonNullReactElement {
        const reference = enumeration.reference

        return <div key={`${enumeration.englishName} (game content images)`} id={`${enumeration.englishNameInHtml}-gameContentImages-container`} className="gameContentImages-container">
            {reference.isInSuperMarioMaker1 ? <GameImage reference={SMM1}/> : null}
            {reference.isInSuperMarioMakerFor3DS ? <GameImage reference={SMM3DS}/> : null}
            {reference.isInSuperMarioMaker2 ? <GameImage reference={SMM2}/> : null}
        </div>
    }


    public get limitHeader(): SimpleReactHeader {
        return this.#limitHeader ??= {key: 'limit', element: gameContentTranslation('limit.singular',),}
    }

    public get completePlayLimitHeader(): SimpleReactHeader {
        return this.#completePlayLimitHeader ??= {key: 'limit-play', element: gameContentTranslation('limit.play.complete',),}
    }
    public get completeEditorLimitHeader(): SimpleReactHeader {
        return this.#completeEditorLimitHeader ??= {key: 'limit-editor', element: gameContentTranslation('limit.editor.complete',),}
    }

    public get completeEditorLimitInSmm1And3dsHeader(): SingleHeaderContent {
        return this.#completeEditorLimitInSmm1And3dsHeader ??= {
            key: 'limit-editor-smm1-and-smm3ds', element: gameContentTranslation('limit.editor.complete in SMM1&3DS', {
                Name1: SMM1.acronym,
                Name3ds: SMM3DS.acronym,
            }),
        }
    }

    public get completeEditorLimitInSmm2Header(): SingleHeaderContent {
        return this.#completeEditorLimitInSmm2Header ??= {
            key: 'limit-editor-smm2', element: gameContentTranslation('limit.editor.complete in SMM2', {
                Name: SMM2.acronym,
            }),
        }
    }

}

type EnumerationWithReference = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<Name<string>>
type EnumerationWithInSuperMarioMakerGameReference = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<ClassInAnySuperMarioMakerGame>

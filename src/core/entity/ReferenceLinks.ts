import type {Array, NullOrString} from '@joookiwi/type'
import {forEachByArray}           from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/entity/Entities.types'
import type {EntityLink}          from 'core/entity/loader.types'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

interface ReferenceHolder {

    /** The unique reference links associated to a {@link GameStyles} */
    readonly gameStyleLinks: Array<PossibleEnglishName>

    /** The unique reference links associated to a {@link Themes} */
    readonly themeLinks: Array<PossibleEnglishName>

    /** The unique reference links associated to a {@link Times} */
    readonly timeLinks: Array<PossibleEnglishName>

    /** Every unique reference that is a link */
    readonly allLinks: Array<PossibleEnglishName>

}

/**
 * A class made to be handled by the {@link EntityLoader}
 * only to encapsulate the references that are a link
 */
export class ReferenceLinks {

    //region -------------------- Fields --------------------

    readonly #references: Map<PossibleEnglishName, ReferenceHolder> = new Map()

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    protected get _references(): Map<PossibleEnglishName, ReferenceHolder> {
        return this.#references
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Add every sub references in the "time", "theme" & "game style" fields.
     *
     * @param englishName The name to associate to each other references
     * @param dayReferences The {@link Times.DAY} references
     * @param nightReferences The {@link Times.NIGHT} references
     * @param smbReferences The {@link SMB} references
     * @param smb3References The {@link SMB3} references
     * @param smwReferences The {@link SMW} references
     * @param nsmbuReferences The {@link NSMBU} references
     * @param sm3dwReferences The {@link SM3DW} references
     * @param groundStyleReferences The {@link Themes.GROUND} references
     * @param undergroundReferences The {@link Themes.UNDERGROUND} references
     * @param underwaterReferences The {@link Themes.UNDERWATER} references
     * @param desertReferences The {@link Themes.DESERT} references
     * @param snowReferences The {@link Themes.SNOW} references
     * @param skyReferences The {@link Themes.SKY} references
     * @param forestReferences The {@link Themes.FOREST} references
     * @param ghostHouseReferences The {@link Themes.GHOST_HOUSE} references
     * @param airshipReferences The {@link Themes.AIRSHIP} references
     * @param castleReferences The {@link Themes.CASTLE} references
     */
    public addSubReference(englishName: PossibleEnglishName,
                           dayReferences: NullOrString<EntityLink>,
                           nightReferences: NullOrString<EntityLink>,
                           smbReferences: NullOrString<EntityLink>,
                           smb3References: NullOrString<EntityLink>,
                           smwReferences: NullOrString<EntityLink>,
                           nsmbuReferences: NullOrString<EntityLink>,
                           sm3dwReferences: NullOrString<EntityLink>,
                           groundStyleReferences: NullOrString<EntityLink>,
                           undergroundReferences: NullOrString<EntityLink>,
                           underwaterReferences: NullOrString<EntityLink>,
                           desertReferences: NullOrString<EntityLink>,
                           snowReferences: NullOrString<EntityLink>,
                           skyReferences: NullOrString<EntityLink>,
                           forestReferences: NullOrString<EntityLink>,
                           ghostHouseReferences: NullOrString<EntityLink>,
                           airshipReferences: NullOrString<EntityLink>,
                           castleReferences: NullOrString<EntityLink>,
    ): void {
        const allLinks = new Set<PossibleEnglishName>()
        let timeLinks = new Set<PossibleEnglishName>()
        let themeLinks = new Set<PossibleEnglishName>()
        let gameStyleLinks = new Set<PossibleEnglishName>()

        this._addReferenceTo(englishName, dayReferences, allLinks, timeLinks,)
        this._addReferenceTo(englishName, nightReferences, allLinks, timeLinks,)

        this._addReferenceTo(englishName, smbReferences, allLinks, gameStyleLinks,)
        this._addReferenceTo(englishName, smb3References, allLinks, gameStyleLinks,)
        this._addReferenceTo(englishName, smwReferences, allLinks, gameStyleLinks,)
        this._addReferenceTo(englishName, nsmbuReferences, allLinks, gameStyleLinks,)
        this._addReferenceTo(englishName, sm3dwReferences, allLinks, gameStyleLinks,)

        this._addReferenceTo(englishName, groundStyleReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, undergroundReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, underwaterReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, desertReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, snowReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, skyReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, forestReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, ghostHouseReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, airshipReferences, allLinks, themeLinks,)
        this._addReferenceTo(englishName, castleReferences, allLinks, themeLinks,)

        if (allLinks.size === 0)
            return

        this._references.set(englishName, {
            gameStyleLinks: gameStyleLinks.size === 0 ? EMPTY_ARRAY : Array.from(gameStyleLinks,),
            themeLinks: themeLinks.size === 0 ? EMPTY_ARRAY : Array.from(themeLinks,),
            timeLinks: timeLinks.size === 0 ? EMPTY_ARRAY : Array.from(timeLinks,),
            allLinks: Array.from(allLinks,),
        },)
    }

    protected _addReferenceTo(englishName: PossibleEnglishName, content: NullOrString<EntityLink>, allLinks: Set<PossibleEnglishName>, links: Set<PossibleEnglishName>,): void {
        if (content == null)
            return
        if (content === 'this')
            return

        if (!content.includes('/',)) {
            allLinks.add(content as PossibleEnglishName,)
            links.add(content as PossibleEnglishName,)
            return
        }

        forEachByArray(content.split(' / ',) as Array<| PossibleEnglishName | 'this'>, value => {
            if (value === 'this')
                return
            allLinks.add(value,)
            links.add(value,)
        },)
    }


    public hasAnyReferences(englishName: PossibleEnglishName,): boolean {
        return this._references.has(englishName,)
    }

    public getGameStyleReferenceLinks(englishName: PossibleEnglishName,): Array<PossibleEnglishName> {
        const value = this._references.get(englishName,)
        if (value == null)
            return EMPTY_ARRAY
        return value.gameStyleLinks
    }

    public getThemeReferenceLinks(englishName: PossibleEnglishName,): Array<PossibleEnglishName> {
        const value = this._references.get(englishName,)
        if (value == null)
            return EMPTY_ARRAY
        return value.themeLinks
    }

    public getTimeReferenceLinks(englishName: PossibleEnglishName,): Array<PossibleEnglishName> {
        const value = this._references.get(englishName,)
        if (value == null)
            return EMPTY_ARRAY
        return value.timeLinks
    }

    public getEveryReferenceLinks(englishName: PossibleEnglishName,): Array<PossibleEnglishName> {
        const value = this._references.get(englishName,)
        if (value == null)
            return EMPTY_ARRAY
        return value.allLinks
    }

    //endregion -------------------- Methods --------------------

}

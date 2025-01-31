import type {Array, MutableSet, NullOrString}    from '@joookiwi/type'
import type {CollectionHolder}                   from '@joookiwi/collection'
import {forEachByArray, GenericCollectionHolder} from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/entity/Entities.types'
import type {EntityLink}          from 'core/entity/loader.types'

import {Empty} from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

interface ReferenceHolder {

    /** The unique reference links associated to a {@link GameStyles} */
    readonly gameStyleLinks: CollectionHolder<PossibleEnglishName>

    /** The unique reference links associated to a {@link Themes} */
    readonly themeLinks: CollectionHolder<PossibleEnglishName>

    /** The unique reference links associated to a {@link Times} */
    readonly timeLinks: CollectionHolder<PossibleEnglishName>

    /** Every unique reference that is a link */
    readonly allLinks: CollectionHolder<PossibleEnglishName>

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
        const allLinks: MutableSet<PossibleEnglishName> = new Set()
        const timeLinks: MutableSet<PossibleEnglishName> = new Set()
        const themeLinks: MutableSet<PossibleEnglishName> = new Set()
        const gameStyleLinks: MutableSet<PossibleEnglishName> = new Set()

        this._addReferenceTo(dayReferences, allLinks, timeLinks,)
        this._addReferenceTo(nightReferences, allLinks, timeLinks,)

        this._addReferenceTo(smbReferences, allLinks, gameStyleLinks,)
        this._addReferenceTo(smb3References, allLinks, gameStyleLinks,)
        this._addReferenceTo(smwReferences, allLinks, gameStyleLinks,)
        this._addReferenceTo(nsmbuReferences, allLinks, gameStyleLinks,)
        this._addReferenceTo(sm3dwReferences, allLinks, gameStyleLinks,)

        this._addReferenceTo(groundStyleReferences, allLinks, themeLinks,)
        this._addReferenceTo(undergroundReferences, allLinks, themeLinks,)
        this._addReferenceTo(underwaterReferences, allLinks, themeLinks,)
        this._addReferenceTo(desertReferences, allLinks, themeLinks,)
        this._addReferenceTo(snowReferences, allLinks, themeLinks,)
        this._addReferenceTo(skyReferences, allLinks, themeLinks,)
        this._addReferenceTo(forestReferences, allLinks, themeLinks,)
        this._addReferenceTo(ghostHouseReferences, allLinks, themeLinks,)
        this._addReferenceTo(airshipReferences, allLinks, themeLinks,)
        this._addReferenceTo(castleReferences, allLinks, themeLinks,)

        if (allLinks.size === 0)
            return

        this._references.set(englishName, {
            gameStyleLinks: gameStyleLinks.size === 0 ? EMPTY_COLLECTION_HOLDER : new GenericCollectionHolder(gameStyleLinks,),
            themeLinks: themeLinks.size === 0 ? EMPTY_COLLECTION_HOLDER : new GenericCollectionHolder(themeLinks,),
            timeLinks: timeLinks.size === 0 ? EMPTY_COLLECTION_HOLDER : new GenericCollectionHolder(timeLinks,),
            allLinks: new GenericCollectionHolder(allLinks,),
        },)
    }

    protected _addReferenceTo(content: NullOrString<EntityLink>, allLinks: MutableSet<PossibleEnglishName>, links: MutableSet<PossibleEnglishName>,): void {
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

    public getGameStyleReferenceLinks(englishName: PossibleEnglishName,): CollectionHolder<PossibleEnglishName> {
        const value = this._references.get(englishName,)
        if (value == null)
            return EMPTY_COLLECTION_HOLDER
        return value.gameStyleLinks
    }

    public getThemeReferenceLinks(englishName: PossibleEnglishName,): CollectionHolder<PossibleEnglishName> {
        const value = this._references.get(englishName,)
        if (value == null)
            return EMPTY_COLLECTION_HOLDER
        return value.themeLinks
    }

    public getTimeReferenceLinks(englishName: PossibleEnglishName,): CollectionHolder<PossibleEnglishName> {
        const value = this._references.get(englishName,)
        if (value == null)
            return EMPTY_COLLECTION_HOLDER
        return value.timeLinks
    }

    public getEveryReferenceLinks(englishName: PossibleEnglishName,): CollectionHolder<PossibleEnglishName> {
        const value = this._references.get(englishName,)
        if (value == null)
            return EMPTY_COLLECTION_HOLDER
        return value.allLinks
    }

    //endregion -------------------- Methods --------------------

}

import type {ClassWithType}       from 'core/ClassWithType'
import type {EntityTemplate}      from 'core/entity/Entity.template'
import type {PossibleEnglishName} from 'core/entity/Entities.types'
import type {EntityLink}          from 'core/entity/loader.types'

interface ReferenceHolder
    extends ClassWithType<ReferenceType> {

    get reference(): EntityTemplate

    get value(): PossibleEnglishName

}

type ReferenceType = | 'time' | 'theme' | 'gameStyle'

const TIME = 'time'
const THEME = 'theme'
const GAME_STYLE = 'gameStyle'
const THIS_REFERENCE = 'this'
const SEPARATOR = '/'
const SEPARATOR_WITH_SPACE = ` / `

export class ReferencesToWatch {

    //region -------------------- Fields --------------------

    readonly #englishNames
    readonly #alreadyAddedName: Set<EntityLink>
    readonly #references: ReferenceHolder[]

    //endregion -------------------- Fields --------------------

    public constructor(englishNames: Map<PossibleEnglishName, EntityTemplate>,) {
        this.#englishNames = englishNames
        this.#alreadyAddedName = new Set()
        this.#references = []
    }

    //region -------------------- Getter methods --------------------

    protected get _englishNames(): Map<PossibleEnglishName, EntityTemplate> {
        return this.#englishNames
    }

    protected get _alreadyAddedName(): Set<EntityLink> {
        return this.#alreadyAddedName
    }

    protected get _references(): ReferenceHolder[] {
        return this.#references
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Add every sub references in the "time", "theme" & "game style" fields.
     *
     * @param reference the template to retrieve and set the other references.
     */
    public addSubReference(reference: EntityTemplate,): void {
        const otherReference = reference.properties.reference;

        const potentialSubReferences = [
            [otherReference.time.day, TIME,],
            [otherReference.time.night, TIME,],

            [otherReference.style.superMarioBros, GAME_STYLE,],
            [otherReference.style.superMarioBros3, GAME_STYLE,],
            [otherReference.style.superMarioWorld, GAME_STYLE,],
            [otherReference.style.newSuperMarioBrosU, GAME_STYLE,],
            [otherReference.style.superMario3DWorld, GAME_STYLE,],

            [otherReference.theme.ground, THEME,],
            [otherReference.theme.underground, THEME,],
            [otherReference.theme.underwater, THEME,],
            [otherReference.theme.desert, THEME,],
            [otherReference.theme.snow, THEME,],
            [otherReference.theme.sky, THEME,],
            [otherReference.theme.forest, THEME,],
            [otherReference.theme.ghostHouse, THEME,],
            [otherReference.theme.airship, THEME,],
            [otherReference.theme.castle, THEME,],
        ] as const
        let index = potentialSubReferences.length
        while (index-- > 0) {
            const value = potentialSubReferences[index]
            const otherReference = value[0]
            if (otherReference == null)
                continue
            if (otherReference === THIS_REFERENCE)
                continue

            this._addReference(reference, otherReference, value[1],)
        }
    }

    protected _addReference(template: EntityTemplate, reference: EntityLink, referenceType: ReferenceType,): void {
        if (!reference.includes(SEPARATOR)) {
            this._references.push(this._createReferenceHolder(template, reference as PossibleEnglishName, referenceType,),)
            this._alreadyAddedName.add(reference,)
        }

        const references = this._references
        const referenceSplitted = reference.split(SEPARATOR_WITH_SPACE,) as (PossibleEnglishName | 'this')[]
        let index = referenceSplitted.length
        while (index-- > 0) {
            const value = referenceSplitted[index]
            if (value === THIS_REFERENCE)
                continue
            references.push(this._createReferenceHolder(template, value, referenceType,),)
        }
        this._alreadyAddedName.add(reference,)
    }

    protected _createReferenceHolder(template: EntityTemplate, singleReference: PossibleEnglishName, referenceType: ReferenceType,): ReferenceHolder {
        return {
            reference: template,
            type: referenceType,
            value: singleReference,
        }
    }

    /**
     * Add every references on both individual {@link references}
     * and the {@link ReferenceHolder.value reference value} inside {@link ReferenceHolder}.
     *
     * It also adds each reference into the proper type ({@link ReferenceType}).
     *
     * @see EntityReferencesTemplate.group
     */
    public setReferences(): void {
        const references = this._references
        let index = references.length
        while (index-- > 0) {
            const reference = references[index]
            const referenceWatched = this._englishNames.get(reference.value,)!

            const referenceToWatchTemplate = reference.reference
            const referenceWatchedTemplate = referenceWatched
            const groupToWatch = referenceToWatchTemplate.properties.reference.group
            const groupWatched = referenceWatchedTemplate.properties.reference.group;

            (groupToWatch.all ??= new Set()).add(referenceToWatchTemplate,);
            (groupWatched.all ??= new Set()).add(referenceWatchedTemplate,)
            switch (reference.type) {
                case GAME_STYLE:
                    (groupToWatch.gameStyle ??= new Set()).add(referenceToWatchTemplate,);
                    (groupWatched.gameStyle ??= new Set()).add(referenceWatchedTemplate,)
                    break
                case THEME:
                    (groupToWatch.theme ??= new Set()).add(referenceToWatchTemplate,);
                    (groupWatched.theme ??= new Set()).add(referenceWatchedTemplate,)
                    break
                case TIME:
                    (groupToWatch.time ??= new Set()).add(referenceToWatchTemplate,);
                    (groupWatched.time ??= new Set()).add(referenceWatchedTemplate,)
                    break
            }
        }
    }

    //endregion -------------------- Methods --------------------

}

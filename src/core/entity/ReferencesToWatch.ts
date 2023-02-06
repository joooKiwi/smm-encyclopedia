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

export class ReferencesToWatch {

    //region -------------------- Fields --------------------

    static readonly #TIME = 'time'
    static readonly #THEME = 'theme'
    static readonly #GAME_STYLE = 'gameStyle'
    static readonly #THIS_REFERENCE = 'this'
    static readonly #SEPARATOR = '/'
    static readonly #SEPARATOR_WITH_SPACE = ` ${ReferencesToWatch.#SEPARATOR} `

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

    protected get _englishNames() {
        return this.#englishNames
    }

    protected get _alreadyAddedName() {
        return this.#alreadyAddedName
    }

    protected get _references() {
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

        ([
            [otherReference.time.day, ReferencesToWatch.#TIME,],
            [otherReference.time.night, ReferencesToWatch.#TIME,],

            [otherReference.style.superMarioBros, ReferencesToWatch.#GAME_STYLE,],
            [otherReference.style.superMarioBros3, ReferencesToWatch.#GAME_STYLE,],
            [otherReference.style.superMarioWorld, ReferencesToWatch.#GAME_STYLE,],
            [otherReference.style.newSuperMarioBrosU, ReferencesToWatch.#GAME_STYLE,],
            [otherReference.style.superMario3DWorld, ReferencesToWatch.#GAME_STYLE,],

            [otherReference.theme.ground, ReferencesToWatch.#THEME,],
            [otherReference.theme.underground, ReferencesToWatch.#THEME,],
            [otherReference.theme.underwater, ReferencesToWatch.#THEME,],
            [otherReference.theme.desert, ReferencesToWatch.#THEME,],
            [otherReference.theme.snow, ReferencesToWatch.#THEME,],
            [otherReference.theme.sky, ReferencesToWatch.#THEME,],
            [otherReference.theme.forest, ReferencesToWatch.#THEME,],
            [otherReference.theme.ghostHouse, ReferencesToWatch.#THEME,],
            [otherReference.theme.airship, ReferencesToWatch.#THEME,],
            [otherReference.theme.castle, ReferencesToWatch.#THEME,],
        ].filter(([otherReference]) => otherReference !== null) as [EntityLink, ReferenceType,][])
            .filter(([otherReference,]) => otherReference !== ReferencesToWatch.#THIS_REFERENCE)
            .forEach(([otherReference, referenceType,]) => this._addReference(reference, otherReference, referenceType,))
    }

    protected _addReference(template: EntityTemplate, reference: EntityLink, referenceType: ReferenceType,): void {
        if (reference.includes(ReferencesToWatch.#SEPARATOR))
            ((reference.split(ReferencesToWatch.#SEPARATOR_WITH_SPACE) as (PossibleEnglishName | 'this')[])
                .filter(splitReference => splitReference !== ReferencesToWatch.#THIS_REFERENCE) as PossibleEnglishName[])
                .forEach(splitReference =>
                    this._references.push(this._createReferenceHolder(template, splitReference, referenceType,)))
        else
            this._references.push(this._createReferenceHolder(template, reference as PossibleEnglishName, referenceType,))
        this._alreadyAddedName.add(reference)
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
        this._references.forEach(reference => {
            const referenceWatched = this._englishNames.get(reference.value)!

            const referenceToWatchTemplate = reference.reference,
                referenceWatchedTemplate = referenceWatched,
                groupToWatch = referenceToWatchTemplate.properties.reference.group,
                groupWatched = referenceWatchedTemplate.properties.reference.group;

            (groupToWatch.all ??= new Set()).add(referenceToWatchTemplate);
            (groupWatched.all ??= new Set()).add(referenceWatchedTemplate)
            switch (reference.type) {
                case ReferencesToWatch.#GAME_STYLE:
                    (groupToWatch.gameStyle ??= new Set()).add(referenceToWatchTemplate);
                    (groupWatched.gameStyle ??= new Set()).add(referenceWatchedTemplate)
                    break
                case ReferencesToWatch.#THEME:
                    (groupToWatch.theme ??= new Set()).add(referenceToWatchTemplate);
                    (groupWatched.theme ??= new Set()).add(referenceWatchedTemplate)
                    break
                case ReferencesToWatch.#TIME:
                    (groupToWatch.time ??= new Set()).add(referenceToWatchTemplate);
                    (groupWatched.time ??= new Set()).add(referenceWatchedTemplate)
                    break
            }
        })
    }

    //endregion -------------------- Methods --------------------

}

import type {EntityLink}          from './loader.types';
import type {EntityTemplate}      from './Entity.template';
import type {PossibleEnglishName} from './Entities.types';

import {isInProduction} from '../../variables';

interface ReferencesToWatchDefinition {

    /**
     * Add every sub references in the "time", "theme" & "game style" fields.
     *
     * @param reference the template to retrieve and set the other references.
     */
    addSubReference(reference: EntityTemplate,): void

    testReferences(): void

    /**
     * Add every references on both individual {@link references}
     * and the {@link ReferenceHolderForProduction.value reference value} inside {@link ReferenceHolderForProduction}.
     *
     * It also add each reference into the proper type ({@link ReferenceType}).
     *
     * @see EntityReferencesTemplate.group
     */
    setReferences(): void

}

interface ReferencesToWatchDefinitionConstructor {

    new(englishNames: Map<PossibleEnglishName, EntityTemplate>,): ReferencesToWatchDefinition

}

interface ReferenceHolderForProduction {

    get reference(): EntityTemplate

    get type(): ReferenceType

    get value(): PossibleEnglishName

}

interface ReferenceHolderForTestAndDevelopment
    extends ReferenceHolderForProduction {

    get errorIfNeverFound(): () => ReferenceError

}

type ReferenceType = | 'time' | 'theme' | 'gameStyle';

abstract class AbstractReferenceToWatch<T extends ReferenceHolderForProduction, >
    implements ReferencesToWatchDefinition {

    //region -------------------- Fields --------------------

    static readonly #TIME = 'time';
    static readonly #THEME = 'theme';
    static readonly #GAME_STYLE = 'gameStyle';
    static readonly #THIS_REFERENCE = 'this';
    static readonly #SEPARATOR = '/';
    static readonly #SEPARATOR_WITH_SPACE = ` ${AbstractReferenceToWatch.#SEPARATOR} `;

    readonly #englishNames;
    readonly #alreadyAddedName: Set<EntityLink>;
    readonly #references: T[];

    //endregion -------------------- Fields --------------------

    protected constructor(englishNames: Map<PossibleEnglishName, EntityTemplate>,) {
        this.#englishNames = englishNames;
        this.#alreadyAddedName = new Set();
        this.#references = [];
    }

    //region -------------------- Getter methods --------------------

    protected get _englishNames() {
        return this.#englishNames;
    }

    protected get _alreadyAddedName() {
        return this.#alreadyAddedName;
    }

    protected get _references() {
        return this.#references;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public addSubReference(reference: EntityTemplate,): void {
        const otherReference = reference.properties.reference;
        ([
            [otherReference.time.day, AbstractReferenceToWatch.#TIME,],
            [otherReference.time.night, AbstractReferenceToWatch.#TIME,],

            [otherReference.style.superMarioBros, AbstractReferenceToWatch.#GAME_STYLE,],
            [otherReference.style.superMarioBros3, AbstractReferenceToWatch.#GAME_STYLE,],
            [otherReference.style.superMarioWorld, AbstractReferenceToWatch.#GAME_STYLE,],
            [otherReference.style.newSuperMarioBrosU, AbstractReferenceToWatch.#GAME_STYLE,],
            [otherReference.style.superMario3DWorld, AbstractReferenceToWatch.#GAME_STYLE,],

            [otherReference.theme.ground, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.underground, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.underwater, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.desert, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.snow, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.sky, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.forest, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.ghostHouse, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.airship, AbstractReferenceToWatch.#THEME,],
            [otherReference.theme.castle, AbstractReferenceToWatch.#THEME,],
        ].filter(([otherReference]) => otherReference !== null) as [EntityLink, ReferenceType,][])
            .filter(([otherReference,]) => otherReference !== AbstractReferenceToWatch.#THIS_REFERENCE)
            .forEach(([otherReference, referenceType,]) => this._addReference(reference, otherReference, referenceType,));
    }

    protected _addReference(template: EntityTemplate, reference: EntityLink, referenceType: ReferenceType,): void {
        if (reference.includes(AbstractReferenceToWatch.#SEPARATOR))
            ((reference.split(AbstractReferenceToWatch.#SEPARATOR_WITH_SPACE) as (PossibleEnglishName | 'this')[])
                .filter(splitReference => splitReference !== AbstractReferenceToWatch.#THIS_REFERENCE) as PossibleEnglishName[])
                .forEach((splitReference, index,) =>
                    this._references.push(this._createReferenceHolder(template, splitReference, referenceType, index,)));
        else
            this._references.push(this._createReferenceHolder(template, reference as PossibleEnglishName, referenceType,));
        this._alreadyAddedName.add(reference);

    }

    protected abstract _createReferenceHolder(template: EntityTemplate, singleReference: PossibleEnglishName, referenceType: ReferenceType, index?: number,): T;

    public testReferences(): void {
    }

    public setReferences(): void {
        this._references.forEach(reference => {
            const referenceWatched = this._englishNames.get(reference.value)!;

            const referenceToWatchTemplate = reference.reference;
            const referenceWatchedTemplate = referenceWatched;

            (referenceWatchedTemplate.properties.reference.group.all ??= new Set()).add(referenceToWatchTemplate);
            (referenceToWatchTemplate.properties.reference.group.all ??= new Set()).add(referenceWatchedTemplate);
            switch (reference.type) {
                case AbstractReferenceToWatch.#GAME_STYLE:
                    (referenceWatchedTemplate.properties.reference.group.gameStyle ??= new Set()).add(referenceToWatchTemplate);
                    (referenceToWatchTemplate.properties.reference.group.gameStyle ??= new Set()).add(referenceWatchedTemplate);
                    break;
                case AbstractReferenceToWatch.#THEME:
                    (referenceWatchedTemplate.properties.reference.group.theme ??= new Set()).add(referenceToWatchTemplate);
                    (referenceToWatchTemplate.properties.reference.group.theme ??= new Set()).add(referenceWatchedTemplate);
                    break;
                case AbstractReferenceToWatch.#TIME:
                    (referenceWatchedTemplate.properties.reference.group.time ??= new Set()).add(referenceToWatchTemplate);
                    (referenceToWatchTemplate.properties.reference.group.time ??= new Set()).add(referenceWatchedTemplate);
                    break;
            }
        });
    }

    //endregion -------------------- Methods --------------------

}

class ReferencesToWatchForProduction
    extends AbstractReferenceToWatch<ReferenceHolderForProduction> {

    public constructor(englishNames: Map<PossibleEnglishName, EntityTemplate>,) {
        super(englishNames,);
    }

    //region -------------------- Methods --------------------

    protected override _createReferenceHolder(template: EntityTemplate, singleReference: PossibleEnglishName, referenceType: ReferenceType,): ReferenceHolderForProduction {
        return {
            reference: template,
            type: referenceType,
            value: singleReference,
        };
    }

    //endregion -------------------- Methods --------------------

}

class ReferencesToWatchForTestAndDevelopment
    extends AbstractReferenceToWatch<ReferenceHolderForTestAndDevelopment> {

    public constructor(englishNames: Map<PossibleEnglishName, EntityTemplate>,) {
        super(englishNames,);
    }

    //region -------------------- Methods --------------------

    protected override _createReferenceHolder(template: EntityTemplate, reference: PossibleEnglishName, referenceType: ReferenceType, index?: number,): ReferenceHolderForTestAndDevelopment {
        return {
            reference: template,
            type: referenceType,
            value: reference,
            errorIfNeverFound: () => index == null
                ? new ReferenceError(`The reference value ("${reference}") is not within the english map.`)
                : new ReferenceError(`The reference[${index}] ("${reference}") is not within the english map`),
        };
    }

    public override testReferences(): void {
        this._references.forEach(englishReferenceToWatch => {
            if (!this._englishNames.has(englishReferenceToWatch.value))
                throw englishReferenceToWatch.errorIfNeverFound();
        });
    }

    //endregion -------------------- Methods --------------------

}


const ReferencesToWatch: ReferencesToWatchDefinitionConstructor = isInProduction ? ReferencesToWatchForProduction : ReferencesToWatchForTestAndDevelopment;
export {ReferencesToWatch};

import type {Builder}          from '../util/Builder';
import type {Name}             from '../lang/name/Name';
import type {SMM2NameTemplate} from './lang/SMM2Name.template';

import {NameBuilder} from './lang/NameBuilder';
import {NameCreator} from './lang/NameCreator';

interface TemplateWithNameTemplate {
    name: SMM2NameTemplate;
}

export abstract class TemplateBuilder<T extends TemplateWithNameTemplate, U>
    implements Builder<U> {

    //region -------------------- Attributes --------------------

    readonly #template;
    readonly #isACompleteName;

    //endregion -------------------- Attributes --------------------

    protected constructor(template: T, isACompleteName: boolean,) {
        this.#template = template;
        this.#isACompleteName = isACompleteName;
    }


    public get template(): T {
        return this.#template;
    }

    public get isACompleteName() {
        return this.#isACompleteName;
    }

    public get englishReference() {
        return (this.#template.name.english.simple ?? this.#template.name.english.american)!;
    }

    protected /*static*/ abstract get _templateMap(): Map<string, T>;

    protected _createName() {
        const name = new NameBuilder(this.template.name, this.isACompleteName,).build();
        NameCreator.addEnglishReference(this.template.name, this._templateMap, this.template,);
        return name;
    }


    public build(): U {
        return this._build(this._createName());
    }

    protected abstract _build(name: Name): U;
}
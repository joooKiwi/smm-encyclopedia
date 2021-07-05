import type {Builder}          from '../util/Builder';
import type {SMM2NameTemplate} from './lang/SMM2NameTemplate';
import type {Name}             from '../lang/name/Name';

import {NameBuilder} from './lang/NameBuilder';
import {NameCreator} from './lang/NameCreator';

interface TemplateWithNameTemplate {
    name: SMM2NameTemplate
}

export abstract class TemplateBuilder<T extends TemplateWithNameTemplate, U>
    implements Builder<U> {

    //region -------------------- Attributes --------------------

    readonly #template;

    //endregion -------------------- Attributes --------------------

    protected constructor(template: T,) {
        this.#template = template;
    }


    public get template(): T {
        return this.#template;
    }

    public get englishReference() {
        return (this.#template.name.english.simple ?? this.#template.name.english.american)!;
    }

    protected /*static*/ abstract get _templateMap(): Map<string, T>;

    protected _createName() {
        const name = new NameBuilder(this.template.name).build();
        NameCreator.addEnglishReference(this.template.name, this._templateMap, this.template,);
        return name;
    }


    public build(): U {
        return this._build(this._createName());
    }

    protected abstract _build(name: Name): U;
}
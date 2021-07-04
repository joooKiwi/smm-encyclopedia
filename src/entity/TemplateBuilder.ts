import {Builder}          from '../util/Builder';
import {SMM2NameTemplate} from './lang/SMM2NameTemplate';
import {NameBuilder}      from './lang/NameBuilder';
import {NameCreator}      from './lang/NameCreator';
import {Name}             from '../lang/name/Name';

type TemplateWithNameTemplate = {
    name: SMM2NameTemplate
}

export abstract class TemplateBuilder<T extends TemplateWithNameTemplate, U>
    implements Builder<U> {

    readonly #template;

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
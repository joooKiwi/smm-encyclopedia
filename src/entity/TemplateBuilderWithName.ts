import type {Name}                           from '../lang/name/Name';
import type {SMM2NameTemplateWithPortuguese} from './lang/SMM2Name.template';

import {NameBuilder}     from './lang/NameBuilder';
import {NameCreator}     from './lang/NameCreator';
import {TemplateBuilder} from './TemplateBuilder';

interface TemplateWithNameTemplate {
    name: SMM2NameTemplateWithPortuguese;
}

export abstract class TemplateBuilderWithName<T extends TemplateWithNameTemplate, U>
    extends TemplateBuilder<T, U> {

    protected constructor(template: T,) {
        super(template);
    }


    public get englishReference() {
        return (this.template.name.english.simple ?? this.template.name.english.american)!;
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

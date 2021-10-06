import type {Name}                                             from '../lang/name/Name';
import type {SMM2NameTemplate, SMM2NameTemplateWithPortuguese} from './lang/SMM2Name.template';

import {NameBuilder}     from './lang/NameBuilder';
import {NameCreator}     from './lang/NameCreator';
import {TemplateBuilder} from './TemplateBuilder';

interface TemplateWithNameTemplate {

    name: | SMM2NameTemplate | SMM2NameTemplateWithPortuguese

}

export abstract class TemplateBuilderWithName<T extends TemplateWithNameTemplate, U>
    extends TemplateBuilder<T, U> {

    //region -------------------- Attributes --------------------

    readonly #isACompleteName;

    //endregion -------------------- Attributes --------------------

    protected constructor(template: T, isACompleteName: boolean,) {
        super(template);
        this.#isACompleteName = isACompleteName;
    }


    public get isACompleteName() {
        return this.#isACompleteName;
    }

    public get englishReference() {
        return (this.template.name.english.simple ?? this.template.name.english.american)!;
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

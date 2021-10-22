import type {Builder}                  from '../../util/Builder';
import type {Name}                     from '../../lang/name/Name';
import type {TemplateWithNameTemplate} from './TemplateWithName.template';

import {NameBuilder}     from '../lang/NameBuilder';
import {NameCreator}     from '../lang/NameCreator';
import {TemplateBuilder} from './Template.builder';

export abstract class TemplateWithNameBuilder<T extends TemplateWithNameTemplate, U, >
    extends TemplateBuilder<T, U> {

    //region -------------------- Attributes --------------------

    readonly #isACompleteName;

    //endregion -------------------- Attributes --------------------

    protected constructor(template: T, isACompleteName: boolean,)
    protected constructor(templateBuilder: Builder<T>, isACompleteName: boolean,)
    protected constructor(templateBuilder_or_template: | T | Builder<T>, isACompleteName: boolean,)
    protected constructor(templateBuilder_or_template: | T | Builder<T>, isACompleteName: boolean,) {
        super(templateBuilder_or_template);
        this.#isACompleteName = isACompleteName;
    }


    public get isACompleteName() {
        return this.#isACompleteName;
    }

    public get englishReference() {
        const template = this.template;

        return (template.name.english.simple ?? template.name.english.american)!;
    }

    protected /*static*/ abstract get _templateMap(): Map<string, T>;

    protected _createName() {
        const template = this.template;
        const name = new NameBuilder(template.name, this.isACompleteName,).build();

        NameCreator.addEnglishReference(template.name, this._templateMap, template,);
        return name;
    }


    public build(): U {
        return this._build(this._createName());
    }

    protected abstract _build(name: Name,): U;

}

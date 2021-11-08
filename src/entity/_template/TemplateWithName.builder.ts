import type {Builder}                                              from '../../util/Builder';
import type {Name}                                                 from '../../lang/name/Name';
import type {ObjectHolder}                                         from '../../util/holder/ObjectHolder';
import type {PossibleGameReceived as OriginalPossibleGameReceived} from '../lang/NameBuilder.types';
import type {PossibleGameReceived}                                 from './TemplateWithName.builder.types';
import type {TemplateWithNameTemplate}                             from './TemplateWithName.template';

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';
import {NameBuilder}                  from '../lang/NameBuilder';
import {NameCreator}                  from '../lang/NameCreator';
import {TemplateBuilder}              from './Template.builder';

export abstract class TemplateWithNameBuilder<T extends TemplateWithNameTemplate, U, >
    extends TemplateBuilder<T, U> {

    //region -------------------- Attributes --------------------

    readonly #isACompleteName;
    readonly #game: ObjectHolder<OriginalPossibleGameReceived>;

    //endregion -------------------- Attributes --------------------

    protected constructor(templateBuilder_or_template: | T | Builder<T>, game: PossibleGameReceived<T>, isACompleteName: boolean,) {
        super(templateBuilder_or_template);
        this.#game = new DelayedObjectHolderContainer(() => typeof game === 'function' ? game(this.template) : game);
        this.#isACompleteName = isACompleteName;
    }


    public get isACompleteName() {
        return this.#isACompleteName;
    }

    private get __game() {
        return this.#game.get;
    }

    public get englishReference() {
        const englishNameTemplate = this.template.name.english;

        return (englishNameTemplate.simple ?? englishNameTemplate.american)!;
    }

    protected abstract get _static(): object;

    protected /*static*/ _uniqueName(template: T,): | string | null {
        return null;
    }

    protected _createName() {
        const template = this.template;
        const nameTemplate = template.name;
        const name = new NameBuilder(nameTemplate, this.__game, this.isACompleteName,).build();

        NameCreator.addEnglishReference(nameTemplate, this._static, this._uniqueName(template),);
        return name;
    }


    public build(): U {
        return this._build(this._createName());
    }

    protected abstract _build(name: Name,): U;

}

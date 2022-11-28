import type {Builder}                                              from '../../util/builder/Builder'
import type {Name}                                                 from '../../lang/name/Name'
import type {NullOrString}                                         from '../../util/types'
import type {ObjectHolder}                                         from '../../util/holder/ObjectHolder'
import type {PossibleGameReceived as OriginalPossibleGameReceived} from '../../lang/name/Name.builder.types'
import type {PossibleGameReceived}                                 from './TemplateWithName.builder.types'
import type {TemplateWithNameTemplate}                             from './TemplateWithName.template'

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container'
import {NameBuilderContainer}         from '../../lang/name/Name.builder.container'
import {NameCreator}                  from '../../lang/name/Name.creator'
import {TemplateBuilder}              from './Template.builder'

/**
 *
 * @property T the {@link TemplateWithNameBuilder template builder}
 * @property U the object to create
 */
export abstract class TemplateWithNameBuilder<T extends TemplateWithNameTemplate, U, >
    extends TemplateBuilder<T, U> {

    //region -------------------- Fields --------------------

    readonly #isACompleteName
    readonly #game: ObjectHolder<OriginalPossibleGameReceived>

    //endregion -------------------- Fields --------------------

    protected constructor(templateBuilder_or_template: | T | Builder<T>, game: PossibleGameReceived<T>, isACompleteName: boolean,) {
        super(templateBuilder_or_template)
        this.#game = new DelayedObjectHolderContainer(() => typeof game == 'function' ? game(this.template) : game)
        this.#isACompleteName = isACompleteName
    }


    public get isACompleteName() {
        return this.#isACompleteName
    }

    private get __game() {
        return this.#game.get
    }

    protected /*static*/ abstract get _static(): object

    protected /*static*/ _uniqueName(template: T,): NullOrString {
        return null
    }

    protected _createName() {
        const template = this.template
        const nameTemplate = template.name
        const nameBuilder = new NameBuilderContainer(nameTemplate, this.__game, this.isACompleteName,)

        NameCreator.addEnglishReference(nameTemplate, this._static, this._uniqueName(template),)
        return nameBuilder.build()
    }


    public build(): U {
        return this._build(this._createName())
    }

    protected abstract _build(name: Name<string>,): U

}

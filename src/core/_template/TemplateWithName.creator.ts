import type {PossibleGameReceived}                                 from 'core/_template/TemplateWithName.creator.types'
import type {TemplateWithNameTemplate}                             from 'core/_template/TemplateWithName.template'
import type {Name}                                                 from 'lang/name/Name'
import type {PossibleGameReceived as OriginalPossibleGameReceived} from 'lang/name/Name.builder.types'
import type {ObjectHolder}                                         from 'util/holder/ObjectHolder'

import {TemplateCreator}              from 'core/_template/Template.creator'
import {NameBuilderContainer}         from 'lang/name/Name.builder.container'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'

/**
 *
 * @property TEMPLATE the {@link TemplateWithNameCreator template builder}
 * @property OBJECT the object to create
 */
export abstract class TemplateWithNameCreator<TEMPLATE extends TemplateWithNameTemplate, OBJECT, >
    extends TemplateCreator<TEMPLATE, OBJECT> {

    //region -------------------- Fields --------------------

    readonly #isACompleteName
    readonly #game: ObjectHolder<OriginalPossibleGameReceived>

    //endregion -------------------- Fields --------------------

    protected constructor(template: TEMPLATE, game: PossibleGameReceived<TEMPLATE>, isACompleteName: boolean,) {
        super(template)
        this.#game = new DelayedObjectHolderContainer(() => typeof game == 'function' ? game(this.template) : game)
        this.#isACompleteName = isACompleteName
    }


    public get isACompleteName() {
        return this.#isACompleteName
    }

    private get __game() {
        return this.#game.get
    }

    public create(): OBJECT {
        return this._create(new NameBuilderContainer(this.template.name, this.__game, this.isACompleteName,).build())
    }

    protected abstract _create(name: Name<string>,): OBJECT

}

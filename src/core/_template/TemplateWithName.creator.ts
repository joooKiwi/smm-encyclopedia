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


    /**
     * Create a {@link Name} from a {@link TemplateWithNameTemplate template}, {@link OriginalPossibleGameReceived game} & a boolean to tell if it is a complete name
     *
     * @param template The template to retrieve its {@link NameTemplate name template}
     * @param game The game value
     * @param isACompleteName It is a complete name
     */
    protected static _createName(template: TemplateWithNameTemplate, game: OriginalPossibleGameReceived, isACompleteName: boolean,): Name<string> {
        return new NameBuilderContainer(template.name, game, isACompleteName,).build()
    }

    /**
     * Create a {@link Name} from a {@link TemplateWithNameTemplate template} using the current instance (this) as the base
     * for the {@link __game game} & the field "{@link isACompleteName}"
     *
     * @param template The template to retrieve its {@link NameTemplate name template} to create its name instance
     */
    protected _createName(template: TemplateWithNameTemplate,): Name<string> {
        return TemplateWithNameCreator._createName(template, this.__game, this.isACompleteName,)
    }

    public create(): OBJECT {
        return this._create(this._createName(this.template,))
    }

    protected abstract _create(name: Name<string>,): OBJECT

}

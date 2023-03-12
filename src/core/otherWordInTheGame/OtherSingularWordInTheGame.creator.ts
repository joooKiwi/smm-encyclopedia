import type {SimpleGameFromAllGamesTemplate} from 'core/game/SimpleGame.template'
import type {OtherSingularWordInTheGame}     from 'core/otherWordInTheGame/OtherSingularWordInTheGame'
import type {OtherWordInTheGameTemplate}     from 'core/otherWordInTheGame/OtherWordInTheGame.template'
import type {Name}                           from 'lang/name/Name'

import {TemplateWithNameCreator}             from 'core/_template/TemplateWithName.creator'
import {GamePropertyProvider}                from 'core/entity/properties/game/GameProperty.provider'
import {OtherPluralWordInTheGameContainer}   from 'core/otherWordInTheGame/OtherPluralWordInTheGame.container'
import {OtherSingularWordInTheGameContainer} from 'core/otherWordInTheGame/OtherSingularWordInTheGame.container'

export class OtherSingularWordInTheGameCreator
    extends TemplateWithNameCreator<OtherWordInTheGameTemplate, OtherSingularWordInTheGame> {

    public constructor(template: OtherWordInTheGameTemplate,) {
        super(template, 'all', false,)//TODO change it to true once other translations are completed
    }

    //region -------------------- Build helper methods --------------------

    static #createGame(template: SimpleGameFromAllGamesTemplate<boolean, boolean, boolean>,) {
        return GamePropertyProvider.get.get(template['1'], template['3DS'], template['2'],)
    }

    //endregion -------------------- Build helper methods --------------------
    protected override _create(name: Name<string>,): OtherSingularWordInTheGame {
        const template = this.template,
            gameProperty = OtherSingularWordInTheGameCreator.#createGame(template.properties.isIn.game,),
            pluralForm = template.properties.pluralForm

        return new OtherSingularWordInTheGameContainer(
            name,
            gameProperty,
            pluralForm == null ? null : new OtherPluralWordInTheGameContainer(this._createName(pluralForm), gameProperty,),
        )
    }

}

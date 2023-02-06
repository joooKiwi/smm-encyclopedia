import {TemplateWithNameCreator} from 'core/_template/TemplateWithName.creator'
import {CharacterNameTemplate}   from 'core/characterName/CharacterName.template'
import {CharacterName}           from 'core/characterName/CharacterName'
import {Name}                    from 'lang/name/Name'
import {CharacterNameContainer}  from 'core/characterName/CharacterName.container'
import {GameProperty}            from 'core/entity/properties/game/GameProperty'
import {GamePropertyProvider}    from 'core/entity/properties/game/GameProperty.provider'

export class CharacterNameCreator
    extends TemplateWithNameCreator<CharacterNameTemplate, CharacterName> {

    public constructor(template: CharacterNameTemplate,) {
        super(template, 'all', false,)
    }

    //region -------------------- Build helper methods --------------------

    protected _createGame(): GameProperty {
        const {properties: {isIn: {game: isInGame,}}} = this.template
        return GamePropertyProvider.get.get(isInGame['1'], isInGame['3DS'], isInGame['2'],)
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _create(name: Name<string>,): CharacterName {
        return new CharacterNameContainer(name, this._createGame(),)
    }
}
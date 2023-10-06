import type {CharacterName}         from 'core/characterName/CharacterName'
import type {CharacterNameTemplate} from 'core/characterName/CharacterName.template'

import {CharacterNameContainer} from 'core/characterName/CharacterName.container'
import {GamePropertyProvider}   from 'core/entity/properties/game/GameProperty.provider'
import {NameBuilderContainer}   from 'lang/name/Name.builder.container'

export function createContent(template: CharacterNameTemplate,): CharacterName {
    const isInGame = template.properties.isIn.game
    return new CharacterNameContainer(
        new NameBuilderContainer(template.name, 'all', false,).build(),
        GamePropertyProvider.get.get(isInGame['1'], isInGame['3DS'], isInGame['2'],),
    )
}

import type {OtherSingularWordInTheGame} from 'core/otherWordInTheGame/OtherSingularWordInTheGame'
import type {OtherWordInTheGameTemplate} from 'core/otherWordInTheGame/OtherWordInTheGame.template'

import {GamePropertyProvider}                from 'core/entity/properties/game/GameProperty.provider'
import {OtherPluralWordInTheGameContainer}   from 'core/otherWordInTheGame/OtherPluralWordInTheGame.container'
import {OtherSingularWordInTheGameContainer} from 'core/otherWordInTheGame/OtherSingularWordInTheGame.container'
import {NameBuilderContainer}                from 'lang/name/Name.builder.container'


export function createContent(template: OtherWordInTheGameTemplate,): OtherSingularWordInTheGame {
    const pluralForm = template.properties.pluralForm
    const isInGame = template.properties.isIn.game

    const name = new NameBuilderContainer(template.name, 'all', false,).build()//TODO change it to true once other translations are completed
    const gameProperty = GamePropertyProvider.get.get(isInGame['1'], isInGame['3DS'], isInGame['2'],)

    if (pluralForm == null)
        return new OtherSingularWordInTheGameContainer(name, gameProperty, null,)
    return new OtherSingularWordInTheGameContainer(
        name,
        gameProperty,
        new OtherPluralWordInTheGameContainer(
            new NameBuilderContainer(pluralForm.name, 'all', false,).build(),//TODO change it to true once other translations are completed
            gameProperty,
        ),
    )
}

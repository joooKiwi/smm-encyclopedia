import type {GameReference}         from 'core/gameReference/GameReference'
import type {GameReferenceTemplate} from 'core/gameReference/GameReference.template'

import {GameReferenceContainer} from 'core/gameReference/GameReference.container'
import {NameBuilderContainer}   from 'lang/name/Name.builder.container'


export function createContent(template: GameReferenceTemplate,): GameReference {
    return new GameReferenceContainer(
        template.acronym,
        new NameBuilderContainer(template.name, 'all', false,).build(),
    )
}

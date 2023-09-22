import type {EntityTemplate} from 'core/entity/Entity.template'
import type {EntityLink}     from 'core/entity/loader.types'

/**
 * @template
 */
export interface EntityReferencesTemplate {

    style: {
        superMarioBros: NullOr<EntityLink>
        superMarioBros3: NullOr<EntityLink>
        superMarioWorld: NullOr<EntityLink>
        newSuperMarioBrosU: NullOr<EntityLink>
        superMario3DWorld: NullOr<EntityLink>
    }

    theme: {
        ground: NullOr<EntityLink>
        underground: NullOr<EntityLink>
        underwater: NullOr<EntityLink>
        desert: NullOr<EntityLink>
        snow: NullOr<EntityLink>
        sky: NullOr<EntityLink>
        forest: NullOr<EntityLink>
        ghostHouse: NullOr<EntityLink>
        airship: NullOr<EntityLink>
        castle: NullOr<EntityLink>
    }

    time: {
        day: NullOr<EntityLink>
        night: NullOr<EntityLink>
    }

    group: {
        gameStyle: NullOr<Set<EntityTemplate>>
        theme: NullOr<Set<EntityTemplate>>
        time: NullOr<Set<EntityTemplate>>
        all: NullOr<Set<EntityTemplate>>
    }

}

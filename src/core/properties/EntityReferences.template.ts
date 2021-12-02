import type {EntityLink}     from '../entityTypes';
import type {EntityTemplate} from '../entity/Entity.template';

/**
 * @template
 */
export interface EntityReferencesTemplate {

    style: {
        superMarioBros: | EntityLink | null
        superMarioBros3: | EntityLink | null
        superMarioWorld: | EntityLink | null
        newSuperMarioBrosU: | EntityLink | null
        superMario3DWorld: | EntityLink | null
    }

    theme: {
        ground: EntityLink
        underground: | EntityLink | null
        underwater: | EntityLink | null
        desert: | EntityLink | null
        snow: | EntityLink | null
        sky: | EntityLink | null
        forest: | EntityLink | null
        ghostHouse: | EntityLink | null
        airship: | EntityLink | null
        castle: | EntityLink | null
    }

    time: {
        day: EntityLink
        night: | EntityLink | null
    }

    group: {
        gameStyle: | Set<EntityTemplate> | null
        theme: | Set<EntityTemplate> | null
        time: | Set<EntityTemplate> | null
        all: | Set<EntityTemplate> | null
    }

}

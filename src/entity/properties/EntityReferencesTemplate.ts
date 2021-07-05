import type {EntityLink}     from '../entityTypes';
import type {EntityTemplate} from '../simple/EntityTemplate';

/**
 * @template
 */
export interface EntityReferencesTemplate {

    style: {
        superMarioBros: null | EntityLink
        superMarioBros3: null | EntityLink
        superMarioWorld: null | EntityLink
        newSuperMarioBrosU: null | EntityLink
        superMario3DWorld: null | EntityLink
    }

    theme: {
        ground: EntityLink
        underground: null | EntityLink
        underwater: null | EntityLink
        desert: null | EntityLink
        snow: null | EntityLink
        sky: null | EntityLink
        forest: null | EntityLink
        ghostHouse: null | EntityLink
        airship: null | EntityLink
        castle: null | EntityLink
    }

    day: EntityLink
    night: null | EntityLink

    all: null | EntityTemplate[]

}

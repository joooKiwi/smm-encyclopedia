import {EntityLink} from "../entityTypes";
import {EntityFilePropertiesTemplate} from "../simple/EntityFilePropertiesTemplate";

export interface EntityReferencesTemplate {

    style: {
        superMarioBros: EntityLink
        superMarioBros3: EntityLink
        superMarioWorld: EntityLink
        newSuperMarioBrosU: EntityLink
        superMario3DWorld: null | EntityLink
    }

    theme: {
        ground: EntityLink
        underground: EntityLink
        underwater: EntityLink
        desert: null | EntityLink
        snow: null | EntityLink
        sky: null | EntityLink
        forest: null | EntityLink
        ghostHouse: EntityLink
        airship: EntityLink
        castle: EntityLink
    }

    day: EntityLink
    night: null | EntityLink

    all: null | EntityFilePropertiesTemplate[]

}

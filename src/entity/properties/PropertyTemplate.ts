/**
 * @template
 */
export interface PropertyTemplate {

    game: {//TODO move to isolated interface
        1: boolean
        2: boolean
    }

    style: {
        superMarioBros: boolean
        superMarioBros3: boolean
        superMarioWorld: boolean
        newSuperMarioBrosU: boolean
        superMario3DWorld: null | boolean
    }

    theme: {
        ground: boolean
        underground: boolean
        underwater: boolean
        desert: null | boolean
        snow: null | boolean
        sky: null | boolean
        forest: null | boolean
        ghostHouse: boolean
        airship: boolean
        castle: boolean
    }

    time: {
        day: boolean
        night: null | boolean
    }

}

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
        superMario3DWorld: | boolean | null
    }

    theme: {
        ground: boolean
        underground: boolean
        underwater: boolean
        desert: | boolean | null
        snow: | boolean | null
        sky: | boolean | null
        forest: | boolean | null
        ghostHouse: boolean
        airship: boolean
        castle: boolean
    }

    time: {
        day: boolean
        night: | boolean | null
    }

}

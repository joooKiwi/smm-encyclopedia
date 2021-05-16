export interface IsInPropertyTemplate {

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
        underground: null | boolean
        underwater: null | boolean
        desert: null | boolean
        snow: null | boolean
        sky: null | boolean
        forest: null | boolean
        ghostHouse: null | boolean
        airship: null | boolean
        castle: null | boolean
    }

    day: boolean
    night: null | boolean

}

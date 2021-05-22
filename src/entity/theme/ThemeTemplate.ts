import {SMM2NameTemplate} from '../lang/SMM2NameTemplate';

export interface ThemeTemplate {

    isIn: {
        game: {//TODO move to isolated interface
            1: boolean
            2: boolean
        }
        theme: {
            course: boolean
            world: boolean
        }
    }

    name: SMM2NameTemplate

}

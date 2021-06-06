import {SMM2NameTemplate} from '../lang/SMM2NameTemplate';

export interface GameStyleTemplate {

    isIn:{
        game: {//TODO move to isolated interface
            1: boolean
            2: boolean
        }
    }
    name: SMM2NameTemplate

}
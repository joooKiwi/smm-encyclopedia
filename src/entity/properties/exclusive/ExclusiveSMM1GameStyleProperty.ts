import {GameStyleProperty} from '../GameStyleProperty';

export interface ExclusiveSMM1GameStyleProperty
    extends GameStyleProperty {

    get isInSuperMarioBrosStyle(): true

    get isInSuperMarioBros3Style(): false

    get isInSuperMarioWorldStyle(): false

    get isInNewSuperMarioBrosUStyle(): false

    get isInSuperMario3DWorldStyle(): null

}
import type {Entity}     from '../Entity';
import type {GameStyles} from '../../gameStyle/GameStyles';

export interface GameStyleReferences {

    get referenceInSuperMarioBrosStyle(): Entity

    get referenceInSuperMarioBros3Style(): Entity

    get referenceInSuperMarioWorldStyle(): Entity

    get referenceInNewSuperMarioBrosUStyle(): Entity

    get referenceInSuperMario3DWorldStyle(): Entity


    getReferenceFrom(gameStyle: GameStyles,): Entity

    get everyGameStyleReferences(): readonly Entity[]

}

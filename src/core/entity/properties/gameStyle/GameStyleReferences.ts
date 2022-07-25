import type {Entity, PossibleOtherEntities} from '../../Entity';
import type {GameStyles}                    from '../../../gameStyle/GameStyles';

export interface GameStyleReferences {

    get referenceInSuperMarioBrosStyle(): PossibleOtherEntities

    get referenceInSuperMarioBros3Style(): PossibleOtherEntities

    get referenceInSuperMarioWorldStyle(): PossibleOtherEntities

    get referenceInNewSuperMarioBrosUStyle(): PossibleOtherEntities

    get referenceInSuperMario3DWorldStyle(): PossibleOtherEntities


    getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities

    get everyGameStyleReferences(): readonly Entity[]

}

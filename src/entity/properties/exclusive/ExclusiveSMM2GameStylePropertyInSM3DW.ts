import type {ExclusiveSMM2GameStyleProperty} from './ExclusiveSMM2GameStyleProperty';

export interface ExclusiveSMM2GameStylePropertyInSM3DW
    extends ExclusiveSMM2GameStyleProperty {

    get isInSuperMarioBrosStyle(): false

    get isInSuperMarioBros3Style(): false

    get isInSuperMarioWorldStyle(): false

    get isInNewSuperMarioBrosUStyle(): false

    get isInSuperMario3DWorldStyle(): true

}

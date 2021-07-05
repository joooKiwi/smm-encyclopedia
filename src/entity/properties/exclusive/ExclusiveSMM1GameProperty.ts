import type {GameProperty} from '../GameProperty';

export interface ExclusiveSMM1GameProperty
    extends GameProperty {

    get isInSuperMarioMaker1(): true

    get isInSuperMarioMaker2(): false

}
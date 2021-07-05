import type {GameProperty} from '../GameProperty';

export interface ExclusiveSMM2GameProperty
    extends GameProperty {

    get isInSuperMarioMaker1(): false

    get isInSuperMarioMaker2(): true

}
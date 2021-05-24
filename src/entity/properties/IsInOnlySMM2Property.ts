import {IsInProperty}             from './IsInProperty';
import {IsInOnlySMM2GameProperty} from './IsInOnlySMM2GameProperty';

export interface IsInOnlySMM2Property
    extends IsInProperty, IsInOnlySMM2GameProperty {

    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

    isInSuperMario3DWorldStyle: boolean

}
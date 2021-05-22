import {Entity}                   from './Entity';
import {IsInOnlySMM2GameProperty} from '../properties/IsInOnlySMM2GameProperty';
import {IsInOnlySMM2Property}     from '../properties/IsInOnlySMM2Property';

export interface SMM2ExclusiveEntity
    extends Entity, IsInOnlySMM2Property {

    isInProperty: IsInOnlySMM2Property

    isInGame: IsInOnlySMM2GameProperty

    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

}

import {Entity}                        from './Entity';
import {IsInOnlySMM2GameProperty}      from '../properties/IsInOnlySMM2GameProperty';
import {IsInOnlySMM2Property}          from '../properties/IsInOnlySMM2Property';
import {IsInOnlySMM2GameStyleProperty} from '../properties/IsInOnlySMM2GameStyleProperty';

export interface SMM2ExclusiveEntity
    extends Entity, IsInOnlySMM2Property, IsInOnlySMM2GameStyleProperty {

    isInProperty: IsInOnlySMM2Property

    isInGame: IsInOnlySMM2GameProperty
    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

    isInGameStyle: IsInOnlySMM2GameStyleProperty
    isInSuperMario3DWorldStyle: boolean

}

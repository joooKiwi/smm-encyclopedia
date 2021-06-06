import {Entity}                         from './Entity';
import {ExclusiveSMM2GameProperty}      from '../properties/exclusive/ExclusiveSMM2GameProperty';
import {ExclusiveSMM2GameStyleProperty} from '../properties/exclusive/ExclusiveSMM2GameStyleProperty';
import {ExclusiveSMM2Property}          from '../properties/exclusive/ExclusiveSMM2Property';
import {ExclusiveSMM2ThemeProperty}     from '../properties/exclusive/ExclusiveSMM2ThemeProperty';
import {ExclusiveSMM2TimeProperty}      from '../properties/exclusive/ExclusiveSMM2TimeProperty';

export interface ExclusiveSMM2Entity
    extends Entity, ExclusiveSMM2Property, ExclusiveSMM2GameProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimeProperty {

    propertyContainer: ExclusiveSMM2Property

    gameContainer: ExclusiveSMM2GameProperty
    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

    gameStyleContainer: ExclusiveSMM2GameStyleProperty
    isInSuperMario3DWorldStyle: boolean

    themeContainer: ExclusiveSMM2ThemeProperty
    isInDesertTheme: boolean
    isInSnowTheme: boolean
    isInSkyTheme: boolean
    isInForestTheme: boolean

    timeContainer: ExclusiveSMM2TimeProperty

}

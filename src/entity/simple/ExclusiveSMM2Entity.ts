import {Entity}                         from './Entity';
import {ExclusiveSMM2GameProperty}      from '../properties/exclusive/ExclusiveSMM2GameProperty';
import {ExclusiveSMM2GameStyleProperty} from '../properties/exclusive/ExclusiveSMM2GameStyleProperty';
import {ExclusiveSMM2Property}          from '../properties/exclusive/ExclusiveSMM2Property';
import {ExclusiveSMM2ThemeProperty}     from '../properties/exclusive/ExclusiveSMM2ThemeProperty';
import {ExclusiveSMM2TimeProperty}      from '../properties/exclusive/ExclusiveSMM2TimeProperty';

export interface ExclusiveSMM2Entity
    extends Entity, ExclusiveSMM2Property, ExclusiveSMM2GameProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimeProperty {

    get propertyContainer(): ExclusiveSMM2Property


    get gameContainer(): ExclusiveSMM2GameProperty

    get isInSuperMarioMaker1(): false

    get isInSuperMarioMaker2(): true


    get gameStyleContainer(): ExclusiveSMM2GameStyleProperty

    get isInSuperMario3DWorldStyle(): boolean


    get themeContainer(): ExclusiveSMM2ThemeProperty

    get isInDesertTheme(): boolean

    get isInSnowTheme(): boolean

    get isInSkyTheme(): boolean

    get isInForestTheme(): boolean


    get timeContainer(): ExclusiveSMM2TimeProperty

}

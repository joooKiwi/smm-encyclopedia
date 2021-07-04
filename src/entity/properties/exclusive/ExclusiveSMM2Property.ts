import {ExclusiveSMM2GameProperty}      from './ExclusiveSMM2GameProperty';
import {ExclusiveSMM2GameStyleProperty} from './ExclusiveSMM2GameStyleProperty';
import {ExclusiveSMM2ThemeProperty}     from './ExclusiveSMM2ThemeProperty';
import {ExclusiveSMM2TimeProperty}      from './ExclusiveSMM2TimeProperty';
import {Property}                       from '../Property';

export interface ExclusiveSMM2Property
    extends Property, ExclusiveSMM2GameProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimeProperty {

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
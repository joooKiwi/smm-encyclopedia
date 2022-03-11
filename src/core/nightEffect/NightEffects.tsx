import {Fragment} from 'react';
import {Link}     from 'react-router-dom';

import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './NightEffects.types';
import type {EveryPossibleRouteNames}                                                                                                                                                                    from '../../routes/everyRoutes.types';
import type {ReactElement}                                                                                                                                                                               from '../../util/react/ReactProperty';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';
import type {TranslationMethod, TranslationReplaceKeysMap}                                                                                                                                               from '../../lang/components/TranslationProperty';

import {EMPTY_OBJECT}                  from '../../util/emptyVariables';
import {Enum}                          from '../../util/enum/Enum';
import {Entities}                      from '../entity/Entities';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {ProjectLanguages}              from '../../lang/ProjectLanguages';
import {route}                         from '../../routes/route';
import {StringContainer}               from '../../util/StringContainer';
import {Themes}                        from '../theme/Themes';

export class NightEffects
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SPECIAL_EFFECT_ON_ENTITIES = new class NightEffects_SpecialEffectOnEntities extends NightEffects {

        protected _createReplaceComponent(translation:TranslationMethod<'gameContent'>,): TranslationReplaceKeysMap {
            //TODO change the link to be only for the entities with special effects on ground night
            return {
                entities: NightEffects.__createEntitiesLink(this, 'everyEntities',),
            };
        }

    }('Special effect on entities',);
    public static readonly SCREEN_UPSIDE_DOWN =         new NightEffects('Screen upside down',);
    public static readonly DARK =                       new class NightEffects_Dark extends NightEffects {

        protected _createReplaceComponent(translation:TranslationMethod<'gameContent'>,): TranslationReplaceKeysMap {
            //TODO change the entities to be only for the entities with dark light
            return {
                entities: NightEffects.__createEntitiesLink(this, 'everyEntities',),
                players: NightEffects.__createPlayersLink(this),
            };
        }

    }('Dark',);
    public static readonly WIND =                       new class NightEffects_Wind extends NightEffects {

        protected _createReplaceComponent(translation:TranslationMethod<'gameContent'>,): TranslationReplaceKeysMap {
            //TODO change the game styles to only show the effect with the game style view.
            return {
                gameStyle: <Link key={`${this.englishName} (game style)`} to={route('everyGameStyles')} className="link-primary">{translation('Game style').toLowerCase()}</Link>,
            };
        }

    }('Wind',);
    public static readonly SLIPPERY =                   new NightEffects('Slippery',);
    public static readonly LOW_GRAVITY =                new class NightEffects_LowGravity extends NightEffects {

        protected _createReplaceComponent(translation:TranslationMethod<'gameContent'>,): TranslationReplaceKeysMap {
            return {
                underwaterImage: NightEffects.__createUnderwaterImage(this),
                entities: NightEffects.__createEntitiesLink(this, 'everyEntities',),
            };
        }

    }('Low gravity',);
    public static readonly POISON_LIQUID =              new class NightEffects_PoisonLiquid extends NightEffects {

        protected _createReplaceComponent(translation:TranslationMethod<'gameContent'>,): TranslationReplaceKeysMap {
            return {
                water: <span key={`${this.englishName} (water)`} className="text-decoration-underline">{ProjectLanguages.currentLanguage.get(Entities.WATER.reference)!.toLowerCase()}</span>,
                poison: <span key={`${this.englishName} (poison)`} className="text-decoration-underline">{ProjectLanguages.currentLanguage.get(Entities.POISON.reference)!.toLowerCase()}</span>,
            };
        }

    }('Poison liquid',);
    public static readonly ENTITIES_IN_WATER =          new class NightEffects_EntitiesInWater extends NightEffects {

        protected _createReplaceComponent(translation:TranslationMethod<'gameContent'>,): TranslationReplaceKeysMap {
            //TODO change the link to be only for the entities with the underwater behaviour on the sky night theme
            return {
                underwaterImage: NightEffects.__createUnderwaterImage(this),
                entities: NightEffects.__createEntitiesLink(this, 'everyEntities',),
            };
        }

    }('Entities in water',);
    public static readonly CHARACTERS_IN_WATER =        new class NightEffects_CharactersInWater extends NightEffects {

        protected _createReplaceComponent(translation:TranslationMethod<'gameContent'>,): TranslationReplaceKeysMap {
            return {
                underwaterImage: NightEffects.__createUnderwaterImage(this),
                players: NightEffects.__createPlayersLink(this),
            };
        }

    }('Characters in water',);


    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: NightEffects;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super();
        this.#englishName = new StringContainer(englishName);
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    private static __createUnderwaterImage(instance: NightEffects,): ReactElement {
        return <Fragment key={`${instance.englishName} (underwater)`}>{Themes.UNDERWATER.renderSingleComponent(true)}</Fragment>;
    }

    private static __createEntitiesLink(instance: NightEffects, routeName: EveryPossibleRouteNames,): ReactElement {
        //TODO add entities translation
        return <Link key={`${instance.englishName} (entities)`} to={route(routeName)} className="link-primary">--entities--</Link>;
    }

    private static __createPlayersLink(instance: NightEffects,): ReactElement {
        //TODO add players translation
        return <span key={`${instance.englishName} (players)`} className="text-decoration-underline">--players--</span>;
    }

    protected _createReplaceComponent(translation: TranslationMethod<'gameContent'>,): TranslationReplaceKeysMap {
        return EMPTY_OBJECT;
    }

    public get createNewComponent(): ReactElement {
        return <GameContentTranslationComponent>{translation =>
            <GameContentTranslationComponent translationKey={`nightEffect.${this.englishName}`} replace={this._createReplaceComponent(translation)}/>
        }</GameContentTranslationComponent>;
    }


    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(limit => limit.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<NightEffects> {
        return NightEffects;
    }


    protected static _getValueByString(value:string,){
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends NightEffects = NightEffects, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): NightEffects
    public static getValue(value: PossibleValue,): | NightEffects | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------
}

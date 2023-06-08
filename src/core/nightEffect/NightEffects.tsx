import type {BasicCompanionEnumDeclaration, CollectionHolder, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {BasicCompanionEnum, Enum}                                                                   from '@joookiwi/enumerable'
import {Fragment}                                                                                   from 'react'
import {Link}                                                                                       from 'react-router-dom'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/nightEffect/NightEffects.types'
import type {TranslationReplaceKeysMap}            from 'lang/components/TranslationProperty'
import type {EveryPossibleRouteNames}              from 'route/everyRoutes.types'
import type {Nullable}                             from 'util/types/nullable'
import type {ReactElement}                         from 'util/react/ReactProperties'

import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import {Themes}                 from 'core/theme/Themes'
import {ProjectLanguages}       from 'lang/ProjectLanguages'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {route}                  from 'route/route'
import {Import}                 from 'util/DynamicImporter'
import {EMPTY_OBJECT}           from 'util/emptyVariables'
import {getValueByEnglishName}  from 'util/utilitiesMethods'
import {StringContainer}        from 'util/StringContainer'

//region -------------------- Import from deconstruction --------------------

const {ENTITY, PLAYER,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

export class NightEffects
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SPECIAL_EFFECT_ON_ENTITIES = new class NightEffects_SpecialEffectOnEntities extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            //TODO change the link to be only for the entities with special effects on ground night
            return {
                entities: NightEffects._createEntitiesLink(this, 'everyEntity',),
            }
        }

    }('Special effect on entities',)
    public static readonly SCREEN_UPSIDE_DOWN =         new NightEffects('Screen upside down',)
    public static readonly DARK =                       new class NightEffects_Dark extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            //TODO change the entities to be only for the entities with dark light
            return {
                entities: NightEffects._createEntitiesLink(this, 'everyEntity',),
                players: NightEffects._createPlayersLink(this),
            }
        }

    }('Dark',)
    public static readonly WIND =                       new class NightEffects_Wind extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            //TODO change the game styles to only show the effect with the game style view.
            return {
                gameStyle: <Link key={`${this.englishName} (game style)`} to={route('everyGameStyle')} className="link-primary">{gameContentTranslation('game style.singular').toLowerCase()}</Link>,
            }
        }

    }('Wind',)
    public static readonly SLIPPERY =                   new NightEffects('Slippery',)
    public static readonly LOW_GRAVITY =                new class NightEffects_LowGravity extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            return {
                underwaterImage: NightEffects._createUnderwaterImage(this),
                entities: NightEffects._createEntitiesLink(this, 'everyEntity',),
            }
        }

    }('Low gravity',)
    public static readonly POISON_LIQUID =              new class NightEffects_PoisonLiquid extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            return {
                water: <span key={`${this.englishName} (water)`} className="text-decoration-underline">{ProjectLanguages.current.get(Import.Entities.WATER.reference)!.toLowerCase()}</span>,
                poison: <span key={`${this.englishName} (poison)`} className="text-decoration-underline">{ProjectLanguages.current.get(Import.Entities.POISON.reference)!.toLowerCase()}</span>,
            }
        }

    }('Poison liquid',)
    public static readonly ENTITIES_IN_WATER =          new class NightEffects_EntitiesInWater extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            //TODO change the link to be only for the entities with the underwater behaviour on the sky night theme
            return {
                underwaterImage: NightEffects._createUnderwaterImage(this),
                entities: NightEffects._createEntitiesLink(this, 'everyEntity',),
            }
        }

    }('Entities in water',)
    public static readonly CHARACTERS_IN_WATER =        new class NightEffects_CharactersInWater extends NightEffects {

        protected override _createReplaceComponent(): TranslationReplaceKeysMap {
            return {
                underwaterImage: NightEffects._createUnderwaterImage(this),
                players: NightEffects._createPlayersLink(this),
            }
        }

    }('Characters in water',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<NightEffects, typeof NightEffects>> = class CompanionEnum_NightEffects
        extends BasicCompanionEnum<NightEffects, typeof NightEffects> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_NightEffects

        private constructor() {
            super(NightEffects,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_NightEffects()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected static _createUnderwaterImage(instance: NightEffects,): ReactElement {
        return <Fragment key={`${instance.englishName} (underwater)`}>{Themes.UNDERWATER.renderSingleComponent(true)}</Fragment>
    }

    protected static _createEntitiesLink(instance: NightEffects, routeName: EveryPossibleRouteNames,): ReactElement {
        return <Link key={`${instance.englishName} (entities)`} to={route(routeName)} className="link-primary">{
            ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(ENTITY.pluralEnglishName).toLowerCase()
        }</Link>
    }

    protected static _createPlayersLink(instance: NightEffects,): ReactElement {
        return <span key={`${instance.englishName} (players)`} className="text-decoration-underline">{
            PLAYER.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(PLAYER.pluralEnglishName).toLowerCase()
        }</span>
    }

    protected _createReplaceComponent(): TranslationReplaceKeysMap {
        return EMPTY_OBJECT
    }

    public get createNewComponent(): ReactElement {
        return gameContentTranslation(`nightEffect.${this.englishName}`, this._createReplaceComponent(),)
    }


    public static getValueByName(value: Nullable<| NightEffects | string>,): NightEffects {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<NightEffects>,): NightEffects {
        return NightEffects.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<NightEffects> {
        return NightEffects.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<NightEffects> {
        yield* NightEffects.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------
}

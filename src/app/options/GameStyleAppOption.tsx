import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}   from 'app/options/GameStyleAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'
import type {GameStyles}        from 'core/gameStyle/GameStyles'

import {CommonOptions}          from 'app/options/CommonOptions'
import {TableOption}            from 'app/tools/table/TableOption'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import GameStyleImage           from 'core/gameStyle/component/GameStyleImage'
import NightEffectComponent     from 'core/nightEffect/NightEffect.component'
import {Themes}                 from 'core/theme/Themes'
import ThemeImage               from 'core/theme/component/ThemeImage'
import {Times}                  from 'core/time/Times'
import TimeImage                from 'core/time/component/TimeImage'
import {ProjectLanguages}       from 'lang/ProjectLanguages'
import {gameContentTranslation} from 'lang/components/translationMethods'

import LanguageCompanion = ProjectLanguages.Companion

export abstract class GameStyleAppOption
    extends TableOption<GameStyles, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON =             new class GameStyleAppOption_Images extends GameStyleAppOption {

        public override renderContent(enumeration: GameStyles,): ReactJSXElement {
            return <GameStyleImage reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME =              new class GameStyleAppOption_Name extends GameStyleAppOption {

        public override renderContent(enumeration: GameStyles,): ReactJSXElement {
            return CommonOptions.get.getNameContent(enumeration)
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly NIGHT_DESERT_WIND = new class GameStyleAppOption_NightDesertWind extends GameStyleAppOption {

        public override renderContent({reference,}: GameStyles,): ReactJSXElement {
            return <NightEffectComponent gameStyle={reference}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {
                key: 'nightDesertWind',
                element: <div className="night-desert-wind-effect-container">
                    <ThemeImage reference={Themes.DESERT}/>
                    <TimeImage reference={Times.NIGHT}/>
                </div>,
                tooltip: gameContentTranslation('Wind effect (night desert)', {
                    night: unfinishedText('night'),//TODO add night reference
                    desert: LanguageCompanion.current.get(Themes.DESERT.reference)!.toLowerCase(),
                },),
            }
        }

    }('nightDesertWind',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<GameStyleAppOption, typeof GameStyleAppOption> = class CompanionEnum_GameStyleAppOption
        extends CompanionEnum<GameStyleAppOption, typeof GameStyleAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_GameStyleAppOption

        private constructor() {
            super(GameStyleAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_GameStyleAppOption()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super(associatedClass,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

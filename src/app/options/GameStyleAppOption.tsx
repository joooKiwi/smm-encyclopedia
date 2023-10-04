import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/GameStyleAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

import {CommonOptions}          from 'app/options/CommonOptions'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import NightEffectComponent     from 'core/nightEffect/NightEffect.component'
import {Themes}                 from 'core/theme/Themes'
import {Times}                  from 'core/time/Times'
import {ProjectLanguages}       from 'lang/ProjectLanguages'
import {gameContentTranslation} from 'lang/components/translationMethods'

export abstract class GameStyleAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<GameStyles> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON =             new class GameStyleAppOption_Images extends GameStyleAppOption {

        protected override _createContentOption(enumeration: GameStyles,) {
            return enumeration.renderSingleComponent
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'icon', element: unfinishedText('Icon'),}
        }

    }()
    public static readonly NAME =              new class GameStyleAppOption_Name extends GameStyleAppOption {

        protected override _createContentOption(enumeration: GameStyles,) {
            return CommonOptions.get.getNameContent(enumeration)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }()
    public static readonly NIGHT_DESERT_WIND = new class GameStyleAppOption_NightDesertWind extends GameStyleAppOption {

        protected override _createContentOption({reference,}: GameStyles,) {
            return <NightEffectComponent gameStyle={reference}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'nightDesertWind',
                element: <div className="night-desert-wind-effect-container">{Themes.DESERT.renderSingleComponent(false)}{Times.NIGHT.renderSingleComponent}</div>,
                tooltip: gameContentTranslation('Wind effect (night desert)', {
                    night: unfinishedText('night'),//TODO add night reference
                    desert: ProjectLanguages.current.get(Themes.DESERT.reference)!.toLowerCase(),
                },),
            }
        }

    }()

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

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: GameStyles,): ReactElement

    public renderContent(enumeration: GameStyles,): readonly [ReactElement,] {
        return [this._createContentOption(enumeration,),]
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent

    public renderTableHeader(): SingleHeaderContent {
        return this._createTableHeaderOption()
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------

}

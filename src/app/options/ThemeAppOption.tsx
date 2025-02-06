import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}   from 'app/options/ThemeAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'

import {CommonOptions}          from 'app/options/CommonOptions'
import {TableOption}            from 'app/tools/table/TableOption'
import Image                    from 'app/tools/images/Image'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import NightEffectComponent     from 'core/nightEffect/NightEffect.component'
import {Themes}                 from 'core/theme/Themes'
import ThemeImage               from 'core/theme/component/ThemeImage'
import ThemeTypeImages          from 'core/theme/component/ThemeTypeImages'
import {Times}                  from 'core/time/Times'
import TimeImage                from 'core/time/component/TimeImage'
import {gameContentTranslation} from 'lang/components/translationMethods'

/**
 * @todo change the SMM1 & SMM2 yes/no result into something different like the sounds or other things
 * @fixme if the yes/no is still in used after the change, use Texts.renderYesNoComponent() instead.
 */
export abstract class ThemeAppOption
    extends TableOption<Themes, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON =                  new class ThemeAppOption_Image extends ThemeAppOption {

        public override renderContent(enumeration: Themes,): ReactJSXElement {
            return <ThemeImage reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly ENDLESS_MARIO_ICON =    new class ThemeAppOption_EndlessMarioImage extends ThemeAppOption {

        public override renderContent({endlessMarioImageFile,}: Themes,): ReactJSXElement {
            return <Image file={endlessMarioImageFile}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'endless-mario-icon', element: unfinishedText('Endless Mario',),}//TODO add Endless Mario
        }

    }('endlessMarioIcon',)
    public static readonly NAME =                   new class ThemeAppOptionName extends ThemeAppOption {

        public override renderContent(enumeration: Themes,): ReactJSXElement {
            return <div className="nameWithContent-container">
                <div className="col-10">
                    {CommonOptions.get.getGameContent(enumeration,)}
                    {CommonOptions.get.getNameContent(enumeration,)}
                </div>
                <div className="col-2"><ThemeTypeImages reference={enumeration}/></div>
            </div>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly NIGHT_EFFECT =           new class ThemeAppOption_NightEffect extends ThemeAppOption {

        public override renderContent({reference: {courseTheme,},}: Themes,): ReactJSXElement {
            return <NightEffectComponent theme={courseTheme}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {
                key: 'effect', element: <div className="nightDesert-header-image-container position-relative mx-auto">
                    <ThemeImage reference={Themes.DESERT}/>
                    <TimeImage reference={Times.NIGHT}/>
                </div>,
                tooltip: gameContentTranslation('Effect (night)', {night: unfinishedText('night effect name',),},)//TODO add translation for the night effect name
            }
        }

    }('nightEffect',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<ThemeAppOption, typeof ThemeAppOption> = class CompanionEnum_ThemeAppOption
        extends CompanionEnum<ThemeAppOption, typeof ThemeAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ThemeAppOption

        private constructor() {
            super(ThemeAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ThemeAppOption()
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

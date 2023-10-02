import type {CollectionHolder, CollectionIterator}              from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/ThemeAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

import {CommonOptions}          from 'app/options/CommonOptions'
import Image                    from 'app/tools/images/Image'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import NightEffectComponent     from 'core/nightEffect/NightEffect.component'
import {Themes}                 from 'core/theme/Themes'
import {Times}                  from 'core/time/Times'
import {gameContentTranslation} from 'lang/components/translationMethods'

/**
 * @todo change the SMM1 & SMM2 yes/no result into something different like the sounds or other things
 * @fixme if the yes/no is still in used after the change, use Texts.renderYesNoComponent() instead.
 */
export abstract class ThemeAppOption
    extends Enum<Ordinals, Names>
implements AppOption<Themes>{

    //region -------------------- Enum instances --------------------

    public static readonly ICON =                  new class ThemeAppOption_Image extends ThemeAppOption {

        protected override _createContentOption(enumeration: Themes,) {
            return enumeration.renderSingleComponent(false,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'icon', element: unfinishedText('Icon'),}
        }

    }()
    public static readonly ENDLESS_MARIO_ICON =    new class ThemeAppOption_EndlessMarioImage extends ThemeAppOption {

        protected override _createContentOption({endlessMarioImageFile,}: Themes,) {
            return <Image file={endlessMarioImageFile}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'endless-mario-icon', element: unfinishedText('Endless Mario'),}//TODO add Endless Mario
        }

    }()
    public static readonly NAME =                   new class ThemeAppOptionName extends ThemeAppOption {

        protected override _createContentOption(enumeration: Themes,) {
            return <div className="nameWithContent-container">
                <div className="col-10">
                    {CommonOptions.get.getGameContent(enumeration)}
                    {CommonOptions.get.getNameContent(enumeration)}
                </div>
                <div className="col-2">{CommonOptions.get.getThemeContent(enumeration)}</div>
            </div>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }()
    public static readonly NIGHT_EFFECT =           new class ThemeAppOption_NightEffect extends ThemeAppOption {

        protected override _createContentOption({reference: {courseTheme,},}: Themes,) {
            return <NightEffectComponent theme={courseTheme}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'effect', element: <div className="nightDesert-header-image-container position-relative mx-auto">
                    {Themes.DESERT.renderSingleComponent(false)}
                    {Times.NIGHT.renderSingleComponent}
                </div>,
                tooltip: gameContentTranslation('Effect (night)', {night: unfinishedText('night effect name'),},)//TODO add translation for the night effect name
            }
        }

    }()

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

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: Themes,): ReactElement

    public renderContent(enumeration: Themes,): readonly [ReactElement,] {
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
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<ThemeAppOption>,): ThemeAppOption {
        return ThemeAppOption.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<ThemeAppOption> {
        return ThemeAppOption.CompanionEnum.get.values
    }

    public static [Symbol.iterator](): CollectionIterator<ThemeAppOption> {
        return ThemeAppOption.CompanionEnum.get[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'
import {lazy}                                                                    from 'react'

import type {AppOptionWithContent, PossibleRenderReactElement} from './component/AppOptionWithContent'
import type {AppOptionWithTable}                               from './component/AppOptionWithTable'
import type {Names, Ordinals}                                  from './ThemeAppOption.types'
import type {Themes}                                           from '../../core/theme/Themes'
import type {ReactElement}                                     from '../../util/react/ReactProperties'
import type {SingleHeaderContent}                              from '../tools/table/SimpleHeader'

import {AppOptionWithContentComponent}              from './component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}                from './component/AppOptionWithTable.component'
import {CommonOptions}                              from './CommonOptions'
import {contentTranslation, gameContentTranslation} from '../../lang/components/translationMethods'
import {EMPTY_REACT_ELEMENT}                        from '../../util/emptyReactVariables'
import {Times}                                      from '../../core/time/Times'

//region -------------------- dynamic imports --------------------

const Image =                lazy(() => import('../tools/images/Image'))
const NightEffectComponent = lazy(() => import('../../core/nightEffect/NightEffect.component'))

//endregion -------------------- dynamic imports --------------------

/**
 * @todo change the SMM1 & SMM2 yes/no result into something different like the sounds or other things
 * @fixme if the yes/no is still in used after the change, use Texts.renderYesNoComponent() instead.
 */
export abstract class ThemeAppOption
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =                  new class ThemeAppOption_Image extends ThemeAppOption {

        protected override _createContentOption(enumeration: Themes,): PossibleRenderReactElement {
            return [
                enumeration.renderSingleComponent(false),
                enumeration.endlessMarioImagePath != null ? <Image source={enumeration.endlessMarioImagePath} fallbackName={`Endless Mario Image (${enumeration.englishName})`}/> : EMPTY_REACT_ELEMENT,
            ]
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'image', element: contentTranslation('Image'),
                subHeaders: [
                    {key: 'image-empty', element: EMPTY_REACT_ELEMENT,},
                    {key: 'image-endless-mario', element: <>--Endless Mario--</>},
                ],
            }
        }

    }()
    public static readonly NAME =                   new class ThemeAppOptionName extends ThemeAppOption {

        protected override _createContentOption(enumeration: Themes,): PossibleRenderReactElement {
            return <div className="nameWithContent-container">
                    <div className="col-10">
                        {CommonOptions.get.getGameContent(enumeration)}
                        {CommonOptions.get.getNameContent(enumeration)}
                    </div>
                    <div className="col-2">{CommonOptions.get.getThemeContent(enumeration)}</div>
                </div>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader
        }

    }()
    public static readonly NIGHT_EFFECT =           new class ThemeAppOption_NightEffect extends ThemeAppOption {

        protected override _createContentOption({reference: {courseTheme,},}: Themes,): PossibleRenderReactElement {
            return <NightEffectComponent theme={courseTheme}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'effect', element: <Image source={Times.NIGHT.imagePath} fallbackName={`effect - ${Times.NIGHT.englishName}`}/>,
                tooltip: gameContentTranslation('Effect (night)', {night: '--night effect name--',},)//TODO add translation for the night effect name
            }
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: ThemeAppOption

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link ThemeAppOption} and get by {@link ThemeApp}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => Themes

    #appOptionWithContent?: AppOptionWithContent
    #appOptionWithTable?: AppOptionWithTable

    //endregion -------------------- Fields --------------------

    private constructor() {
        super()
    }

    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: Themes,): PossibleRenderReactElement

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(() => this._createContentOption(ThemeAppOption.CALLBACK_TO_GET_ENUMERATION()),)
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent

    private get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption(),)
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return ThemeAppOption
    }

    public static getValue(value: PossibleValueByEnumerable<ThemeAppOption>,): ThemeAppOption {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<ThemeAppOption> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

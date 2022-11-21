import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {AppOptionWithContent, PossibleRenderReactElement} from './component/AppOptionWithContent'
import type {AppOptionWithTable}                               from './component/AppOptionWithTable'
import type {EntityLimits}                                     from '../../core/entityLimit/EntityLimits'
import type {Names, Ordinals}                                  from './EntityLimitAppOption.types'
import type {ReactElement}                                     from '../../util/react/ReactProperties'
import type {SingleHeaderContent}                              from '../tools/table/SimpleHeader'

import {AppOptionWithContentComponent}              from './component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}                from './component/AppOptionWithTable.component'
import {contentTranslation, gameContentTranslation} from '../../lang/components/translationMethods'
import {EMPTY_REACT_ELEMENT}                        from '../../util/emptyReactVariables'
import {Games}                                      from '../../core/game/Games'
import NameComponent                                from '../../lang/name/component/Name.component'
import TextComponent                                from '.././tools/text/TextComponent'

export abstract class EntityLimitAppOption
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ACRONYM = new class EntityLimitAppOption_Acronym extends EntityLimitAppOption {

        protected override _createContentOption({reference: {acronym, alternativeAcronym,},}: EntityLimits,): PossibleRenderReactElement {
            const finalAcronym = alternativeAcronym == null
                ? acronym == null
                    ? ''
                    : acronym
                : `${acronym} / ${alternativeAcronym}`

            return <TextComponent content={finalAcronym}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'acronym', element: contentTranslation('Acronym(s)'),}
        }

    }()
    public static readonly NAME = new class EntityLimitAppOption_Name extends EntityLimitAppOption {

        protected override _createContentOption({reference,}: EntityLimits,): PossibleRenderReactElement {
            return [
                <NameComponent id="name" name={reference} popoverOrientation="bottom"/>,
                <NameComponent id="alternativeName" name={reference.alternativeContainer} popoverOrientation="bottom"/>,
            ]
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'names', element: contentTranslation('Name'),
                subHeaders: [
                    {key: 'name', element: EMPTY_REACT_ELEMENT,},
                    {key: 'alternativeName', element: contentTranslation('Alternative name'),},
                ],
            }
        }

    }()
    public static readonly AMOUNT = new class EntityLimitAppOption_Amount extends EntityLimitAppOption {

        protected override _createContentOption({reference, englishName, }: EntityLimits,): PossibleRenderReactElement {
            return [
                <TextComponent key={`${englishName} - text component (amount SMM1&3DS)`} content={reference.limitAmountInSMM1AndSMM3DS} isUnknown={reference.isUnknownLimitInSMM1AndSMM3DS}/>,
                <TextComponent key={`${englishName} - text component (amount SMM2)`} content={reference.limitAmountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>,
            ]
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'limit', element: contentTranslation('Limit'), subHeaders: [
                    {key: 'limit-SuperMarioMaker1And3DS', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                    {key: 'limit-SuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                ],
            }
        }

    }()
    public static readonly TYPE = new class EntityLimitAppOption_Type extends EntityLimitAppOption {

        protected override _createContentOption({reference: {type,},}: EntityLimits,): PossibleRenderReactElement {
            return <TextComponent content={gameContentTranslation(type.englishCommonText)}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'type', element: contentTranslation('Type'),}
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityLimitAppOption

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EntityLimitAppOption} and get by {@link EntityLimitApp}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => EntityLimits

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

    protected abstract _createContentOption(enumeration: EntityLimits,): PossibleRenderReactElement

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(() => this._createContentOption(EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION()),)
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
        return EntityLimitAppOption
    }

    public static getValue(value: PossibleValueByEnumerable<EntityLimitAppOption>,): EntityLimitAppOption {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EntityLimitAppOption> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

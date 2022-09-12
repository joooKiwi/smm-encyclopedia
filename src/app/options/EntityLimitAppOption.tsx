import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EntityLimitAppOption.types';
import type {EntityLimits}                                                                                                                                                          from '../../core/entityLimit/EntityLimits';
import type {ReactElement}                                                                                                                                                          from '../../util/react/ReactProperties';
import type {SingleHeaderContent}                                                                                                                                                   from '../tools/table/SimpleHeader';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component';
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component';
import ContentTranslationComponent     from '../../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {Enum}                          from '../../util/enum/Enum';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Games}                         from '../../core/game/Games';
import NameComponent                   from '../../lang/name/component/Name.component';
import TextComponent                   from '.././tools/text/TextComponent';

export abstract class EntityLimitAppOption
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ACRONYM = new class EntityLimitAppOption_Acronym extends EntityLimitAppOption {

        protected override _createContentOption({reference: {acronym, alternativeAcronym,},}: EntityLimits,): PossibleRenderReactElement {
            const finalAcronym = alternativeAcronym == null
                ? acronym == null
                    ? ''
                    : acronym
                : `${acronym} / ${alternativeAcronym}`;

            return <TextComponent content={finalAcronym}/>;
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'acronym', element: <ContentTranslationComponent translationKey="Acronym(s)"/>,};
        }

    }();
    public static readonly NAME = new class EntityLimitAppOption_Name extends EntityLimitAppOption {

        protected override _createContentOption({reference,}: EntityLimits,): PossibleRenderReactElement {
            return [
                <NameComponent id="name" name={reference} popoverOrientation="bottom"/>,
                <NameComponent id="alternativeName" name={reference.alternativeContainer} popoverOrientation="bottom"/>,
            ];
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'names', element: <ContentTranslationComponent translationKey="Name"/>,
                subHeaders: [
                    {key: 'name', element: EMPTY_REACT_ELEMENT,},
                    {key: 'alternativeName', element: <ContentTranslationComponent translationKey="Alternative name"/>,},
                ],
            };
        }

    }();
    public static readonly AMOUNT = new class EntityLimitAppOption_Amount extends EntityLimitAppOption {

        protected override _createContentOption({reference, englishName, }: EntityLimits,): PossibleRenderReactElement {
            return [
                <TextComponent key={`${englishName} - text component (amount SMM1&3DS)`} content={reference.limitAmountInSMM1AndSMM3DS} isUnknown={reference.isUnknownLimitInSMM1AndSMM3DS}/>,
                <TextComponent key={`${englishName} - text component (amount SMM2)`} content={reference.limitAmountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>,
            ];
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'limit', element: <ContentTranslationComponent translationKey="Limit"/>, subHeaders: [
                    {key: 'limit-SuperMarioMaker1And3DS', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                    {key: 'limit-SuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                ],
            };
        }

    }();
    public static readonly TYPE = new class EntityLimitAppOption_Type extends EntityLimitAppOption {

        protected override _createContentOption({reference: {type,},}: EntityLimits,): PossibleRenderReactElement {
            return <GameContentTranslationComponent>{translation => <TextComponent content={translation(type.englishCommonText)}/>}</GameContentTranslationComponent>;
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'type', element: <ContentTranslationComponent translationKey="Type"/>,};
        }

    }();

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityLimitAppOption;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EntityLimitAppOption} and get by {@link EntityLimitApp}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => EntityLimits;

    #appOptionWithContent?: AppOptionWithContent;
    #appOptionWithTable?: AppOptionWithTable;

    //endregion -------------------- Fields --------------------

    private constructor() {
        super();
    }

    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: EntityLimits,): PossibleRenderReactElement;

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(() => this._createContentOption(EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION()),);
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent;
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent;

    private get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption(),);
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<EntityLimitAppOption> {
        return EntityLimitAppOption;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends EntityLimitAppOption = EntityLimitAppOption, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EntityLimitAppOption
    public static getValue(value: PossibleValue,): | EntityLimitAppOption | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

import './EntityLimitApp.scss'

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from './interpreter/AppInterpreterWithTable'
import type {AppProperties}                                        from './AppProperties.types'
import type {EntityLimitAppStates}                                 from './AppStates.types'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from '../util/react/ReactProperties'

import {AbstractTableApp}       from './withInterpreter/AbstractTableApp'
import {EntityLimitAppOption}   from './options/EntityLimitAppOption'
import {EntityLimits}           from '../core/entityLimit/EntityLimits'
import {gameContentTranslation} from '../lang/components/translationMethods'
import TextComponent            from './tools/text/TextComponent'
import {ViewDisplays}           from './withInterpreter/ViewDisplays'

/**
 * @reactComponent
 */
export default class EntityLimitApp
    extends AbstractTableApp<AppInterpreterWithTable<EntityLimits, EntityLimitAppOption>, AppProperties, EntityLimitAppStates> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'entityLimit'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every entity limits')
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<EntityLimits, EntityLimitAppOption> {
        return new class implements AppInterpreterWithTable<EntityLimits, EntityLimitAppOption> {

            public get iterable() {
                return EntityLimits[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    large: null,
                    extraLarge: 2,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumeration: EntityLimits,) {
                EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumeration
                const {reference: {limitAmountInSMM1AndSMM3DS, limitAmountInSMM2, isUnknownLimitInSMM2,}, englishName, englishNameInHtml,} = enumeration

                return <div className="card-body" id={`entityLimit-${englishNameInHtml}`}>
                    {limitAmountInSMM1AndSMM3DS === limitAmountInSMM2
                        ? <TextComponent key={`${englishName} - card list text component`} content={limitAmountInSMM2} isUnknown={isUnknownLimitInSMM2}/>
                        : EntityLimitAppOption.AMOUNT.renderContent}
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => EntityLimits,) {
                EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): readonly EntityLimitAppOption[] {
                return [
                    EntityLimitAppOption.ACRONYM,
                    EntityLimitAppOption.NAME,
                    EntityLimitAppOption.AMOUNT,
                    EntityLimitAppOption.TYPE,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('Every entity limits'),
                }
            }


            public createTableContent(option: EntityLimitAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: EntityLimitAppOption,) {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------
}

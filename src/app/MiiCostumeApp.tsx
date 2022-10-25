import './MiiCostumeApp.scss'

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from './interpreter/AppInterpreterWithTable'
import type {AppProperties}                                        from './AppProperties.types'
import type {MiiCostumeAppStates}                                  from './AppStates.types'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList'
import type {SingleHeaderContent}                                  from './tools/table/SimpleHeader'
import type {ReactElement, ReactElementOrString}                   from '../util/react/ReactProperties'

import {AbstractTableApp}       from './withInterpreter/AbstractTableApp'
import {gameContentTranslation} from '../lang/components/translationMethods'
import Image                    from './tools/images/Image'
import {MiiCostumes}            from '../core/miiCostume/MiiCostumes'
import {MiiCostumeAppOption}    from './options/MiiCostumeAppOption'
import {ViewDisplays}           from './withInterpreter/ViewDisplays'

export default class MiiCostumeApp
    extends AbstractTableApp<AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption>, AppProperties, MiiCostumeAppStates> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'miiCostume'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every Mii costumes', {
            pluralName: <span key="miiCostume-pluralName" className="text-decoration-underline">--Mii costumes--</span>,//TODO add Mii costumes, but the plural name
        },)
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption> {
        return new class implements AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption> {

            public get iterable(): IterableIterator<MiiCostumes> {
                return MiiCostumes[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: 4,
                    large: 3,
                    extraExtraLarge: 2,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent({reference, englishName, imagePath,}: MiiCostumes,): ReactElement {
                const category = reference.categoryEnglish === '' ? '' : `entityCategory-${reference.categoryEnglish}`//TODO move to the parent container className.
                return <div className={`${category}`}>
                    <Image source={imagePath} fallbackName={englishName}/>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => MiiCostumes,) {
                MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): readonly MiiCostumeAppOption[] {
                return [
                    MiiCostumeAppOption.IMAGE,
                    MiiCostumeAppOption.NAME,
                    MiiCostumeAppOption.OFFICIAL_NOTIFICATION,
                    MiiCostumeAppOption.CATEGORY,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('Every Mii costumes', {
                        pluralName: <span key="miiCostume-pluralName" className="text-decoration-underline">--Mii costumes--</span>,//TODO add Mii costumes, but the plural name
                    },),
                }
            }


            public createTableContent(option: MiiCostumeAppOption,): readonly ReactElement[] {
                return option.renderContent
            }

            public createTableHeader(option: MiiCostumeAppOption,): | SingleHeaderContent | null {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}

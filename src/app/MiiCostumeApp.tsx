import './MiiCostumeApp.scss'

import type {AppProperties}                                        from 'app/AppProperties.types'
import type {MiiCostumeAppStates}                                  from 'app/AppStates.types'
import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {MiiCostumeAppOption}    from 'app/options/MiiCostumeAppOption'
import Image                    from 'app/tools/images/Image'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {MiiCostumes}            from 'core/miiCostume/MiiCostumes'
import {gameContentTranslation} from 'lang/components/translationMethods'

export default class MiiCostumeApp
    extends AbstractTableApp<AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption>, AppProperties, MiiCostumeAppStates> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'miiCostume'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every Mii costumes', {
            pluralName: <span key="miiCostume-pluralName" className="text-decoration-underline">--Mii costumes--</span>,//TODO add Mii costumes, but the plural name
        },)
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption> {
        return new class implements AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption> {

            public get iterable() {
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

            public createCardListContent({reference, englishName, imagePath,}: MiiCostumes,) {
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


            public createTableContent(option: MiiCostumeAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: MiiCostumeAppOption,) {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}

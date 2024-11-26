import './MiiCostumeCategoryApp.scss'

import type {Array}              from '@joookiwi/type'
import type {CollectionHolder}   from '@joookiwi/collection'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer              from 'app/_SubMainContainer'
import {MiiCostumeCategoryAppOption} from 'app/options/MiiCostumeCategoryAppOption'
import Table                         from 'app/tools/table/Table'
import {unfinishedText}              from 'app/tools/text/UnfinishedText'
import List                          from 'app/util/List'
import CardList                      from 'app/withInterpreter/CardList'
import {ViewDisplays}                from 'app/withInterpreter/ViewDisplays'
import {MiiCostumeCategories}        from 'core/miiCostumeCategory/MiiCostumeCategories'
import MiiCostumeCategoryIcon        from 'core/miiCostumeCategory/component/MiiCostumeCategoryIcon'
import {OtherWordInTheGames}         from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}      from 'lang/components/translationMethods'
import NameComponent                 from 'lang/name/component/Name.component'

import ALL = MiiCostumeCategories.ALL

class MiiCostumeCategoryAppInterpreter
    implements AppInterpreterWithTable<MiiCostumeCategories, MiiCostumeCategoryAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            medium: 4,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: MiiCostumeCategories,) {
        return <MiiCostumeCategoryIcon reference={enumerable}/>
    }

    //endregion -------------------- Card --------------------
    //region -------------------- Table --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableColor = 'primary' satisfies BootstrapThemeColor

    public get tableCaption() {
        const miiCostume = OtherWordInTheGames.MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.singularEnglishName,)
        const miiCostumes = OtherWordInTheGames.MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.pluralEnglishName,)

        return gameContentTranslation('mii costume category.all', {singularName: miiCostume, pluralName: miiCostumes,},) satisfies ReactElementOrString
    }

    public get tableOptions(): Array<MiiCostumeCategoryAppOption> {
        return [MiiCostumeCategoryAppOption.NAME, MiiCostumeCategoryAppOption.ICON,]
    }


    public getAdditionalClass(option: MiiCostumeCategoryAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: MiiCostumeCategories, option: MiiCostumeCategoryAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: MiiCostumeCategoryAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMiiCostumeCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everyMiiCostumeCategory (card)',],
    [ViewDisplays.TABLE, 'everyMiiCostumeCategory (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new MiiCostumeCategoryAppInterpreter()

/** @reactComponent */
export default function MiiCostumeCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const miiCostume = OtherWordInTheGames.MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.singularEnglishName,)
    const miiCostumes = OtherWordInTheGames.MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.pluralEnglishName,)

    return <SubMainContainer reactKey="miiCostumeCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('mii costume category.all', {singularName: miiCostume, pluralName: miiCostumes,},)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <MiiCostumeCategoryList items={appInterpreter.content}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="miiCostumeCategory" interpreter={appInterpreter}/>
    return <Table id="miiCostumeCategory-table" interpreter={appInterpreter}/>
}

//region -------------------- List --------------------

interface MiiCostumeCategory_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<MiiCostumeCategories>

}

/** @reactComponent */
function MiiCostumeCategoryList({items,}: MiiCostumeCategory_ListProperties,) {
    return <List partialId="miiCostumeCategory" items={items}>{it =>
        <div className="d-flex justify-content-between align-items-center">
            <NameComponent id="miiCostumeCategory-name" name={it.reference} popoverOrientation="right"/>
            <MiiCostumeCategoryIcon reference={it}/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------

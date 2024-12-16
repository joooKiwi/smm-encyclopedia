import './MiiCostumeCategoryApp.scss'

import type {Array}            from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer              from 'app/_SubMainContainer'
import {MiiCostumeCategoryAppOption} from 'app/options/MiiCostumeCategoryAppOption'
import Table                         from 'app/tools/table/Table'
import {unfinishedText}              from 'app/tools/text/UnfinishedText'
import CardList                      from 'app/util/CardList'
import List                          from 'app/util/List'
import {ViewDisplays}                from 'app/withInterpreter/ViewDisplays'
import {MiiCostumeCategories}        from 'core/miiCostumeCategory/MiiCostumeCategories'
import MiiCostumeCategoryIcon        from 'core/miiCostumeCategory/component/MiiCostumeCategoryIcon'
import {OtherWordInTheGames}         from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}      from 'lang/components/translationMethods'
import NameComponent                 from 'lang/name/component/Name.component'
import {ArrayAsCollection}           from 'util/collection/ArrayAsCollection'

import ALL = MiiCostumeCategories.ALL

const {MII_COSTUME,} = OtherWordInTheGames
const all = new ArrayAsCollection(ALL,)

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMiiCostumeCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everyMiiCostumeCategory (card)',],
    [ViewDisplays.TABLE, 'everyMiiCostumeCategory (table)',],
] as const satisfies Array<ViewAndRouteName>
const items = all
const options = MiiCostumeCategoryAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function MiiCostumeCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const miiCostume = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumes = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)

    return <SubMainContainer reactKey="miiCostumeCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('mii costume category.all', {singularName: miiCostume, pluralName: miiCostumes,},)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <MiiCostumeCategoryList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <MiiCostumeCategoryCardList items={items}/>
    return <MiiCostumeCategoryTable items={items}/>
}


interface MiiCostumeCategory_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<MiiCostumeCategories>

}

/** @reactComponent */
function MiiCostumeCategoryList({items,}: MiiCostumeCategory_SubContentProperties,) {
    return <List partialId="miiCostumeCategory" items={items}>{it =>
        <div className="d-flex justify-content-between align-items-center">
            <NameComponent id="miiCostumeCategory-name" name={it.reference} popoverOrientation="right"/>
            <MiiCostumeCategoryIcon reference={it}/>
        </div>
    }</List>
}

/** @reactComponent */
function MiiCostumeCategoryCardList({items}: MiiCostumeCategory_SubContentProperties,) {
    return <CardList partial-id="miiCostumeCategory" items={items} default={1} small={2} medium={4}>{it =>
        <>
            <NameComponent id="miiCostumeCategory-name" name={it.reference} popoverOrientation="left"/>
            <MiiCostumeCategoryIcon reference={it}/>
        </>
    }</CardList>
}

/** @reactComponent */
function MiiCostumeCategoryTable({items,}: MiiCostumeCategory_SubContentProperties,) {
    return <Table id="miiCostumeCategory-table" items={items} options={options} caption={getCaption()} color="primary" headersColor="info"/>
}

function getCaption() {
    const miiCostume = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumes = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)

    return gameContentTranslation('mii costume category.all', {singularName: miiCostume, pluralName: miiCostumes,},)
}

//endregion -------------------- Sub content --------------------

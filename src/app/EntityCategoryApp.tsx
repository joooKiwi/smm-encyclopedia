import './EntityCategoryApp.scss'

import type {Array}            from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer          from 'app/_SubMainContainer'
import {EntityCategoryAppOption} from 'app/options/EntityCategoryAppOption'
import Table                     from 'app/tools/table/Table'
import {unfinishedText}          from 'app/tools/text/UnfinishedText'
import CardList                  from 'app/util/CardList'
import List                      from 'app/util/List'
import {ViewDisplays}            from 'app/withInterpreter/ViewDisplays'
import {EntityCategories}        from 'core/entityCategory/EntityCategories'
import EntityCategoryIcon        from 'core/entityCategory/component/EntityCategoryIcon'
import {OtherWordInTheGames}     from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import NameComponent             from 'lang/name/component/Name.component'
import {ArrayAsCollection}       from 'util/collection/ArrayAsCollection'

import ALL = EntityCategories.ALL

const {ENTITY,} = OtherWordInTheGames
const all = new ArrayAsCollection(ALL,)
const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEntityCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everyEntityCategory (card)',],
    [ViewDisplays.TABLE, 'everyEntityCategory (table)',],
] as const satisfies Array<ViewAndRouteName>
const items = all
const options = EntityCategoryAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function EntityCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const {ENTITY,} = OtherWordInTheGames
    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()

    const titleContent = gameContentTranslation('entity category.all', {Entity: entity, entity: entityAsLowerCase,},)

    return <SubMainContainer reactKey="entityCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <EntityCategoryList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <EntityCategoryCardList items={items}/>
    return <EntityCategoryTable items={items}/>
}


interface EntityCategory_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<EntityCategories>

}

/** @reactComponent */
function EntityCategoryList({items,}: EntityCategory_SubContentProperties,) {
    return <List partialId="entityCategory" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="entityCategory-name" name={it.reference} popoverOrientation="top"/>
            <EntityCategoryIcon reference={it}/>
        </div>
    }</List>
}

/** @reactComponent */
function EntityCategoryCardList({items,}: EntityCategory_SubContentProperties,) {
    return <CardList partial-id="entityCategory" items={items} default={1} small={2} large={4}>{it =>
        <>
            <NameComponent id="entityCategory-name" name={it.reference} popoverOrientation="left"/>
            <EntityCategoryIcon reference={it}/>
        </>
    }</CardList>
}

/** @reactComponent */
function EntityCategoryTable({items,}: EntityCategory_SubContentProperties,) {
    return <Table id="entityCategory-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()

    return gameContentTranslation('entity category.all', {Entity: entity, entity: entityAsLowerCase,},) satisfies ReactElementOrString
}

//endregion -------------------- Sub content --------------------

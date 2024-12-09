import './EntityCategoryApp.scss'

import type {Array}              from '@joookiwi/type'
import type {CollectionHolder}   from '@joookiwi/collection'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer          from 'app/_SubMainContainer'
import {EntityCategoryAppOption} from 'app/options/EntityCategoryAppOption'
import Table                     from 'app/tools/table/Table'
import {unfinishedText}          from 'app/tools/text/UnfinishedText'
import List                      from 'app/util/List'
import CardList                  from 'app/withInterpreter/CardList'
import {ViewDisplays}            from 'app/withInterpreter/ViewDisplays'
import {EntityCategories}        from 'core/entityCategory/EntityCategories'
import EntityCategoryIcon        from 'core/entityCategory/component/EntityCategoryIcon'
import {OtherWordInTheGames}     from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import NameComponent             from 'lang/name/component/Name.component'

import ALL = EntityCategories.ALL

class EntityCategoryAppInterpreter
    implements AppInterpreterWithTable<EntityCategories, EntityCategoryAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            large: 4,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: EntityCategories,) {
        return <EntityCategoryIcon reference={enumerable} asWhiteImage/>
    }

    //endregion -------------------- Card --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEntityCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everyEntityCategory (card)',],
    [ViewDisplays.TABLE, 'everyEntityCategory (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new EntityCategoryAppInterpreter()
const items = appInterpreter.content
const options = [EntityCategoryAppOption.NAME, EntityCategoryAppOption.ICON,] as const

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

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <EntityCategoryList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="entityCategory" interpreter={appInterpreter}/>
    return <Table id="entityCategory-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    const {ENTITY,} = OtherWordInTheGames
    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()

    return gameContentTranslation('entity category.all', {Entity: entity, entity: entityAsLowerCase,},) satisfies ReactElementOrString
}

//region -------------------- List --------------------

interface EntityCategory_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<EntityCategories>

}

/** @reactComponent */
function EntityCategoryList({items,}:EntityCategory_ListProperties,) {
    return <List partialId="entityCategory" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="entityCategory-name" name={it.reference} popoverOrientation="top"/>
            <EntityCategoryIcon reference={it}/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------

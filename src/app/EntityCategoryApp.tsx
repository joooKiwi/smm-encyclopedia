import './EntityCategoryApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import {EntityCategoryAppOption}        from 'app/options/EntityCategoryAppOption'
import Table                            from 'app/tools/table/Table'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import CardList                         from 'app/util/CardList'
import List                             from 'app/util/List'
import AppTitle                         from 'app/util/PageTitle'
import PageViewChanger                  from 'app/util/PageViewChanger'
import SubMain                          from 'app/util/SubMain'
import {ViewDisplays}                   from 'app/withInterpreter/ViewDisplays'
import {EntityCategories}               from 'core/entityCategory/EntityCategories'
import EntityCategoryIcon               from 'core/entityCategory/component/EntityCategoryIcon'
import {OtherWordInTheGames}            from 'core/otherWordInTheGame/OtherWordInTheGames'
import DisplayButtonGroup               from 'display/DisplayButtonGroup'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import NameComponent                    from 'lang/name/component/Name.component'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'

import ALL = EntityCategories.ALL

//region -------------------- Import from deconstruction --------------------

const {ENTITY,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)
const items = all
const options = EntityCategoryAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function EntityCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()

    return <SubMain partial-id="entityCategory" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('entity category.all', {Entity: entity, entity: entityAsLowerCase,},)}</AppTitle>
        <PageViewChanger>
            <DisplayButtonGroup list="everyEntityCategory (list)" card="everyEntityCategory (card)" table="everyEntityCategory (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>entity category description</UnfinishedText>
        <section id="entityCategory-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
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

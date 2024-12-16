import './SoundEffectCategoryApp.scss'

import type {Array}            from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer               from 'app/_SubMainContainer'
import {SoundEffectCategoryAppOption} from 'app/options/SoundEffectCategoryAppOption'
import CardList                       from 'app/util/CardList'
import List                           from 'app/util/List'
import {ViewDisplays}                 from 'app/withInterpreter/ViewDisplays'
import Table                          from 'app/tools/table/Table'
import {SoundEffectCategories}        from 'core/soundEffectCategory/SoundEffectCategories'
import SoundEffectCategoryIcon        from 'core/soundEffectCategory/component/SoundEffectCategoryIcon'
import {gameContentTranslation}       from 'lang/components/translationMethods'
import NameComponent                  from 'lang/name/component/Name.component'
import {ArrayAsCollection}            from 'util/collection/ArrayAsCollection'

import ALL = SoundEffectCategories.ALL

const all = new ArrayAsCollection(ALL,)

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everySoundEffectCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everySoundEffectCategory (card)',],
    [ViewDisplays.TABLE, 'everySoundEffectCategory (table)',],
] as const satisfies Array<ViewAndRouteName>
const items = all
const options = SoundEffectCategoryAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function SoundEffectCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    return <SubMainContainer reactKey="soundEffectCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('sound effect category.all',)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SoundEffectCategoryList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SoundEffectCategoryCardList items={items}/>
    return <SoundEffectCategoryTable items={items}/>
}


interface SoundEffectCategory_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<SoundEffectCategories>

}

/** @reactComponent */
function SoundEffectCategoryList({items,}: SoundEffectCategory_SubContentProperties,) {
    return <List partialId="soundEffectCategory" items={items}>{it =>
        <div className="d-flex justify-content-between align-items-center">
            <NameComponent id="soundEffectCategory-name" name={it.reference} popoverOrientation="right"/>
            <SoundEffectCategoryIcon reference={it}/>
        </div>
    }</List>
}

/** @reactComponent */
function SoundEffectCategoryCardList({items,}: SoundEffectCategory_SubContentProperties,) {
    return <CardList partial-id="soundEffectCategory" items={items} default={1} small={2} medium={3} large={5}>{it =>
        <>
            <NameComponent id="soundEffectCategory-name" name={it.reference} popoverOrientation="left"/>
            <SoundEffectCategoryIcon reference={it} asWhiteImage/>
        </>
    }</CardList>
}

/** @reactComponent */
function SoundEffectCategoryTable({items,}: SoundEffectCategory_SubContentProperties,) {
    return <Table id="soundEffectCategory-table" items={items} options={options} caption={gameContentTranslation('sound effect category.all',)} headersColor="info"/>
}

//endregion -------------------- Sub content --------------------

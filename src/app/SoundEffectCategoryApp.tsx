import './SoundEffectCategoryApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {AppProperties}   from 'app/AppProperties.types'
import type {ReactProperties} from 'util/react/ReactProperties'

import {SoundEffectCategoryAppOption} from 'app/options/SoundEffectCategoryAppOption'
import AppTitle                       from 'app/util/AppTitle'
import CardList                       from 'app/util/CardList'
import List                           from 'app/util/List'
import PageTitle                      from 'app/util/PageTitle'
import PageViewChanger                from 'app/util/PageViewChanger'
import Smm2OnlyAlert                  from 'app/util/Smm2OnlyAlert'
import SubMain                        from 'app/util/SubMain'
import Table                          from 'app/tools/table/Table'
import UnfinishedText                 from 'app/tools/text/UnfinishedText'
import {SoundEffectCategories}        from 'core/soundEffectCategory/SoundEffectCategories'
import SoundEffectCategoryIcon        from 'core/soundEffectCategory/component/SoundEffectCategoryIcon'
import DisplayButtonGroup             from 'display/DisplayButtonGroup'
import {ViewDisplays}                 from 'display/ViewDisplays'
import {gameContentTranslation}       from 'lang/components/translationMethods'
import NameComponent                  from 'lang/name/component/Name.component'
import {ArrayAsCollection}            from 'util/collection/ArrayAsCollection'

import ALL = SoundEffectCategories.ALL

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)

const items = all
const options = SoundEffectCategoryAppOption.CompanionEnum.get.values

type SoundEffectCategoryAppProperties = AppProperties

/** @reactComponent */
export default function SoundEffectCategoryApp({viewDisplay, games,}: SoundEffectCategoryAppProperties,) {
    return <SubMain partial-id="soundEffectCategory" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('sound effect category.all',)}</AppTitle>
        <PageTitle value={gameContentTranslation('sound effect category.singular',)}/>
        <Smm2OnlyAlert value={games}/>
        <PageViewChanger>
            <DisplayButtonGroup list="everySoundEffectCategory (list)" card="everySoundEffectCategory (card)" table="everySoundEffectCategory (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>sound effect category description</UnfinishedText>{/*TODO add description*/}
        <section id="soundEffectCategory-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: Pick<SoundEffectCategoryAppProperties, 'viewDisplay'>,) {
    if (viewDisplay === LIST)
        return <SoundEffectCategoryList items={items}/>
    if (viewDisplay === CARD)
        return <SoundEffectCategoryCardList items={items}/>
    return <SoundEffectCategoryTable items={items}/>
}


interface SoundEffectCategory_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<SoundEffectCategories>

}

/** @reactComponent */
function SoundEffectCategoryList({items,}: SoundEffectCategory_SubContentProperties,) {
    return <List partial-id="soundEffectCategory" items={items}>{it =>
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

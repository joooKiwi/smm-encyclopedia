import './MedalApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {AppProperties}   from 'app/AppProperties.types'
import type {ReactProperties} from 'util/react/ReactProperties'

import {MedalAppOption}         from 'app/options/MedalAppOption'
import Table                    from 'app/tools/table/Table'
import UnfinishedText           from 'app/tools/text/UnfinishedText'
import AppTitle                 from 'app/util/AppTitle'
import CardList                 from 'app/util/CardList'
import List                     from 'app/util/List'
import PageTitle                from 'app/util/PageTitle'
import PageViewChanger          from 'app/util/PageViewChanger'
import Smm1OnlyAlert            from 'app/util/Smm1OnlyAlert'
import SubMain                  from 'app/util/SubMain'
import {Medals}                 from 'core/medal/Medals'
import MedalIcon                from 'core/medal/component/MedalIcon'
import DisplayButtonGroup       from 'display/DisplayButtonGroup'
import {ViewDisplays}           from 'display/ViewDisplays'
import {gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent            from 'lang/name/component/Name.component'
import {ArrayAsCollection}      from 'util/collection/ArrayAsCollection'

import ALL = Medals.ALL

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)
const items = all
const options = MedalAppOption.CompanionEnum.get.values

type MedalAppProperties = AppProperties

/** @reactComponent */
export default function MedalApp({viewDisplay, games,}: MedalAppProperties,) {

    return <SubMain partial-id="medal" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('medal.all',)}</AppTitle>
        <PageTitle value={gameContentTranslation('medal.singular',)}/>
        <Smm1OnlyAlert value={games}/>
        <PageViewChanger>
            <DisplayButtonGroup list="everyMedal (list)" card="everyMedal (card)" table="everyMedal (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>medal description</UnfinishedText>{/*TODO add description*/}
        <section id="medal-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: Pick<MedalAppProperties, 'viewDisplay'>,) {
    if (viewDisplay === LIST)
        return <MedalList items={items}/>
    if (viewDisplay === CARD)
        return <MedalCardList items={items}/>
    return <MedalTable items={items}/>
}


interface Medal_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Medals>

}

/** @reactComponent */
function MedalList({items,}: Medal_SubContentProperties,) {
    return <List partial-id="medal" items={items} withSeparator>{it =>
        <div className="d-flex align-items-center">
            <MedalIcon reference={it}/>
            <NameComponent id="medal-name" name={it.reference} popoverOrientation="top"/>
        </div>
    }</List>
}

/** @reactComponent */
function MedalCardList({items,}: Medal_SubContentProperties,) {
    return <CardList partial-id="medal" items={items} default={2} small={4} medium={5}>{it =>
        <>
            <NameComponent id="medal-name" name={it.reference} popoverOrientation="left"/>
            <MedalIcon reference={it}/>
        </>
    }</CardList>
}

/** @reactComponent */
function MedalTable({items,}: Medal_SubContentProperties,) {
    return <Table id="medal-table" items={items} options={options} caption={gameContentTranslation('medal.all',)} headersColor="info"/>
}

//endregion -------------------- Sub content --------------------

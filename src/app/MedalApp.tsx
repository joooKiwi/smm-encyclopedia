import './MedalApp.scss'

import type {Array}            from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer         from 'app/_SubMainContainer'
import {MedalAppOption}         from 'app/options/MedalAppOption'
import Table                    from 'app/tools/table/Table'
import CardList                 from 'app/util/CardList'
import List                     from 'app/util/List'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {Medals}                 from 'core/medal/Medals'
import MedalIcon                from 'core/medal/component/MedalIcon'
import {gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent            from 'lang/name/component/Name.component'
import {ArrayAsCollection}      from 'util/collection/ArrayAsCollection'

import ALL = Medals.ALL

const all = new ArrayAsCollection(ALL,)
const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMedal (list)',],
    [ViewDisplays.CARD_LIST, 'everyMedal (card)',],
    [ViewDisplays.TABLE, 'everyMedal (table)',],
] as const satisfies Array<ViewAndRouteName>
const items = all
const options = MedalAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function MedalApp({viewDisplay,}: AppWithInterpreterProperties,) {
    return <SubMainContainer reactKey="medal" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('medal.all',)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <MedalList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <MedalCardList items={items}/>
    return <MedalTable items={items}/>
}


interface Medal_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Medals>

}

/** @reactComponent */
function MedalList({items,}: Medal_SubContentProperties,) {
    return <List partialId="medal" items={items} withSeparator>{it =>
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
function MedalTable({items,}: Medal_SubContentProperties,){
    return <Table id="medal-table" items={items} options={options} caption={gameContentTranslation('medal.all',)} headersColor="info"/>
}

//endregion -------------------- Sub content --------------------

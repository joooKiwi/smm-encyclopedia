import './PredefinedMessageApp.scss'

import type {Array}            from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer             from 'app/_SubMainContainer'
import Table                        from 'app/tools/table/Table'
import {unfinishedText}             from 'app/tools/text/UnfinishedText'
import {PredefinedMessageAppOption} from 'app/options/PredefinedMessageAppOption'
import CardList                     from 'app/util/CardList'
import List                         from 'app/util/List'
import {ViewDisplays}               from 'app/withInterpreter/ViewDisplays'
import {PredefinedMessages}         from 'core/predefinedMessage/PredefinedMessages'
import {gameContentTranslation}     from 'lang/components/translationMethods'
import NameComponent                from 'lang/name/component/Name.component'
import {ArrayAsCollection}          from 'util/collection/ArrayAsCollection'

import ALL = PredefinedMessages.ALL

const all = new ArrayAsCollection(ALL,)

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyPredefinedMessage (list)',],
    [ViewDisplays.CARD_LIST, 'everyPredefinedMessage (card)',],
    [ViewDisplays.TABLE, 'everyPredefinedMessage (table)',],
] as const satisfies Array<ViewAndRouteName>
const items = all
const options = PredefinedMessageAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function PredefinedMessageApp({viewDisplay,}: AppWithInterpreterProperties,) {
    return <SubMainContainer reactKey="predefinedMessage" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('predefined message.all', {
                                 singularName: unfinishedText('predefined message',),//TODO add predefined reference (singular form)
                                 pluralName: unfinishedText('predefined messages',),//TODO add predefined reference (plural form)
                             },)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <PredefinedMessageList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <PredefinedMessageCardList items={items}/>
    return <PredefinedMessageTable items={items}/>
}


interface PredefinedMessage_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<PredefinedMessages>

}

/** @reactComponent */
function PredefinedMessageList({items,}: PredefinedMessage_SubContentProperties,) {
    return <List partialId="predefinedMessage" items={items}>{it =>
        <NameComponent id="predefinedMessage-name" name={it.reference} popoverOrientation="right"/>
    }</List>
}

/** @reactComponent */
function PredefinedMessageCardList({items,}: PredefinedMessage_SubContentProperties,) {
    return <CardList partial-id="predefinedMessage" items={items} default={1} small={2} medium={3} large={5} extra-large={6}>{it =>
        <NameComponent id="predefinedMessage-name" name={it.reference} popoverOrientation="left"/>
    }</CardList>
}

/** @reactComponent */
function PredefinedMessageTable({items,}: PredefinedMessage_SubContentProperties,) {
    return <Table id="predefinedMessage-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    return gameContentTranslation('predefined message.all', {
        singularName: unfinishedText('predefined message',),//TODO add predefined reference (singular form)
        pluralName: unfinishedText('predefined messages',),//TODO add predefined reference (plural form)
    },)
}

//endregion -------------------- Sub content --------------------

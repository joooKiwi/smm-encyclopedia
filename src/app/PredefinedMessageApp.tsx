import './PredefinedMessageApp.scss'

import type {Array}                                from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactProperties}            from 'util/react/ReactProperties'

import SubMainContainer             from 'app/_SubMainContainer'
import Table                        from 'app/tools/table/Table'
import {unfinishedText}             from 'app/tools/text/UnfinishedText'
import {PredefinedMessageAppOption} from 'app/options/PredefinedMessageAppOption'
import List                         from 'app/util/List'
import CardList                     from 'app/withInterpreter/CardList'
import {ViewDisplays}               from 'app/withInterpreter/ViewDisplays'
import {PredefinedMessages}         from 'core/predefinedMessage/PredefinedMessages'
import {gameContentTranslation}     from 'lang/components/translationMethods'
import NameComponent                from 'lang/name/component/Name.component'

import ALL = PredefinedMessages.ALL

class PredefinedMessageAppInterpreter
    implements AppInterpreterWithTable<PredefinedMessages> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 5,
            extraLarge: 6,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(): null {
        return null
    }

    //endregion -------------------- Card --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyPredefinedMessage (list)',],
    [ViewDisplays.CARD_LIST, 'everyPredefinedMessage (card)',],
    [ViewDisplays.TABLE, 'everyPredefinedMessage (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new PredefinedMessageAppInterpreter()
const items = appInterpreter.content
const options = [PredefinedMessageAppOption.NAME,] as const

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

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <PredefinedMessageList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="predefinedMessage" interpreter={appInterpreter}/>
    return <Table id="predefinedMessage-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    return gameContentTranslation('predefined message.all', {
        singularName: unfinishedText('predefined message',),//TODO add predefined reference (singular form)
        pluralName: unfinishedText('predefined messages',),//TODO add predefined reference (plural form)
    },)
}

//region -------------------- List --------------------

interface PredefinedMessage_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<PredefinedMessages>

}

/** @reactComponent */
function PredefinedMessageList({items,}: PredefinedMessage_ListProperties,) {
    return <List partialId="predefinedMessage" items={items}>{it =>
        <NameComponent id="predefinedMessage-name" name={it.reference} popoverOrientation="right"/>
    }</List>
}

//endregion -------------------- List --------------------

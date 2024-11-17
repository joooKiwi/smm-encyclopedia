import './PredefinedMessageApp.scss'

import type {Array}              from '@joookiwi/type'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer             from 'app/_SubMainContainer'
import Table                        from 'app/tools/table/Table'
import {unfinishedText}             from 'app/tools/text/UnfinishedText'
import {PredefinedMessageAppOption} from 'app/options/PredefinedMessageAppOption'
import SimpleList                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}               from 'app/withInterpreter/ViewDisplays'
import {PredefinedMessages}         from 'core/predefinedMessage/PredefinedMessages'
import {gameContentTranslation}     from 'lang/components/translationMethods'

import ALL = PredefinedMessages.ALL

class PredefinedMessageAppInterpreter
    implements AppInterpreterWithTable<PredefinedMessages> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 5,
            extraLarge: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension(): never {
        throw new ReferenceError('The method "createCardListDimension" was not expected to be called.',)
    }

    public createCardListContent(): never {
        throw new ReferenceError('The method "createCardListContent" was not expected to be called.',)
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('predefined message.all', {
        singularName: unfinishedText('predefined message',),//TODO add predefined reference (singular form)
        pluralName: unfinishedText('predefined messages',),//TODO add predefined reference (plural form)
    },) satisfies ReactElementOrString

    public get tableOptions(): Array<PredefinedMessageAppOption> {
        return [PredefinedMessageAppOption.NAME,]
    }


    public getAdditionalClass(option: PredefinedMessageAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: PredefinedMessages, option: PredefinedMessageAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: PredefinedMessageAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyPredefinedMessage (list)',],
    [ViewDisplays.CARD_LIST, 'everyPredefinedMessage (card)',],
    [ViewDisplays.TABLE, 'everyPredefinedMessage (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new PredefinedMessageAppInterpreter()

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
    if (viewDisplay === ViewDisplays.SIMPLE_LIST || viewDisplay === ViewDisplays.CARD_LIST)
        return <SimpleList reactKey="predefinedMessage" interpreter={appInterpreter}/>
    return <Table id="predefinedMessage-table" interpreter={appInterpreter}/>
}

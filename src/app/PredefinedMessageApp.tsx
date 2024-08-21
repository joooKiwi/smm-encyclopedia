import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer         from 'app/_SubMainContainer'
import UnfinishedText           from 'app/tools/text/UnfinishedText'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {PredefinedMessages}     from 'core/predefinedMessage/PredefinedMessages'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {assert}                 from 'util/utilitiesMethods'

class PredefinedMessageAppInterpreter
    implements AppInterpreterWithSimpleList<PredefinedMessages> {

    public get content() {
        return PredefinedMessages.CompanionEnum.get.values.toArray()
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

}

const viewDisplayAndRouteName = [[ViewDisplays.SIMPLE_LIST, 'everyPredefinedMessage (list)',],] as const satisfies readonly ViewAndRouteName[]
const appInterpreter = new PredefinedMessageAppInterpreter()

/** @reactComponent */
export default function PredefinedMessageApp({viewDisplay,}: AppWithInterpreterProperties,) {
    assert(viewDisplay === ViewDisplays.SIMPLE_LIST, 'The PredefinedMessageApp only handle the "simple list" as a possible view display.',)

    return <SubMainContainer reactKey="predefinedMessage" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('predefined message.all', {
                                 singularName: <UnfinishedText key="predefined message (singular name)">predefined message</UnfinishedText>,//TODO add predefined reference (singular form)
                                 pluralName: <UnfinishedText key="predefined message (plural name)">predefined messages</UnfinishedText>,//TODO add predefined reference (plural form)
                             },)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    return <SimpleList reactKey="predefinedMessage" interpreter={appInterpreter}/>
}

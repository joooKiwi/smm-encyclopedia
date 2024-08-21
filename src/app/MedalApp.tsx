import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithCardList}   from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer         from 'app/_SubMainContainer'
import Image                    from 'app/tools/images/Image'
import CardList                 from 'app/withInterpreter/CardList'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {Medals}                 from 'core/medal/Medals'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {assert}                 from 'util/utilitiesMethods'

class MedalAppInterpreter
    implements AppInterpreterWithCardList<Medals> {

    public get content() {
        return Medals.CompanionEnum.get.values.toArray()
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 2,
            small: 4,
            medium: 5,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumerable: Medals,): ReactElement {
        return <Image file={enumerable.imageFile}/>
    }

    //endregion -------------------- Card list interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMedal (list)',],
    [ViewDisplays.CARD_LIST, 'everyMedal (card)',],
] as const satisfies readonly ViewAndRouteName[]
const appInterpreter = new MedalAppInterpreter()

/** @reactComponent */
export default function MedalApp({viewDisplay,}: AppWithInterpreterProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The MedalApp only handle the "simple list" or "card list" as a possible view display.',)

    return <SubMainContainer reactKey="medal" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('medal.all',)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="medal" interpreter={appInterpreter}/>
    return <CardList reactKey="medal" interpreter={appInterpreter}/>
}

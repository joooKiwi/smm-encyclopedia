import './MedalApp.scss'

import type {Array}              from '@joookiwi/type'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer         from 'app/_SubMainContainer'
import {MedalAppOption}         from 'app/options/MedalAppOption'
import Image                    from 'app/tools/images/Image'
import Table                    from 'app/tools/table/Table'
import CardList                 from 'app/withInterpreter/CardList'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {Medals}                 from 'core/medal/Medals'
import {gameContentTranslation} from 'lang/components/translationMethods'

import ALL = Medals.ALL

class MedalAppInterpreter
    implements AppInterpreterWithTable<Medals, MedalAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
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
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('medal.all',) satisfies ReactElementOrString

    public get tableOptions(): Array<MedalAppOption> {
        return [MedalAppOption.ICON, MedalAppOption.NAME,]
    }


    public getAdditionalClass(option: MedalAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: Medals, option: MedalAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: MedalAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMedal (list)',],
    [ViewDisplays.CARD_LIST, 'everyMedal (card)',],
    [ViewDisplays.TABLE, 'everyMedal (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new MedalAppInterpreter()

/** @reactComponent */
export default function MedalApp({viewDisplay,}: AppWithInterpreterProperties,) {
    return <SubMainContainer reactKey="medal" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('medal.all',)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="medal" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="medal" interpreter={appInterpreter}/>
    return <Table id="medal-table" interpreter={appInterpreter}/>
}

import './MedalApp.scss'

import type {Array}              from '@joookiwi/type'
import type {CollectionHolder}   from '@joookiwi/collection'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer         from 'app/_SubMainContainer'
import {MedalAppOption}         from 'app/options/MedalAppOption'
import Table                    from 'app/tools/table/Table'
import List                     from 'app/util/List'
import CardList                 from 'app/withInterpreter/CardList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {Medals}                 from 'core/medal/Medals'
import MedalIcon                from 'core/medal/component/MedalIcon'
import {gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent            from 'lang/name/component/Name.component'

import ALL = Medals.ALL

class MedalAppInterpreter
    implements AppInterpreterWithTable<Medals, MedalAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 2,
            small: 4,
            medium: 5,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: Medals,) {
        return <MedalIcon reference={enumerable}/>
    }

    //endregion -------------------- Card --------------------
    //region -------------------- Table --------------------

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

    //endregion -------------------- Table --------------------

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
        return <MedalList items={appInterpreter.content}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="medal" interpreter={appInterpreter}/>
    return <Table id="medal-table" interpreter={appInterpreter}/>
}

//region -------------------- List --------------------

interface Medal_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Medals>

}

function MedalList({items,}: Medal_ListProperties,) {
    return <List partialId="medal" items={items} withSeparator>{it =>
        <div className="d-flex align-items-center">
            <MedalIcon reference={it}/>
            <NameComponent id="medal-name" name={it.reference} popoverOrientation="top"/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------

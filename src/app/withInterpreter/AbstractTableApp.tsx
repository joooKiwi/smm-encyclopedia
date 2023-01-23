import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppStates}                    from 'app/AppStates.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {SingleHeaderContent}          from 'app/tools/table/SimpleHeader'
import type {SingleTableContent}           from 'app/tools/table/Table.types'
import type {EveryPossibleRouteNames}      from 'routes/everyRoutes.types'
import type {ReactElement}                 from 'util/react/ReactProperties'

import Table                 from 'app/tools/table/Table'
import {AbstractCardListApp} from 'app/withInterpreter/AbstractCardListApp'
import {ViewDisplays}        from 'app/withInterpreter/ViewDisplays'

//region -------------------- Import from deconstruction --------------------

const {TABLE,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractTableApp<APP extends AppInterpreterWithTable,
    T extends AppWithInterpreterProperties = AppWithInterpreterProperties, S extends AppStates = AppStates, >
    extends AbstractCardListApp<APP, T, S> {

    //region -------------------- Fields --------------------

    #routeName?: EveryPossibleRouteNames

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewAndRouteName[] {
        return [
            ...super._createPossibleViewDisplay(),
            [TABLE, this.__tableRouteName,],
        ]
    }

    private get __tableRouteName(): EveryPossibleRouteNames {
        return this.#routeName ??= this._createTableRouteName()
    }

    protected abstract _createTableRouteName(): EveryPossibleRouteNames

    //endregion -------------------- Getter & create methods --------------------
    //region -------------------- Render methods --------------------

    #tableContent(optionInterpreter: APP,): readonly SingleTableContent[] {
        const content = [] as SingleTableContent[]
        let index = 1
        for (const enumerable of optionInterpreter.iterable) {
            optionInterpreter.callbackToGetEnumerable = () => enumerable

            content.push([
                enumerable.englishName,
                ...[<>{index}</>,
                    optionInterpreter.tableOptions.map(tableHeader => optionInterpreter.createTableContent(tableHeader))
                ].flat(2)
            ])
            index++
        }
        return content
    }

    /**
     * Create a table element to display the information
     *
     * @see Table
     */
    public createTable(): ReactElement {
        const optionInterpreter = this._appOptionInterpreter
        const key = this._key

        return <Table key={`${key} (table)`}
                      {...optionInterpreter.tableProperties}
                      id={`${key}-table`}
                      content={this.#tableContent(optionInterpreter)}
                      headers={[
                          {key: 'originalOrder', element: '#',},
                          ...(optionInterpreter.tableOptions
                              .map(tableHeader => optionInterpreter.createTableHeader(tableHeader))
                              .filter(header => header != null) as SingleHeaderContent[])
                      ]}/>
    }

    //endregion -------------------- Render methods --------------------

}

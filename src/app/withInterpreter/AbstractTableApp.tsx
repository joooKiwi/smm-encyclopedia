import type {AppProperties}                from 'app/AppProperties.types'
import type {AppWithVariableDisplayStates} from 'app/AppStates.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {SingleHeaderContent}          from 'app/tools/table/SimpleHeader'
import type {SingleTableContent}           from 'app/tools/table/Table.types'
import type {ReactElement}                 from 'util/react/ReactProperties'

import Table                 from 'app/tools/table/Table'
import {AbstractCardListApp} from 'app/withInterpreter/AbstractCardListApp'
import {ViewDisplays}        from 'app/withInterpreter/ViewDisplays'

export abstract class AbstractTableApp<APP extends AppInterpreterWithTable,
    T extends AppProperties = AppProperties, S extends AppWithVariableDisplayStates = AppWithVariableDisplayStates, >
    extends AbstractCardListApp<APP, T, S> {

    //region -------------------- Fields --------------------

    static #APP_OPTION_INTERPRETER: readonly ViewDisplays[] = [ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST, ViewDisplays.TABLE,]

    //endregion -------------------- Fields --------------------
    //region -------------------- Create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewDisplays[] {
        return AbstractTableApp.#APP_OPTION_INTERPRETER
    }

    //endregion -------------------- Create methods --------------------
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

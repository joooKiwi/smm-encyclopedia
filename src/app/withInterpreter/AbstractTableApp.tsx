import type {AppInterpreterWithTable}      from '../interpreter/AppInterpreterWithTable';
import type {AppWithVariableDisplayStates} from '../AppStates.types';
import type {ReactElement}                 from '../../util/react/ReactProperty';
import type {SingleHeaderContent}          from '../tools/table/SimpleHeader';
import type {SingleTableContent}           from '../tools/table/Table.types';

import {AbstractCardListApp} from './AbstractCardListApp';
import Table                 from '../tools/table/Table';
import {ViewDisplays}        from './ViewDisplays';

export abstract class AbstractTableApp<APP extends AppInterpreterWithTable,
    T = {}, S extends AppWithVariableDisplayStates = AppWithVariableDisplayStates, >
    extends AbstractCardListApp<APP, T, S> {

    //region -------------------- Attributes --------------------

    static #APP_OPTION_INTERPRETER: readonly ViewDisplays[] = [ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST, ViewDisplays.TABLE,];

    //endregion -------------------- Attributes --------------------
    //region -------------------- Create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewDisplays[] {
        return AbstractTableApp.#APP_OPTION_INTERPRETER;
    }

    //endregion -------------------- Create methods --------------------
    //region -------------------- Render methods --------------------

    private __tableContent(optionInterpreter: APP,): readonly SingleTableContent[] {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const enumerable of optionInterpreter.iterable) {
            optionInterpreter.callbackToGetEnumerable = () => enumerable;

            content.push([
                enumerable.englishName,
                ...[<>{index}</>,
                    optionInterpreter.tableOptions.map(tableHeader => optionInterpreter.createTableContent(tableHeader))
                ].flat(2)
            ]);
            index++;
        }
        return content;
    }

    /**
     * Create a table element to display the information
     *
     * @see Table
     */
    public createTable(): ReactElement {
        const optionInterpreter = this._appOptionInterpreter;
        return <Table key={`${this._key} (table)`}
                      {...optionInterpreter.tableProperties}
                      id={`${this._key}-table`}
                      content={this.__tableContent(optionInterpreter)}
                      headers={[
                          {key: 'originalOrder', element: <>#</>,},
                          ...(optionInterpreter.tableOptions
                              .map(tableHeader => optionInterpreter.createTableHeader(tableHeader))
                              .filter(header => header != null) as SingleHeaderContent[])
                      ]}/>;
    }

    //endregion -------------------- Render methods --------------------

}

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppStates}                    from 'app/AppStates.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {EveryPossibleRouteNames}      from 'route/everyRoutes.types'

import Table                 from 'app/tools/table/Table'
import {AbstractCardListApp} from 'app/withInterpreter/AbstractCardListApp'
import {ViewDisplays}        from 'app/withInterpreter/ViewDisplays'

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
            [ViewDisplays.TABLE, this.__tableRouteName,],
        ]
    }

    private get __tableRouteName(): EveryPossibleRouteNames {
        return this.#routeName ??= this._createTableRouteName()
    }

    protected abstract _createTableRouteName(): EveryPossibleRouteNames

    //endregion -------------------- Getter & create methods --------------------
    //region -------------------- Render methods --------------------

    /**
     * Create a table element to display the information
     *
     * @see Table
     */
    public createTable(): ReactElement {
        return <Table id={`${this._key}-table`} interpreter={this._appOptionInterpreter}/>
    }

    //endregion -------------------- Render methods --------------------

}

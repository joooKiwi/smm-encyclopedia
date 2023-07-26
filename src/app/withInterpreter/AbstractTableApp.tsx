import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppStates}                    from 'app/AppStates.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {SingleTableContent}           from 'app/tools/table/Table.types'
import type {EveryPossibleRouteNames}      from 'route/everyRoutes.types'

import Table                 from 'app/tools/table/Table'
import {AbstractCardListApp} from 'app/withInterpreter/AbstractCardListApp'
import {ViewDisplays}        from 'app/withInterpreter/ViewDisplays'
import {nonNull}             from 'util/utilitiesMethods'

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
        const iterator = optionInterpreter.iterable[Symbol.iterator]()
        let enumerableIterator = iterator.next()
        while (!enumerableIterator.done) {
            const enumerable = enumerableIterator.value
            optionInterpreter.callbackToGetEnumerable = () => enumerable

            content.push([
                enumerable.englishName,
                ...nonNull(optionInterpreter.tableOptions).map(it => optionInterpreter.createTableContent(it)).flat(),
            ])
            enumerableIterator = iterator.next()
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
                      headers={nonNull(nonNull(optionInterpreter.tableOptions).map(it => optionInterpreter.createTableHeader(it)))}/>
    }

    //endregion -------------------- Render methods --------------------

}

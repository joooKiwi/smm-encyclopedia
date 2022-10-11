import type {AppProperties}                from '../AppProperties.types'
import type {AppInterpreterWithSimpleList} from '../interpreter/AppInterpreterWithSimpleList'
import type {AppWithVariableDisplayStates} from '../AppStates.types'
import type {ReactElement}                 from '../../util/react/ReactProperties'

import {AbstractAppWithInterpreter} from './AbstractAppWithInterpreter'
import NameComponent                from '../../lang/name/component/Name.component'
import {ViewDisplays}               from './ViewDisplays'
import {ListDimensionCreator}       from './ListDimension.creator'

export abstract class AbstractSimpleListApp<APP extends AppInterpreterWithSimpleList,
    T extends AppProperties = AppProperties, S extends AppWithVariableDisplayStates = AppWithVariableDisplayStates, >
    extends AbstractAppWithInterpreter<APP, T, S> {

    //region -------------------- Fields --------------------

    static #APP_OPTION_INTERPRETER: readonly ViewDisplays[] = [ViewDisplays.SIMPLE_LIST,]

    //endregion -------------------- Fields --------------------
    //region -------------------- Create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewDisplays[] {
        return AbstractSimpleListApp.#APP_OPTION_INTERPRETER
    }

    protected _createUniqueNameOnSimpleList(enumerable: ReturnType<APP['iterable']['next']>['value'],): string {
        //TODO find a better way to use the enumerable type than the complicated name
        return enumerable.englishName
    }

    //endregion -------------------- Create methods --------------------
    //region -------------------- Render methods --------------------

    /**
     * Create a list with only the names displayed.
     */
    public createList(): ReactElement {
        const optionInterpreter = this._appOptionInterpreter,
            key = this._key,
            dimensions = optionInterpreter.createListDimension()

        const content = [] as ReactElement[]
        for (const enumerable of optionInterpreter.iterable) {
            const uniqueEnglishName = this._createUniqueNameOnSimpleList(enumerable)
            const name = enumerable.reference.nameContainer
            const id = `${key}-${enumerable.englishNameInHtml}-container`

            //TODO change the popover to be on the id instead of the name directly
            content.push(
                <div key={`${uniqueEnglishName} - main list container`} id={id}
                     className={`${key}-container listElement-container ${new ListDimensionCreator(dimensions).createDimensions()}`}>
                    <span key={`${uniqueEnglishName} - main list text-container`} className="simpleListElement-container rounded-pill">
                        <NameComponent key={`${uniqueEnglishName} - text container`} id="name" name={name} popoverOrientation="left"/>
                    </span>
                </div>
            )
        }
        return <>{content}</>
    }

    //endregion -------------------- Render methods --------------------

}

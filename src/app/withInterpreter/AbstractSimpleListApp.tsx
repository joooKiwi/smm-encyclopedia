import type {AppProperties}                from 'app/AppProperties.types'
import type {AppWithVariableDisplayStates} from 'app/AppStates.types'
import type {ValueByApp}                   from 'app/interpreter/AppInterpreter'
import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {ReactElement}                 from 'util/react/ReactProperties'

import {AbstractAppWithInterpreter} from 'app/withInterpreter/AbstractAppWithInterpreter'
import {ViewDisplays}               from 'app/withInterpreter/ViewDisplays'
import {ListDimensionCreator}       from 'app/withInterpreter/ListDimension.creator'
import NameComponent                from 'lang/name/component/Name.component'

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

    protected _createUniqueNameOnSimpleList(enumerable: ValueByApp<APP>,): string {
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

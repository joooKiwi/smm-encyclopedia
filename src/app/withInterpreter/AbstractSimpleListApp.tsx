import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppStates}                    from 'app/AppStates.types'
import type {ValueByApp}                   from 'app/interpreter/AppInterpreter'
import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {EveryPossibleRouteNames}      from 'route/everyRoutes.types'

import {AbstractAppWithInterpreter} from 'app/withInterpreter/AbstractAppWithInterpreter'
import {ViewDisplays}               from 'app/withInterpreter/ViewDisplays'
import {ListDimensionCreator}       from 'app/withInterpreter/ListDimension.creator'
import NameComponent                from 'lang/name/component/Name.component'
import {ReactElement}               from 'react'

export abstract class AbstractSimpleListApp<APP extends AppInterpreterWithSimpleList,
    T extends AppWithInterpreterProperties = AppWithInterpreterProperties, S extends AppStates = AppStates, >
    extends AbstractAppWithInterpreter<APP, T, S> {

    //region -------------------- Fields --------------------

    #routeName?: EveryPossibleRouteNames

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewAndRouteName[] {
        return [
            [ViewDisplays.SIMPLE_LIST, this.__listRouteName,],
        ]
    }

    private get __listRouteName(): EveryPossibleRouteNames {
        return this.#routeName ??= this._createSimpleListRouteName()
    }

    protected abstract _createSimpleListRouteName(): EveryPossibleRouteNames

    protected _createUniqueNameOnSimpleList(enumerable: ValueByApp<APP>,): string {
        return enumerable.englishName
    }

    //endregion -------------------- Getter & create methods --------------------
    //region -------------------- Render methods --------------------

    /**
     * Create a list with only the names displayed.
     */
    public createList(): ReactElement {
        const optionInterpreter = this._appOptionInterpreter
        const key = this._key
        const dimensions = new ListDimensionCreator(optionInterpreter.createListDimension(),).createDimensions()
        const content = optionInterpreter.content

        const size = content.length
        const contentToDisplay = new Array<ReactElement>(size,)
        let index = size
        while (index-- < 0) {
            const enumerable = content[index]
            const uniqueEnglishName = this._createUniqueNameOnSimpleList(enumerable,)

            //TODO change the popover to be on the id instead of the name directly
            contentToDisplay[index] =
                <div key={`${uniqueEnglishName} - main list container`} id={`${key}-${enumerable.englishNameInHtml}-container`} className={`${key}-container listElement-container ${dimensions}`}>
                    <span key={`${uniqueEnglishName} - main list text-container`} className="simpleListElement-container rounded-pill">
                        <NameComponent key={`${uniqueEnglishName} - text container`} id="name" name={enumerable.reference.nameContainer} popoverOrientation="left"/>
                    </span>
                </div>
        }
        return <>{contentToDisplay}</>
    }

    //endregion -------------------- Render methods --------------------

}

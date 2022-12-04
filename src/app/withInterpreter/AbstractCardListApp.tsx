import type {AppProperties}                from 'app/AppProperties.types'
import type {AppWithVariableDisplayStates} from 'app/AppStates.types'
import type {ValueByApp}                   from 'app/interpreter/AppInterpreter'
import type {AppInterpreterWithCardList}   from 'app/interpreter/AppInterpreterWithCardList'
import type {ReactElement}                 from 'util/react/ReactProperties'

import {AbstractSimpleListApp} from 'app/withInterpreter/AbstractSimpleListApp'
import {ListDimensionCreator}  from 'app/withInterpreter/ListDimension.creator'
import {ViewDisplays}          from 'app/withInterpreter/ViewDisplays'
import NameComponent           from 'lang/name/component/Name.component'

export abstract class AbstractCardListApp<APP extends AppInterpreterWithCardList,
    T extends AppProperties = AppProperties, S extends AppWithVariableDisplayStates = AppWithVariableDisplayStates, >
    extends AbstractSimpleListApp<APP, T, S> {

    //region -------------------- Fields --------------------

    static #APP_OPTION_INTERPRETER: readonly ViewDisplays[] = [ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST,]

    //endregion -------------------- Fields --------------------
    //region -------------------- Create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewDisplays[] {
        return AbstractCardListApp.#APP_OPTION_INTERPRETER
    }

    protected _createUniqueNameOnCardList(enumerable: ValueByApp<APP>,): string {
        return enumerable.englishName
    }

    //endregion -------------------- Create methods --------------------
    //region -------------------- Render methods --------------------

    /**
     * Create a list of elements in a card manner.
     * It can be similar to the {@link createList} but has more information displayed.
     */
    public createCardList(): ReactElement {
        const optionInterpreter = this._appOptionInterpreter,
            key = this._key,
            cardListDimension = optionInterpreter.createCardListDimension(),
            dimensions = new ListDimensionCreator(cardListDimension === 'list' ? optionInterpreter.createListDimension() : cardListDimension).createDimensions()

        const content = [] as ReactElement[]
        for (const enumerable of optionInterpreter.iterable) {
            const uniqueEnglishName = this._createUniqueNameOnCardList(enumerable)
            const name = enumerable.reference.nameContainer
            const id = `${key}-${enumerable.englishNameInHtml}-container`

            //TODO change the popover to be on the id instead of the name directly
            content.push(
                <div key={`${uniqueEnglishName} - main card list container`} id={id} className={`${key}-container listElement-container ${dimensions}`}>
                    <div key={`${uniqueEnglishName} - main card list sub-container`} className="cardListElement-container rounded-pill">
                        <NameComponent key={`${uniqueEnglishName} - text container`} id="name" name={name} popoverOrientation="left"/>
                        <div className="cardListName-content-container">{optionInterpreter.createCardListContent(enumerable)}</div>
                    </div>
                </div>
            )
        }
        return <>{content}</>
    }

    //endregion -------------------- Render methods --------------------

}

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppStates}                    from 'app/AppStates.types'
import type {ValueByApp}                   from 'app/interpreter/AppInterpreter'
import type {AppInterpreterWithCardList}   from 'app/interpreter/AppInterpreterWithCardList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {PossibleRouteName}            from 'route/EveryRoutes.types'

import {AbstractSimpleListApp} from 'app/withInterpreter/AbstractSimpleListApp'
import {ListDimensionCreator}  from 'app/withInterpreter/ListDimension.creator'
import {ViewDisplays}          from 'app/withInterpreter/ViewDisplays'
import NameComponent           from 'lang/name/component/Name.component'

export abstract class AbstractCardListApp<APP extends AppInterpreterWithCardList,
    T extends AppWithInterpreterProperties = AppWithInterpreterProperties, S extends AppStates = AppStates, >
    extends AbstractSimpleListApp<APP, T, S> {

    //region -------------------- Fields --------------------

    #routeName?: PossibleRouteName

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewAndRouteName[] {
        return [
            ...super._createPossibleViewDisplay(),
            [ViewDisplays.CARD_LIST, this.__cardRouteName,],
        ]
    }

    private get __cardRouteName(): PossibleRouteName {
        return this.#routeName ??= this._createCardListRouteName()
    }

    protected abstract _createCardListRouteName(): PossibleRouteName

    protected _createUniqueNameOnCardList(enumerable: ValueByApp<APP>,): string {
        return enumerable.englishName
    }

    //endregion -------------------- Getter & create methods --------------------
    //region -------------------- Render methods --------------------

    /**
     * Create a list of elements in a card manner.
     * It can be similar to the {@link createList} but has more information displayed.
     */
    public createCardList(): ReactElement {
        const optionInterpreter = this._appOptionInterpreter
        const key = this._key
        const cardListDimension = optionInterpreter.createCardListDimension()
        const dimensions = new ListDimensionCreator(cardListDimension === 'list' ? optionInterpreter.createListDimension() : cardListDimension,).createDimensions()
        const content = optionInterpreter.content

        const size = content.length
        const contentToDisplay = new Array<ReactElement>(size,)
        let index = size
        while (index-- > 0) {
            const enumerable = content[index]
            const uniqueEnglishName = this._createUniqueNameOnCardList(enumerable,)

            //TODO change the popover to be on the id instead of the name directly
            contentToDisplay[index] =
                <div key={`${uniqueEnglishName} - main card list container`} id={`${key}-${enumerable.englishNameInHtml}-container`} className={`${key}-container listElement-container ${dimensions}`}>
                    <div key={`${uniqueEnglishName} - main card list sub-container`} className="cardListElement-container rounded-pill">
                        <NameComponent key={`${uniqueEnglishName} - text container`} id="name" name={enumerable.reference.nameContainer} popoverOrientation="left"/>
                        <div className="cardListName-content-container">{optionInterpreter.createCardListContent(enumerable)}</div>
                    </div>
                </div>
        }
        return <>{contentToDisplay}</>
    }

    //endregion -------------------- Render methods --------------------

}

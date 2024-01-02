import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppStates}                    from 'app/AppStates.types'
import type {Content}                      from 'app/interpreter/AppInterpreter'
import type {AppInterpreterWithCardList}   from 'app/interpreter/AppInterpreterWithCardList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {PossibleRouteName}            from 'route/EveryRoutes.types'

import {AbstractSimpleListApp} from 'app/withInterpreter/AbstractSimpleListApp'
import {ViewDisplays}          from 'app/withInterpreter/ViewDisplays'
import NameComponent           from 'lang/name/component/Name.component'

export abstract class AbstractCardListApp<const out CONTENT extends Content,
    const out APP extends AppInterpreterWithCardList<CONTENT>,
    const out T extends AppWithInterpreterProperties = AppWithInterpreterProperties,
    const S extends AppStates = AppStates, >
    extends AbstractSimpleListApp<CONTENT, APP, T, S> {

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

    protected _createUniqueNameOnCardList(enumerable: CONTENT,): string {
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
        const {default: df, small: sm, medium: md, large: lg, extraLarge: xl, extraExtraLarge: xxl,} = optionInterpreter.createCardListDimension()
        const dimensions = `row-cols-${df}${sm == null ? '' : ` row-cols-sm-${sm}`}${md == null ? '' : ` row-cols-md-${md}`}${lg == null ? '' : ` row-cols-lg-${lg}`}${xl == null ? '' : ` row-cols-xl-${xl}`}${xxl == null ? '' : ` row-cols-xxl-${xxl}`}`
        const content = optionInterpreter.content

        const size = content.length
        const contentToDisplay = new Array<ReactElement>(size,)
        let index = size
        while (index-- > 0) {
            const enumerable = content[index]
            const uniqueEnglishName = this._createUniqueNameOnCardList(enumerable,)

            //TODO change the popover to be on the id instead of the name directly
            contentToDisplay[index] =
                <div key={`${uniqueEnglishName} - main card list container`} id={`${key}-${enumerable.englishNameInHtml}-container`} className={`${key}-container`}>
                    <div key={`${uniqueEnglishName} - main card list sub-container`} className="listElement-container cardListElement-container rounded-pill">
                        <NameComponent key={`${uniqueEnglishName} - text container`} id="name" name={enumerable.reference.nameContainer} popoverOrientation="left"/>
                        <div className="cardListName-content-container">{optionInterpreter.createCardListContent(enumerable)}</div>
                    </div>
                </div>
        }
        return <div className={`row ${dimensions} align-items-center flex-grow-1 gx-0`}>{contentToDisplay}</div>
    }

    //endregion -------------------- Render methods --------------------

}

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppStates}                    from 'app/AppStates.types'
import type {Content}                      from 'app/interpreter/AppInterpreter'
import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {PossibleRouteName}            from 'route/EveryRoutes.types'

import {AbstractAppWithInterpreter} from 'app/withInterpreter/AbstractAppWithInterpreter'
import {ViewDisplays}               from 'app/withInterpreter/ViewDisplays'
import NameComponent                from 'lang/name/component/Name.component'

export abstract class AbstractSimpleListApp<const CONTENT extends Content,
    const out APP extends AppInterpreterWithSimpleList<CONTENT>,
    const out T extends AppWithInterpreterProperties = AppWithInterpreterProperties,
    const S extends AppStates = AppStates, >
    extends AbstractAppWithInterpreter<APP, T, S> {

    //region -------------------- Fields --------------------

    #routeName?: PossibleRouteName

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewAndRouteName[] {
        return [
            [ViewDisplays.SIMPLE_LIST, this.__listRouteName,],
        ]
    }

    private get __listRouteName(): PossibleRouteName {
        return this.#routeName ??= this._createSimpleListRouteName()
    }

    protected abstract _createSimpleListRouteName(): PossibleRouteName

    protected _createUniqueNameOnSimpleList(enumerable: CONTENT,): string {
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
        const {default: df, small: sm, medium: md, large: lg, extraLarge: xl, extraExtraLarge: xxl,} = optionInterpreter.createListDimension!()
        const dimensions = `row-cols-${df}${sm == null ? '' : ` row-cols-sm-${sm}`}${md == null ? '' : ` row-cols-md-${md}`}${lg == null ? '' : ` row-cols-lg-${lg}`}${xl == null ? '' : ` row-cols-xl-${xl}`}${xxl == null ? '' : ` row-cols-xxl-${xxl}`}`
        const content = optionInterpreter.content

        const size = content.length
        const contentToDisplay = new Array<ReactElement>(size,)
        let index = size
        while (index-- > 0) {
            const enumerable = content[index]
            const uniqueEnglishName = this._createUniqueNameOnSimpleList(enumerable,)

            //TODO change the popover to be on the id instead of the name directly
            contentToDisplay[index] =
                <div key={`${uniqueEnglishName} - main list container`} id={`${key}-${enumerable.englishNameInHtml}-container`} className={`${key}-container`}>
                    <span key={`${uniqueEnglishName} - main list text-container`} className="listElement-container simpleListElement-container rounded-pill">
                        <NameComponent key={`${uniqueEnglishName} - text container`} id="name" name={enumerable.reference.nameContainer} popoverOrientation="left"/>
                    </span>
                </div>
        }
        return <div className={`row ${dimensions} align-items-center flex-grow-1 gx-0`}>{contentToDisplay}</div>
    }

    //endregion -------------------- Render methods --------------------

}

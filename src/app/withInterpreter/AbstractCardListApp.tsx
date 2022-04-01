import type {AppInterpreterWithCardList}   from '../interpreter/AppInterpreterWithCardList';
import type {AppWithVariableDisplayStates} from '../AppStates.types';
import type {ReactElement}                 from '../../util/react/ReactProperty';

import {AbstractSimpleListApp} from './AbstractSimpleListApp';
import NameComponent           from '../../lang/name/component/Name.component';
import {ViewDisplays}          from './ViewDisplays';

export abstract class AbstractCardListApp<APP extends AppInterpreterWithCardList,
    T = {}, S extends AppWithVariableDisplayStates = AppWithVariableDisplayStates, >
    extends AbstractSimpleListApp<APP, T, S> {

    //region -------------------- Attributes --------------------

    static #APP_OPTION_INTERPRETER: readonly ViewDisplays[] = [ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST,];

    //endregion -------------------- Attributes --------------------
    //region -------------------- Create methods --------------------

    protected _createPossibleViewDisplay(): readonly ViewDisplays[] {
        return AbstractCardListApp.#APP_OPTION_INTERPRETER;
    }

    //endregion -------------------- Create methods --------------------
    //region -------------------- Render methods --------------------

    private __cardListContent(optionInterpreter: APP,): readonly ReactElement[] {
        const content = [] as ReactElement[];
        for (const enumerable of optionInterpreter.iterable) {
            const englishName = enumerable.englishName;
            const name = enumerable.reference.nameContainer;
            const id = `${this._key}-${enumerable.englishNameInHtml}-container`;

            //TODO change the popover to be on the id instead of the name directly
            content.push(
                <div key={`${englishName} - main card list container`} id={id}
                     className={`${this._key}-container listElement-container col-12 col-sm-4 col-md-3 col-lg-2`}>
                    <div key={`${name} - main card list sub-container`} className="cardListElement-container rounded-pill">
                        <NameComponent key={`${englishName} - text container`} id="name" name={name} popoverOrientation="left"/>
                        <div className="cardListName-content-container" >{optionInterpreter.createCardListContent(enumerable)}</div>
                    </div>
                </div>
            );
        }
        return content;
    }

    /**
     * Create a list of elements in a card manner.
     * It can be similar to the {@link createList} but has more information displayed.
     */
    public createCardList(): ReactElement {
        const optionInterpreter = this._appOptionInterpreter;
        return <div id={`${this._key}-container`} className="cardList-container">
            <h1 key={`${this._key} (title)`} id={`${this._key}-title`} className="app-title">{optionInterpreter.createListTitleContent}</h1>
            <div key={`${this._key} (card list)`} className="app-content">{this.__cardListContent(optionInterpreter)}</div>
        </div>;
    }

    //endregion -------------------- Render methods --------------------

}

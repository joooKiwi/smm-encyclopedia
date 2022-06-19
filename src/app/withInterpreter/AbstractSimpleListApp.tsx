import type {AppInterpreterWithSimpleList} from '../interpreter/AppInterpreterWithSimpleList';
import type {AppWithVariableDisplayStates} from '../AppStates.types';
import type {ReactElement}                 from '../../util/react/ReactProperty';

import {AbstractAppWithInterpreter} from './AbstractAppWithInterpreter';
import NameComponent                from '../../lang/name/component/Name.component';
import {ViewDisplays}               from './ViewDisplays';

export abstract class AbstractSimpleListApp<APP extends AppInterpreterWithSimpleList,
    T = {}, S extends AppWithVariableDisplayStates = AppWithVariableDisplayStates, >
    extends AbstractAppWithInterpreter<APP, T, S> {

    //region -------------------- Attributes --------------------

    static #APP_OPTION_INTERPRETER: readonly ViewDisplays[] = [ViewDisplays.SIMPLE_LIST,];

    //endregion -------------------- Attributes --------------------
    //region -------------------- Create methods --------------------

    protected override _createPossibleViewDisplay(): readonly ViewDisplays[] {
        return AbstractSimpleListApp.#APP_OPTION_INTERPRETER;
    }

    //endregion -------------------- Create methods --------------------
    //region -------------------- Render methods --------------------

    /**
     * Create a list with only the names displayed.
     */
    public createList(): ReactElement {
        const optionInterpreter = this._appOptionInterpreter;

        const content = [] as ReactElement[];
        for (const enumerable of optionInterpreter.iterable) {
            const englishName = enumerable.englishName;
            const name = enumerable.reference.nameContainer;
            const id = `${this._key}-${enumerable.englishNameInHtml}-container`;

            //TODO change the popover to be on the id instead of the name directly
            content.push(
                <div key={`${englishName} - main list container`} id={id}
                     className={`${this._key}-container listElement-container col-12 col-sm-4 col-md-3 col-lg-2`}>
                    <span key={`${englishName} - main list text-container`} className="simpleListElement-container rounded-pill">
                        <NameComponent key={`${englishName} - text container`} id="name" name={name} popoverOrientation="left"/>
                    </span>
                </div>
            );
        }
        return <>{content}</>;
    }

    //endregion -------------------- Render methods --------------------

}

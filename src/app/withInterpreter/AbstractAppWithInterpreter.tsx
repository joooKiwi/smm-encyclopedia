import './AbstractAppWithInterpreter.scss';

import type {AppInterpreter}                     from '../interpreter/AppInterpreter';
import type {AppWithVariableDisplayStates}       from '../AppStates.types';
import type {ReactElement, ReactElementOrString} from '../../util/react/ReactProperty';

import AbstractApp    from '../AbstractApp';
import {ViewDisplays} from './ViewDisplays';
import {assert}       from '../../util/utilitiesMethods';

export abstract class AbstractAppWithInterpreter<APP extends AppInterpreter,
    T = {}, S extends AppWithVariableDisplayStates = AppWithVariableDisplayStates, >
    extends AbstractApp<T, S> {

    //region -------------------- Attributes --------------------

    #possibleViewDisplay?: readonly ViewDisplays[];
    #key?: string;
    #appInterpreter?: APP;

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter & create methods --------------------

    /**
     * Get the {@link ViewDisplays view display} state held by this instance.
     */
    public get typeDisplayed(): ViewDisplays {
        assert(this.state != null, 'The state has not been initialised in the constructor.',);
        assert(this.state.typeDisplayed != null, 'The state "type displayed" has not been initialised in the constructor.',);
        return this.state.typeDisplayed;
    }

    /**
     * Set the state {@link ViewDisplays view display} to the value received in this instance.
     *
     * @param value the new {@link ViewDisplays view display} state
     */
    public set typeDisplayed(value: ViewDisplays,) {
        this.setState({typeDisplayed: value,});
    }


    protected abstract _createPossibleViewDisplay(): readonly ViewDisplays[];

    private get __possibleViewDisplay(): readonly ViewDisplays[] {
        return this.#possibleViewDisplay ??= this._createPossibleViewDisplay();
    }


    protected abstract _createKey(): string;

    /**
     * Get the group key for each {@link ViewDisplays "view display" button}.
     * It is also used for the {@link Table} id.
     *
     * @see __createViewDisplayGroup
     */
    protected get _key(): string {
        return this.#key ??= this._createKey();
    }


    protected abstract _createAppOptionInterpreter(): APP;

    /**
     * Get the application interpreted that hold the data needed for the {@link ViewDisplays}.
     */
    protected get _appOptionInterpreter(): APP {
        return this.#appInterpreter ??= this._createAppOptionInterpreter();
    }

    //endregion -------------------- Getter & create methods --------------------
    //region -------------------- Render methods --------------------

    private get __createViewDisplayGroup(): ReactElement {
        return <div key={`${this._key} (group)`} id="btn-viewDisplay-container" className="btn-group">
            {this.__possibleViewDisplay.map(viewDisplay =>
                viewDisplay.createButton(this.typeDisplayed, this._key, nextValue => this.typeDisplayed = nextValue,))}
        </div>;
    }

    protected abstract _createTitleContent(): ReactElementOrString;

    protected override _mainContent(): ReactElement {
        const typeDisplayed = this.typeDisplayed;

        return <div key={`${this._key} (sub main container)`} id="subMain-container">
            <aside id="viewChanger-container">
                {this.__createViewDisplayGroup}
            </aside>
            <div id={`${this._key}-container`} className={`${typeDisplayed.htmlType}-container`}>
                <h1 key={`${this._key} (title)`} id={`${this._key}-title`} className="app-title">{this._createTitleContent()}</h1>
                <div key={`${this._key} (${typeDisplayed.type})`} className="app-content">{typeDisplayed.createComponent(this,)}</div>
            </div>

        </div>;
    }

    //endregion -------------------- Render methods --------------------

}

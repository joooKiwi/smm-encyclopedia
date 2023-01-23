import './AbstractAppWithInterpreter.scss'

import type {AppWithInterpreterProperties}       from 'app/AppProperties.types'
import type {AppStates}                          from 'app/AppStates.types'
import type {AppInterpreter}                     from 'app/interpreter/AppInterpreter'
import type {ViewAndRouteName}                   from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactElement, ReactElementOrString} from 'util/react/ReactProperties'
import type {NullOr}                             from 'util/types/nullable'

import AbstractApp        from 'app/AbstractApp'
import UnfinishedText     from 'app/tools/text/UnfinishedText'
import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import DisplayButtonGroup from 'app/withInterpreter/DisplayButtonGroup'

export abstract class AbstractAppWithInterpreter<APP extends AppInterpreter,
    T extends AppWithInterpreterProperties = AppWithInterpreterProperties, S extends AppStates = AppStates, >
    extends AbstractApp<T, S> {

    //region -------------------- Fields --------------------

    #typeDisplayed?: ViewDisplays
    #possibleViewDisplay?: readonly ViewAndRouteName[]
    #key?: string
    #appInterpreter?: APP

    //endregion -------------------- Fields --------------------

    public constructor(props: T,) {
        super(props,)
    }

    //region -------------------- Getter & create methods --------------------

    /** The {@link ViewDisplays view display} property held by this instance */
    public get typeDisplayed(): ViewDisplays {
        return this.#typeDisplayed ??= ViewDisplays.getValue(this.props.typeDisplayed)
    }

    protected abstract _createPossibleViewDisplay(): readonly ViewAndRouteName[]

    private get __possibleViewDisplay(): readonly ViewAndRouteName[] {
        return this.#possibleViewDisplay ??= this._createPossibleViewDisplay()
    }


    protected abstract _createKey(): string

    /**
     * Get the group key for each {@link ViewDisplays "view display" button}.
     * It is also used for the {@link Table} id.
     *
     * @see DisplayButtonGroup
     */
    protected get _key(): string {
        return this.#key ??= this._createKey()
    }


    protected abstract _createAppOptionInterpreter(): APP

    /**
     * Get the application interpreted that hold the data needed for the {@link ViewDisplays}.
     */
    protected get _appOptionInterpreter(): APP {
        return this.#appInterpreter ??= this._createAppOptionInterpreter()
    }

    //endregion -------------------- Getter & create methods --------------------
    //region -------------------- Render methods --------------------

    protected abstract _createTitleContent(): ReactElementOrString

    protected _createAsideContent(): NullOr<ReactElementOrString> {
        return null
    }

    protected _createDescription(): ReactElementOrString {
        return <UnfinishedText isHidden>description</UnfinishedText>//TODO add description
    }

    protected override _mainContent(): ReactElement {
        const {typeDisplayed, _key: key,} = this

        return <div key={`${key} (sub main container)`} id="subMain-container">
            <div id={`${key}-container`} className={`${typeDisplayed.htmlType}-container`}>
                <h1 key={`${key} (title)`} id={`${key}-title`} className="app-title">{this._createTitleContent()}</h1>
                <aside key={`${key} (view changer)`} id="viewChanger-container">
                    <DisplayButtonGroup reactKey={key} views={this.__possibleViewDisplay} currentView={typeDisplayed}/>
                    {this._createAsideContent()}
                </aside>
                <p key={`${key} (description)`}>{this._createDescription()}</p>
                <div key={`${key} (${typeDisplayed.type})`} className="app-content">{typeDisplayed.createComponent(this,)}</div>
            </div>
        </div>
    }

    //endregion -------------------- Render methods --------------------

}

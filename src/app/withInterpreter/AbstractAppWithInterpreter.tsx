import './AbstractAppWithInterpreter.scss'

import {Component} from 'react'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppStates}                    from 'app/AppStates.types'
import type {AppInterpreter}               from 'app/interpreter/AppInterpreter'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactComponent}               from 'util/react/ReactComponent'

import UnfinishedText     from 'app/tools/text/UnfinishedText'
import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import DisplayButtonGroup from 'app/withInterpreter/DisplayButtonGroup'

/**
 * @reactComponent
 * @todo Replace to a functional-based component
 */
export abstract class AbstractAppWithInterpreter<const out APP extends AppInterpreter,
    const out T extends AppWithInterpreterProperties = AppWithInterpreterProperties,
    const S extends AppStates = AppStates, >
    extends Component<T, S>
    implements ReactComponent {

    //region -------------------- Fields --------------------

    #possibleViewDisplay?: readonly ViewAndRouteName[]
    #key?: string
    #appInterpreter?: APP

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & create methods --------------------

    /** The {@link ViewDisplays view display} property held by this instance */
    public get viewDisplay(): ViewDisplays {
        return this.props.viewDisplay
    }

    protected abstract _createPossibleViewDisplay(): readonly ViewAndRouteName[]

    private get __possibleViewDisplay(): readonly ViewAndRouteName[] {
        return this.#possibleViewDisplay ??= this._createPossibleViewDisplay()
    }


    protected abstract _createKey(): string

    /**
     * Get the group key for each {@link ViewDisplays "view display" button}
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

    protected _createAlert(): ReactElementOrString {
        return null
    }

    public override render() {
        const {viewDisplay, _key: key,} = this
        const alert = this._createAlert()

        return <div key={`${key} (sub main container)`} id="subMain-container">
            <div id={`${key}-container`} className={`${viewDisplay.htmlType}-container`}>
                <h1 key={`${key} (title)`} id={`${key}-title`} className="app-title">{this._createTitleContent()}</h1>
                {alert == null ? null : <aside key={`${key} (alert)`} id="alert-container">{alert}</aside>}
                <aside key={`${key} (view changer)`} id="viewChanger-container">
                    <DisplayButtonGroup reactKey={key} views={this.__possibleViewDisplay} currentView={viewDisplay}/>
                    {this._createAsideContent()}
                </aside>
                <p key={`${key} (description)`}>{this._createDescription()}</p>
                <div key={`${key} (${viewDisplay.type})`} className="app-content">{viewDisplay.createComponent(this,)}</div>
            </div>
        </div>
    }

    //endregion -------------------- Render methods --------------------

}

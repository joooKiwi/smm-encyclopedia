import {PureComponent} from 'react'

import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'
import type {ReactComponent}           from 'util/react/ReactComponent'
import type {ReactJSXElement}          from 'util/react/ReactProperties'

/**
 * @reactComponent
 */
export abstract class AbstractEntityPropertyThatCanDisplayAllComponent<R>
    extends PureComponent<EntityPropertyProperties<R>>
    implements ReactComponent {

    public get reference() {
        return this.props.reference
    }

    public get name() {
        return this.props.name
    }

    public get displayAllAsText(): boolean {
        return this.props.displayAllAsText
    }


    protected abstract get _isInAll(): boolean

    protected abstract _renderComponentForAllAsText(): ReactJSXElement

    protected abstract _renderComponentForAllAsImages(): ReactJSXElement

    public override render(): ReactJSXElement {
        if (this._isInAll) {
            if (this.displayAllAsText)
                return this._renderComponentForAllAsText()
            return this._renderComponentForAllAsImages()
        }
        return this._render()
    }

    protected abstract _render(): ReactJSXElement

}

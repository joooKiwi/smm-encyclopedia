import {AbstractEntityPropertyThatCanDisplayAllComponent} from 'core/_component/AbstractEntityPropertyThatCanDisplayAllComponent'

/** @reactComponent */
export abstract class AbstractDualEntityPropertyComponent<R>
    extends AbstractEntityPropertyThatCanDisplayAllComponent<R> {

    protected abstract get _isInFirst(): boolean

    // protected abstract _renderSingleComponent(enumInstance: E,): ReactJSXElement

    protected abstract _renderFirstComponent(): ReactJSXElement

    protected abstract _renderSecondComponent(): ReactJSXElement

    protected override _render(): ReactJSXElement {
        return this._isInFirst ?
            this._renderFirstComponent()
            : this._renderSecondComponent()
    }

}

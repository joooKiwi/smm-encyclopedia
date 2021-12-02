import {AbstractEntityPropertyThatCanDisplayAllComponent} from './AbstractEntityPropertyThatCanDisplayAllComponent';

/**
 * @reactComponent
 */
export abstract class AbstractDualEntityPropertyComponent<R>
    extends AbstractEntityPropertyThatCanDisplayAllComponent<R> {

    protected abstract get _isInFirst(): boolean;

    // protected abstract _renderSingleComponent(enumInstance: E,): JSX.Element;

    protected abstract _renderFirstComponent(): JSX.Element;

    protected abstract _renderSecondComponent(): JSX.Element;

    public _render() {
        return this._isInFirst ?
            this._renderFirstComponent()
            : this._renderSecondComponent();
    }

}

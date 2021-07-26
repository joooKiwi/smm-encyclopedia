import {PureComponent} from 'react';

import type {Name} from '../../lang/name/Name';

export interface AbstractDualEntityProperty<R> {

    reference: R

    name: Name

}

export abstract class AbstractDualEntityPropertyComponent<R>
    extends PureComponent<AbstractDualEntityProperty<R>> {

    protected get reference() {
        return this.props.reference;
    }

    protected get name() {
        return this.props.name;
    }


    protected abstract get _isInAll(): boolean;

    protected abstract get _isInFirst(): boolean;

    // protected abstract _renderSingleComponent(enumInstance: E,): JSX.Element;

    protected abstract _renderFirstComponent(): JSX.Element;

    protected abstract _renderSecondComponent(): JSX.Element;

    protected abstract _renderComponentForAll(): JSX.Element;

    public render(): JSX.Element {
        if (this._isInAll)
            return this._renderComponentForAll();
        return this._isInFirst ?
            this._renderFirstComponent()
            : this._renderSecondComponent();
    }

}
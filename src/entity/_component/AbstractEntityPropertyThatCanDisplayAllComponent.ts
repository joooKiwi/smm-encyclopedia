import type {ReactProperty} from '../../util/react/ReactProperty';
import type {Name}          from '../../lang/name/Name';
import {PureComponent}      from 'react';

export interface EntityPropertyProperties<R>
    extends ReactProperty {

    reference: R

    name: Name

}

export abstract class AbstractEntityPropertyThatCanDisplayAllComponent<R>
    extends PureComponent<EntityPropertyProperties<R>> {

    protected get reference() {
        return this.props.reference;
    }

    protected get name() {
        return this.props.name;
    }


    protected abstract get _isInAll(): boolean;

    protected abstract _renderComponentForAll(): JSX.Element;

    public abstract render(): JSX.Element;

}

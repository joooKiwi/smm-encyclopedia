import {PureComponent} from 'react';

import type {Name} from '../../lang/name/Name';

export interface AbstractEntityProperty<R> {

    reference: R

    name: Name

}

export abstract class AbstractEntityPropertyComponent<R, E>
    extends PureComponent<AbstractEntityProperty<R>> {

    protected abstract get map(): ReadonlyMap<E, boolean>;

    protected get reference() {
        return this.props.reference;
    }

    protected get name() {
        return this.props.name;
    }


    protected abstract get _isInAll(): boolean;

    protected abstract _renderSingleComponent(enumInstance: E,): JSX.Element;

    protected abstract _renderComponentForAll(): JSX.Element;

    public render(): JSX.Element {
        if (this._isInAll)
            return this._renderComponentForAll();

        const enumInstances = [] as E[];
        this.map.forEach((isInEnumInstance, enumInstance) => {
            if (isInEnumInstance)
                enumInstances.push(enumInstance);
        });
        if (enumInstances.length === 1)
            return this._renderSingleComponent(enumInstances[0]);
        return <div key={`${this.name.english} - group`}>{enumInstances.map(enumInstance => this._renderSingleComponent(enumInstance))}</div>;
    }

}
import {AbstractEntityPropertyThatCanDisplayAllComponent} from './AbstractEntityPropertyThatCanDisplayAllComponent';
import {ProjectLanguages}                                 from '../../lang/ProjectLanguages';

/**
 * @reactComponent
 */
export abstract class AbstractEntityPropertyComponent<R, E>
    extends AbstractEntityPropertyThatCanDisplayAllComponent<R> {

    protected abstract get map(): ReadonlyMap<E, boolean>;


    protected abstract _renderSingleComponent(enumInstance: E,): JSX.Element;

    public _render() {
        const enumInstances = [] as E[];
        this.map.forEach((isInEnumInstance, enumInstance) => {
            if (isInEnumInstance)
                enumInstances.push(enumInstance);
        });
        if (enumInstances.length === 1)
            return this._renderSingleComponent(enumInstances[0]);
        return <div key={`${ProjectLanguages.getEnglish(this.name)} - group`}>{enumInstances.map(enumInstance => this._renderSingleComponent(enumInstance))}</div>;
    }

}

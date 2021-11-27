import type {EntityLimits}  from './EntityLimits';
import type {ReactProperty} from '../../util/react/ReactProperty';

import NameComponent from '../../lang/name/component/Name.component';
import {Fragment}    from 'react';

type Id = `${| 'editor' | 'whilePlaying'}-${number}`;

interface EditorLimitProperties
    extends ReactProperty {

    id: Id

    limits: ReadonlyMap<EntityLimits, boolean>

}

/**
 *
 * @param properties
 * @reactComponent
 */
export default function LimitComponent({id, limits,}: EditorLimitProperties,) {
    return limits.size === 0
        ? <></>
        : <>{[...limits].map(([limit, hasLimit,], index,) => hasLimit ? <Fragment key={`${id}-${index}`}>{createSingleComponent(id, limit,)}{createReturnOfLine(limits, index,)}</Fragment> : <Fragment key={`${id}-${index}`}/>)}</>;
}

function createReturnOfLine(limits: ReadonlyMap<EntityLimits, boolean>, index: number,) {
    return index !== limits.size - 1 ? <br/> : <></>;
}

function createSingleComponent(id: Id, entityLimit: EntityLimits,) {
    return <NameComponent id={`entityLimit-name-${id}`} name={entityLimit.reference}/>;
}
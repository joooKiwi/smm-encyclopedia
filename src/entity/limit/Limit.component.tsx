import type {EntityLimits}  from './EntityLimits';
import type {ReactProperty} from '../../util/react/ReactProperty';

import SMM2NameComponent from '../lang/SMM2Name.component';

type Id = `${| 'editor' | 'whilePlaying'}_${number}`;

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
        : <>{[...limits].map(([limit, hasLimit,], index,) => hasLimit ? <>{createSingleComponent(id, limit,)}{createReturnOfLine(limits, index,)}</> : <></>)}</>;
}

function createReturnOfLine(limits: ReadonlyMap<EntityLimits, boolean>, index: number,) {
    return index !== limits.size - 1 ? <br/> : <></>;
}

function createSingleComponent(id: Id, entityLimit: EntityLimits,) {
    return <SMM2NameComponent id={`entityLimit_name_${id}`} name={entityLimit.reference}/>;
}
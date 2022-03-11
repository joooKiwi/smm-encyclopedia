import {Fragment} from 'react';

import type {ReactProperty} from '../../util/react/ReactProperty';

import {EntityLimits}     from './EntityLimits';
import NameComponent      from '../../lang/name/component/Name.component';
import {ProjectLanguages} from '../../lang/ProjectLanguages';
import TextComponent      from '../../app/tools/text/TextComponent';

type Id = `${| 'editor' | 'whilePlaying'}-${string}`;

interface EditorLimitProperties
    extends ReactProperty {

    id: Id

    limits: | EntityLimits | ReadonlyMap<EntityLimits, boolean>

    displayAcronymIfApplicable: boolean

}

/**
 *
 * @param properties
 * @reactComponent
 */
export default function LimitComponent({id, limits, displayAcronymIfApplicable,}: EditorLimitProperties,) {
    if (limits instanceof EntityLimits)
        return createSingleComponent(id, limits, displayAcronymIfApplicable,);

    const selectedLimits = [...limits].filter(([, hasLimit]) => hasLimit).map(([limit,]) => limit);
    return selectedLimits.length === 0
        ? <></>
        : <>{selectedLimits.map((limit, index,) =>
            <Fragment key={`${limit.englishName} #${index + 1} → ${id}`}>{createSingleComponent(id, limit, displayAcronymIfApplicable,)}{createReturnOfLine(selectedLimits, index,)}</Fragment>
        )}</>;
}

function createReturnOfLine(selectedLimits: readonly EntityLimits[], index: number,) {
    return index === selectedLimits.length - 1 ? <></> : <>{ProjectLanguages.currentLanguage.comma}<br/></>;
}

function createSingleComponent(id: Id, entityLimit: EntityLimits, displayAcronymIfApplicable: boolean,) {
    if (displayAcronymIfApplicable) {
        const acronym = entityLimit.acronym;
        if (acronym == null)
            return createSingleNameComponent(id, entityLimit,);
        return <TextComponent key={`${entityLimit.englishName} (acronym) → ${id}`} id={`entityLimit-acronym-${id}`} content={acronym}/>;
    }
    return createSingleNameComponent(id, entityLimit,);
}

function createSingleNameComponent(id: Id, entityLimit: EntityLimits,) {
    return <NameComponent key={`${entityLimit.englishName} (name) → ${id}`} id={`entityLimit-name-${id}`} name={entityLimit.reference}/>;
}
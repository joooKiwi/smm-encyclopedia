import type {LimitProperty} from '../properties/limit/LimitProperty';
import type {ReactProperty} from '../../util/ReactProperty';

import PossiblyKnownTextContainer from '../../app/tools/text/PossiblyKnownTextContainer';
import SMM2NameComponent          from '../lang/SMM2NameComponent';

interface EditorLimitProperties
    extends ReactProperty {

    index: number

    limit: LimitProperty

}

export default function EditorLimitComponent({index, limit,}: EditorLimitProperties,) {
    const editorLimit = limit.editorLimit;

    return limit.isEditorLimitUnknown
        ? <PossiblyKnownTextContainer isKnown={false} content=""/> :
        editorLimit == null
            ? <></>
            : <SMM2NameComponent id={`entityLimit_name_${index}`} name={editorLimit.reference}/>;
}

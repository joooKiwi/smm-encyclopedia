import type {LimitProperty} from '../properties/limit/LimitProperty';
import type {ReactProperty} from '../../util/ReactProperty';

import PossiblyKnownTextContainer from '../../app/tools/text/PossiblyKnownTextContainer';

interface EditorLimitProperties
    extends ReactProperty {

    limit: LimitProperty

}

export default function EditorLimitComponent({limit,}: EditorLimitProperties,) {
    const name = limit.editorLimit?.englishName;

    return <PossiblyKnownTextContainer isKnown={!limit.isEditorLimitUnknown} content={name}/>;
}

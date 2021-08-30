import type {LimitProperty}       from '../properties/limit/LimitProperty';
import {useTranslation}           from 'react-i18next';
import PossiblyKnownTextContainer from '../../app/tools/text/PossiblyKnownTextContainer';

interface EditorLimitProperties {

    limit: LimitProperty

}

export default function EditorLimitComponent({limit,}: EditorLimitProperties,) {
    const {t: gameContentTranslation} = useTranslation('gameContent');

    const name = limit.editorLimit?.englishName;
    const text = name == null ? null : gameContentTranslation(name);

    return <PossiblyKnownTextContainer isKnown={!limit.isEditorLimitUnknown} content={text}/>;
}

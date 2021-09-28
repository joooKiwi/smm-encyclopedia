import './PossiblyKnownTextContainer.scss';

import type {PossibleTextContent, TextProperties} from './TextContainer';

import TextContainer from './TextContainer';

export interface PossiblyKnownTextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends TextProperties<T> {

    isKnown: boolean

}

export default function PossiblyKnownTextContainer<T extends PossibleTextContent = PossibleTextContent, >({content, classes, isKnown,}: PossiblyKnownTextProperties<T>,) {
    const classesToSend = [...(classes ?? []), ...(isKnown ? [] : ['is-unknown']),];
    return <TextContainer classes={classesToSend.length === 0 ? null : classesToSend} content={content}/>;
}

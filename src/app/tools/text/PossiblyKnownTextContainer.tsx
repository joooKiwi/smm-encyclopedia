import './PossiblyKnownTextContainer.scss';

import type {PossibleTextContent, TextContent} from './TextContainer';

import TextContainer from './TextContainer';

export interface PossiblyKnownTextContent<T extends PossibleTextContent = PossibleTextContent, >
    extends TextContent<T> {

    isKnown: boolean

}

export default function PossiblyKnownTextContainer<T extends PossibleTextContent = PossibleTextContent, >({content, classes, isKnown,}: PossiblyKnownTextContent<T>,) {
    const classesToSend = [...(classes ?? []), ...(isKnown ? [] : ['is-unknown']),];
    return <TextContainer classes={classesToSend.length === 0 ? null : classesToSend} content={content}/>;
}

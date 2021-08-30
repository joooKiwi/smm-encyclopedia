import './PossiblyKnownTextContainer.scss';

import type {TextContent} from './TextContainer';
import TextContainer      from './TextContainer';

export interface PossiblyKnownTextContent<T extends string | number | boolean = string | number | boolean, >
    extends TextContent<T> {

    isKnown: boolean

}

export default function PossiblyKnownTextContainer<T extends string | number | boolean = string | number | boolean, >({content, classes, isKnown,}: PossiblyKnownTextContent<T>,) {
    const classesToSend = [...(classes ?? []), ...(isKnown ? [] : ['is-unknown']),];
    return <TextContainer classes={classesToSend.length === 0 ? null : classesToSend} content={content}/>;
}

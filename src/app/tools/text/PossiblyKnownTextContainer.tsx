import './PossiblyKnownTextContainer.scss';

import type {PossibleTextContent, TextProperties} from './TextComponent';

import TextComponent from './TextComponent';

export interface PossiblyKnownTextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends TextProperties<T> {

    isKnown: boolean

}

/**
 *
 * @param properties
 * @reactComponent
 */
export default function PossiblyKnownTextContainer<T extends PossibleTextContent = PossibleTextContent, >({content, classes, isKnown,}: PossiblyKnownTextProperties<T>,) {
    const classesToSend = [...(classes ?? []), ...(isKnown ? [] : ['is-unknown']),];
    return <TextComponent classes={classesToSend.length === 0 ? null : classesToSend} content={content}/>;
}

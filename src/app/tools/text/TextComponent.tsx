import './TextComponent.scss';

import type {PossibleTextContent, TextProperties} from './properties/TextProperties';

const DEFAULT_IS_UNKNOWN = false;
const NOT_APPLICABLE = 'N/A';
const UNKNOWN_REFERENCE = '???';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextComponent<T extends PossibleTextContent = PossibleTextContent, >({content, isUnknown = DEFAULT_IS_UNKNOWN, classes, ...otherProperties}: TextProperties<T>,) {
    if (content === NOT_APPLICABLE)
        return <span className="not-applicable" {...otherProperties}/>;
    if (content === UNKNOWN_REFERENCE)
        return <span className="unknown-reference" {...otherProperties}/>;

    if (isUnknown)
        (classes ??= []).push('is-unknown');

    if (classes == null)
        return <span {...otherProperties}>{content}</span>;
    return <span className={classes.join(' ')} {...otherProperties}>{content}</span>;
}

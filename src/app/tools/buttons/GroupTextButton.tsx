import type {ActivatableTextElement} from './elements/ActivatableTextElement';
import type {GroupButtonComponents}  from './properties/GroupButtonProperty';

import AbstractGroupButton from './AbstractGroupButton';

/**
 * @reactComponent
 */
export default class GroupTextButton
    extends AbstractGroupButton<ActivatableTextElement> {

    public constructor(props: GroupButtonComponents<ActivatableTextElement>,) {
        super(props);
    }

    protected _getContent(text: ActivatableTextElement,): JSX.Element {
        return <span>{text.text}</span>;
    }

}

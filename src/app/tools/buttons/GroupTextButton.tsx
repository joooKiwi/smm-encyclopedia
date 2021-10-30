import type {ActivatableTextProperty} from './properties/ActivatableTextProperty';
import type {GroupButtonProperty}     from './properties/GroupButtonProperty';

import AbstractGroupButton from './AbstractGroupButton';

/**
 * @reactComponent
 */
export default class GroupTextButton
    extends AbstractGroupButton<ActivatableTextProperty> {

    public constructor(props: GroupButtonProperty<ActivatableTextProperty>,) {
        super(props);
    }

    protected _getContent(text: ActivatableTextProperty,) {
        return <span>{text.text}</span>;
    }

}

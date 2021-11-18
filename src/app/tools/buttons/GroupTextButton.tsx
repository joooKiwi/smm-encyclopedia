import type {ActivatableTextProperties} from './properties/ActivatableTextProperties';
import type {GroupButtonProperties}     from './properties/GroupButtonProperties';

import AbstractGroupButton from './AbstractGroupButton';
import TextComponent       from '../text/TextComponent';

/**
 * @reactComponent
 */
export default class GroupTextButton
    extends AbstractGroupButton<ActivatableTextProperties> {

    public constructor(props: GroupButtonProperties<ActivatableTextProperties>,) {
        super(props);
    }

    protected _getContent({text}: ActivatableTextProperties,) {
        return <TextComponent content={text}/>;
    }

}

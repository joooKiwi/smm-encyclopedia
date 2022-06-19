import './GroupImageButton.scss';

import type {ActivatableImageProperties} from './properties/ActivatableImageProperties';
import type {GroupButtonProperties}      from './properties/GroupButtonProperties';

import AbstractGroupButton from './AbstractGroupButton';
import Image               from '../images/Image';

/**
 * @reactComponent
 */
export default class GroupImageButton
    extends AbstractGroupButton<ActivatableImageProperties> {

    public constructor(props: GroupButtonProperties<ActivatableImageProperties>,) {
        super(props);
    }

    protected override _createContent({source, name,}: ActivatableImageProperties,) {
        return <Image className="btn-image" source={source} fallbackName={name}/>;
    }

}

import './GroupImageButton.scss';

import type {ActivatableImageProperties} from './properties/ActivatableImageProperties';
import type {GroupButtonProperties}      from './properties/GroupButtonProperties';

import AbstractGroupButton from './AbstractGroupButton';

/**
 * @reactComponent
 */
export default class GroupImageButton
    extends AbstractGroupButton<ActivatableImageProperties> {

    public constructor(props: GroupButtonProperties<ActivatableImageProperties>,) {
        super(props);
    }

    protected _getContent(image: ActivatableImageProperties,) {
        return <img className="btn-image" src={image.source} alt={image.name}/>;
    }

}

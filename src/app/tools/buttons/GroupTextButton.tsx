import type {ActivatableTextProperties} from './properties/ActivatableTextProperties'
import type {GroupButtonProperties}     from './properties/GroupButtonProperties'

import AbstractGroupButton from './AbstractGroupButton'
import TextComponent       from '../text/TextComponent'

/**
 * @reactComponent
 */
export default class GroupTextButton
    extends AbstractGroupButton<ActivatableTextProperties> {

    public constructor(props: GroupButtonProperties<ActivatableTextProperties>,) {
        super(props)
    }

    protected override _createContent({text}: ActivatableTextProperties,) {
        return <TextComponent content={text}/>
    }

}

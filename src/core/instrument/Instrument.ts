import type {Array} from '@joookiwi/type'

import type {Entity}       from 'core/entity/Entity'
import type {GameProperty} from 'core/entity/properties/game/GameProperty'
import type {NameTrait}    from 'lang/name/NameTrait'
import {TimeProperty}      from 'core/entity/properties/time/TimeProperty'

export interface Instrument
    extends NameTrait<string>,
        GameProperty,
        TimeProperty {

    get entities(): Array<Entity>

}

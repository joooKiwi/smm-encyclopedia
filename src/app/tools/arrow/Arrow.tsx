import './Arrow.scss'

import type {Arrows}          from 'app/tools/arrow/Arrows'
import type {ReactProperties} from 'util/react/ReactProperties'

interface SingleArrowProperties
    extends ReactProperties {

    readonly value: Arrows

}

/** @reactComponent */
export default function Arrow({value,}: SingleArrowProperties,) {
    return value.createArrow()
}

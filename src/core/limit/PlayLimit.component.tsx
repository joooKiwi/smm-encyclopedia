import type {SimpleLimitComponentProperties} from 'core/limit/Limit.component.types'

import LimitComponent from 'core/limit/Limit.component'

export default function PlayLimitComponent({reference,}: SimpleLimitComponentProperties,) {
    return <LimitComponent id={`play-${reference.englishNameInHtml}`} limits={reference.reference.toLimitWhilePlayingMap()} displayAcronymIfApplicable/>
}

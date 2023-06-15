import type {SimpleLimitComponentProperties} from 'core/entityLimit/Limit.component.types'

import LimitComponent from 'core/entityLimit/Limit.component'

export default function PlayLimitComponent({reference,}: SimpleLimitComponentProperties,) {
    return <LimitComponent id={`play-${reference.englishNameInHtml}`} limits={reference.reference.toLimitWhilePlayingMap()} displayAcronymIfApplicable/>
}

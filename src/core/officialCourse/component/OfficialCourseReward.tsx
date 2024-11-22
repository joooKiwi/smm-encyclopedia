import {mapByArray} from '@joookiwi/collection'

import type {OfficialCourses} from 'core/officialCourse/OfficialCourses'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface OfficialCourseRewardProperties
    extends ReactProperties {

    readonly reference: OfficialCourses

}

/** @reactComponent */
export default function OfficialCourseReward({reference,}: OfficialCourseRewardProperties,) {
    return <div className="officialCourse-reward">{mapByArray(reference.reference.reward, it =>
            <Image key={`Reward (${it.englishName})`} file={it.waitingImage[0]}/>
        ,)}</div>
}

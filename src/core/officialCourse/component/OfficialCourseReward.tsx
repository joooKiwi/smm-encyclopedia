import type {OfficialCourses} from 'core/officialCourse/OfficialCourses'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface OfficialCourseRewardProperties
    extends ReactProperties {

    readonly reference: OfficialCourses

}

/** @reactComponent */
export default function OfficialCourseReward({reference,}: OfficialCourseRewardProperties,) {
    return <div className="officialCourse-reward">{reference.reference.reward.map(it =>
            <Image key={`Reward (${it.englishName})`} file={it.waitingImage.getFirstOrNull()}/>
        ,)}</div>
}

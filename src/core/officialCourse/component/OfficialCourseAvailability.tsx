import type {OfficialCourses} from 'core/officialCourse/OfficialCourses'
import type {ReactProperties} from 'util/react/ReactProperties'

import SimpleDate          from 'lang/date/SimpleDate'
import {unfinishedText}    from 'app/tools/text/UnfinishedText'
import {UNKNOWN_REFERENCE} from 'util/commonVariables'

interface OfficialCourseAvailabilityProperties
    extends ReactProperties {

    readonly reference: OfficialCourses

}

/** @reactComponent */
export default function OfficialCourseAvailability({reference: {reference,},}: OfficialCourseAvailabilityProperties,) {
    const releaseDate = reference.releaseDate
    const removalDate = reference.removalDate

    if (removalDate == null)
        return <div className="officialCourse-availability officialCourse-availability-releaseToEndLife">
            <SimpleDate date={releaseDate}/>
            {unfinishedText(' to the game end-life',)}
        </div>
    if (removalDate === UNKNOWN_REFERENCE)
        return <div className="officialCourse-availability officialCourse-availabilityReleaseToUnknown">
            <SimpleDate date={releaseDate}/>
            {unfinishedText(' to an unknown date',)}
        </div>
    return <div className="officialCourse-availability officialCourse-availability-releaseToRemoval">
        <SimpleDate date={releaseDate}/>
        {unfinishedText(' to ',)}
        <SimpleDate date={removalDate}/>
    </div>
}

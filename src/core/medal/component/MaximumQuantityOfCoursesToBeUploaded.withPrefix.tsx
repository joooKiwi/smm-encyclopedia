import type {Medals}          from 'core/medal/Medals'
import type {ReactProperties} from 'util/react/ReactProperties'

import TextComponent                        from 'app/tools/text/TextComponent'
import {unfinishedText}                     from 'app/tools/text/UnfinishedText'
import TooltipComponent                     from 'bootstrap/tooltip/Tooltip.component'
import {OtherWordInTheGames}                from 'core/otherWordInTheGame/OtherWordInTheGames'
import MaximumQuantityOfCoursesToBeUploaded from 'core/medal/component/MaximumQuantityOfCoursesToBeUploaded'
import {ProjectLanguages}                   from 'lang/ProjectLanguages'
import {gameContentTranslation}             from 'lang/components/translationMethods'

import Companion = ProjectLanguages.Companion

//region -------------------- Import from deconstruction --------------------

const {COURSE,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

interface MaximumQuantityOfCoursesToBeUploadedWithPrefixProperties
    extends ReactProperties {

    readonly reference: Medals

}

/** @reactComponent */
export default function MaximumQuantityOfCoursesToBeUploadedWithPrefix({reference,}: MaximumQuantityOfCoursesToBeUploadedWithPrefixProperties,) {
    const currentLanguage = Companion.current
    const courses = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName.toLowerCase(),)

    return <TooltipComponent tooltip={gameContentTranslation('medal.xx courses to be uploaded', {number: reference.reference.maximumAmountAllowedToUploadALevel, courses: courses,},)}>
        <MaximumQuantityOfCoursesToBeUploaded reference={reference}/>
        <TextComponent content={`${currentLanguage.space}${courses}`} className="opacity-50"/>
    </TooltipComponent>
}

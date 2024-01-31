import './CourseTagApp.scss'

import type {CourseTagAppProperties}     from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {CourseTagTypes}             from 'app/property/CourseTagTypes'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ClassWithType}              from 'core/ClassWithType'
import type {CourseTags}                 from 'core/courseTag/CourseTags'
import type {ReactProperties}            from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import LinkButton                                   from 'app/tools/button/LinkButton'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {assert}                                     from 'util/utilitiesMethods'

class CourseTagAppInterpreter
    implements AppInterpreterWithCardList<CourseTags>,
        ClassWithType<CourseTagTypes> {

    //region -------------------- Fields --------------------

    readonly #type

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(type: CourseTagTypes,) {
        this.#type = type
    }

    //endregion -------------------- Constructor --------------------

    public get type(): CourseTagTypes {
        return this.#type
    }

    public get content() {
        return this.type.content
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 4,
            large: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent({reference: courseTag, englishName: name,}: CourseTags,) {
        return courseTag.firstAppearance == null ? null : <sub key={`${name} - first appearance`}>{courseTag.firstAppearance.simpleName}</sub>
        //TODO add Maker Central name
    }

    //endregion -------------------- Card list interpreter --------------------

}

const titleContent = gameContentTranslation('course tag.all', {
    course: OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName).toLowerCase(),
    courses: OtherWordInTheGames.COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.pluralEnglishName).toLowerCase(),
    tag: OtherWordInTheGames.TAG.singularLowerCaseNameOnReference,
    tags: OtherWordInTheGames.TAG.pluralLowerCaseNameOnReference,
},)

/** @reactComponent */
export default function CourseTagApp({viewDisplay, type,}: CourseTagAppProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The CourseTagApp only handle the "simple list" or "card list" as a possible view display.',)
    const appInterpreter = new CourseTagAppInterpreter(type,)
    const viewDisplayAndRouteName = [
        [ViewDisplays.SIMPLE_LIST, `${type.routeName} (list)`,],
        [ViewDisplays.CARD_LIST, `${type.routeName} (card)`,],
    ] as const satisfies readonly ViewAndRouteName[]

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="courseTag" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<CourseTagAsideContent type={type} viewDisplay={viewDisplay}/>}>
            <SimpleList reactKey="courseTag" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="courseTag" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             asideContent={<CourseTagAsideContent type={type} viewDisplay={viewDisplay}/>}>
        <CardList reactKey="courseTag" interpreter={appInterpreter}/>
    </SubMainContainer>
}


interface CourseTagAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly type: CourseTagTypes

}

/** @reactComponent */
function CourseTagAsideContent({viewDisplay, type,}: CourseTagAsideContentProperties,) {
    return <div id="courseTag-linkButtons-container" className="btn-group-vertical btn-group-sm">
        <LinkButton partialId="everyCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.allRouteName)} color={type.allColor}>{contentTranslation('All')}</LinkButton>
        <div id="courseTag-linkButton-officialAndUnofficial-container" className="btn-group btn-group-sm">
            <LinkButton partialId="officialCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.officialRouteName)} color={type.officialColor}>{contentTranslation('Official.Yes')}</LinkButton>
            <LinkButton partialId="unofficialCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.unofficialRouteName)} color={type.unofficialColor}>{contentTranslation('Official.No')}</LinkButton>
        </div>
        <LinkButton partialId="makerCentralCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.makerCentralRouteName)} color={type.makerCentralColor}>Maker Central</LinkButton>
    </div>
}

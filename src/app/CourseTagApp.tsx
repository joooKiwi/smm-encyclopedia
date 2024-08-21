import './CourseTagApp.scss'

import {Link} from 'react-router-dom'

import type {CourseTagAppProperties}     from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ClassWithType}              from 'core/ClassWithType'
import type {CourseTags}                 from 'core/courseTag/CourseTags'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'
import type {ReactProperties}            from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import LinkButton                                   from 'app/tools/button/LinkButton'
import {CourseTagTypes}                             from 'app/property/CourseTagTypes'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import LinkText                                     from 'app/tools/text/LinkText'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {MAKER_CENTRAL_LEVEL_LINK}                   from 'external/MakerCentralLinks'
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

/** @reactComponent */
export default function CourseTagApp({viewDisplay, type,}: CourseTagAppProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The CourseTagApp only handle the "simple list" or "card list" as a possible view display.',)

    const course = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,).toLowerCase()
    const courses = OtherWordInTheGames.COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.pluralEnglishName,).toLowerCase()
    const tag = OtherWordInTheGames.TAG.singularLowerCaseNameOnReference
    const tags = OtherWordInTheGames.TAG.pluralLowerCaseNameOnReference

    const viewDisplayAndRouteName = [
        [ViewDisplays.SIMPLE_LIST, `${type.routeName} (list)`,],
        [ViewDisplays.CARD_LIST, `${type.routeName} (card)`,],
    ] as const satisfies readonly ViewAndRouteName[]

    return <SubMainContainer reactKey="courseTag" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('course tag.all', {
                                 course: course, courses: courses,
                                 tag: tag, tags: tags,
                             },)}
                             description={<CourseTagDescription type={type} viewDisplay={viewDisplay}/>}
                             asideContent={<CourseTagAsideContent viewDisplay={viewDisplay} type={type}/>}>
        <SubContent viewDisplay={viewDisplay} type={type}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, type,}:CourseTagAppProperties,) {
    const appInterpreter = new CourseTagAppInterpreter(type,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="courseTag" interpreter={appInterpreter}/>
    return <CardList reactKey="courseTag" interpreter={appInterpreter}/>
}

//region -------------------- Description content --------------------

interface CourseTagDescriptionProperties
    extends ReactProperties {

    readonly type: CourseTagTypes

    readonly viewDisplay: ViewDisplays

}

/** @reactComponent */
function CourseTagDescription({viewDisplay, type,}: CourseTagDescriptionProperties,) {
    const course = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,).toLowerCase()
    const courses = OtherWordInTheGames.COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.pluralEnglishName,).toLowerCase()
    const tag = OtherWordInTheGames.TAG.singularLowerCaseNameOnReference
    const tags = OtherWordInTheGames.TAG.pluralLowerCaseNameOnReference

    const officialLink = type === CourseTagTypes.OFFICIAL ? null : viewDisplay.getRoutePathAsListOnly(type.officialRouteName,)
    const unofficialLink = type === CourseTagTypes.UNOFFICIAL ? null : viewDisplay.getRoutePathAsListOnly(type.unofficialRouteName,)
    const makerCentralLink = type === CourseTagTypes.MAKER_CENTRAL ? null : viewDisplay.getRoutePathAsListOnly(type.makerCentralRouteName,)

    const routeName = type.routeName
    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : `${routeName} (list)` satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : `${routeName} (card)` satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation(`course tag.description.intro page (${type.type})`, {
                official: <b key="official (singular)">{contentTranslation('Official.singular',).toLowerCase()}</b>,
                officials: <b key="official (plural)">{contentTranslation('Official.plural',).toLowerCase()}</b>,
                unofficial: <b key="unofficial (singular)">{contentTranslation('Unofficial.singular',).toLowerCase()}</b>,
                unofficials: <b key="unofficial (plural)">{contentTranslation('Unofficial.plural',).toLowerCase()}</b>,
                MakerCentralLink: <Link key="Maker Central link" to={MAKER_CENTRAL_LEVEL_LINK} id="makerCentralLink" className="link-primary fw-bold">Maker Central</Link>,
                course: course, courses: courses,
                tag: tag, tags: tags,
                smm2Image: <GameImage reference={Games.SUPER_MARIO_MAKER_2}/>,
            },)}
            {gameContentTranslation('course tag.description.intro references', {
                course: course, courses: courses,
                officialLink: <LinkText key="official link (singular)" partialId="officialLink" routeName={officialLink} color="primary">{contentTranslation('Official.singular',).toLowerCase()}</LinkText>,
                officialsLink: <LinkText key="official link (plural)" partialId="officialLink" routeName={officialLink} color="primary">{contentTranslation('Official.plural',).toLowerCase()}</LinkText>,
                unofficialLink: <LinkText key="unofficial link (singular)" partialId="unofficialLink" routeName={unofficialLink} color="primary">{contentTranslation('Unofficial.singular',).toLowerCase()}</LinkText>,
                unofficialsLink: <LinkText key="unofficial link (plural)" partialId="unofficialLink" routeName={unofficialLink} color="primary">{contentTranslation('Unofficial.plural',).toLowerCase()}</LinkText>,
                MakerCentralLink: <LinkText key="Maker Central link" partialId="makerCentralLink" routeName={makerCentralLink} color="primary">Maker Central</LinkText>,
            },)}
        </p>
        <p>{gameContentTranslation('course tag.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface CourseTagAsideContentProperties
    extends ReactProperties {

    readonly type: CourseTagTypes

    readonly viewDisplay: ViewDisplays

}

/** @reactComponent */
function CourseTagAsideContent({viewDisplay, type,}: CourseTagAsideContentProperties,) {
    return <div id="courseTag-linkButtons-container" className="btn-group-vertical btn-group-sm">
        <LinkButton partialId="everyCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.allRouteName,)} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="courseTag-linkButton-officialAndUnofficial-container" className="btn-group btn-group-sm">
            <LinkButton partialId="officialCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.officialRouteName,)} color={type.officialColor}>{contentTranslation('Official.singular',)}</LinkButton>
            <LinkButton partialId="unofficialCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.unofficialRouteName,)} color={type.unofficialColor}>{contentTranslation('Unofficial.singular',)}</LinkButton>
        </div>
        <LinkButton partialId="makerCentralCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.makerCentralRouteName,)} color={type.makerCentralColor}>Maker Central</LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------

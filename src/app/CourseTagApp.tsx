import './CourseTagApp.scss'

import type {Array, NullOrString} from '@joookiwi/type'
import type {CollectionHolder}    from '@joookiwi/collection'
import {GenericCollectionHolder}  from '@joookiwi/collection'
import {Link}                     from 'react-router-dom'

import type {CourseTagAppProperties}  from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {CourseTags}              from 'core/courseTag/CourseTags'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {CourseTagAppOption}                         from 'app/options/CourseTagAppOption'
import {CourseTagTypes}                             from 'app/property/CourseTagTypes'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import LinkText                                     from 'app/tools/text/LinkText'
import List                                         from 'app/util/List'
import CardList                                     from 'app/withInterpreter/CardList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import FirstAppearance                              from 'core/courseTag/component/FirstAppearance'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {MAKER_CENTRAL_LEVEL_LINK}                   from 'external/MakerCentralLinks'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'

import SMM2 = Games.SMM2

class CourseTagAppInterpreter
    implements AppInterpreterWithTable<CourseTags> {

    //region -------------------- Fields --------------------

    readonly #type

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(type: CourseTagTypes,) {
        this.#type = type
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return new GenericCollectionHolder(this.#type.content,)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            medium: 4,
            large: 6,
        } as const satisfies DimensionOnList
    }

    public createCardListContent({reference,}: CourseTags,) {
        return <FirstAppearance reference={reference}/>
        //TODO add Maker Central name
    }

    //endregion -------------------- Card  --------------------

}

const options = [CourseTagAppOption.NAME, CourseTagAppOption.FIRST_APPEARANCE,] as const

/** @reactComponent */
export default function CourseTagApp({viewDisplay, type,}: CourseTagAppProperties,) {
    const course = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,).toLowerCase()
    const courses = OtherWordInTheGames.COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.pluralEnglishName,).toLowerCase()
    const tag = OtherWordInTheGames.TAG.singularLowerCaseNameOnReference
    const tags = OtherWordInTheGames.TAG.pluralLowerCaseNameOnReference

    const viewDisplayAndRouteName = [
        [ViewDisplays.SIMPLE_LIST, `${type.routeName} (list)`,],
        [ViewDisplays.CARD_LIST, `${type.routeName} (card)`,],
        [ViewDisplays.TABLE, `${type.routeName} (table)`,],
    ] as const satisfies Array<ViewAndRouteName>

    return <SubMainContainer reactKey="courseTag" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('course tag.all', {
                                 course: course, courses: courses,
                                 tag: tag, tags: tags,
                             },)}
                             description={<CourseTagDescription type={type} viewDisplay={viewDisplay}/>}
                             asideContent={<CourseTagAsideContent type={type}/>}>
        <SubContent viewDisplay={viewDisplay} type={type}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, type,}: CourseTagAppProperties,) {
    const appInterpreter = new CourseTagAppInterpreter(type,)
    const items = appInterpreter.content

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <CourseTagList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="courseTag" interpreter={appInterpreter}/>
    return <Table id="courseTag-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    const {COURSE, TAG,} = OtherWordInTheGames
    const course = COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,).toLowerCase()
    const courses = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName,).toLowerCase()
    const tag = TAG.singularLowerCaseNameOnReference
    const tags = TAG.pluralLowerCaseNameOnReference

    return gameContentTranslation('course tag.all', {
        course: course, courses: courses,
        tag: tag, tags: tags,
    },)
}

//region -------------------- List --------------------

interface CourseTag_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<CourseTags>

}

/** @reactComponent */
function CourseTagList({items,}: CourseTag_ListProperties,) {
    return <List partialId="courseTag" items={items}>{({reference,},) =>
        <div className="d-flex">
            <NameComponent id="courseTag-name" name={reference} popoverOrientation="top"/>
            <FirstAppearance reference={reference}/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------
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

    const officialLink = type === CourseTagTypes.OFFICIAL ? null : type.officialRouteName satisfies NullOrString<PossibleRouteName>
    const unofficialLink = type === CourseTagTypes.UNOFFICIAL ? null : type.unofficialRouteName satisfies NullOrString<PossibleRouteName>
    const makerCentralLink = type === CourseTagTypes.MAKER_CENTRAL ? null : type.makerCentralRouteName satisfies NullOrString<PossibleRouteName>

    const routeName = type.routeName
    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : `${routeName} (list)` satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : `${routeName} (card)` satisfies PossibleRouteName
    const tableLink = viewDisplay === ViewDisplays.TABLE ? null : `${routeName} (table)` satisfies PossibleRouteName

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
                smm2Image: <GameImage key="smm2 image" reference={SMM2}/>,
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
            tableLink: <LinkText key="tableLink" partialId="tableLink" routeName={tableLink} color="primary">{contentTranslation('view type.table.singular',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface CourseTagAsideContentProperties
    extends ReactProperties {

    readonly type: CourseTagTypes

}

/** @reactComponent */
function CourseTagAsideContent({type,}: CourseTagAsideContentProperties,) {
    return <div id="courseTag-linkButtons-container" className="btn-group-vertical btn-group-sm">
        <LinkButton partialId="everyCourseTag" routeName={type.allRouteName} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="courseTag-linkButton-officialAndUnofficial-container" className="btn-group btn-group-sm">
            <LinkButton partialId="officialCourseTag" routeName={type.officialRouteName} color={type.officialColor}>{contentTranslation('Official.singular',)}</LinkButton>
            <LinkButton partialId="unofficialCourseTag" routeName={type.unofficialRouteName} color={type.unofficialColor}>{contentTranslation('Unofficial.singular',)}</LinkButton>
        </div>
        <LinkButton partialId="makerCentralCourseTag" routeName={type.makerCentralRouteName} color={type.makerCentralColor}>Maker Central</LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------

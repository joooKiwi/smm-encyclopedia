import './CourseTagApp.scss'

import type {CourseTagAppProperties}                               from 'app/AppProperties.types'
import type {AppInterpreterWithCardList,}                          from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ClassWithType}                                        from 'core/ClassWithType'
import type {CourseTags}                                           from 'core/courseTag/CourseTags'
import type {EveryPossibleRouteNames}                              from 'routes/everyRoutes.types'
import type {NullOr}                                               from 'util/types/nullable'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {CourseTagTypes}                             from 'app/property/CourseTagTypes'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import LinkButton                                   from 'app/tools/button/LinkButton'
import {AbstractCardListApp}                        from 'app/withInterpreter/AbstractCardListApp'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {TAG, COURSE,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

export default class CourseTagApp
    extends AbstractCardListApp<AppInterpreterWithCardList<CourseTags>, CourseTagAppProperties>
    implements ClassWithType<CourseTagTypes> {

    //region -------------------- Fields --------------------

    #type?: CourseTagTypes

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    public get type(): CourseTagTypes {
        return this.#type ??= CourseTagTypes.getValueByType(this.props.type)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'courseTag'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return `${this.type.routeName} (list)`
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return `${this.type.routeName} (card)`
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('course tag.all', {
            course: COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName).toLowerCase(),
            courses: COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName).toLowerCase(),
            tag: TAG.singularLowerCaseNameOnReference,
            tags: TAG.pluralLowerCaseNameOnReference,
        },)
    }

    protected override _createAsideContent(): NullOr<ReactElementOrString> {
        const {type, typeDisplayed,} = this

        return <div id="courseTag-linkButtons-container" className="btn-group-vertical btn-group-sm">
            <LinkButton partialId="everyCourseTag" routeName={typeDisplayed.getRoutePathAsListOnly(type.allRouteName)} color={type.allColor}>{contentTranslation('All')}</LinkButton>
            <div id="courseTag-linkButton-officialAndUnofficial-container" className="btn-group btn-group-sm">
                <LinkButton partialId="officialCourseTag" routeName={typeDisplayed.getRoutePathAsListOnly(type.officialRouteName)} color={type.officialColor}>{contentTranslation('Official.Yes')}</LinkButton>
                <LinkButton partialId="unofficialCourseTag" routeName={typeDisplayed.getRoutePathAsListOnly(type.unofficialRouteName)} color={type.unofficialColor}>{contentTranslation('Official.No')}</LinkButton>
            </div>
            <LinkButton partialId="makerCentralCourseTag" routeName={typeDisplayed.getRoutePathAsListOnly(type.makerCentralRouteName)} color={type.makerCentralColor}>Maker Central</LinkButton>
        </div>
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithCardList<CourseTags> {
        const $this = this

        return new class implements AppInterpreterWithCardList<CourseTags> {

            public get iterable() {
                return $this.type.iterator
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent({reference: courseTag, englishName: name,}: CourseTags,) {
                return courseTag.firstAppearance == null ? null : <sub key={`${name} - first appearance`}>{courseTag.firstAppearance.simpleName}</sub>
                //TODO add Maker Central name
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}

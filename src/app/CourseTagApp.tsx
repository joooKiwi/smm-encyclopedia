import './CourseTagApp.scss'

import type {CourseTagAppProperties}      from 'app/AppProperties.types'
import type {AppInterpreterWithCardList,} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}             from 'app/interpreter/DimensionOnList'
import type {CourseTagTypes}              from 'app/property/CourseTagTypes'
import type {ClassWithType}               from 'core/ClassWithType'
import type {CourseTags}                  from 'core/courseTag/CourseTags'
import type {PossibleRouteName}           from 'route/EveryRoutes.types'

import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import LinkButton                                   from 'app/tools/button/LinkButton'
import {AbstractCardListApp}                        from 'app/withInterpreter/AbstractCardListApp'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {TAG, COURSE,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

export default class CourseTagApp
    extends AbstractCardListApp<CourseTags, AppInterpreterWithCardList<CourseTags>, CourseTagAppProperties>
    implements ClassWithType<CourseTagTypes> {

    //region -------------------- Getter methods --------------------

    public get type(): CourseTagTypes {
        return this.props.type
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'courseTag'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return `${this.type.routeName} (list)`
    }

    protected override _createCardListRouteName(): PossibleRouteName {
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
        const {type, viewDisplay,} = this

        return <div id="courseTag-linkButtons-container" className="btn-group-vertical btn-group-sm">
            <LinkButton partialId="everyCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.allRouteName)} color={type.allColor}>{contentTranslation('All')}</LinkButton>
            <div id="courseTag-linkButton-officialAndUnofficial-container" className="btn-group btn-group-sm">
                <LinkButton partialId="officialCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.officialRouteName)} color={type.officialColor}>{contentTranslation('Official.Yes')}</LinkButton>
                <LinkButton partialId="unofficialCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.unofficialRouteName)} color={type.unofficialColor}>{contentTranslation('Official.No')}</LinkButton>
            </div>
            <LinkButton partialId="makerCentralCourseTag" routeName={viewDisplay.getRoutePathAsListOnly(type.makerCentralRouteName)} color={type.makerCentralColor}>Maker Central</LinkButton>
        </div>
    }

    protected override _createAppOptionInterpreter() {
        const $this = this

        return new class CourseTagAppInterpreter implements AppInterpreterWithCardList<CourseTags> {

            public get content() {
                return $this.type.content
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

        }()
    }

    //endregion -------------------- Create methods --------------------

}

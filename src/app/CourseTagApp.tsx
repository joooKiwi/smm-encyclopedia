import './CourseTagApp.scss'

import type {CourseTagAppProperties}                               from 'app/AppProperties.types'
import type {AppInterpreterWithCardList,}                          from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ClassWithType}                                        from 'core/ClassWithType'
import type {NullOr}                                               from 'util/types/nullable'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {CourseTagTypes}         from 'app/property/CourseTagTypes'
import UnfinishedText           from 'app/tools/text/UnfinishedText'
import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {CourseTags}                                 from 'core/courseTag/CourseTags'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import LinkButton                                   from 'app/tools/button/LinkButton'

export default class CourseTagApp
    extends AbstractCardListApp<AppInterpreterWithCardList<CourseTags>, CourseTagAppProperties>
    implements ClassWithType<CourseTagTypes> {

    //region -------------------- Fields --------------------

    #type?: CourseTagTypes

    //endregion -------------------- Fields --------------------

    public constructor(props: CourseTagAppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.CARD_LIST,
        }
    }

    //region -------------------- Getter methods --------------------

    public get type(): CourseTagTypes {
        return this.#type ??= CourseTagTypes.getValueByType(this.props.type)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'courseTag'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('course tag.all', {
            course: <UnfinishedText key="every course tag (lowercase course)">course</UnfinishedText>,//TODO add course reference
            tags: <UnfinishedText key="every course tag (plural lowercase tag)">tags</UnfinishedText>,//TODO add tag reference
        },)
    }

    protected override _createAsideContent(): NullOr<ReactElementOrString> {
        const type = this.type

        return <div id="courseTag-linkButtons-container" className="btn-group-vertical btn-group-sm">
            <LinkButton partialId="everyCourseTag" routeName={type.allRouteName} color={type.allColor}>{contentTranslation('All')}</LinkButton>
            <div id="courseTag-linkButton-officialAndUnofficial-container" className="btn-group btn-group-sm">
                <LinkButton partialId="officialCourseTag" routeName={type.officialRouteName} color={type.officialColor}>{contentTranslation('Official.Yes')}</LinkButton>
                <LinkButton partialId="unofficialCourseTag" routeName={type.unofficialRouteName} color={type.unofficialColor}>{contentTranslation('Official.No')}</LinkButton>
            </div>
            <LinkButton partialId="makerCentralCourseTag" routeName={type.makerCentralRouteName} color={type.makerCentralColor}>Maker Central</LinkButton>
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

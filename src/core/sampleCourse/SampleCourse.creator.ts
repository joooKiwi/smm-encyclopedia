import type {SampleCourseTemplate} from 'core/sampleCourse/SampleCourse.template'
import type {SampleCourse}         from 'core/sampleCourse/SampleCourse'
import type {Name}                 from 'lang/name/Name'

import {TemplateWithNameCreator} from 'core/_template/TemplateWithName.creator'
import {SampleCourseContainer}   from 'core/sampleCourse/SampleCourse.container'
import {GameStyles}              from 'core/gameStyle/GameStyles'
import {Themes}                  from 'core/theme/Themes'

export class SampleCourseCreator
    extends TemplateWithNameCreator<SampleCourseTemplate, SampleCourse> {

    constructor(template: SampleCourseTemplate,) {
        super(template, 1, false,)
    }

    protected override _create(name: Name<string>,): SampleCourse {
        const template = this.template
        const subArea = template.courseThemeArea.sub

        return new SampleCourseContainer(
            name,
            template.numbers.world,
            template.numbers.first,
            GameStyles.CompanionEnum.get.getValueByAcronym(template.gameStyle,),
            Themes.CompanionEnum.get.getValueByName(template.courseThemeArea.main,),
            subArea == null ? null : Themes.CompanionEnum.get.getValueByName(subArea,),
            template.amountOfTime,
        )
    }

}

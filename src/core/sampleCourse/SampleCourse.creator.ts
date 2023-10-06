import type {SampleCourseTemplate} from 'core/sampleCourse/SampleCourse.template'
import type {SampleCourse}         from 'core/sampleCourse/SampleCourse'

import {SampleCourseContainer} from 'core/sampleCourse/SampleCourse.container'
import {GameStyles}            from 'core/gameStyle/GameStyles'
import {Themes}                from 'core/theme/Themes'
import {NameBuilderContainer}  from 'lang/name/Name.builder.container'


export function createContent(template: SampleCourseTemplate,): SampleCourse {
    const subArea = template.courseThemeArea.sub

    return new SampleCourseContainer(
        new NameBuilderContainer(template.name, 1, false,).build(),
        template.numbers.world,
        template.numbers.first,
        GameStyles.CompanionEnum.get.getValueByAcronym(template.gameStyle,),
        Themes.CompanionEnum.get.getValueByName(template.courseThemeArea.main,),
        subArea == null ? null : Themes.CompanionEnum.get.getValueByName(subArea,),
        template.amountOfTime,
    )
}

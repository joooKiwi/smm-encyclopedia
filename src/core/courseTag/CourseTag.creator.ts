import type {Lazy}        from '@joookiwi/lazy'
import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {CourseTag}                                              from 'core/courseTag/CourseTag'
import type {CourseTagTemplate, PossibleFirstAppearanceInMarioMaker} from 'core/courseTag/CourseTag.template'

import {CourseTagContainer}   from 'core/courseTag/CourseTag.container'
import {Versions}             from 'core/version/Versions'
import {NameBuilderContainer} from 'lang/name/Name.builder.container'

export function createContent(template: CourseTagTemplate,): CourseTag {
    const templateName = template.name
    return new CourseTagContainer(
        new NameBuilderContainer(templateName, 2, false,).build(),
        template.isOfficial,
        templateName.makerCentral,
        getFirstAppearance(template.firstAppearance,)
    )
}

/**
 * Get the version dependent on {@link CourseTagTemplate.firstAppearance} or null if not found.
 *
 * @param value
 */
function getFirstAppearance(value: PossibleFirstAppearanceInMarioMaker,): Lazy<NullOr<Versions>> {
    if (value == null)
        return CommonLazy.NULL
    return lazy(() => Versions.CompanionEnum.get.getValueByName(value,),)
}

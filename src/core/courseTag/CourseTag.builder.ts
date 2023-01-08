import type {CourseTag}                       from 'core/courseTag/CourseTag'
import type {CourseTagTemplate, NameTemplate} from 'core/courseTag/CourseTag.template'
import type {PossibleMakerCentralName}        from 'core/courseTag/CourseTags.types'
import type {Name}                            from 'lang/name/Name'
import type {Builder}                         from 'util/builder/Builder'
import type {ObjectHolder}                    from 'util/holder/ObjectHolder'
import type {NullOr}                          from 'util/types/nullable'

import {TemplateWithNameBuilder}      from 'core/_template/TemplateWithName.builder'
import {CourseTagContainer}           from 'core/courseTag/CourseTag.container'
import {Versions}                     from 'core/version/Versions'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'
import {ObjectHolders}                from 'util/holder/ObjectHolders'

export class CourseTagBuilder
    extends TemplateWithNameBuilder<CourseTagTemplate, CourseTag>
    implements Builder<CourseTag> {

    public constructor(templateBuilder: Builder<CourseTagTemplate>,) {
        super(templateBuilder, 2, false,)
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return CourseTagBuilder
    }


    static #getMakerCentralName({makerCentral,}: NameTemplate,): ObjectHolder<NullOr<PossibleMakerCentralName>> {
        return makerCentral == null
            ? ObjectHolders.NULL
            : new DelayedObjectHolderContainer(() => makerCentral)
    }

    /**
     * Get the version dependent on {@link CourseTagTemplate.firstAppearance} or null if not found.
     *
     * @param template
     */
    static #getFirstAppearance({firstAppearance,}: CourseTagTemplate,): ObjectHolder<NullOr<Versions>> {
        return firstAppearance == null
            ? ObjectHolders.NULL
            : new DelayedObjectHolderContainer(() => Versions.getValueByName(firstAppearance))
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _build(name: Name<string>,): CourseTag {
        const template = this.template

        return new CourseTagContainer(
            name,
            template.isOfficial,
            CourseTagBuilder.#getMakerCentralName(template.name),
            CourseTagBuilder.#getFirstAppearance(template),
        )
    }

}

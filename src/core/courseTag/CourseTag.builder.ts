import type {Builder}                         from '../../util/builder/Builder';
import type {CourseTag}                       from './CourseTag';
import type {CourseTagTemplate, NameTemplate} from './CourseTag.template';
import type {Name}                            from '../../lang/name/Name';
import type {ObjectHolder}                    from '../../util/holder/ObjectHolder';
import type {PossibleMakerCentralName}        from './CourseTags.types';

import {CourseTagContainer}           from './CourseTag.container';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container';
import {Games}                        from '../game/Games';
import {ObjectHolders}                from '../../util/holder/objectHolders';
import {TemplateWithNameBuilder}      from '../_template/TemplateWithName.builder';
import {Versions}                     from '../version/Versions';

export class CourseTagBuilder
    extends TemplateWithNameBuilder<CourseTagTemplate, CourseTag>
    implements Builder<CourseTag> {

    public constructor(templateBuilder: Builder<CourseTagTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, false,);
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return CourseTagBuilder;
    }


    static #getMakerCentralName({makerCentral,}: NameTemplate,): ObjectHolder<| PossibleMakerCentralName | null> {
        return makerCentral == null
            ? ObjectHolders.NULL
            : new DelayedObjectHolderContainer(() => makerCentral);
    }

    /**
     * Get the version dependent on {@link CourseTagTemplate.firstAppearance} or null if not found.
     *
     * @param template
     */
    static #getFirstAppearance({firstAppearance,}: CourseTagTemplate,): ObjectHolder<| Versions | null> {
        return firstAppearance == null
            ? ObjectHolders.NULL
            : new DelayedObjectHolderContainer(() => Versions.getValue(firstAppearance));
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _build(name: Name<string>,): CourseTag {
        const template = this.template;

        return new CourseTagContainer(
            name,
            template.isOfficial,
            CourseTagBuilder.#getMakerCentralName(template.name),
            CourseTagBuilder.#getFirstAppearance(template),
        );
    }

}

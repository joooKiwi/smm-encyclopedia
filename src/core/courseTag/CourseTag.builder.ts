import type {Builder}           from '../../util/builder/Builder';
import type {CourseTag}         from './CourseTag';
import type {CourseTagTemplate} from './CourseTag.template';
import type {Name}              from '../../lang/name/Name';
import type {ObjectHolder}      from '../../util/holder/ObjectHolder';

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

    protected get _static() {
        return CourseTagBuilder;
    }


    private static __getFirstAppearance({firstAppearance,}: CourseTagTemplate,): ObjectHolder<| Versions | null> {
        return firstAppearance == null
            ? ObjectHolders.NULL
            : new DelayedObjectHolderContainer(() => Versions.getValue(`v${firstAppearance}`));
    }

    //endregion -------------------- Build helper methods --------------------

    protected _build(name: Name<string>,): CourseTag {
        const template = this.template;

        return new CourseTagContainer(
            name,
            template.isOfficial,
            CourseTagBuilder.__getFirstAppearance(template),
        );
    }

}

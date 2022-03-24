import type {Builder}                    from '../../util/builder/Builder';
import type {MiiCostume}                 from './MiiCostume';
import type {MiiCostumeTemplate}         from './MiiCostume.template';
import type {Name}                       from '../../lang/name/Name';
import type {ObjectHolder}               from '../../util/holder/ObjectHolder';
import type {OfficialNotificationHolder} from '../officialNotification/holder/OfficialNotificationHolder';

import {Games}                               from '../game/Games';
import {DelayedObjectHolderContainer}        from '../../util/holder/DelayedObjectHolder.container';
import {MiiCostumeCategories}                from '../miiCostumeCategory/MiiCostumeCategories';
import {MiiCostumeContainer}                 from './MiiCostume.container';
import {ObjectHolders}                       from '../../util/holder/objectHolders';
import {TemplateWithNameBuilder}             from '../_template/TemplateWithName.builder';
import {Versions}                            from '../version/Versions';
import {MiiCostumeCategory}                  from '../miiCostumeCategory/MiiCostumeCategory';
import {OfficialNotificationHolderContainer} from '../officialNotification/holder/OfficialNotificationHolder.container';
import {OfficialNotifications}               from '../officialNotification/OfficialNotifications';
import {ObjectHolderContainer}               from '../../util/holder/ObjectHolder.container';
import {EmptyOfficialNotificationHolder}     from '../officialNotification/holder/EmptyOfficialNotificationHolder';

export class MiiCostumeBuilder
    extends TemplateWithNameBuilder<MiiCostumeTemplate, MiiCostume> {

    //region -------------------- Attributes --------------------

    static #CONTAIN_NUMBER_REGEX = /\d/;
    static #NUMBER_ONLY_REGEX = /^\d+$/;
    static #OFFICIAL_NOTIFICATION_SEPARATOR = ' ';
    static #NULL_OFFICIAL_NOTIFICATION = new ObjectHolderContainer(EmptyOfficialNotificationHolder.get);

    //endregion -------------------- Attributes --------------------

    public constructor(templateBuilder_or_template: Builder<MiiCostumeTemplate>,) {
        super(templateBuilder_or_template, Games.SUPER_MARIO_MAKER_2, true,);
    }

    //region -------------------- Build helper methods --------------------

    protected get _static() {
        return MiiCostumeBuilder;
    }


    private static __createOfficialNotification({officialNotification: officialNotificationName,}: MiiCostumeTemplate,): ObjectHolder<OfficialNotificationHolder> {
        return officialNotificationName == null
            ? this.#NULL_OFFICIAL_NOTIFICATION
            : new DelayedObjectHolderContainer(() => {
                const officialNotification = OfficialNotifications.getValue(officialNotificationName);
                const englishName = officialNotification.englishName;

                const lastCharacter = englishName.charAt(englishName.length - 1,);
                if (lastCharacter === '1' || lastCharacter === '2')
                    return OfficialNotificationHolderContainer.get(officialNotificationName, officialNotification,);//Official notification = "Receive a lot of feedback"

                const numberFoundInOfficialNotification = Number(officialNotificationName.split(this.#OFFICIAL_NOTIFICATION_SEPARATOR).find(value => this.#NUMBER_ONLY_REGEX.test(value)) ?? -1);

                if (!this.#CONTAIN_NUMBER_REGEX.test(officialNotificationName)) {
                    if (numberFoundInOfficialNotification === 1)
                        return OfficialNotificationHolderContainer.get(officialNotificationName, officialNotification, numberFoundInOfficialNotification,);//Official notification = notification that is specified to 1

                    return OfficialNotificationHolderContainer.get(officialNotificationName, officialNotification,);//Official notification = notification that is specified to #
                }

                if (englishName === officialNotificationName)
                    return OfficialNotificationHolderContainer.get(officialNotificationName, officialNotification,);//Official notification = notification without any number

                return OfficialNotificationHolderContainer.get(officialNotificationName, officialNotification, numberFoundInOfficialNotification,);
            });
    }

    private static __createVersion({version,}: MiiCostumeTemplate,): ObjectHolder<Versions | null> {
        return version == null
            ? ObjectHolders.NULL
            : new DelayedObjectHolderContainer(() => Versions.getValue(version));
    }

    private static __createCategory({category,}: MiiCostumeTemplate,): ObjectHolder<MiiCostumeCategory> {
        return new DelayedObjectHolderContainer(() => MiiCostumeCategories.getValue(category).reference);
    }

    //endregion -------------------- Build helper methods --------------------

    public _build(name: Name<string>,): MiiCostume {
        const template = this.template;

        return new MiiCostumeContainer(name,
            MiiCostumeBuilder.__createOfficialNotification(template,),
            MiiCostumeBuilder.__createVersion(template,),
            MiiCostumeBuilder.__createCategory(template,)
        );
    }

}
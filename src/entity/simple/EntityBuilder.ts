import type {Builder}                                                                                                       from '../../util/Builder';
import type {CustomLimitReceived, EditorLimitReceived, GeneralLimitReceived, PowerUpLimitReceived, ProjectileLimitReceived} from '../properties/limit/LimitProperty.types';
import type {DebugEntityReferences}                                                                                         from './EntityLoader';
import type {Entity}                                                                                                        from './Entity';
import type {EntityCategory}                                                                                                from '../category/EntityCategory';
import type {EntityLink}                                                                                                    from '../entityTypes';
import type {EntityTemplate}                                                                                                from './Entity.template';

import {EntityLimits}                         from '../limit/EntityLimits';
import {EntityReferencesContainer}            from '../properties/EntityReferencesContainer';
import {EmptyEntity}                          from './EmptyEntity';
import {EmptyEntityCategory}                  from '../category/EmptyEntityCategory';
import {ExclusiveSM3DWGenericEntity}          from './ExclusiveSM3DWGenericEntity';
import {ExclusiveSMM1GenericEntity}           from './ExclusiveSMM1GenericEntity';
import {ExclusiveSMM2GenericEntityInAnyStyle} from './ExclusiveSMM2GenericEntityInAnyStyle';
import {GenericEntity}                        from './GenericEntity';
import {PropertyContainer}                    from '../properties/PropertyContainer';
import {NameBuilder}                          from '../lang/NameBuilder';

export class EntityBuilder
    implements Builder<Entity> {

    //region ---------- external object references ----------

    public static references: Map<string, DebugEntityReferences>;
    public static categoriesMap: Map<string, EntityCategory>;

    //endregion ---------- external object references ----------
    //region -------------------- Attributes --------------------

    public static readonly EMPTY_ENTITY_CALLBACK = () => EmptyEntity.get;

    readonly #template;
    readonly #selfCallback = () => this.build();

    //endregion -------------------- Attributes --------------------

    public constructor(template: EntityTemplate,) {
        this.#template = template;
    }


    //region -------------------- Build helper methods --------------------

    public get template() {
        return this.#template;
    }


    private __createName() {
        return new NameBuilder(this.template.name).build();
    }

    private __getEntityCategory() {
        const category = this.template.properties.categoryInTheEditor;
        return category === null ? EmptyEntityCategory.get : EntityBuilder.categoriesMap.get(category)!;
    }


    private __createIsInProperty(): [boolean, boolean,
        boolean, boolean, boolean, boolean, | boolean | null,
        boolean, boolean, boolean, | boolean | null, | boolean | null, | boolean | null, | boolean | null, boolean, boolean, boolean,
        boolean, | boolean | null,] {
        const isIn = this.template.properties.isIn;

        return [
            isIn.game['1'], isIn.game['2'],
            isIn.style.superMarioBros, isIn.style.superMarioBros3, isIn.style.superMarioWorld, isIn.style.newSuperMarioBrosU, isIn.style.superMario3DWorld,
            isIn.theme.ground, isIn.theme.underground, isIn.theme.underwater, isIn.theme.desert, isIn.theme.snow, isIn.theme.sky, isIn.theme.forest, isIn.theme.ghostHouse, isIn.theme.airship, isIn.theme.castle,
            isIn.time.day, isIn.time.night,
        ];

    }

    private __createLimitProperty(): [EditorLimitReceived, GeneralLimitReceived, PowerUpLimitReceived, ProjectileLimitReceived, CustomLimitReceived,] {
        const limits = this.template.properties.limits;

        const editorLimit: EditorLimitReceived = EntityLimits.getValue(limits.editor) ?? limits.editor as | '?' | null;
        const generalLimit: GeneralLimitReceived = limits.whilePlaying.isInGEL.isSuperGlobal.value == null ? [limits.whilePlaying.isInGEL.value.value, limits.whilePlaying.isInGEL.value.comment,] : [[limits.whilePlaying.isInGEL.value.value, limits.whilePlaying.isInGEL.value.comment,], [limits.whilePlaying.isInGEL.isSuperGlobal.value, limits.whilePlaying.isInGEL.isSuperGlobal.comment,],];
        const powerUpLimit: PowerUpLimitReceived = [limits.whilePlaying.isInPEL.value, limits.whilePlaying.isInPEL.comment,];
        const projectileLimit: ProjectileLimitReceived = [limits.whilePlaying.isInPJL.value, limits.whilePlaying.isInPJL.comment,];
        const customLimit: CustomLimitReceived = [EntityLimits.getValue(limits.whilePlaying.customLimit.value) ?? limits.whilePlaying.customLimit.value as '?' | null, limits.whilePlaying.customLimit.comment,];

        return [editorLimit, generalLimit, powerUpLimit, projectileLimit, customLimit,];
    }

    private __createProperty() {

        return new PropertyContainer(
            ...this.__createIsInProperty(),
            ...this.__createLimitProperty(),
        );
    }


    private __createReferences() {
        const reference = this.template.properties.reference;

        //region -------------------- Single reference --------------------

        const inSuperMarioBros = this.__createNullableEntityCallbackFor(reference.style.superMarioBros);
        const inSuperMarioBros3 = this.__createNullableEntityCallbackFor(reference.style.superMarioBros3);
        const inSuperMarioWorld = this.__createNullableEntityCallbackFor(reference.style.superMarioWorld);
        const inNewSuperMarioBros = this.__createNullableEntityCallbackFor(reference.style.newSuperMarioBrosU);
        const inSuperMario3DWorld = this.__createNullableEntityCallbackFor(reference.style.superMario3DWorld);

        const inGroundTheme = this.__createEntityCallbackFor(reference.theme.ground);
        const inUndergroundTheme = this.__createNullableEntityCallbackFor(reference.theme.underground);
        const inUnderwaterTheme = this.__createNullableEntityCallbackFor(reference.theme.underwater);
        const inDesertTheme = this.__createNullableEntityCallbackFor(reference.theme.desert);
        const inSnowTheme = this.__createNullableEntityCallbackFor(reference.theme.snow);
        const inSkyTheme = this.__createNullableEntityCallbackFor(reference.theme.sky);
        const inForestTheme = this.__createNullableEntityCallbackFor(reference.theme.forest);
        const inGhostHouseTheme = this.__createNullableEntityCallbackFor(reference.theme.ghostHouse);
        const inAirshipTheme = this.__createNullableEntityCallbackFor(reference.theme.airship);
        const inCastleTheme = this.__createNullableEntityCallbackFor(reference.theme.castle);

        const inDayTheme = this.__createEntityCallbackFor(reference.time.day);
        const inNightTheme = this.__createNullableEntityCallbackFor(reference.time.night);

        //endregion -------------------- Single reference --------------------
        //region -------------------- Group reference --------------------

        let everyGameStyleReferences: () => readonly Entity[];
        let everyThemeReferences: () => readonly Entity[];
        let everyTimeReferences: () => readonly Entity[];
        let everyReferences: () => readonly Entity[];
        if (reference.group.all === null) {
            everyGameStyleReferences = everyThemeReferences = everyTimeReferences = everyReferences = () => [];
        } else {
            everyGameStyleReferences = reference.group.gameStyle == null ? () => [] : () => Array.from(reference.group.gameStyle!).map(reference => EntityBuilder.references.get(reference.name.english.simple || reference.name.english.american!)!.entity!);
            everyThemeReferences = reference.group.theme == null ? () => [] : () => Array.from(reference.group.theme!).map(reference => EntityBuilder.references.get(reference.name.english.simple || reference.name.english.american!)!.entity!);
            everyTimeReferences = reference.group.time == null ? () => [] : () => Array.from(reference.group.time!).map(reference => EntityBuilder.references.get(reference.name.english.simple || reference.name.english.american!)!.entity!);
            everyReferences = () => Array.from(reference.group.all!).map(reference => EntityBuilder.references.get(reference.name.english.simple || reference.name.english.american!)!.entity!);
        }

        //endregion -------------------- Group reference --------------------

        return new EntityReferencesContainer(
            inSuperMarioBros, inSuperMarioBros3, inSuperMarioWorld, inNewSuperMarioBros, inSuperMario3DWorld,
            inGroundTheme, inUndergroundTheme, inUnderwaterTheme, inDesertTheme, inSnowTheme, inSkyTheme, inForestTheme, inGhostHouseTheme, inAirshipTheme, inCastleTheme,
            inDayTheme, inNightTheme,
            everyGameStyleReferences, everyThemeReferences, everyTimeReferences, everyReferences,
        );
    }

    private __createEntityCallbackFor(link: EntityLink,): () => Entity {
        return link === 'this' ? this.#selfCallback : () => EntityBuilder.references.get(link)!.entity!;
    }

    private __createNullableEntityCallbackFor(link: | EntityLink | null,): () => Entity {
        return link === null ? EntityBuilder.EMPTY_ENTITY_CALLBACK : this.__createEntityCallbackFor(link);
    }

    //endregion -------------------- Build helper methods --------------------

    public build() {
        const isInProperty = this.__createProperty();
        return isInProperty.isInSuperMarioMaker1 && !isInProperty.isInSuperMarioMaker2
            ? new ExclusiveSMM1GenericEntity(this.__createName(), this.__getEntityCategory(), isInProperty, this.__createReferences(),)
            : !isInProperty.isInSuperMarioMaker1 && isInProperty.isInSuperMarioMaker2
                ? !isInProperty.isInSuperMarioBrosStyle && !isInProperty.isInSuperMarioBros3Style && !isInProperty.isInSuperMarioWorldStyle && !isInProperty.isInNewSuperMarioBrosUStyle && isInProperty.isInSuperMario3DWorldStyle
                    ? new ExclusiveSM3DWGenericEntity(this.__createName(), this.__getEntityCategory(), isInProperty, this.__createReferences(),)
                    : new ExclusiveSMM2GenericEntityInAnyStyle(this.__createName(), this.__getEntityCategory(), isInProperty, this.__createReferences(),)
                : new GenericEntity(this.__createName(), this.__getEntityCategory(), isInProperty, this.__createReferences(),);
    }

}

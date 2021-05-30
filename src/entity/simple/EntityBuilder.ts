import {Builder}                    from '../../util/Builder';
import {DebugEntityReferences}      from './EntityLoader';
import {Entity}                     from './Entity';
import {EntityCategory}             from '../category/EntityCategory';
import {EntityLink}                 from '../entityTypes';
import {EntityTemplate}             from './EntityTemplate';
import {EntityReferencesContainer}  from '../properties/EntityReferencesContainer';
import {EmptyEntity}                from './EmptyEntity';
import {EmptyEntityCategory}        from '../category/EmptyEntityCategory';
import {GenericEntity}              from './GenericEntity';
import {IsInPropertyContainer}      from '../properties/IsInPropertyContainer';
import {NameBuilder}                from '../lang/NameBuilder';
import {SMM1ExclusiveGenericEntity} from './SMM1ExclusiveGenericEntity';
import {SMM2ExclusiveGenericEntity} from './SMM2ExclusiveGenericEntity';

export class EntityBuilder
    implements Builder<Entity> {

    //region ---------- external object references ----------

    public static references: Map<string, DebugEntityReferences>;
    public static categoriesMap: Map<string, EntityCategory>;

    //endregion ---------- external object references ----------

    readonly #template;
    readonly #selfCallback = () => this.build();
    public static readonly EMPTY_ENTITY_CALLBACK = () => EmptyEntity.get;

    public constructor(template: EntityTemplate) {
        this.#template = template;
    }

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


    private __createIsInProperty() {
        const isIn = this.template.properties.isIn;

        return new IsInPropertyContainer(
            isIn.game['1'], isIn.game['2'],
            isIn.style.superMarioBros, isIn.style.superMarioBros3, isIn.style.superMarioWorld, isIn.style.newSuperMarioBrosU, isIn.style.superMario3DWorld,
            isIn.theme.ground, isIn.theme.underground, isIn.theme.underwater, isIn.theme.desert, isIn.theme.snow, isIn.theme.sky, isIn.theme.forest, isIn.theme.ghostHouse, isIn.theme.airship, isIn.theme.castle,
            isIn.time.day, isIn.time.night,
        );
    }


    private __createReferences() {
        const reference = this.template.properties.reference;

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

        const inDayTheme = this.__createEntityCallbackFor(reference.day);
        const inNightTheme = this.__createNullableEntityCallbackFor(reference.night);

        const allReferences = reference.all === null ? () => [] : () => reference.all!
            .map(reference => EntityBuilder.references.get(reference.name.english.simple || reference.name.english.american!)!.entity!);

        return new EntityReferencesContainer(
            inSuperMarioBros, inSuperMarioBros3, inSuperMarioWorld, inNewSuperMarioBros, inSuperMario3DWorld,
            inGroundTheme, inUndergroundTheme, inUnderwaterTheme, inDesertTheme, inSnowTheme, inSkyTheme, inForestTheme, inGhostHouseTheme, inAirshipTheme, inCastleTheme,
            inDayTheme, inNightTheme,
            allReferences,
        );
    }

    private __createEntityCallbackFor(link: EntityLink): () => Entity {
        return link === 'this' ? this.#selfCallback : () => EntityBuilder.references.get(link)!.entity!;
    }

    private __createNullableEntityCallbackFor(link: null | EntityLink): () => Entity {
        return link === null ? EntityBuilder.EMPTY_ENTITY_CALLBACK : this.__createEntityCallbackFor(link);
    }


    public build() {
        const isInProperty = this.__createIsInProperty();
        return isInProperty.isInSuperMarioMaker1 && !isInProperty.isInSuperMarioMaker2
            ? new SMM1ExclusiveGenericEntity(this.__createName(), this.__getEntityCategory(), isInProperty, this.__createReferences(),)
            : !isInProperty.isInSuperMarioMaker1 && isInProperty.isInSuperMarioMaker2
                ? new SMM2ExclusiveGenericEntity(this.__createName(), this.__getEntityCategory(), isInProperty, this.__createReferences(),)
                : new GenericEntity(this.__createName(), this.__getEntityCategory(), isInProperty, this.__createReferences(),);//TODO add exclusive 3DW entity and other type of entity
    }

}

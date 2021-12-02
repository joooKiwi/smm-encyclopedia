import type {Builder}                                                                                                                                 from '../../util/Builder';
import type {CallbackToGetEntityLimit, CustomLimitReceived, EditorLimitReceived, GeneralLimitReceived, PowerUpLimitReceived, ProjectileLimitReceived} from './properties/limit/LimitProperty.types';
import type {DebugEntityReferences}                                                                                                                   from './Entity.loader';
import type {Entity}                                                                                                                                  from './Entity';
import type {EntityCategory}                                                                                                                          from '../category/EntityCategory';
import type {EntityLink}                                                                                                                              from '../entityTypes';
import type {EntityTemplate}                                                                                                                          from './Entity.template';
import type {PossibleEnglishName as PossibleEntityCategoryEnglishName}                                                                                from '../category/EntityCategories.types';
import type {PossibleGameReceived}                                                                                                                    from '../../lang/name/Name.builder.types';

import {EntityLimits}                  from '../limit/EntityLimits';
import {EntityReferencesContainer}     from './properties/EntityReferences.container';
import {EMPTY_ARRAY}                   from '../../util/emptyVariables';
import {EmptyEntity}                   from './EmptyEntity';
import {EmptyEntityCategory}           from '../category/EmptyEntityCategory';
import {ExclusiveSM3DWEntityContainer} from './ExclusiveSM3DWEntity.container';
import {ExclusiveSMM1EntityContainer}  from './ExclusiveSMM1Entity.container';
import {ExclusiveSMM2EntityContainer}  from './ExclusiveSMM2Entity.container';
import {EntityContainer}               from './Entity.container';
import {Games}                         from '../game/Games';
import {NameBuilder}                   from '../../lang/name/Name.builder';
import {PropertyContainer}             from './properties/Property.container';

export class EntityBuilder
    implements Builder<Entity> {

    //region -------------------- External object references --------------------

    public static references: Map<string, DebugEntityReferences>;
    public static categoriesMap: ReadonlyMap<PossibleEntityCategoryEnglishName, EntityCategory>;

    //endregion -------------------- External object references --------------------
    //region -------------------- Attributes --------------------

    static readonly #EMPTY_ENTITY_CALLBACK: () => Entity = () => EmptyEntity.get;
    static readonly #EMPTY_ARRAY_CALLBACK: () => typeof EMPTY_ARRAY = () => EMPTY_ARRAY;
    static readonly #GET_ENTITY_LIMIT_CALLBACK: CallbackToGetEntityLimit = entityLimit => EntityLimits.getValue(entityLimit);

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

    //region -------------------- Name helper methods --------------------

    private __createName(game: PossibleGameReceived,) {
        return new NameBuilder(this.template.name, game, true,).build();
    }

    //endregion -------------------- Name helper methods --------------------
    //region -------------------- Entity category helper methods --------------------

    private __getEntityCategory() {
        const category = this.template.categoryInTheEditor;
        return category === null ? EmptyEntityCategory.get : EntityBuilder.categoriesMap.get(category)!;
    }

    //endregion -------------------- Entity category helper methods --------------------
    //region -------------------- Property helper methods --------------------

    private __createIsInPropertyAttributes() {
        const {game, style, theme, time,} = this.template.properties.isIn;

        return [
            game['1'], game['2'],
            style.superMarioBros, style.superMarioBros3, style.superMarioWorld, style.newSuperMarioBrosU, style.superMario3DWorld,
            theme.ground, theme.underground, theme.underwater, theme.desert, theme.snow, theme.sky, theme.forest, theme.ghostHouse, theme.airship, theme.castle,
            time.day, time.night,
        ] as const;
    }

    private __createLimitPropertyAttributes() {
        const limitsTemplate = this.template.properties.limits;
        const {value: GELTemplate, isSuperGlobal: superGlobalGELTemplate,} = limitsTemplate.whilePlaying.isInGEL;
        const PELTemplate = limitsTemplate.whilePlaying.isInPEL;
        const PJLTemplate = limitsTemplate.whilePlaying.isInPJL;
        const customLimitTemplate = limitsTemplate.whilePlaying.customLimit;

        const editorLimit: EditorLimitReceived = [limitsTemplate.editor, EntityBuilder.#GET_ENTITY_LIMIT_CALLBACK,];
        const generalLimit: GeneralLimitReceived = superGlobalGELTemplate == null ? GELTemplate : [GELTemplate, superGlobalGELTemplate,];
        const powerUpLimit: PowerUpLimitReceived = PELTemplate;
        const projectileLimit: ProjectileLimitReceived = PJLTemplate;
        const customLimit: CustomLimitReceived = [customLimitTemplate.value, customLimitTemplate.comment, EntityBuilder.#GET_ENTITY_LIMIT_CALLBACK,];

        return [editorLimit, generalLimit, powerUpLimit, projectileLimit, customLimit,] as const;
    }

    private __createProperty() {

        return new PropertyContainer(
            ...this.__createIsInPropertyAttributes(),
            ...this.__createLimitPropertyAttributes(),
        );
    }

    //endregion -------------------- Property helper methods --------------------
    //region -------------------- Entity references helper methods --------------------

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
        if (reference.group.all === null)
            everyGameStyleReferences = everyThemeReferences = everyTimeReferences = everyReferences = this.__createReferenceArrayCallback(null);
        else {
            everyGameStyleReferences = this.__createReferenceArrayCallback(reference.group.gameStyle);
            everyThemeReferences = this.__createReferenceArrayCallback(reference.group.theme);
            everyTimeReferences = this.__createReferenceArrayCallback(reference.group.time);
            everyReferences = this.__createReferenceArrayCallback(reference.group.all);
        }

        //endregion -------------------- Group reference --------------------

        return new EntityReferencesContainer(
            inSuperMarioBros, inSuperMarioBros3, inSuperMarioWorld, inNewSuperMarioBros, inSuperMario3DWorld,
            inGroundTheme, inUndergroundTheme, inUnderwaterTheme, inDesertTheme, inSnowTheme, inSkyTheme, inForestTheme, inGhostHouseTheme, inAirshipTheme, inCastleTheme,
            inDayTheme, inNightTheme,
            everyGameStyleReferences, everyThemeReferences, everyTimeReferences, everyReferences,
        );
    }

    private __createReferenceArrayCallback(set: Set<EntityTemplate> | null,): () => readonly Entity[] {
        return set == null
            ? EntityBuilder.#EMPTY_ARRAY_CALLBACK
            : () => Array.from(set).map(reference => EntityBuilder.references.get(reference.name.english.simple || reference.name.english.american!)!.entity!);
    }

    private __createEntityCallbackFor(link: EntityLink,): () => Entity {
        return link === 'this'
            ? this.#selfCallback
            : () => EntityBuilder.references.get(link)!.entity!;
    }

    private __createNullableEntityCallbackFor(link: | EntityLink | null,): () => Entity {
        return link === null
            ? EntityBuilder.#EMPTY_ENTITY_CALLBACK
            : this.__createEntityCallbackFor(link);
    }

    //endregion -------------------- Entity references helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    public build() {
        const isInProperty = this.__createProperty();

        return isInProperty.isInSuperMarioMaker1 && !isInProperty.isInSuperMarioMaker2
            ? new ExclusiveSMM1EntityContainer(this.__createName(Games.SUPER_MARIO_MAKER_1), this.__getEntityCategory(), isInProperty, this.__createReferences(),)
            : !isInProperty.isInSuperMarioMaker1 && isInProperty.isInSuperMarioMaker2
                ? !isInProperty.isInSuperMarioBrosStyle && !isInProperty.isInSuperMarioBros3Style && !isInProperty.isInSuperMarioWorldStyle && !isInProperty.isInNewSuperMarioBrosUStyle && isInProperty.isInSuperMario3DWorldStyle
                    ? new ExclusiveSM3DWEntityContainer(this.__createName(Games.SUPER_MARIO_MAKER_2), this.__getEntityCategory(), isInProperty, this.__createReferences(),)
                    : new ExclusiveSMM2EntityContainer(this.__createName(Games.SUPER_MARIO_MAKER_2), this.__getEntityCategory(), isInProperty, this.__createReferences(),)
                : new EntityContainer(this.__createName('all'), this.__getEntityCategory(), isInProperty, this.__createReferences(),);
    }

}

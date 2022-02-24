import type {Builder}                                                                                                                                 from '../../util/builder/Builder';
import type {CallbackToGetEntityLimit, CustomLimitReceived, EditorLimitReceived, GeneralLimitReceived, PowerUpLimitReceived, ProjectileLimitReceived} from './properties/limit/LimitProperty.types';
import type {Entity, PossibleOtherEntities}                                                                                                           from './Entity';
import type {EntityCategory}                                                                                                                          from '../entityCategory/EntityCategory';
import type {EntityLink}                                                                                                                              from './loader.types';
import type {EntityTemplate}                                                                                                                          from './Entity.template';
import type {Name}                                                                                                                                    from '../../lang/name/Name';
import type {PossibleEnglishName}                                                                                                                     from './Entities.types';

import {EntityCategories}              from '../entityCategory/EntityCategories';
import {EntityContainer}               from './Entity.container';
import {EntityLimits}                  from '../entityLimit/EntityLimits';
import {EntityReferencesContainer}     from './properties/EntityReferences.container';
import {Entities}                      from './Entities';
import {EMPTY_ARRAY}                   from '../../util/emptyVariables';
import {EmptyEntity}                   from './EmptyEntity';
import {EmptyEntityCategory}           from '../entityCategory/EmptyEntityCategory';
import {ExclusiveSM3DWEntityContainer} from './ExclusiveSM3DWEntity.container';
import {ExclusiveSMM1EntityContainer}  from './ExclusiveSMM1Entity.container';
import {ExclusiveSMM2EntityContainer}  from './ExclusiveSMM2Entity.container';
import {Games}                         from '../game/Games';
import {PropertyContainer}             from './properties/Property.container';
import {TemplateWithNameBuilder}       from '../_template/TemplateWithName.builder';

export class EntityBuilder
    extends TemplateWithNameBuilder<EntityTemplate, Entity>
    implements Builder<Entity> {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_ENTITY_CALLBACK: () => readonly [Entity] = () => [EmptyEntity.get];
    static readonly #EMPTY_ARRAY_CALLBACK: () => typeof EMPTY_ARRAY = () => EMPTY_ARRAY;
    static readonly #GET_ENTITY_LIMIT_CALLBACK: CallbackToGetEntityLimit = entityLimit => EntityLimits.getValue(entityLimit);

    readonly #selfCallback = () => [this.build()] as const;

    //endregion -------------------- Attributes --------------------

    public constructor(template: EntityTemplate,) {
        super(template, ({properties: {isIn: {game: {1: isInSMM1, 2: isInSMM2,},},},},) => {
            return isInSMM1 && !isInSMM2
                ? Games.SUPER_MARIO_MAKER_1
                : !isInSMM1 && isInSMM2
                    ? Games.SUPER_MARIO_MAKER_2
                    : 'all';
        }, false,);
    }

    //region -------------------- Build helper methods --------------------

    protected get _static() {
        return EntityBuilder;
    }

    //region -------------------- Entity category helper methods --------------------

    private __getEntityCategory(): EntityCategory {
        return EntityCategories.getValue(this.template.categoryInTheEditor)?.reference
            ?? EmptyEntityCategory.get;
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

    private __createLimitPropertyAttributes(): readonly [EditorLimitReceived, GeneralLimitReceived, PowerUpLimitReceived, ProjectileLimitReceived, CustomLimitReceived,] {
        const limitsTemplate = this.template.properties.limits;
        const {isInGEL: {value: GELTemplate, isSuperGlobal: superGlobalGELTemplate,}, isInPEL: PELTemplate, isInPJL: PJLTemplate, customLimit: customLimitTemplate,} = limitsTemplate.whilePlaying;

        return [
            [limitsTemplate.editor, EntityBuilder.#GET_ENTITY_LIMIT_CALLBACK,],
            superGlobalGELTemplate == null ? GELTemplate : [GELTemplate, superGlobalGELTemplate,],
            PELTemplate,
            PJLTemplate,
            [customLimitTemplate.value, customLimitTemplate.comment, EntityBuilder.#GET_ENTITY_LIMIT_CALLBACK,],
        ];
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
            : () => Array.from(set).map(reference => Entities.getValue((reference.name.english.simple || reference.name.english.american!) as PossibleEnglishName).reference);
    }

    private __createEntityCallbackFor(link: EntityLink,): () => PossibleOtherEntities {
        return link === 'this'
            ? this.#selfCallback
            : () => (link.split(' / ') as PossibleEnglishName[]).map(splitLink => Entities.getValue(splitLink).reference) as unknown as PossibleOtherEntities;
    }

    private __createNullableEntityCallbackFor(link: | EntityLink | null,): () => PossibleOtherEntities {
        return link === null
            ? EntityBuilder.#EMPTY_ENTITY_CALLBACK
            : this.__createEntityCallbackFor(link);
    }

    //endregion -------------------- Entity references helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    public _build(name: Name<string>,) {
        const isInProperty = this.__createProperty();
        const isInSMM1 = isInProperty.isInSuperMarioMaker1;
        const isInSMM2 = isInProperty.isInSuperMarioMaker2;


        return isInSMM1 && !isInSMM2
            ? new ExclusiveSMM1EntityContainer(name, this.__getEntityCategory(), isInProperty, this.__createReferences(),)
            : !isInSMM1 && isInSMM2
                ? !isInProperty.isInSuperMarioBrosStyle && !isInProperty.isInSuperMarioBros3Style && !isInProperty.isInSuperMarioWorldStyle && !isInProperty.isInNewSuperMarioBrosUStyle && isInProperty.isInSuperMario3DWorldStyle
                    ? new ExclusiveSM3DWEntityContainer(name, this.__getEntityCategory(), isInProperty, this.__createReferences(),)
                    : new ExclusiveSMM2EntityContainer(name, this.__getEntityCategory(), isInProperty, this.__createReferences(),)
                : new EntityContainer(name, this.__getEntityCategory(), isInProperty, this.__createReferences(),);
    }

}

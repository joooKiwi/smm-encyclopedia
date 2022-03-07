import type {Builder}                                              from '../../util/builder/Builder';
import type {CallbackToGetEntityLimit}                             from './properties/limit/LimitProperty.types';
import type {Entity, PossibleOtherEntities}                        from './Entity';
import type {EntityCategory}                                       from '../entityCategory/EntityCategory';
import type {EntityLink}                                           from './loader.types';
import type {EntityTemplate}                                       from './Entity.template';
import type {Name}                                                 from '../../lang/name/Name';
import type {ObjectHolder}                                         from '../../util/holder/ObjectHolder';
import type {PossibleEnglishName}                                  from './Entities.types';
import type {PossibleGameReceived as OriginalPossibleGameReceived} from '../../lang/name/Name.builder.types';
import type {PossibleLimitProperty}                                from './properties/Property';

import {DelayedObjectHolderContainer}  from '../../util/holder/DelayedObjectHolder.container';
import {EntityCategories}              from '../entityCategory/EntityCategories';
import {EntityContainer}               from './Entity.container';
import type {EntityLimits}             from '../entityLimit/EntityLimits';
import {EntityReferencesContainer}     from './properties/EntityReferences.container';
import type {Entities}                 from './Entities';
import type {EmptyEntity}              from './EmptyEntity';
import {EmptyEntityCategory}           from '../entityCategory/EmptyEntityCategory';
import {ExclusiveSM3DWEntityContainer} from './ExclusiveSM3DWEntity.container';
import {ExclusiveSMM1EntityContainer}  from './ExclusiveSMM1Entity.container';
import {ExclusiveSMM2EntityContainer}  from './ExclusiveSMM2Entity.container';
import {GamePropertyContainer}         from './properties/GameProperty.container';
import {Games}                         from '../game/Games';
import {GameStylePropertyContainer}    from './properties/GameStyleProperty.container';
import type {LimitPropertyContainer}   from './properties/limit/LimitProperty.container';
import {ObjectHolders}                 from '../../util/holder/objectHolders';
import {ObjectHolderContainer}         from '../../util/holder/ObjectHolder.container';
import {PropertyContainer}             from './properties/Property.container';
import {TemplateWithNameBuilder}       from '../_template/TemplateWithName.builder';
import type {ThemePropertyContainer}   from './properties/ThemeProperty.container';
import type {TimePropertyContainer}    from './properties/TimeProperty.container';

/**
 * Create an {@link Entity} from a {@link EntityTemplate template} received.
 *
 * @classWithDynamicImport
 * @see ExclusiveSMM1EntityContainer
 * @see ExclusiveSM3DWEntityContainer
 * @see ExclusiveSMM2EntityContainer
 * @see EntityContainer
 */
export class EntityBuilder
    extends TemplateWithNameBuilder<EntityTemplate, Entity>
    implements Builder<Entity> {

    //region -------------------- Other references --------------------

    static #entities?: typeof Entities;
    static #entityLimits?: typeof EntityLimits;
    static #emptyEntity?: typeof EmptyEntity;
    static #themePropertyContainer?: typeof ThemePropertyContainer;
    static #timePropertyContainer?: typeof TimePropertyContainer;
    static #limitPropertyContainer?: typeof LimitPropertyContainer;

    //endregion -------------------- Other references --------------------
    //region -------------------- Attributes --------------------

    static readonly #EMPTY_ENTITY_CALLBACK: () => readonly [Entity] = () => [EntityBuilder.__emptyEntity.get];
    static readonly #GET_ENTITY_LIMIT_CALLBACK: CallbackToGetEntityLimit = entityLimit => this.__entityLimits.getValue(entityLimit);

    readonly #selfCallback = () => [this.build()] as const;

    //endregion -------------------- Attributes --------------------

    public constructor(template: EntityTemplate,) {
        super(template, (template,) => EntityBuilder.__getGames(template,), false,);
    }

    /**
     * Get the game depending on the {@link EntityTemplate entity template}.
     * By retrieving, the template, it returns 'all', 'not in SMM2', {@link Games.SUPER_MARIO_MAKER_1 SMM1} or {@link Games.SUPER_MARIO_MAKER_2 SMM2}.
     *
     *
     * @param template the template destructured to get only the games
     */
    private static __getGames({properties: {isIn: {game: {1: isInSMM1, '3DS': isInSMM3DS, 2: isInSMM2,},},},}: EntityTemplate,): OriginalPossibleGameReceived {
        return isInSMM1 && isInSMM3DS
            ? isInSMM2
                ? 'all'
                : 'notSMM2'
            : isInSMM1 && !isInSMM2
                ? Games.SUPER_MARIO_MAKER_1
                : Games.SUPER_MARIO_MAKER_2;
    }

    //region -------------------- Other references getter methods --------------------

    private static get __entities(): typeof Entities {
        return this.#entities ??= require('./Entities').Entities;
    }

    private static get __entityLimits(): typeof EntityLimits {
        return this.#entityLimits ??= require('../entityLimit/EntityLimits').EntityLimits;
    }

    private static get __emptyEntity(): typeof EmptyEntity {
        return this.#emptyEntity ??= require('./EmptyEntity').EmptyEntity;
    }

    private static get __themePropertyContainer(): typeof ThemePropertyContainer {
        return this.#themePropertyContainer ??= require('./properties/ThemeProperty.container').ThemePropertyContainer;
    }

    private static get __timePropertyContainer(): typeof TimePropertyContainer {
        return this.#timePropertyContainer ??= require('./properties/TimeProperty.container').TimePropertyContainer;
    }

    private static get __limitPropertyContainer(): typeof LimitPropertyContainer {
        return this.#limitPropertyContainer ??= require('./properties/limit/LimitProperty.container').LimitPropertyContainer;
    }

    //endregion -------------------- Other references getter methods --------------------
    //region -------------------- Build helper methods --------------------

    protected get _static() {
        return EntityBuilder;
    }

    //region -------------------- Entity category helper methods --------------------

    /**
     * Get the entity category reference from the {@link EntityTemplate template}
     * or return an {@link EmptyEntityCategory empty category}.
     */
    private __getEntityCategory(): EntityCategory {
        return EntityCategories.getValue(this.template.categoryInTheEditor)?.reference
            ?? EmptyEntityCategory.get;
    }

    //endregion -------------------- Entity category helper methods --------------------
    //region -------------------- Property helper methods --------------------

    /**
     * Get the {@link LimitProperty limit property} from the {@link EntityTemplate template}
     *
     * @methodWithDynamicImport
     */
    private __getLimitPropertyAttributes(): PossibleLimitProperty {
        const limitsTemplate = this.template.properties.limits;
        const {isInGEL: {value: GELTemplate, isSuperGlobal: superGlobalGELTemplate,}, isInPEL: PELTemplate, isInPJL: PJLTemplate, otherLimit: otherLimitTemplate,} = limitsTemplate.whilePlaying;

        return EntityBuilder.__limitPropertyContainer.get(
            [limitsTemplate.editor, EntityBuilder.#GET_ENTITY_LIMIT_CALLBACK,],
            superGlobalGELTemplate == null ? GELTemplate : [GELTemplate, superGlobalGELTemplate,],
            PELTemplate,
            PJLTemplate,
            [otherLimitTemplate.value, otherLimitTemplate.comment, EntityBuilder.#GET_ENTITY_LIMIT_CALLBACK,],
        ) as PossibleLimitProperty;
    }

    /**
     * Create the {@link Property property} from the {@link EntityTemplate template}
     * with the games, game style, theme, time & limit.
     *
     * @methodWithDynamicImport
     */
    private __createProperty() {
        const {game, style: gameStyle, theme, time,} = this.template.properties.isIn;

        return new PropertyContainer(
            new ObjectHolderContainer(GamePropertyContainer.get(game['1'], game['3DS'], game['2'],)),
            new DelayedObjectHolderContainer(() => GameStylePropertyContainer.get(gameStyle.superMarioBros, gameStyle.superMarioBros3, gameStyle.superMarioWorld, gameStyle.newSuperMarioBrosU, gameStyle.superMario3DWorld,)),
            new DelayedObjectHolderContainer(() => EntityBuilder.__themePropertyContainer.get(theme.ground, theme.underground, theme.underwater, theme.desert, theme.snow, theme.sky, theme.forest, theme.ghostHouse, theme.airship, theme.castle,)),
            new DelayedObjectHolderContainer(() => EntityBuilder.__timePropertyContainer.get(time.day, time.night,)),
            new DelayedObjectHolderContainer(() => this.__getLimitPropertyAttributes()),
        );
    }

    //endregion -------------------- Property helper methods --------------------
    //region -------------------- Entity references helper methods --------------------

    /**
     * Create every entity references possible applicable to a single entity.
     * It gets the single references (game, game style, theme & time),
     * but it can also get every reference from the {@link EntityTemplate template}.
     */
    private __createReferences() {
        const reference = this.template.properties.reference;

        //region -------------------- Single reference --------------------

        const inSuperMarioBros = this.__createOtherEntityReferences(reference.style.superMarioBros);
        const inSuperMarioBros3 = this.__createOtherEntityReferences(reference.style.superMarioBros3);
        const inSuperMarioWorld = this.__createOtherEntityReferences(reference.style.superMarioWorld);
        const inNewSuperMarioBros = this.__createOtherEntityReferences(reference.style.newSuperMarioBrosU);
        const inSuperMario3DWorld = this.__createOtherEntityReferences(reference.style.superMario3DWorld);

        const inGroundTheme = this.__createOtherEntityReferences(reference.theme.ground);
        const inUndergroundTheme = this.__createOtherEntityReferences(reference.theme.underground);
        const inUnderwaterTheme = this.__createOtherEntityReferences(reference.theme.underwater);
        const inDesertTheme = this.__createOtherEntityReferences(reference.theme.desert);
        const inSnowTheme = this.__createOtherEntityReferences(reference.theme.snow);
        const inSkyTheme = this.__createOtherEntityReferences(reference.theme.sky);
        const inForestTheme = this.__createOtherEntityReferences(reference.theme.forest);
        const inGhostHouseTheme = this.__createOtherEntityReferences(reference.theme.ghostHouse);
        const inAirshipTheme = this.__createOtherEntityReferences(reference.theme.airship);
        const inCastleTheme = this.__createOtherEntityReferences(reference.theme.castle);

        const inDayTheme = this.__createOtherEntityReferences(reference.time.day);
        const inNightTheme = this.__createOtherEntityReferences(reference.time.night);

        //endregion -------------------- Single reference --------------------
        //region -------------------- Group reference --------------------

        let everyGameStyleReferences: ObjectHolder<readonly Entity[]>;
        let everyThemeReferences: ObjectHolder<readonly Entity[]>;
        let everyTimeReferences: ObjectHolder<readonly Entity[]>;
        let everyReferences: ObjectHolder<readonly Entity[]>;
        if (reference.group.all === null)
            everyGameStyleReferences = everyThemeReferences = everyTimeReferences = everyReferences = ObjectHolders.EMPTY_ARRAY;
        else {
            everyGameStyleReferences = this.__createGroupReference(reference.group.gameStyle);
            everyThemeReferences = this.__createGroupReference(reference.group.theme);
            everyTimeReferences = this.__createGroupReference(reference.group.time);
            everyReferences = this.__createGroupReference(reference.group.all);
        }

        //endregion -------------------- Group reference --------------------

        return new EntityReferencesContainer(
            inSuperMarioBros, inSuperMarioBros3, inSuperMarioWorld, inNewSuperMarioBros, inSuperMario3DWorld,
            inGroundTheme, inUndergroundTheme, inUnderwaterTheme, inDesertTheme, inSnowTheme, inSkyTheme, inForestTheme, inGhostHouseTheme, inAirshipTheme, inCastleTheme,
            inDayTheme, inNightTheme,
            everyGameStyleReferences, everyThemeReferences, everyTimeReferences, everyReferences,
        );
    }

    private __createGroupReference(set: Set<EntityTemplate> | null,): ObjectHolder<readonly Entity[]> {
        return set == null
            ? ObjectHolders.EMPTY_ARRAY
            : new DelayedObjectHolderContainer(() => Array.from(set).map(reference => EntityBuilder.__entities.getValue((reference.name.english.simple || reference.name.english.american!) as PossibleEnglishName).reference));
    }

    /**
     * Create an entity {@link ObjectHolder} with returning type 1 or 2 entity.
     * It can contain 'this' that will return itself in the callback.
     *
     * @param link the entity link or null
     * @methodWithDynamicImport
     */
    private __createOtherEntityReferences(link: | EntityLink | null,): ObjectHolder<PossibleOtherEntities> {
        return new DelayedObjectHolderContainer(
            link === null
                ? EntityBuilder.#EMPTY_ENTITY_CALLBACK
                : link === 'this'
                    ? this.#selfCallback
                    : () => (link.split(' / ') as PossibleEnglishName[]).map(splitLink => EntityBuilder.__entities.getValue(splitLink).reference) as unknown as PossibleOtherEntities
        );
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

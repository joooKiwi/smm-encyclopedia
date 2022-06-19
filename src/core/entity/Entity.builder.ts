import type {Builder}                                                                         from '../../util/builder/Builder';
import type {Entity, PossibleOtherEntities}                                                   from './Entity';
import type {EntityCategory}                                                                  from '../entityCategory/EntityCategory';
import type {EntityLink}                                                                      from './loader.types';
import type {EntityTemplate}                                                                  from './Entity.template';
import type {GeneralEntityLimitType, GeneralGlobalEntityLimitType, ProjectileEntityLimitType} from './properties/limit/Loader.types';
import type {LimitProperty}                                                                   from './properties/limit/LimitProperty';
import type {LimitPropertyTemplate}                                                           from './properties/limit/LimitProperty.template';
import type {Name}                                                                            from '../../lang/name/Name';
import type {NotApplicableProperty, UnknownProperty}                                          from '../_properties/PropertyWithEverything';
import type {ObjectHolder}                                                                    from '../../util/holder/ObjectHolder';
import type {PossibleComment}                                                                 from '../_properties/ClassWithComment';
import type {PossibleEnglishName}                                                             from './Entities.types';
import type {PossibleEnglishName as PossibleEnglishName_EntityLimit}                          from '../entityLimit/EntityLimits.types';
import type {PossibleGameReceived as OriginalPossibleGameReceived}                            from '../../lang/name/Name.builder.types';
import type {PropertyThatCanBeUnknownWithComment}                                             from '../_properties/PropertyThatCanBeUnknownWithComment';

import {DelayedObjectHolderContainer}                   from '../../util/holder/DelayedObjectHolder.container';
import {EmptyEntity}                                    from './EmptyEntity';
import {EmptyEntityCategory}                            from '../entityCategory/EmptyEntityCategory';
import {Entities}                                       from './Entities';
import {EntityCategories}                               from '../entityCategory/EntityCategories';
import {EntityContainer}                                from './Entity.container';
import {EntityLimits}                                   from '../entityLimit/EntityLimits';
import {EntityReferencesContainer}                      from './properties/EntityReferences.container';
import {ExclusiveSM3DWEntityContainer}                  from './ExclusiveSM3DWEntity.container';
import {ExclusiveSMM1EntityContainer}                   from './ExclusiveSMM1Entity.container';
import {ExclusiveSMM2EntityContainer}                   from './ExclusiveSMM2Entity.container';
import {GamePropertyContainer}                          from './properties/GameProperty.container';
import {Games}                                          from '../game/Games';
import {GameStructureContainer}                         from '../game/GameStructure.container';
import {GameStylePropertyContainer}                     from './properties/GameStyleProperty.container';
import {LimitPropertyContainer}                         from './properties/limit/LimitProperty.container';
import {ObjectHolders}                                  from '../../util/holder/objectHolders';
import {ObjectHolderContainer}                          from '../../util/holder/ObjectHolder.container';
import {PropertyContainer}                              from '../_properties/Property.container';
import {PropertyContainer as PropertyInstanceContainer} from './properties/Property.container';
import {PropertyProvider}                               from '../_properties/PropertyProvider';
import {PropertyThatCanBeUnknownWithCommentContainer}   from '../_properties/PropertyThatCanBeUnknownWithComment.container';
import {TemplateWithNameBuilder}                        from '../_template/TemplateWithName.builder';
import {ThemePropertyContainer}                         from './properties/ThemeProperty.container';
import {TimePropertyContainer}                          from './properties/TimeProperty.container';


/**
 * Create an {@link Entity} from a {@link EntityTemplate template} received.
 *
 * @see ExclusiveSMM1EntityContainer
 * @see ExclusiveSM3DWEntityContainer
 * @see ExclusiveSMM2EntityContainer
 * @see EntityContainer
 */
export class EntityBuilder
    extends TemplateWithNameBuilder<EntityTemplate, Entity>
    implements Builder<Entity> {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_ENTITY_CALLBACK: () => readonly [Entity] = () => [EmptyEntity.get];

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
     * @onlyCalledAtConstruction
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

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
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

    private static __whereEntityLimit(entityLimit: PossibleEnglishName_EntityLimit,): EntityLimits
    private static __whereEntityLimit(entityLimit: | PossibleEnglishName_EntityLimit | null,): | EntityLimits | null
    private static __whereEntityLimit(entityLimit: | PossibleEnglishName_EntityLimit | null,) {
        return EntityLimits.getValue(entityLimit);
    }

    private static __getPropertyWhereEntityLimit(entityLimit: | PossibleEnglishName_EntityLimit | null | '?',): PropertyThatCanBeUnknownWithComment<EntityLimits, false, null> | NotApplicableProperty | UnknownProperty
    private static __getPropertyWhereEntityLimit<COMMENT extends PossibleComment, >(entityLimit: | PossibleEnglishName_EntityLimit | null, comment: COMMENT,): | PropertyThatCanBeUnknownWithComment<EntityLimits, false, COMMENT> | NotApplicableProperty
    private static __getPropertyWhereEntityLimit(entityLimit: | PossibleEnglishName_EntityLimit | null | '?', comment: PossibleComment = null,): PropertyThatCanBeUnknownWithComment<EntityLimits, false> | NotApplicableProperty | UnknownProperty {
        if (entityLimit === '?')
            return PropertyContainer.UNKNOWN_CONTAINER;
        if (entityLimit == null)
            return PropertyContainer.NOT_APPLICABLE_CONTAINER;
        return new PropertyThatCanBeUnknownWithCommentContainer(this.__whereEntityLimit(entityLimit), false, comment,);
    }

    /**
     * Get the {@link LimitProperty limit property} from the {@link EntityTemplate template}
     *
     * @param limitTemplate the limit template
     */
    private static __getLimitPropertyAttributes(limitTemplate: LimitPropertyTemplate,): LimitProperty {
        const {
            editor: {'1And3DS': editorLimit_SMM1And3DS, 2: editorLimit_SMM2,},
            whilePlaying: {
                isInGEL: {value: generalLimit, isSuperGlobal: superGlobalGeneralLimit,},
                isInPEL: powerUpLimit,
                isInPJL: projectileLimit,
                otherLimit: {value: otherLimit, comment: otherLimitComment,},
            },
        } = limitTemplate;

        return LimitPropertyContainer.get(
            [
                GameStructureContainer.get(this.__whereEntityLimit(editorLimit_SMM1And3DS),
                    this.__getPropertyWhereEntityLimit(editorLimit_SMM2),
                ),
                [
                    PropertyProvider.newBooleanContainer<GeneralEntityLimitType, true, false, true>(generalLimit, true, false,),
                    PropertyProvider.newBooleanContainer<GeneralGlobalEntityLimitType, true, false, true>(superGlobalGeneralLimit, true, false,),
                ],
                PropertyProvider.newBooleanContainer(powerUpLimit, true, false,),
                PropertyProvider.newBooleanContainer<ProjectileEntityLimitType, true, false, true>(projectileLimit, true, false,),
                this.__getPropertyWhereEntityLimit(otherLimit, otherLimitComment,),
            ],
            [
                [editorLimit_SMM1And3DS, editorLimit_SMM2,],
                [generalLimit, superGlobalGeneralLimit,],
                powerUpLimit,
                projectileLimit,
                [otherLimit, otherLimitComment,]
            ]
        );
    }

    /**
     * Create the {@link Property property} from the {@link EntityTemplate template}
     * with the games, game style, theme, time & limit.
     */
    private __createProperty() {
        const {isIn: {game, style: gameStyle, theme, time,}, limits,} = this.template.properties;

        return new PropertyInstanceContainer(
            new ObjectHolderContainer(GamePropertyContainer.get(game['1'], game['3DS'], game['2'],)),
            new DelayedObjectHolderContainer(() => GameStylePropertyContainer.get(gameStyle.superMarioBros, gameStyle.superMarioBros3, gameStyle.superMarioWorld, gameStyle.newSuperMarioBrosU, gameStyle.superMario3DWorld,)),
            new DelayedObjectHolderContainer(() => ThemePropertyContainer.get(theme.ground, theme.underground, theme.underwater, theme.desert, theme.snow, theme.sky, theme.forest, theme.ghostHouse, theme.airship, theme.castle,)),
            new DelayedObjectHolderContainer(() => TimePropertyContainer.get(time.day, time.night,)),
            new DelayedObjectHolderContainer(() => EntityBuilder.__getLimitPropertyAttributes(limits)),
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
            : new DelayedObjectHolderContainer(() => Array.from(set).map(reference => Entities.getValue((reference.name.english.simple || reference.name.english.american!) as PossibleEnglishName).reference));
    }

    /**
     * Create an entity {@link ObjectHolder} with returning type 1 or 2 entity.
     * It can contain 'this' that will return itself in the callback.
     *
     * @param link the entity link or null
     */
    private __createOtherEntityReferences(link: | EntityLink | null,): ObjectHolder<PossibleOtherEntities> {
        return new DelayedObjectHolderContainer(
            link === null
                ? EntityBuilder.#EMPTY_ENTITY_CALLBACK
                : link === 'this'
                    ? this.#selfCallback
                    : () => (link.split(' / ') as PossibleEnglishName[]).map(splitLink => Entities.getValue(splitLink).reference) as unknown as PossibleOtherEntities
        );
    }

    //endregion -------------------- Entity references helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    public override _build(name: Name<string>,) {
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

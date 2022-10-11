import type {Builder}                                                                         from '../../util/builder/Builder'
import type {CanMakeASoundOutOfAMusicBlock}                                                   from './properties/instrument/loader.types'
import type {Entity, PossibleOtherEntities}                                                   from './Entity'
import type {EntityCategory}                                                                  from '../entityCategory/EntityCategory'
import type {EntityLink}                                                                      from './loader.types'
import type {EntityTemplate}                                                                  from './Entity.template'
import type {GeneralEntityLimitType, GeneralGlobalEntityLimitType, ProjectileEntityLimitType} from './properties/limit/Loader.types'
import type {CanMakeASoundOutOfAMusicBlockProperty, InstrumentProperty}                       from './properties/instrument/InstrumentProperty'
import type {InstrumentPropertyTemplate}                                                      from './properties/instrument/InstrumentProperty.template'
import type {Instrument}                                                                      from '../instrument/Instrument'
import type {LimitProperty}                                                                   from './properties/limit/LimitProperty'
import type {LimitPropertyTemplate}                                                           from './properties/limit/LimitProperty.template'
import type {Name}                                                                            from '../../lang/name/Name'
import type {NotApplicableProperty, UnknownProperty}                                          from '../_properties/PropertyWithEverything'
import type {ObjectHolder}                                                                    from '../../util/holder/ObjectHolder'
import type {PossibleComment}                                                                 from '../_properties/ClassWithComment'
import type {PossibleEnglishName}                                                             from './Entities.types'
import type {PossibleEnglishName as PossibleEnglishName_EntityLimit}                          from '../entityLimit/EntityLimits.types'
import type {PossibleGameReceived as OriginalPossibleGameReceived}                            from '../../lang/name/Name.builder.types'
import type {PossibleInstrument}                                                              from '../instrument/loader.types'
import type {PropertyThatCanBeUnknownWithComment}                                             from '../_properties/PropertyThatCanBeUnknownWithComment'

import {DelayedObjectHolderContainer}                   from '../../util/holder/DelayedObjectHolder.container'
import {EmptyEntity}                                    from './EmptyEntity'
import {EmptyEntityCategory}                            from '../entityCategory/EmptyEntityCategory'
import {EmptyInstrumentProperty}                        from './properties/instrument/EmptyInstrumentProperty'
import {Entities}                                       from './Entities'
import {EntityCategories}                               from '../entityCategory/EntityCategories'
import {EntityContainer}                                from './Entity.container'
import {EntityLimits}                                   from '../entityLimit/EntityLimits'
import {EntityReferencesContainer}                      from './properties/EntityReferences.container'
import {ExclusiveSM3DWEntityContainer}                  from './ExclusiveSM3DWEntity.container'
import {ExclusiveSMM1EntityContainer}                   from './ExclusiveSMM1Entity.container'
import {ExclusiveSMM2EntityContainer}                   from './ExclusiveSMM2Entity.container'
import {GamePropertyProvider}                           from './properties/game/GameProperty.provider'
import {Games}                                          from '../game/Games'
import {GameStructureProvider}                          from '../game/GameStructure.provider'
import {GameStylePropertyProvider}                      from './properties/gameStyle/GameStyleProperty.provider'
import {InstrumentPropertyProvider}                     from './properties/instrument/InstrumentProperty.provider'
import {Instruments}                                    from '../instrument/Instruments'
import {LimitPropertyProvider}                          from './properties/limit/LimitProperty.provider'
import {ObjectHolders}                                  from '../../util/holder/objectHolders'
import {ObjectHolderContainer}                          from '../../util/holder/ObjectHolder.container'
import {PropertyContainer}                              from '../_properties/Property.container'
import {PropertyContainer as PropertyInstanceContainer} from './properties/Property.container'
import {PropertyProvider}                               from '../_properties/PropertyProvider'
import {PropertyThatCanBeUnknownWithCommentContainer}   from '../_properties/PropertyThatCanBeUnknownWithComment.container'
import {TemplateWithNameBuilder}                        from '../_template/TemplateWithName.builder'
import {ThemePropertyProvider}                          from './properties/theme/ThemeProperty.provider'
import {TimePropertyProvider}                           from './properties/time/TimeProperty.provider'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_MAKER_1, SUPER_MARIO_MAKER_2,} = Games
const {UNKNOWN_CONTAINER, NOT_APPLICABLE_CONTAINER,} = PropertyContainer

//region -------------------- Import from deconstruction --------------------

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

    //region -------------------- Fields --------------------

    static readonly #EMPTY_ENTITY_CALLBACK: () => readonly [Entity] = () => [EmptyEntity.get]
    static readonly #EMPTY_INSTRUMENT_OBJECT_HOLDER: ObjectHolder<InstrumentProperty> = new ObjectHolderContainer(() => EmptyInstrumentProperty.get)

    readonly #selfCallback = () => [this.build()] as const

    //endregion -------------------- Fields --------------------

    public constructor(template: EntityTemplate,) {
        super(template, (template,) => EntityBuilder.#getGames(template,), false,)
    }

    /**
     * Get the game depending on the {@link EntityTemplate entity template}.
     * By retrieving, the template, it returns 'all', 'not in SMM2', {@link Games.SUPER_MARIO_MAKER_1 SMM1} or {@link Games.SUPER_MARIO_MAKER_2 SMM2}.
     *
     *
     * @param template the template destructured to get only the games
     * @onlyCalledAtConstruction
     */
    static #getGames({properties: {isIn: {game: {1: isInSMM1, '3DS': isInSMM3DS, 2: isInSMM2,},},},}: EntityTemplate,): OriginalPossibleGameReceived {
        return isInSMM1 && isInSMM3DS
            ? isInSMM2
                ? 'all'
                : 'notSMM2'
            : isInSMM1 && !isInSMM2
                ? SUPER_MARIO_MAKER_1
                : SUPER_MARIO_MAKER_2
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return EntityBuilder
    }

    //region -------------------- Entity category helper methods --------------------

    /**
     * Get the entity category reference from the {@link EntityTemplate template}
     * or return an {@link EmptyEntityCategory empty category}.
     */
    #getEntityCategory(): EntityCategory {
        return EntityCategories.getValue(this.template.categoryInTheEditor)?.reference
            ?? EmptyEntityCategory.get
    }

    //endregion -------------------- Entity category helper methods --------------------
    //region -------------------- Property helper methods --------------------

    static #whereEntityLimit(entityLimit: PossibleEnglishName_EntityLimit,): EntityLimits
    static #whereEntityLimit(entityLimit: | PossibleEnglishName_EntityLimit | null,): | EntityLimits | null
    static #whereEntityLimit(entityLimit: | PossibleEnglishName_EntityLimit | null,) {
        return EntityLimits.getValue(entityLimit)
    }

    static #getPropertyWhereEntityLimit(entityLimit: | PossibleEnglishName_EntityLimit | null | '?',): PropertyThatCanBeUnknownWithComment<EntityLimits, false, null> | NotApplicableProperty | UnknownProperty
    static #getPropertyWhereEntityLimit<COMMENT extends PossibleComment, >(entityLimit: | PossibleEnglishName_EntityLimit | null, comment: COMMENT,): | PropertyThatCanBeUnknownWithComment<EntityLimits, false, COMMENT> | NotApplicableProperty
    static #getPropertyWhereEntityLimit(entityLimit: | PossibleEnglishName_EntityLimit | null | '?', comment: PossibleComment = null,): PropertyThatCanBeUnknownWithComment<EntityLimits, false> | NotApplicableProperty | UnknownProperty {
        return entityLimit === '?'
            ? UNKNOWN_CONTAINER
            : entityLimit == null
                ? NOT_APPLICABLE_CONTAINER
                : new PropertyThatCanBeUnknownWithCommentContainer(this.#whereEntityLimit(entityLimit), false, comment,)
    }

    /**
     * Get the {@link LimitProperty limit property} from the {@link EntityTemplate template}
     *
     * @param limitTemplate the limit template
     */
    static #getLimitPropertyFields(limitTemplate: LimitPropertyTemplate,): LimitProperty {
        const {
            editor: {'1And3DS': editorLimit_SMM1And3DS, 2: editorLimit_SMM2,},
            whilePlaying: {
                isInGEL: {value: generalLimit, isSuperGlobal: superGlobalGeneralLimit,},
                isInPEL: powerUpLimit,
                isInPJL: projectileLimit,
                otherLimit: {value: otherLimit, comment: otherLimitComment,},
            },
        } = limitTemplate

        return LimitPropertyProvider.get.get([[editorLimit_SMM1And3DS, editorLimit_SMM2,], [generalLimit, superGlobalGeneralLimit,], powerUpLimit, projectileLimit, [otherLimit, otherLimitComment,],],
            GameStructureProvider.get.get(this.#whereEntityLimit(editorLimit_SMM1And3DS), this.#getPropertyWhereEntityLimit(editorLimit_SMM2),),
            [
                PropertyProvider.newBooleanContainer<GeneralEntityLimitType, true, false, true>(generalLimit, true, false,),
                PropertyProvider.newBooleanContainer<GeneralGlobalEntityLimitType, true, false, true>(superGlobalGeneralLimit, true, false,),
            ],
            PropertyProvider.newBooleanContainer(powerUpLimit, true, false,),
            PropertyProvider.newBooleanContainer<ProjectileEntityLimitType, true, false, true>(projectileLimit, true, false,),
            this.#getPropertyWhereEntityLimit(otherLimit, otherLimitComment,),
        )
    }

    //region -------------------- Property helper methods (instrument) --------------------

    /**
     * <p>
     *  Get the instrument reference (tuple) based on the value received in parameter.
     * </p>
     *
     * <p>
     *  The possible instruments can either be a single one or a mix of 2 different entities (by reference, height or alternative form)
     *
     *  The entities that are applicable for this are:
     *  <ol>
     *      <li>{@link Entities.CHAIN_CHOMP Chain Chomp}: {@link Entities.UNCHAINED_CHOMP unchained} & {@link Entities.CHAIN_CHOMP_STUMP stump}</li>
     *      <li>{@link Entities.LEMMY Lemmy}: top & bottom</li>
     *      <li>{@link Entities.TRAMPOLINE Trampoline}: regular & sideway</li>
     *  </ol>
     * </p>
     *
     * @param instrument The non null instrument (single or mixed)
     * @returns A tuple of 1 or 2 instruments
     * @see Instruments
     */
    static #whereInstrument(instrument: NonNullable<PossibleInstrument>,): | readonly [Instrument,] | readonly [Instrument, Instrument,]
    static #whereInstrument(instrument: NonNullable<PossibleInstrument>,): readonly Instrument[] {
        const singleInstrument = Instruments.getValue(instrument)
        if (singleInstrument != null)
            return [singleInstrument.reference]

        return Instruments.values.filter(enumerable => instrument.includes(enumerable.englishName))!
            .map(enumerable => enumerable.reference)
    }

    /**
     * Get the property to tell if the {@link Entity current entity} (by its {@link EntityTemplate template})
     * can make a sound out of a {@link Entities.MUSIC_BLOCK music block}.
     *
     * @param canMakeASoundOutOfAMusicBlock can make a sound out of a {@link Entities.MUSIC_BLOCK music block entity}
     * @returns {@link NotApplicableProperty N/A} or [boolean & {@link PossibleCanMakeASoundOutOfAMusicBlock_Comment nullable comment}]
     */
    static #getPropertyWhereCanMakeASoundOutOfAMusicBlock(canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock,): CanMakeASoundOutOfAMusicBlockProperty {
        return canMakeASoundOutOfAMusicBlock == null
            ? NOT_APPLICABLE_CONTAINER
            : PropertyProvider.newBooleanContainer<CanMakeASoundOutOfAMusicBlock, true, false, true>(canMakeASoundOutOfAMusicBlock, true, false,)
    }

    /**
     * Get the instrument properties of an {@link Entity entity}
     *
     * @param instrumentTemplate the instrument template
     * @returns An object holder containing the properties for the instrument part of an {@link Entity entity}
     * @see InstrumentPropertyProvider
     * @see EmptyInstrumentProperty
     */
    static #getInstrumentPropertyHolder({instrument, canMakeASoundOutOfAMusicBlock,}: InstrumentPropertyTemplate,): ObjectHolder<InstrumentProperty> {
        return instrument == null
            ? this.#EMPTY_INSTRUMENT_OBJECT_HOLDER
            : new DelayedObjectHolderContainer(() => InstrumentPropertyProvider.get.get([instrument, canMakeASoundOutOfAMusicBlock,],
                new DelayedObjectHolderContainer(() => this.#whereInstrument(instrument)),
                this.#getPropertyWhereCanMakeASoundOutOfAMusicBlock(canMakeASoundOutOfAMusicBlock,),
            ))
    }

    //endregion -------------------- Property helper methods (instrument) --------------------

    /**
     * Create the {@link Property property} from the {@link EntityTemplate template}
     * with the games, game style, theme, time & limit.
     */
    #createProperty() {
        const {isIn: {game, style: gameStyle, theme, time,}, limits, sound,} = this.template.properties

        return new PropertyInstanceContainer(
            new ObjectHolderContainer(GamePropertyProvider.get.get(game['1'], game['3DS'], game['2'],)),
            new DelayedObjectHolderContainer(() => GameStylePropertyProvider.get.get(gameStyle.superMarioBros, gameStyle.superMarioBros3, gameStyle.superMarioWorld, gameStyle.newSuperMarioBrosU, gameStyle.superMario3DWorld,)),
            new DelayedObjectHolderContainer(() => ThemePropertyProvider.get.get(theme.ground, theme.underground, theme.underwater, theme.desert, theme.snow, theme.sky, theme.forest, theme.ghostHouse, theme.airship, theme.castle,)),
            new DelayedObjectHolderContainer(() => TimePropertyProvider.get.get(time.day, time.night,)),
            new DelayedObjectHolderContainer(() => EntityBuilder.#getLimitPropertyFields(limits)),
            EntityBuilder.#getInstrumentPropertyHolder(sound),
        )
    }

    //endregion -------------------- Property helper methods --------------------
    //region -------------------- Entity references helper methods --------------------

    /**
     * Create every entity references possible applicable to a single entity.
     * It gets the single references (game, game style, theme & time),
     * but it can also get every reference from the {@link EntityTemplate template}.
     */
    #createReferences() {
        const reference = this.template.properties.reference

        //region -------------------- Single reference --------------------

        const inSuperMarioBros = this.#createOtherEntityReferences(reference.style.superMarioBros)
        const inSuperMarioBros3 = this.#createOtherEntityReferences(reference.style.superMarioBros3)
        const inSuperMarioWorld = this.#createOtherEntityReferences(reference.style.superMarioWorld)
        const inNewSuperMarioBros = this.#createOtherEntityReferences(reference.style.newSuperMarioBrosU)
        const inSuperMario3DWorld = this.#createOtherEntityReferences(reference.style.superMario3DWorld)

        const inGroundTheme = this.#createOtherEntityReferences(reference.theme.ground)
        const inUndergroundTheme = this.#createOtherEntityReferences(reference.theme.underground)
        const inUnderwaterTheme = this.#createOtherEntityReferences(reference.theme.underwater)
        const inDesertTheme = this.#createOtherEntityReferences(reference.theme.desert)
        const inSnowTheme = this.#createOtherEntityReferences(reference.theme.snow)
        const inSkyTheme = this.#createOtherEntityReferences(reference.theme.sky)
        const inForestTheme = this.#createOtherEntityReferences(reference.theme.forest)
        const inGhostHouseTheme = this.#createOtherEntityReferences(reference.theme.ghostHouse)
        const inAirshipTheme = this.#createOtherEntityReferences(reference.theme.airship)
        const inCastleTheme = this.#createOtherEntityReferences(reference.theme.castle)

        const inDayTheme = this.#createOtherEntityReferences(reference.time.day)
        const inNightTheme = this.#createOtherEntityReferences(reference.time.night)

        //endregion -------------------- Single reference --------------------
        //region -------------------- Group reference --------------------

        let everyGameStyleReferences: ObjectHolder<readonly Entity[]>
        let everyThemeReferences: ObjectHolder<readonly Entity[]>
        let everyTimeReferences: ObjectHolder<readonly Entity[]>
        let everyReferences: ObjectHolder<readonly Entity[]>
        if (reference.group.all === null)
            everyGameStyleReferences = everyThemeReferences = everyTimeReferences = everyReferences = ObjectHolders.EMPTY_ARRAY
        else {
            everyGameStyleReferences = this.#createGroupReference(reference.group.gameStyle)
            everyThemeReferences = this.#createGroupReference(reference.group.theme)
            everyTimeReferences = this.#createGroupReference(reference.group.time)
            everyReferences = this.#createGroupReference(reference.group.all)
        }

        //endregion -------------------- Group reference --------------------

        return new EntityReferencesContainer(
            inSuperMarioBros, inSuperMarioBros3, inSuperMarioWorld, inNewSuperMarioBros, inSuperMario3DWorld,
            inGroundTheme, inUndergroundTheme, inUnderwaterTheme, inDesertTheme, inSnowTheme, inSkyTheme, inForestTheme, inGhostHouseTheme, inAirshipTheme, inCastleTheme,
            inDayTheme, inNightTheme,
            everyGameStyleReferences, everyThemeReferences, everyTimeReferences, everyReferences,
        )
    }

    #createGroupReference(set: Set<EntityTemplate> | null,): ObjectHolder<readonly Entity[]> {
        return set == null
            ? ObjectHolders.EMPTY_ARRAY
            : new DelayedObjectHolderContainer(() => Array.from(set).map(reference => Entities.getValue((reference.name.english.simple || reference.name.english.american!) as PossibleEnglishName).reference))
    }

    /**
     * Create an entity {@link ObjectHolder} with returning type 1 or 2 entity.
     * It can contain 'this' that will return itself in the callback.
     *
     * @param link the entity link or null
     */
    #createOtherEntityReferences(link: | EntityLink | null,): ObjectHolder<PossibleOtherEntities> {
        return new DelayedObjectHolderContainer(
            link === null
                ? EntityBuilder.#EMPTY_ENTITY_CALLBACK
                : link === 'this'
                    ? this.#selfCallback
                    : () => (link.split(' / ') as PossibleEnglishName[]).map(splitLink => Entities.getValue(splitLink).reference) as unknown as PossibleOtherEntities
        )
    }

    //endregion -------------------- Entity references helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    public override _build(name: Name<string>,) {
        const isInProperty = this.#createProperty()
        const isInSMM1 = isInProperty.isInSuperMarioMaker1
        const isInSMM2 = isInProperty.isInSuperMarioMaker2


        return isInSMM1 && !isInSMM2
            ? new ExclusiveSMM1EntityContainer(name, this.#getEntityCategory(), isInProperty, this.#createReferences(),)
            : !isInSMM1 && isInSMM2
                ? !isInProperty.isInSuperMarioBrosStyle && !isInProperty.isInSuperMarioBros3Style && !isInProperty.isInSuperMarioWorldStyle && !isInProperty.isInNewSuperMarioBrosUStyle && isInProperty.isInSuperMario3DWorldStyle
                    ? new ExclusiveSM3DWEntityContainer(name, this.#getEntityCategory(), isInProperty, this.#createReferences(),)
                    : new ExclusiveSMM2EntityContainer(name, this.#getEntityCategory(), isInProperty, this.#createReferences(),)
                : new EntityContainer(name, this.#getEntityCategory(), isInProperty, this.#createReferences(),)
    }

}

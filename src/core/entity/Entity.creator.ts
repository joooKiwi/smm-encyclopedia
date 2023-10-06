import type {Lazy}        from '@joookiwi/lazy'
import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {NotApplicableProperty, UnknownProperty}                 from 'core/_properties/PropertyWithEverything'
import type {PropertyThatCanBeUnknownWithComment}                    from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {Entity, PossibleOtherEntities}                          from 'core/entity/Entity'
import type {EntityLink}                                             from 'core/entity/loader.types'
import type {EntityTemplate}                                         from 'core/entity/Entity.template'
import type {Property}                                               from 'core/entity/properties/Property'
import type {InstrumentProperty}                                     from 'core/entity/properties/instrument/InstrumentProperty'
import type {InstrumentPropertyTemplate}                             from 'core/entity/properties/instrument/InstrumentProperty.template'
import type {LimitProperty}                                          from 'core/entity/properties/limit/LimitProperty'
import type {LimitPropertyTemplate}                                  from 'core/entity/properties/limit/LimitProperty.template'
import type {EntityCategory}                                         from 'core/entityCategory/EntityCategory'
import type {PossibleEnglishName as PossibleEnglishName_Category}    from 'core/entityCategory/EntityCategories.types'
import type {PossibleEnglishName as PossibleEnglishName_EntityLimit} from 'core/entityLimit/EntityLimits.types'

import {PropertyContainer}                                                                                          from 'core/_properties/Property.container'
import {newBooleanContainer, newBooleanWithCommentCommentContainer, newBooleanWithCommentThatCanBeUnknownContainer} from 'core/_properties/propertyCreator'
import {EmptyEntity}                                                                                                from 'core/entity/EmptyEntity'
import {EntityContainer}                                                                                            from 'core/entity/Entity.container'
import {Entities}                                                                                                   from 'core/entity/Entities'
import {ExclusiveSM3DWEntityContainer}                                                                              from 'core/entity/ExclusiveSM3DWEntity.container'
import {ExclusiveSMM1EntityContainer}                                                                               from 'core/entity/ExclusiveSMM1Entity.container'
import {ExclusiveSMM2EntityContainer}                                                                               from 'core/entity/ExclusiveSMM2Entity.container'
import {EntityReferencesContainer}                                                                                  from 'core/entity/properties/EntityReferences.container'
import {LAZY_EMPTY_INSTRUMENT_PROPERTY}                                                                             from 'core/entity/properties/instrument/EmptyInstrumentProperty.lazy'
import {GamePropertyProvider}                                                                                       from 'core/entity/properties/game/GameProperty.provider'
import {GameStylePropertyProvider}                                                                                  from 'core/entity/properties/gameStyle/GameStyleProperty.provider'
import {InstrumentPropertyProvider}                                                                                 from 'core/entity/properties/instrument/InstrumentProperty.provider'
import {LimitPropertyProvider}                                                                                      from 'core/entity/properties/limit/LimitProperty.provider'
import {PropertyContainer as PropertyInstanceContainer}                                                             from 'core/entity/properties/Property.container'
import {ThemePropertyProvider}                                                                                      from 'core/entity/properties/theme/ThemeProperty.provider'
import {TimePropertyProvider}                                                                                       from 'core/entity/properties/time/TimeProperty.provider'
import {LAZY_EMPTY_ENTITY_CATEGORY}                                                                                 from 'core/entityCategory/EmptyEntityCategory.lazy'
import {EntityCategories}                                                                                           from 'core/entityCategory/EntityCategories'
import {EntityLimits}                                                                                               from 'core/entityLimit/EntityLimits'
import {GameStructureProvider}                                                                                      from 'core/game/GameStructure.provider'
import {Instruments}                                                                                                from 'core/instrument/Instruments'
import {UNKNOWN_CHARACTER}                                                                                          from 'util/commonVariables'
import {NameBuilderContainer}                                                                                       from 'lang/name/Name.builder.container'

const EMPTY_ENTITIES = lazy(() => [EmptyEntity.get,] as const,)

export function createContent(template: EntityTemplate,): Entity {
    const isInSMM1 = template.properties.isIn.game['1']
    const isInSMM3DS = template.properties.isIn.game['3DS']
    const isInSMM2 = template.properties.isIn.game['2']

    if (isInSMM1 && !isInSMM3DS && !isInSMM2)
        return new ExclusiveSMM1EntityContainer(
            new NameBuilderContainer(template.name, 1, false,).build(),
            getEntityCategory(template.categoryInTheEditor,),
            createProperty(template.properties,),
            createReferences(template,),
        )
    if (!isInSMM1 && !isInSMM3DS && isInSMM2) {
        if (!template.properties.isIn.style.superMarioBros
            && !template.properties.isIn.style.superMarioBros3
            && !template.properties.isIn.style.superMarioWorld
            && !template.properties.isIn.style.newSuperMarioBrosU
            && template.properties.isIn.style.superMario3DWorld)
            return new ExclusiveSM3DWEntityContainer(
                new NameBuilderContainer(template.name, 2, false,).build(),
                getEntityCategory(template.categoryInTheEditor,),
                createProperty(template.properties,),
                createReferences(template,),
            )
        return new ExclusiveSMM2EntityContainer(
            new NameBuilderContainer(template.name, 2, false,).build(),
            getEntityCategory(template.categoryInTheEditor,),
            createProperty(template.properties,),
            createReferences(template,),
        )
    }
    if (!isInSMM1 && isInSMM3DS && !isInSMM2)
        return new EntityContainer(
            new NameBuilderContainer(template.name, '3DS', false,).build(),
            getEntityCategory(template.categoryInTheEditor,),
            createProperty(template.properties,),
            createReferences(template,),
        )
    if (isInSMM1 && isInSMM3DS && !isInSMM2)
        return new EntityContainer(
            new NameBuilderContainer(template.name, 'notSMM2', false,).build(),
            getEntityCategory(template.categoryInTheEditor,),
            createProperty(template.properties,),
            createReferences(template,),
        )
    return new EntityContainer(
        new NameBuilderContainer(template.name, 'all', false,).build(),
        getEntityCategory(template.categoryInTheEditor,),
        createProperty(template.properties,),
        createReferences(template,),
    )
    // if (isInSMM1 && !isInSMM3DS && isInSMM2)
    //     return new EntityContainer(
    //         new NameBuilderContainer(template.name, 'all', false,).build(),//TODO add the "notSMM3DS"
    //         getEntityCategory(template.categoryInTheEditor,),
    //         createProperty(template.properties,),
    //         createReferences(template,),
    //     )
    // if (!isInSMM1 && isInSMM3DS && isInSMM2)
    //     return new EntityContainer(
    //         new NameBuilderContainer(template.name, 'all', false,).build(),//TODO add the "notSMM1" (note: this one is not applicable to anything)
    //         getEntityCategory(template.categoryInTheEditor,),
    //         createProperty(template.properties,),
    //         createReferences(template,),
    //     )
}


/**
 * Get the entity category reference from the {@link EntityTemplate template}
 * or return an {@link EmptyEntityCategory empty category}.
 */
function getEntityCategory(value: NullOr<PossibleEnglishName_Category>,): Lazy<EntityCategory> {
    if (value == null)
        return LAZY_EMPTY_ENTITY_CATEGORY
    return lazy(() => EntityCategories.CompanionEnum.get.getValueByName(value,).reference,)
}

function getEntityLimitProperty(value: Nullable<| PossibleEnglishName_EntityLimit | UnknownCharacter>,): PropertyThatCanBeUnknownWithComment<EntityLimits, false, null> | NotApplicableProperty | UnknownProperty {
    if (value == null)
        return PropertyContainer.NOT_APPLICABLE_CONTAINER
    if (value === UNKNOWN_CHARACTER)
        return PropertyContainer.UNKNOWN_CONTAINER
    return new PropertyContainer(EntityLimits.CompanionEnum.get.getValueByName(value,), false, null, null,)
}

function getEntityLimitPropertyWithComment<COMMENT extends NullOrString, >(value: Nullable<| PossibleEnglishName_EntityLimit | UnknownCharacter>, comment: COMMENT,): PropertyThatCanBeUnknownWithComment<EntityLimits, boolean, COMMENT> | UnknownProperty | NotApplicableProperty {
    if (value == null)
        return PropertyContainer.NOT_APPLICABLE_CONTAINER
    if (value === UNKNOWN_CHARACTER)
        return PropertyContainer.UNKNOWN_CONTAINER
    return new PropertyContainer(EntityLimits.CompanionEnum.get.getValueByName(value,), false, null, comment,)
}

function getEntityLimitByNameOrAcronymOrNull(value: Nullable<PossibleEnglishName_EntityLimit>,): NullOr<EntityLimits> {
    if (value == null)
        return null
    return EntityLimits.CompanionEnum.get.getValueByName(value,)
}

/**
 * Create a {@link Lazy} entity with returning type 1 or 2 entity.
 * It can contain 'this' that will return itself in the callback.
 *
 * @param name The entity name
 * @param link the entity link or null
 */
function getOtherEntityReferences(name: string, link: Nullable<EntityLink>,): Lazy<PossibleOtherEntities> {
    if (link == null)
        return EMPTY_ENTITIES
    if (link === 'this')
        return lazy(() => Entities.CompanionEnum.get.getValueByName(name,).reference as unknown as PossibleOtherEntities,)
    return lazy(() => (link.split(' / ').map(splitLink => Entities.CompanionEnum.get.getValueByName(splitLink,).reference,) as unknown as PossibleOtherEntities),)
}

function getOrCreateGroupReference(set: Nullable<Set<EntityTemplate>>,): Lazy<readonly Entity[]> {
    if (set == null)
        return CommonLazy.EMPTY_ARRAY
    return lazy(() => Array.from(set, it => Entities.CompanionEnum.get.getValueByName(it.name.english.simple ?? it.name.english.american,).reference,),)
}


/**
 * Create the {@link Property property} from the {@link EntityTemplate template}
 * with the games, game style, theme, time & limit.
 */
function createProperty(template: EntityTemplate['properties'],): Property {
    const isInGame = template.isIn.game
    const isInStyle = template.isIn.style
    const isInTheme = template.isIn.theme
    const isInTime = template.isIn.time

    return new PropertyInstanceContainer(
        GamePropertyProvider.get.get(isInGame['1'], isInGame['3DS'], isInGame['2'],),
        GameStylePropertyProvider.get.get(isInStyle.superMarioBros, isInStyle.superMarioBros3, isInStyle.superMarioWorld, isInStyle.newSuperMarioBrosU, isInStyle.superMario3DWorld,),
        ThemePropertyProvider.get.get(isInTheme.ground, isInTheme.underground, isInTheme.underwater, isInTheme.desert, isInTheme.snow, isInTheme.sky, isInTheme.forest, isInTheme.ghostHouse, isInTheme.airship, isInTheme.castle,),
        TimePropertyProvider.get.get(isInTime.day, isInTime.night,),
        lazy(() => getLimitPropertyFields(template.limits,),),
        getOrCreateInstrumentProperty(template.sound,),
    )
}

/**
 * Get the {@link LimitProperty limit property} from the {@link EntityTemplate template}
 *
 * @param template the limit template
 */
function getLimitPropertyFields(template: LimitPropertyTemplate,): LimitProperty {
    const editorLimit_SMM1And3DS = template.editor['1And3DS']
    const editorLimit_SMM2 = template.editor['2']
    const isInGeneralLimit = template.whilePlaying.isInGEL.value
    const isInSuperGlobalGeneralLimit = template.whilePlaying.isInGEL.isSuperGlobal
    const isInPowerUpLimit = template.whilePlaying.isInPL
    const isInProjectileLimit = template.whilePlaying.isInPJL
    const isInOtherLimit = template.whilePlaying.otherLimit.value
    const isInOtherLimitComment = template.whilePlaying.otherLimit.comment
    const isInRenderedObjectLimit = template.whilePlaying.isInRenderedObjectLimit
    const isInCollectedObjectLimit = template.whilePlaying.isInCollectedCoinLimit

    return LimitPropertyProvider.get.get(
        [[editorLimit_SMM1And3DS, editorLimit_SMM2,], [isInGeneralLimit, isInSuperGlobalGeneralLimit,], isInPowerUpLimit, isInProjectileLimit, isInRenderedObjectLimit, isInCollectedObjectLimit, [isInOtherLimit, isInOtherLimitComment,],],
        GameStructureProvider.get.get(
            getEntityLimitByNameOrAcronymOrNull(editorLimit_SMM1And3DS,),
            getEntityLimitProperty(editorLimit_SMM2,),
        ),
        [
            newBooleanWithCommentCommentContainer(isInGeneralLimit,),
            newBooleanWithCommentCommentContainer(isInSuperGlobalGeneralLimit,),
        ],
        newBooleanContainer(isInPowerUpLimit,),
        newBooleanWithCommentThatCanBeUnknownContainer(isInProjectileLimit,),
        newBooleanWithCommentCommentContainer(isInRenderedObjectLimit,),
        newBooleanContainer(isInCollectedObjectLimit,),
        getEntityLimitPropertyWithComment(isInOtherLimit, isInOtherLimitComment,),
    )
}

/**
 * Get the instrument properties of an {@link Entity entity}
 *
 * @param template the instrument template
 * @returns An object holder containing the properties for the instrument part of an {@link Entity entity}
 * @see InstrumentPropertyProvider
 * @see EmptyInstrumentProperty
 */
function getOrCreateInstrumentProperty(template: InstrumentPropertyTemplate,): Lazy<InstrumentProperty> {
    const instrument = template.instrument
    const canMakeASoundOutOfAMusicBlock = template.canMakeASoundOutOfAMusicBlock

    if (instrument == null)
        return LAZY_EMPTY_INSTRUMENT_PROPERTY
    return lazy(() => InstrumentPropertyProvider.get.get(
        [instrument, canMakeASoundOutOfAMusicBlock,],
        lazy(() => {
            const singleInstrument = Instruments.CompanionEnum.get.getValueByName(instrument,)
            if (singleInstrument != null)
                return [singleInstrument.reference,]
            return Instruments.CompanionEnum.get.values.filter(it => instrument.includes(it.englishName,),)
                .map(it => it.reference)
                .toArray()
        },),
        newBooleanWithCommentCommentContainer(canMakeASoundOutOfAMusicBlock,),
    ),)
}


/**
 * Create every entity references possible applicable to a single entity.
 * It gets the single references (game, game style, theme & time),
 * but it can also get every reference from the {@link EntityTemplate template}.
 */
function createReferences(template: EntityTemplate,) {
    const name = (template.name.english.simple ?? template.name.english.american) as string
    const entityTemplate = template.properties.reference

    let everyGameStyleReferences: Lazy<readonly Entity[]>
    let everyThemeReferences: Lazy<readonly Entity[]>
    let everyTimeReferences: Lazy<readonly Entity[]>
    let everyReferences: Lazy<readonly Entity[]>
    if (entityTemplate.group.all === null)
        everyGameStyleReferences = everyThemeReferences = everyTimeReferences = everyReferences = CommonLazy.EMPTY_ARRAY
    else {
        everyGameStyleReferences = getOrCreateGroupReference(entityTemplate.group.gameStyle,)
        everyThemeReferences = getOrCreateGroupReference(entityTemplate.group.theme,)
        everyTimeReferences = getOrCreateGroupReference(entityTemplate.group.time,)
        everyReferences = getOrCreateGroupReference(entityTemplate.group.all,)
    }

    return new EntityReferencesContainer(
        getOtherEntityReferences(name, entityTemplate.style.superMarioBros,),
        getOtherEntityReferences(name, entityTemplate.style.superMarioBros3,),
        getOtherEntityReferences(name, entityTemplate.style.superMarioWorld,),
        getOtherEntityReferences(name, entityTemplate.style.newSuperMarioBrosU,),
        getOtherEntityReferences(name, entityTemplate.style.superMario3DWorld,),

        getOtherEntityReferences(name, entityTemplate.theme.ground,),
        getOtherEntityReferences(name, entityTemplate.theme.underground,),
        getOtherEntityReferences(name, entityTemplate.theme.underwater,),
        getOtherEntityReferences(name, entityTemplate.theme.desert,),
        getOtherEntityReferences(name, entityTemplate.theme.snow,),
        getOtherEntityReferences(name, entityTemplate.theme.sky,),
        getOtherEntityReferences(name, entityTemplate.theme.forest,),
        getOtherEntityReferences(name, entityTemplate.theme.ghostHouse,),
        getOtherEntityReferences(name, entityTemplate.theme.airship,),
        getOtherEntityReferences(name, entityTemplate.theme.castle,),

        getOtherEntityReferences(name, entityTemplate.time.day,),
        getOtherEntityReferences(name, entityTemplate.time.night,),

        everyGameStyleReferences, everyThemeReferences, everyTimeReferences, everyReferences,
    )
}

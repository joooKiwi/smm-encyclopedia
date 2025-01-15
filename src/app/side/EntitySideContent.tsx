import './EntitySideContent.scss'

import {useRef} from 'react'

import type {GameCollection}  from 'util/collection/GameCollection'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image                                        from 'app/tools/images/Image'
import TextComponent                                from 'app/tools/text/TextComponent'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import Offcanvas                                    from 'bootstrap/offcanvas/Offcanvas'
import {Entities}                                   from 'core/entity/Entities'
import {Entity}                                     from 'core/entity/Entity'
import {EntityCategories}                           from 'core/entityCategory/EntityCategories'
import EntityCategoryIcon                           from 'core/entityCategory/component/EntityCategoryIcon'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import {Instruments}                                from 'core/instrument/Instruments'
import InstrumentSound                              from 'core/instrument/component/InstrumentSound'
import {Limits}                                     from 'core/limit/Limits'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {ENTITY_SIDE_CONTENT}                        from 'navigation/offcanvas ids'
import {NOT_APPLICABLE}                             from 'util/commonVariables'
import {Empty}                                      from 'util/emptyVariables'

import CategoryCompanion =   EntityCategories.Companion
import EMPTY_STRING =        Empty.EMPTY_STRING
import InstrumentCompanion = Instruments.Companion
import SMW =                 GameStyles.SMW
import SMM1 =                Games.SMM1
import SMM2 =                Games.SMM2
import SMM3DS =              Games.SMM3DS

//region -------------------- Import from deconstruction --------------------

const {BILL_BLASTER, KOOPA_CLOWN_CAR, KEY, GALOOMBA, LAKITU,
    LAKITU_CLOUD, MUSIC_BLOCK, ON_OFF_SWITCH, PARACHUTE, PIPE,
    SUPER_MUSHROOM, QUESTION_MARK_BLOCK, SWINGING_CLAW, TREE, WING,} = Entities
const {COLLECTED_LOOSE_COIN_LIMIT, DYNAMIC_RENDERED_OBJECT_LIMIT, GENERAL_ENTITY_LIMIT,
    LOOSE_COIN_LIMIT, POWER_UP_ENTITY_LIMIT, PROJECTILE_LIMIT,} = Limits
const {ENTITY,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

interface EntitySideContentProperties
    extends ReactProperties {

    readonly reference: Entities

    readonly games: GameCollection

}

interface EntitySideContentReferenceProperties
    extends ReactProperties {

    readonly reference: Entity

}

interface EntitySideContentWithGameReferenceProperties
    extends EntitySideContentReferenceProperties {

    readonly games: GameCollection

}

/** @reactComponent */
export default function EntitySideContent({reference, games,}: EntitySideContentProperties,) {
    const offcanvas = useRef<HTMLDivElement>(null,)
    const {englishName, englishNameInHtml, reference: entityReference,} = reference

    return <Offcanvas modalReference={offcanvas}>
        <div ref={offcanvas} id={ENTITY_SIDE_CONTENT} className={`offcanvas offcanvas-start side-content ${englishNameInHtml}-side-content`} tabIndex={-1} aria-labelledby="entity-side-content-title">
            <div className="offcanvas-header">
                <h1 id="entity-side-content-title" className="offcanvas-title text-decoration-underline">
                    <NameComponent key={`entity side content name (${englishName})`} id="entity-side-content-name" name={entityReference}/>
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-labelledby={contentTranslation('Close',)}/>
            </div>
            <div className="offcanvas-body pb-5">
                <EntityCategorySideContent reference={entityReference}/>
                <h2>{unfinishedText('Properties',)}</h2>
                <ul className="list-group list-group-flush">
                    <HasAMushroomVariantListItem reference={entityReference}/>
                    <CanBeInAParachuteListItem reference={entityReference}/>
                    <CanHaveWingsListItem reference={entityReference}/>
                    <CanMakeASoundOutOfAMusicBlockListItem reference={entityReference}/>
                    <CanContainOrSpawnAKeyListItem reference={entityReference}/>
                    <IsAffectedDirectlyByAnOnOffStateListItem reference={entityReference}/>
                    <CanSpawnOutOfAPipeListItem reference={entityReference}/>
                    <CanBePutOnASwingingClawListItem reference={entityReference}/>
                    <CanBeThrownByALakituListItem reference={entityReference}/>
                    <CanBePutInALakituCloudListItem reference={entityReference}/>
                    <CanBePutInAClownCarListItem reference={entityReference}/>
                    <CanBeFiredOutOfABulletLauncherListItem reference={entityReference}/>
                    <CanComeOutOfABlockListItem reference={entityReference}/>
                    <CanBePutInATreeListItem reference={entityReference}/>
                    <CanBeStackedListItem reference={entityReference}/>
                </ul>
                <h2>{gameContentTranslation('limit.singular',)}</h2>
                <h3 className="fs-5 ms-2">{gameContentTranslation('limit.editor.complete',)}</h3>
                <ul id="entity-sideContent-editorLimit-container" className="ms-2"><EditorLimitListItem key={`Editor limit list-item (${englishName})`} reference={entityReference} games={games}/></ul>
                <h3 className="fs-5 ms-2">{gameContentTranslation('limit.play.complete',)}</h3>
                <ul id="entity-sideContent-playLimit-container" className="ms-2">
                    <GeneralLimitListItem reference={entityReference}/>
                    <PowerUpLimitListItem reference={entityReference}/>
                    <ProjectileLimitListItem reference={entityReference}/>
                    <DynamicRenderedObjectLimitListItem reference={entityReference}/>
                    <CollectedLooseCoinLimitListItem reference={entityReference}/>
                    <OtherLimitListItem reference={entityReference}/>
                </ul>
            </div>
        </div>
    </Offcanvas>
}

//region -------------------- Category icon --------------------

/** @reactComponent */
function EntityCategorySideContent({reference,}: EntitySideContentReferenceProperties,) {
    const name = reference.categoryAmericanEnglish
    if (name === EMPTY_STRING)
        return null
    return <div className="d-flex align-items-center">
        <h2>{gameContentTranslation('Category',)}</h2>
        <EntityCategoryIcon reference={CategoryCompanion.getValueByName(name,)}/>
    </div>
}

//endregion -------------------- Category icon --------------------
//region -------------------- Properties --------------------

/** @reactComponent */
function HasAMushroomVariantListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.hasAMushroomVariant)
        return null

    return <li id="hasAMushroomVariant-listItem" className="list-group-item">
        <Image file={SUPER_MUSHROOM.image.get(SMW,).getFirst()} className="entity-image"/>
        <span>{unfinishedText('Has a mushroom variant',)}</span>
    </li>
}

/** @reactComponent */
function CanBeInAParachuteListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canBeInAParachute)
        return null

    const comment = reference.canBeInAParachuteComment
    return <li id="canBeInAParachute-listItem" className="list-group-item">
        <Image file={PARACHUTE.image.get(SMW,).getFirst()} className="entity-image"/>
        <span>{unfinishedText('Can be put in a parachute',)}</span>
        {comment == null ? null : <small className="comment">{
            gameContentTranslation(`entity.property.${comment}`, {acronym: LOOSE_COIN_LIMIT.acronym!, limit: LOOSE_COIN_LIMIT.reference.languageValue,},)
        }</small>}
    </li>
}

/** @reactComponent */
function CanHaveWingsListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canHaveWings)
        return null

    const comment = reference.canHaveWingsComment
    return <li id="canHaveWings-listItem" className="list-group-item">
        <Image file={WING.image.get(SMW,).getFirst()} className="entity-image"/>
        <span>{unfinishedText('Can have wings',)}</span>
        {comment == null ? null : <small className="comment">{
            gameContentTranslation(`entity.property.${comment}`, {acronym: LOOSE_COIN_LIMIT.acronym!, limit: LOOSE_COIN_LIMIT.reference.languageValue,},)
        }</small>}
    </li>
}

/** @reactComponent */
function CanMakeASoundOutOfAMusicBlockListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canMakeASoundOutOfAMusicBlock)
        return null

    const comment = reference.canMakeASoundOutOfAMusicBlockComment
    return <li id="canMakeASoundOutOfAMusicBlock-listItem" className="list-group-item">
        <Image file={MUSIC_BLOCK.image.get(SMW,).getFirst()} className="entity-image"/>
        <div id="instrument-sounds" className="d-inline-block">
            {reference.instruments.map(it => InstrumentCompanion.getValueByName(it.americanEnglish,),).map((it, i,) =>
                <InstrumentSound key={`Instrument sound #${i + 1} (${it.englishName})`} value={it}/>,)}
        </div>
        <span>{unfinishedText('Can make a sound out of a Music Block',)}</span>
        {comment == null ? null : <small className="comment">{
            gameContentTranslation(`instrument.${comment}`,)
        }</small>}
    </li>
}

/** @reactComponent */
function CanContainOrSpawnAKeyListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canContainOrSpawnAKey)
        return null
    return <li id="canContainOrSpawnAKey-listItem" className="list-group-item">
        <Image file={KEY.image.get(SMW,).getFirst()} className="entity-image"/>
        <span>{unfinishedText('Can contain or spawn a Key',)}</span>
    </li>
}

/** @reactComponent */
function IsAffectedDirectlyByAnOnOffStateListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.isAffectDirectlyByAnOnOffState)
        return null

    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    const comment = reference.isAffectDirectlyByAnOnOffStateComment
    return <li id="isAffectDirectlyByAnOnOffState-listItem" className="list-group-item">
        <Image file={ON_OFF_SWITCH.image.get(SMW,).getFirst()} className="entity-image"/>
        <span>{unfinishedText('Is affected directly by an ON/OFF state',)}</span>
        {comment == null ? null : <small className="comment">{
            gameContentTranslation(`entity.property.${comment}`, {entity: entityAsLowerCase,},)
        }</small>}
    </li>
}

/** @reactComponent */
function CanSpawnOutOfAPipeListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canSpawnOutOfAPipe)
        return null
    return <li id="canSpawnOutOfAPipe-listItem" className="list-group-item">
        <Image file={PIPE.image.get(SMW,).getFirst()} className="entity-image"/>
        <span>{unfinishedText('Can spawn out of a Pipe',)}</span>
    </li>
}

/** @reactComponent */
function CanBePutOnASwingingClawListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canBePutOnASwingingClaw)
        return null

    const images = SWINGING_CLAW.inGameImage.get(SMW,)
    return <li id="canBePutOnASwingingClaw-listItem" className="list-group-item">
        <div id="swingingClaw-groupImage" className="d-inline-flex flex-column align-items-center">
            {images.slice([0, 1, 1, 1, 1, 2,],).map((it, i,) =>
                <Image key={`Swinging Claw image #${i + 1}`} file={it} className="entity-image"/>,)}
        </div>
        <span>{unfinishedText('Can be put on a Swinging Claw',)}</span>
    </li>
}

/** @reactComponent */
function CanBeThrownByALakituListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canBeThrownByALakitu)
        return null
    return <li id="canBeThrownByALakitu-listItem" className="list-group-item">
        <div id="lakitu-groupImage" className="d-inline-flex">
            <Image id="animated-lakitu" images={LAKITU.inGameImage.get(SMW,).map( it => ({file: it,}),)}/>
            <Image id="animated-lakituCloud" images={LAKITU_CLOUD.inGameImage.get(SMW,).map(it => ({file: it,}),)}/>
            {/*<Image file={new ArrayAsCollection(LAKITU.inGameImage.get(SMW,),).get(2,)} className="entity-image top-0"/>*/}
            {/*<Image file={new ArrayAsCollection(LAKITU_CLOUD.image.get(SMW,),).getFirst()} className="entity-image bottom-0"/>*/}
        </div>
        <span>{unfinishedText('Can be thrown by a Lakitu',)}</span>
    </li>
}

/** @reactComponent */
function CanBePutInALakituCloudListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canBePutInALakituCloud)
        return null
    return <li id="canBePutInALakituCloud-listItem" className="list-group-item">
        <Image id="animated-cloud" className="d-inline-block" images={LAKITU_CLOUD.inGameImage.get(SMW,).map(it => ({file: it,}),)}/>
        {/*<Image file={LAKITU_CLOUD.image.get(SMW,).getFirst()} className="entity-image"/>*/}
        <span>{unfinishedText('Can be put in a Lakitu’s Cloud',)}</span>
    </li>
}

/** @reactComponent */
function CanBePutInAClownCarListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canBePutInAClownCar)
        return null
    return <li id="canBePutInAClownCar-listItem" className="list-group-item">
        <Image id="animated-clownCar" className="d-inline-block" images={KOOPA_CLOWN_CAR.inGameImage.get(SMW,).slice(8, 11,).map(it => ({file: it,}),)}/>
        {/*<Image file={KOOPA_CLOWN_CAR.image.get(SMW,).getFirst()} className="entity-image"/>*/}
        <span>{unfinishedText('Can be put in a Clown Car',)}</span>
    </li>
}

/** @reactComponent */
function CanBeFiredOutOfABulletLauncherListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canBeFiredOutOfABillBlaster)
        return null
    return <li id="canBeFiredOutOfABillBlaster-listItem" className="list-group-item">
        <Image file={BILL_BLASTER.image.get(SMW,).getFirst()} className="entity-image"/>
        <span>{unfinishedText('Can be fired out of a Bill Blaster',)}</span>
    </li>
}

/** @reactComponent */
function CanComeOutOfABlockListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canComeOutOfABlock)
        return null
    return <li id="canComeOutOfABlock-listItem" className="list-group-item">
        <Image file={QUESTION_MARK_BLOCK.image.get(SMW,).getFirst()} className="entity-image"/>
        <span>{unfinishedText('Can come out of a Block',)}</span>
    </li>
}

/** @reactComponent */
function CanBePutInATreeListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canBePutInATree)
        return null
    return <li id="canBePutInATree-listItem" className="list-group-item">
        <Image file={TREE.image.images.getFirst()} className="entity-image"/>
        <span>{unfinishedText('Can be put in a Tree',)}</span>
    </li>
}

/** @reactComponent */
function CanBeStackedListItem({reference,}: EntitySideContentReferenceProperties,) {
    if (!reference.canBeStacked)
        return null

    const images = GALOOMBA.inGameImage.get(SMW,).slice(3, 4,)
    return <li id="canBeStacked-listItem" className="list-group-item">
        <div id="stackedGaloomba-groupImage" className="d-inline-flex flex-column">
            <Image id="animated-galoomba1" images={images.map(it => ({file: it,}),)}/>
            <Image id="animated-galoomba2" images={images.map(it => ({file: it,}),)}/>
        </div>
        {/*<Image file={images.getFirst()} className="entity-image"/>*/}
        {/*<Image file={images.getFirst()} className="entity-image"/>*/}
        <span>{unfinishedText('Can be stacked',)}</span>
    </li>
}

//endregion -------------------- Properties --------------------
//region -------------------- Limit --------------------

/** @reactComponent */
function EditorLimitListItem({reference: {editorLimit_smm2, editorLimit_smm1And3ds,}, games,}: EntitySideContentWithGameReferenceProperties,) {
    const limit_smm1And3ds = editorLimit_smm1And3ds === NOT_APPLICABLE ? null : editorLimit_smm1And3ds
    const limit_smm2 = editorLimit_smm2 === NOT_APPLICABLE ? null : editorLimit_smm2

    if (games.hasOnlySmm2)
        if (limit_smm2 == null)
            return null
        else
            return <li>
                <NameComponent id={`limit-sideName-smm2Editor-${limit_smm2.englishNameInHtml}`} name={limit_smm2.reference}/>
            </li>

    if (games.hasOnlySmm1Or3ds)
        if (limit_smm1And3ds == null)
            return null
        else
            return <li>
                <NameComponent id={`limit-sideName-smm1And3dsEditor-${limit_smm1And3ds.englishNameInHtml}`} name={limit_smm1And3ds.reference}/>
            </li>

    if (limit_smm2 == null && limit_smm1And3ds == null)
        return null

    if (limit_smm2 === limit_smm1And3ds)
        if (limit_smm2 == null)
            return null
        else
            return <li>
                <NameComponent id={`limit-sideName-smm1And3dsAnd2Editor-${limit_smm2.englishNameInHtml}`} name={limit_smm2.reference}/>
            </li>

    if (limit_smm2 == null)
        return <>
            {limit_smm1And3ds == null ? null : <li>
                <NameComponent id={`limit-sideName-smm1And3dsEditor-${limit_smm1And3ds.englishNameInHtml}`} name={limit_smm1And3ds.reference}/>
                <sup>
                    <GameImage reference={SMM1}/>
                    <GameImage reference={SMM3DS}/>
                </sup>
            </li>}
            <li>
                <TextComponent content={NOT_APPLICABLE}/>
                <sup><GameImage reference={SMM2}/></sup>
            </li>
        </>
    if (limit_smm1And3ds == null)
        return <>
            <li>
                <TextComponent content={NOT_APPLICABLE}/>
                <sup>
                    <GameImage reference={SMM1}/>
                    <GameImage reference={SMM3DS}/>
                </sup>
            </li>
            <li>
                <NameComponent id={`limit-sideName-smm2Editor-${limit_smm2.englishNameInHtml}`} name={limit_smm2.reference}/>
                <sup><GameImage reference={SMM2}/></sup>
            </li>
        </>
    return <>
        <li>
            <NameComponent id={`limit-sideName-smm1And3dsEditor-${limit_smm1And3ds.englishNameInHtml}`} name={limit_smm1And3ds.reference}/>
            <sup>
                <GameImage reference={SMM1}/>
                <GameImage reference={SMM3DS}/>
            </sup>
        </li>
        <li>
            <NameComponent id={`limit-sideName-smm2Editor-${limit_smm2.englishNameInHtml}`} name={limit_smm2.reference}/>
            <sup><GameImage reference={SMM2}/></sup>
        </li>
    </>
}


/** @reactComponent */
function GeneralLimitListItem({reference,}: EntitySideContentReferenceProperties,) {
    const limit = reference.isInGeneralLimit
    // const globalLimit = reference.isInGlobalGeneralLimit

    if (!limit)
        return null

    const {englishNameInHtml, reference: limitReference,} = GENERAL_ENTITY_LIMIT
    return <li>
        <TextComponent content={`${GENERAL_ENTITY_LIMIT.acronym} `} className="text-body text-opacity-75 fst-italic"/>
        <NameComponent id={`limit-sideName-${englishNameInHtml}`} name={limitReference}/>
        <small className="text-body text-opacity-50">
            <TextComponent content={' ('}/>
            <TextComponent content={`${GENERAL_ENTITY_LIMIT.alternativeAcronym} `} className="fst-italic"/>
            <NameComponent id={`limit-sideName-alternative-${englishNameInHtml}`} name={limitReference.alternativeContainer}/>
            <TextComponent content=")"/>
        </small>
    </li>
}

/** @reactComponent */
function PowerUpLimitListItem({reference,}: EntitySideContentReferenceProperties,) {
    const limit = reference.isInPowerUpLimit

    if (!limit)
        return null

    const {englishNameInHtml, reference: limitReference,} = POWER_UP_ENTITY_LIMIT
    return <li>
        <TextComponent content={`${POWER_UP_ENTITY_LIMIT.acronym} `} className="text-body text-opacity-75 fst-italic"/>
        <NameComponent id={`limit-sideName-${englishNameInHtml}`} name={limitReference}/>
        <small className="text-body text-opacity-50">
            <TextComponent content={' ('}/>
            <TextComponent content={`${POWER_UP_ENTITY_LIMIT.alternativeAcronym} `} className="fst-italic"/>
            <NameComponent id={`limit-sideName-alternative-${englishNameInHtml}`} name={limitReference.alternativeContainer}/>
            <TextComponent content=")"/>
        </small>
    </li>
}

/** @reactComponent */
function ProjectileLimitListItem({reference,}: EntitySideContentReferenceProperties,) {
    const limit = reference.isInProjectileLimit

    if (!limit)
        return null

    return <li>
        <TextComponent content={`${PROJECTILE_LIMIT.acronym} `} className="text-body text-opacity-75 fst-italic"/>
        <NameComponent id={`limit-sideName-${PROJECTILE_LIMIT.englishNameInHtml}`} name={PROJECTILE_LIMIT.reference}/>
    </li>
}

/** @reactComponent */
function DynamicRenderedObjectLimitListItem({reference,}: EntitySideContentReferenceProperties,) {
    const limit = reference.isInDynamicRenderedObjectLimit

    if (!limit)
        return null

    const {englishNameInHtml, reference: limitReference,} = DYNAMIC_RENDERED_OBJECT_LIMIT
    return <li>
        <NameComponent id={`limit-sideName-${englishNameInHtml}`} name={limitReference}/>
        <small className="text-body text-opacity-50">
            <TextComponent content={' ('}/>
            <NameComponent id={`limit-sideName-alternative-${englishNameInHtml}`} name={limitReference.alternativeContainer}/>
            <TextComponent content=")"/>
        </small>
    </li>
}

/** @reactComponent */
function CollectedLooseCoinLimitListItem({reference,}: EntitySideContentReferenceProperties,) {
    const limit = reference.isInCollectedLooseCoinLimit

    if (!limit)
        return null
    return <li>
        <NameComponent id={`limit-sideName-${COLLECTED_LOOSE_COIN_LIMIT.englishNameInHtml}`} name={COLLECTED_LOOSE_COIN_LIMIT.reference}/>
    </li>
}

/** @reactComponent */
function OtherLimitListItem({reference,}: EntitySideContentReferenceProperties,) {
    const limit = reference.otherLimit

    if (limit == null)
        return null

    const acronym = limit.acronym
    return <li>
        {acronym == null ? null : <TextComponent content={`${acronym} `} className="text-body text-opacity-75 fst-italic"/>}
        <NameComponent id={`limit-sideName-${limit.englishNameInHtml}`} name={limit.reference}/>
    </li>
}

//endregion -------------------- Limit --------------------

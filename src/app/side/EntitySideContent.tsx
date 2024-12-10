import './EntitySideContent.scss'

import {useRef}                                                                     from 'react'
import {getFirstByArray, mapByArray, sliceWithARangeByArray, sliceWithArrayByArray} from '@joookiwi/collection'

import type {ReactProperties} from 'util/react/ReactProperties'

import Image                                        from 'app/tools/images/Image'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import Offcanvas                                    from 'bootstrap/offcanvas/Offcanvas'
import {Entities}                                   from 'core/entity/Entities'
import {Entity}                                     from 'core/entity/Entity'
import {EntityCategories}                           from 'core/entityCategory/EntityCategories'
import EntityCategoryIcon                           from 'core/entityCategory/component/EntityCategoryIcon'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import {Instruments}                                from 'core/instrument/Instruments'
import InstrumentSound                              from 'core/instrument/component/InstrumentSound'
import {Limits}                                     from 'core/limit/Limits'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {ENTITY_SIDE_CONTENT}                        from 'navigation/offcanvas ids'
import {Empty}                                      from 'util/emptyVariables'

import CategoryCompanion =   EntityCategories.Companion
import EMPTY_STRING =        Empty.EMPTY_STRING
import InstrumentCompanion = Instruments.Companion
import SMW =                 GameStyles.SMW


//region -------------------- Helper constants --------------------

const {BILL_BLASTER, KOOPA_CLOWN_CAR, KEY, GALOOMBA, LAKITU,
    LAKITU_CLOUD, MUSIC_BLOCK, ON_OFF_SWITCH, PARACHUTE, PIPE,
    SUPER_MUSHROOM, QUESTION_MARK_BLOCK, SWINGING_CLAW, TREE, WING,} = Entities
const {LOOSE_COIN_LIMIT,} = Limits
const {ENTITY,} = OtherWordInTheGames

//endregion -------------------- Helper constants --------------------

interface EntitySideContentProperties
    extends ReactProperties {

    reference: Entities

}

/** @reactComponent */
export default function EntitySideContent({reference,}: EntitySideContentProperties,) {
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
            <div className="offcanvas-body">
                <div className="d-flex align-items-center">
                    <h2>{gameContentTranslation('Category',)}</h2>
                    <EntityCategorySideIcon reference={entityReference}/>
                </div>
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
            </div>
        </div>
    </Offcanvas>
}

//region -------------------- Side icon --------------------

interface EntitySideContentIconProperties
    extends ReactProperties {

    readonly reference: Entity

}

/** @reactComponent */
function EntityCategorySideIcon({reference,}: EntitySideContentIconProperties,) {
    const name = reference.categoryAmericanEnglish
    if (name === EMPTY_STRING)
        return null
    return <EntityCategoryIcon reference={CategoryCompanion.getValueByName(name,)}/>
}

//endregion -------------------- Side icon --------------------
//region -------------------- Side content --------------------

interface EntitySideContentListItemProperties
    extends ReactProperties {

    readonly reference: Entity

}

/** @reactComponent */
function HasAMushroomVariantListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.hasAMushroomVariant)
        return null

    return <li id="hasAMushroomVariant-listItem" className="list-group-item">
        <Image file={getFirstByArray(SUPER_MUSHROOM.image.get(SMW,),)} className="entity-image"/>
        <span>{unfinishedText('Has a mushroom variant',)}</span>
    </li>
}

/** @reactComponent */
function CanBeInAParachuteListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canBeInAParachute)
        return null

    const comment = reference.canBeInAParachuteComment
    return <li id="canBeInAParachute-listItem" className="list-group-item">
        <Image file={getFirstByArray(PARACHUTE.image.get(SMW,),)} className="entity-image"/>
        <span>{unfinishedText('Can be put in a parachute',)}</span>
        {comment == null ? null : <small className="comment">{
            gameContentTranslation(`entity.property.${comment}`, {acronym: LOOSE_COIN_LIMIT.acronym!, limit: LOOSE_COIN_LIMIT.reference.languageValue,},)
        }</small>}
    </li>
}

/** @reactComponent */
function CanHaveWingsListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canHaveWings)
        return null

    const comment = reference.canHaveWingsComment
    return <li id="canHaveWings-listItem" className="list-group-item">
        <Image file={getFirstByArray(WING.image.get(SMW,),)} className="entity-image"/>
        <span>{unfinishedText('Can have wings',)}</span>
        {comment == null ? null : <small className="comment">{
            gameContentTranslation(`entity.property.${comment}`, {acronym: LOOSE_COIN_LIMIT.acronym!, limit: LOOSE_COIN_LIMIT.reference.languageValue,},)
        }</small>}
    </li>
}

/** @reactComponent */
function CanMakeASoundOutOfAMusicBlockListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canMakeASoundOutOfAMusicBlock)
        return null

    const comment = reference.canMakeASoundOutOfAMusicBlockComment
    return <li id="canMakeASoundOutOfAMusicBlock-listItem" className="list-group-item">
        <Image file={getFirstByArray(MUSIC_BLOCK.image.get(SMW,),)} className="entity-image"/>
        <div id="instrument-sounds" className="d-inline-block">
            {mapByArray(reference.instruments, it => InstrumentCompanion.getValueByName(it.americanEnglish,),).map((it, i,) =>
                <InstrumentSound key={`Instrument sound #${i + 1}`} value={it}/>,)}
        </div>
        <span>{unfinishedText('Can make a sound out of a Music Block',)}</span>
        {comment == null ? null : <small className="comment">{
            gameContentTranslation(`instrument.${comment}`,)
        }</small>}
    </li>
}

/** @reactComponent */
function CanContainOrSpawnAKeyListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canContainOrSpawnAKey)
        return null
    return <li id="canContainOrSpawnAKey-listItem" className="list-group-item">
        <Image file={getFirstByArray(KEY.image.get(SMW,),)} className="entity-image"/>
        <span>{unfinishedText('Can contain or spawn a Key',)}</span>
    </li>
}

/** @reactComponent */
function IsAffectedDirectlyByAnOnOffStateListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.isAffectDirectlyByAnOnOffState)
        return null

    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    const comment = reference.isAffectDirectlyByAnOnOffStateComment
    return <li id="isAffectDirectlyByAnOnOffState-listItem" className="list-group-item">
        <Image file={getFirstByArray(ON_OFF_SWITCH.image.get(SMW,),)} className="entity-image"/>
        <span>{unfinishedText('Is affected directly by an ON/OFF state',)}</span>
        {comment == null ? null : <small className="comment">{
            gameContentTranslation(`entity.property.${comment}`, {entity: entityAsLowerCase,},)
        }</small>}
    </li>
}

/** @reactComponent */
function CanSpawnOutOfAPipeListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canSpawnOutOfAPipe)
        return null
    return <li id="canSpawnOutOfAPipe-listItem" className="list-group-item">
        <Image file={getFirstByArray(PIPE.image.get(SMW,),)} className="entity-image"/>
        <span>{unfinishedText('Can spawn out of a Pipe',)}</span>
    </li>
}

/** @reactComponent */
function CanBePutOnASwingingClawListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canBePutOnASwingingClaw)
        return null

    const images = SWINGING_CLAW.inGameImage.get(SMW,)
    return <li id="canBePutOnASwingingClaw-listItem" className="list-group-item">
        <div id="swingingClaw-groupImage" className="d-inline-flex flex-column align-items-center">
            {sliceWithArrayByArray(images, [0, 1, 1, 1, 1, 2,]).map((it, i,) =>
                <Image key={`Swinging Claw image #${i + 1}`} file={it} className="entity-image"/>,)}
        </div>
        <span>{unfinishedText('Can be put on a Swinging Claw',)}</span>
    </li>
}

/** @reactComponent */
function CanBeThrownByALakituListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canBeThrownByALakitu)
        return null
    return <li id="canBeThrownByALakitu-listItem" className="list-group-item">
        <div id="lakitu-groupImage" className="d-inline-flex">
            <Image partialId="animated-lakitu" images={mapByArray(LAKITU.inGameImage.get(SMW,), it => ({file: it,}),).toArray()}/>
            <Image partialId="animated-lakituCloud" images={mapByArray(LAKITU_CLOUD.inGameImage.get(SMW,), it => ({file: it,}),).toArray()}/>
            {/*<Image file={LAKITU.inGameImage.get(SMW,)[2]} className="entity-image top-0"/>*/}
            {/*<Image file={getFirstByArray(LAKITU_CLOUD.image.get(SMW,),)} className="entity-image bottom-0"/>*/}
        </div>
        <span>{unfinishedText('Can be thrown by a Lakitu',)}</span>
    </li>
}

/** @reactComponent */
function CanBePutInALakituCloudListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canBePutInALakituCloud)
        return null
    return <li id="canBePutInALakituCloud-listItem" className="list-group-item">
        <Image partialId="animated-cloud" className="d-inline-block" images={mapByArray(LAKITU_CLOUD.inGameImage.get(SMW,), it => ({file: it,}),).toArray()}/>
        {/*<Image file={getFirstByArray(LAKITU_CLOUD.image.get(SMW,),)} className="entity-image"/>*/}
        <span>{unfinishedText('Can be put in a Lakitu’s Cloud',)}</span>
    </li>
}

/** @reactComponent */
function CanBePutInAClownCarListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canBePutInAClownCar)
        return null
    return <li id="canBePutInAClownCar-listItem" className="list-group-item">
        <Image partialId="animated-clownCar" className="d-inline-block" images={sliceWithARangeByArray(KOOPA_CLOWN_CAR.inGameImage.get(SMW,), 8, 11,).map(it => ({file: it,}),).toArray()}/>
        {/*<Image file={getFirstByArray(KOOPA_CLOWN_CAR.image.get(SMW,),)} className="entity-image"/>*/}
        <span>{unfinishedText('Can be put in a Clown Car',)}</span>
    </li>
}

/** @reactComponent */
function CanBeFiredOutOfABulletLauncherListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canBeFiredOutOfABulletLauncher)
        return null
    return <li id="canBeFiredOutOfABillBlaster-listItem" className="list-group-item">
        <Image file={getFirstByArray(BILL_BLASTER.image.get(SMW,),)} className="entity-image"/>
        <span>{unfinishedText('Can be fired out of a Bill Blaster',)}</span>
    </li>
}

/** @reactComponent */
function CanComeOutOfABlockListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canComeOutOfABlock)
        return null
    return <li id="canComeOutOfABlock-listItem" className="list-group-item">
        <Image file={getFirstByArray(QUESTION_MARK_BLOCK.image.get(SMW,),)} className="entity-image"/>
        <span>{unfinishedText('Can come out of a Block',)}</span>
    </li>
}

/** @reactComponent */
function CanBePutInATreeListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canBePutInATree)
        return null
    return <li id="canBePutInATree-listItem" className="list-group-item">
        <Image file={getFirstByArray(TREE.image.images,)} className="entity-image"/>
        <span>{unfinishedText('Can be put in a Tree',)}</span>
    </li>
}

/** @reactComponent */
function CanBeStackedListItem({reference,}: EntitySideContentListItemProperties,) {
    if (!reference.canBeStacked)
        return null

    const images = sliceWithARangeByArray(GALOOMBA.inGameImage.get(SMW,), 3, 4,)
    return <li id="canBeStacked-listItem" className="list-group-item">
        <div id="stackedGaloomba-groupImage" className="d-inline-flex flex-column">
            <Image partialId="animated-galoomba1" images={images.map(it => ({file: it,}),).toArray()}/>
            <Image partialId="animated-galoomba2" images={images.map(it => ({file: it,}),).toArray()}/>
        </div>
        {/*<Image file={getFirstByArray(GALOOMBA.image.get(SMW,),)} className="entity-image"/>*/}
        {/*<Image file={getFirstByArray(GALOOMBA.image.get(SMW,),)} className="entity-image"/>*/}
        <span>{unfinishedText('Can be stacked',)}</span>
    </li>
}

//endregion -------------------- Side content --------------------

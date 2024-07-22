import './DisplayView.scss'

import {CollectionConstants}                             from '@joookiwi/collection'

import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                                             from 'app/tools/images/Image'
import UnfinishedText, {unfinishedText}                  from 'app/tools/text/UnfinishedText'
import {Games}                                           from 'core/game/Games'
import {useCurrentGames}                                 from 'core/game/gamesHook'
import {OtherWordInTheGames}                             from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import DisplayViewRouteButton                            from 'navigation/DisplayView.routeButton'

/** @reactComponent */
export default function DisplayViewBody() {
    const games = useCurrentGames('display view body',) ?? CollectionConstants.EMPTY_COLLECTION_HOLDER

    const isSMM1Selected = games.has(Games.SUPER_MARIO_MAKER_1,)
    // const isSMM3DSSelected = games.has(Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,)
    const isSMM2Selected = games.has(Games.SUPER_MARIO_MAKER_2,)
    const tag = OtherWordInTheGames.TAG.singularNameOnReference
    const tagAsLowerCase = OtherWordInTheGames.TAG.singularLowerCaseNameOnReference
    // const tags = OtherWordInTheGames.TAG.pluralNameOnReference
    const tagsAsLowerCase = OtherWordInTheGames.TAG.pluralLowerCaseNameOnReference
    const mysteryMushroom = OtherWordInTheGames.MYSTERY_MUSHROOM.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.singularEnglishName,)
    const mysteryMushroomAsLowerCase = mysteryMushroom.toLowerCase()
    const mysteryMushrooms = OtherWordInTheGames.MYSTERY_MUSHROOM.pluralNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.pluralEnglishName,)
    const mysteryMushroomsAsLowerCase = mysteryMushrooms.toLowerCase()
    const miiCostume = OtherWordInTheGames.MII_COSTUME.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.singularEnglishName,)
    const miiCostumeAsLowerCase = OtherWordInTheGames.MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.singularEnglishName,)
    // const miiCostumes = OtherWordInTheGames.MII_COSTUME.pluralNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.pluralEnglishName,)
    const miiCostumesAsLowerCase = OtherWordInTheGames.MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.pluralEnglishName,)
    const entity = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
    const entityAsLowerCase = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    const entities = OtherWordInTheGames.ENTITY.pluralNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.pluralEnglishName,)
    const entitiesAsLowerCase = OtherWordInTheGames.ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? entities.toLowerCase()
    const course = OtherWordInTheGames.COURSE.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,)
    const courseAsLowerCase = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReference
    const courses = OtherWordInTheGames.COURSE.pluralNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.pluralEnglishName,)
    const coursesAsLowerCase = OtherWordInTheGames.COURSE.pluralLowerCaseNameOnReferenceOrNull ?? courses.toLowerCase()
    const powerUp = OtherWordInTheGames.POWER_UP.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.POWER_UP.singularEnglishName,)
    const powerUpAsLowerCase = powerUp.toLowerCase()
    const powerUps = OtherWordInTheGames.POWER_UP.pluralNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.POWER_UP.pluralEnglishName,)
    const powerUpsAsLowerCase = powerUps.toLowerCase()

    return <div id="display-modal-body-container" className="container">
        <div id="display-entity-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{entity}</h3>
            <div key="button group (entity)" id="entity-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyEntity" value={entity}
                                        tooltipValue={gameContentTranslation('entity.display all', {Entity: entity, entity: entityAsLowerCase, Entities: entities, entities: entitiesAsLowerCase,},)}/>
                <DisplayViewRouteButton routeName="everyEntityCategory" value={gameContentTranslation('Category',)}
                                        tooltipValue={gameContentTranslation('entity category.display all', {Entity: entity, entity: entityAsLowerCase, Entities: entities, entities: entitiesAsLowerCase,},)}/>
                {/*<DisplayViewRouteButton routeName="everyGroup" value={gameContentTranslation('Group',)}
                                        tooltipValue={gameContentTranslation('entity group.display all', {Entity: entity, entity: entityAsLowerCase, Entities: entities, entities: entitiesAsLowerCase,},)}/>*/}
                {/*TODO add other predefined group of entities*/}
            </div>
            <div key="button group (limit)" id="limit-buttonGroup" className="btn-group-vertical col-6" role="group">
                <DisplayViewRouteButton routeName="everyLimit" value={gameContentTranslation('limit.singular',)}
                                        tooltipValue={gameContentTranslation('limit.all.display all',)}/>
                <div key="button group (specific limit in group)" id="specificLimitInGroup-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="playLimit" value={gameContentTranslation('limit.play.simple',)}
                                            tooltipValue={gameContentTranslation('limit.play.display all',)}/>
                    <DisplayViewRouteButton routeName="editorLimit" value={gameContentTranslation('limit.editor.simple',)}
                                            tooltipValue={gameContentTranslation('limit.editor.display all',)}/>
                </div>
            </div>
            <div key="button group (theme)" id="theme-buttonGroup" className="btn-group-vertical col-6" role="group">
                <DisplayViewRouteButton routeName="everyTheme" value={gameContentTranslation('theme.singular',)}
                                        tooltipValue={gameContentTranslation('theme.all.display all',)}/>
                <div key="button group (specific theme type)" id="specificThemeType-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="courseTheme" value={<Image id="displayView-courseTheme-image" file={COURSE_THEME_IMAGE_FILE} className="displayView-theme-image"/>}
                                            tooltipValue={gameContentTranslation('theme.course.display all',)}/>
                    <DisplayViewRouteButton routeName="worldTheme" value={<Image id="displayView-worldTheme-image" file={WORLD_THEME_IMAGE_FILE} className="displayView-theme-image"/>}
                                            tooltipValue={gameContentTranslation('theme.world.display all',)}/>
                </div>
            </div>
        </div>
        <div id="display-game-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{gameContentTranslation('game.singular')}</h3>
            <div key="button group (game)" id="game-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyGameReference" value={gameContentTranslation('game reference.singular',)}
                                        tooltipValue={gameContentTranslation('game reference.display all',)}/>
                <DisplayViewRouteButton routeName="everyGameStyle" value={gameContentTranslation('game style.singular',)}
                                        tooltipValue={gameContentTranslation('game style.display all',)}/>
            </div>
        </div>
        <div id="display-course-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{course}</h3>
            <div key="button group (official course)" id="officialCourse-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyOfficialCourse" value={gameContentTranslation('official course.singular', {SingularName: course, singularName: courseAsLowerCase,},)}
                                        tooltipValue={gameContentTranslation('official course.display all', {SingularName: course, singularName: courseAsLowerCase, PluralName: courses, pluralName: coursesAsLowerCase,},)}/>
            </div>
            {isSMM1Selected ? <div key="button group (sample course)" id="sampleCourse-buttonGroup" className="btn-group col-12 col-md-6" role="group">
                <DisplayViewRouteButton routeName="everySampleCourse" value={gameContentTranslation('sample course.singular', {SingularName: course, singularName: courseAsLowerCase,},)}
                                        tooltipValue={gameContentTranslation('sample course.display all', {SingularName: course, singularName: courseAsLowerCase, PluralName: courses, pluralName: coursesAsLowerCase,},)}/>
            </div> : null}
            {isSMM1Selected ? <div key="button group (medal)" id="medal-buttonGroup" className="btn-group col-12 col-md-6" role="group">
                <DisplayViewRouteButton routeName="everyMedal" value={gameContentTranslation('medal.singular',)}
                                        tooltipValue={gameContentTranslation('medal.display all',)}/>
            </div> : null}
        </div>
        <div id="display-sound-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Sound</UnfinishedText></h3>
            <div key="button group (sound effect)" id="soundEffect-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everySoundEffect" value={gameContentTranslation('sound effect.singular',)}
                                        tooltipValue={gameContentTranslation('sound effect.display all',)}/>
                {isSMM2Selected ? <DisplayViewRouteButton routeName="everySoundEffectCategory" value={gameContentTranslation('Category',)}
                                                          tooltipValue={gameContentTranslation('sound effect category.display all',)}/> : null}
            </div>
            <div key="button group (instrument)" id="instrument-buttonGroup" className="btn-group col-12 col-md-6" role="group">
                <DisplayViewRouteButton routeName="everyInstrument" value={gameContentTranslation('instrument.singular',)}
                                        tooltipValue={gameContentTranslation('instrument.display all',)}/>
            </div>
            <div key="button group (editor voice)" id="editorVoice-buttonGroup" className="btn-group col-12 col-md-6" role="group">
                <DisplayViewRouteButton routeName="everyEditorVoice" value={gameContentTranslation('editor voice.singular',)}
                                        tooltipValue={gameContentTranslation('editor voice.display all',)}/>
            </div>
        </div>
        <div id="display-nameOrWord-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{contentTranslation('Name or word',)}</h3>
            <div key="button group (character name)" id="characterName-buttonGroup" className="btn-group col-12 col-lg-4" role="group">
                <DisplayViewRouteButton routeName="everyCharacterName" value={gameContentTranslation('character name.singular',)}
                                        tooltipValue={gameContentTranslation('character name.display all',)}/>
            </div>
            {isSMM2Selected ? <div key="button group (course tag - SMM2)" id="courseTag-buttonGroup" className="btn-group col-12 col-sm-6 col-lg-4" role="group">
                <DisplayViewRouteButton routeName="officialCourseTag" value={gameContentTranslation('course tag.singular', {Course: course, course: courseAsLowerCase, Tag: tag, tag: tagAsLowerCase,},)}
                                        tooltipValue={gameContentTranslation('course tag.display all', {course: courseAsLowerCase, courses: coursesAsLowerCase, tag: tagAsLowerCase, tags: tagsAsLowerCase,})}/>
            </div> : null}
            {isSMM2Selected ? <div key="button group (predefined message - SMM2)" id="predefinedMessage-buttonGroup" className="btn-group col-12 col-sm-6 col-lg-4" role="group">
                <DisplayViewRouteButton routeName="everyPredefinedMessage" value={unfinishedText('predefined message')}//TODO add predefined message reference
                                        tooltipValue={gameContentTranslation('predefined message.display all', {singularName: unfinishedText('predefined message'), pluralName: unfinishedText('predefined messages'),},)}/>
                {/*TODO add predefined message (singular & plural)*/}
            </div> : null}
        </div>
        <div id="display-other-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Other</UnfinishedText></h3>
            {isSMM2Selected ? <div key="button group (mii costume)" id="miiCostume-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyMiiCostume" value={miiCostume}
                                        tooltipValue={gameContentTranslation('mii costume.display all', {singularName: miiCostumeAsLowerCase, pluralName: miiCostumesAsLowerCase,},)}/>
                <DisplayViewRouteButton routeName="everyMiiCostumeCategory" value={gameContentTranslation('Category',)}
                                        tooltipValue={gameContentTranslation('mii costume category.display all', {singularName: miiCostumeAsLowerCase, pluralName: miiCostumesAsLowerCase,},)}/>
            </div> : null}
            <div key="button group (power-up, ride & hat priority)" id="powerUpRideAndHat-buttonGroup" className="btn-group-vertical col-12" role="group">
                <DisplayViewRouteButton routeName="everyPowerUp&Ride&HatPriority" value={gameContentTranslation('power-up, ride & hat priority.all.singular', {
                    PowerUp: powerUp, powerUp: powerUpAsLowerCase,
                    Ride: gameContentTranslation('ride.singular',), ride: gameContentTranslation('ride.singular',).toLowerCase(),
                    Hat: gameContentTranslation('hat.singular',), hat: gameContentTranslation('hat.singular',).toLowerCase(),
                },)}
                                        tooltipValue={gameContentTranslation('power-up, ride & hat priority.all.display all', {
                                            powerUp: powerUpAsLowerCase, powerUps: powerUpsAsLowerCase,
                                            ride: gameContentTranslation('ride.singular',).toLowerCase(), rides: gameContentTranslation('ride.plural',).toLowerCase(),
                                            hat: gameContentTranslation('hat.singular',).toLowerCase(), hats: gameContentTranslation('hat.plural',).toLowerCase(),
                                        },)}/>
                <div key="button group (power-up & ride priority separately)" id="powerUpAndRideSeparately-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="everyPowerUpPriority" value={powerUp}
                                            tooltipValue={gameContentTranslation('power-up, ride & hat priority.power-up.display all', {powerUp: powerUpAsLowerCase, powerUps: powerUpsAsLowerCase,},)}/>
                    <DisplayViewRouteButton routeName="everyRidePriority" value={gameContentTranslation('ride.singular',)}
                                            tooltipValue={gameContentTranslation('power-up, ride & hat priority.ride.display all', {ride: gameContentTranslation('ride.singular',).toLowerCase(), rides: gameContentTranslation('ride.plural',).toLowerCase(),},)}/>
                    <DisplayViewRouteButton routeName="everyHatPriority" value={gameContentTranslation('hat.singular',)}
                                            tooltipValue={gameContentTranslation('power-up, ride & hat priority.hat.display all', {hat: gameContentTranslation('hat.singular',).toLowerCase(), hats: gameContentTranslation('hat.plural',).toLowerCase(),},)}/>
                </div>
            </div>
            {isSMM1Selected ? <div key="button group (mystery mushroom - SMM1)" id="mysteryMushroom-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyMysteryMushroom" value={<span className="mystery-mushroom-image">{mysteryMushroom}</span>}
                                        tooltipValue={gameContentTranslation('mystery mushroom.display all', {singularName: mysteryMushroomAsLowerCase, pluralName: mysteryMushroomsAsLowerCase,},)}/>
                {/*TODO add other options for the Mystery Mushroom*/}
            </div> : null}
        </div>
    </div>
}

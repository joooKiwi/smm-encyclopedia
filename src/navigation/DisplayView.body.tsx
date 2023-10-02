import './DisplayView.scss'

import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                                             from 'app/tools/images/Image'
import UnfinishedText, {unfinishedText}                  from 'app/tools/text/UnfinishedText'
import {Games}                                           from 'core/game/Games'
import {OtherWordInTheGames}                             from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import DisplayViewRouteButton                            from 'navigation/DisplayView.routeButton'

//region -------------------- Deconstruction imports --------------------

const {TAG, MYSTERY_MUSHROOM, MII_COSTUME, ENTITY, COURSE, POWER_UP,} = OtherWordInTheGames

//endregion -------------------- Deconstruction imports --------------------

/** @reactComponent */
export default function DisplayViewBody() {
    const isSMM1Selected = Games.SUPER_MARIO_MAKER_1.isSelected,
        // isSMM3DSSelected = true,
        isSMM2Selected = Games.SUPER_MARIO_MAKER_2.isSelected,
        singularTagName = TAG.singularNameOnReference, singularTagLowerCaseName = TAG.singularLowerCaseNameOnReference,
        /*pluralTagName = TAG.pluralNameOnReference, */pluralTagLowerCaseName = TAG.pluralLowerCaseNameOnReference,
        singularMysteryMushroomName = MYSTERY_MUSHROOM.singularNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName), singularMysteryMushroomLowerCaseName = singularMysteryMushroomName.toLowerCase(),
        pluralMysteryMushroomName = MYSTERY_MUSHROOM.pluralNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.pluralEnglishName), pluralMysteryMushroomLowerCaseName = pluralMysteryMushroomName.toLowerCase(),
        singularMiiCostumeName = MII_COSTUME.singularNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName), singularMiiCostumeLowerCaseName = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName),
        /*pluralMiiCostumeName = MII_COSTUME.pluralNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName!), */pluralMiiCostumeLowerCaseName = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName!),
        singularEntityName = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName), singularEntityLowerCaseName = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? singularEntityName.toLowerCase(),
        pluralEntityName = ENTITY.pluralNameOnReferenceOrNull ?? unfinishedText(ENTITY.pluralEnglishName), pluralEntityLowerCaseName = ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? pluralEntityName.toLowerCase(),
        singularCourseName = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName), singularCourseLowerCaseName = COURSE.singularLowerCaseNameOnReference,
        pluralCourseName = COURSE.pluralNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName), pluralCourseLowerCaseName = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? pluralCourseName.toLowerCase(),
        singularPowerUpName = POWER_UP.singularNameOnReferenceOrNull ?? unfinishedText(POWER_UP.singularEnglishName), singularPowerUpLowerCaseName = singularPowerUpName.toLowerCase(),
        pluralPowerUpName = POWER_UP.pluralNameOnReferenceOrNull ?? unfinishedText(POWER_UP.pluralEnglishName), pluralPowerUpLowerCaseName = pluralPowerUpName.toLowerCase()

    return <div id="display-modal-body-container" className="container">
        <div id="display-entity-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{singularEntityName}</h3>
            <div key="button group (entity)" id="entity-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyEntity" value={singularEntityName}
                                        tooltipValue={gameContentTranslation('entity.display all', {Entity: singularEntityName, entity: singularEntityLowerCaseName, Entities: pluralEntityName, entities: pluralEntityLowerCaseName,},)}
                                        elementId="displayView-entity-button"/>
                {/*TODO add other predefined group of entities*/}
            </div>
            <div key="button group (entity category)" id="entityCategory-buttonGroup" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="everyEntityCategory" value={gameContentTranslation('Category')}
                                        tooltipValue={gameContentTranslation('entity category.display all', {Entity: singularEntityName, entity: singularEntityLowerCaseName, Entities: pluralEntityName, entities: pluralEntityLowerCaseName,},)}
                                        elementId="displayView-entityCategory-button"/>
            </div>
            <div key="button group (entity group)" id="entityGroup-buttonGroup" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="everyGroup" value={gameContentTranslation('Group')}
                                        tooltipValue={gameContentTranslation('entity group.display all', {Entity: singularEntityName, entity: singularEntityLowerCaseName, Entities: pluralEntityName, entities: pluralEntityLowerCaseName,},)}
                                        elementId="displayView-entityGroup-button"/>
            </div>
            <div key="button group (limit)" id="limit-buttonGroup" className="btn-group-vertical col-6" role="group">
                <DisplayViewRouteButton routeName="everyLimit" value={gameContentTranslation('limit.singular')}
                                        tooltipValue={gameContentTranslation('limit.all.display all')}
                                        elementId="displayView-limit-button"/>
                <div key="button group (specific limit in group)" id="specificLimitInGroup-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="playLimit" value={gameContentTranslation('limit.play.simple')}
                                            tooltipValue={gameContentTranslation('limit.play.display all')}
                                            elementId="displayView-playLimit-button"/>
                    <DisplayViewRouteButton routeName="editorLimit" value={gameContentTranslation('limit.editor.simple')}
                                            tooltipValue={gameContentTranslation('limit.editor.display all')}
                                            elementId="displayView-editorLimit-button"/>
                </div>
            </div>
            <div key="button group (theme)" id="theme-buttonGroup" className="btn-group-vertical col-6" role="group">
                <DisplayViewRouteButton routeName="everyTheme" value={gameContentTranslation('theme.singular')}
                                        tooltipValue={gameContentTranslation('theme.all.display all')}
                                        elementId="displayView-theme-button"/>
                <div key="button group (specific theme type)" id="specificThemeType-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="courseTheme" value={<Image id="displayView-courseTheme-image" file={COURSE_THEME_IMAGE_FILE} className="displayView-theme-image"/>}
                                            tooltipValue={gameContentTranslation('theme.course.display all')}
                                            elementId="displayView-courseTheme-button"/>
                    <DisplayViewRouteButton routeName="worldTheme" value={<Image id="displayView-worldTheme-image" file={WORLD_THEME_IMAGE_FILE} className="displayView-theme-image"/>}
                                            tooltipValue={gameContentTranslation('theme.world.display all')}
                                            elementId="displayView-worldTheme-button"/>
                </div>
            </div>
        </div>
        <div id="display-game-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{gameContentTranslation('game.singular')}</h3>
            <div key="button group (game)" id="game-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyGameReference" value={gameContentTranslation('game reference.singular')}
                                        tooltipValue={gameContentTranslation('game reference.display all')}
                                        elementId="displayView-gameReference-button"/>
                <DisplayViewRouteButton routeName="everyGameStyle" value={gameContentTranslation('game style.singular')}
                                        tooltipValue={gameContentTranslation('game style.display all')}
                                        elementId="displayView-gameStyle-button"/>
            </div>
        </div>
        <div id="display-sound-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Sound</UnfinishedText></h3>
            <div key="button group (sound effect)" id="soundEffect-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everySoundEffect" value={gameContentTranslation('sound effect.singular')}
                                        tooltipValue={gameContentTranslation('sound effect.display all')}
                                        elementId="displayView-soundEffect-button"/>
                {isSMM2Selected ? <DisplayViewRouteButton routeName="everySoundEffectCategory" value={gameContentTranslation('Category')}
                                                          tooltipValue={gameContentTranslation('sound effect category.display all')}
                                                          elementId="displayView-soundEffectCategory-button"/> : null}
            </div>
            <div key="button group (instrument)" id="instrument-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyInstrument" value={gameContentTranslation('instrument.singular')}
                                        tooltipValue={gameContentTranslation('instrument.display all')}
                                        elementId="displayView-instrument-button"/>
            </div>
            <div key="button group (editor voice)" id="editorVoice-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyEditorVoice" value={gameContentTranslation('editor voice.singular')}
                                        tooltipValue={gameContentTranslation('editor voice.display all')}
                                        elementId="displayView-editorVoice-button"/>
            </div>
        </div>
        <div id="display-nameOrWord-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{contentTranslation('Name or word')}</h3>
            <div key="button group (character name)" id="characterName-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyCharacterName" value={gameContentTranslation('character name.singular')}
                                        tooltipValue={gameContentTranslation('character name.display all')}
                                        elementId="displayView-characterName-button"/>
            </div>
            {isSMM2Selected ? <div key="button group (course tag - SMM2)" id="courseTag-buttonGroup" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="officialCourseTag" value={gameContentTranslation('course tag.singular', {Course: singularCourseName, course: singularCourseLowerCaseName, Tag: singularTagName, tag: singularTagLowerCaseName,},)}
                                        tooltipValue={gameContentTranslation('course tag.display all', {course: singularCourseLowerCaseName, courses: pluralCourseLowerCaseName, tag: singularTagLowerCaseName, tags: pluralTagLowerCaseName,})}
                                        elementId="displayView-courseTag-button"/>
            </div> : null}
            {isSMM2Selected ? <div key="button group (predefined message - SMM2)" id="predefinedMessage-buttonGroup" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="everyPredefinedMessage" value={unfinishedText('predefined message')}//TODO add predefined message reference
                                        tooltipValue={gameContentTranslation('predefined message.display all', {singularName: unfinishedText('predefined message'), pluralName: unfinishedText('predefined messages'),},)}//TODO add predefined message (singular & plural)
                                        elementId="displayView-predefinedMessage-button"/>
            </div> : null}
        </div>
        <div id="display-other-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Other</UnfinishedText></h3>
            {isSMM2Selected ? <div key="button group (mii costume)" id="miiCostume-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyMiiCostume" value={singularMiiCostumeName}
                                        tooltipValue={gameContentTranslation('mii costume.display all', {singularName: singularMiiCostumeLowerCaseName, pluralName: pluralMiiCostumeLowerCaseName,},)}
                                        elementId="displayView-miiCostume-button"/>
                <DisplayViewRouteButton routeName="everyMiiCostumeCategory" value={gameContentTranslation('Category')}
                                        tooltipValue={gameContentTranslation('mii costume category.display all', {singularName: singularMiiCostumeLowerCaseName, pluralName: pluralMiiCostumeLowerCaseName,},)}
                                        elementId="displayView-miiCostumeCategory-button"/>
            </div> : null}
            <div key="button group (power-up, ride & hat priority)" id="powerUpRideAndHat-buttonGroup" className="btn-group-vertical col-12" role="group">
                <DisplayViewRouteButton routeName="everyPowerUp&Ride&HatPriority" value={gameContentTranslation('power-up, ride & hat priority.all.singular', {
                    PowerUp: singularPowerUpName, powerUp: singularPowerUpLowerCaseName,
                    Ride: gameContentTranslation('ride.singular'), ride: gameContentTranslation('ride.singular').toLowerCase(),
                    Hat: gameContentTranslation('hat.singular'), hat: gameContentTranslation('hat.singular').toLowerCase(),
                },)}
                                        tooltipValue={gameContentTranslation('power-up, ride & hat priority.all.display all', {
                                            powerUp: singularPowerUpLowerCaseName, powerUps: pluralPowerUpLowerCaseName,
                                            ride: gameContentTranslation('ride.singular').toLowerCase(), rides: gameContentTranslation('ride.plural').toLowerCase(),
                                            hat: gameContentTranslation('hat.singular').toLowerCase(), hats: gameContentTranslation('hat.plural').toLowerCase(),
                                        },)}
                                        elementId="displayView-powerUpAndRide-button"/>
                <div key="button group (power-up & ride priority separately)" id="powerUpAndRideSeparately-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="everyPowerUpPriority" value={singularPowerUpName}
                                            tooltipValue={gameContentTranslation('power-up, ride & hat priority.power-up.display all', {powerUp: singularPowerUpLowerCaseName, powerUps: pluralPowerUpLowerCaseName,},)}
                                            elementId="displayView-powerUp-button"/>
                    <DisplayViewRouteButton routeName="everyRidePriority" value={gameContentTranslation('ride.singular')}
                                            tooltipValue={gameContentTranslation('power-up, ride & hat priority.ride.display all', {ride: gameContentTranslation('ride.singular').toLowerCase(), rides: gameContentTranslation('ride.plural').toLowerCase(),},)}
                                            elementId="displayView-ride-button"/>
                    <DisplayViewRouteButton routeName="everyHatPriority" value={gameContentTranslation('hat.singular')}
                                            tooltipValue={gameContentTranslation('power-up, ride & hat priority.hat.display all', {hat: gameContentTranslation('hat.singular').toLowerCase(), hats: gameContentTranslation('hat.plural').toLowerCase(),},)}
                                            elementId="displayView-hat-button"/>
                </div>
            </div>
            {isSMM1Selected ? <div key="button group (mystery mushroom - SMM1)" id="mysteryMushroom-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyMysteryMushroom" value={<span className="mystery-mushroom-image">{singularMysteryMushroomName}</span>}
                                        tooltipValue={gameContentTranslation('mystery mushroom.display all', {singularName: singularMysteryMushroomLowerCaseName, pluralName: pluralMysteryMushroomLowerCaseName,},)}
                                        elementId="displayView-mysteryMushroom-button"/>
                {/*TODO add other options for the Mystery Mushroom*/}
            </div> : null}
        </div>
    </div>
}

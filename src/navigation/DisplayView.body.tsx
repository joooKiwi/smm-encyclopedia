import './DisplayView.scss'

import type {ModalPropertiesWithDiv} from 'navigation/ModalContainers.types'
import type {ReactProperties}        from 'util/react/ReactProperties'

import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import {GlobalAppOption}                                 from 'app/options/global/GlobalAppOption'
import Image                                             from 'app/tools/images/Image'
import UnfinishedText, {unfinishedText}                  from 'app/tools/text/UnfinishedText'
import {gameContentTranslation}                          from 'lang/components/translationMethods'
import DisplayViewRouteButton                            from 'navigation/DisplayView.routeButton'

interface DisplayViewBodyProperties
    extends ReactProperties, ModalPropertiesWithDiv {

}

/**
 * @param properties
 * @reactComponent
 */
export default function DisplayViewBody({id, divId,}: DisplayViewBodyProperties,) {
    // const isSMM1Selected = GlobalAppOption.SMM1.get
    // const isSMM3DSSelected = GlobalAppOption.SMM3DS.get
    const isSMM2Selected = GlobalAppOption.SMM2.get

    return <div id="display-modal-body-container" className="container">
        <div id="display-entity-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Entity</UnfinishedText></h3>{/*TODO add entity translation*/}
            <div key="button group (entity)" id="entity-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyEntities" value={gameContentTranslation('entity.singular')}
                                        tooltipValue={gameContentTranslation('entity.display all')}
                                        elementId="displayView-entity-button" id={id} divId={divId}/>
                {/*TODO add other predefined group of entities*/}
            </div>
            <div key="button group (entity category)" id="entityCategory-buttonGroup" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="everyEntityCategories" value={gameContentTranslation('Category')}
                                        tooltipValue={gameContentTranslation('entity category.display all')}
                                        elementId="displayView-entityCategory-button" id={id} divId={divId}/>
            </div>
            <div key="button group (entity group)" id="entityGroup-buttonGroup" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="everyGroups" value={gameContentTranslation('Group')}
                                        tooltipValue={gameContentTranslation('entity group.display all')}
                                        elementId="displayView-entityGroup-button" id={id} divId={divId}/>
            </div>
            <div key="button group (limit)" id="limit-buttonGroup" className="btn-group-vertical col-6" role="group">
                <DisplayViewRouteButton routeName="everyLimits" value={gameContentTranslation('limit.singular')}
                                        tooltipValue={gameContentTranslation('limit.display all')}
                                        elementId="displayView-limit-button" id={id} divId={divId}/>
                <div key="button group (specific limit in group)" id="specificLimitInGroup-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="playLimits" value={gameContentTranslation('limit.play.value')}
                                            tooltipValue={gameContentTranslation('limit.play.display all')}
                                            elementId="displayView-playLimit-button" id={id} divId={divId}/>
                    <DisplayViewRouteButton routeName="editorLimits" value={gameContentTranslation('limit.editor.value')}
                                            tooltipValue={gameContentTranslation('limit.editor.display all')}
                                            elementId="displayView-editorLimit-button" id={id} divId={divId}/>
                </div>
            </div>
            <div key="button group (theme)" id="theme-buttonGroup" className="btn-group-vertical col-6" role="group">
                <DisplayViewRouteButton routeName="everyThemes" value={gameContentTranslation('theme.singular')}
                                        tooltipValue={gameContentTranslation('theme.all.display all')}
                                        elementId="displayView-theme-button" id={id} divId={divId}/>
                <div key="button group (specific theme type)" id="specificThemeType-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="courseThemes" value={<Image id="displayView-courseTheme-image" file={COURSE_THEME_IMAGE_FILE} className="displayView-theme-image"/>}
                                            tooltipValue={gameContentTranslation('theme.course.display all')}
                                            elementId="displayView-courseTheme-button" id={id} divId={divId}/>
                    <DisplayViewRouteButton routeName="worldThemes" value={<Image id="displayView-worldTheme-image" file={WORLD_THEME_IMAGE_FILE} className="displayView-theme-image"/>}
                                            tooltipValue={gameContentTranslation('theme.world.display all')}
                                            elementId="displayView-worldTheme-button" id={id} divId={divId}/>
                </div>
            </div>
        </div>
        <div id="display-game-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{gameContentTranslation('game.singular')}</h3>
            <div key="button group (game)" id="game-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyGameReferences" value={gameContentTranslation('game reference.singular')}
                                        tooltipValue={gameContentTranslation('game reference.display all')}
                                        elementId="displayView-gameReference-button" id={id} divId={divId}/>
                <DisplayViewRouteButton routeName="everyGameStyles" value={gameContentTranslation('game style.singular')}
                                        tooltipValue={gameContentTranslation('game style.display all')}
                                        elementId="displayView-gameStyle-button" id={id} divId={divId}/>
            </div>
        </div>
        <div id="display-sound-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Sound</UnfinishedText></h3>
            <div key="button group (sound effect)" id="soundEffect-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everySoundEffects" value={gameContentTranslation('sound effect.singular')}
                                        tooltipValue={gameContentTranslation('sound effect.display all')}
                                        elementId="displayView-soundEffect-button" id={id} divId={divId}/>
                {isSMM2Selected ? <DisplayViewRouteButton routeName="everySoundEffectCategories" value={gameContentTranslation('Category')}
                                                          tooltipValue={gameContentTranslation('sound effect category.display all')}
                                                          elementId="displayView-soundEffectCategory-button" id={id} divId={divId}/> : null}
            </div>
            <div key="button group (instrument)" id="instrument-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyInstruments" value={unfinishedText('Instrument')}
                                        tooltipValue={gameContentTranslation('instrument.display all')}
                                        elementId="displayView-instrument-button" id={id} divId={divId}/>
            </div>
        </div>
        <div id="display-other-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Other</UnfinishedText></h3>
            {isSMM2Selected ? <div key="button group (mii costume)" id="miiCostume-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyMiiCostumes" value={unfinishedText('Mii costume')}//TODO add Mii costume reference
                                        tooltipValue={gameContentTranslation('mii costume.display all', {singularName: unfinishedText('Mii costume'), pluralName: unfinishedText('Mii costumes'),},)}//TODO add Mii costume (singular & plural form)
                                        elementId="displayView-miiCostume-button" id={id} divId={divId}/>
                <DisplayViewRouteButton routeName="everyMiiCostumeCategories" value={gameContentTranslation('Category')}
                                        tooltipValue={gameContentTranslation('mii costume category.display all', {singularName: unfinishedText('Mii costume'), pluralName: unfinishedText('Mii costume'),},)}//TODO add Mii costume (singular & plural form)
                                        elementId="displayView-miiCostumeCategory-button" id={id} divId={divId}/>
            </div> : null}
            <div key="button group (power-up & ride priority)" id="powerUpAndRide-buttonGroup" className="btn-group-vertical col-12" role="group">
                <DisplayViewRouteButton routeName="everyPowerUp&RidePriority" value={<UnfinishedText>{`${unfinishedText('Power-up')} & ${unfinishedText('ride')}`}</UnfinishedText>}
                                        tooltipValue={gameContentTranslation('power-up & ride priority.all.all', {powerUp: unfinishedText('power-up'), powerUps: unfinishedText('power-ups'), ride: unfinishedText('ride'), rides: unfinishedText('rides'),},)}//TODO add Power-ups & rides (plural & singular form)
                                        elementId="displayView-powerUpAndRide-button" id={id} divId={divId}/>
                <div key="button group (power-up & ride priority separately)" id="powerUpAndRideSeparately-buttonGroup" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="everyPowerUpPriority" value={<UnfinishedText>Power-up</UnfinishedText>}
                                            tooltipValue={gameContentTranslation('power-up & ride priority.power-up.display all', {powerUp: unfinishedText('power-up'), powerUps: unfinishedText('power-ups'),},)}//TODO add Power-up (singular & plural form)
                                            elementId="displayView-powerUp-button" id={id} divId={divId}/>
                    <DisplayViewRouteButton routeName="everyRidePriority" value={<UnfinishedText>Ride</UnfinishedText>}
                                            tooltipValue={gameContentTranslation('power-up & ride priority.ride.display all', {ride: unfinishedText('ride'), rides: unfinishedText('rides'),},)}//TODO add Rides (singular & plural form)
                                            elementId="displayView-ride-button" id={id} divId={divId}/>
                </div>
            </div>
            {/*isSMM1Selected ? */<div key="button group (mystery mushroom - SMM1)" id="mysteryMushroom-buttonGroup" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyMysteryMushrooms" value={<span className="mystery-mushroom-image"><UnfinishedText>Mystery Mushroom</UnfinishedText></span>}//TODO add Mystery Mushroom reference
                                        tooltipValue={gameContentTranslation('mystery mushroom.display all', {singularName: unfinishedText('Mystery Mushrooms'), pluralName: unfinishedText('Mystery Mushrooms'),},)}//TODO add Mystery Mushroom (singular & plural form)
                                        elementId="displayView-mysteryMushroom-button" id={id} divId={divId}/>
                {/*TODO add other options for the Mystery Mushroom*/}
            </div>/* : null*/}
            {isSMM2Selected ? <div key="button group (course tag - SMM2)" id="courseTag-buttonGroup" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="officialCourseTags" value={gameContentTranslation('course tag.singular', {Course: unfinishedText('Course'), course: unfinishedText('course'), Tag: unfinishedText('Tag'), tag: unfinishedText('tag'),},)}//TODO add course & tag (capital case & lowercase)
                                        tooltipValue={gameContentTranslation('course tag.display all', {singularCourse: unfinishedText('course'), pluralCourse: unfinishedText('courses'), singularTag: unfinishedText('tag'), pluralTag: unfinishedText('tags'),})}//TODO add course & tag (singular & plural form)
                                        elementId="displayView-courseTag-button" id={id} divId={divId}/>
            </div> : null}
            {isSMM2Selected ? <div key="button group (predefined message - SMM2)" id="predefinedMessage-buttonGroup" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="everyPredefinedMessages" value={unfinishedText('predefined message')}//TODO add predefined message reference
                                        tooltipValue={gameContentTranslation('predefined message.display all', {singularName: unfinishedText('predefined message'), pluralName: unfinishedText('predefined messages'),},)}//TODO add predefined message (singular & plural)
                                        elementId="displayView-predefinedMessage-button" id={id} divId={divId}/>
            </div> : null}
        </div>
    </div>
}

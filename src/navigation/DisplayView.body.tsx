import './DisplayView.scss'

import type {ModalPropertiesWithDiv} from 'navigation/ModalContainers.types'
import type {ReactProperties}        from 'util/react/ReactProperties'

import {GlobalAppOption}                from 'app/options/global/GlobalAppOption'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import DisplayViewRouteButton           from 'navigation/DisplayView.routeButton'

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
            <div className="btn-group col-12">
                <DisplayViewRouteButton routeName="everyEntities" value={unfinishedText('Entity')}//TODO add entity translation
                                        tooltipValue={gameContentTranslation('Display every entities')}
                                        elementId="displayView-entity-button" id={id} divId={divId}/>
                {/*TODO add other predefined group of entities*/}
            </div>
            <div className="btn-group col-6 disabled">
                <DisplayViewRouteButton routeName="everyCategories" value={gameContentTranslation('Category')}
                                        tooltipValue={gameContentTranslation('Display every entity categories')}
                                        elementId="displayView-entityCategory-button" id={id} divId={divId}/>
            </div>
            <div className="btn-group col-6">
                <DisplayViewRouteButton routeName="everyGroups" value={unfinishedText('Group')}//TODO add group translation
                                        tooltipValue={gameContentTranslation('Display every entity groups')}
                                        elementId="displayView-entityGroup-button" id={id} divId={divId}/>
            </div>
            <div className="btn-group col-6">
                <DisplayViewRouteButton routeName="everyLimits" value={gameContentTranslation('Limit')}
                                        tooltipValue={gameContentTranslation('Display every limits')}
                                        elementId="displayView-entityLimit-button" id={id} divId={divId}/>
            </div>
            <div className="btn-group col-6">
                <DisplayViewRouteButton routeName="everyThemes" value={unfinishedText('Course & world theme')}//TODO add course & world theme translation
                                        tooltipValue={gameContentTranslation('Display every themes')}
                                        elementId="displayView-theme-button" id={id} divId={divId}/>
            </div>
        </div>
        <div id="display-game-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2">{gameContentTranslation('Game')}</h3>
            <div key="button group container (game)" id="game-buttonGroup-container" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyGameReferences" value={gameContentTranslation('Game reference')}
                                        tooltipValue={gameContentTranslation('Display every game references')}
                                        elementId="displayView-gameReference-button" id={id} divId={divId}/>
                <DisplayViewRouteButton routeName="everyGameStyles" value={gameContentTranslation('Game style')}
                                        tooltipValue={gameContentTranslation('Display every game styles')}
                                        elementId="displayView-gameStyle-button" id={id} divId={divId}/>
            </div>
        </div>
        <div id="display-sound-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Sound</UnfinishedText></h3>
            <div key="button group container (sound effect)" id="soundEffect-buttonGroup-container" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everySoundEffects" value={gameContentTranslation('Sound effect')}
                                        tooltipValue={gameContentTranslation('Display every sound effects')}
                                        elementId="displayView-soundEffect-button" id={id} divId={divId}/>
                {isSMM2Selected ? <DisplayViewRouteButton routeName="everySoundEffectCategories" value={gameContentTranslation('Category')}
                                                          tooltipValue={gameContentTranslation('Display every sound effect categories')}
                                                          elementId="displayView-soundEffectCategory-button" id={id} divId={divId}/> : null}
            </div>
            <div className="btn-group col-12">
                <DisplayViewRouteButton routeName="everyInstruments" value={unfinishedText('Instrument')}
                                        tooltipValue={gameContentTranslation('Display every instruments')}
                                        elementId="displayView-instrument-button" id={id} divId={divId}/>
            </div>
        </div>
        <div id="display-other-container" className="container">
            <h3 className="text-center text-decoration-underline pb-2"><UnfinishedText>Other</UnfinishedText></h3>
            {isSMM2Selected ? <div key="button group container (mii costume)" id="miiCostume-buttonGroup-container" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyMiiCostumes" value={unfinishedText('Mii costume')}//TODO add Mii costume reference
                                        tooltipValue={gameContentTranslation('Display every Mii costumes', {pluralName: unfinishedText('Mii costumes'),},)}//TODO add Mii costume reference
                                        elementId="displayView-miiCostume-button" id={id} divId={divId}/>
                <DisplayViewRouteButton routeName="everyMiiCostumeCategories" value={gameContentTranslation('Category')}
                                        tooltipValue={gameContentTranslation('Display every Mii costume categories', {MiiCostume: unfinishedText('Mii costume'),},)}//TODO add Mii costume reference
                                        elementId="displayView-miiCostumeCategory-button" id={id} divId={divId}/>
            </div> : null}
            <div key="button group container (power-up + mountable priority)" id="powerUpAndMountable-buttonGroup-container" className="btn-group-vertical col-12" role="group">
                <DisplayViewRouteButton routeName="everyPowerUp&RidePriority" value={<UnfinishedText>{`${unfinishedText('Power-up') & unfinishedText('ride')}`}</UnfinishedText>}
                                        tooltipValue={gameContentTranslation('Display every power-ups & rides priority', {powerUp: unfinishedText('power-up'), powerUps: unfinishedText('power-ups'), rides: unfinishedText('rides'), ride: unfinishedText('ride'),},)}//TODO add Power-ups & rides reference
                                        elementId="displayView-powerUpAndMountable-button" id={id} divId={divId}/>
                <div key="button group container (power-up + mountable priority separately)" id="powerUpAndMountableSeparately-buttonGroup-container" className="btn-group" role="group">
                    <DisplayViewRouteButton routeName="everyPowerUpPriority" value={<UnfinishedText>Power-up</UnfinishedText>}
                                            tooltipValue={gameContentTranslation('Display every power-ups priority', {powerUp: unfinishedText('power-up'), powerUps: unfinishedText('power-ups'),},)}//TODO add Power-up reference
                                            elementId="displayView-powerUp-button" id={id} divId={divId}/>
                    <DisplayViewRouteButton routeName="everyRidePriority" value={<UnfinishedText>Ride</UnfinishedText>}
                                            tooltipValue={gameContentTranslation('Display every rides priority', {ride: unfinishedText('ride'), rides: unfinishedText('rides'),},)}//TODO add Rides reference
                                            elementId="displayView-ride-button" id={id} divId={divId}/>
                </div>
            </div>
            {/*isSMM1Selected ? */<div key="button group container (mystery mushroom)" id="mysteryMushroom-buttonGroup-container" className="btn-group col-12" role="group">
                <DisplayViewRouteButton routeName="everyMysteryMushrooms" value={<span className="mystery-mushroom-image"><UnfinishedText>Mystery Mushroom</UnfinishedText></span>}//TODO add Mystery Mushroom reference
                                        tooltipValue={gameContentTranslation('Display every Mystery Mushrooms', {pluralName: unfinishedText('Mystery Mushrooms'),},)}//TODO add Mystery Mushroom reference
                                        elementId="displayView-mysteryMushroom-button" id={id} divId={divId}/>
                {/*TODO add other options for the Mystery Mushroom*/}
            </div>/* : null*/}
            {isSMM2Selected ? <div key="button group container (course tag (SMM2))" id="courseTag-buttonGroup-container" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="officialCourseTags" value={gameContentTranslation('Course tag', {
                    Course: unfinishedText('Course'),//TODO add course reference
                    course: unfinishedText('course'),//TODO add course reference
                    Tag: unfinishedText('Tag'),//TODO add tag reference
                    tag: unfinishedText('tag'),//TODO add tag reference
                },)}
                                        tooltipValue={gameContentTranslation('Display every course tags', {
                                            course: unfinishedText('course'),//TODO add course reference
                                            tags: unfinishedText('tags'),//TODO add tag reference
                                        })}
                                        elementId="displayView-courseTag-button" id={id} divId={divId}/>
            </div> : null}
            {isSMM2Selected ? <div key="button group container (predefined message (SMM2))" id="predefinedMessage-buttonGroup-container" className="btn-group col-6" role="group">
                <DisplayViewRouteButton routeName="everyPredefinedMessages" value={unfinishedText('predefined message')}//TODO add predefined message reference
                                        tooltipValue={gameContentTranslation('Display every predefined messages', {predefinedMessages: unfinishedText('predefined messages'),},)}//TODO add predefined message reference
                                        elementId="displayView-predefinedMessage-button" id={id} divId={divId}/>
            </div> : null}
        </div>
    </div>
}

import type {ModalPropertiesWithDiv} from './ModalContainers.types';
import type {ReactProperty}          from '../util/react/ReactProperty';

import DisplayViewRouteButton          from './DisplayView.routeButton';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from '../app/tools/images/Image';
import {TranslationUtility}            from '../lang/components/TranslationUtility';

interface DisplayViewBodyProperties
    extends ReactProperty, ModalPropertiesWithDiv {

}

/**
 * @param properties
 * @reactComponent
 */
export default function DisplayViewBody({id, divId,}: DisplayViewBodyProperties,) {
    return <GameContentTranslationComponent>{translation =>
        <div id="display-modal-body-container" className="container">
            <div id="display-entity-container" className="container">
                <h3 className="text-center text-decoration-underline pb-2">{/*{translation('Entity')}*/}--Entity--</h3>
                <div className="btn-group col-12">
                    <DisplayViewRouteButton routeName={'everyEntities'} value={translation('Display every entities')} id={id} divId={divId}/>
                </div>
                <div className="btn-group col-6">
                    <DisplayViewRouteButton routeName={'everyCategories'} value={translation('Display every entity categories')} id={id} divId={divId}/>
                </div>
                <div className="btn-group col-6">
                    <DisplayViewRouteButton routeName={'everyGroups'} value={translation('Display every entity groups')} id={id} divId={divId}/>
                </div>
                <div className="btn-group col-6">
                    <DisplayViewRouteButton routeName={'everyLimits'} value={translation('Display every limits')} id={id} divId={divId}/>
                </div>
                <div className="btn-group col-6">
                    <DisplayViewRouteButton routeName={'everyThemes'} value={translation('Display every themes')} id={id} divId={divId}/>
                </div>
            </div>
            <div id="display-soundEffect-container" className="container">
                <h3 className="text-center text-decoration-underline pb-2">{translation('Sound effect')}</h3>
                <div className="btn-group col-6">
                    <DisplayViewRouteButton routeName={'everySoundEffects'} value={translation('Display every sound effects')} id={id} divId={divId}/>
                </div>
                <div className="btn-group col-6">
                    <DisplayViewRouteButton routeName={'everySoundEffectCategories'} value={translation('Display every sound effect categories')} id={id}
                                            divId={divId}/>
                </div>
            </div>
            <div id="display-game-container" className="container">
                <h3 className="text-center text-decoration-underline pb-2">{translation('Game')}</h3>
                <div className="btn-group col-6">
                    <DisplayViewRouteButton routeName={'everyGameReferences'} value={translation('Display every game references')} id={id} divId={divId}/>
                </div>
                <div className="btn-group col-6">
                    <DisplayViewRouteButton routeName={'everyGameStyles'} value={translation('Display every game styles')} id={id} divId={divId}/>
                </div>
            </div>
            <div id="display-miiCostume-container" className="container">
                <h3 className="text-center text-decoration-underline pb-2">{/*TranslationUtility.replaceAndInterpretTranslation(translation, 'Mii costume',{
                  name:<span key="miiCostume-name" className="text-decoration-underline">Mii costume{/*TODO add Mii costume (singular name)*//*}</span>
                },)*/}--Mii costume--</h3>
                <div className="btn-group col-12">
                    <DisplayViewRouteButton routeName={'everyMiiCostumes'} value={TranslationUtility.replaceAndInterpretTranslation(translation, 'Display every Mii costumes', {
                        pluralName: <span key="miiCostume-pluralName" className="text-decoration-underline">Mii costumes{/*TODO add Mii costume (plural name)*/}</span>,
                    },)} id={id} divId={divId}/>
                </div>
            </div>
            <div id="display-miiCostume-container" className="container">
                <h3 className="text-center text-decoration-underline pb-2">{/*TranslationUtility.replaceAndInterpretTranslation(translation, 'Mystery Mushroom',{
                  name:<span key="miiCostume-name" className="text-decoration-underline">Mystery Mushroom{/*TODO add Mystery Mushroom (singular name)*//*}</span>
                },)*/}--Mystery Mushroom--
                    <sup><Image key="mysteryMushroom-image" source="/entities/1 - SMB/In game/SMM1/Item - Kinoko2/wait.0.png" fallbackName="Mystery Mushroom image" className="menu-image"/></sup>
                </h3>
                <div className="btn-group col-12">
                    <DisplayViewRouteButton routeName={'everyMysteryMushrooms'} value={TranslationUtility.replaceAndInterpretTranslation(translation, 'Display every Mystery Mushrooms', {
                        pluralName: <span key="mysteryMushroom-pluralName" className="text-decoration-underline">Mystery Mushroom{/*TODO add Mystery Mushroom (plural name)*/}</span>,
                    },)} id={id} divId={divId}/>
                </div>
            </div>
        </div>
    }</GameContentTranslationComponent>;
}

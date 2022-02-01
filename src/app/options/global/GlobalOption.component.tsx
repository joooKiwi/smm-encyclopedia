import './GlobalOption.scss';

import {Component} from 'react';

import type {GlobalAppState}              from '../../AppStates.types';
import type {ReactElement, ReactProperty} from '../../../util/react/ReactProperty';

import {Games}             from '../../../core/game/Games';
import {GameStyles}        from '../../../core/gameStyle/GameStyles';
import {GlobalAppOption}   from './GlobalAppOption';
import {GlobalThemeOption} from './GlobalThemeOption';
import {ImageAnimations}   from './ImageAnimations';
import {Images}            from './Images';
import {Sounds}            from './Sounds';
import {Themes}            from '../../../core/theme/Themes';
import {Times}             from '../../../core/time/Times';

export interface GlobalOptionProperties
    extends ReactProperty {

    id: string;

}

type CallbackWithAdditionalCallback<T, U extends | boolean | GlobalThemeOption, > = (element: T, option: GlobalAppOption<U>, additionalCallback: () => void,) => ReactElement;
type CallbackWithoutAdditionalCallback<T, U extends | boolean | GlobalThemeOption, > = (element: T, option: GlobalAppOption<U>,) => ReactElement;
type ElementWithCallback<T, U extends | boolean | GlobalThemeOption, > = readonly [element: T, option: GlobalAppOption<U>, additionalCallback: () => void,];
type ElementWithoutCallback<T, U extends | boolean | GlobalThemeOption, > = readonly [element: T, option: GlobalAppOption<U>,];

export default class GlobalOptionComponent
    extends Component<GlobalOptionProperties, GlobalAppState> {

    public constructor(props: GlobalOptionProperties,) {
        super(props);
        GlobalAppOption.REFERENCE = this;
        this.state = GlobalAppOption.createDefaultState;
    }

    //region -------------------- Render helper methods --------------------

    private static __createGroup<T extends Games, U extends boolean, >(id: string, callbackToCreateElement: CallbackWithAdditionalCallback<T, U>, ...elements: readonly ElementWithCallback<T, U>[]): ReactElement
    private static __createGroup<T extends GameStyles, U extends boolean, >(id: string, callbackToCreateElement: CallbackWithoutAdditionalCallback<T, U>, ...elements: readonly ElementWithoutCallback<T, U>[]): ReactElement
    private static __createGroup<T extends Times, U extends boolean, >(id: string, callbackToCreateElement: CallbackWithAdditionalCallback<T, U>, ...elements: readonly ElementWithCallback<T, U>[]): ReactElement
    private static __createGroup<T extends Themes, U extends GlobalThemeOption, >(id: string, callbackToCreateElement: CallbackWithoutAdditionalCallback<T, U>, ...elements: readonly ElementWithoutCallback<T, U>[]): ReactElement
    private static __createGroup<T extends | Games | GameStyles | Times | Themes, U extends boolean | GlobalThemeOption, >(id: string, callbackToCreateElement: | CallbackWithoutAdditionalCallback<T, U> | CallbackWithAdditionalCallback<T, U>, ...elements: readonly (ElementWithoutCallback<T, U> | ElementWithCallback<T, U>)[]) {
        return <div key={`option container (${id})`} id={`${id}-option-container`} className="container-fluid">{
            elements.map(([element, option, additionalCallback,]) => callbackToCreateElement(element, option, additionalCallback!,))
        }</div>;
    }

    private static __createSingleImage(element: | Games | GameStyles | Times, option: GlobalAppOption<boolean>, additionalCallback?: () => void,) {
        return <img key={`option input (${element.englishName})`} id={`optionInput-${element.englishNameInHtml}`}
                    className={`btn btn${option.get ? '' : '-outline'}-secondary`} data-bs-toggle="button" src={element.imagePath} alt={`option - ${element.englishName}`}
                    onClick={() => {
                        option.set(!option.get);
                        additionalCallback?.();
                    }}/>;
    }

    private static __createThemeGroup(element: Themes, option: GlobalAppOption<GlobalThemeOption>,) {
        const optionValue = option.get;
        const [value, timeValues,] = [optionValue.dayValue || optionValue.nightValue,
            [
                [Times.DAY, optionValue.dayValue, () => option.set(optionValue.reverseDayValue),],
                [Times.NIGHT, optionValue.nightValue, () => option.set(optionValue.reverseNightValue),],
            ],
        ] as const;

        return <div key={`option container (${element.englishName})`} id={`${element.englishNameInHtml}-option-container`} className="btn-group-vertical" role="group">
            <img key={`option image (${element.englishName})`} id={`${element.englishNameInHtml}-option-image`} className={`btn btn${value ? '' : '-outline'}-secondary`}
                 src={element.smallImagePath} alt={`option - ${element.englishName}`}
                 onClick={() => option.set(value ? GlobalThemeOption.NONE : GlobalThemeOption.ALL)}/>
            <div key={`option time image (${element.englishName})`} id={`${element.englishNameInHtml}-option-time-image`} className="btn-group btn-group-sm">{
                timeValues.map(([time, value, callback,]) =>
                    <img key={`option image (${element.englishName} - ${time.englishName})`} id={`${element.englishNameInHtml}-${time.englishNameInHtml}-option-image`}
                         className={`btn btn${value ? '' : '-outline'}-secondary`} src={time.imagePath} alt={`option - ${element.englishName} (${time.englishName})`}
                         onClick={callback}/>)
            }
            </div>
        </div>;
    }

    //endregion -------------------- Render helper methods --------------------

    public render() {
        //TODO move the groups into multiple different sub components.
        const imageAnimations = GlobalAppOption.IMAGE_ANIMATIONS, imageAnimationsValue = imageAnimations.get.value;
        const images = GlobalAppOption.IMAGES, imagesValue = images.get.value;
        const sounds = GlobalAppOption.SOUNDS, soundsValue = sounds.get.value;
        const everyThemeOptions = [GlobalAppOption.GROUND, GlobalAppOption.UNDERGROUND,
            GlobalAppOption.UNDERWATER, GlobalAppOption.DESERT,
            GlobalAppOption.SNOW, GlobalAppOption.SKY,
            GlobalAppOption.FOREST, GlobalAppOption.GHOST_HOUSE,
            GlobalAppOption.AIRSHIP, GlobalAppOption.CASTLE,];
        const everyNonSMM1Themes = [GlobalAppOption.DESERT, GlobalAppOption.SNOW,
            GlobalAppOption.SKY, GlobalAppOption.FOREST,];

        return <div id={this.props.id} className="container-fluid">
            <div key="option container (images & sounds)" id="imagesAndSounds-option-container" className="container-fluid">
                <div key="option container (image animations)" id="imageAnimations-option-container" className="btn-group col" role="group">
                    <button key="option container (image animations - yes)" className={`btn btn${imageAnimationsValue !== false ? '-outline' : ''}-secondary`}
                            type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.YES)}>
                        {/*TODO mario image*/}
                    </button>
                    <button key="option container (image animations - no)" className={`btn btn${imageAnimationsValue !== true ? '-outline' : ''}-secondary bi-image`}
                            type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.NO)}>
                        {/*TODO mario moving image*/}
                    </button>
                    <button key="option container (image animations - separated)" className={`btn btn${imageAnimationsValue !== 'separated' ? '-outline' : ''}-secondary`}
                            type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.SEPARATED)}>
                        {/*TODO multiple mario image*/}
                    </button>
                </div>
                <button key="option container (images)" id="images-option-container" className={`btn btn${!imagesValue ? '-outline' : ''}-secondary col-3 bi-image-fill`}
                        type="button" onClick={() => images.set(Images.getValue(!imagesValue))}/>
                <button key="option container (sounds)" id="sounds-option-container" className={`btn btn${!soundsValue ? '-outline' : ''}-secondary col-3 bi-music-note-beamed`}
                        type="button" onClick={() => sounds.set(Sounds.getValue(!soundsValue))}/>
            </div>
            <div className="option-separator"/>
            {GlobalOptionComponent.__createGroup('games',
                (element, option, additionalCallback,) => GlobalOptionComponent.__createSingleImage(element, option, additionalCallback,),
                [Games.SUPER_MARIO_MAKER_1, GlobalAppOption.SMM1, () => {
                    if (!GlobalAppOption.SMM2.get && GlobalAppOption.SMM1.get) {
                        everyNonSMM1Themes.forEach(option => option.set(GlobalThemeOption.NONE));
                        GlobalAppOption.SM3DW.set(false);
                    }
                },],
                [Games.SUPER_MARIO_MAKER_2, GlobalAppOption.SMM2, () => {
                },],
            )}
            {GlobalOptionComponent.__createGroup('gameStyles',
                (element, option,) => GlobalOptionComponent.__createSingleImage(element, option,),
                [GameStyles.SUPER_MARIO_BROS, GlobalAppOption.SMB,],
                [GameStyles.SUPER_MARIO_BROS_3, GlobalAppOption.SMB3,],
                [GameStyles.SUPER_MARIO_WORLD, GlobalAppOption.SMW,],
                [GameStyles.NEW_SUPER_MARIO_BROS_U, GlobalAppOption.NSMBU,],
                [GameStyles.SUPER_MARIO_3D_WORLD, GlobalAppOption.SM3DW,],
            )}
            {GlobalOptionComponent.__createGroup<Themes, GlobalThemeOption>('themes',
                (element, option,) => GlobalOptionComponent.__createThemeGroup(element, option,),
                [Themes.GROUND, GlobalAppOption.GROUND,],
                [Themes.UNDERGROUND, GlobalAppOption.UNDERGROUND,],
                [Themes.UNDERWATER, GlobalAppOption.UNDERWATER,],
                [Themes.DESERT, GlobalAppOption.DESERT,],
                [Themes.SNOW, GlobalAppOption.SNOW,],
                [Themes.SKY, GlobalAppOption.SKY,],
                [Themes.FOREST, GlobalAppOption.FOREST,],
                [Themes.GHOST_HOUSE, GlobalAppOption.GHOST_HOUSE,],
                [Themes.AIRSHIP, GlobalAppOption.AIRSHIP,],
                [Themes.CASTLE, GlobalAppOption.CASTLE,],
            )}
            {GlobalOptionComponent.__createGroup('times',
                (element, option, additionalCallback,) => GlobalOptionComponent.__createSingleImage(element, option, additionalCallback,),
                [Times.DAY, GlobalAppOption.DAY, () => everyThemeOptions.forEach(option => option.set(option.get.onDay(GlobalAppOption.DAY.get))),],
                [Times.NIGHT, GlobalAppOption.NIGHT, () => everyThemeOptions.forEach(option => option.set(option.get.onNight(GlobalAppOption.NIGHT.get))),],
            )}
        </div>;
    }

}

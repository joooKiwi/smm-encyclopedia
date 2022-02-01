import './GlobalOption.scss';

import {Component} from 'react';

import type {GlobalAppState}    from '../../AppStates.types';
import type {GlobalThemeOption} from './GlobalThemeOption';
import type {ReactElement}      from '../../../util/react/ReactProperty';

import {Games}           from '../../../core/game/Games';
import {GameStyles}      from '../../../core/gameStyle/GameStyles';
import {GlobalAppOption} from './GlobalAppOption';
import {Themes}          from '../../../core/theme/Themes';
import {Times}           from '../../../core/time/Times';

export interface GlobalOptionProperties {

    id: string

}


export default class GlobalOptionComponent
    extends Component<GlobalOptionProperties, GlobalAppState> {

    public constructor(props: GlobalOptionProperties,) {
        super(props);
        GlobalAppOption.REFERENCE = this;
        this.state = GlobalAppOption.createDefaultState;
    }

    //region -------------------- Render helper methods --------------------

    private static __createGroup<T extends | Games | GameStyles | Times | Themes, U extends boolean | GlobalThemeOption, >(id: string, callbackToCreateElement: (element: T, option: GlobalAppOption<U>,) => ReactElement, ...elements: readonly (readonly [T, GlobalAppOption<U>,])[]) {
        return <div key={`option container (${id})`} id={`${id}-option-container`} className="container-fluid">{
            elements.map(([element, option,]) => callbackToCreateElement(element, option,))
        }</div>;
    }

    private static __createSingleImage(element: | Games | GameStyles | Times, option: GlobalAppOption<boolean>,) {
        return <img key={`option input (${element.englishName})`} id={`optionInput-${element.englishNameInHtml}`}
                    className={`btn btn${option.get ? '' : '-outline'}-secondary`} data-bs-toggle="button" src={element.imagePath} alt={`option - ${element.englishName}`}/>;
    }

    private static __createThemeGroup(element: Themes, option: GlobalAppOption<GlobalThemeOption>,) {
        const optionValue = option.get.value;
        const [value, timeValues] = optionValue == null ? [false, [[Times.DAY, option.get.dayValue!,], [Times.NIGHT, option.get.nightValue!,],]] as const : [optionValue, [[Times.DAY, optionValue,], [Times.NIGHT, optionValue,],]] as const;

        return <div key={`option container (${element.englishName})`} id={`${element.englishNameInHtml}-option-container`} className="btn-group-vertical" role="group">
            <img key={`option image (${element.englishName})`} id={`${element.englishNameInHtml}-option-image`} className={`btn btn${value ? '' : '-outline'}-secondary`}
                 src={element.smallImagePath} alt={`option - ${element.englishName}`}/>
            <div key={`option time image (${element.englishName})`} id={`${element.englishNameInHtml}-option-time-image`} className="btn-group btn-group-sm">{
                timeValues.map(([time, value,]) =>
                    <img key={`option image (${element.englishName} - ${time.englishName})`} id={`${element.englishNameInHtml}-${time.englishNameInHtml}-option-image`}
                         className={`btn btn${value ? '' : '-outline'}-secondary`} src={time.imagePath} alt={`option - ${element.englishName} (${time.englishName})`}/>)
            }
            </div>
        </div>;
    }

    //endregion -------------------- Render helper methods --------------------

    public render() {
        //TODO make it work properly instead of just in a viewable state.
        const imageAnimationsValue = GlobalAppOption.IMAGE_ANIMATIONS.get.value;
        const imagesValue = GlobalAppOption.IMAGES.get.value;
        const soundsValue = GlobalAppOption.SOUNDS.get.value;

        return <div id={this.props.id} className="container-fluid">
            <div key="option container (images & sounds)" id="imagesAndSounds-option-container" className="container-fluid">
                <div key="option container (image animations)" id="imageAnimations-option-container" className="btn-group col" role="group">
                    <button key="option container (image animations - yes)" className={`btn btn${imageAnimationsValue !== false ? '-outline' : ''}-secondary`}
                            type="button" disabled={!imagesValue}>
                        {/*TODO mario image*/}
                    </button>
                    <button key="option container (image animations - no)" className={`btn btn${imageAnimationsValue !== true ? '-outline' : ''}-secondary bi-image`}
                            type="button" disabled={!imagesValue}>
                        {/*TODO mario moving image*/}
                    </button>
                    <button key="option container (image animations - separated)" className={`btn btn${imageAnimationsValue !== 'separated' ? '-outline' : ''}-secondary`}
                            type="button" disabled={!imagesValue}>
                        {/*TODO multiple mario image*/}
                    </button>
                </div>
                <button key="option container (images)" id="images-option-container" type="button" className={`btn btn${!imagesValue ? '-outline' : ''}-secondary col-3 bi-image-fill`}/>
                <button key="option container (sounds)" id="sounds-option-container" type="button" className={`btn btn${!soundsValue ? '-outline' : ''}-secondary col-3 bi-music-note-beamed`}/>
            </div>
            <div className="option-separator"/>
            {GlobalOptionComponent.__createGroup('games',
                (element, option,) => GlobalOptionComponent.__createSingleImage(element, option,),
                [Games.SUPER_MARIO_MAKER_1, GlobalAppOption.SMM1,],
                [Games.SUPER_MARIO_MAKER_2, GlobalAppOption.SMM2,],
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
                (element, option,) => GlobalOptionComponent.__createSingleImage(element, option,),
                [Times.DAY, GlobalAppOption.DAY,],
                [Times.NIGHT, GlobalAppOption.NIGHT,],
            )}
        </div>;
    }

}

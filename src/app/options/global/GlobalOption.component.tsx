import './GlobalOption.scss';

import {Component} from 'react';

import type {GlobalAppState}    from '../../AppStates.types';
import type {GlobalThemeOption} from './GlobalThemeOption';
import type {ReactProperty}     from '../../../util/react/ReactProperty';

import GameGroup         from './group/GameGroup';
import {Games}           from '../../../core/game/Games';
import GameStyleGroup    from './group/GameStyleGroup';
import {GameStyles}      from '../../../core/gameStyle/GameStyles';
import {GlobalAppOption} from './GlobalAppOption';
import {ImageAnimations} from './ImageAnimations';
import {Images}          from './Images';
import {Sounds}          from './Sounds';
import {Texts}           from './Texts';
import ThemeGroup        from './group/ThemeGroup';
import {Themes}          from '../../../core/theme/Themes';
import TimeGroup         from './group/TimeGroup';
import {Times}           from '../../../core/time/Times';

export interface GlobalOptionProperties
    extends ReactProperty {

    id: string

}

export default class GlobalOptionComponent
    extends Component<GlobalOptionProperties, GlobalAppState> {

    public constructor(props: GlobalOptionProperties,) {
        super(props);
        GlobalAppOption.REFERENCE = this;
        this.state = GlobalAppOption.createDefaultState;
    }

    public render() {
        //TODO move the groups into multiple different sub components.
        const imageAnimations = GlobalAppOption.IMAGE_ANIMATIONS, imageAnimationsValue = imageAnimations.get.value;
        const texts = GlobalAppOption.TEXTS, textsValue = texts.get.value;
        const images = GlobalAppOption.IMAGES, imagesValue = images.get.value;
        const sounds = GlobalAppOption.SOUNDS, soundsValue = sounds.get.value;
        const smm1 = GlobalAppOption.SMM1, smm1Value = smm1.get;
        const smm3ds = GlobalAppOption.SMM3DS, smm3dsValue = smm3ds.get;
        const smm2 = GlobalAppOption.SMM2, smm2Value = smm2.get;
        const isNoGame = !smm1Value && !smm3dsValue && !smm2Value;
        const isSmm1Or3DSExclusive = (smm1Value || smm3dsValue) && !smm2Value;

        const everyThemeOptions = Themes.values.map(({name,}) => GlobalAppOption.getValue(name)) as GlobalAppOption<GlobalThemeOption>[];

        return <div id={this.props.id} className="container-fluid">
            <div key="option container (texts, images & sounds)" id="textsAndImagesAndSounds-option-container" className="container-fluid">
                <button key="option container (texts)" id="texts-option-container" className={`btn btn${!textsValue ? '-outline' : ''}-secondary col-3 bi-type`}
                        type="button" onClick={() => texts.set(Texts.getValue(!textsValue))}/>
                <div key="option container (image animations)" id="imageAnimations-option-container" className="btn-group col" role="group">
                    <button key="option container (image animations - no)" className={`btn btn${imageAnimationsValue !== false ? '-outline' : ''}-secondary`}
                            type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.NO)}>
                        {/*TODO no mario image*/}
                    </button>
                    <button key="option container (image animations - yes)" className={`btn btn${imageAnimationsValue !== true ? '-outline' : ''}-secondary bi-image`}
                            type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.YES)}>
                        {/*TODO mario moving image*/}
                    </button>
                    <button key="option container (image animations - separated)" className={`btn btn${imageAnimationsValue !== 'separated' ? '-outline' : ''}-secondary`}
                            type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.SEPARATED)}>
                        {/*TODO multiple mario image*/}
                    </button>
                </div>
                <button key="option container (images)" id="images-option-container" className={`btn btn${!imagesValue ? '-outline' : ''}-secondary col-2 bi-image-fill`}
                        type="button" onClick={() => images.set(Images.getValue(!imagesValue))}/>
                <button key="option container (sounds)" id="sounds-option-container" className={`btn btn${!soundsValue ? '-outline' : ''}-secondary col-2 bi-music-note-beamed`}
                        type="button" onClick={() => sounds.set(Sounds.getValue(!soundsValue))}/>
            </div>
            <div className="option-separator"/>
            <GameGroup id="games" elements={[
                [Games.SUPER_MARIO_MAKER_1, smm1,],
                [Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, smm3ds,],
                [Games.SUPER_MARIO_MAKER_2, smm2,],
            ]}/>
            <GameStyleGroup id="gameStyles" elements={[
                [GameStyles.SUPER_MARIO_BROS, GlobalAppOption.SMB, isNoGame,],
                [GameStyles.SUPER_MARIO_BROS_3, GlobalAppOption.SMB3, isNoGame,],
                [GameStyles.SUPER_MARIO_WORLD, GlobalAppOption.SMW, isNoGame,],
                [GameStyles.NEW_SUPER_MARIO_BROS_U, GlobalAppOption.NSMBU, isNoGame,],
                [GameStyles.SUPER_MARIO_3D_WORLD, GlobalAppOption.SM3DW, isNoGame || isSmm1Or3DSExclusive,],
            ]}/>
            <ThemeGroup id="themes" elements={[
                [Themes.GROUND, GlobalAppOption.GROUND, [isNoGame, isNoGame,],],
                [Themes.UNDERGROUND, GlobalAppOption.UNDERGROUND, [isNoGame, isNoGame,],],
                [Themes.UNDERWATER, GlobalAppOption.UNDERWATER, [isNoGame, isNoGame,],],
                [Themes.DESERT, GlobalAppOption.DESERT, [isNoGame, isNoGame || isSmm1Or3DSExclusive,],],
                [Themes.SNOW, GlobalAppOption.SNOW, [isNoGame, isNoGame || isSmm1Or3DSExclusive,],],
                [Themes.SKY, GlobalAppOption.SKY, [isNoGame, isNoGame || isSmm1Or3DSExclusive,],],
                [Themes.FOREST, GlobalAppOption.FOREST, [isNoGame, isNoGame || isSmm1Or3DSExclusive,],],
                [Themes.GHOST_HOUSE, GlobalAppOption.GHOST_HOUSE, [isNoGame, isNoGame,],],
                [Themes.AIRSHIP, GlobalAppOption.AIRSHIP, [isNoGame, isNoGame,],],
                [Themes.CASTLE, GlobalAppOption.CASTLE, [isNoGame, isNoGame,],],
            ]}/>
            <TimeGroup id="times" elements={[
                [Times.DAY, GlobalAppOption.DAY, isNoGame, () => everyThemeOptions.forEach(option => option.set(option.get.onDay(GlobalAppOption.DAY.get))),],
                [Times.NIGHT, GlobalAppOption.NIGHT, isNoGame || isSmm1Or3DSExclusive, () => everyThemeOptions.forEach(option => option.set(option.get.onNight(GlobalAppOption.NIGHT.get))),],
            ]}/>
        </div>;
    }

}

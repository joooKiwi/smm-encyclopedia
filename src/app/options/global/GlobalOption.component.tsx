import GameGroup from 'app/options/global/group/GameGroup'

export default function GlobalOptionComponent() {
    //TODO move the groups into multiple different sub components.
    // const imageAnimations = GlobalAppOption.IMAGE_ANIMATIONS, imageAnimationsValue = imageAnimations.get.value
    // const texts = GlobalAppOption.TEXTS, textsValue = texts.get.value
    // const images = GlobalAppOption.IMAGES, imagesValue = images.get.value
    // const sounds = GlobalAppOption.SOUNDS, soundsValue = sounds.get.value
    // const smm1 = GlobalAppOption.SMM1, smm1Value = smm1.get
    // const smm3ds = GlobalAppOption.SMM3DS, smm3dsValue = smm3ds.get
    // const smm2 = GlobalAppOption.SMM2, smm2Value = smm2.get
    // const isNoGame = !smm1Value && !smm3dsValue && !smm2Value
    // const isSmm1Or3DSExclusive = (smm1Value || smm3dsValue) && !smm2Value

    // const everyThemeOptions = Themes.courseThemes.map(({name,}) => GlobalAppOption.getValue(name) as GlobalAppOption<GlobalThemeOption>)

    return <div id="parameter-container" className="container-fluid">
        {/*<div key="option container (texts, images & sounds)" id="textsAndImagesAndSounds-option-container" className="container-fluid">*/}
        {/*    <button key="option container (texts)" id="texts-option-container" className={`btn btn${!textsValue ? '-outline' : ''}-secondary col-3 bi-type`}*/}
        {/*            type="button" onClick={() => texts.set(Texts.getValueByValue(!textsValue))}/>*/}
        {/*    <div key="option container (image animations)" id="imageAnimations-option-container" className="btn-group col" role="group">*/}
        {/*        <button key="option container (image animations - no)" className={`btn btn${imageAnimationsValue !== false ? '-outline' : ''}-secondary`}*/}
        {/*                type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.NO)}>*/}
        {/*            /!*TODO no mario image*!/*/}
        {/*        </button>*/}
        {/*        <button key="option container (image animations - yes)" className={`btn btn${imageAnimationsValue !== true ? '-outline' : ''}-secondary bi-image`}*/}
        {/*                type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.YES)}>*/}
        {/*            /!*TODO mario moving image*!/*/}
        {/*        </button>*/}
        {/*        <button key="option container (image animations - separated)" className={`btn btn${imageAnimationsValue !== 'separated' ? '-outline' : ''}-secondary`}*/}
        {/*                type="button" disabled={!imagesValue} onClick={() => imageAnimations.set(ImageAnimations.SEPARATED)}>*/}
        {/*            /!*TODO multiple mario image*!/*/}
        {/*        </button>*/}
        {/*    </div>*/}
        {/*    <button key="option container (images)" id="images-option-container" className={`btn btn${!imagesValue ? '-outline' : ''}-secondary col-2 bi-image-fill`}*/}
        {/*            type="button" onClick={() => images.set(Images.getValueByValue(!imagesValue))}/>*/}
        {/*    <button key="option container (sounds)" id="sounds-option-container" className={`btn btn${!soundsValue ? '-outline' : ''}-secondary col-2 bi-music-note-beamed`}*/}
        {/*            type="button" onClick={() => sounds.set(Sounds.getValueByValue(!soundsValue))}/>*/}
        {/*</div>*/}
        {/*<div className="option-separator"/>*/}
        <GameGroup/>
        {/*<GameStyleGroup id="gameStyles" isHidden={isNoGame} elements={[*/}
        {/*    [GameStyles.SUPER_MARIO_BROS, GlobalAppOption.SMB,],*/}
        {/*    [GameStyles.SUPER_MARIO_BROS_3, GlobalAppOption.SMB3,],*/}
        {/*    [GameStyles.SUPER_MARIO_WORLD, GlobalAppOption.SMW,],*/}
        {/*    [GameStyles.NEW_SUPER_MARIO_BROS_U, GlobalAppOption.NSMBU,],*/}
        {/*    [GameStyles.SUPER_MARIO_3D_WORLD, GlobalAppOption.SM3DW, null, isSmm1Or3DSExclusive,],*/}
        {/*]}/>*/}
        {/*<ThemeGroup id="themes" isHidden={isNoGame} elements={[*/}
        {/*    [Themes.GROUND, GlobalAppOption.GROUND, smm2Value,],*/}
        {/*    [Themes.UNDERGROUND, GlobalAppOption.UNDERGROUND, smm2Value,],*/}
        {/*    [Themes.UNDERWATER, GlobalAppOption.UNDERWATER, smm2Value,],*/}
        {/*    [Themes.DESERT, GlobalAppOption.DESERT, [smm2Value, isSmm1Or3DSExclusive,], isSmm1Or3DSExclusive,],*/}
        {/*    [Themes.SNOW, GlobalAppOption.SNOW, [smm2Value, isSmm1Or3DSExclusive,], isSmm1Or3DSExclusive,],*/}
        {/*    [Themes.SKY, GlobalAppOption.SKY, [smm2Value, isSmm1Or3DSExclusive,], isSmm1Or3DSExclusive,],*/}
        {/*    [Themes.FOREST, GlobalAppOption.FOREST, [smm2Value, isSmm1Or3DSExclusive,], isSmm1Or3DSExclusive,],*/}
        {/*    [Themes.GHOST_HOUSE, GlobalAppOption.GHOST_HOUSE, smm2Value,],*/}
        {/*    [Themes.AIRSHIP, GlobalAppOption.AIRSHIP, smm2Value,],*/}
        {/*    [Themes.CASTLE, GlobalAppOption.CASTLE, smm2Value,],*/}
        {/*]}/>*/}
        {/*<TimeGroup id="times" isHidden={isNoGame} elements={[*/}
        {/*    [Times.DAY, GlobalAppOption.DAY, null, null, () => everyThemeOptions.forEach(option => option.set(option.get.onDay(GlobalAppOption.DAY.get))),],*/}
        {/*    [Times.NIGHT, GlobalAppOption.NIGHT, isSmm1Or3DSExclusive, null, () => everyThemeOptions.forEach(option => option.set(option.get.onNight(GlobalAppOption.NIGHT.get))),],*/}
        {/*]}/>*/}
    </div>
}

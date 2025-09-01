import './MusicApp.scss'

import {Link} from 'react-router'

import type {Array}                                        from '@joookiwi/type'
import type {ReactProperties, ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                                             from 'app/tools/images/Image'
import UnfinishedText                                    from 'app/tools/text/UnfinishedText'
import PageTitle                                         from 'app/util/PageTitle'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import {ClearConditionEntityImages}                      from 'core/entity/ClearConditionEntityImages'
import {EditorEntityImages}                              from 'core/entity/EditorEntityImages'
import {GameStyles}                                      from 'core/gameStyle/GameStyles'
import GameStyleImage                                    from 'core/gameStyle/component/GameStyleImage'
import {Themes}                                          from 'core/theme/Themes'
import ThemeImage                                        from 'core/theme/component/ThemeImage'
import {Tracks}                                          from 'core/track/Tracks'
import DayNightTrack                                     from 'core/track/component/DayNightTrack'
import DayNightYoshiTrack                                from 'core/track/component/DayNightYoshiTrack'
import EditorTrack                                       from 'core/track/component/EditorTrack'
import LessonEditorTrack                                 from 'core/track/component/LessonEditorTrack'
import Track                                             from 'core/track/component/Track'
import UnderwaterTrack                                   from 'core/track/component/UnderwaterTrack'
import YoshiTrack                                        from 'core/track/component/YoshiTrack'
import SoundEffectImage                                  from 'core/soundEffect/SoundEffectImage'
import {SoundEffects}                                    from 'core/soundEffect/SoundEffects'
import {DONT_VIEW_TRACE_IMAGE, VIEW_TRACE_IMAGE}         from 'core/editor/viewTraceImages'
import {routeFromName}                                   from 'route/method/route.fromName'

import BONUS_LINK =                                                   Tracks.BONUS_LINK
import BONUS_LINK_FAST =                                              Tracks.BONUS_LINK_FAST
import BONUS_NSMBU =                                                  Tracks.BONUS_NSMBU
import BONUS_NSMBU_FAST =                                             Tracks.BONUS_NSMBU_FAST
import BONUS_NSMBU_YOSHI =                                            Tracks.BONUS_NSMBU_YOSHI
import BONUS_NSMBU_YOSHI_FAST =                                       Tracks.BONUS_NSMBU_YOSHI_FAST
import BONUS_SMB =                                                    Tracks.BONUS_SMB
import BONUS_SMB_FAST =                                               Tracks.BONUS_SMB_FAST
import BONUS_SMB2 =                                                   Tracks.BONUS_SMB2
import BONUS_SMB2_FAST =                                              Tracks.BONUS_SMB2_FAST
import BONUS_SMB3 =                                                   Tracks.BONUS_SMB3
import BONUS_SMB3_FAST =                                              Tracks.BONUS_SMB3_FAST
import BONUS_SMW =                                                    Tracks.BONUS_SMW
import BONUS_SMW_FAST =                                               Tracks.BONUS_SMW_FAST
import BONUS_SM3DW =                                                  Tracks.BONUS_SM3DW
import BONUS_SM3DW_FAST =                                             Tracks.BONUS_SM3DW_FAST
import BOSS_LINK =                                                    Tracks.BOSS_LINK
import BOSS_LINK_FAST =                                               Tracks.BOSS_LINK_FAST
import BOSS_NSMBU =                                                   Tracks.BOSS_NSMBU
import BOSS_NSMBU_FAST =                                              Tracks.BOSS_NSMBU_FAST
import BOSS_SMB =                                                     Tracks.BOSS_SMB
import BOSS_SMB_FAST =                                                Tracks.BOSS_SMB_FAST
import BOSS_SMB3 =                                                    Tracks.BOSS_SMB3
import BOSS_SMB3_FAST =                                               Tracks.BOSS_SMB3_FAST
import BOSS_SMB2 =                                                    Tracks.BOSS_SMB2
import BOSS_SMB2_FAST =                                               Tracks.BOSS_SMB2_FAST
import BOSS_SMW =                                                     Tracks.BOSS_SMW
import BOSS_SMW_FAST =                                                Tracks.BOSS_SMW_FAST
import BOSS_SM3DW =                                                   Tracks.BOSS_SM3DW
import BOSS_SM3DW_FAST =                                              Tracks.BOSS_SM3DW_FAST
import CASTLE_LESSON_EDITORS =                                        Tracks.CASTLE_LESSON_EDITORS
import FINAL_BOSS_LINK =                                              Tracks.FINAL_BOSS_LINK
import FINAL_BOSS_LINK_FAST =                                         Tracks.FINAL_BOSS_LINK_FAST
import FINAL_BOSS_NSMBU =                                             Tracks.FINAL_BOSS_NSMBU
import FINAL_BOSS_NSMBU_FAST =                                        Tracks.FINAL_BOSS_NSMBU_FAST
import FINAL_BOSS_SMB2 =                                              Tracks.FINAL_BOSS_SMB2
import FINAL_BOSS_SMB2_FAST =                                         Tracks.FINAL_BOSS_SMB2_FAST
import FINAL_BOSS_SMB3 =                                              Tracks.FINAL_BOSS_SMB3
import FINAL_BOSS_SMB3_FAST =                                         Tracks.FINAL_BOSS_SMB3_FAST
import FINAL_BOSS_SMW =                                               Tracks.FINAL_BOSS_SMW
import FINAL_BOSS_SMW_FAST =                                          Tracks.FINAL_BOSS_SMW_FAST
import FINAL_BOSS_SM3DW =                                             Tracks.FINAL_BOSS_SM3DW
import FINAL_BOSS_SM3DW_FAST =                                        Tracks.FINAL_BOSS_SM3DW_FAST
import FOREST_LESSON_EDITORS =                                        Tracks.FOREST_LESSON_EDITORS
import GHOST_HOUSE_LESSON_EDITORS =                                   Tracks.GHOST_HOUSE_LESSON_EDITORS
import GROUND_LESSON_EDITORS =                                        Tracks.GROUND_LESSON_EDITORS
import NSMBU_AIRSHIP_EDITORS =                                        Tracks.NSMBU_AIRSHIP_EDITORS
import NSMBU_AIRSHIP_TIMES =                                          Tracks.NSMBU_AIRSHIP_TIMES
import NSMBU_CASTLE_EDITORS =                                         Tracks.NSMBU_CASTLE_EDITORS
import NSMBU_CASTLE_TIMES =                                           Tracks.NSMBU_CASTLE_TIMES
import NSMBU_DESERT_EDITORS =                                         Tracks.NSMBU_DESERT_EDITORS
import NSMBU_DESERT_TIMES =                                           Tracks.NSMBU_DESERT_TIMES
import NSMBU_FOREST_EDITORS =                                         Tracks.NSMBU_FOREST_EDITORS
import NSMBU_FOREST_TIMES =                                           Tracks.NSMBU_FOREST_TIMES
import NSMBU_GHOST_HOUSE_EDITORS =                                    Tracks.NSMBU_GHOST_HOUSE_EDITORS
import NSMBU_GHOST_HOUSE_TIMES =                                      Tracks.NSMBU_GHOST_HOUSE_TIMES
import NSMBU_GROUND_EDITORS =                                         Tracks.NSMBU_GROUND_EDITORS
import NSMBU_GROUND_TIMES =                                           Tracks.NSMBU_GROUND_TIMES
import NSMBU_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES = Tracks.NSMBU_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES
import NSMBU_SNOW_EDITORS =                                           Tracks.NSMBU_SNOW_EDITORS
import NSMBU_SNOW_TIMES =                                             Tracks.NSMBU_SNOW_TIMES
import NSMBU_SKY_EDITORS =                                            Tracks.NSMBU_SKY_EDITORS
import NSMBU_SKY_TIMES =                                              Tracks.NSMBU_SKY_TIMES
import NSMBU_UNDERGROUND_EDITORS =                                    Tracks.NSMBU_UNDERGROUND_EDITORS
import NSMBU_UNDERGROUND_TIMES =                                      Tracks.NSMBU_UNDERGROUND_TIMES
import NSMBU_UNDERWATER_EDITORS =                                     Tracks.NSMBU_UNDERWATER_EDITORS
import NSMBU_UNDERWATER_TIMES =                                       Tracks.NSMBU_UNDERWATER_TIMES
import PEACEFUL =                                                     Tracks.PEACEFUL
import SMB_AIRSHIP_EDITORS =                                          Tracks.SMB_AIRSHIP_EDITORS
import SMB_AIRSHIP_TIMES =                                            Tracks.SMB_AIRSHIP_TIMES
import SMB_BONUSES =                                                  Tracks.SMB_BONUSES
import SMB_BOSSES =                                                   Tracks.SMB_BOSSES
import SMB_CASTLE_EDITORS =                                           Tracks.SMB_CASTLE_EDITORS
import SMB_CASTLE_TIMES =                                             Tracks.SMB_CASTLE_TIMES
import SMB_DESERT_EDITORS =                                           Tracks.SMB_DESERT_EDITORS
import SMB_DESERT_TIMES =                                             Tracks.SMB_DESERT_TIMES
import SMB_FINAL_BOSSES =                                             Tracks.SMB_FINAL_BOSSES
import SMB_FOREST_EDITORS =                                           Tracks.SMB_FOREST_EDITORS
import SMB_FOREST_TIMES =                                             Tracks.SMB_FOREST_TIMES
import SMB_GHOST_HOUSE_EDITORS =                                      Tracks.SMB_GHOST_HOUSE_EDITORS
import SMB_GHOST_HOUSE_TIMES =                                        Tracks.SMB_GHOST_HOUSE_TIMES
import SMB_GROUND_EDITORS =                                           Tracks.SMB_GROUND_EDITORS
import SMB_GROUND_TIMES =                                             Tracks.SMB_GROUND_TIMES
import SMB_SNOW_EDITORS =                                             Tracks.SMB_SNOW_EDITORS
import SMB_SNOW_TIMES =                                               Tracks.SMB_SNOW_TIMES
import SMB_SKY_EDITORS =                                              Tracks.SMB_SKY_EDITORS
import SMB_SKY_TIMES =                                                Tracks.SMB_SKY_TIMES
import SMB_UNDERGROUND_EDITORS =                                      Tracks.SMB_UNDERGROUND_EDITORS
import SMB_UNDERGROUND_TIMES =                                        Tracks.SMB_UNDERGROUND_TIMES
import SMB_UNDERWATER_EDITORS =                                       Tracks.SMB_UNDERWATER_EDITORS
import SMB_UNDERWATER_TIMES =                                         Tracks.SMB_UNDERWATER_TIMES
import SMB3_AIRSHIP_EDITORS =                                         Tracks.SMB3_AIRSHIP_EDITORS
import SMB3_AIRSHIP_TIMES =                                           Tracks.SMB3_AIRSHIP_TIMES
import SMB3_CASTLE_EDITORS =                                          Tracks.SMB3_CASTLE_EDITORS
import SMB3_CASTLE_TIMES =                                            Tracks.SMB3_CASTLE_TIMES
import SMB3_DESERT_EDITORS =                                          Tracks.SMB3_DESERT_EDITORS
import SMB3_FOREST_EDITORS =                                          Tracks.SMB3_FOREST_EDITORS
import SMB3_GHOST_HOUSE_EDITORS =                                     Tracks.SMB3_GHOST_HOUSE_EDITORS
import SMB3_GHOST_HOUSE_TIMES =                                       Tracks.SMB3_GHOST_HOUSE_TIMES
import SMB3_GROUND_EDITORS =                                          Tracks.SMB3_GROUND_EDITORS
import SMB3_GROUND_TIMES =                                            Tracks.SMB3_GROUND_TIMES
import SMB3_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES =  Tracks.SMB3_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES
import SMB3_SNOW_EDITORS =                                            Tracks.SMB3_SNOW_EDITORS
import SMB3_SNOW_TIMES =                                              Tracks.SMB3_SNOW_TIMES
import SMB3_SKY_EDITORS =                                             Tracks.SMB3_SKY_EDITORS
import SMB3_SKY_TIMES =                                               Tracks.SMB3_SKY_TIMES
import SMB3_UNDERGROUND_EDITORS =                                     Tracks.SMB3_UNDERGROUND_EDITORS
import SMB3_UNDERGROUND_TIMES =                                       Tracks.SMB3_UNDERGROUND_TIMES
import SMB3_UNDERWATER_EDITORS =                                      Tracks.SMB3_UNDERWATER_EDITORS
import SMB3_UNDERWATER_TIMES =                                        Tracks.SMB3_UNDERWATER_TIMES
import SMG =                                                          SoundEffects.SMG
import SMK =                                                          SoundEffects.SMK
import SMS =                                                          SoundEffects.SMS
import SMW_AIRSHIP_EDITORS =                                          Tracks.SMW_AIRSHIP_EDITORS
import SMW_AIRSHIP_TIMES =                                            Tracks.SMW_AIRSHIP_TIMES
import SMW_CASTLE_EDITORS =                                           Tracks.SMW_CASTLE_EDITORS
import SMW_CASTLE_TIMES =                                             Tracks.SMW_CASTLE_TIMES
import SMW_DESERT_EDITORS =                                           Tracks.SMW_DESERT_EDITORS
import SMW_DESERT_TIMES =                                             Tracks.SMW_DESERT_TIMES
import SMW_FOREST_EDITORS =                                           Tracks.SMW_FOREST_EDITORS
import SMW_FOREST_TIMES =                                             Tracks.SMW_FOREST_TIMES
import SMW_GHOST_HOUSE_EDITORS =                                      Tracks.SMW_GHOST_HOUSE_EDITORS
import SMW_GHOST_HOUSE_TIMES =                                        Tracks.SMW_GHOST_HOUSE_TIMES
import SMW_GROUND_EDITORS =                                           Tracks.SMW_GROUND_EDITORS
import SMW_GROUND_TIMES =                                             Tracks.SMW_GROUND_TIMES
import SMW_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES =   Tracks.SMW_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES
import SMW_SNOW_EDITORS =                                             Tracks.SMW_SNOW_EDITORS
import SMW_SNOW_TIMES =                                               Tracks.SMW_SNOW_TIMES
import SMW_SKY_EDITORS =                                              Tracks.SMW_SKY_EDITORS
import SMW_SKY_TIMES =                                                Tracks.SMW_SKY_TIMES
import SMW_UNDERGROUND_EDITORS =                                      Tracks.SMW_UNDERGROUND_EDITORS
import SMW_UNDERGROUND_TIMES =                                        Tracks.SMW_UNDERGROUND_TIMES
import SMW_UNDERWATER_EDITORS =                                       Tracks.SMW_UNDERWATER_EDITORS
import SMW_UNDERWATER_TIMES =                                         Tracks.SMW_UNDERWATER_TIMES
import SM3DW_AIRSHIP_EDITORS =                                        Tracks.SM3DW_AIRSHIP_EDITORS
import SM3DW_AIRSHIP_TIMES =                                          Tracks.SM3DW_AIRSHIP_TIMES
import SM3DW_CASTLE_EDITORS =                                         Tracks.SM3DW_CASTLE_EDITORS
import SM3DW_CASTLE_TIMES =                                           Tracks.SM3DW_CASTLE_TIMES
import SM3DW_DESERT_EDITORS =                                         Tracks.SM3DW_DESERT_EDITORS
import SM3DW_DESERT_TIMES =                                           Tracks.SM3DW_DESERT_TIMES
import SM3DW_FOREST_EDITORS =                                         Tracks.SM3DW_FOREST_EDITORS
import SM3DW_FOREST_TIMES =                                           Tracks.SM3DW_FOREST_TIMES
import SM3DW_GHOST_HOUSE_EDITORS =                                    Tracks.SM3DW_GHOST_HOUSE_EDITORS
import SM3DW_GHOST_HOUSE_TIMES =                                      Tracks.SM3DW_GHOST_HOUSE_TIMES
import SM3DW_GROUND_EDITORS =                                         Tracks.SM3DW_GROUND_EDITORS
import SM3DW_GROUND_TIMES =                                           Tracks.SM3DW_GROUND_TIMES
import SM3DW_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES = Tracks.SM3DW_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES
import SM3DW_SNOW_EDITORS =                                           Tracks.SM3DW_SNOW_EDITORS
import SM3DW_SNOW_TIMES =                                             Tracks.SM3DW_SNOW_TIMES
import SM3DW_SKY_EDITORS =                                            Tracks.SM3DW_SKY_EDITORS
import SM3DW_SKY_TIMES =                                              Tracks.SM3DW_SKY_TIMES
import SM3DW_UNDERGROUND_EDITORS =                                    Tracks.SM3DW_UNDERGROUND_EDITORS
import SM3DW_UNDERGROUND_TIMES =                                      Tracks.SM3DW_UNDERGROUND_TIMES
import SM3DW_UNDERWATER_EDITORS =                                     Tracks.SM3DW_UNDERWATER_EDITORS
import SM3DW_UNDERWATER_TIMES =                                       Tracks.SM3DW_UNDERWATER_TIMES
import UNDERWATER_LESSON_EDITORS =                                    Tracks.UNDERWATER_LESSON_EDITORS
import SM64 =                                                         SoundEffects.SM64

/** @reactComponent */
export default function MusicApp() {
    return <div id="music-app-container">
        <h1 className="text-center fw-bold text-decoration-underline">{contentTranslation('music.title',)}</h1>
        <PageTitle value={contentTranslation('music.singular',)}/>
        <p className="container-md mb-3">
            {contentTranslation('music.introduction.1. present',)}
            {contentTranslation('music.introduction.2. no sound effect', {
                soundEffectsLink: <Link key="Sound Effect link" to={routeFromName('everySoundEffect',)}>{gameContentTranslation('sound effect.plural',).toLowerCase()}</Link>,
                editorVoicesLink: <Link key="Editor Voice link" to={routeFromName('everyEditorVoice',)}>{gameContentTranslation('editor voice.plural',).toLowerCase()}</Link>,
            },)}
            {contentTranslation('music.introduction.3. organization',)}
            {contentTranslation('music.introduction.4. organization',)}
        </p>
        {/*<div id="selector-container">
            <div id="gameStyle-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.SMB}/></button>
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.SMB3}/></button>
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.SMW}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.NSMBU}/></button>
                    <button className="btn btn-outline-primary"><GameStyleImage reference={GameStyles.SM3DW}/></button>
                </div>
            </div>
            <div id="courseTheme-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.GROUND}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.UNDERGROUND}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.UNDERWATER}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.DESERT}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SNOW}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SKY}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.FOREST}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.GHOST_HOUSE}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.AIRSHIP}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.CASTLE}/></button>
                </div>
            </div>
            <div id="worldTheme-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.GROUND}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.UNDERGROUND}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.DESERT}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SNOW}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SKY}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.FOREST}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.VOLCANO}/></button>
                    <button className="btn btn-outline-primary"><ThemeImage reference={Themes.SPACE}/></button>
                </div>
            </div>
            <div id="powerUp-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><Image file={Entities.MASTER_SWORD.editorImage.get(GameStyles.SMB, Themes.GROUND, Times.DAY,)[0]}/></button>
                    <button className="btn btn-outline-primary"><Image file={Entities.SMB2_MUSHROOM.editorImage.get(GameStyles.SMB, Themes.GROUND, Times.DAY,)[0]}/></button>
                    <button className="btn btn-outline-primary"><Image file={Entities.SUPERBALL_FLOWER.editorImage.get(GameStyles.SMB, Themes.GROUND, Times.DAY,)[0]}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><Image file={Entities.YOSHI_EGG.editorImage.get(GameStyles.SMW, Themes.GROUND, Times.DAY,)[0]}/></button>
                    <button className="btn btn-outline-primary"><Image file={Entities.SUPER_STAR.editorImage.get(GameStyles.SMW, Themes.GROUND, Times.DAY,)[0]}/></button>
                </div>
            </div>
            <div id="soundEffect-selector-buttonGroup" className="btn-group-vertical">
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.PEACEFUL}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/></button>
                </div>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.SUPER_MARIO_KART_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.SUPER_MARIO_64_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC}/></button>
                    <button className="btn btn-outline-primary"><SoundEffectImage reference={SoundEffects.SUPER_MARIO_GALAXY_MUSIC}/></button>
                </div>
            </div>
        </div>*/}

        <div id="smb-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.SMB} className="mb-1"/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_GROUND_EDITORS} files={SMB_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_UNDERGROUND_EDITORS} files={SMB_UNDERGROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_UNDERWATER_EDITORS} files={SMB_UNDERWATER_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_DESERT_EDITORS} files={SMB_DESERT_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_SNOW_EDITORS} files={SMB_SNOW_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_SKY_EDITORS} files={SMB_SKY_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_FOREST_EDITORS} files={SMB_FOREST_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_GHOST_HOUSE_EDITORS} files={SMB_GHOST_HOUSE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_AIRSHIP_EDITORS} files={SMB_AIRSHIP_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <TimeWithLinkAndSmb2MusicsContainer editorFiles={SMB_CASTLE_EDITORS} files={SMB_CASTLE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <SmlMusicsContainer files={[Tracks.SML, Tracks.SML_FAST,]}/>
            <PSwitchMusicsContainer files={[Tracks.P_SWITCH_SMB, Tracks.P_SWITCH_SMB_FAST,]} gameStyle={GameStyles.SMB}/>
            <SuperStarMusicsContainer files={[Tracks.SUPER_STAR_SMB, Tracks.SUPER_STAR_SMB_FAST,]} gameStyle={GameStyles.SMB}/>
            <PeacefulMusicsContainer files={PEACEFUL}/>
            <BonusMusicsContainer files={SMB_BONUSES}/>
            <BossMusicsContainer files={SMB_BOSSES}/>
            <FinalBossMusicsContainer files={SMB_FINAL_BOSSES} asSmb3/>
        </div>
        <div id="smb3-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.SMB3} className="mb-1"/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <TimeMusicsContainer editorFiles={SMB3_GROUND_EDITORS} files={SMB3_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <TimeMusicsContainer editorFiles={SMB3_UNDERGROUND_EDITORS} files={SMB3_UNDERGROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <TimeMusicsContainer editorFiles={SMB3_UNDERWATER_EDITORS} files={SMB3_UNDERWATER_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <TimeAsGroundMusicsContainer editorFiles={SMB3_DESERT_EDITORS} files={SMB3_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <TimeMusicsContainer editorFiles={SMB3_SNOW_EDITORS} files={SMB3_SNOW_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <TimeMusicsContainer editorFiles={SMB3_SKY_EDITORS} files={SMB3_SKY_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <TimeAsGroundMusicsContainer editorFiles={SMB3_FOREST_EDITORS} files={SMB3_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <TimeMusicsContainer editorFiles={SMB3_GHOST_HOUSE_EDITORS} files={SMB3_GHOST_HOUSE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <TimeMusicsContainer editorFiles={SMB3_AIRSHIP_EDITORS} files={SMB3_AIRSHIP_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <TimeMusicsContainer editorFiles={SMB3_CASTLE_EDITORS} files={SMB3_CASTLE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <PSwitchSuperStarBonusBossAndFinalBossMusicsContainer files={SMB3_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES} gameStyle={GameStyles.SMB3}/>
        </div>
        <div id="smw-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.SMW} className="mb-1"/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_GROUND_EDITORS} files={SMW_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_UNDERGROUND_EDITORS} files={SMW_UNDERGROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_UNDERWATER_EDITORS} files={SMW_UNDERWATER_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_DESERT_EDITORS} files={SMW_DESERT_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_SNOW_EDITORS} files={SMW_SNOW_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_SKY_EDITORS} files={SMW_SKY_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_FOREST_EDITORS} files={SMW_FOREST_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_GHOST_HOUSE_EDITORS} files={SMW_GHOST_HOUSE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_AIRSHIP_EDITORS} files={SMW_AIRSHIP_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <TimeWithSmwYoshiMusicsContainer editorFiles={SMW_CASTLE_EDITORS} files={SMW_CASTLE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <PSwitchSuperStarBonusBossAndFinalBossMusicsContainer files={SMW_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES} gameStyle={GameStyles.SMW}/>
        </div>
        <div id="nsmbu-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.NSMBU} className="mb-1"/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <TimeWithNsmbuYoshiAndLessonEditorMusicsContainer editorFiles={NSMBU_GROUND_EDITORS} lessonEditorFiles={GROUND_LESSON_EDITORS} files={NSMBU_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <TimeWithNsmbuYoshiMusicsContainer editorFiles={NSMBU_UNDERGROUND_EDITORS} files={NSMBU_UNDERGROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <TimeWithNsmbuYoshiAndLessonEditorMusicsContainer editorFiles={NSMBU_UNDERWATER_EDITORS} lessonEditorFiles={UNDERWATER_LESSON_EDITORS} files={NSMBU_UNDERWATER_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <TimeWithNsmbuYoshiMusicsContainer editorFiles={NSMBU_DESERT_EDITORS} files={NSMBU_DESERT_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <TimeWithNsmbuYoshiMusicsContainer editorFiles={NSMBU_SNOW_EDITORS} files={NSMBU_SNOW_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <TimeWithNsmbuYoshiMusicsContainer editorFiles={NSMBU_SKY_EDITORS} files={NSMBU_SKY_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <TimeWithNsmbuYoshiAndLessonEditorMusicsContainer editorFiles={NSMBU_FOREST_EDITORS} lessonEditorFiles={FOREST_LESSON_EDITORS} files={NSMBU_FOREST_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <TimeWithNsmbuYoshiAndLessonEditorMusicsContainer editorFiles={NSMBU_GHOST_HOUSE_EDITORS} lessonEditorFiles={GHOST_HOUSE_LESSON_EDITORS} files={NSMBU_GHOST_HOUSE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <TimeWithNsmbuYoshiMusicsContainer editorFiles={NSMBU_AIRSHIP_EDITORS} files={NSMBU_AIRSHIP_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <TimeWithNsmbuYoshiAndLessonEditorMusicsContainer editorFiles={NSMBU_CASTLE_EDITORS} lessonEditorFiles={CASTLE_LESSON_EDITORS} files={NSMBU_CASTLE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <PSwitchSuperStarBonusWithNsmbuYoshiBossAndFinalBossMusicsContainer files={NSMBU_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES}/>
        </div>
        <div id="sm3dw-musics-container" className="gameStyle-musics-container musics-container">
            <GameStyleImage reference={GameStyles.SM3DW} className="mb-1"/>
            <div className="w-100"/>
            <ThemeGroupedMusicsContainer theme={Themes.GROUND}>
                <DayMusicsContainer editorFiles={SM3DW_GROUND_EDITORS} files={SM3DW_GROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERGROUND}>
                <DayMusicsContainer editorFiles={SM3DW_UNDERGROUND_EDITORS} files={SM3DW_UNDERGROUND_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.UNDERWATER}>
                <DayMusicsContainer editorFiles={SM3DW_UNDERWATER_EDITORS} files={SM3DW_UNDERWATER_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.DESERT}>
                <DayMusicsContainer editorFiles={SM3DW_DESERT_EDITORS} files={SM3DW_DESERT_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SNOW}>
                <DayMusicsContainer editorFiles={SM3DW_SNOW_EDITORS} files={SM3DW_SNOW_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.SKY}>
                <DayMusicsContainer editorFiles={SM3DW_SKY_EDITORS} files={SM3DW_SKY_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.FOREST}>
                <DayWithUnderwaterMusicsContainer editorFiles={SM3DW_FOREST_EDITORS} files={SM3DW_FOREST_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.GHOST_HOUSE}>
                <DayMusicsContainer editorFiles={SM3DW_GHOST_HOUSE_EDITORS} files={SM3DW_GHOST_HOUSE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.AIRSHIP}>
                <DayMusicsContainer editorFiles={SM3DW_AIRSHIP_EDITORS} files={SM3DW_AIRSHIP_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <ThemeGroupedMusicsContainer theme={Themes.CASTLE}>
                <DayMusicsContainer editorFiles={SM3DW_CASTLE_EDITORS} files={SM3DW_CASTLE_TIMES}/>
            </ThemeGroupedMusicsContainer>
            <div className="w-100"/>
            <PSwitchSuperStarBonusBossAndFinalBossMusicsContainer files={SM3DW_P_SWITCHES_SUPER_STARS_BONUSES_BOSSES_AND_FINAL_BOSSES} gameStyle={GameStyles.SM3DW}/>
        </div>

        {/*<div id="ground-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.GROUND}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_GROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB_GROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_GROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_GROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_GROUND_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_GROUND_EDITORS}/>
                <LessonEditorMusicsContainer files={GROUND_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_GROUND_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_GROUND_EDITORS}/>
                <DayMusicsContainer files={SM3DW_GROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <div className="w-100"/>
            <LinkMusicsContainer files={[GROUND_LINK, GROUND_LINK_FAST,]}/>
            <Smb2MusicsContainer files={[GROUND_SMB2, GROUND_SMB2_FAST,]}/>
        </div>
        <div id="underground-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.UNDERGROUND}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_UNDERGROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB_UNDERGROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_UNDERGROUND_EDITORS}/>
                <TimeMusicsContainer files={SMB3_UNDERGROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_UNDERGROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_UNDERGROUND_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_UNDERGROUND_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_UNDERGROUND_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_UNDERGROUND_EDITORS}/>
                <DayMusicsContainer files={SM3DW_UNDERGROUND_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <div className="w-100"/>
            <LinkMusicsContainer files={[UNDERGROUND_LINK, UNDERGROUND_LINK_FAST,]}/>
            <Smb2MusicsContainer files={[UNDERGROUND_SMB2, UNDERGROUND_SMB2_FAST,]}/>
        </div>
        <div id="underwater-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.UNDERWATER}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_UNDERWATER_EDITORS}/>
                <TimeMusicsContainer files={SMB_UNDERWATER_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_UNDERWATER_EDITORS}/>
                <TimeMusicsContainer files={SMB3_UNDERWATER_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_UNDERWATER_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_UNDERWATER_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_UNDERWATER_EDITORS}/>
                <LessonEditorMusicsContainer files={UNDERWATER_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_UNDERGROUND_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_UNDERWATER_EDITORS}/>
                <DayMusicsContainer files={SM3DW_UNDERWATER_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="desert-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.DESERT}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_DESERT_EDITORS}/>
                <TimeMusicsContainer files={SMB_DESERT_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_DESERT_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}><ThemeImage reference={Themes.GROUND} isSmallPath/></TimeMusicsContainer>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_DESERT_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_DESERT_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_DESERT_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_DESERT_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_DESERT_EDITORS}/>
                <DayMusicsContainer files={SM3DW_DESERT_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="snow-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.SNOW}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_SNOW_EDITORS}/>
                <TimeMusicsContainer files={SMB_SNOW_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_SNOW_EDITORS}/>
                <TimeMusicsContainer files={SMB3_SNOW_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_SNOW_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_SNOW_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_SNOW_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_SNOW_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_SNOW_EDITORS}/>
                <DayMusicsContainer files={SM3DW_SNOW_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="sky-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.SKY}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_SKY_EDITORS}/>
                <TimeMusicsContainer files={SMB_SKY_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_SKY_EDITORS}/>
                <TimeMusicsContainer files={SMB3_SKY_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_SKY_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_SKY_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_SKY_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_SKY_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_SKY_EDITORS}/>
                <DayMusicsContainer files={SM3DW_SKY_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="forest-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.FOREST}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_FOREST_EDITORS}/>
                <TimeMusicsContainer files={SMB_FOREST_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_FOREST_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GROUND_TIMES}><ThemeImage reference={Themes.GROUND} isSmallPath/></TimeMusicsContainer>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_FOREST_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_FOREST_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_FOREST_EDITORS}/>
                <LessonEditorMusicsContainer files={FOREST_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_FOREST_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_FOREST_EDITORS}/>
                <DayWithUnderwaterMusicsContainer files={SM3DW_FOREST_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="ghostHouse-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.GHOST_HOUSE}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_GHOST_HOUSE_EDITORS}/>
                <TimeMusicsContainer files={SMB_GHOST_HOUSE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_GHOST_HOUSE_EDITORS}/>
                <TimeMusicsContainer files={SMB3_GHOST_HOUSE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_GHOST_HOUSE_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_GHOST_HOUSE_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_GHOST_HOUSE_EDITORS}/>
                <LessonEditorMusicsContainer files={GHOST_HOUSE_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_GHOST_HOUSE_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_GHOST_HOUSE_EDITORS}/>
                <DayMusicsContainer files={SM3DW_GHOST_HOUSE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="airship-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.AIRSHIP}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_AIRSHIP_EDITORS}/>
                <TimeMusicsContainer files={SMB_AIRSHIP_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_AIRSHIP_EDITORS}/>
                <TimeMusicsContainer files={SMB3_AIRSHIP_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_AIRSHIP_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_AIRSHIP_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_AIRSHIP_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_AIRSHIP_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_AIRSHIP_EDITORS}/>
                <DayMusicsContainer files={SM3DW_AIRSHIP_TIMES}/>
            </GameStyleGroupedMusicsContainer>
        </div>
        <div id="castle-musics-container" className="theme-musics-container musics-container">
            <div><ThemeImage reference={Themes.CASTLE}/></div>
            <div className="w-100"/>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB}>
                <EditorMusicsContainer files={SMB_CASTLE_EDITORS}/>
                <TimeMusicsContainer files={SMB_CASTLE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMB3}>
                <EditorMusicsContainer files={SMB3_CASTLE_EDITORS}/>
                <TimeMusicsContainer files={SMB3_CASTLE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SMW}>
                <EditorMusicsContainer files={SMW_CASTLE_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={SMW_CASTLE_TIMES} gameStyle="SMW"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.NSMBU}>
                <EditorMusicsContainer files={NSMBU_CASTLE_EDITORS}/>
                <LessonEditorMusicsContainer files={CASTLE_LESSON_EDITORS}/>
                <TimeWithYoshiMusicsContainer files={NSMBU_CASTLE_TIMES} gameStyle="NSMBU"/>
            </GameStyleGroupedMusicsContainer>
            <GameStyleGroupedMusicsContainer gameStyle={GameStyles.SM3DW}>
                <EditorMusicsContainer files={SM3DW_CASTLE_EDITORS}/>
                <DayMusicsContainer files={SM3DW_CASTLE_TIMES}/>
            </GameStyleGroupedMusicsContainer>
            <div className="w-100"/>
            <LinkMusicsContainer files={[CASTLE_LINK, CASTLE_LINK_FAST,]}/>
        </div>*/}

        <div id="world-musics-container" className="world-musics-container musics-container">
            <div><Image file={WORLD_THEME_IMAGE_FILE}/></div>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <Image file={WORLD_THEME_IMAGE_FILE}/>
                <DontViewTrace/>

                <ThemeImage reference={Themes.GROUND} isSmallPath/>
                <Track value={Tracks.GROUND_WORLD_EDITOR}/>
                <Track value={Tracks.GROUND_WORLD}/>

                <ThemeImage reference={Themes.UNDERGROUND} isSmallPath/>
                <Track value={Tracks.UNDERGROUND_WORLD_EDITOR}/>
                <Track value={Tracks.UNDERGROUND_WORLD}/>

                <ThemeImage reference={Themes.DESERT} isSmallPath/>
                <Track value={Tracks.DESERT_WORLD_EDITOR}/>
                <Track value={Tracks.DESERT_WORLD}/>

                <ThemeImage reference={Themes.SNOW} isSmallPath/>
                <Track value={Tracks.SNOW_WORLD_EDITOR}/>
                <Track value={Tracks.SNOW_WORLD}/>

                <ThemeImage reference={Themes.SKY} isSmallPath/>
                <Track value={Tracks.SKY_WORLD_EDITOR}/>
                <Track value={Tracks.SKY_WORLD}/>

                <ThemeImage reference={Themes.FOREST} isSmallPath/>
                <Track value={Tracks.FOREST_WORLD_EDITOR}/>
                <Track value={Tracks.FOREST_WORLD}/>

                <ThemeImage reference={Themes.VOLCANO} isSmallPath/>
                <Track value={Tracks.VOLCANO_WORLD_EDITOR}/>
                <Track value={Tracks.VOLCANO_WORLD}/>

                <ThemeImage reference={Themes.SPACE} isSmallPath/>
                <Track value={Tracks.SPACE_WORLD_EDITOR}/>
                <Track value={Tracks.SPACE_WORLD}/>
            </div>
        </div>

        <div id="link-musics-container" className="powerUp-musics-container musics-container">
            <LinkImage/>
            <div className="musics-container no-style small-images grid-3">
                <div/>
                <DontViewTrace/>
                <ViewTrace/>

                <div className="d-flex flex-column border border-bottom-0 border-primary-subtle rounded-top p-1">
                    <div className="d-flex mb-1">
                        <ThemeImage reference={Themes.GROUND} isSmallPath className="me-1"/>
                        <ThemeImage reference={Themes.UNDERWATER} isSmallPath/>
                    </div>
                    <div className="d-flex mb-1">
                        <ThemeImage reference={Themes.DESERT} isSmallPath className="me-1"/>
                        <ThemeImage reference={Themes.SNOW} isSmallPath/>
                    </div>
                    <div className="d-flex">
                        <ThemeImage reference={Themes.SKY} isSmallPath className="me-1"/>
                        <ThemeImage reference={Themes.FOREST} isSmallPath/>
                    </div>
                </div>
                <Track value={Tracks.GROUND_LINK}/>
                <Track value={Tracks.GROUND_LINK_FAST}/>

                <div className="d-flex border border-bottom-0 border-primary-subtle p-1">
                    <ThemeImage reference={Themes.UNDERGROUND} isSmallPath className="me-1"/>
                    <ThemeImage reference={Themes.GHOST_HOUSE} isSmallPath/>
                </div>
                <Track value={Tracks.UNDERGROUND_LINK}/>
                <Track value={Tracks.UNDERGROUND_LINK_FAST}/>

                <div className="d-flex border border-primary-subtle rounded-bottom p-1">
                    <ThemeImage reference={Themes.AIRSHIP} isSmallPath className="me-1"/>
                    <ThemeImage reference={Themes.CASTLE} isSmallPath/>
                </div>
                <Track value={Tracks.CASTLE_LINK}/>
                <Track value={Tracks.CASTLE_LINK_FAST}/>

                <SoundEffectImage reference={SoundEffects.PEACEFUL}/>
                <Track value={Tracks.PEACEFUL_LINK}/>
                <div/>

                <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
                <Track value={BONUS_LINK}/>
                <Track value={BONUS_LINK_FAST}/>

                <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
                <Track value={BOSS_LINK}/>
                <Track value={BOSS_LINK_FAST}/>

                <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
                <Track value={FINAL_BOSS_LINK}/>
                <Track value={FINAL_BOSS_LINK_FAST}/>
            </div>
        </div>
        <div id="smb2-musics-container" className="powerUp-musics-container musics-container">
            <Smb2Image/>
            <div className="musics-container no-style small-images grid-3">
                <div/>
                <DontViewTrace/>
                <ViewTrace/>

                <div className="d-flex flex-column align-items-center border border-bottom-0 border-primary-subtle rounded-top p-1">
                    <div className="d-flex mb-1">
                        <ThemeImage reference={Themes.GROUND} isSmallPath className="me-1"/>
                        <ThemeImage reference={Themes.UNDERWATER} isSmallPath/>
                    </div>
                    <div className="d-flex mb-1">
                        <ThemeImage reference={Themes.DESERT} isSmallPath className="me-1"/>
                        <ThemeImage reference={Themes.SNOW} isSmallPath/>
                    </div>
                    <div className="d-flex mb-1">
                        <ThemeImage reference={Themes.SKY} isSmallPath className="me-1"/>
                        <ThemeImage reference={Themes.FOREST} isSmallPath/>
                    </div>
                    <div><ThemeImage reference={Themes.AIRSHIP} isSmallPath/></div>
                </div>
                <Track value={Tracks.GROUND_SMB2}/>
                <Track value={Tracks.GROUND_SMB2_FAST}/>

                <div className="d-flex flex-column align-items-center border border-primary-subtle rounded-bottom p-1">
                    <div className="d-flex mb-1">
                        <ThemeImage reference={Themes.UNDERGROUND} isSmallPath className="me-1"/>
                        <ThemeImage reference={Themes.GHOST_HOUSE} isSmallPath/>
                    </div>
                    <div><ThemeImage reference={Themes.CASTLE} isSmallPath/></div>
                </div>
                <Track value={Tracks.UNDERGROUND_SMB2}/>
                <Track value={Tracks.UNDERGROUND_SMB2_FAST}/>

                <SoundEffectImage reference={SoundEffects.PEACEFUL}/>
                <Track value={Tracks.PEACEFUL_SMB2}/>
                <div/>

                <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
                <Track value={BONUS_SMB2}/>
                <Track value={BONUS_SMB2_FAST}/>

                <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
                <Track value={BOSS_SMB2}/>
                <Track value={BOSS_SMB2_FAST}/>

                <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
                <Track value={FINAL_BOSS_SMB2}/>
                <Track value={FINAL_BOSS_SMB2_FAST}/>
            </div>
        </div>

        <div id="peaceful-musics-container" className="soundEffect-musics-container musics-container">
            <SoundEffectImage reference={SoundEffects.PEACEFUL}/>

            <div className="musics-container no-style small-images grid-2">
                <LinkImage/>
                <Track value={Tracks.PEACEFUL_LINK}/>

                <Smb2Image/>
                <Track value={Tracks.PEACEFUL_SMB2}/>
            </div>
        </div>
        <div id="bonus-musics-container" className="soundEffect-musics-container musics-container">
            <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <DontViewTrace/>
                <ViewTrace/>

                <GameStyleImage reference={GameStyles.SMB}/>
                <Track value={BONUS_SMB}/>
                <Track value={BONUS_SMB_FAST}/>

                <GameStyleImage reference={GameStyles.SMB3}/>
                <Track value={BONUS_SMB3}/>
                <Track value={BONUS_SMB3_FAST}/>

                <GameStyleImage reference={GameStyles.SMW}/>
                <Track value={BONUS_SMW}/>
                <Track value={BONUS_SMW_FAST}/>

                <GameStyleImage reference={GameStyles.NSMBU}/>
                <YoshiTrack normal={BONUS_NSMBU} yoshi={BONUS_NSMBU_YOSHI} image={NSMBU_YOSHI_IMAGE}/>
                <YoshiTrack normal={BONUS_NSMBU_FAST} yoshi={BONUS_NSMBU_YOSHI_FAST} image={NSMBU_YOSHI_IMAGE}/>

                <GameStyleImage reference={GameStyles.SM3DW}/>
                <Track value={BONUS_SM3DW}/>
                <Track value={BONUS_SM3DW_FAST}/>

                <LinkImage/>
                <Track value={BONUS_LINK}/>
                <Track value={BONUS_LINK_FAST}/>

                <Smb2Image/>
                <Track value={BONUS_SMB2}/>
                <Track value={BONUS_SMB2_FAST}/>
            </div>
        </div>
        <div id="boss-musics-container" className="soundEffect-musics-container musics-container">
            <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <DontViewTrace/>
                <ViewTrace/>

                <GameStyleImage reference={GameStyles.SMB}/>
                <Track value={BOSS_SMB}/>
                <Track value={BOSS_SMB_FAST}/>

                <GameStyleImage reference={GameStyles.SMB3}/>
                <Track value={BOSS_SMB3}/>
                <Track value={BOSS_SMB3_FAST}/>

                <GameStyleImage reference={GameStyles.SMW}/>
                <Track value={BOSS_SMW}/>
                <Track value={BOSS_SMW_FAST}/>

                <GameStyleImage reference={GameStyles.NSMBU}/>
                <Track value={BOSS_NSMBU}/>
                <Track value={BOSS_NSMBU_FAST}/>

                <GameStyleImage reference={GameStyles.SM3DW}/>
                <Track value={BOSS_SM3DW}/>
                <Track value={BOSS_SM3DW_FAST}/>

                <LinkImage/>
                <Track value={BOSS_LINK}/>
                <Track value={BOSS_LINK_FAST}/>

                <Smb2Image/>
                <Track value={BOSS_SMB2}/>
                <Track value={BOSS_SMB2_FAST}/>
            </div>
        </div>
        <div id="finalBoss-musics-container" className="soundEffect-musics-container musics-container">
            <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>

            <div className="musics-container no-style small-images grid-3">
                <div/>
                <DontViewTrace/>
                <ViewTrace/>

                <div className="d-flex flex-column align-items-center border border-primary-subtle rounded p-1">
                    <GameStyleImage reference={GameStyles.SMB} className="mb-1"/>
                    <GameStyleImage reference={GameStyles.SMB3}/>
                </div>
                <Track value={FINAL_BOSS_SMB3}/>
                <Track value={FINAL_BOSS_SMB3_FAST}/>

                <GameStyleImage reference={GameStyles.SMW}/>
                <Track value={FINAL_BOSS_SMW}/>
                <Track value={FINAL_BOSS_SMW_FAST}/>

                <GameStyleImage reference={GameStyles.NSMBU}/>
                <Track value={FINAL_BOSS_NSMBU}/>
                <Track value={FINAL_BOSS_NSMBU_FAST}/>

                <GameStyleImage reference={GameStyles.SM3DW}/>
                <Track value={FINAL_BOSS_SM3DW}/>
                <Track value={FINAL_BOSS_SM3DW_FAST}/>

                <LinkImage/>
                <Track value={FINAL_BOSS_LINK}/>
                <Track value={FINAL_BOSS_LINK_FAST}/>

                <Smb2Image/>
                <Track value={FINAL_BOSS_SMB2}/>
                <Track value={FINAL_BOSS_SMB2_FAST}/>
            </div>
        </div>
        <div id="otherGames-musics-container" className="musics-container">
            <div className="musics-container no-style small-images grid-3">
                <div/>
                <DontViewTrace/>
                <ViewTrace/>

                <SoundEffectImage reference={SMK}/>
                <Track value={Tracks.SMK}/>
                <Track value={Tracks.SMK_FAST}/>

                <SoundEffectImage reference={SM64}/>
                <Track value={Tracks.SM64}/>
                <Track value={Tracks.SM64_FAST}/>

                <SoundEffectImage reference={SMS}/>
                <Track value={Tracks.SMS}/>
                <Track value={Tracks.SMS_FAST}/>

                <SoundEffectImage reference={SMG}/>
                <Track value={Tracks.SMG}/>
                <Track value={Tracks.SMG_FAST}/>
            </div>
        </div>
    </div>
}

//region -------------------- Image --------------------

const LINK_IMAGE = EditorEntityImages.MASTER_SWORD.image.getSmb().getFirst()
const SMB2_IMAGE = EditorEntityImages.SMB2_MUSHROOM.image.getSmb().getFirst()
const SML_IMAGE = EditorEntityImages.SUPERBALL_FLOWER.image.getSmb().getFirst()
const SMW_YOSHI_IMAGE = EditorEntityImages.YOSHI_EGG.image.getSmw().getFirst()
const NSMBU_YOSHI_IMAGE = ClearConditionEntityImages.YOSHI_EGG.image.get(GameStyles.NSMBU,)


function getPSwitchImage(gameStyle: GameStyles,) {
    return EditorEntityImages.P_SWITCH.image.get(gameStyle,).getFirst()
}

function getSuperStarImage(gameStyle: GameStyles,) {
    return EditorEntityImages.SUPER_STAR.image.get(gameStyle,).getFirst()
}

// function getYoshiImage(gameStyle: GameStyles,) {
//     if (gameStyle === GameStyles.SMW)
//         return EditorEntityImages.YOSHI_EGG.image.get(gameStyle, Themes.GROUND, Times.DAY,).getFirst()
//     if (gameStyle === GameStyles.NSMBU)
//         return ClearConditionEntityImages.YOSHI_EGG.image.get(gameStyle,)
//     throw new TypeError(`The game style ${gameStyle.acronym} was not expected for a Yoshi.`,)
// }

//endregion -------------------- Image --------------------
//region -------------------- Musics --------------------

//region -------------------- Musics --------------------

interface MusicsProperties<out FILES extends Array<Tracks>, >
    extends ReactProperties { readonly files: FILES }

interface MusicsWithEditorProperties<out FILES extends Array<Tracks>, >
    extends MusicsProperties<FILES> { readonly editorFiles: ArrayOf7<Tracks> }

//endregion -------------------- Musics --------------------

//region -------------------- Game style musics --------------------

// interface GameStyleMusicsProperties extends MusicsProperties<ArrayOf1To3<Tracks>> { readonly gameStyle: GameStyles }
//
// /** @reactComponent */
// function GameStyleMusicsContainer({gameStyle, files,}: GameStyleMusicsProperties,) {
//     const name = gameStyle.englishName
//     const nameInHtml = gameStyle.englishNameInHtml
//
//     return <div className={`${nameInHtml}-gameStyle-musics-container gameStyle-musics-container musics-container`}>
//         <div><GameStyleImage reference={gameStyle}/></div>
//         <div className={`${nameInHtml}-gameStyle-music-container gameStyle-music-container music-container`}>{new ArrayAsCollection(files,).map(it =>
//             <Track key={`Game style music (${name} - ${it.titleName})`} value={it}/>)
//         }</div>
//     </div>
// }
//

// interface GameStyleGroupedMusicsProperties extends GroupedMusicsProperties { readonly gameStyle: GameStyles }
//
// /** @reactComponent */
// function GameStyleGroupedMusicsContainer({gameStyle, children,}: GameStyleGroupedMusicsProperties,) {
//     return <div className={`${gameStyle.englishNameInHtml}-gameStyle-musics-container gameStyle-musics-container musics-container`}>
//         <div><GameStyleImage reference={gameStyle}/></div>
//         {children}
//     </div>
// }

// /** @reactComponent */
// function GameStyleGroupedMusicsContainer({gameStyle, editor, lessonEditor, normalSpeed, fastSpeed, day, night,}: GroupedGameStyleMusicsProperties,) {
//     return <div className="gameStyle-musics-container musics-container">
//         <div><GameStyleImage reference={gameStyle}/></div>
//         {editor == null ? null : <EditorMusicsContainer files={editor}/>}
//         {lessonEditor == null ? null : <LessonEditorMusicsContainer files={lessonEditor}/>}
//         {normalSpeed == null ? null : <NormalSpeedMusicsContainer files={normalSpeed}/>}
//         {fastSpeed == null ? null : <FastSpeedMusicsContainer files={fastSpeed}/>}
//         {day == null ? null : <DayMusicsContainer files={day}/>}
//         {/*standalone == null ? null : <div className={`${nameInHtml}-${type}-gameStyle-standalone-musics-container musics-container`}>
//             <UnfinishedText>Standalone</UnfinishedText>
//             <div className={`${nameInHtml}-${type}-gameStyle-standalone-music-container music-container`}>{new ArrayAsCollection(standalone,).map(it =>
//                 <Track key={`Standalone game style music (${name} - ${it.titleName})`} value={it}/>,)
//             }</div>
//         </div>*/}
//         {night == null ? null : <NightMusicsContainer files={night}/>}
//         {/*yoshi == null ? null : <div className={`${nameInHtml}-${type}-gameStyle-yoshi-musics-container musics-container`}>
//             <Image file={getYoshiImage(gameStyle,)}/>
//             <div className={`${nameInHtml}-${type}-gameStyle-yoshi-music-container music-container`}>{new ArrayAsCollection(yoshi,).map(it =>
//                 <Track key={`Night game style music (${name} - ${it.titleName})`} value={it}/>,)
//             }</div>
//         </div>*/}
//         {/*underwater == null ? null : <div className={`${nameInHtml}-${type}-gameStyle-underwater-musics-container musics-container`}>
//             <div><ThemeImage reference={Themes.UNDERWATER}/></div>
//             <div className={`${nameInHtml}-${type}-gameStyle-underwater-music-container music-container`}>{new ArrayAsCollection(underwater,).map(it =>
//                 <Track key={`Underwater game style music (${name} - ${it.titleName})`} value={it}/>,)
//             }</div>
//         </div>*/}
//     </div>
// }

//endregion -------------------- Game style musics --------------------

//region -------------------- Theme musics --------------------

// interface ThemeMusicsProperties extends MusicsProperties<ArrayOf1To3<Tracks>> { readonly theme: Themes }
//
// /** @reactComponent */
// function ThemeMusicsContainer({theme, files,}: ThemeMusicsProperties,) {
//     const name = theme.englishName
//     const nameInHtml = theme.englishNameInHtml
//
//     return <div className={`${nameInHtml}-theme-musics-container theme-musics-container musics-container`}>
//         <div><ThemeImage reference={theme}/></div>
//         <div className={`${nameInHtml}-theme-music-container theme-music-container music-container`}>{
//             files.map(it =>
//                 <Track key={`Theme music (${name} - ${it.titleName})`} value={it}/>)
//         }</div>
//     </div>
// }
//

interface ThemeGroupedMusicsProperties
    extends ReactPropertiesWithChildren<ReactElementOrArray> { readonly theme: Themes }

/** @reactComponent */
function ThemeGroupedMusicsContainer({theme, children,}: ThemeGroupedMusicsProperties,) {
    return <div className={`${theme.englishNameInHtml}-theme-musics-container theme-musics-container musics-container`}>
        <div><ThemeImage reference={theme}/></div>
        {children}
    </div>
}

//endregion -------------------- Theme musics --------------------

//region -------------------- Sound effect musics --------------------

// interface SoundEffectMusicsProperties extends MusicsProperties<ArrayOf1To3<Tracks>> { readonly soundEffect: SoundEffects }
//
// /** @reactComponent */
// function SoundEffectMusicsContainer({soundEffect, files,}: SoundEffectMusicsProperties,) {
//     const name = soundEffect.name
//     const nameInHtml = soundEffect.englishNameInHtml
//
//     return <div className={`${nameInHtml}-soundEffect-musics-container soundEffect-musics-container musics-container`}>
//         <SoundEffectImage reference={soundEffect}/>
//         <div className={`${nameInHtml}-soundEffectMusics-music-container soundEffectMusics-music-container music-container`}>{new ArrayAsCollection(files,).map(it =>
//             <Track key={`Sound effect music (${name} - ${it.titleName})`} value={it}/>,)
//         }</div>
//     </div>
// }
//

// interface SoundEffectGroupedMusicsProperties extends GroupedMusicsProperties { readonly soundEffect: SoundEffects }
//
// /** @reactComponent */
// function SoundEffectGroupedMusicsContainer({soundEffect, children,}: SoundEffectGroupedMusicsProperties,) {
//     return <div className={`${soundEffect.englishNameInHtml}-soundEffect-musics-container soundEffect-musics-container musics-container`}>
//         <SoundEffectImage reference={soundEffect}/>
//         {children}
//     </div>
// }
//

interface PSwitchSuperStarBonusBossAndFinalBossMusicsProperties
    extends MusicsProperties<ArrayOf10<Tracks>> {

    readonly gameStyle: GameStyles

}

/** @reactComponent */
function PSwitchSuperStarBonusBossAndFinalBossMusicsContainer({files, gameStyle,}: PSwitchSuperStarBonusBossAndFinalBossMusicsProperties,) {
    return <div className="pSwitchMusicAndSuperStarMusicAndBonusMusicAndBossMusicAndFinalBossMusic-musics-container musics-container small-images grid-3">
        <div/>
        <DontViewTrace/>
        <ViewTrace/>

        <Image file={getPSwitchImage(gameStyle,)}/>
        <Track value={files[0]}/>
        <Track value={files[1]}/>

        <Image file={getSuperStarImage(gameStyle,)}/>
        <Track value={files[2]}/>
        <Track value={files[3]}/>

        <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
        <Track value={files[4]}/>
        <Track value={files[5]}/>

        <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
        <Track value={files[6]}/>
        <Track value={files[7]}/>

        <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
        <Track value={files[8]}/>
        <Track value={files[9]}/>
    </div>
}


type PSwitchSuperStarBonusWithYoshiBossAndFinalBossMusicsProperties = MusicsProperties<ArrayOf12<Tracks>>

/** @reactComponent */
function PSwitchSuperStarBonusWithNsmbuYoshiBossAndFinalBossMusicsContainer({files,}: PSwitchSuperStarBonusWithYoshiBossAndFinalBossMusicsProperties,) {
    return <div className="pSwitchMusicAndSuperStarMusicAndBonusMusicAndBossMusicAndFinalBossMusic-nsmbu-musics-container pSwitchMusicAndSuperStarMusicAndBonusMusicAndBossMusicAndFinalBossMusic-musics-container musics-container small-images grid-3">
        <div/>
        <DontViewTrace/>
        <ViewTrace/>

        <Image file={getPSwitchImage(GameStyles.NSMBU,)} className="pSwitch-image"/>
        <Track value={files[0]}/>
        <Track value={files[1]}/>

        <Image file={getSuperStarImage(GameStyles.NSMBU,)} className="superStar-image"/>
        <Track value={files[2]}/>
        <Track value={files[3]}/>

        <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
        <YoshiTrack normal={files[4]} yoshi={files[6]} image={NSMBU_YOSHI_IMAGE}/>
        <YoshiTrack normal={files[5]} yoshi={files[7]} image={NSMBU_YOSHI_IMAGE}/>

        <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
        <Track value={files[8]}/>
        <Track value={files[9]}/>

        <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
        <Track value={files[10]}/>
        <Track value={files[11]}/>
    </div>
}

//endregion -------------------- Sound effect musics --------------------
//region -------------------- Sml musics --------------------

type SmlMusicsProperties = MusicsProperties<ArrayOf2<Tracks>>

/** @reactComponent */
function SmlMusicsContainer({files,}: SmlMusicsProperties,) {
    return <div className="sml-musics-container musics-container">
        <SmlImage/>
        <div className="musics-container no-style grid-2">
            <DontViewTrace/>
            <Track value={files[0]}/>

            <ViewTrace/>
            <Track value={files[1]}/>
        </div>
    </div>
}

//endregion -------------------- Sml musics --------------------
//region -------------------- P-switch musics --------------------

interface PSwitchMusicsProperties
    extends MusicsProperties<ArrayOf2<Tracks>> {

    readonly gameStyle: GameStyles

}

/** @reactComponent */
function PSwitchMusicsContainer({files, gameStyle,}: PSwitchMusicsProperties,) {
    return <div className="pSwitch-musics-container musics-container">
        <Image file={getPSwitchImage(gameStyle,)}/>
        <div className="musics-container no-style grid-2">
            <DontViewTrace/>
            <Track value={files[0]}/>

            <ViewTrace/>
            <Track value={files[1]}/>
        </div>
    </div>
}

//endregion -------------------- P-switch musics --------------------
//region -------------------- Super star musics --------------------

interface SuperStarMusicsProperties
    extends MusicsProperties<ArrayOf2<Tracks>> {

    readonly gameStyle: GameStyles

}

/** @reactComponent */
function SuperStarMusicsContainer({files, gameStyle,}: SuperStarMusicsProperties,) {
    return <div className="superStar-musics-container musics-container">
        <Image file={getSuperStarImage(gameStyle,)}/>
        <div className="musics-container no-style grid-2">
            <DontViewTrace/>
            <Track value={files[0]}/>

            <ViewTrace/>
            <Track value={files[1]}/>
        </div>
    </div>
}

//endregion -------------------- Super star musics --------------------
//region -------------------- Peaceful musics --------------------

type PeacefulMusicsProperties = MusicsProperties<ArrayOf2<Tracks>>

/** @reactComponent */
function PeacefulMusicsContainer({files,}: PeacefulMusicsProperties,) {
    return <div className="peaceful-musics-container musics-container">
        <SoundEffectImage reference={SoundEffects.PEACEFUL}/>
        <div className="musics-container no-style grid-2">
            <LinkImage/>
            <Track value={files[0]}/>

            <Smb2Image/>
            <Track value={files[1]}/>
        </div>
    </div>
}

//endregion -------------------- Peaceful musics --------------------
//region -------------------- Bonus musics --------------------

type BonusMusicsProperties = MusicsProperties<ArrayOf6<Tracks>>

/** @reactComponent */
function BonusMusicsContainer({files,}: BonusMusicsProperties,) {
    return <div className="bonusMusic-musics-container musics-container">
        <SoundEffectImage reference={SoundEffects.BONUS_MUSIC}/>
        <div className="musics-container no-style grid-3">
            <div/>
            <DontViewTrace/>
            <ViewTrace/>

            <div/>
            <Track value={files[0]}/>
            <Track value={files[1]}/>

            <LinkImage/>
            <Track value={files[2]}/>
            <Track value={files[3]}/>

            <Smb2Image/>
            <Track value={files[4]}/>
            <Track value={files[5]}/>
        </div>
    </div>
}

//endregion -------------------- Bonus musics --------------------
//region -------------------- Boss musics --------------------

type BossMusicsProperties = MusicsProperties<ArrayOf6<Tracks>>

/** @reactComponent */
function BossMusicsContainer({files,}: BossMusicsProperties,) {
    return <div className="bossMusic-musics-container musics-container">
        <SoundEffectImage reference={SoundEffects.BOSS_MUSIC}/>
        <div className="musics-container no-style grid-3">
            <div/>
            <DontViewTrace/>
            <ViewTrace/>

            <div/>
            <Track value={files[0]}/>
            <Track value={files[1]}/>

            <LinkImage/>
            <Track value={files[2]}/>
            <Track value={files[3]}/>

            <Smb2Image/>
            <Track value={files[4]}/>
            <Track value={files[5]}/>
        </div>
    </div>
}

//endregion -------------------- Boss musics --------------------
//region -------------------- Final boss musics --------------------

interface FinalBossMusicsProperties
    extends MusicsProperties<ArrayOf6<Tracks>> {

    /** Tell that the first 2 tracks are in {@link SMB3} */
    readonly asSmb3?: boolean

}

/** @reactComponent */
function FinalBossMusicsContainer({files, asSmb3 = false,}: FinalBossMusicsProperties,) {
    return <div className="finalBossMusic-musics-container musics-container">
        <SoundEffectImage reference={SoundEffects.FINAL_BOSS_MUSIC}/>
        <div className="musics-container no-style grid-3">
            <div/>
            <DontViewTrace/>
            <ViewTrace/>

            {asSmb3 ? <div><GameStyleImage reference={GameStyles.SMB3}/></div> : <div/>}
            <Track value={files[0]}/>
            <Track value={files[1]}/>

            <LinkImage/>
            <Track value={files[2]}/>
            <Track value={files[3]}/>

            <Smb2Image/>
            <Track value={files[4]}/>
            <Track value={files[5]}/>
        </div>
    </div>
}

//endregion -------------------- Final boss musics --------------------

//region -------------------- Time musics --------------------

type TimeMusicsProperties = MusicsWithEditorProperties<ArrayOf4<Tracks>>

/** @reactComponent */
function TimeMusicsContainer({editorFiles, files,}: TimeMusicsProperties,) {
    return <div className="time-musics-container musics-container no-style grid-2">
        <CourseThemeImage/>
        <EditorTrack tracks={editorFiles}/>

        <DontViewTrace/>
        <DayNightTrack day={files[0]} night={files[2]}/>

        <ViewTrace/>
        <DayNightTrack day={files[1]} night={files[3]}/>
    </div>
}


type TimeAsGroundMusicsProperties = TimeMusicsProperties

/** @reactComponent */
function TimeAsGroundMusicsContainer({editorFiles, files,}: TimeAsGroundMusicsProperties,) {
    return <div className="timeAsGround-musics-container time-musics-container musics-container no-style grid-2">
        <CourseThemeImage/>
        <EditorTrack tracks={editorFiles}/>

        <DontViewTraceAsGround/>
        <DayNightTrack day={files[0]} night={files[2]}/>

        <ViewTraceAsGround/>
        <DayNightTrack day={files[1]} night={files[3]}/>
    </div>
}


type TimeWithLinkAndSmb2MusicsProperties = MusicsWithEditorProperties<ArrayOf8<Tracks>>

/** @reactComponent */
function TimeWithLinkAndSmb2MusicsContainer({editorFiles, files,}: TimeWithLinkAndSmb2MusicsProperties,) {
    return <div className="timeWithLinkAndSmb2-musics-container time-musics-container musics-container no-style grid-3">
        <div/>
        <DontViewTrace/>
        <ViewTrace/>

        <CourseThemeImage/>
        <EditorTrack tracks={editorFiles}/>
        <div/>

        <div/>
        <DayNightTrack day={files[0]} night={files[2]}/>
        <DayNightTrack day={files[1]} night={files[3]}/>

        <LinkImage/>
        <Track value={files[4]}/>
        <Track value={files[5]}/>

        <Smb2Image/>
        <Track value={files[6]}/>
        <Track value={files[7]}/>
    </div>
}


type TimeWithSmwYoshiMusicsProperties = MusicsWithEditorProperties<ArrayOf6<Tracks>>

/** @reactComponent */
function TimeWithSmwYoshiMusicsContainer({editorFiles, files,}: TimeWithSmwYoshiMusicsProperties,) {
    return <div className="timeWithYoshi-smw-musics-container timeWithYoshi-musics-container time-musics-container musics-container no-style grid-2">
        <CourseThemeImage/>
        <EditorTrack tracks={editorFiles}/>

        <DontViewTrace/>
        <DayNightYoshiTrack day={files[0]} night={files[2]} yoshi={files[4]} image={SMW_YOSHI_IMAGE}/>

        <ViewTrace/>
        <DayNightYoshiTrack day={files[1]} night={files[3]} yoshi={files[5]} image={SMW_YOSHI_IMAGE}/>
    </div>
}


type TimeWithNsmbuYoshiMusicsProperties = MusicsWithEditorProperties<ArrayOf6<Tracks>>

/** @reactComponent */
function TimeWithNsmbuYoshiMusicsContainer({editorFiles, files,}: TimeWithNsmbuYoshiMusicsProperties,) {
    return <div className="timeWithYoshi-nsmbu-musics-container timeWithYoshi-musics-container time-musics-container musics-container no-style grid-2">
        <CourseThemeImage/>
        <EditorTrack tracks={editorFiles}/>

        <DontViewTrace/>
        <DayNightYoshiTrack day={files[0]} night={files[2]} yoshi={files[4]} image={NSMBU_YOSHI_IMAGE}/>

        <ViewTrace/>
        <DayNightYoshiTrack day={files[1]} night={files[3]} yoshi={files[5]} image={NSMBU_YOSHI_IMAGE}/>
    </div>
}


interface TimeWithNsmbuYoshiAndLessonEditorMusicsProperties
    extends MusicsWithEditorProperties<ArrayOf6<Tracks>> {

    readonly lessonEditorFiles: ArrayOf4<Tracks>

}

/** @reactComponent */
function TimeWithNsmbuYoshiAndLessonEditorMusicsContainer({editorFiles, lessonEditorFiles, files,}: TimeWithNsmbuYoshiAndLessonEditorMusicsProperties,) {
    return <div className="timeWithYoshiAndLessonEditor-nsmbu-musics-container timeWithYoshi-musics-container time-musics-container musics-container no-style grid-2">
        <CourseThemeImage/>
        <EditorTrack tracks={editorFiles}/>

        <LessonEditor/>
        <LessonEditorTrack tracks={lessonEditorFiles}/>

        <DontViewTrace/>
        <DayNightYoshiTrack day={files[0]} night={files[2]} yoshi={files[4]} image={NSMBU_YOSHI_IMAGE}/>

        <ViewTrace/>
        <DayNightYoshiTrack day={files[1]} night={files[3]} yoshi={files[5]} image={NSMBU_YOSHI_IMAGE}/>
    </div>
}

//endregion -------------------- Time musics --------------------
//region -------------------- Day musics --------------------

type DayMusicsProperties = MusicsWithEditorProperties<ArrayOf2<Tracks>>

/** @reactComponent */
function DayMusicsContainer({editorFiles, files,}: DayMusicsProperties,) {
    return <div className="day-musics-container musics-container no-style grid-2">
        <CourseThemeImage/>
        <EditorTrack tracks={editorFiles}/>

        <DontViewTrace/>
        <Track value={files[0]}/>

        <ViewTrace/>
        <Track value={files[1]}/>
    </div>
}


type DayWithUnderwaterMusicsProperties = MusicsWithEditorProperties<ArrayOf4<Tracks>>

/** @reactComponent */
function DayWithUnderwaterMusicsContainer({editorFiles, files,}: DayWithUnderwaterMusicsProperties,) {
    return <div className="dayWithUnderwater-musics-container day-musics-container musics-container no-style grid-2">
        <CourseThemeImage/>
        <EditorTrack tracks={editorFiles}/>

        <DontViewTrace/>
        <UnderwaterTrack normal={files[0]} underwater={files[2]}/>

        <ViewTrace/>
        <UnderwaterTrack normal={files[1]} underwater={files[3]}/>
    </div>
}

//endregion -------------------- Day musics --------------------

//region -------------------- Link musics --------------------

// interface LinkMusicsProperties extends MusicsProperties<ArrayOf2<Tracks>> {}
//
// /** @reactComponent */
// function LinkMusicsContainer({files,}: LinkMusicsProperties,) {
//     return <div className="link-musics-container powerUp-musics-container musics-container">
//         <Image file={getLinkImage()}/>
//         <div className="link-music-container powerUp-music-container music-container">{new ArrayAsCollection(files,).map(it =>
//                 <Track key={`Link music (${it.titleName})`} value={it}/>,)
//         }</div>
//     </div>
// }

//endregion -------------------- Link musics --------------------
//region -------------------- Smb2 musics --------------------

// interface Smb2MusicsProperties extends MusicsProperties<ArrayOf2<Tracks>> {}
//
// /** @reactComponent */
// function Smb2MusicsContainer({files,}: Smb2MusicsProperties,) {
//     return <div className="smb2-musics-container powerUp-musics-container musics-container">
//         <Image file={getSmb2Image()}/>
//         <div className="smb2-music-container powerUp-music-container music-container">{new ArrayAsCollection(files,).map(it =>
//             <Track key={`SMB2 music (${it.titleName})`} value={it}/>,)
//         }</div>
//     </div>
// }

//endregion -------------------- Smb2 musics --------------------

//endregion -------------------- Musics --------------------
//region -------------------- Other components --------------------

function LinkImage() {
    return <Image file={LINK_IMAGE} className="link-image"/>
}

function Smb2Image() {
    return <Image file={SMB2_IMAGE} className="smb2-image"/>
}

function SmlImage() {
    return <Image file={SML_IMAGE} className="sml-image"/>
}


function CourseThemeImage() {
    return <Image file={COURSE_THEME_IMAGE_FILE} className="courseTheme-image"/>
}

function LessonEditor() {
    return <UnfinishedText type="small">Lesson editor</UnfinishedText>
}

function DontViewTrace() {
    return <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
}

function DontViewTraceAsGround() {
    return <div className="dontView-trace-image-as-ground viewable-trace-image-as-ground position-relative z-0">
        <ThemeImage reference={Themes.GROUND} isSmallPath className="position-absolute z-n1"/>
        <Image file={DONT_VIEW_TRACE_IMAGE} className="dontView-trace-image viewable-trace-image"/>
    </div>
}


function ViewTrace() {
    return <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>
}

function ViewTraceAsGround() {
    return <div className="view-trace-image-as-ground viewable-trace-image-as-ground position-relative z-0">
        <ThemeImage reference={Themes.GROUND} isSmallPath className="position-absolute z-n1"/>
        <Image file={VIEW_TRACE_IMAGE} className="view-trace-image viewable-trace-image"/>
    </div>
}

//endregion -------------------- Other components --------------------

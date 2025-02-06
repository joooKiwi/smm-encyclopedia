import {createHashRouter} from 'react-router'
import type {Array, UndefinedOr}  from '@joookiwi/type'

import type {EntityBehaviours}      from 'core/behaviour/EntityBehaviours'
import type {CharacterNames}        from 'core/characterName/CharacterNames'
import type {CourseTags}            from 'core/courseTag/CourseTags'
import type {EditorVoices}          from 'core/editorVoice/EditorVoices'
import type {Entities}              from 'core/entity/Entities'
import type {EntityCategories}      from 'core/entityCategory/EntityCategories'
import type {Games}                 from 'core/game/Games'
import type {GameReferences}        from 'core/gameReference/GameReferences'
import type {GameStyles}            from 'core/gameStyle/GameStyles'
import type {Instruments}           from 'core/instrument/Instruments'
import type {Limits}                from 'core/limit/Limits'
import type {Medals}                from 'core/medal/Medals'
import type {MiiCostumes}           from 'core/miiCostume/MiiCostumes'
import type {Musics}                from 'core/music/Musics'
import type {MysteryMushrooms}      from 'core/mysteryMushroom/MysteryMushrooms'
import type {MiiCostumeCategories}  from 'core/miiCostumeCategory/MiiCostumeCategories'
import type {NightEffects}          from 'core/nightEffect/NightEffects'
import type {OfficialCourses}       from 'core/officialCourse/OfficialCourses'
import type {OfficialNotifications} from 'core/officialNotification/OfficialNotifications'
import type {OtherWordInTheGames}   from 'core/otherWordInTheGame/OtherWordInTheGames'
import type {PredefinedMessages}    from 'core/predefinedMessage/PredefinedMessages'
import type {SampleCourses}         from 'core/sampleCourse/SampleCourses'
import type {SoundEffects}          from 'core/soundEffect/SoundEffects'
import type {SoundEffectCategories} from 'core/soundEffectCategory/SoundEffectCategories'
import type {Themes}                from 'core/theme/Themes'
import type {Times}                 from 'core/time/Times'
import type {Versions}              from 'core/version/Versions'
import type {EveryRoutes}           from 'route/EveryRoutes'

interface Test {

    CharacterNames?: typeof CharacterNames
    CourseTags?: typeof CourseTags
    EditorVoices?: typeof EditorVoices
    EntityBehaviours?: typeof EntityBehaviours
    EntityCategories?: typeof EntityCategories
    Entities?: typeof Entities
    EveryRoutes?: typeof EveryRoutes
    GameReferences?: typeof GameReferences
    Games?: typeof Games
    GameStyles?: typeof GameStyles
    Instruments?: typeof Instruments
    Limits?: typeof Limits
    Medals?: typeof Medals
    MiiCostumes?: typeof MiiCostumes
    MiiCostumeCategories?: typeof MiiCostumeCategories
    Musics?: typeof Musics
    MysteryMushrooms?: typeof MysteryMushrooms
    NightEffects?: typeof NightEffects
    OfficialCourses?: typeof OfficialCourses
    OfficialNotifications?: typeof OfficialNotifications
    OtherWordInTheGames?: typeof OtherWordInTheGames
    PredefinedMessages?: typeof PredefinedMessages
    router?: ReturnType<createHashRouter>
    routes?: UndefinedOr<Array<Test['router']['routes'][number]['children']>>
    SampleCourses?: typeof SampleCourses
    SoundEffects?: typeof SoundEffects
    SoundEffectCategories?: typeof SoundEffectCategories
    Themes?: typeof Themes
    Times?: typeof Times
    Versions?: typeof Versions


}

declare global {
    interface Window {

        test?: Test

    }
}

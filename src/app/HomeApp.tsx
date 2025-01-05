import {unfinishedText}                                                                from 'app/tools/text/UnfinishedText'
import PageProgress                                                                    from 'app/util/PageProgress'
import {OtherWordInTheGames}                                                           from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation}                                    from 'lang/components/translationMethods'
import {MARIO_MAKER_2_WIKI_FANDOM_LINK, SUPER_MARIO_WIKI_LINK, THE_CUTTING_FLOOR_LINK} from 'external/WikiLinks'

//region -------------------- Import from deconstruction --------------------

const {COURSE, ENTITY, MII_COSTUME, MYSTERY_MUSHROOM, POWER_UP, TAG,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

/** @reactComponent */
export default function HomeApp() {
    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    const tag = TAG.singularNameOnReference
    const tagAsLowerCase = TAG.singularLowerCaseNameOnReference
    const course = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,)
    const courseAsLowerCase = COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()
    const mysteryMushroom = MYSTERY_MUSHROOM.singularNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName,)
    const miiCostume = MII_COSTUME.singularNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumeAsLowerCase = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumes = MII_COSTUME.pluralNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)
    const miiCostumesAsLowerCase = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)
    const powerUp = POWER_UP.singularNameOnReferenceOrNull ?? unfinishedText(POWER_UP.singularEnglishName,)
    const powerUpAsLowerCase = powerUp.toLowerCase()

    return <>
        <h1 className="text-center fw-bold text-decoration-underline">{contentTranslation('home.title',)}</h1>
        <div className="container-lg alert alert-warning" role="alert">
            {contentTranslation('home.warning.in construction',)}
            {contentTranslation('home.warning.more details',)}
            {contentTranslation('home.warning.links may be unstable',)}
            {contentTranslation('home.warning.words are in English',)}
        </div>
        <div id="homeDescription-container" className="container-md mb-3">
            <p className="mb-2">{contentTranslation('home.description.first',)}</p>
            <p className="mb-2">{contentTranslation('home.description.community',)}</p>
            <p className="mb-2">{contentTranslation('home.description.wiki', {
                marioWikiLink: <a key="Mario Wiki link" href={SUPER_MARIO_WIKI_LINK.languageValue.superMarioMaker2} className="link-info">{contentTranslation('home.description.name.mario wiki',)}</a>,
                marioFandomLink: <a key="Mario Fandom link" href={MARIO_MAKER_2_WIKI_FANDOM_LINK.superMarioMaker2} className="link-info">{contentTranslation('home.description.name.mario fandom',)}</a>,
                theCuttingFloorLink: <a key="The cutting floor link" href={THE_CUTTING_FLOOR_LINK.superMarioMaker2} className="link-info">{contentTranslation('home.description.name.the cutting floor',)}</a>
            },)}</p>
        </div>
        <h2 className="text-center fw-bold text-decoration-underline">{contentTranslation('home.progress.title',)}</h2>
        <div id="progressDescription-container" className="container-md mb-4">
            <p className="mb-2">{contentTranslation('home.progress.description',)}</p>
            <p className="mb-2">{contentTranslation('home.progress.list to do.description',)}</p>
            <ol>
                <li className="text-decoration-line-through">{contentTranslation('home.progress.list to do.automatic language',)}</li>
                <li>{contentTranslation('home.progress.list to do.font family',)}</li>
                <li>{contentTranslation('home.progress.list to do.color mode',)}</li>
                <li>{contentTranslation('home.progress.list to do.more info', {
                    gitHubLink: <a key="GitHub link" href="https://github.com/joooKiwi/smm-encyclopedia#list-of-elements-to-do" className="link-info">{contentTranslation('GitHub repository',).toLowerCase().replace('github', 'GitHub',)}</a>,
                },)}</li>
            </ol>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 justify-content-center px-0 px-sm-5 px-md-3 px-lg-2 px-xl-4 px-xxl-5 gx-2 gy-1">
            <PageProgress progress="page in progress"            link="everyEntity"                                          content={entity}/>
            <PageProgress progress="page in progress"            link="everyCharacterName"                                   content={gameContentTranslation('character name.singular',)}/>
            <PageProgress progress="data in progress"                                                 exclusiveGame="SMM2"   content={unfinishedText('Clear condition',)}/>
            <PageProgress progress="data done"                                                        exclusiveGame="SMM2"   content={unfinishedText('Clear condition category',)}/>
            <PageProgress progress="completed"                   link="everyLimit"                                           content={gameContentTranslation('limit.singular',)}/>
            <PageProgress progress="data done"                                                                               content={unfinishedText('Projectile',)}/>
            <PageProgress progress="data done"                                                                               content={unfinishedText('Playable character',)}/>
            <PageProgress progress="data in progress"                                                                        content={unfinishedText('Object',)}/>
            <PageProgress progress="completed"                   link="everyEntityCategory"                                  content={gameContentTranslation('entity category.singular', {Entity: entity, entity: entityAsLowerCase,},)}/>
            <PageProgress progress="data in progress"                                                                        content={gameContentTranslation('entity group.singular', {Entity: entity, entity: entityAsLowerCase,},)}/>
            <PageProgress progress="page almost done"            link="everyTheme"                                           content={gameContentTranslation('theme.singular',)}/>
            <PageProgress progress="not created"                                                      exclusiveGame="SMM2"   content={gameContentTranslation('time.singular',)}/>
            <PageProgress progress="page in progress"            link="everyGameReference"                                   content={gameContentTranslation('game reference.singular',)}/>
            <PageProgress progress="page almost done"            link="everyGameStyle"                                       content={gameContentTranslation('game style.singular',)}/>
            <PageProgress progress="data in progress"                                                                        content={unfinishedText('Entity behaviour',)}/>
            <PageProgress progress="page in progress"            link="everyMusic"                                           content={contentTranslation('music.singular',)}/>
            <PageProgress progress="page almost done"            link="everySoundEffect"                                     content={gameContentTranslation('sound effect.singular',)}/>
            <PageProgress progress="page in progress"            link="everySoundEffectCategory"      exclusiveGame="SMM2"   content={gameContentTranslation('sound effect category.singular',)}/>
            <PageProgress progress="completed"                   link="everyCourseTag"                exclusiveGame="SMM2"   content={gameContentTranslation('course tag.singular', {Course: course, course: courseAsLowerCase, Tag: tag, tag: tagAsLowerCase,},)}/>
            <PageProgress progress="completed"                   link="everyPredefinedMessage"        exclusiveGame="SMM2"   content={unfinishedText('Predefined message',)}/>
            <PageProgress progress="completed"                   link="everySampleCourse"             exclusiveGame="SMM1"   content={gameContentTranslation('sample course.singular', {SingularName: course, singularName: courseAsLowerCase,},)}/>
            <PageProgress progress="page almost done"            link="everyMedal"                    exclusiveGame="SMM1"   content={gameContentTranslation('medal.singular',)}/>
            <PageProgress progress="data in progress"                                                 exclusiveGame="SMM3DS" content={unfinishedText('Super Mario Challenges levels',)}/>
            <PageProgress progress="data in progress"                                                 exclusiveGame="SMM2"   content={unfinishedText('Job',)}/>
            <PageProgress progress="data in progress"                                                 exclusiveGame="SMM2"   content={unfinishedText('Official notification',)}/>
            <PageProgress progress="page with missing data"      link="everyOfficialCourse"                                  content={gameContentTranslation('official course.singular', {singularName: courseAsLowerCase, SingularName: course,})}/>
            <PageProgress progress="data in progress"                                                 exclusiveGame="SMM2"   content={unfinishedText('Ninji speedrun',)}/>
            <PageProgress progress="page almost done"            link="everyMysteryMushroom"          exclusiveGame="SMM1"   content={mysteryMushroom}/>
            <PageProgress progress="completed"                   link="everyMiiCostume"               exclusiveGame="SMM2"   content={miiCostume}/>
            <PageProgress progress="completed"                   link="everyMiiCostumeCategory"       exclusiveGame="SMM2"   content={gameContentTranslation('mii costume category.singular', {SingularName: miiCostume, singularName: miiCostumeAsLowerCase, PluralName: miiCostumes, pluralName: miiCostumesAsLowerCase,},)}/>
            <PageProgress progress="page in progress"            link="everyEditorVoice"                                     content={gameContentTranslation('editor voice.singular',)}/>
            <PageProgress progress="page in progress"            link="everyInstrument"                                      content={gameContentTranslation('instrument.singular',)}/>
            <PageProgress progress="page in progress"            link="everyPowerUp&Ride&HatPriority"                        content={gameContentTranslation('power-up, ride & hat priority.all.singular', {PowerUp: powerUp, powerUp: powerUpAsLowerCase, Ride: gameContentTranslation('ride.singular'), ride: gameContentTranslation('ride.singular').toLowerCase(), Hat: gameContentTranslation('hat.singular'), hat: gameContentTranslation('hat.singular').toLowerCase(),},)}/>
        </div>
    </>
}

import {unfinishedText}                                                                from 'app/tools/text/UnfinishedText'
import PageProgress                                                                    from 'app/util/PageProgress'
import {OtherWordInTheGames}                                                           from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation}                                    from 'lang/components/translationMethods'
import {MARIO_MAKER_2_WIKI_FANDOM_LINK, SUPER_MARIO_WIKI_LINK, THE_CUTTING_FLOOR_LINK} from 'external/WikiLinks'

//region -------------------- Deconstruction imports --------------------

const {TAG, MYSTERY_MUSHROOM, MII_COSTUME, ENTITY, COURSE, POWER_UP,} = OtherWordInTheGames

//endregion -------------------- Deconstruction imports --------------------

/** @reactComponent */
export default function HomeApp() {
    const singularEntityName = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName), singularEntityLowerCaseName = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? singularEntityName.toLowerCase()
    const singularTagName = TAG.singularNameOnReference, singularTagLowerCaseName = TAG.singularLowerCaseNameOnReference
    const singularCourseName = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName), singularCourseLowerCaseName = COURSE.singularLowerCaseNameOnReferenceOrNull ?? singularCourseName.toLowerCase()
    const singularMysteryMushroomName = MYSTERY_MUSHROOM.singularNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName)
    const singularMiiCostumeName = MII_COSTUME.singularNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName), singularMiiCostumeLowerCaseName = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName)
    const pluralMiiCostumeName = MII_COSTUME.pluralNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName!), pluralMiiCostumeLowerCaseName = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName!)
    const singularPowerUpName = POWER_UP.singularNameOnReferenceOrNull ?? unfinishedText(POWER_UP.singularEnglishName), singularPowerUpLowerCaseName = singularPowerUpName.toLowerCase()

    return <>
        <h1 className="text-center fw-bold text-decoration-underline">{contentTranslation('home.title')}</h1>
        <div className="container-lg alert alert-warning" role="alert">
            {contentTranslation('home.warning.in construction')}
            {contentTranslation('home.warning.more details')}
            {contentTranslation('home.warning.links may be unstable')}
            {contentTranslation('home.warning.words are in English')}
        </div>
        <div id="homeDescription-container" className="container-md mb-3">
            <p className="mb-2">{contentTranslation('home.description.first')}</p>
            <p className="mb-2">{contentTranslation('home.description.community')}</p>
            <p className="mb-2">{contentTranslation('home.description.wiki', {
                marioWikiLink: <a key="Mario Wiki link" href={SUPER_MARIO_WIKI_LINK.languageValue.superMarioMaker2} className="link-info">{contentTranslation('home.description.name.mario wiki')}</a>,
                marioFandomLink: <a key="Mario Fandom link" href={MARIO_MAKER_2_WIKI_FANDOM_LINK.superMarioMaker2} className="link-info">{contentTranslation('home.description.name.mario fandom')}</a>,
                theCuttingFloorLink: <a key="The cutting floor link" href={THE_CUTTING_FLOOR_LINK.superMarioMaker2} className="link-info">{contentTranslation('home.description.name.the cutting floor')}</a>
            },)}</p>
        </div>
        <h2 className="text-center fw-bold text-decoration-underline">{contentTranslation('home.progress.title')}</h2>
        <div id="progressDescription-container" className="container-md mb-4">
            <p className="mb-2">{contentTranslation('home.progress.description')}</p>
            <p className="mb-2">{contentTranslation('home.progress.list to do.description')}</p>
            <ol>
                <li className="text-decoration-line-through">{contentTranslation('home.progress.list to do.automatic language')}</li>
                <li>{contentTranslation('home.progress.list to do.font family')}</li>
                <li>{contentTranslation('home.progress.list to do.color mode')}</li>
                <li>{contentTranslation('home.progress.list to do.more info', {
                    gitHubLink: <a key="GitHub link" href="https://github.com/joooKiwi/smm-encyclopedia#list-of-elements-to-do" className="link-info">{contentTranslation('GitHub repository').toLowerCase().replace('github', 'GitHub',)}</a>,
                },)}</li>
            </ol>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 justify-content-center px-0 px-sm-5 px-md-3 px-lg-2 px-xl-4 px-xxl-5 gx-2 gy-1">
            <PageProgress progress="page in progress"            link="everyEntity"                   content={singularEntityName}/>
            <PageProgress progress="page in progress"            link="everyCharacterName"            content={gameContentTranslation('character name.singular')}/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Clear condition')} exclusiveGame="SMM2"/>
            <PageProgress progress="data done"                                                        content={unfinishedText('Clear condition category')} exclusiveGame="SMM2"/>
            <PageProgress progress="completed"                   link="everyLimit"                    content={gameContentTranslation('limit.singular')}/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Projectile')}/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Object')}/>
            <PageProgress progress="completed"                   link="everyEntityCategory"           content={gameContentTranslation('entity category.singular', {Entity: singularEntityName, entity: singularEntityLowerCaseName,},)}/>
            <PageProgress progress="data in progress"                                                 content={gameContentTranslation('entity group.singular', {Entity: singularEntityName, entity: singularEntityLowerCaseName,},)}/>
            <PageProgress progress="page almost done"            link="everyTheme"                    content={gameContentTranslation('theme.singular')}/>
            <PageProgress progress="not created"                                                      content={gameContentTranslation('time.singular')} exclusiveGame="SMM2"/>
            <PageProgress progress="page in progress"            link="everyGameReference"            content={gameContentTranslation('game reference.singular')}/>
            <PageProgress progress="page almost done"            link="everyGameStyle"                content={gameContentTranslation('game style.singular')}/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Entity behaviour')}/>
            <PageProgress progress="page almost done"            link="everySoundEffect"              content={gameContentTranslation('sound effect.singular')}/>
            <PageProgress progress="page in progress"            link="everySoundEffectCategory"      content={gameContentTranslation('sound effect category.singular')}/>
            <PageProgress progress="completed"                   link="everyCourseTag"                content={gameContentTranslation('course tag.singular', {Course: singularCourseName, course: singularCourseLowerCaseName, Tag: singularTagName, tag: singularTagLowerCaseName,},)} exclusiveGame="SMM2"/>
            <PageProgress progress="completed"                   link="everyPredefinedMessage"        content={unfinishedText('Predefined message')} exclusiveGame="SMM2"/>
            <PageProgress progress="completed"                   link="everySampleCourse"             content={gameContentTranslation('sample course.singular', {SingularName: singularCourseName, singularName: singularCourseLowerCaseName,},)} exclusiveGame="SMM1"/>
            <PageProgress progress="page almost done"            link="everyMedal"                    content={gameContentTranslation('medal.singular')} exclusiveGame="SMM1"/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Super Mario Challenges levels')} exclusiveGame="SMM3DS"/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Job')} exclusiveGame="SMM2"/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Official notification')} exclusiveGame="SMM2"/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Official courses')}/>
            <PageProgress progress="data in progress"                                                 content={unfinishedText('Ninji speedrun')} exclusiveGame="SMM2"/>
            <PageProgress progress="page almost done"            link="everyMysteryMushroom"          content={singularMysteryMushroomName} exclusiveGame="SMM1"/>
            <PageProgress progress="completed with missing data"                                      content={unfinishedText('Event courses (for the Mystery Mushrooms)')} exclusiveGame="SMM1"/>
            <PageProgress progress="completed"                   link="everyMiiCostume"               content={singularMiiCostumeName} exclusiveGame="SMM2"/>
            <PageProgress progress="completed"                   link="everyMiiCostumeCategory"       content={gameContentTranslation('mii costume category.singular', {SingularName: singularMiiCostumeName, singularName: singularMiiCostumeLowerCaseName, PluralName: pluralMiiCostumeName, pluralName: pluralMiiCostumeLowerCaseName,},)} exclusiveGame="SMM2"/>
            <PageProgress progress="page in progress"            link="everyEditorVoice"              content={gameContentTranslation('editor voice.singular')}/>
            <PageProgress progress="page in progress"            link="everyInstrument"               content={gameContentTranslation('instrument.singular')}/>
            <PageProgress progress="page in progress"            link="everyPowerUp&Ride&HatPriority" content={gameContentTranslation('power-up, ride & hat priority.all.singular', {PowerUp: singularPowerUpName, powerUp: singularPowerUpLowerCaseName, Ride: gameContentTranslation('ride.singular'), ride: gameContentTranslation('ride.singular').toLowerCase(), Hat: gameContentTranslation('hat.singular'), hat: gameContentTranslation('hat.singular').toLowerCase(),},)}/>
        </div>
    </>
}

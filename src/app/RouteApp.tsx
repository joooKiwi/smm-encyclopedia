import './RouteApp.scss'

import {Link} from 'react-router-dom'

import type {Names, PossibleRouteName} from 'route/EveryRoutes.types'
import type {ReactProperties}          from 'util/react/ReactProperties'
import {EveryRoutes}                   from 'route/EveryRoutes'

/**
 * A component made to debug the routes from every possible path
 *
 * @reactComponent
 */
export default function RouteApp() {
    return <>
        <h1 className="text-center fw-bold text-decoration-underline">Every paths in the application</h1>
        <UniqueSection id="home-paths" target="home-linkPaths" name="Home" path="home"/>
        <UniqueSection id="about-paths" target="about-linkPaths" name="About" path="about"/>
        <UniqueSection id="sources-paths" target="sources-linkPaths" name="Sources" path="sources"/>

        <ListCardTableAllGameAllGameStyleSection partialId="entity" name="Entity" route={EveryRoutes.EVERY_ENTITY}/>

        <ListCardSection partialId="characterName" name="Character name" route={EveryRoutes.EVERY_CHARACTER_NAME}/>
        <EmptySection id="clearCondition-paths" name="Clear condition"/>
        <EmptySection id="clearConditionCategory-paths" name="Clear condition category"/>
        <ListCardTableAllGameSection partialId="limit" name="Limit" names={['Play', 'Editor',]} routes={[EveryRoutes.EVERY_LIMIT, EveryRoutes.EVERY_EDITOR_LIMIT, EveryRoutes.EVERY_PLAY_LIMIT,]}/>
        <EmptySection id="projectile-paths" name="Projectile"/>
        <EmptySection id="object-paths" name="Object"/>
        <SimpleListCardSMM2Section partialId="entityCategory" name="Entity category" route={EveryRoutes.EVERY_ENTITY_CATEGORY}/>
        <EmptySection id="entityGroup-paths" name="Entity group"/>

        <ListCardTableAllGameSection partialId="theme" name="Theme" names={['Course', 'World',]} routes={[EveryRoutes.EVERY_THEME, EveryRoutes.EVERY_COURSE_THEME, EveryRoutes.EVERY_WORLD_THEME,]}/>
        <EmptySection id="time-paths" name="Time"/>

        <SimpleAllGamesSection partialId="gameReference" name="Game reference" route={EveryRoutes.EVERY_GAME_REFERENCE}/>
        <ListCardTableSection partialId="gameStyle" name="Game style" route={EveryRoutes.EVERY_GAME_STYLE}/>
        <EmptySection id="entityBehaviour-paths" name="Entity behaviour"/>

        <ListCardTableAllGameAllGameStyleSection partialId="soundEffect" name="Sound effect" route={EveryRoutes.EVERY_SOUND_EFFECT}/>
        <SimpleListCardSMM2Section partialId="soundEffectCategory" name="Sound effect category" route={EveryRoutes.EVERY_SOUND_EFFECT_CATEGORY}/>

        <div id="courseTag-paths" className="container-lg bg-dark-subtle rounded pt-1 pb-3 mb-3">
            <SectionTitle name="Course tag" target="courseTag-linkPaths" route={EveryRoutes.EVERY_COURSE_TAG} multiplyBy={4}/>
            <div id="courseTag-linkPaths" className="row row-cols-auto justify-content-center collapse">
                <div>
                    <span>Default: </span>
                    <PathFromDefault path="everyCourseTag" name="All"/><Separator/>
                    <PathFromDefault path="officialCourseTag" name="Official"/><Separator/>
                    <PathFromDefault path="unofficialCourseTag" name="Unofficial"/><Separator/>
                    <PathFromDefault path="makerCentralCourseTag" name="Maker Central"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span>List: </span>
                    <PathFromViewDisplay path="everyCourseTag (list)" name="All"/><Separator/>
                    <PathFromViewDisplay path="officialCourseTag (list)" name="Official"/><Separator/>
                    <PathFromViewDisplay path="unofficialCourseTag (list)" name="Unofficial"/><Separator/>
                    <PathFromViewDisplay path="makerCentralCourseTag (list)" name="Maker Central"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span>Card: </span>
                    <PathFromViewDisplay path="everyCourseTag (card)" name="All"/><Separator/>
                    <PathFromViewDisplay path="officialCourseTag (card)" name="Official"/><Separator/>
                    <PathFromViewDisplay path="unofficialCourseTag (card)" name="Unofficial"/><Separator/>
                    <PathFromViewDisplay path="makerCentralCourseTag (card)" name="Maker Central"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM2/>: </span>
                    <PathFromGame path="everyCourseTag (Game=2)" name="All"/><Separator/>
                    <PathFromGame path="officialCourseTag (Game=2)" name="Official"/><Separator/>
                    <PathFromGame path="unofficialCourseTag (Game=2)" name="Unofficial"/><Separator/>
                    <PathFromGame path="makerCentralCourseTag (Game=2)" name="Maker Central"/>
                </div>
                <div className="w-100"/>

                <div>
                    <span>List: </span>
                    <RealPath path="everyCourseTag (list Game=2)" name="All"/><Separator/>
                    <RealPath path="officialCourseTag (list Game=2)" name="Official"/><Separator/>
                    <RealPath path="unofficialCourseTag (list Game=2)" name="Unofficial"/><Separator/>
                    <RealPath path="makerCentralCourseTag (list Game=2)" name="Maker Central"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span>Card: </span>
                    <RealPath path="everyCourseTag (card Game=2)" name="All"/><Separator/>
                    <RealPath path="officialCourseTag (card Game=2)" name="Official"/><Separator/>
                    <RealPath path="unofficialCourseTag (card Game=2)" name="Unofficial"/><Separator/>
                    <RealPath path="makerCentralCourseTag (card Game=2)" name="Maker Central"/>
                </div>
            </div>
        </div>
        <SimpleListSMM2Section partialId="predefinedMessage" name="Predefined message" route={EveryRoutes.EVERY_PREDEFINED_MESSAGE}/>
        <SimpleListCardTableSMM1Section partialId="sampleCourse" name="Sample course" route={EveryRoutes.EVERY_SAMPLE_COURSE}/>
        <SimpleListCardSMM1Section partialId="medal" name="Medal" route={EveryRoutes.EVERY_MEDAL}/>
        <EmptySection id="superMarioChallengeLevel-paths" name="Super Mario Challenges level"/>
        <EmptySection id="job-paths" name="Job"/>
        <EmptySection id="officialNotification-paths" name="Official notification"/>
        <EmptySection id="ninjiSpeedrun-paths" name="Ninji speedrun"/>

        <SimpleListCardTableSMM1Section partialId="mysteryMushroom" name="Mystery mushroom" route={EveryRoutes.EVERY_MYSTERY_MUSHROOM}/>
        <SimpleListCardTableSMM2Section partialId="miiCostume" name="Mii costume" route={EveryRoutes.EVERY_MII_COSTUME}/>
        <SimpleListCardSMM2Section partialId="miiCostumeCategory" name="Mii costume category" route={EveryRoutes.EVERY_MII_COSTUME_CATEGORY}/>

        <ListCardSection partialId="editorVoice" name="Editor voice" route={EveryRoutes.EVERY_EDITOR_VOICE}/>
        <ListCardSection partialId="instrument" name="Instrument" route={EveryRoutes.EVERY_INSTRUMENT}/>
        <div id="powerUpRideHatPriority-paths" className="container-lg bg-dark-subtle rounded pt-1 pb-3 mb-3">
            <SectionTitle name="Power-up/ride/hat priority" target="powerUpRideHatPriority-linkPaths" route={EveryRoutes.EVERY_POWER_UP_RIDE_AND_HAT_PRIORITY} multiplyBy={8}/>
            <div id="powerUpRideHatPriority-linkPaths" className="row row-cols-auto justify-content-center collapse">
                <div>
                    <span>Default: </span>
                    <PathFromDefault path="everyPowerUp&Ride&HatPriority" name="All"/><Separator/>
                    <PathFromDefault path="everyPowerUp&RidePriority" name="Power-up + Ride"/><Separator/>
                    <PathFromDefault path="everyPowerUp&HatPriority" name="Power-up + Hat"/><Separator/>
                    <PathFromDefault path="everyRide&HatPriority" name="Ride + Hat"/><Separator/>
                    <PathFromDefault path="everyPowerUpPriority" name="Power-up"/><Separator/>
                    <PathFromDefault path="everyRidePriority" name="Ride"/><Separator/>
                    <PathFromDefault path="everyHatPriority" name="Hat"/>
                </div>
                <div className="w-100"/>

                <div>
                    <span>All game: </span>
                    <RealPath path="everyPowerUp&Ride&HatPriority (Game=all)" name="All"/><Separator/>
                    <RealPath path="everyPowerUp&RidePriority (Game=all)" name="Power-up + Ride"/><Separator/>
                    <RealPath path="everyPowerUp&HatPriority (Game=all)" name="Power-up + Hat"/><Separator/>
                    <RealPath path="everyRide&HatPriority (Game=all)" name="Ride + Hat"/><Separator/>
                    <RealPath path="everyPowerUpPriority (Game=all)" name="Power-up"/><Separator/>
                    <RealPath path="everyRidePriority (Game=all)" name="Ride"/><Separator/>
                    <RealPath path="everyHatPriority (Game=all)" name="Hat"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1/>: </span>
                    <RealPath path="everyPowerUp&Ride&HatPriority (Game=1)" name="All"/><Separator/>
                    <RealPath path="everyPowerUp&RidePriority (Game=1)" name="Power-up + Ride"/><Separator/>
                    <RealPath path="everyPowerUp&HatPriority (Game=1)" name="Power-up + Hat"/><Separator/>
                    <RealPath path="everyRide&HatPriority (Game=1)" name="Ride + Hat"/><Separator/>
                    <RealPath path="everyPowerUpPriority (Game=1)" name="Power-up"/><Separator/>
                    <RealPath path="everyRidePriority (Game=1)" name="Ride"/><Separator/>
                    <RealPath path="everyHatPriority (Game=1)" name="Hat"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM3DS/>: </span>
                    <RealPath path="everyPowerUp&Ride&HatPriority (Game=3DS)" name="All"/><Separator/>
                    <RealPath path="everyPowerUp&RidePriority (Game=3DS)" name="Power-up + Ride"/><Separator/>
                    <RealPath path="everyPowerUp&HatPriority (Game=3DS)" name="Power-up + Hat"/><Separator/>
                    <RealPath path="everyRide&HatPriority (Game=3DS)" name="Ride + Hat"/><Separator/>
                    <RealPath path="everyPowerUpPriority (Game=3DS)" name="Power-up"/><Separator/>
                    <RealPath path="everyRidePriority (Game=3DS)" name="Ride"/><Separator/>
                    <RealPath path="everyHatPriority (Game=3DS)" name="Hat"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM2/>: </span>
                    <RealPath path="everyPowerUp&Ride&HatPriority (Game=2)" name="All"/><Separator/>
                    <RealPath path="everyPowerUp&RidePriority (Game=2)" name="Power-up + Ride"/><Separator/>
                    <RealPath path="everyPowerUp&HatPriority (Game=2)" name="Power-up + Hat"/><Separator/>
                    <RealPath path="everyRide&HatPriority (Game=2)" name="Ride + Hat"/><Separator/>
                    <RealPath path="everyPowerUpPriority (Game=2)" name="Power-up"/><Separator/>
                    <RealPath path="everyRidePriority (Game=2)" name="Ride"/><Separator/>
                    <RealPath path="everyHatPriority (Game=2)" name="Hat"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1And3DS/>: </span>
                    <RealPath path="everyPowerUp&Ride&HatPriority (Game=1&3DS)" name="All"/><Separator/>
                    <RealPath path="everyPowerUp&RidePriority (Game=1&3DS)" name="Power-up + Ride"/><Separator/>
                    <RealPath path="everyPowerUp&HatPriority (Game=1&3DS)" name="Power-up + Hat"/><Separator/>
                    <RealPath path="everyRide&HatPriority (Game=1&3DS)" name="Ride + Hat"/><Separator/>
                    <RealPath path="everyPowerUpPriority (Game=1&3DS)" name="Power-up"/><Separator/>
                    <RealPath path="everyRidePriority (Game=1&3DS)" name="Ride"/><Separator/>
                    <RealPath path="everyHatPriority (Game=1&3DS)" name="Hat"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1And2/>: </span>
                    <RealPath path="everyPowerUp&Ride&HatPriority (Game=1&2)" name="All"/><Separator/>
                    <RealPath path="everyPowerUp&RidePriority (Game=1&2)" name="Power-up + Ride"/><Separator/>
                    <RealPath path="everyPowerUp&HatPriority (Game=1&2)" name="Power-up + Hat"/><Separator/>
                    <RealPath path="everyRide&HatPriority (Game=1&2)" name="Ride + Hat"/><Separator/>
                    <RealPath path="everyPowerUpPriority (Game=1&2)" name="Power-up"/><Separator/>
                    <RealPath path="everyRidePriority (Game=1&2)" name="Ride"/><Separator/>
                    <RealPath path="everyHatPriority (Game=1&2)" name="Hat"/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM3DSAnd2/>: </span>
                    <RealPath path="everyPowerUp&Ride&HatPriority (Game=3DS&2)" name="All"/><Separator/>
                    <RealPath path="everyPowerUp&RidePriority (Game=3DS&2)" name="Power-up + Ride"/><Separator/>
                    <RealPath path="everyPowerUp&HatPriority (Game=3DS&2)" name="Power-up + Hat"/><Separator/>
                    <RealPath path="everyRide&HatPriority (Game=3DS&2)" name="Ride + Hat"/><Separator/>
                    <RealPath path="everyPowerUpPriority (Game=3DS&2)" name="Power-up"/><Separator/>
                    <RealPath path="everyRidePriority (Game=3DS&2)" name="Ride"/><Separator/>
                    <RealPath path="everyHatPriority (Game=3DS&2)" name="Hat"/>
                </div>
            </div>
        </div>
    </>
}

//region -------------------- Helper route --------------------

const EveryRouteCompanion = EveryRoutes.CompanionEnum.get

/**
 * A route alias to debug and centralize the usage in the current {@link RouteApp} instance
 *
 * @param name The route name
 * @param handleException Handle the exception (by default false)
 */
function route(name: PossibleRouteName, handleException = false,) {
    if (handleException)
        try {
            debugger
            EveryRouteCompanion.getRouteFromName(name,)
        } catch (exception) {
            debugger
        }

    return EveryRouteCompanion.getRouteFromName(name,)
}

//endregion -------------------- Helper route --------------------
//region -------------------- Title components --------------------

function SectionTitle({name, route, target, multiplyBy,}: { name: string, route: EveryRoutes, target: string, multiplyBy?: number, },) {
    if (multiplyBy == null)
        return <h2 className="text-center fw-bold fst-italic" data-bs-toggle="collapse" data-bs-target={`#${target}`} role="button" aria-expanded="false">
            <span className="text-decoration-underline">{name}</span> <sup>({route.everyRoute.length} paths)</sup>
        </h2>
    return <h2 className="text-center fw-bold fst-italic" data-bs-toggle="collapse" data-bs-target={`#${target}`} role="button" aria-expanded="false">
        <span className="text-decoration-underline">{name}</span> <sup>({route.everyRoute.length}⨉{multiplyBy} paths)</sup>
    </h2>
}

function SubSectionTitle({name, target,}: { name: string, target: string,},) {
    return <h3 className="text-center text-decoration-underline fw-bold fst-italic" data-bs-toggle="collapse" data-bs-target={`#${target}`} role="button" aria-expanded="false">{name}</h3>
}

//endregion -------------------- Title components --------------------
//region -------------------- Section (empty and unique) components --------------------

function EmptySection({id, name,}: { id: string, name: string, },) {
    return <div id={id} className="container-lg d-flex justify-content-center alert alert-danger py-1" role="alert">
        <h2 className="fw-bold fst-italic"><span className="text-decoration-underline">{name}</span> <sup>(0 paths)</sup></h2>
    </div>
}

function UniqueSection({id, name, target, path, handleException,}: { id: string, name: string, target: string, path: PossibleRouteName, handleException?: boolean, },) {
    return <div id={id} className="container-lg bg-dark-subtle border border-opacity-25 rounded pt-1 pb-3 mb-3">
        <h2 className="text-center fw-bold fst-italic" data-bs-toggle="collapse" data-bs-target={`#${target}`} role="button" aria-expanded="false">
            <span className="text-decoration-underline">{name}</span> <sup>(1 path)</sup>
        </h2>
        <div id={target} className="row row-cols-auto justify-content-center collapse">
            <PathFromDefault path={path} name="Default" handleException={handleException}/>
        </div>
    </div>
}

//endregion -------------------- Section (empty and unique) components --------------------
//region -------------------- Filled section (with every game and game style) components --------------------

function ListCardTableAllGameAllGameStyleSection({partialId, name, route,}: FilledSectionProperties<| 'EVERY_ENTITY' | 'EVERY_SOUND_EFFECT'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`
    const subLinkPaths = [
        `${partialId}-listLinkPaths`,
        `${partialId}-cardLinkPaths`,
        `${partialId}-tableLinkPaths`,
        `${partialId}-allGameLinkPaths`,
        `${partialId}-smm1LinkPaths`,
        `${partialId}-smm3dsLinkPaths`,
        `${partialId}-smm2LinkPaths`,
        `${partialId}-smm1AndSmm3dsLinkPaths`,
        `${partialId}-smm1AndSmm2LinkPaths`,
        `${partialId}-smm3dsAndSmm2LinkPaths`,

        `${partialId}-listAndAllGameLinkPaths`,
        `${partialId}-listAndSmm1LinkPaths`,
        `${partialId}-listAndSmm3dsLinkPaths`,
        `${partialId}-listAndSmm2LinkPaths`,
        `${partialId}-listAndSmm1AndSmm3dsLinkPaths`,
        `${partialId}-listAndSmm1AndSmm2LinkPaths`,
        `${partialId}-listAndSmm3dsAndSmm2LinkPaths`,
        `${partialId}-cardAndAllGameLinkPaths`,
        `${partialId}-cardAndSmm1LinkPaths`,
        `${partialId}-cardAndSmm3dsLinkPaths`,
        `${partialId}-cardAndSmm2LinkPaths`,
        `${partialId}-cardAndSmm1AndSmm3dsLinkPaths`,
        `${partialId}-cardAndSmm1AndSmm2LinkPaths`,
        `${partialId}-cardAndSmm3dsAndSmm2LinkPaths`,
        `${partialId}-tableAndAllGameLinkPaths`,
        `${partialId}-tableAndSmm1LinkPaths`,
        `${partialId}-tableAndSmm3dsLinkPaths`,
        `${partialId}-tableAndSmm2LinkPaths`,
        `${partialId}-tableAndSmm1AndSmm3dsLinkPaths`,
        `${partialId}-tableAndSmm1AndSmm2LinkPaths`,
        `${partialId}-tableAndSmm3dsAndSmm2LinkPaths`,
    ] as const

    return <div id="entity-paths" className="container-lg bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="row row-cols-auto justify-content-center collapse">
            <div>
                <PathFromDefault     path={`${simpleName}`} name="Default"/><Separator/>
                <PathFromViewDisplay path={`${simpleName} (list)`} name="List"/><Separator/>
                <PathFromViewDisplay path={`${simpleName} (card)`} name="Card"/><Separator/>
                <PathFromViewDisplay path={`${simpleName} (table)`} name="Table"/><Separator/>
                <PathFromGame        path={`${simpleName} (Game=all)`} name="All game"/><Separator/>
                <PathFromGame        path={`${simpleName} (Game=1)`} name={<SMM1/>}/><Separator/>
                <PathFromGame        path={`${simpleName} (Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                <PathFromGame        path={`${simpleName} (Game=2)`} name={<SMM2/>}/><Separator/>
                <PathFromGame        path={`${simpleName} (Game=3DS&2)`} name={<SMM1And3DS/>}/><Separator/>
                <PathFromGame        path={`${simpleName} (Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                <PathFromGame        path={`${simpleName} (Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
            </div>
            <div className="w-100"/>
            <div>
                <Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=all)`} name="All game style"/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1)`} name={<SMB/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3)`} name={<SMB3/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=W)`} name={<SMW/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3DW)`} name={<SM3DW/>}/>
            </div>
            <div className="w-100"/>
            <div>
                <span><Separator/><SMB/> + (</span>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&3DW)`} name={<SM3DW/>}/>
                <span>)</span>
            </div>
            <div className="w-100"/>
            <div>
                <span><Separator/><SMB3/> + (</span>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3&3DW)`} name={<SM3DW/>}/>
                <span>)</span>
            </div>
            <div className="w-100"/>
            <div>
                <span><Separator/><SMW/> + (</span>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=W&3DW)`} name={<SM3DW/>}/>
                <span>)<Separator/></span>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
            </div>
            <div className="w-100"/>
            <div>
                <span><Separator/><SMB/> + (</span>
                <span><SMB3/> + (</span>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                <span>) </span><Separator/>
                <span><SMW/> + (</span>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                <span>) </span><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                <span>) </span>
            </div>
            <div className="w-100"/>
            <div>
                <span><Separator/><SMB3/> + (</span>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                <span>)<Separator/></span>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
            </div>
            <div className="w-100"/>
            <div>
                <Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                <PathFromGameStyle   path={`${simpleName} (GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
            </div>
            <hr className="w-100 mb-1"/>

            <SubSectionTitle name="List" target={subLinkPaths[0]}/>
            <div id={subLinkPaths[0]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (list Game=all)`} name="All game"/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (list Game=1)`} name={<SMM1/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (list Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (list Game=2)`} name={<SMM2/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (list Game=3DS&2)`} name={<SMM1And3DS/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (list Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (list Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (list GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (list GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (list GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (list GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (list GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Card" target={subLinkPaths[1]}/>
            <div id={subLinkPaths[1]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (card Game=all)`} name="All game"/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (card Game=1)`} name={<SMM1/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (card Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (card Game=2)`} name={<SMM2/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (card Game=3DS&2)`} name={<SMM1And3DS/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (card Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (card Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (card GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (card GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (card GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (card GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (card GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Table" target={subLinkPaths[2]}/>
            <div id={subLinkPaths[2]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (table Game=all)`} name="All game"/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (table Game=1)`} name={<SMM1/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (table Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (table Game=2)`} name={<SMM2/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (table Game=3DS&2)`} name={<SMM1And3DS/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (table Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                    <PathFromViewDisplayAndGame      path={`${simpleName} (table Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (table GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (table GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (table GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle   path={`${simpleName} (table GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <PathFromViewDisplayAndGameStyle path={`${simpleName} (table GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="All game" target={subLinkPaths[3]}/>
            <div id={subLinkPaths[3]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=all GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=all GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=all GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=all GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=all GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="SMM1" target={subLinkPaths[4]}/>
            <div id={subLinkPaths[4]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1 GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1 GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="SMM3DS" target={subLinkPaths[5]}/>
            <div id={subLinkPaths[5]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=3DS GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=3DS GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=3DS GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="SMM2" target={subLinkPaths[6]}/>
            <div id={subLinkPaths[6]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="SMM1 + SMM3DS" target={subLinkPaths[7]}/>
            <div id={subLinkPaths[7]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1&3DS GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1&3DS GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1&3DS GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&3DS GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="SMM1 + SMM2" target={subLinkPaths[8]}/>
            <div id={subLinkPaths[8]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1&2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1&2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1&2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=1&2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=1&2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="SMM3DS + SMM2" target={subLinkPaths[9]}/>
            <div id={subLinkPaths[9]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=all)`} name="All game style"/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=3DS&2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=3DS&2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=3DS&2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle   path={`${simpleName} (Game=3DS&2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <PathFromGameAndGameStyle path={`${simpleName} (Game=3DS&2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <hr className="w-100 mb-1"/>

            <SubSectionTitle name="List + All game" target={subLinkPaths[10]}/>
            <div id={subLinkPaths[10]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=all GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="List + SMM1" target={subLinkPaths[11]}/>
            <div id={subLinkPaths[11]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=1 GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="List + SMM3DS" target={subLinkPaths[12]}/>
            <div id={subLinkPaths[12]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="List + SMM2" target={subLinkPaths[13]}/>
            <div id={subLinkPaths[13]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="List + SMM1 + SMM3DS" target={subLinkPaths[14]}/>
            <div id={subLinkPaths[14]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&3DS GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="List + SMM1 + SMM2" target={subLinkPaths[15]}/>
            <div id={subLinkPaths[15]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=1&2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="List + SMM3DS + SMM2" target={subLinkPaths[16]}/>
            <div id={subLinkPaths[16]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (list Game=3DS&2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>

            <div className="w-100"/>
            <SubSectionTitle name="Card + All game" target={subLinkPaths[17]}/>
            <div id={subLinkPaths[17]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=all GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Card + SMM1" target={subLinkPaths[18]}/>
            <div id={subLinkPaths[18]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=1 GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Card + SMM3DS" target={subLinkPaths[19]}/>
            <div id={subLinkPaths[19]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Card + SMM2" target={subLinkPaths[20]}/>
            <div id={subLinkPaths[20]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Card + SMM1 + SMM3DS" target={subLinkPaths[21]}/>
            <div id={subLinkPaths[21]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&3DS GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Card + SMM1 + SMM2" target={subLinkPaths[22]}/>
            <div id={subLinkPaths[22]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=1&2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Card + SMM3DS + SMM2" target={subLinkPaths[23]}/>
            <div id={subLinkPaths[23]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (card Game=3DS&2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>

            <div className="w-100"/>
            <SubSectionTitle name="Table + All game" target={subLinkPaths[24]}/>
            <div id={subLinkPaths[24]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=all GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Table + SMM1" target={subLinkPaths[25]}/>
            <div id={subLinkPaths[25]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=1 GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Table + SMM3DS" target={subLinkPaths[26]}/>
            <div id={subLinkPaths[26]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Table + SMM2" target={subLinkPaths[27]}/>
            <div id={subLinkPaths[27]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Table + SMM1 + SMM3DS" target={subLinkPaths[28]}/>
            <div id={subLinkPaths[28]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=U)`} name={<NSMBU/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=1&U)`} name={<NSMBU/>}/>
                    <span>)<Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=3&U)`} name={<NSMBU/>}/>
                    <span>)</span><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=1&3&U)`} name={<NSMBU/>}/>
                    <span>)) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=1&W&U)`} name={<><SMW/> + <NSMBU/></>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&3DS GameStyle=3&W&U)`} name={<><SMB3/> + <SMW/> + <NSMBU/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Table + SMM1 + SMM2" target={subLinkPaths[29]}/>
            <div id={subLinkPaths[29]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=1&2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
            <div className="w-100"/>
            <SubSectionTitle name="Table + SMM3DS + SMM2" target={subLinkPaths[30]}/>
            <div id={subLinkPaths[30]} className="row row-cols-auto justify-content-center collapse">
                <div>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=all)`} name="All game style"/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1)`} name={<SMB/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3DW)`} name={<SM3DW/>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&3)`} name={<SMB3/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3&3DW)`} name={<SM3DW/>}/>
                    <span>)</span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMW/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=W&3DW)`} name={<SM3DW/>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB/> + (</span>
                    <span><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&3&W)`} name={<SMW/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&3&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&3&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <span><SMW/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&W&U)`} name={<NSMBU/>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&W&3DW)`} name={<SM3DW/>}/>
                    <span>) </span><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>) </span>
                </div>
                <div className="w-100"/>
                <div>
                    <span><Separator/><SMB3/> + (</span>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3&W&U)`} name={<><SMW/> + <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3&W&3DW)`} name={<><SMW/> + <SM3DW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3&U&3DW)`} name={<><NSMBU/> + <SM3DW/></>}/>
                    <span>)<Separator/></span>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=W&U&3DW)`} name={<><SMW/> + <NSMBU/> + <SM3DW/></>}/>
                </div>
                <div className="w-100"/>
                <div>
                    <Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=3&W&U&3DW)`} name={<>Not <SMB/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&W&U&3DW)`} name={<>Not <SMB3/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&3&U&3DW)`} name={<>Not <SMW/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&3&W&3DW)`} name={<>Not <NSMBU/></>}/><Separator/>
                    <RealPath path={`${simpleName} (table Game=3DS&2 GameStyle=1&3&W&U)`} name={<>Not <SM3DW/></>}/>
                </div>
            </div>
        </div>
    </div>
}

//endregion -------------------- Filled section (with every game and game style) components --------------------
//region -------------------- Filled section (with every game) components --------------------

interface FilledSectionWithEveryGameProperties<out ROUTE1 extends Names, out ROUTE2 extends Names, out ROUTE3 extends Names, >
    extends ReactProperties {
    readonly partialId: string
    readonly name: string
    readonly names: readonly [name2: string, name3: string,]
    readonly routes: readonly [route1: typeof EveryRoutes[ROUTE1], route2: typeof EveryRoutes[ROUTE2], route3: typeof EveryRoutes[ROUTE3],]
}

function ListCardTableAllGameSection({partialId, name, names: [name2, name3,], routes: [route1, route2, route3,],}: FilledSectionWithEveryGameProperties<| 'EVERY_LIMIT' | 'EVERY_THEME', | 'EVERY_EDITOR_LIMIT' | 'EVERY_COURSE_THEME', | 'EVERY_PLAY_LIMIT' | 'EVERY_WORLD_THEME'>,) {
    const simpleName1 = route1.simpleName
    const simpleName2 = route2.simpleName
    const simpleName3 = route3.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} route={route1} target={linkPaths} multiplyBy={3}/>
        <div id={linkPaths} className="row row-cols-auto justify-content-center collapse">
            <div>
                <span>Default: </span>
                <PathFromDefault path={simpleName1} name="All"/><Separator/>
                <PathFromDefault path={simpleName2} name={name2}/><Separator/>
                <PathFromDefault path={simpleName3} name={name3}/>
            </div>
            <div className="row row-cols-auto justify-content-center w-100">
                <div>
                    <span>List: </span>
                    <PathFromViewDisplay path={`${simpleName1} (list)`} name="All"/><Separator/>
                    <PathFromViewDisplay path={`${simpleName2} (list)`} name={name2}/><Separator/>
                    <PathFromViewDisplay path={`${simpleName3} (list)`} name={name3}/>
                </div>
                <div>
                    <span>Card: </span>
                    <PathFromViewDisplay path={`${simpleName1} (card)`} name="All"/><Separator/>
                    <PathFromViewDisplay path={`${simpleName2} (card)`} name={name2}/><Separator/>
                    <PathFromViewDisplay path={`${simpleName3} (card)`} name={name3}/>
                </div>
                <div>
                    <span>Table: </span>
                    <PathFromViewDisplay path={`${simpleName1} (table)`} name="All"/><Separator/>
                    <PathFromViewDisplay path={`${simpleName2} (table)`} name={name2}/><Separator/>
                    <PathFromViewDisplay path={`${simpleName3} (table)`} name={name3}/>
                </div>
            </div>
            <div>
                <span>All game: </span>
                <PathFromGame path={`${simpleName1} (Game=all)`} name="All"/><Separator/>
                <PathFromGame path={`${simpleName2} (Game=all)`} name={name2}/><Separator/>
                <PathFromGame path={`${simpleName3} (Game=all)`} name={name3}/>
            </div>
            <div className="w-100"/>
            <div className="row row-cols-auto justify-content-center w-100">
                <div>
                    <span><SMM1/>: </span>
                    <PathFromGame path={`${simpleName1} (Game=1)`} name="All"/><Separator/>
                    <PathFromGame path={`${simpleName2} (Game=1)`} name={name2}/><Separator/>
                    <PathFromGame path={`${simpleName3} (Game=1)`} name={name3}/>
                </div>
                <div>
                    <span><SMM3DS/>: </span>
                    <PathFromGame path={`${simpleName1} (Game=3DS)`} name="All"/><Separator/>
                    <PathFromGame path={`${simpleName2} (Game=3DS)`} name={name2}/><Separator/>
                    <PathFromGame path={`${simpleName3} (Game=3DS)`} name={name3}/>
                </div>
                <div>
                    <span><SMM2/>: </span>
                    <PathFromGame path={`${simpleName1} (Game=2)`} name="All"/><Separator/>
                    <PathFromGame path={`${simpleName2} (Game=2)`} name={name2}/><Separator/>
                    <PathFromGame path={`${simpleName3} (Game=2)`} name={name3}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1And3DS/>: </span>
                    <PathFromGame path={`${simpleName1} (Game=1&3DS)`} name="All"/><Separator/>
                    <PathFromGame path={`${simpleName2} (Game=1&3DS)`} name={name2}/><Separator/>
                    <PathFromGame path={`${simpleName3} (Game=1&3DS)`} name={name3}/>
                </div>
                <div>
                    <span><SMM1And2/>: </span>
                    <PathFromGame path={`${simpleName1} (Game=1&2)`} name="All"/><Separator/>
                    <PathFromGame path={`${simpleName2} (Game=1&2)`} name={name2}/><Separator/>
                    <PathFromGame path={`${simpleName3} (Game=1&2)`} name={name3}/>
                </div>
                <div>
                    <span><SMM3DSAnd2/>: </span>
                    <PathFromGame path={`${simpleName1} (Game=3DS&2)`} name="All"/><Separator/>
                    <PathFromGame path={`${simpleName2} (Game=3DS&2)`} name={name2}/><Separator/>
                    <PathFromGame path={`${simpleName3} (Game=3DS&2)`} name={name3}/>
                </div>
            </div>
            <hr className="w-100 mb-1"/>

            <h3 className="text-center fst-italic text-decoration-underline">List</h3>
            <div className="row row-cols-auto justify-content-center w-100">
                <div>
                    <span>All game: </span>
                    <RealPath path={`${simpleName1} (list Game=all)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (list Game=all)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (list Game=all)`} name={name3}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1/>: </span>
                    <RealPath path={`${simpleName1} (list Game=1)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (list Game=1)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (list Game=1)`} name={name3}/>
                </div>
                <div>
                    <span><SMM3DS/>: </span>
                    <RealPath path={`${simpleName1} (list Game=3DS)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (list Game=3DS)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (list Game=3DS)`} name={name3}/>
                </div>
                <div>
                    <span><SMM2/>: </span>
                    <RealPath path={`${simpleName1} (list Game=2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (list Game=2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (list Game=2)`} name={name3}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1And3DS/>: </span>
                    <RealPath path={`${simpleName1} (list Game=1&3DS)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (list Game=1&3DS)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (list Game=1&3DS)`} name={name3}/>
                </div>
                <div>
                    <span><SMM1And2/>: </span>
                    <RealPath path={`${simpleName1} (list Game=1&2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (list Game=1&2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (list Game=1&2)`} name={name3}/>
                </div>
                <div>
                    <span><SMM3DSAnd2/>: </span>
                    <RealPath path={`${simpleName1} (list Game=3DS&2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (list Game=3DS&2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (list Game=3DS&2)`} name={name3}/>
                </div>
            </div>
            <h3 className="text-center fst-italic text-decoration-underline">Card</h3>
            <div className="row row-cols-auto justify-content-center w-100">
                <div>
                    <span><SMM2/>: </span>
                    <RealPath path={`${simpleName1} (card Game=all)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (card Game=all)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (card Game=all)`} name={name3}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1/>: </span>
                    <RealPath path={`${simpleName1} (card Game=1)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (card Game=1)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (card Game=1)`} name={name3}/>
                </div>
                <div>
                    <span><SMM3DS/>: </span>
                    <RealPath path={`${simpleName1} (card Game=3DS)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (card Game=3DS)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (card Game=3DS)`} name={name3}/>
                </div>
                <div>
                    <span><SMM2/>: </span>
                    <RealPath path={`${simpleName1} (card Game=2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (card Game=2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (card Game=2)`} name={name3}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1And3DS/>: </span>
                    <RealPath path={`${simpleName1} (card Game=1&3DS)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (card Game=1&3DS)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (card Game=1&3DS)`} name={name3}/>
                </div>
                <div>
                    <span><SMM1And2/>: </span>
                    <RealPath path={`${simpleName1} (card Game=1&2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (card Game=1&2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (card Game=1&2)`} name={name3}/>
                </div>
                <div>
                    <span><SMM3DSAnd2/>: </span>
                    <RealPath path={`${simpleName1} (card Game=3DS&2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (card Game=3DS&2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (card Game=3DS&2)`} name={name3}/>
                </div>
            </div>
            <h3 className="text-center fst-italic text-decoration-underline">Table</h3>
            <div className="row row-cols-auto justify-content-center w-100">
                <div>
                    <span><SMM2/>: </span>
                    <RealPath path={`${simpleName1} (table Game=all)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (table Game=all)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (table Game=all)`} name={name3}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1/>: </span>
                    <RealPath path={`${simpleName1} (table Game=1)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (table Game=1)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (table Game=1)`} name={name3}/>
                </div>
                <div>
                    <span><SMM3DS/>: </span>
                    <RealPath path={`${simpleName1} (table Game=3DS)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (table Game=3DS)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (table Game=3DS)`} name={name3}/>
                </div>
                <div>
                    <span><SMM2/>: </span>
                    <RealPath path={`${simpleName1} (table Game=2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (table Game=2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (table Game=2)`} name={name3}/>
                </div>
                <div className="w-100"/>
                <div>
                    <span><SMM1And3DS/>: </span>
                    <RealPath path={`${simpleName1} (table Game=1&3DS)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (table Game=1&3DS)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (table Game=1&3DS)`} name={name3}/>
                </div>
                <div>
                    <span><SMM1And2/>: </span>
                    <RealPath path={`${simpleName1} (table Game=1&2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (table Game=1&2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (table Game=1&2)`} name={name3}/>
                </div>
                <div>
                    <span><SMM3DSAnd2/>: </span>
                    <RealPath path={`${simpleName1} (table Game=3DS&2)`} name="All"/><Separator/>
                    <RealPath path={`${simpleName2} (table Game=3DS&2)`} name={name2}/><Separator/>
                    <RealPath path={`${simpleName3} (table Game=3DS&2)`} name={name3}/>
                </div>
            </div>
        </div>
    </div>
}

//endregion -------------------- Filled section (with every game) components --------------------
//region -------------------- Filled section components --------------------

interface FilledSectionProperties<out ROUTE extends Names, >
    extends ReactProperties {
    readonly partialId: string
    readonly name: string
    readonly route: typeof EveryRoutes[ROUTE]
}


function ListCardSection({partialId, name, route,}: FilledSectionProperties<| 'EVERY_CHARACTER_NAME' | 'EVERY_EDITOR_VOICE' | 'EVERY_INSTRUMENT'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="row row-cols-auto justify-content-center collapse">
            <div>
                <PathFromDefault         path={simpleName} name="Default"/><Separator/>
                <PathFromViewDisplay  path={`${simpleName} (list)`} name="List"/><Separator/>
                <PathFromViewDisplay  path={`${simpleName} (card)`} name="Card"/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=all)`} name="All game"/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=1)`} name={<SMM1/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=2)`} name={<SMM2/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=1&3DS)`} name={<SMM1And3DS/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
            </div>
            <div className="w-100"/>

            <div>
                <span>List: </span>
                <RealPath path={`${simpleName} (list Game=all)`} name="All game"/><Separator/>
                <RealPath path={`${simpleName} (list Game=1)`} name={<SMM1/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=2)`} name={<SMM2/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=1&3DS)`} name={<SMM1And3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
            </div>
            <div className="w-100"/>
            <div>
                <span>Card: </span>
                <RealPath path={`${simpleName} (card Game=all)`} name="All game"/><Separator/>
                <RealPath path={`${simpleName} (card Game=1)`} name={<SMM1/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=2)`} name={<SMM2/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=1&3DS)`} name={<SMM1And3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
            </div>
        </div>
    </div>
}

function ListCardTableSection({partialId, name, route,}: FilledSectionProperties<'EVERY_GAME_STYLE'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="row row-cols-auto justify-content-center collapse">
            <div>
                <PathFromDefault         path={simpleName} name="Default"/><Separator/>
                <PathFromViewDisplay  path={`${simpleName} (list)`} name="List"/><Separator/>
                <PathFromViewDisplay  path={`${simpleName} (card)`} name="Card"/><Separator/>
                <PathFromViewDisplay  path={`${simpleName} (table)`} name="Table"/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=all)`} name="All game"/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=1)`} name={<SMM1/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=2)`} name={<SMM2/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=1&3DS)`} name={<SMM1And3DS/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                <PathFromGame         path={`${simpleName} (Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
            </div>
            <div className="w-100"/>

            <div>
                <span>List: </span>
                <RealPath path={`${simpleName} (list Game=all)`} name="All game"/><Separator/>
                <RealPath path={`${simpleName} (list Game=1)`} name={<SMM1/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=2)`} name={<SMM2/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=1&3DS)`} name={<SMM1And3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                <RealPath path={`${simpleName} (list Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
            </div>
            <div className="w-100"/>
            <div>
                <span>Card: </span>
                <RealPath path={`${simpleName} (card Game=all)`} name="All game"/><Separator/>
                <RealPath path={`${simpleName} (card Game=1)`} name={<SMM1/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=2)`} name={<SMM2/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=1&3DS)`} name={<SMM1And3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                <RealPath path={`${simpleName} (card Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
            </div>
            <div className="w-100"/>
            <div>
                <span>Table: </span>
                <RealPath path={`${simpleName} (table Game=all)`} name="All game"/><Separator/>
                <RealPath path={`${simpleName} (table Game=1)`} name={<SMM1/>}/><Separator/>
                <RealPath path={`${simpleName} (table Game=3DS)`} name={<SMM3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (table Game=2)`} name={<SMM2/>}/><Separator/>
                <RealPath path={`${simpleName} (table Game=1&3DS)`} name={<SMM1And3DS/>}/><Separator/>
                <RealPath path={`${simpleName} (table Game=1&2)`} name={<SMM1And2/>}/><Separator/>
                <RealPath path={`${simpleName} (table Game=3DS&2)`} name={<SMM3DSAnd2/>}/>
            </div>
        </div>
    </div>
}


function SimpleListSMM2Section({partialId, name, route,}: FilledSectionProperties<'EVERY_PREDEFINED_MESSAGE'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg text-center bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="collapse">
            <PathFromDefault         path={simpleName} name="Default"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (list)`} name="List"/><Separator/>
            <PathFromGame         path={`${simpleName} (Game=2)`} name={<SMM2/>}/><Separator/>
            <RealPath             path={`${simpleName} (list Game=2)`} name={<>List + <SMM2/></>}/>
        </div>
    </div>
}

function SimpleListCardSMM1Section({partialId, name, route,}: FilledSectionProperties<'EVERY_MEDAL'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg text-center bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="collapse">
            <PathFromDefault         path={simpleName} name="Default"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (list)`} name="List"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (card)`} name="Card"/><Separator/>
            <PathFromGame         path={`${simpleName} (Game=1)`} name={<SMM1/>}/><Separator/>
            <RealPath             path={`${simpleName} (list Game=1)`} name={<>List + <SMM1/></>}/><Separator/>
            <RealPath             path={`${simpleName} (card Game=1)`} name={<>Card + <SMM1/></>}/>
        </div>
    </div>
}

function SimpleListCardSMM2Section({partialId, name, route,}: FilledSectionProperties<| 'EVERY_ENTITY_CATEGORY' | 'EVERY_SOUND_EFFECT_CATEGORY' | 'EVERY_MII_COSTUME_CATEGORY'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg text-center bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="collapse">
            <PathFromDefault         path={simpleName} name="Default"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (list)`} name="List"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (card)`} name="Card"/><Separator/>
            <PathFromGame         path={`${simpleName} (Game=2)`} name={<SMM2/>}/><Separator/>
            <RealPath             path={`${simpleName} (list Game=2)`} name={<>List + <SMM2/></>}/><Separator/>
            <RealPath             path={`${simpleName} (card Game=2)`} name={<>Card + <SMM2/></>}/>
        </div>
    </div>
}

function SimpleListCardTableSMM1Section({partialId, name, route,}: FilledSectionProperties<| 'EVERY_SAMPLE_COURSE' | 'EVERY_MYSTERY_MUSHROOM'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg text-center bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="collapse">
            <PathFromDefault         path={simpleName} name="Default"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (list)`} name="List"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (card)`} name="Card"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (table)`} name="Table"/><Separator/>
            <PathFromGame         path={`${simpleName} (Game=1)`} name={<SMM1/>}/><Separator/>
            <RealPath             path={`${simpleName} (list Game=1)`} name={<>List + <SMM1/></>}/><Separator/>
            <RealPath             path={`${simpleName} (card Game=1)`} name={<>Card + <SMM1/></>}/><Separator/>
            <RealPath             path={`${simpleName} (table Game=1)`} name={<>Table + <SMM1/></>}/>
        </div>
    </div>
}

function SimpleListCardTableSMM2Section({partialId, name, route,}: FilledSectionProperties<'EVERY_MII_COSTUME'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg text-center bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="collapse">
            <PathFromDefault         path={simpleName} name="Default"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (list)`} name="List"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (card)`} name="Card"/><Separator/>
            <PathFromViewDisplay  path={`${simpleName} (table)`} name="Table"/><Separator/>
            <PathFromGame         path={`${simpleName} (Game=2)`} name={<SMM2/>}/><Separator/>
            <RealPath             path={`${simpleName} (list Game=2)`} name={<>List + <SMM2/></>}/><Separator/>
            <RealPath             path={`${simpleName} (card Game=2)`} name={<>Card + <SMM2/></>}/><Separator/>
            <RealPath             path={`${simpleName} (table Game=2)`} name={<>Table + <SMM2/></>}/>
        </div>
    </div>
}

function SimpleAllGamesSection({partialId, name, route,}: FilledSectionProperties<'EVERY_GAME_REFERENCE'>,) {
    const simpleName = route.simpleName
    const linkPaths = `${partialId}-linkPaths`

    return <div id={`${partialId}-paths`} className="container-lg text-center bg-dark-subtle rounded pt-1 pb-3 mb-3">
        <SectionTitle name={name} target={linkPaths} route={route}/>
        <div id={linkPaths} className="collapse">
            <PathFromDefault path={simpleName} name="Default"/><Separator/>
            <RealPath     path={`${simpleName} (Game=all)`} name="All game"/><Separator/>
            <RealPath     path={`${simpleName} (Game=1)`} name={<SMM1/>}/><Separator/>
            <RealPath     path={`${simpleName} (Game=3DS)`} name={<SMM3DS/>}/><Separator/>
            <RealPath     path={`${simpleName} (Game=2)`} name={<SMM2/>}/><Separator/>
            <RealPath     path={`${simpleName} (Game=1&3DS)`} name={<SMM1And3DS/>}/><Separator/>
            <RealPath     path={`${simpleName} (Game=1&2)`} name={<SMM1And2/>}/><Separator/>
            <RealPath     path={`${simpleName} (Game=3DS&2)`} name={<SMM1And3DS/>}/><Separator/>
        </div>
    </div>
}

//endregion -------------------- Filled section components --------------------
//region -------------------- Path components --------------------

interface PathProperties
    extends ReactProperties {
    readonly name: ReactElementOrString
    readonly path: PossibleRouteName
    readonly handleException?: boolean
}

const PathFromDefault = ({name, path, handleException,}: PathProperties,) => <Link className="link-default" to={route(path, handleException,)}>{name}</Link>
const PathFromViewDisplay = ({name, path, handleException,}: PathProperties,) => <Link className="link-viewDisplay" to={route(path, handleException,)}>{name}</Link>
const PathFromViewDisplayAndGame = ({name, path, handleException,}: PathProperties,) => <Link className="link-viewDisplay link-game" to={route(path, handleException,)}>{name}</Link>
const PathFromViewDisplayAndGameStyle = ({name, path, handleException,}: PathProperties,) => <Link className="link-viewDisplay link-gameStyle" to={route(path, handleException,)}>{name}</Link>
const PathFromGame = ({name, path, handleException,}: PathProperties,) => <Link className="link-game" to={route(path, handleException,)}>{name}</Link>
const PathFromGameAndGameStyle = ({name, path, handleException,}: PathProperties,) => <Link className="link-game link-gameStyle" to={route(path, handleException,)}>{name}</Link>
const PathFromGameStyle = ({name, path, handleException,}: PathProperties,) => <Link className="link-gameStyle" to={route(path, handleException,)}>{name}</Link>
const RealPath = ({name, path, handleException,}: PathProperties,) => <Link className="link-success" to={route(path, handleException,)}>{name}</Link>

//endregion -------------------- Path components --------------------
//region -------------------- Values components --------------------

const Separator = () => <span className="opacity-25"> | </span>

const SMM1 = () => <>SMM<sub className="opacity-50">1</sub></>
const SMM3DS = () => <>SMM<sub className="opacity-50">3DS</sub></>
const SMM2 = () => <>SMM<sub className="opacity-50">2</sub></>
const SMM1And3DS = () => <>SMM<sub className="opacity-50">1+3DS</sub></>
const SMM1And2 = () => <>SMM<sub className="opacity-50">1+2</sub></>
const SMM3DSAnd2 = () => <>SMM<sub className="opacity-50">3DS+2</sub></>


const SMB = () => <>SMB</>
const SMB3 = () => <>SMB3</>
const SMW = () => <>SMW</>
const NSMBU = () => <>NSMBU</>
const SM3DW = () => <>SM3DW</>

//endregion -------------------- Values components --------------------

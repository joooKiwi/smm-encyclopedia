import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'
import {Fragment}                    from 'react'

import type {Names, Ordinals}   from 'app/options/MysteryMushroomAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'

import {CommonOptions}                        from 'app/options/CommonOptions'
import {TableOption}                          from 'app/tools/table/TableOption'
import TextComponent                          from 'app/tools/text/TextComponent'
import UnfinishedText, {unfinishedText}       from 'app/tools/text/UnfinishedText'
import {MysteryMushrooms}                     from 'core/mysteryMushroom/MysteryMushrooms'
import MysteryMushroomClimbingImage           from 'core/mysteryMushroom/component/MysteryMushroom.climbing.image'
import MysteryMushroomFallingAfterAJumpImage  from 'core/mysteryMushroom/component/MysteryMushroom.fallingAfterAJump.image'
import MysteryMushroomGoalPoleImage           from 'core/mysteryMushroom/component/MysteryMushroom.goalPole.image'
import MysteryMushroomGoalPoleSound           from 'core/mysteryMushroom/component/MysteryMushroom.goalPole.sound'
import MysteryMushroomJumpImage               from 'core/mysteryMushroom/component/MysteryMushroom.jump.image'
import MysteryMushroomJumpSound               from 'core/mysteryMushroom/component/MysteryMushroom.jump.sound'
import MysteryMushroomLostALifeSound          from 'core/mysteryMushroom/component/MysteryMushroom.lostALife.sound'
import MysteryMushroomOnGroundAfterAJumpSound from 'core/mysteryMushroom/component/MysteryMushroom.onGroundAfterAJump.sound'
import MysteryMushroomPowerUpCollectedSound   from 'core/mysteryMushroom/component/MysteryMushroom.powerUpCollected.sound'
import MysteryMushroomPressingDownImage       from 'core/mysteryMushroom/component/MysteryMushroom.pressingDown.image'
import MysteryMushroomRunningImage            from 'core/mysteryMushroom/component/MysteryMushroom.running.image'
import MysteryMushroomSwimmingImage           from 'core/mysteryMushroom/component/MysteryMushroom.swimming.image'
import MysteryMushroomTauntImage              from 'core/mysteryMushroom/component/MysteryMushroom.taunt.image'
import MysteryMushroomTauntSound              from 'core/mysteryMushroom/component/MysteryMushroom.taunt.sound'
import MysteryMushroomTurningImage            from 'core/mysteryMushroom/component/MysteryMushroom.turning.image'
import MysteryMushroomTurningSound            from 'core/mysteryMushroom/component/MysteryMushroom.turning.sound'
import MysteryMushroomWaitingImage            from 'core/mysteryMushroom/component/MysteryMushroom.waiting.image'
import MysteryMushroomWalkImage               from 'core/mysteryMushroom/component/MysteryMushroom.walk.image'
import {ProjectLanguages}                     from 'lang/ProjectLanguages'
import NameComponent                          from 'lang/name/component/Name.component'
import {ArrayAsCollection}                    from 'util/collection/ArrayAsCollection'

import LanguageCompanion = ProjectLanguages.Companion

export abstract class MysteryMushroomAppOption
    extends TableOption<MysteryMushrooms, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly CONDITION_TO_UNLOCK_IT = new class MysteryMushroomAppOption_ConditionToUnlockIt extends MysteryMushroomAppOption {

        public override renderContent({reference,}: MysteryMushrooms,): ReactJSXElement {
            return <UnfinishedText>{reference.conditionToUnlockIt}</UnfinishedText>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'conditionToUnlockIt', element: unfinishedText('Condition to unlock it'),}//TODO add condition to unlock it
        }

    }('conditionToUnlockIt',)
    public static readonly GAME = new class MysteryMushroomAppOption_Game extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            const {uniqueEnglishName, englishNameInHtml, reference,} = enumeration

            const games = new ArrayAsCollection(reference.games,)
            return <div key={`games - ${uniqueEnglishName}`} id={`games-${englishNameInHtml}`}>{games.map((it, i,) =>
                    <Fragment key={`game (${i + 1}) - ${uniqueEnglishName}`}>
                        <NameComponent id={`game_${i + 1}_${englishNameInHtml}`} name={it.reference} popoverOrientation="right"/>
                        {i === games.size - 1 ? null : <>{LanguageCompanion.current.comma}<br/></>}
                    </Fragment>
                ,)}</div>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.gameHeader
        }

    }('game',)
    public static readonly NAME = new class MysteryMushroomAppOption_Name extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            return CommonOptions.get.getNameContent(enumeration)/*<YesOrNoResultTextComponent boolean={reference.canBeUnlockedByAnAmiibo}/>*/
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)


    public static readonly POWER_UP_COLLECTED = new class MysteryMushroomAppOption_PowerUpCollectedSound extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomPowerUpCollectedSound value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'powerUpCollectedSound', element: unfinishedText('Power-up collected (sound)'),}//TODO add power-up collected & sound
        }

    }('powerUpCollected',)
    public static readonly WAITING = new class MysteryMushroomAppOption_WaitingImages extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomWaitingImage value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'waitingImage', element: unfinishedText('Waiting (image)'),}//TODO add waiting & image
        }

    }('waiting',)
    public static readonly TAUNT = new class MysteryMushroomAppOption_Taunt extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div>
                <MysteryMushroomTauntImage value={enumeration}/>
                <MysteryMushroomTauntSound value={enumeration}/>
            </div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'tauntImageAndSound', element: unfinishedText('Taunt (image & sound)'),}//TODO add taunt, image & sound
        }

    }('taunt',)
    public static readonly PRESSING_DOWN = new class MysteryMushroomAppOption_PressingDown extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms, ): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomPressingDownImage value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'pressingDownImage', element: unfinishedText('Pressing ↓ (image)'),}//TODO add pressing down & image
        }

    }('pressingDown',)
    public static readonly WALK = new class MysteryMushroomAppOption_Walk extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomWalkImage value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'walkImages', element: unfinishedText('Walk (image)'),}//TODO add walk & image
        }

    }('walk',)
    public static readonly RUNNING = new class MysteryMushroomAppOption_Running extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms, ): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomRunningImage value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'runningImages', element: unfinishedText('Running (images)'),}//TODO add running & image
        }

    }('running',)
    public static readonly SWIMMING = new class MysteryMushroomAppOption_Swimming extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomSwimmingImage value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'swimmingImages', element: unfinishedText('Swimming (images)'),}//TODO add swimming & image
        }

    }('swimming',)
    public static readonly JUMP = new class MysteryMushroomAppOption_Jump extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms, ): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div>
                <MysteryMushroomJumpImage value={enumeration}/>
                <MysteryMushroomJumpSound value={enumeration}/>
            </div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'jumpingImagesAndSounds', element: unfinishedText('Jumping (images & sounds)'),}//TODO add jumping, image & sound
        }

    }('jump',)
    public static readonly FALLING_AFTER_A_JUMP = new class MysteryMushroomAppOption_FallingAfterAJump extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomFallingAfterAJumpImage value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'fallingAfterJumpImage', element: unfinishedText('Falling after a jump (images)'),}//TODO add falling after jump & image
        }

    }('fallingAfterAJump',)
    public static readonly ON_GROUND_AFTER_A_JUMP = new class MysteryMushroomAppOption_OnGroundAfterAJump extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomOnGroundAfterAJumpSound value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'onGroundAfterAJumpSound', element: unfinishedText('On ground after a jump (sound)'),}//TODO add ground after jump & sound
        }

    }('onGroundAfterAJump',)
    public static readonly TURNING = new class MysteryMushroomAppOption_Turning extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms, ): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div>
                <MysteryMushroomTurningImage value={enumeration}/>
                <MysteryMushroomTurningSound value={enumeration}/>
            </div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'turningImageAndSound', element: unfinishedText('Turning (image & sound)'),}//TODO add turning, image & sound
        }

    }('turning',)
    public static readonly CLIMBING = new class MysteryMushroomAppOption_Climbing extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomClimbingImage value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'climbingImages', element: unfinishedText('Climbing (images)'),}//TODO add climbing & image
        }

    }('climbing',)
    public static readonly GOAL_POLE = new class MysteryMushroomAppOption_GoalPole extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms, ): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div>
                <MysteryMushroomGoalPoleImage value={enumeration}/>
                <MysteryMushroomGoalPoleSound value={enumeration}/>
            </div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'goalPoleImagesAndSound', element: unfinishedText('Goal pole (images & sound)'),}
        }

    }('goalPole',)
    public static readonly LOST_A_LIFE = new class MysteryMushroomAppOption_LostALife extends MysteryMushroomAppOption {

        public override renderContent(enumeration: MysteryMushrooms,): ReactJSXElement {
            if (enumeration === MysteryMushrooms.MYSTERY_MUSHROOM)
                return <TextComponent content="N/A"/>
            return <div><MysteryMushroomLostALifeSound value={enumeration}/></div>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'lostALifeSound', element: unfinishedText('Lost a life (sound)'),}//TODO add lost a life & sound
        }

    }('lostALife',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<MysteryMushroomAppOption, typeof MysteryMushroomAppOption> = class CompanionEnum_MysteryMushroomAppOption
        extends CompanionEnum<MysteryMushroomAppOption, typeof MysteryMushroomAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MysteryMushroomAppOption

        private constructor() {
            super(MysteryMushroomAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_MysteryMushroomAppOption()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) { super(associatedClass,) }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

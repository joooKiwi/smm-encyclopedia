import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {Array, Nullable}        from '@joookiwi/type'
import {getFirstByArray}             from '@joookiwi/collection'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'
import {Fragment}                    from 'react'

import type {AppOption}                                    from 'app/options/AppOption'
import type {Names, Ordinals, PossibleMysteryMushroomType} from 'app/options/MysteryMushroomAppOption.types'
import type {SingleHeaderContent}                          from 'app/tools/table/SimpleHeader'
import type {MysteryMushroom}                              from 'core/mysteryMushroom/MysteryMushroom'
import type {MysteryMushroomImageFile as ImageFile}        from 'core/mysteryMushroom/file/MysteryMushroomImageFile'
import type {MysteryMushroomSoundFile as SoundFile}        from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'

import {CommonOptions}                  from 'app/options/CommonOptions'
import Image                            from 'app/tools/images/Image'
import TextComponent                    from 'app/tools/text/TextComponent'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import {MysteryMushrooms}               from 'core/mysteryMushroom/MysteryMushrooms'
import {ProjectLanguages}               from 'lang/ProjectLanguages'
import NameComponent                    from 'lang/name/component/Name.component'
import SimpleSoundComponent             from 'util/file/sound/component/SimpleSound.component'

export abstract class MysteryMushroomAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<MysteryMushrooms> {

    //region -------------------- Enum instances --------------------

    public static readonly CONDITION_TO_UNLOCK_IT = new class MysteryMushroomAppOption_ConditionToUnlockIt extends MysteryMushroomAppOption {

        protected override _createContentOption({reference,}: MysteryMushrooms,) {
            return <UnfinishedText>{reference.conditionToUnlockIt}</UnfinishedText>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'conditionToUnlockIt', element: unfinishedText('Condition to unlock it'),}//TODO add condition to unlock it
        }

    }(null,)
    public static readonly GAME = new class MysteryMushroomAppOption_Game extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms,) {
            const {uniqueEnglishName, englishNameInHtml, reference,} = enumeration

            return <div key={`games - ${uniqueEnglishName}`} id={`games-${englishNameInHtml}`}>{
                reference.games.map((game, index, games,) => <Fragment key={`game (${index + 1}) - ${uniqueEnglishName}`}>
                    <NameComponent id={`game_${index + 1}_${englishNameInHtml}`} name={game.reference} popoverOrientation="right"/>
                    {index === games.length - 1 ? null : <>{ProjectLanguages.current.comma}<br/></>}
                </Fragment>)
            }</div>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.gameHeader
        }

    }(null,)
    public static readonly NAME = new class MysteryMushroomAppOption_Name extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms,) {
            return CommonOptions.get.getNameContent(enumeration)/*<YesOrNoResultTextComponent boolean={reference.canBeUnlockedByAnAmiibo}/>*/
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }(null,)


    public static readonly POWER_UP_COLLECTED = new class MysteryMushroomAppOption_PowerUpCollectedSound extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderSoundContent(enumeration,)
        }

        protected override _createSoundContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createSound(enumeration, enumeration.powerUpCollectedSound, it => it.haveASoundEffectWhenCollected, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'powerUpCollectedSound', element: unfinishedText('Power-up collected (sound)'),}//TODO add power-up collected & sound
        }

    }('power-up collected',)
    public static readonly WAITING = new class MysteryMushroomAppOption_WaitingImages extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderImageContent(enumeration,)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createImage(enumeration, enumeration.waitingImage, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'waitingImage', element: unfinishedText('Waiting (image)'),}//TODO add waiting & image
        }

    }('waiting',)
    public static readonly TAUNT = new class MysteryMushroomAppOption_Taunt extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._createSingleImageAndSoundContainer(enumeration, <>
                {this._renderImageContent(enumeration, false,)}
                {this._renderSoundContent(enumeration, false,)}
            </>)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createImage(enumeration, enumeration.tauntImage, renderDiv,)
        }

        protected override _createSoundContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createSound(enumeration, enumeration.tauntSound, it => it.haveASoundEffectOnTaunt, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'tauntImageAndSound', element: unfinishedText('Taunt (image & sound)'),}//TODO add taunt, image & sound
        }

    }('taunt',)
    public static readonly PRESSING_DOWN = new class MysteryMushroomAppOption_PressingDown extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderImageContent(enumeration,)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createImage(enumeration, enumeration.pressingDownImage, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'pressingDownImage', element: unfinishedText('Pressing ↓ (image)'),}//TODO add pressing down & image
        }

    }('pressing ↓',)
    public static readonly WALK = new class MysteryMushroomAppOption_Walk extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderImageContent(enumeration,)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createAnimatedImages(enumeration, enumeration.walkImages, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'walkImages', element: unfinishedText('Walk (image)'),}//TODO add walk & image
        }

    }('walk',)
    public static readonly RUNNING = new class MysteryMushroomAppOption_Running extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderImageContent(enumeration,)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createAnimatedImages(enumeration, enumeration.runningImages, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'runningImages', element: unfinishedText('Running (images)'),}//TODO add running & image
        }

    }('running',)
    public static readonly SWIMMING = new class MysteryMushroomAppOption_Swimming extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderImageContent(enumeration,)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createAnimatedImages(enumeration, enumeration.swimmingImages, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'swimmingImages', element: unfinishedText('Swimming (images)'),}//TODO add swimming & image
        }

    }('swimming',)
    public static readonly JUMP = new class MysteryMushroomAppOption_Jump extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._createSingleImageAndSoundContainer(enumeration, <>
                {this._renderImageContent(enumeration, false,)}
                {this._renderSoundContent(enumeration, false,)}
            </>)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return (enumeration.jumpImages[0]?.length ?? 0) > 1
                ? this._createAnimatedImages(enumeration, enumeration.jumpImages, renderDiv,)
                : this._createImage(enumeration, enumeration.jumpImages.map(images => getFirstByArray(images,),), renderDiv,)
        }

        protected override _createSoundContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createSounds(enumeration, enumeration.jumpSounds, it => it.haveASoundEffectOnJump, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'jumpingImagesAndSounds', element: unfinishedText('Jumping (images & sounds)'),}//TODO add jumping, image & sound
        }

    }('jump',)
    public static readonly FALLING_AFTER_A_JUMP = new class MysteryMushroomAppOption_FallingAfterAJump extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderImageContent(enumeration,)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createImage(enumeration, enumeration.fallingAfterAJumpImage, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'fallingAfterJumpImage', element: unfinishedText('Falling after jump (images)'),}//TODO add falling after jump & image
        }

    }('falling after a jump',)
    public static readonly ON_GROUND_AFTER_A_JUMP = new class MysteryMushroomAppOption_OnGroundAfterAJump extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderSoundContent(enumeration,)
        }

        protected override _createSoundContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createSound(enumeration, enumeration.onGroundAfterJumpASound, it => it.haveASoundEffectOnGroundAfterJump, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'groundAfterJumpImage', element: unfinishedText('Ground after jump (sound)'),}//TODO add ground after jump & sound
        }

    }('ground after a jump',)
    public static readonly TURNING = new class MysteryMushroomAppOption_Turning extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._createSingleImageAndSoundContainer(enumeration, <>
                {this._renderImageContent(enumeration, false,)}
                {this._renderSoundContent(enumeration, false,)}
            </>)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createImage(enumeration, enumeration.turningImage, renderDiv,)
        }

        protected override _createSoundContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createSound(enumeration, enumeration.turningSound, it => it.haveASoundEffectOnTurnAfterRun, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'turningImageAndSound', element: unfinishedText('Turning (image & sound)'),}//TODO add turning, image & sound
        }

    }('turning',)
    public static readonly CLIMBING = new class MysteryMushroomAppOption_Climbing extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderImageContent(enumeration, )
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createAnimatedImages(enumeration, enumeration.climbingImages, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'climbingImages', element: unfinishedText('Climbing (images)'),}//TODO add climbing & image
        }

    }('climbing',)
    public static readonly GOAL_POLE = new class MysteryMushroomAppOption_GoalPole extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._createSingleImageAndSoundContainer(enumeration, <>
                {this._renderImageContent(enumeration, false,)}
                {this._renderSoundContent(enumeration, false,)}
            </>,)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createAnimatedImages(enumeration, enumeration.goalPoleImages, renderDiv,)
        }

        protected override _createSoundContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createSound(enumeration, enumeration.goalPoleSound, it => it.haveASoundEffectOnGoalPole, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'goalPoleImagesAndSound', element: unfinishedText('Goal pole (images & sound)'),}
        }

    }('goal pole',)
    public static readonly LOST_A_LIFE = new class MysteryMushroomAppOption_LostALife extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms, ) {
            return this._renderImageContent(enumeration,)
        }

        protected override _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,) {
            return this._createSound(enumeration, enumeration.lostALifeSound, it => it.haveASoundEffectOnDeath, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'lostALifeSound', element: unfinishedText('Lost a life (sound)'),}//TODO add lost a life & sound
        }

    }('lost a life',)

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

    static #imagesAndSounds?: readonly MysteryMushroomAppOption[]

    static readonly #NOT_APPLICABLE_COMPONENT = <TextComponent content="N/A"/>

    readonly #type

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(type: PossibleMysteryMushroomType,) {
        super()
        this.#type = type
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected get _mysteryMushroomType(): PossibleMysteryMushroomType {
        return this.#type
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    #createSingleImageAndSoundContainer(enumeration: MysteryMushrooms, renderDiv: boolean, element: ReactElement,) {
        return enumeration === MysteryMushrooms.MYSTERY_MUSHROOM
            ? MysteryMushroomAppOption.#NOT_APPLICABLE_COMPONENT
            : renderDiv
                ? <div key={`${enumeration.uniqueEnglishName} - ${this._mysteryMushroomType}`}>{element}</div>
                : element
    }

    protected _createSingleImageAndSoundContainer(enumeration: MysteryMushrooms, element: ReactElement, renderDiv: boolean = true,): ReactElement {
        return this.#createSingleImageAndSoundContainer(enumeration, renderDiv, element,)
    }

    protected _createSound(enumeration: MysteryMushrooms, soundFile: Nullable<SoundFile>, callbackToRender: ReferenceCallback, renderDiv: boolean,): ReactElement {
        if (soundFile == null)
            return this.#createSingleImageAndSoundContainer(enumeration, renderDiv, null,)

        const englishName = enumeration.englishName
        const type = this._mysteryMushroomType

        return this.#createSingleImageAndSoundContainer(enumeration, renderDiv, <SimpleSoundComponent file={soundFile} title={`${englishName} - ${type}`}/>,)
    }

    protected _createSounds(enumeration: MysteryMushrooms, soundFiles: Array<SoundFile>, callbackToRender: ReferenceCallback, renderDiv: boolean,): ReactElement {
        const englishName = enumeration.englishName
        const type = this._mysteryMushroomType

        return this.#createSingleImageAndSoundContainer(enumeration, renderDiv, <>{soundFiles.map((value, index,) =>
            <SimpleSoundComponent file={value} title={`${englishName} - ${type} #${index + 1}`}/>
        )}</>,)
    }

    protected _createImage(enumeration: MysteryMushrooms, imageFiles: Array<ImageFile>, renderDiv: boolean,): ReactElement {
        const uniqueEnglishName = enumeration.uniqueEnglishName

        return this.#createSingleImageAndSoundContainer(enumeration, renderDiv, <>{imageFiles.map((value, index,) =>
            <Image key={`${uniqueEnglishName} #${index + 1}`} file={value}/>
        )}</>,)
    }

    protected _createAnimatedImages(enumeration: MysteryMushrooms, imageFiles: Array<Array<ImageFile>>, renderDiv: boolean,): ReactElement {
        const uniqueEnglishName = enumeration.uniqueEnglishName
        const englishNameInHtml = enumeration.englishNameInHtml

        return this.#createSingleImageAndSoundContainer(enumeration, renderDiv, <>{imageFiles.map((value, index,) =>
            <Image key={`${uniqueEnglishName} #${index + 1}`} partialId={`${englishNameInHtml}-${index + 1}`} images={value.map(it => ({file: it,}))}/>
        )}</>,)
    }

    protected abstract _createContentOption(enumeration: MysteryMushrooms,): ReactElement

    public renderContent(enumeration: MysteryMushrooms,): readonly [ReactElement,] {
        return [this._createContentOption(enumeration,),]
    }


    protected _createImageContent(enumeration: MysteryMushrooms, renderDiv: boolean,): ReactElement {
        return null
    }

    public renderImageContent(enumeration: MysteryMushrooms, renderDiv: boolean = false,): ReactElement {
        return this._createImageContent(enumeration, renderDiv,)
    }

    protected _renderImageContent(enumeration: MysteryMushrooms, renderDiv: boolean = true,): ReactElement {
        return this._createImageContent(enumeration, renderDiv,)
    }

    protected _createSoundContent(enumeration: MysteryMushrooms, renderDiv: boolean,): ReactElement {
        return null
    }

    public renderSoundContent(enumeration: MysteryMushrooms,): ReactElement {
        return this._createSoundContent(enumeration, false,)
    }

    protected _renderSoundContent(enumeration: MysteryMushrooms, renderDiv: boolean = true,): ReactElement {
        return this._createSoundContent(enumeration, renderDiv,)
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent

    public renderTableHeader(): SingleHeaderContent {
        return this._createTableHeaderOption()
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------

}

type ReferenceCallback = (reference: MysteryMushroom,) => | boolean | NotApplicable

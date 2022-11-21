import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'
import {Fragment, lazy}                                                          from 'react'

import type {AppOptionWithContent, PossibleRenderReactElement}       from './component/AppOptionWithContent'
import type {AppOptionWithTable}                                     from './component/AppOptionWithTable'
import type {MysteryMushroom}                                        from '../../core/mysteryMushroom/MysteryMushroom'
import type {MysteryMushroomSoundFile}                               from '../../core/mysteryMushroom/file/MysteryMushroomSoundFile'
import type {Names, Ordinals, PossibleMysteryMushroomType}           from './MysteryMushroomAppOption.types'
import type {NotApplicable}                                          from '../../core/_properties/Property'
import type {PossibleImageSourceForFile, PossibleSoundSourceForFile} from '../../core/mysteryMushroom/MysteryMushrooms.types'
import type {ReactElement}                                           from '../../util/react/ReactProperties'
import type {SingleHeaderContent}                                    from '../tools/table/SimpleHeader'

import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component'
import {CommonOptions}                 from './CommonOptions'
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables'
import {MysteryMushrooms}              from '../../core/mysteryMushroom/MysteryMushrooms'
import TextComponent                   from '../tools/text/TextComponent'
import {ProjectLanguages}              from '../../lang/ProjectLanguages'

//region -------------------- dynamic imports --------------------

const NameComponent =        lazy(() => import('../../lang/name/component/Name.component'))
const Image =                lazy(() => import('../tools/images/Image'))
const SimpleSoundComponent = lazy(() => import('../../util/sound/component/SimpleSound.component'))

//endregion -------------------- dynamic imports --------------------

export abstract class MysteryMushroomAppOption
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly CONDITION_TO_UNLOCK_IT = new class MysteryMushroomAppOption_ConditionToUnlockIt extends MysteryMushroomAppOption {

        protected override _createContentOption({reference,}: MysteryMushrooms,): PossibleRenderReactElement {
            return <>--{reference.conditionToUnlockIt}--</>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'conditionToUnlockIt', element: <>--Condition to unlock it--</>,}
        }

    }(null,)
    public static readonly GAME = new class MysteryMushroomAppOption_Game extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms,): PossibleRenderReactElement {
            const {uniqueEnglishName, englishNameInHtml, reference,} = enumeration

            return <div key={`games - ${uniqueEnglishName}`} id={`games-${englishNameInHtml}`}>{
                    reference.games.map((game, index, games,) => <Fragment key={`game (${index + 1}) - ${uniqueEnglishName}`}>
                        <NameComponent id={`game_${index + 1}_${englishNameInHtml}`} name={game.reference} popoverOrientation="right"/>
                        {index === games.length - 1 ? EMPTY_REACT_ELEMENT : <>{ProjectLanguages.currentLanguage.comma}<br/></>}
                    </Fragment>)
                }</div>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.gameHeader
        }

    }(null,)
    public static readonly NAME = new class MysteryMushroomAppOption_Name extends MysteryMushroomAppOption {

        protected override _createContentOption(enumeration: MysteryMushrooms,): PossibleRenderReactElement {
            return CommonOptions.get.getNameContent(enumeration)/*<YesOrNoResultTextComponent boolean={reference.canBeUnlockedByAnAmiibo}/>*/
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader
        }

    }(null,)


    public static readonly IMAGES_AND_SOUNDS = new class MysteryMushroomAppOption_ImagesAndSounds extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return MysteryMushroomAppOption._imagesAndSounds.map(enumerable => enumerable.renderContent).flat()
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'imagesAndSounds', element: <>--Images & sounds--</>,
                subHeaders: MysteryMushroomAppOption._imagesAndSounds.map(enumerable => enumerable.renderTableHeader!)
            }
        }

    }(null,)
    public static readonly POWER_UP_COLLECTED = new class MysteryMushroomAppOption_PowerUpCollectedSound extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderSoundContent()
        }

        public override _createSoundContent(renderDiv: boolean,): ReactElement {
            return this._createSound(enumeration => enumeration.powerUpCollectedSound, reference => reference.haveASoundEffectWhenCollected, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'powerUpCollectedSound', element: <>--Power-up collected (sound)--</>,}
        }

    }('power-up collected',)
    public static readonly WAITING = new class MysteryMushroomAppOption_WaitingImages extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderImageContent()
        }

        public override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createImage(enumeration => enumeration.waitingImage, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'waitingImage', element: <>--Waiting (image)--</>,}
        }

    }('waiting',)
    public static readonly TAUNT = new class MysteryMushroomAppOption_Taunt extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._createSingleImageAndSoundContainer(() => <>
                {this._renderImageContent(false,)}
                {this._renderSoundContent(false,)}
            </>)
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createImage(enumeration => enumeration.tauntImage, renderDiv,)
        }

        public override _createSoundContent(renderDiv: boolean,): ReactElement {
            return this._createSound(enumeration => enumeration.tauntSound, reference => reference.haveASoundEffectOnTaunt, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'tauntImageAndSound', element: <>--Taunt (image & sound)--</>,}
        }

    }('taunt',)
    public static readonly PRESSING_DOWN = new class MysteryMushroomAppOption_PressingDown extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderImageContent()
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createImage(enumeration => enumeration.pressingDownImage, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'pressingDownImage', element: <>--Pressing ↓ (image)--</>,}
        }

    }('pressing ↓',)
    public static readonly WALK = new class MysteryMushroomAppOption_Walk extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderImageContent()
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createAnimatedImages(enumeration => enumeration.walkImages, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'walkImages', element: <>--Walk (image)--</>,}
        }

    }('walk',)
    public static readonly RUNNING = new class MysteryMushroomAppOption_Running extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderImageContent()
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createAnimatedImages(enumeration => enumeration.runningImages, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'runningImages', element: <>--Running (images)--</>,}
        }

    }('running',)
    public static readonly SWIMMING = new class MysteryMushroomAppOption_Swimming extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderImageContent()
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createAnimatedImages(enumeration => enumeration.swimmingImages, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'swimmingImages', element: <>--Swimming (images)--</>,}
        }

    }('swimming',)
    public static readonly JUMP = new class MysteryMushroomAppOption_Jump extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._createSingleImageAndSoundContainer(() => <>
                {this._renderImageContent(false,)}
                {this._renderSoundContent(false,)}
            </>)
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            const enumeration = MysteryMushroomAppOption_Jump.CALLBACK_TO_GET_ENUMERATION()
            return (enumeration.jumpImages[0]?.length ?? 0) > 1
                ? this._createAnimatedImages(() => enumeration.jumpImages, renderDiv,)
                : this._createImage(() => enumeration.jumpImages.map(images => images[0]!) as unknown as PossibleImageSourceForFile<string>, renderDiv,)
        }

        public override _createSoundContent(renderDiv: boolean,): ReactElement {
            return this._createSounds(enumeration => enumeration.jumpSounds, reference => reference.haveASoundEffectOnJump, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'jumpingImagesAndSounds', element: <>--Jumping (images & sounds)--</>,}
        }

    }('jump',)
    public static readonly FALLING_AFTER_JUMP = new class MysteryMushroomAppOption_FallingAfterJump extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderImageContent()
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createImage(enumeration => enumeration.fallingAfterJumpImage, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'fallingAfterJumpImage', element: <>--Falling after jump (images)--</>,}
        }

    }('falling after jump',)
    public static readonly ON_GROUND_AFTER_JUMP = new class MysteryMushroomAppOption_OnGroundAfterJump extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderSoundContent()
        }

        public override _createSoundContent(renderDiv: boolean,): ReactElement {
            return this._createSound(enumeration => enumeration.onGroundAfterJumpSound, reference => reference.haveASoundEffectOnGroundAfterJump, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'groundAfterJumpImage', element: <>--Ground after jump (sound)--</>,}
        }

    }('ground after jump',)
    public static readonly TURNING = new class MysteryMushroomAppOption_Turning extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._createSingleImageAndSoundContainer(() => <>
                {this._renderImageContent(false,)}
                {this._renderSoundContent(false,)}
            </>)
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createImage(enumeration => enumeration.turningImage, renderDiv,)
        }

        public override _createSoundContent(renderDiv: boolean,): ReactElement {
            return this._createSound(enumeration => enumeration.turningSound, reference => reference.haveASoundEffectOnTurnAfterRun, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'turningImageAndSound', element: <>-Turning (image & sound)--</>,}
        }

    }('turning',)
    public static readonly CLIMBING = new class MysteryMushroomAppOption_Climbing extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderImageContent()
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createAnimatedImages(enumeration => enumeration.climbingImages, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'climbingImages', element: <>-Climbing (images)--</>,}
        }

    }('climbing',)
    public static readonly GOAL_POLE = new class MysteryMushroomAppOption_GoalPole extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._createSingleImageAndSoundContainer(() => <>
                {this._renderImageContent(false,)}
                {this._renderSoundContent(false,)}
            </>)
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createAnimatedImages(enumeration => enumeration.goalPoleImages, renderDiv,)
        }

        public override _createSoundContent(renderDiv: boolean,): ReactElement {
            return this._createSound(enumeration => enumeration.goalPoleSound, reference => reference.haveASoundEffectOnGoalPole, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'goalPoleImagesAndSound', element: <>-Goal pole (images & sound)--</>,}
        }

    }('goal pole',)
    public static readonly LOST_A_LIFE = new class MysteryMushroomAppOption_LostALife extends MysteryMushroomAppOption {

        protected override _createContentOption(): PossibleRenderReactElement {
            return this._renderImageContent()
        }

        protected override _createImageContent(renderDiv: boolean,): ReactElement {
            return this._createSound(enumeration => enumeration.lostALifeSound, reference => reference.haveASoundEffectOnDeath, renderDiv,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'lostALifeSound', element: <>-Lost a life (sound)--</>,}
        }

    }('lost a life',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: MysteryMushroomAppOption

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #imagesAndSounds?: readonly MysteryMushroomAppOption[]
    public static CALLBACK_TO_GET_ENUMERATION: () => MysteryMushrooms

    static readonly #NOT_APPLICABLE_COMPONENT = <TextComponent content="N/A"/>

    readonly #type
    #appOptionWithContent?: AppOptionWithContent
    #appOptionWithTable?: AppOptionWithTable

    //endregion -------------------- Fields --------------------

    private constructor(type: PossibleMysteryMushroomType,) {
        super()
        this.#type = type
    }

    //region -------------------- Getter methods --------------------

    protected get _mysteryMushroomType(): PossibleMysteryMushroomType {
        return this.#type
    }

    protected static get _imagesAndSounds(): readonly MysteryMushroomAppOption[] {
        return this.#imagesAndSounds ??= [
            MysteryMushroomAppOption.POWER_UP_COLLECTED,
            MysteryMushroomAppOption.WAITING,
            MysteryMushroomAppOption.TAUNT,
            MysteryMushroomAppOption.PRESSING_DOWN,
            MysteryMushroomAppOption.WALK,
            MysteryMushroomAppOption.RUNNING,
            MysteryMushroomAppOption.SWIMMING,
            MysteryMushroomAppOption.JUMP,
            MysteryMushroomAppOption.FALLING_AFTER_JUMP,
            MysteryMushroomAppOption.ON_GROUND_AFTER_JUMP,
            MysteryMushroomAppOption.TURNING,
            MysteryMushroomAppOption.CLIMBING,
            MysteryMushroomAppOption.GOAL_POLE,
            MysteryMushroomAppOption.LOST_A_LIFE,
        ]
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    #createSingleImageAndSoundContainer(renderDiv: boolean, callback: (enumeration: MysteryMushrooms,) => ReactElement,): ReactElement {
        const enumeration = MysteryMushroomAppOption.CALLBACK_TO_GET_ENUMERATION()

        return enumeration === MysteryMushrooms.MYSTERY_MUSHROOM
            ? MysteryMushroomAppOption.#NOT_APPLICABLE_COMPONENT
            : renderDiv
                ? <div key={`${enumeration.uniqueEnglishName} - ${this._mysteryMushroomType}`}>{callback(enumeration)}</div>
                : callback(enumeration)
    }

    protected _createSingleImageAndSoundContainer(callback: (enumeration: MysteryMushrooms,) => ReactElement, renderDiv: boolean = true,): ReactElement {
        return this.#createSingleImageAndSoundContainer(renderDiv, callback,)
    }

    protected _createSound(callback: (enumeration: MysteryMushrooms,) => PossibleSoundSourceForFile<MysteryMushroomSoundFile>, callbackToRender: ReferenceCallback, renderDiv: boolean,): ReactElement {
        return this.#createSingleImageAndSoundContainer(renderDiv, enumeration => {
            const value = callback(enumeration)
            if (value == null)
                return EMPTY_REACT_ELEMENT

            const englishName = enumeration.englishName
            const type = this._mysteryMushroomType
            return <SimpleSoundComponent file={value} title={`${englishName} - ${type}`}/>
        },)
    }

    protected _createSounds(callback: (enumeration: MysteryMushrooms,) => PossibleSoundSourceForFile<readonly MysteryMushroomSoundFile[]>, callbackToRender: ReferenceCallback, renderDiv: boolean,): ReactElement {
        return this.#createSingleImageAndSoundContainer(renderDiv, enumeration => {
            const englishName = enumeration.englishName
            const type = this._mysteryMushroomType

            return <>{callback(enumeration).map((value, index,) =>
                <SimpleSoundComponent file={value} title={`${englishName} - ${type} #${index + 1}`}/>
            )}</>
        },)
    }

    protected _createImage(callback: (enumeration: MysteryMushrooms,) => PossibleImageSourceForFile<string>, renderDiv: boolean,): ReactElement {
        return this.#createSingleImageAndSoundContainer(renderDiv, enumeration => {
            const uniqueEnglishName = enumeration.uniqueEnglishName
            const fallbackName = `${enumeration.englishName} (${this._mysteryMushroomType})`

            return <>{callback(enumeration).map((value, index,) =>
                <Image key={`${uniqueEnglishName} #${index + 1}`} source={value} fallbackName={`${fallbackName} #${index + 1}`}/>
            )}</>
        },)
    }

    protected _createAnimatedImages(callback: (enumeration: MysteryMushrooms,) => PossibleImageSourceForFile<readonly string[]>, renderDiv: boolean,): ReactElement {
        return this.#createSingleImageAndSoundContainer(renderDiv, enumeration => {
            const uniqueEnglishName = enumeration.uniqueEnglishName
            const englishNameInHtml = enumeration.englishNameInHtml
            const fallbackName = `${enumeration.englishName} (${this._mysteryMushroomType})`

            return <>{callback(enumeration).map((value, index,) =>
                <Image key={`${uniqueEnglishName} #${index + 1}`} partialId={`${englishNameInHtml}-${index + 1}`}
                       images={value.map((image, index,) =>
                           ({source: image, fallbackName: `${fallbackName} #${index + 1}`,}))}/>
            )}</>
        },)
    }

    protected abstract _createContentOption(enumeration: MysteryMushrooms,): PossibleRenderReactElement

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(() => this._createContentOption(MysteryMushroomAppOption.CALLBACK_TO_GET_ENUMERATION()),)
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent
    }


    protected _createImageContent(renderDiv: boolean,): ReactElement {
        return EMPTY_REACT_ELEMENT
    }

    public renderImageContent(enumeration: MysteryMushrooms, renderDiv: boolean = false,): ReactElement {
        MysteryMushroomAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumeration
        return this._createImageContent(renderDiv,)
    }

    protected _renderImageContent(renderDiv: boolean = true,): ReactElement {
        return this._createImageContent(renderDiv,)
    }

    public _createSoundContent(renderDiv: boolean,): ReactElement {
        return EMPTY_REACT_ELEMENT
    }

    public renderSoundContent(enumeration: MysteryMushrooms,): ReactElement {
        MysteryMushroomAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumeration
        return this._createSoundContent(false)
    }

    protected _renderSoundContent(renderDiv: boolean = true,): ReactElement {
        return this._createSoundContent(renderDiv,)
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent

    private get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption(),)
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return MysteryMushroomAppOption
    }

    public static getValue(value: PossibleValueByEnumerable<MysteryMushroomAppOption>,): MysteryMushroomAppOption {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<MysteryMushroomAppOption> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

type ReferenceCallback = (reference: MysteryMushroom,) => | boolean | NotApplicable

import type {CollectionHolder, CollectionIterator}              from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {SoundEffects}        from 'core/soundEffect/SoundEffects'
import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/SoundEffectAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

import {CommonOptions}                  from 'app/options/CommonOptions'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import {Games}                          from 'core/game/Games'
import SoundEffectComponent             from 'core/soundEffect/SoundEffect.component'
import {SoundEffectCategories}          from 'core/soundEffectCategory/SoundEffectCategories'
import SimpleSoundComponent             from 'util/file/sound/component/SimpleSound.component'

export abstract class SoundEffectAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<SoundEffects> {

    //region -------------------- Enum instances --------------------

    public static readonly SMM1_AND_SMM3DS_ICON = new class GameStyleAppOption_SMM1AndSMM3DSIcon extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return SoundEffectAppOption.renderSMM1And3DSImage(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.smm1And3dsGameHeader
        }

    }()
    public static readonly SMM2_ICON =            new class GameStyleAppOption_SMM2Icon extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return SoundEffectAppOption.renderSMM2Image(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.smm2GameHeader
        }

    }()
    public static readonly NAME =                 new class GameStyleAppOption_Name extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return CommonOptions.get.getNameContent(enumeration)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }()
    public static readonly CATEGORY =             new class GameStyleAppOption_Category extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            const {reference,} = enumeration

            return CommonOptions.get.getCategoryContent(enumeration, () => SoundEffectCategories.getValueByName(reference.categoryEnglish).imageFile,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.categoryHeader
        }

    }()
    public static readonly PLAYER_BEHAVIOUR =     new class GameStyleAppOption_PlayerBehaviour extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return enumeration.reference.playerSoundEffectTriggerContainer.createNewComponent(enumeration.englishName,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'player behaviour', element: unfinishedText('Player behaviour'),}//TODO add Player behaviour
        }

    }()
    public static readonly SOUNDS =               new class GameStyleAppOption_PlayerBehaviour extends SoundEffectAppOption {

        protected override _createContentOption({englishName, sounds_exclusiveSmm1, sounds_standaloneSmm1, sounds_smm2,}: SoundEffects,) {
            const isSMM1Empty = sounds_exclusiveSmm1.length === 0,
                isSMM2Empty = sounds_smm2.length === 0

            if (isSMM1Empty && isSMM2Empty)
                return null
            return <div key={`${englishName} (sound effect sounds)`} className={`soundEffect-sounds-container ${isSMM1Empty || isSMM2Empty ? ` soundEffect-sounds-smm${isSMM1Empty ? 2 : 1}-only-container` : ''}`}>
                {isSMM1Empty
                    ? null
                    : <div key={`${englishName} (sound effect sounds - SMM1&3DS)`} className="soundEffect-sounds-smm1-container">
                        {sounds_standaloneSmm1.map(sound => <div key={`${englishName} (sound effect sound - SMM1&3DS - ${sound.key})`} className="soundEffect-sound-container soundEffect-sound-smm1-container col-12 col-lg-6 col-xl-4 col-xxl-3">
                            <SimpleSoundComponent file={sound} title={`${englishName} (${sound.key})`}/>
                        </div>)}
                    </div>}
                {isSMM2Empty
                    ? null
                    : <div key={`${englishName} (sound effect sounds (SMM2))`} className="soundEffect-sounds-smm2-container">
                        {sounds_smm2.map(sound => <div key={`${englishName} (sound effect sound - SMM2 - ${sound.key})`} className="soundEffect-sound-container soundEffect-sound-smm2-container col-12 col-lg-6 col-xl-4 col-xxl-3">
                            <SimpleSoundComponent file={sound} title={`${englishName} (${sound.key})`}/>
                        </div>)}
                    </div>}
            </div>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'sounds', element: <UnfinishedText>Sounds</UnfinishedText>,}//TODO add sounds
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<SoundEffectAppOption, typeof SoundEffectAppOption> = class CompanionEnum_SoundEffectAppOption
        extends CompanionEnum<SoundEffectAppOption, typeof SoundEffectAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundEffectAppOption

        private constructor() {
            super(SoundEffectAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_SoundEffectAppOption()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    public static renderSMM1And3DSImage(enumerable: SoundEffects,): ReactElement {
        const reference = enumerable.reference

        return reference.isInSuperMarioMaker1 ? <SoundEffectComponent reference={enumerable} name={reference} game={Games.SUPER_MARIO_MAKER_1}/> : null
    }

    public static renderSMM2Image(enumerable: SoundEffects,): ReactElement {
        const reference = enumerable.reference

        return reference.isInSuperMarioMaker2 ? <SoundEffectComponent reference={enumerable} name={reference} game={Games.SUPER_MARIO_MAKER_2}/> : null
    }

    protected abstract _createContentOption(enumeration: SoundEffects,): ReactElement

    public renderContent(enumeration: SoundEffects,): readonly [ReactElement,] {
        return [this._createContentOption(enumeration,),]
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent

    public renderTableHeader(): NullOr<SingleHeaderContent> {
        return this._createTableHeaderOption()
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<SoundEffectAppOption>,): SoundEffectAppOption {
        return SoundEffectAppOption.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<SoundEffectAppOption> {
        return SoundEffectAppOption.CompanionEnum.get.values
    }

    public static [Symbol.iterator](): CollectionIterator<SoundEffectAppOption> {
        return SoundEffectAppOption.CompanionEnum.get[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {SoundEffects}        from 'core/soundEffect/SoundEffects'
import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/SoundEffectAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

import {CommonOptions}                          from 'app/options/CommonOptions'
import UnfinishedText, {unfinishedText}         from 'app/tools/text/UnfinishedText'
import {Games}                                  from 'core/game/Games'
import SMM1And3DSOnlySoundEffectSoundsComponent from 'core/soundEffect/SMM1And3DSOnlySoundEffectSounds.component'
import SMM2OnlySoundEffectSoundsComponent       from 'core/soundEffect/SMM2OnlySoundEffectSounds.component'
import SoundEffectComponent                     from 'core/soundEffect/SoundEffect.component'
import SoundEffectSoundsComponent               from 'core/soundEffect/SoundEffectSounds.component'
import {SoundEffectCategories}                  from 'core/soundEffectCategory/SoundEffectCategories'

import SMM1 = Games.SMM1
import SMM2 = Games.SMM2

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

    }('smm1AndSmm3ds-icon',)
    public static readonly SMM2_ICON =            new class GameStyleAppOption_SMM2Icon extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return SoundEffectAppOption.renderSMM2Image(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.smm2GameHeader
        }

    }('smm2-icon',)
    public static readonly NAME =                 new class GameStyleAppOption_Name extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return CommonOptions.get.getNameContent(enumeration)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly CATEGORY =             new class GameStyleAppOption_Category extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            const {reference,} = enumeration

            return CommonOptions.get.getCategoryContent(enumeration, () => SoundEffectCategories.CompanionEnum.get.getValueByName(reference.categoryEnglish,).imageFile,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.categoryHeader
        }

    }('category',)
    public static readonly PLAYER_BEHAVIOUR =     new class GameStyleAppOption_PlayerBehaviour extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return enumeration.reference.playerSoundEffectTrigger.createNewComponent(enumeration.englishName,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'player behaviour', element: unfinishedText('Player behaviour'),}//TODO add Player behaviour
        }

    }('playerBehaviour',)
    public static readonly SOUNDS =               new class GameStyleAppOption_Sounds extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return <SoundEffectSoundsComponent reference={enumeration}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'sounds', element: <UnfinishedText>Sounds</UnfinishedText>,}//TODO add sounds
        }

    }('sounds',)
    public static readonly SOUNDS_IN_SMM1_AND_3DS_ONLY = new class GameStyleAppOption_SoundsInSMM1And3DSOnly extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return <SMM1And3DSOnlySoundEffectSoundsComponent reference={enumeration}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'sounds', element: <UnfinishedText>Sounds</UnfinishedText>,}//TODO add sounds
        }

    }('sounds',)
    public static readonly SOUNDS_IN_SMM2_ONLY = new class GameStyleAppOption_SoundsInSMM2Only extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,) {
            return <SMM2OnlySoundEffectSoundsComponent reference={enumeration}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'sounds', element: <UnfinishedText>Sounds</UnfinishedText>,}//TODO add sounds
        }

    }('sounds',)

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

    readonly #associatedClass
    readonly #additionalClasses

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super()
        this.#additionalClasses = [this.#associatedClass = associatedClass,] as const
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get associatedClass(): string {
        return this.#associatedClass
    }

    public get additionalClasses(): readonly [string,] {
        return this.#additionalClasses
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    public static renderSMM1And3DSImage(enumerable: SoundEffects,): ReactElement {
        const reference = enumerable.reference

        return reference.isInSuperMarioMaker1 ? <SoundEffectComponent reference={enumerable} name={reference} game={SMM1}/> : null
    }

    public static renderSMM2Image(enumerable: SoundEffects,): ReactElement {
        const reference = enumerable.reference

        return reference.isInSuperMarioMaker2 ? <SoundEffectComponent reference={enumerable} name={reference} game={SMM2}/> : null
    }

    protected abstract _createContentOption(enumeration: SoundEffects,): ReactElement

    public renderContent(enumeration: SoundEffects,): readonly [ReactElement,] {
        return [this._createContentOption(enumeration,),]
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

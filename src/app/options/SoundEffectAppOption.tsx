import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOr}                 from '@joookiwi/type'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}                      from 'app/options/SoundEffectAppOption.types'
import type {SimpleImageHeader, SimpleReactHeader} from 'app/tools/table/SimpleHeader'
import type {SoundEffects}                         from 'core/soundEffect/SoundEffects'

import {CommonOptions}            from 'app/options/CommonOptions'
import {TableOption}              from 'app/tools/table/TableOption'
import {unfinishedText}           from 'app/tools/text/UnfinishedText'
import {Games}                    from 'core/game/Games'
import SoundEffectComponent       from 'core/soundEffect/SoundEffect.component'
import Smm1Or3dsSoundEffectSounds from 'core/soundEffect/component/Smm1Or3dsSoundEffectSounds'
import Smm2SoundEffectSounds      from 'core/soundEffect/component/Smm2SoundEffectSounds'
import {SoundEffectCategories}    from 'core/soundEffectCategory/SoundEffectCategories'
import SoundEffectCategoryIcon    from 'core/soundEffectCategory/component/SoundEffectCategoryIcon'
import {Empty}                    from 'util/emptyVariables'

import CategoryCompanion = SoundEffectCategories.Companion
import EMPTY_STRING =      Empty.EMPTY_STRING
import SMM1 =              Games.SMM1
import SMM2 =              Games.SMM2

export abstract class SoundEffectAppOption
    extends TableOption<SoundEffects, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly SMM1_AND_SMM3DS_ICON = new class GameStyleAppOption_SMM1AndSMM3DSIcon extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): NullOr<ReactJSXElement> {
            return SoundEffectAppOption.renderSMM1And3DSImage(enumeration,)
        }

        public override renderHeader(): SimpleImageHeader {
            return CommonOptions.get.smm1And3dsGameHeader
        }

    }('smm1AndSmm3ds-icon',)
    public static readonly SMM2_ICON =            new class GameStyleAppOption_SMM2Icon extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): NullOr<ReactJSXElement> {
            return SoundEffectAppOption.renderSMM2Image(enumeration,)
        }

        public override renderHeader(): SimpleImageHeader {
            return CommonOptions.get.smm2GameHeader
        }

    }('smm2-icon',)

    public static readonly NAME =                 new class GameStyleAppOption_Name extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): NullOr<ReactJSXElement> {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly CATEGORY =             new class GameStyleAppOption_Category extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): NullOr<ReactJSXElement> {
            const name = enumeration.reference.categoryAmericanEnglish
            if (name === EMPTY_STRING)
                return null
            return <SoundEffectCategoryIcon reference={CategoryCompanion.getValueByName(name,)}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.categoryHeader
        }

    }('category',)
    public static readonly PLAYER_BEHAVIOUR =     new class GameStyleAppOption_PlayerBehaviour extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): ReactJSXElement {
            return enumeration.reference.playerSoundEffectTrigger.createNewComponent(enumeration.englishName,)
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'player behaviour', element: unfinishedText('Player behaviour',),}//TODO add Player behaviour
        }

    }('playerBehaviour',)

    public static readonly SOUNDS_IN_SMM1_AND_3DS = new class GameStyleAppOption_SoundsInSMM1And3DSOnly extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): ReactJSXElement {
            return <Smm1Or3dsSoundEffectSounds value={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.soundsInSmm1And3dsHeader
        }

    }('smm1And3ds-sounds',)
    public static readonly SOUNDS_IN_SMM1_AND_3DS_ONLY = new class GameStyleAppOption_SoundsInSMM1And3DSOnly extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): ReactJSXElement {
            return <Smm1Or3dsSoundEffectSounds value={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.soundsHeader
        }

    }('sounds',)
    public static readonly SOUNDS_IN_SMM2 = new class GameStyleAppOption_SoundsInSMM2Only extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): ReactJSXElement {
            return <Smm2SoundEffectSounds value={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.soundsInSmm2Header
        }

    }('smm2-sounds',)
    public static readonly SOUNDS_IN_SMM2_ONLY = new class GameStyleAppOption_SoundsInSMM2Only extends SoundEffectAppOption {

        public override renderContent(enumeration: SoundEffects,): ReactJSXElement {
            return <Smm2SoundEffectSounds value={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.soundsHeader
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
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super(associatedClass,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace SoundEffectAppOption {

    /** @deprecated This should be replaced with something else */
    export function renderSMM1And3DSImage(enumerable: SoundEffects,): NullOr<ReactJSXElement> {
        const reference = enumerable.reference

        return reference.isInSuperMarioMaker1 ? <SoundEffectComponent reference={enumerable} name={reference} game={SMM1}/> : null
    }

    /** @deprecated This should be replaced with something else */
    export function renderSMM2Image(enumerable: SoundEffects,): NullOr<ReactJSXElement> {
        const reference = enumerable.reference

        return reference.isInSuperMarioMaker2 ? <SoundEffectComponent reference={enumerable} name={reference} game={SMM2}/> : null
    }

}

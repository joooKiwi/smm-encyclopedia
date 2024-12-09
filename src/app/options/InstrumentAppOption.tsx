import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {getFirstOrNullByArray}       from '@joookiwi/collection'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}   from 'app/options/InstrumentAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'
import type {Instruments}       from 'core/instrument/Instruments'

import {CommonOptions} from 'app/options/CommonOptions'
import Image           from 'app/tools/images/Image'
import {TableOption}   from 'app/tools/table/TableOption'
import {Entities}      from 'core/entity/Entities'
import {GameStyles}    from 'core/gameStyle/GameStyles'
import GameStyleImage  from 'core/gameStyle/component/GameStyleImage'
import InstrumentSound from 'core/instrument/component/InstrumentSound'

import EntityCompanion = Entities.Companion
import NSMBU =           GameStyles.NSMBU
import SMB =             GameStyles.SMB
import SMB3 =            GameStyles.SMB3
import SMW =             GameStyles.SMW

export abstract class InstrumentAppOption
    extends TableOption<Instruments, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class InstrumentAppOption_Name extends InstrumentAppOption {

        public override renderContent(enumeration: Instruments,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly REFERENCE_SMB = new class InstrumentAppOption_Name extends InstrumentAppOption {

        public override renderContent(enumeration: Instruments,) {
            const references = enumeration.reference.entities
            if (references == null)
                return null
            return <div className="instrumentReference-smb">{references.map(it =>
                <Image key={`instrument reference (SMB - ${it.english})`} file={getFirstOrNullByArray(EntityCompanion.getValueByName(it.americanEnglish,).image.get(SMB,),)}/>,)
            }</div>
        }

        public override renderHeader() {
            return {key: 'reference-smb', element: <GameStyleImage reference={SMB}/>, } as const satisfies SimpleReactHeader
        }

    }('reference-smb',)
    public static readonly REFERENCE_SMB3 = new class InstrumentAppOption_Name extends InstrumentAppOption {

        public override renderContent(enumeration: Instruments,) {
            const references = enumeration.reference.entities
            if (references == null)
                return null
            return <div className="instrumentReference-smb3">{references.map(it =>
                <Image key={`instrument reference (SMB3 - ${it.english})`} file={getFirstOrNullByArray(EntityCompanion.getValueByName(it.americanEnglish,).image.get(SMB3,),)}/>,)
            }</div>
        }

        public override renderHeader() {
            return {key: 'reference-smb3', element: <GameStyleImage reference={SMB3}/>, } as const satisfies SimpleReactHeader
        }

    }('reference-smb3',)
    public static readonly REFERENCE_SMW = new class InstrumentAppOption_Name extends InstrumentAppOption {

        public override renderContent(enumeration: Instruments,) {
            const references = enumeration.reference.entities
            if (references == null)
                return null
            return <div className="instrumentReference-smw">{references.map(it =>
                <Image key={`instrument reference (SMW - ${it.english})`} file={getFirstOrNullByArray(EntityCompanion.getValueByName(it.americanEnglish,).image.get(SMW,),)}/>,)
            }</div>
        }

        public override renderHeader() {
            return {key: 'reference-smw', element: <GameStyleImage reference={SMW}/>, } as const satisfies SimpleReactHeader
        }

    }('reference-smb3',)
    public static readonly REFERENCE_NSMBU = new class InstrumentAppOption_Name extends InstrumentAppOption {

        public override renderContent(enumeration: Instruments,) {
            const references = enumeration.reference.entities
            if (references == null)
                return null
            return <div className="instrumentReference-nsmbu">{references.map(it =>
                <Image key={`instrument reference (NSMBU - ${it.english})`} file={getFirstOrNullByArray(EntityCompanion.getValueByName(it.americanEnglish,).image.get(NSMBU,),)}/>,)
            }</div>
        }

        public override renderHeader() {
            return {key: 'reference-nsmbu', element: <GameStyleImage reference={NSMBU}/>, } as const satisfies SimpleReactHeader
        }

    }('reference-smb3',)
    public static readonly SOUND = new class InstrumentAppOption_Sound extends InstrumentAppOption {

        public override renderContent(enumeration: Instruments,) {
            return <InstrumentSound value={enumeration}/>
        }

        public override renderHeader() {
            return CommonOptions.get.soundHeader
        }

    }('sound',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<InstrumentAppOption, typeof InstrumentAppOption> = class CompanionEnum_InstrumentAppOption
        extends CompanionEnum<InstrumentAppOption, typeof InstrumentAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_InstrumentAppOption

        private constructor() {
            super(InstrumentAppOption,)
        }

        public static get get() {
            return this.#instance ??= new this()
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

import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName, PossibleType} from 'app/property/PowerUpPriorityTypes.types'
import type {ClassWithType}                                    from 'core/ClassWithType'
import type {CompanionEnumByTypeSingleton}                     from 'util/enumerable/Singleton.types'

import {CompanionEnumByType} from 'util/enumerable/companion/CompanionEnumByType'

/** @usedByTheRouting */
export class PowerUpPriorityTypes
    extends Enum<Ordinals, Names>
    implements ClassWithType<PossibleType> {

    //region -------------------- Sub class --------------------

    private static readonly SinglePowerUpPriorityTypes = class SinglePowerUpPriorityTypes extends PowerUpPriorityTypes {

        public constructor(type: PossibleType, routeName: PossibleRouteName,) {
            super(type, routeName,)
        }

        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get powerUpRouteName(): PossibleRouteName {
            return 'noPriority'
        }

        public override get rideRouteName(): PossibleRouteName {
            return 'noPriority'
        }

        public override get hatRouteName(): PossibleRouteName {
            return 'noPriority'
        }

        public override get noneColor(): PossibleColor {
            return 'warning'
        }

    }
    private static readonly DoublePowerUpPriorityTypes = class DoublePowerUpPriorityTypes extends PowerUpPriorityTypes {

        public constructor(type: PossibleType, routeName: PossibleRouteName,) {
            super(type, routeName,)
        }

        public override get allColor(): PossibleColor {
            return 'warning'
        }


        public override get isPowerUpSelected() {
            return true
        }

        public override get powerUpColor(): PossibleColor {
            return 'success'
        }


        public override get isRideSelected() {
            return true
        }

        public override get rideColor(): PossibleColor {
            return 'success'
        }


        public override get isHatSelected() {
            return true
        }

        public override get hatColor(): PossibleColor {
            return 'success'
        }


        public override get noneColor(): PossibleColor {
            return 'warning'
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly ALL = new class PowerUpPriorityTypes_All extends PowerUpPriorityTypes {

        public override get isAllSelected() {
            return true as const
        }

        public override get allColor(): PossibleColor {
            return 'success'
        }

        public override get allRouteName() {
            return null
        }


        public override get powerUpRouteName(): PossibleRouteName {
            return 'everyRide&HatPriority'
        }

        public override get powerUpColor(): PossibleColor {
            return 'success'
        }


        public override get rideRouteName(): PossibleRouteName {
            return 'everyPowerUp&HatPriority'
        }

        public override get rideColor(): PossibleColor {
            return 'success'
        }


        public override get hatRouteName(): PossibleRouteName {
            return 'everyPowerUp&RidePriority'
        }

        public override get hatColor(): PossibleColor {
            return 'success'
        }


        public override get noneColor(): PossibleColor {
            return 'danger'
        }


    }('all', 'everyPowerUp&Ride&HatPriority',)
    public static readonly POWER_UP_AND_RIDE = new class PowerUpPriorityTypes_PowerUpAndRide extends PowerUpPriorityTypes.DoublePowerUpPriorityTypes {

        public override get powerUpRouteName(): PossibleRouteName {
            return 'everyRidePriority'
        }

        public override get rideRouteName(): PossibleRouteName {
            return 'everyPowerUpPriority'
        }


        public override get isHatSelected() {
            return false as const
        }

        public override get hatRouteName(): PossibleRouteName {
            return 'everyPowerUp&Ride&HatPriority'
        }

        public override get hatColor(): PossibleColor {
            return 'danger'
        }

    }('power-up & ride', 'everyPowerUp&RidePriority',)
    public static readonly POWER_UP_AND_HAT = new class PowerUpPriorityTypes_PowerUpAndHat extends PowerUpPriorityTypes.DoublePowerUpPriorityTypes {

        public override get powerUpRouteName(): PossibleRouteName {
            return 'everyHatPriority'
        }


        public override get isRideSelected() {
            return false as const
        }

        public override get rideRouteName(): PossibleRouteName {
            return 'everyPowerUp&Ride&HatPriority'
        }

        public override get rideColor(): PossibleColor {
            return 'danger'
        }


        public override get hatRouteName(): PossibleRouteName {
            return 'everyPowerUpPriority'
        }

    }('power-up & hat', 'everyPowerUp&HatPriority',)
    public static readonly RIDE_AND_HAT = new class PowerUpPriorityTypes_RideAndHat extends PowerUpPriorityTypes.DoublePowerUpPriorityTypes {

        public override get isPowerUpSelected() {
            return false as const
        }

        public override get powerUpRouteName(): PossibleRouteName {
            return 'everyPowerUp&Ride&HatPriority'
        }

        public override get powerUpColor(): PossibleColor {
            return 'danger'
        }


        public override get rideRouteName(): PossibleRouteName {
            return 'everyHatPriority'
        }

        public override get hatRouteName(): PossibleRouteName {
            return 'everyRidePriority'
        }

    }('ride & hat', 'everyRide&HatPriority',)
    public static readonly POWER_UP = new class PowerUpPriorityTypes_PowerUp extends PowerUpPriorityTypes.SinglePowerUpPriorityTypes {

        public override get isPowerUpSelected() {
            return true as const
        }

        public override get powerUpColor(): PossibleColor {
            return 'success'
        }

        public override get rideRouteName(): PossibleRouteName {
            return 'everyPowerUp&RidePriority'
        }

        public override get hatRouteName(): PossibleRouteName {
            return 'everyPowerUp&HatPriority'
        }

    }('power-up', 'everyPowerUpPriority',)
    public static readonly RIDE = new class PowerUpPriorityTypes_Ride extends PowerUpPriorityTypes.SinglePowerUpPriorityTypes {

        public override get powerUpRouteName(): PossibleRouteName {
            return 'everyPowerUp&RidePriority'
        }

        public override get hatRouteName(): PossibleRouteName {
            return 'everyRide&HatPriority'
        }

        public override get isRideSelected() {
            return true as const
        }

        public override get rideColor(): PossibleColor {
            return 'success'
        }

    }('ride', 'everyRidePriority',)
    public static readonly HAT = new class PowerUpPriorityTypes_Hat extends PowerUpPriorityTypes.SinglePowerUpPriorityTypes {

        public override get powerUpRouteName(): PossibleRouteName {
            return 'everyPowerUp&HatPriority'
        }

        public override get rideRouteName(): PossibleRouteName {
            return 'everyRide&HatPriority'
        }

        public override get isHatSelected() {
            return true as const
        }

        public override get hatColor(): PossibleColor {
            return 'success'
        }

    }('hat', 'everyHatPriority',)
    public static readonly NONE = new class PowerUpPriorityTypes_None extends PowerUpPriorityTypes {

        public override get isNoneSelected() {
            return true as const
        }

        public override get noneRouteName() {
            return null
        }

    }('all', 'noPriority',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByTypeSingleton<string, PowerUpPriorityTypes, typeof PowerUpPriorityTypes> = class CompanionEnum_PowerUpPriorityTypes
        extends CompanionEnumByType<string, PowerUpPriorityTypes, typeof PowerUpPriorityTypes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_PowerUpPriorityTypes

        private constructor() {
            super(PowerUpPriorityTypes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_PowerUpPriorityTypes()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #type
    readonly #routeName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(type: PossibleType, routeName: PossibleRouteName,) {
        super()
        this.#type = type
        this.#routeName = routeName
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): PossibleType {
        return this.#type
    }

    public get routeName(): PossibleRouteName {
        return this.#routeName
    }

    //region -------------------- Link button methods --------------------

    public get isAllSelected(): boolean {
        return false
    }

    public get allRouteName(): NullOr<Extract<PossibleRouteName, 'everyPowerUp&Ride&HatPriority'>> {
        return 'everyPowerUp&Ride&HatPriority'
    }

    public get allColor(): PossibleColor {
        return 'danger'
    }


    public get isPowerUpSelected(): boolean {
        return false
    }

    public get powerUpRouteName(): PossibleRouteName {
        return 'everyPowerUpPriority'
    }

    public get powerUpColor(): PossibleColor {
        return 'danger'
    }


    public get isRideSelected(): boolean {
        return false
    }

    public get rideRouteName(): PossibleRouteName {
        return 'everyRidePriority'
    }

    public get rideColor(): PossibleColor {
        return 'danger'
    }


    public get isHatSelected(): boolean {
        return false
    }

    public get hatRouteName(): PossibleRouteName {
        return 'everyHatPriority'
    }

    public get hatColor(): PossibleColor {
        return 'danger'
    }


    public get isNoneSelected(): boolean {
        return true
    }

    public get noneRouteName(): NullOr<Extract<PossibleRouteName, 'noPriority'>> {
        return 'noPriority'
    }

    public get noneColor(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Link button methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>

/** @template */
export interface PlayerSoundEffectTriggerTemplate {

    movement: {

        jumpAfterLanding: boolean

        turnAroundAfterBeingAtFullSpeed: boolean

        crouch: boolean

        after3SecondsRepeatedly: boolean

    }

    interaction: {

        collectPowerUp: boolean

        getIntoAnEntity: boolean

    }

    environment: {

        spawn: boolean

        damage: boolean

        lostALife: boolean
    }

}

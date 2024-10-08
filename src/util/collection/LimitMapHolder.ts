import {filterNotNull} from '@joookiwi/collection'

import type {Entity} from 'core/entity/Entity'

import {Limits}  from 'core/limit/Limits'

export class LimitMapHolder<const out REFERENCE extends Entity, > {

    //region -------------------- Fields --------------------

    readonly #reference

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(reference: REFERENCE,) {
        this.#reference = reference
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------


    public get reference(): REFERENCE {
        return this.#reference
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    /**
     * Create a new map of limit based on the {@link Limits} received.
     *
     * @param values the values (null are ignored)
     */
    #newMap(...values: readonly Nullable<Limits>[]): ReadonlyMap<Limits, boolean> {
        const newValues = filterNotNull(values,)
        return new Map(Limits.CompanionEnum.get.values.map(limit => [limit, newValues.has(limit,),],),)
    }

    public toLimitMap(): ReadonlyMap<Limits, boolean> {
        return new Map([...this.toEditorLimitMap(), ...this.toPlayLimitMap(),])
    }

    public toEditorLimitMap(): ReadonlyMap<Limits, boolean> {
        const reference = this.reference
        const editorLimits = [reference.editorLimit_smm1And3ds, reference.editorLimit_smm2,]

        return this.#newMap(...editorLimits.map(editorLimit => editorLimit instanceof Limits ? editorLimit : null))
    }

    public toPlayLimitMap(): ReadonlyMap<Limits, boolean> {
        const reference = this.reference
        const otherLimits = reference.otherLimit

        return this.#newMap(
            reference.isInGeneralLimit === true ? Limits.GENERAL_ENTITY_LIMIT : null,
            reference.isInGlobalGeneralLimit === true ? Limits.GENERAL_ENTITY_LIMIT : null,
            reference.isInPowerUpLimit === true ? Limits.POWER_UP_ENTITY_LIMIT : null,
            reference.isInProjectileLimit === true ? Limits.PROJECTILE_LIMIT : null,
            reference.isInRenderedObjectLimit === true ? Limits.RENDERED_OBJECT_LIMIT : null,
            reference.isInCollectedCoinLimit === true ? Limits.COLLECTED_COIN_LIMIT : null,
            otherLimits instanceof Limits ? otherLimits : null,
        )
    }

    //endregion -------------------- Convertor methods --------------------

}

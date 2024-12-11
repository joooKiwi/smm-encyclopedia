import type {Array, Nullable} from '@joookiwi/type'

import type {Entity} from 'core/entity/Entity'

import {Limits}            from 'core/limit/Limits'
import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

import Companion = Limits.Companion

export class LimitMapHolder<const REFERENCE extends Entity, > {

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
    #newMap(...values: Array<Nullable<Limits>>): ReadonlyMap<Limits, boolean> {
        const newValues = new ArrayAsCollection(values,).filterNotNull()
        return new Map(Companion.values.map(limit => [limit, newValues.has(limit,),],),)
    }

    public toLimitMap(): ReadonlyMap<Limits, boolean> {
        return new Map([...this.toEditorLimitMap(), ...this.toPlayLimitMap(),])
    }

    public toEditorLimitMap(): ReadonlyMap<Limits, boolean> {
        const reference = this.reference
        const editorLimits = [reference.editorLimit_smm1And3ds, reference.editorLimit_smm2,]

        return this.#newMap(...new ArrayAsCollection(editorLimits,).map(editorLimit => editorLimit instanceof Limits ? editorLimit : null))
    }

    public toPlayLimitMap(): ReadonlyMap<Limits, boolean> {
        const reference = this.reference
        const otherLimits = reference.otherLimit

        return this.#newMap(
            reference.isInGeneralLimit === true ? Limits.GENERAL_ENTITY_LIMIT : null,
            reference.isInGlobalGeneralLimit === true ? Limits.GENERAL_ENTITY_LIMIT : null,
            reference.isInPowerUpLimit === true ? Limits.POWER_UP_ENTITY_LIMIT : null,
            reference.isInProjectileLimit === true ? Limits.PROJECTILE_LIMIT : null,
            reference.isInDynamicRenderedObjectLimit === true ? Limits.DYNAMIC_RENDERED_OBJECT_LIMIT : null,
            reference.isInCollectedLooseCoinLimit === true ? Limits.COLLECTED_LOOSE_COIN_LIMIT : null,
            otherLimits instanceof Limits ? otherLimits : null,
        )
    }

    //endregion -------------------- Convertor methods --------------------

}

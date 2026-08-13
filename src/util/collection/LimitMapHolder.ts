import type {Array, Nullable}    from '@joookiwi/type'
import {ArrayAsCollectionHolder} from '@joookiwi/collection'

import type {Entity} from 'core/entity/Entity'

import {Limits} from 'core/limit/Limits'

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
    #newMap(values: Array<Nullable<Limits>>): ReadonlyMap<Limits, boolean> {
        const newValues = new ArrayAsCollectionHolder(values,).filterNotNull()
        return new Map(Companion.values.map(limit => [limit, newValues.has(limit,),],),)
    }

    public toLimitMap(): ReadonlyMap<Limits, boolean> {
        return new Map([...this.toEditorLimitMap(), ...this.toPlayLimitMap(),])
    }

    public toEditorLimitMap(): ReadonlyMap<Limits, boolean> {
        const reference = this.reference
        const editorLimits = [reference.editorLimit_smm1And3ds, reference.editorLimit_smm2,]

        return this.#newMap(new ArrayAsCollectionHolder(editorLimits,).map(it => it instanceof Limits ? it : null,).toArray(),)
    }

    public toPlayLimitMap(): ReadonlyMap<Limits, boolean> {
        const reference = this.reference
        const otherLimits = reference.otherLimit

        return this.#newMap([
            reference.isInGeneralLimit ? Limits.GENERAL_ENTITY_LIMIT : null,
            reference.isInGlobalGeneralLimit ? Limits.GENERAL_ENTITY_LIMIT : null,
            reference.isInPowerUpLimit ? Limits.POWER_UP_ENTITY_LIMIT : null,
            reference.isInProjectileLimit ? Limits.PROJECTILE_LIMIT : null,
            reference.isInDynamicRenderedObjectLimit ? Limits.DYNAMIC_RENDERED_OBJECT_LIMIT : null,
            reference.isInCollectedLooseCoinLimit ? Limits.COLLECTED_LOOSE_COIN_LIMIT : null,
            otherLimits instanceof Limits ? otherLimits : null,
        ],)
    }

    //endregion -------------------- Convertor methods --------------------

}

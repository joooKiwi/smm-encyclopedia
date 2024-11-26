import type {Lazy}   from '@joookiwi/lazy'
import type {NullOr} from '@joookiwi/type'

import type {EntityBehaviour, PossibleGroup}           from 'core/behaviour/EntityBehaviour'
import type {PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {Entity}                                   from 'core/entity/Entity'

export class EntityBehaviourContainer
    implements EntityBehaviour {

    //region -------------------- Fields --------------------

    readonly #acronym
    readonly #translationKey
    readonly #isOnlineOnly
    readonly #isMultiplayerOnly
    readonly #groupLink
    readonly #entityLink

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(acronym: PossibleAcronym,
                       translationKey: PossibleTranslationKeys,
                       isOnlineOnly: boolean, isMultiplayerOnly: boolean,
                       groupLink: Lazy<PossibleGroup>, entityLink: Lazy<NullOr<Entity>>,) {
        this.#acronym = acronym
        this.#translationKey = translationKey
        this.#isOnlineOnly = isOnlineOnly
        this.#isMultiplayerOnly = isMultiplayerOnly
        this.#groupLink = groupLink
        this.#entityLink = entityLink
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get acronym(): PossibleAcronym {
        return this.#acronym
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#translationKey
    }


    public get isOnlineOnly() {
        return this.#isOnlineOnly
    }

    public get isMultiplayerOnly() {
        return this.#isMultiplayerOnly
    }


    public get groupLink() {
        return this.#groupLink.value
    }

    public get entityLink() {
        return this.#entityLink.value
    }

    //endregion -------------------- Getter methods --------------------

}

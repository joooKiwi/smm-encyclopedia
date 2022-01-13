import {EntityBehaviour}                          from './EntityBehaviour';
import {EntityBehaviourLink}                      from './properties/EntityBehaviourLink';
import {EntityBehaviourIsInOnly}                  from './properties/EntityBehaviourIsInOnly';
import {PossibleAcronym, PossibleTranslationKeys} from './EntityBehaviours.types';

export class EntityBehaviourContainer
    implements EntityBehaviour {

    //region -------------------- Attributes --------------------

    readonly #acronym;
    readonly #translationKey;
    readonly #isInOnlyContainer;
    readonly #linkContainer;

    //endregion -------------------- Attributes --------------------

    public constructor(acronym: PossibleAcronym, translationKey: PossibleTranslationKeys, isInOnly: EntityBehaviourIsInOnly, link: EntityBehaviourLink,) {
        this.#acronym = acronym;
        this.#translationKey = translationKey;
        this.#isInOnlyContainer = isInOnly;
        this.#linkContainer = link;
    }


    public get acronym(): PossibleAcronym {
        return this.#acronym;
    }

    public get translationKey(): PossibleTranslationKeys {
        return this.#translationKey;
    }

    //region -------------------- Is in only --------------------

    public get isInOnlyContainer() {
        return this.#isInOnlyContainer;
    }

    public get isOnlineOnly() {
        return this.isInOnlyContainer.isOnlineOnly;
    }

    public get isMultiplayerOnly() {
        return this.isInOnlyContainer.isMultiplayerOnly;
    }

    //endregion -------------------- Is in only --------------------
    //region -------------------- Links --------------------

    public get linkContainer() {
        return this.#linkContainer;
    }

    public get groupLink() {
        return this.linkContainer.groupLink;
    }

    public get entityLink() {
        return this.linkContainer.entityLink;
    }

    //endregion -------------------- Links --------------------

}

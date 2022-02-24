import type {Entity}       from '../entity/Entity';
import type {GameProperty} from '../entity/properties/GameProperty';
import type {GameStyle}    from './GameStyle';
import type {Name}         from '../../lang/name/Name';
import type {ObjectHolder} from '../../util/holder/ObjectHolder';

import {ClassContainingAName}         from '../../lang/name/ClassContainingAName';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';

export class GameStyleContainer
    extends ClassContainingAName<string>
    implements GameStyle {

    //region -------------------- Attributes --------------------

    readonly #isInProperty;
    readonly #entities: ObjectHolder<readonly Entity[]>;

    //endregion -------------------- Attributes --------------------

    //TODO change to object holder directly instead of creating the object holder instance here.
    public constructor(name: () => Name<string>, isInProperty: GameProperty, entities: () => readonly Entity[],) {
        super(name,);
        this.#isInProperty = isInProperty;
        this.#entities = new DelayedObjectHolderContainer(entities);
    }

    //region -------------------- Game properties --------------------

    public get isInProperty() {
        return this.#isInProperty;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------

    public get entities() {
        return this.#entities.get;
    }

}
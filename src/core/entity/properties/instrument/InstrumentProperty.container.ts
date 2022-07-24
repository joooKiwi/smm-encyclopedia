import type {CanMakeASoundOutOfAMusicBlock}                             from './loader.types';
import type {CanMakeASoundOutOfAMusicBlockProperty, InstrumentProperty} from './InstrumentProperty';
import type {ExtendedMap}                                               from '../../../../util/extended/ExtendedMap';
import type {Instrument}                                                from '../../../instrument/Instrument';
import type {ObjectHolder}                                              from '../../../../util/holder/ObjectHolder';
import type {PossibleInstrument}                                        from '../../../instrument/loader.types';

import {ExtendedMapContainer} from '../../../../util/extended/ExtendedMap.container';

export class InstrumentPropertyContainer
    implements InstrumentProperty {

    //region -------------------- Fields, constructor & methods --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<Key, InstrumentProperty> = new ExtendedMapContainer();

    readonly #instrumentsHolder: ObjectHolder<readonly Instrument[]>;
    readonly #canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlockProperty;

    //region -------------------- Fields --------------------
    //endregion -------------------- Fields --------------------

    private constructor([instruments, canMakeASoundOutOfAMusicBlock,]: ArgumentsReceived,) {
        this.#instrumentsHolder = instruments;
        this.#canMakeASoundOutOfAMusicBlock = canMakeASoundOutOfAMusicBlock;
    }

    //region -------------------- Getter methods --------------------

    public get instruments() {
        return this.#instrumentsHolder.get;
    }

    //region -------------------- Can make a sound out of a music block --------------------

    public get canMakeASoundOutOfAMusicBlockContainer() {
        return this.#canMakeASoundOutOfAMusicBlock;
    }

    public get canMakeASoundOutOfAMusicBlock() {
        return this.canMakeASoundOutOfAMusicBlockContainer.value;
    }

    public get canMakeASoundOutOfAMusicBlockComment() {
        return this.canMakeASoundOutOfAMusicBlockContainer.comment;
    }

    //endregion -------------------- Can make a sound out of a music block --------------------

    //endregion -------------------- Getter methods --------------------

    //endregion -------------------- Fields, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------


    public static get(argumentsReceived: ArgumentsReceived, key: Key,): InstrumentProperty {
        return this.#EVERY_CONTAINERS.if(map => map.has(key))
            .isNotMet(map => map.set(key, new this(argumentsReceived,),))
            .get(key);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type Key = readonly [
    name: PossibleInstrument,
    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock,
];

type ArgumentsReceived = readonly [
    intruments: ObjectHolder<readonly Instrument[]>,
    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlockProperty,
];

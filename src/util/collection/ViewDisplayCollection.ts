import {GenericCollectionHolder} from '@joookiwi/collection'

import {ViewDisplays} from 'app/withInterpreter/ViewDisplays'

export class ViewDisplayCollection<const T extends ViewDisplays = ViewDisplays, const REFERENCE extends Iterable<T> = Iterable<T>, >
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllViewDisplay?: & ViewDisplayWithSimpleList<T> & ViewDisplayWithCardList<T> & ViewDisplayWithTable<T>
    #hasSimpleList?: ViewDisplayWithSimpleList<T>
    #hasCardList?: ViewDisplayWithCardList<T>
    #hasSimpleOrCardList?: & ViewDisplayWithSimpleList<T> & ViewDisplayWithCardList<T>
    #hasTable?: & ViewDisplayWithTable<T>

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /**
     * The collection has every view display ({@link ViewDisplays.SIMPLE_LIST},
     * {@link ViewDisplays.CARD_LIST} & {@link ViewDisplays.TABLE}) type in its values
     */
    public get hasAllViewDisplay(): & ViewDisplayWithSimpleList<T> & ViewDisplayWithCardList<T> & ViewDisplayWithTable<T> {
        return this.#hasAllViewDisplay = this.hasAll(ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST, ViewDisplays.TABLE,) as & ViewDisplayWithSimpleList<T> & ViewDisplayWithCardList<T> & ViewDisplayWithTable<T>
    }

    /** The collection has the {@link ViewDisplays.SIMPLE_LIST} type in its values */
    public get hasSimpleList(): ViewDisplayWithSimpleList<T> {
        return this.#hasSimpleList ??= this.hasOne(ViewDisplays.SIMPLE_LIST,) as ViewDisplayWithSimpleList<T>
    }

    /** The collection has the {@link ViewDisplays.CARD_LIST} type in its values */
    public get hasCardList(): ViewDisplayWithCardList<T> {
        return this.#hasCardList ??= this.hasOne(ViewDisplays.CARD_LIST,) as ViewDisplayWithCardList<T>
    }

    /** The collection has the {@link ViewDisplays.SIMPLE_LIST} or {@link ViewDisplays.CARD_LIST} type in its values */
    public get hasSimpleOrCardList(): & ViewDisplayWithSimpleList<T> & ViewDisplayWithCardList<T> {
        return this.#hasSimpleOrCardList ??= this.hasOne(ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST,) as & ViewDisplayWithSimpleList<T> & ViewDisplayWithCardList<T>
    }

    /** The collection has the {@link ViewDisplays.TABLE} type in its values */
    public get hasSMM2(): ViewDisplayWithTable<T> {
        return this.#hasTable ??= this.hasOne(ViewDisplays.TABLE,) as ViewDisplayWithTable<T>
    }

    //endregion -------------------- Getter methods --------------------

}

type ViewDisplayWithSimpleList<T extends ViewDisplays, > = T extends typeof ViewDisplays['SIMPLE_LIST'] ? true : false
type ViewDisplayWithCardList<T extends ViewDisplays, > = T extends typeof ViewDisplays['CARD_LIST'] ? true : false
type ViewDisplayWithTable<T extends ViewDisplays, > = T extends typeof ViewDisplays['TABLE'] ? true : false

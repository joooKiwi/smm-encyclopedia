import type {Enumerable} from '@joookiwi/enumerable'
import {Enum}            from '@joookiwi/enumerable'

import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

/**
 * An <b>enum class</b> that is the common inheritor to be used in
 * the {@link import('app/tools/table/Table') Table element}
 * with everything necessary to be rendered
 */
export abstract class TableOption<const T extends Enumerable = Enumerable,
    const ORDINAL extends number = number,
    const NAME extends string = string, >
    extends Enum<ORDINAL, NAME> {

    //region -------------------- Fields --------------------

    readonly #associatedClass

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(associatedClass: string) {
        super()
        this.#associatedClass = associatedClass
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    /** The {@link HTMLElement.className} associated to the option */
    public get associatedClass(): string {
        return this.#associatedClass
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract renderContent(t: T,): ReactElement

    public abstract renderHeader(): SingleHeaderContent

    //endregion -------------------- Methods --------------------

}

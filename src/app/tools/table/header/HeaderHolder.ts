import type {SingleHeaderContent} from '../SimpleHeader'
import type {ReactElement}        from '../../../../util/react/ReactProperties'

export interface HeaderHolder {

    get header(): SingleHeaderContent

    //region -------------------- Other headers --------------------

    get parent(): | HeaderHolder | null

    set parent(value: | HeaderHolder | null,)

    setParent(value: null,): never

    setParent(value: HeaderHolder,): this

    get subHeaders(): readonly HeaderHolder[]

    set subHeaders(value: readonly HeaderHolder[],)

    setSubHeaders(value: readonly HeaderHolder[],): this

    //endregion -------------------- Other headers --------------------
    //region -------------------- Sub level --------------------

    /**
     * The sub-level of the header.
     *
     * @note It is always a positive number (with 0 as a possible value)
     */
    get subLevel(): number

    //endregion -------------------- Sub level --------------------
    //region -------------------- Height --------------------

    /**
     * The height of the header
     *
     * @note It is always over 1
     */
    get height(): number

    //endregion -------------------- Height --------------------
    //region -------------------- Width --------------------

    /**
     * The width of the header
     *
     * @note It is always over 1
     */
    get width(): number

    //endregion -------------------- Width --------------------
    //region -------------------- Render --------------------

    get wasRendered(): boolean

    setRendered(value: boolean,): this

    resetRendered(): this

    render(isHead: boolean,): ReactElement

    renderHead(): ReactElement

    renderFoot(): ReactElement

    //endregion -------------------- Render --------------------


}

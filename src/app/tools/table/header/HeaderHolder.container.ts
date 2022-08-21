import type {HeaderHolder}        from './HeaderHolder';
import type {SingleHeaderContent} from '../SimpleHeader';
import type {ReactElement}        from '../../../../util/react/ReactProperties';

import {assert}              from '../../../../util/utilitiesMethods';
import {EMPTY_REACT_ELEMENT} from '../../../../util/emptyReactVariables';

export class HeaderHolderContainer
    implements HeaderHolder {

    //region -------------------- Fields --------------------

    static readonly #INSTANCES = new Map<string, HeaderHolderContainer[]>();
    static readonly #MAXIMUM_SUB_LEVEL_MAP = new Map<string, number>();
    static readonly #EMPTY_ARRAY = [];

    readonly #tableIdentifier: string;
    readonly #header;
    #parent: | HeaderHolder | null;
    #subHeaders?: readonly HeaderHolder[];
    #subLevel?: number;
    #width?: number;
    #height?: number;
    #wasRendered;
    readonly #callbackToRenderHead: (headerHolder: this,) => ReactElement;
    readonly #callbackToRenderFoot: (headerHolder: this,) => ReactElement;

    //endregion -------------------- Fields --------------------

    public constructor(tableIdentifier: string, header: SingleHeaderContent, callbackToRenderHead: (headerHolder: HeaderHolder,) => ReactElement, callbackToRenderFoot: (headerHolder: HeaderHolder,) => ReactElement,) {
        this.#tableIdentifier = tableIdentifier;
        this.#parent = null;
        this.#header = header;
        this.#wasRendered = false;
        this.#callbackToRenderHead = callbackToRenderHead;
        this.#callbackToRenderFoot = callbackToRenderFoot;

        HeaderHolderContainer.#addInstance(this);
    }

    //region -------------------- Getter methods --------------------

    static #addInstance(instance: HeaderHolderContainer,): void {
        const map = this.#INSTANCES;
        const tableIdentifier = instance.#tableIdentifier;
        const array = map.has(tableIdentifier) ? map.get(tableIdentifier)! : map.set(tableIdentifier, [],).get(tableIdentifier)!;

        array.push(instance);
    }

    static #getEveryInstances(tableIdentifier: string,): readonly HeaderHolder[] {
        return this.#INSTANCES.get(tableIdentifier)!;
    }

    static #getMaximumSubLevel(tableIdentifier: string,): number {
        const map = this.#MAXIMUM_SUB_LEVEL_MAP;
        if (map.has(tableIdentifier))
            return map.get(tableIdentifier)!;

        let maximumSubLevel = this.#getEveryInstances(tableIdentifier)
            .reduce((previousHeader, header,) => previousHeader.subLevel < header.subLevel ? header : previousHeader).subLevel;

        return map.set(tableIdentifier, maximumSubLevel,).get(tableIdentifier)!;
    }

    public get header(): SingleHeaderContent {
        return this.#header;
    }

    //region -------------------- Other headers --------------------

    public get parent(): | HeaderHolder | null {
        return this.#parent;
    }

    public set parent(value: | HeaderHolder | null,) {
        this.setParent(value);
    }

    public setParent(value: null,): never
    public setParent(value: HeaderHolder,): this
    // @ts-ignore
    private setParent(value: | HeaderHolder | null,): | this | never
    public setParent(value: | HeaderHolder | null,): | this | never {
        assert(value != null, 'The value to set the parent cannot be null.',);
        this.#parent = value;
        return this;
    }

    public get subHeaders(): readonly HeaderHolder[] {
        return this.#subHeaders ??= HeaderHolderContainer.#EMPTY_ARRAY;
    }

    public set subHeaders(value: readonly HeaderHolder[],) {
        this.setSubHeaders(value);
    }

    public setSubHeaders(value: readonly HeaderHolder[],): this {
        if (value.length !== 0)
            this.#subHeaders = value;
        return this;
    }

    //endregion -------------------- Other headers --------------------
    //region -------------------- Sub level --------------------

    public get subLevel(): number {
        if (this.#subLevel == null) {
            let currentSubLevel = 0;
            let parent: this['parent'] = this.parent;
            while (parent != null) {
                currentSubLevel++;
                parent = parent.parent;
            }
            this.#subLevel = currentSubLevel;
        }
        return this.#subLevel;
    }

    //endregion -------------------- Sub level --------------------
    //region -------------------- Height --------------------

    public get height(): number {
        if (this.#height == null) {
            let currentHeight = 1;
            if (this.width === 1)
                currentHeight += HeaderHolderContainer.#getMaximumSubLevel(this.#tableIdentifier,) - this.subLevel;
            this.#height = currentHeight;
        }
        return this.#height;
    }

    //endregion -------------------- Height --------------------
    //region -------------------- Width --------------------

    public get width(): number {
        if (this.#width == null) {
            const subHeadersWidth = this.subHeaders.reduce((widthSum, header,) => widthSum + header.width, 1,);
            this.#width = subHeadersWidth === 1 ? 1 : subHeadersWidth - 1;
        }
        return this.#width;
    }

    //endregion -------------------- Width --------------------
    //region -------------------- Render --------------------

    public get wasRendered(): boolean {
        return this.#wasRendered;
    }

    public setRendered(value: boolean,): this {
        this.#wasRendered = value;
        return this;
    }

    public resetRendered(): this {
        return this.setRendered(false);
    }

    public render(isHead: boolean,): ReactElement {
        return isHead ? this.renderHead() : this.renderFoot();
    }

    public renderHead(): ReactElement {
        if (this.wasRendered)
            return EMPTY_REACT_ELEMENT;
        this.setRendered(true);
        return this.#callbackToRenderHead(this);
    }

    public renderFoot(): ReactElement {
        if (this.wasRendered)
            return EMPTY_REACT_ELEMENT;
        this.setRendered(true);
        return this.#callbackToRenderFoot(this);
    }

    //endregion -------------------- Render --------------------

    //endregion -------------------- Getter methods --------------------

}
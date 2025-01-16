import type BaseComponent      from 'bootstrap/js/dist/base-component'
import type {ComponentOptions} from 'bootstrap/js/dist/base-component'

import type {BootstrapInstanceDeclaration}                                from 'bootstrap/BootstrapInstance.declaration'

import {assert} from 'util/utilitiesMethods'

export abstract class BootstrapInstance<const INSTANCE extends BaseComponent,
    const OPTION extends ComponentOptions,
    const ELEMENT extends HTMLElement = HTMLElement,
    const ID extends string = string, >
    implements BootstrapInstanceDeclaration<INSTANCE, ELEMENT, ID> {

    //region -------------------- Fields --------------------

    readonly #element: ELEMENT
    readonly #elementId: ID
    readonly #instance: INSTANCE

    //endregion -------------------- Fields --------------------

    protected constructor(element: | ID | ELEMENT, options: Partial<OPTION>,) {
        if (typeof element === 'string') {
            const htmlElement = document.getElementById(element)
            assert(htmlElement != null, `The element id "${element}" has no html reference.`,)
            this.#element = htmlElement as ELEMENT
            this.#elementId = element
        } else {
            this.#element = element
            this.#elementId = element.id as ID
        }
        this.#instance = this._createInstance(options)
    }

    protected abstract _createInstance(options: Partial<OPTION>,): INSTANCE

    //region -------------------- Getter methods --------------------

    public get id(): ID {
        return this.#elementId
    }

    public get element(): ELEMENT {
        return this.#element
    }

    public get instance(): INSTANCE {
        return this.#instance
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract destroy(): void

    //endregion -------------------- Methods --------------------

}

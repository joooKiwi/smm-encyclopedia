import type BaseComponent from 'bootstrap/js/dist/base-component'

export interface BootstrapInstanceDeclaration<out INSTANCE extends BaseComponent = BaseComponent,
    out ELEMENT extends Element = Element,
    out ID extends string = string, > {

    get id(): ID

    get element(): ELEMENT

    get instance(): INSTANCE


    destroy(): void

}

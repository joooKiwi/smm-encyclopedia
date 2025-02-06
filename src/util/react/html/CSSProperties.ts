import 'react'

export type SingleCSSProperty<T extends string = string, > = {

    [cssVariable in CSSVariable<T>]: string

}

/** A variable in a CSS block */
export type CSSVariable<T extends string = string, > = `--${T}`

declare module 'react' {
    export interface CSSProperties {

        [cssVariable: CSSVariable]: string

    }
}

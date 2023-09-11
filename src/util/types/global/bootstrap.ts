export {}

declare global {

    /** Every colour applicable to a Boostrap colour */
    type BootstrapColor = | BootstrapThemeColor | BootstrapBasicColor

    /** The basic colours used for most Bootstrap coloration when having a variant */
    type BootstrapThemeColor = | 'primary' | 'secondary'//|'tertiary'
                               | 'light' | 'dark'
                               | 'success' | 'info' | 'warning' | 'danger'

    /** The basic colours used by bootstrap for a basic coloration */
    type BootstrapBasicColor = | 'white' | 'gray' | 'gray-dark'
                               | 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan'

    type PossibleTooltipPlacement = | 'top' | 'bottom' | 'left' | 'right'
    type PossibleBootstrapDimension = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

}

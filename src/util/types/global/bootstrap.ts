export {}

declare global {

    type BootstrapColor = | 'primary' | 'secondary'//|'tertiary'
                          | 'light' | 'dark'
                          | 'success' | 'info' | 'warning' | 'danger'
                          | 'white' | 'gray' | 'gray-dark'
                          | 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan'

    type PossibleTooltipPlacement = | 'top' | 'bottom' | 'left' | 'right'
    type PossibleBootstrapDimension = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

}

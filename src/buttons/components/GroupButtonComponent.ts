export interface GroupButtonComponents<T> {
    elements: readonly T[];
    isChoiceGroup: boolean;
    isOutline?: boolean;
    isVertical?: boolean;
    color: 'primary' | 'secondary'
        | 'light' | 'dark'
        | 'success' | 'info' | 'warning' | 'danger'
        | 'white' | 'gray' | 'gray-dark'
        | 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan';
    groupName: string;
}
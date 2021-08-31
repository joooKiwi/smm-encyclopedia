export type PossibleGroupName = string;

export type SingleEntityName = string;
export type EntityLink = Exclude<| 'this' | SingleEntityName | `${SingleEntityName | 'this'} / ${'this' | SingleEntityName}`, 'this / this'>;
export type PossibleLightSource = | '?' | `${'Dim' | 'Full'} light` | 'Project a light in front of them' | 'Variable' | null;

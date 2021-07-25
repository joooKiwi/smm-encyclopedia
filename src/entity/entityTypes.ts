export type ProjectileEntityLimitType = | boolean | '?' | 'Temporary as it comes out' | null;

export type EntityLink = | 'this' | string | `${string | 'this'} / ${'this' | string}`;
export type PossibleLightSource = | '?' | `${'Dim' | 'Full'} light` | 'Project a light in front of them' | 'Variable' | null;
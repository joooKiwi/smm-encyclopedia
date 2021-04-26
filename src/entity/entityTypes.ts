export type EntityLimit = '';
export type ProjectileEntityLimitType = null | boolean | '?' | 'Temporary as it comes out';

export type EntityLink = 'this' | string | `${string} / ${string}`;
export type PossibleLightSource = null | '?' | `${'Dim' | 'Full'} light` | 'Project a light in front of them' | 'Variable';
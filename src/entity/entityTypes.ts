export type NullableBoolean = null | boolean;
export type NullableBooleanOrNSMBU = NullableBoolean | 'NSMBU';
export type NullableBooleanOrSM3DW = NullableBoolean | 'SM3DW';
export type UnknownOrNullableBoolean = '?' | NullableBoolean;
export type UnknownOrBoolean = '?' | boolean;

export type NullableNumber = null | number;

export type NullableString = null | string;

export type EntityLimit = '';
export type ProjectileEntityLimitType = UnknownOrNullableBoolean | 'Temporary as it comes out';

export type EntityLink = 'this' | string | `${string} / ${string}`;
export type CategoryType = 'Terrain' | 'Item' | 'Gizmo' | 'Enemy';
export type PossibleLightSource = null | '?' | `${'Dim' | 'Full'} light` | 'Project a light in front of them' | 'Variable';
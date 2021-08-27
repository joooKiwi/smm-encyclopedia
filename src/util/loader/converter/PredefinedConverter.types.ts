import type {PredefinedConverter} from './PredefinedConverter';
import type {SimpleEnum}          from '../../enum/EnumTypes';

//region -------------------- Number types --------------------

export type PredefinedConverterOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;// | 8 | 9;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type PredefinedConverterNames = `${| 'NULLABLE_' | ''}${| 'NUMBER' | 'BOOLEAN' | 'STRING' | 'HEADER'}` | 'EMPTYABLE_STRING';

//region -------------------- Predefined converter texts --------------------

export type PrimitiveConversion = | 'boolean' | 'number' | 'string';
// export type HeaderConversion = 'header';
export type SingleString = 'single string';
export type BasicPredefinedConversion = | PrimitiveConversion | SingleString;// | HeaderConversion;
export type NullablePredefinedConversion = `nullable ${BasicPredefinedConversion}`;
export type EmptyableString = 'emptyable string';
export type PredefinedConversion = | NullablePredefinedConversion | BasicPredefinedConversion | EmptyableString;

//endregion -------------------- Predefined converter texts --------------------

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimplePredefinedConverter<T = PredefinedConverter, > = SimpleEnum<PredefinedConverterNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type PredefinedConverterArray<T = PredefinedConverter, > = readonly [
    SimplePredefinedConverter<T>['NUMBER'], SimplePredefinedConverter<T>['NULLABLE_NUMBER'],
    SimplePredefinedConverter<T>['BOOLEAN'], SimplePredefinedConverter<T>['NULLABLE_BOOLEAN'],
    SimplePredefinedConverter<T>['STRING'], SimplePredefinedConverter<T>['EMPTYABLE_STRING'], SimplePredefinedConverter<T>['NULLABLE_STRING'],
    // SimplePredefinedConverter<T>['HEADER'], SimplePredefinedConverter<T>['NULLABLE_HEADER'],
];

//endregion -------------------- Array types --------------------

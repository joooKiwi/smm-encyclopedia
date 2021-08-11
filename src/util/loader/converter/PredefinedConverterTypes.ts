import type {PredefinedConverter} from './PredefinedConverter';
import type {SimpleEnum}          from '../../enum/EnumTypes';

//region -------------------- Predefined converter texts --------------------

export type PrimitiveConversion = | 'boolean' | 'number' | 'string';
export type NullablePredefinedConversion = `nullable ${PrimitiveConversion}`;
export type PredefinedConversion = | NullablePredefinedConversion | PrimitiveConversion | 'emptyable string';

//endregion -------------------- Predefined converter texts --------------------
//region -------------------- Enum types --------------------

export type PredefinedConverterOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type PredefinedConverterNames = `${| 'NULLABLE_' | ''}${| 'NUMBER' | 'BOOLEAN' | 'STRING'}` | 'EMPTYABLE_STRING';
export type SimplePredefinedConverter<T = PredefinedConverter, > = SimpleEnum<PredefinedConverterNames, T>;
export type PredefinedConverterArray<T = PredefinedConverter, > = readonly [
    SimplePredefinedConverter<T>['NUMBER'], SimplePredefinedConverter<T>['NULLABLE_NUMBER'],
    SimplePredefinedConverter<T>['BOOLEAN'], SimplePredefinedConverter<T>['NULLABLE_BOOLEAN'],
    SimplePredefinedConverter<T>['STRING'], SimplePredefinedConverter<T>['EMPTYABLE_STRING'], SimplePredefinedConverter<T>['NULLABLE_STRING'],
];

//endregion -------------------- Enum types --------------------
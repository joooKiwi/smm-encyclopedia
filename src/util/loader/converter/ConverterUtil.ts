export class ConverterUtil {

    private constructor() {
        throw new EvalError('The converter util class cannot be created');
    }


    public static convertToBoolean(value: string): boolean {
        value = value.toLowerCase();
        return value === 'true' || value === '1';
    }

    public static convertToNullableString(value: string): string | null {
        let lowerCaseValue = value.toLowerCase();
        return lowerCaseValue === '' || lowerCaseValue === 'null' || lowerCaseValue === 'undefined' ? null : value;
    }

    public static convertToEmptyableString(value: string): string | null {
        return value === '' ? null : value;
    }

    public static convertToNumber(value: string): number {
        return Number(value);
    }

}

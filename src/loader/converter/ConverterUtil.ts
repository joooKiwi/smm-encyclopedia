export class ConverterUtil {

    private constructor() {
        throw new EvalError('The converter util class cannot be created');
    }


    public static convertToBoolean(value: string): boolean {
        value = value.toLowerCase();
        return value === 'true' || value === '1';
    }

    public static convertToNullableValue(value: string): string | null {
        value = value.toLowerCase();
        return value === '' || value === 'null' ? null : value;
    }

    public static convertToNumber(value: string): number {
        return Number(value);
    }


}
export class ConverterUtil {

    private constructor() {
        throw new EvalError('The converter util class cannot be created');
    }


    public static convertToBoolean(value: string): boolean {
        value = value.toLowerCase();
        return value === 'true' || value === '1';
    }

    public static convertToNumber(value: string): number {
        return Number(value);
    }


}
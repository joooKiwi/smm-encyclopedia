export class ConverterPatterns {

    private constructor() {
        throw new EvalError('The converter patterns cannot be constructed');
    }

    public static readonly BOOLEAN_PATTERN = /true|false|0|1/i;
    public static readonly NUMBER_PATTERN = /\d+/;


}
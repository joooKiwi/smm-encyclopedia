export class ConverterPatterns {

    private constructor() {
        throw new EvalError('The converter patterns cannot be constructed');
    }

    /**
     * Any value inside the possibilities true,false,0 or 1.
     * All of that in case insensitive.
     */
    public static readonly BOOLEAN_PATTERN = /^(true|false|0|1)$/i;
    /**
     * Any number in a string regex
     */
    public static readonly NUMBER_PATTERN = /^\d+$/;
    /**
     * A non empty string regex
     */
    public static readonly EMPTYABLE_STRING_PATTERN = /./;
    /**
     * An empty string or the value null.
     * All of that in case insensitive.
     */
    public static readonly NULLABLE_STRING_PATTERN = /.|null|undefined/i;


}

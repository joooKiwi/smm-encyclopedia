export function isArrayEquals<A1 extends readonly any[], A2 extends readonly any[], >(firstArray: A1, secondArray: A2,): boolean {
    if (firstArray.length !== secondArray.length)
        return false;

    const length = firstArray.length;

    for (let i = 0; i < length; i++)
        if (firstArray[i] !== secondArray[i])
            return false;

    return true;
}

export interface ClassThatCanAddItems<T> {

    add(...values: readonly T[]): this

    push(...values: readonly T[]): this

    //region -------------------- & Get --------------------

    addAndGet<V extends T = T, >(value: V,): V

    addAndGet<V extends T[] = T[], >(...values: V): V

    addAndGet<V extends readonly T[] = readonly T[], >(...values: V): V

    pushAndGet<V extends T = T, >(value: V,): V

    pushAndGet<V extends T[] = T[], >(...values: V): V

    pushAndGet<V extends readonly T[] = readonly T[], >(...values: V): V

    //endregion -------------------- & Get --------------------

}

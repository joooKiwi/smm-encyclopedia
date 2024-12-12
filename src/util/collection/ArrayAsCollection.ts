import type {Nullable, NullableNumber, NullableString, NullOr, NullOrNumber, NullOrUndefined}                                                                                                                                                                   from '@joookiwi/type'
import type {CollectionHolder}                                                                                                                                                                                                                                  from '@joookiwi/collection'
import type {MinimalistCollectionHolder}                                                                                                                                                                                                                        from '@joookiwi/collection'
import type {CollectionIterator}                                                                                                                                                                                                                                from '@joookiwi/collection'
import type {BooleanCallback, IndexValueCallback, IndexValueWithReturnCallback, IndexWithReturnCallback, RestrainedBooleanCallback, ReverseBooleanCallback, ReverseRestrainedBooleanCallback, StringCallback, ValueIndexCallback, ValueIndexWithReturnCallback} from '@joookiwi/collection'

import {AbstractCollectionHolder}                    from '@joookiwi/collection'
import {LazyGenericCollectionHolder}                 from '@joookiwi/collection'
import {EmptyCollectionException}                    from '@joookiwi/collection'
import {ForbiddenIndexException}                     from '@joookiwi/collection'
import {IndexOutOfBoundsException}                   from '@joookiwi/collection'
import {allByArray}                                  from '@joookiwi/collection'
import {anyByArray}                                  from '@joookiwi/collection'
import {dropByArray}                                 from '@joookiwi/collection'
import {dropLastByArray}                             from '@joookiwi/collection'
import {dropLastWhileByArray}                        from '@joookiwi/collection'
import {dropLastWhileIndexedByArray}                 from '@joookiwi/collection'
import {dropWhileByArray}                            from '@joookiwi/collection'
import {dropWhileIndexedByArray}                     from '@joookiwi/collection'
import {filterByArray}                               from '@joookiwi/collection'
import {filterIndexedByArray}                        from '@joookiwi/collection'
import {filterNotByArray}                            from '@joookiwi/collection'
import {filterNotIndexedByArray}                     from '@joookiwi/collection'
import {findFirstByArray}                            from '@joookiwi/collection'
import {findFirstOrNullByArray}                      from '@joookiwi/collection'
import {findFirstIndexedByArray}                     from '@joookiwi/collection'
import {findFirstIndexedOrNullByArray}               from '@joookiwi/collection'
import {findLastByArray}                             from '@joookiwi/collection'
import {findLastOrNullByArray}                       from '@joookiwi/collection'
import {findLastIndexedByArray}                      from '@joookiwi/collection'
import {findLastIndexedOrNullByArray}                from '@joookiwi/collection'
import {firstIndexOfByArray}                         from '@joookiwi/collection'
import {firstIndexOfOrNullByArray}                   from '@joookiwi/collection'
import {forEachByArray}                              from '@joookiwi/collection'
import {forEachIndexedByArray}                       from '@joookiwi/collection'
import {getFirstByArray}                             from '@joookiwi/collection'
import {getLastByArray}                              from '@joookiwi/collection'
import {getOrElseByArray}                            from '@joookiwi/collection'
import {getOrNullByArray}                            from '@joookiwi/collection'
import {getFirstOrNullByArray}                       from '@joookiwi/collection'
import {getLastOrNullByArray}                        from '@joookiwi/collection'
import {hasByArray}                                  from '@joookiwi/collection'
import {hasAllWithArrayByArray}                      from '@joookiwi/collection'
import {hasAllWithCollectionHolderByArray}           from '@joookiwi/collection'
import {hasAllWithCollectionIteratorByArray}         from '@joookiwi/collection'
import {hasAllWithIterableByArray}                   from '@joookiwi/collection'
import {hasAllWithMinimalistCollectionHolderByArray} from '@joookiwi/collection'
import {hasAllWithSetByArray}                        from '@joookiwi/collection'
import {hasDuplicateByArray}                         from '@joookiwi/collection'
import {hasOneWithArrayByArray}                      from '@joookiwi/collection'
import {hasOneWithCollectionHolderByArray}           from '@joookiwi/collection'
import {hasOneWithCollectionIteratorByArray}         from '@joookiwi/collection'
import {hasOneWithIterableByArray}                   from '@joookiwi/collection'
import {hasOneWithMinimalistCollectionHolderByArray} from '@joookiwi/collection'
import {hasOneWithSetByArray}                        from '@joookiwi/collection'
import {hasNullByArray}                              from '@joookiwi/collection'
import {indexOfFirstByArray}                         from '@joookiwi/collection'
import {indexOfFirstIndexedByArray}                  from '@joookiwi/collection'
import {indexOfFirstIndexedOrNullByArray}            from '@joookiwi/collection'
import {indexOfFirstOrNullByArray}                   from '@joookiwi/collection'
import {indexOfLastByArray}                          from '@joookiwi/collection'
import {indexOfLastIndexedByArray}                   from '@joookiwi/collection'
import {indexOfLastIndexedOrNullByArray}             from '@joookiwi/collection'
import {indexOfLastOrNullByArray}                    from '@joookiwi/collection'
import {joinToStringByArray}                         from '@joookiwi/collection'
import {lastIndexOfByArray}                          from '@joookiwi/collection'
import {lastIndexOfOrNullByArray}                    from '@joookiwi/collection'
import {noneByArray}                                 from '@joookiwi/collection'
import {mapByArray}                                  from '@joookiwi/collection'
import {mapIndexedByArray}                           from '@joookiwi/collection'
import {mapNotNullByArray}                           from '@joookiwi/collection'
import {mapNotNullIndexedByArray}                    from '@joookiwi/collection'
import {onEachByArray}                               from '@joookiwi/collection'
import {onEachIndexedByArray}                        from '@joookiwi/collection'
import {sliceWithARangeByArray}                      from '@joookiwi/collection'
import {sliceWithArrayByArray}                       from '@joookiwi/collection'
import {sliceWithIterableByArray}                    from '@joookiwi/collection'
import {sliceWithCollectionHolderByArray}            from '@joookiwi/collection'
import {sliceWithCollectionIteratorByArray}          from '@joookiwi/collection'
import {sliceWithMinimalistCollectionHolderByArray}  from '@joookiwi/collection'
import {sliceWithSetByArray}                         from '@joookiwi/collection'
import {takeByArray}                                 from '@joookiwi/collection'
import {takeLastByArray}                             from '@joookiwi/collection'
import {takeLastWhileByArray}                        from '@joookiwi/collection'
import {takeLastWhileIndexedByArray}                 from '@joookiwi/collection'
import {takeWhileByArray}                            from '@joookiwi/collection'
import {takeWhileIndexedByArray}                     from '@joookiwi/collection'
import {toArrayByArray}                              from '@joookiwi/collection'
import {toIteratorByArray}                           from '@joookiwi/collection'
import {toLocaleLowerCaseStringByArray}              from '@joookiwi/collection'
import {toLocaleStringByArray}                       from '@joookiwi/collection'
import {toLocaleUpperCaseStringByArray}              from '@joookiwi/collection'
import {toLowerCaseStringByArray}                    from '@joookiwi/collection'
import {toMapByArray}                                from '@joookiwi/collection'
import {toMutableArrayByArray}                       from '@joookiwi/collection'
import {toMutableMapByArray}                         from '@joookiwi/collection'
import {toMutableSetByArray}                         from '@joookiwi/collection'
import {toReverseByArray}                            from '@joookiwi/collection'
import {toSetByArray}                                from '@joookiwi/collection'
import {toStringByArray}                             from '@joookiwi/collection'
import {toUpperCaseStringByArray}                    from '@joookiwi/collection'

import {Empty} from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

/** A {@link CollectionHolder} meant adapt an {@link ReadonlyArray Array} or {@link Array MutableArray} */
export class ArrayAsCollection<const T, >
    extends AbstractCollectionHolder<T>
    implements CollectionHolder<T> {

    //region -------------------- Fields --------------------

    readonly #reference

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: readonly T[],) {
        super()
        this.#reference = reference
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get reference(): readonly T[] {
        return this.#reference
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //#region -------------------- Size methods --------------------

    public override get size(): this['reference']['length'] {
        return this.reference.length
    }

    //#endregion -------------------- Size methods --------------------
    //region -------------------- Research methods --------------------

    //region -------------------- Get --------------------

    public override get(index: number,): T {
        if (this.isEmpty)
            throw new EmptyCollectionException(null, index,)

        if (Number.isNaN(index,))
            throw new ForbiddenIndexException('Forbidden index. The index cannot be NaN.', index,)
        if (index === Number.NEGATIVE_INFINITY)
            throw new ForbiddenIndexException('Forbidden index. The index cannot be -∞.', index,)
        if (index === Number.POSITIVE_INFINITY)
            throw new ForbiddenIndexException('Forbidden index. The index cannot be +∞.', index,)

        const array = this.reference
        if (index in array)
            return array[index] as T

        const size = this.size
        if (index > size)
            throw new IndexOutOfBoundsException(`Index out of bound. The index “${index}” is over the size of the collection (${size}).`, index,)
        if (index === size)
            throw new IndexOutOfBoundsException(`Index out of bound. The index “${index}” is the size of the collection (${size}).`, index,)
        if (index >= 0)
            return array[index] as T

        const indexToRetrieve = index + size
        if (indexToRetrieve < 0)
            throw new IndexOutOfBoundsException(`Index out of bound. The index “${index}” (${indexToRetrieve} after calculation) is under 0.`, index,)
        return array[indexToRetrieve] as T
    }

    public override getFirst(): T {
        return getFirstByArray(this.reference,)
    }

    public override getLast(): T {
        return getLastByArray(this.reference,)
    }


    public override getOrElse<const U, >(index: number, defaultValue: IndexWithReturnCallback<U>,): | T | U
    public override getOrElse(index: number, defaultValue: IndexWithReturnCallback<T>,): T
    public override getOrElse(index: number, defaultValue: IndexWithReturnCallback<unknown>,) {
        return getOrElseByArray(this.reference, index, defaultValue,)
    }


    public override getOrNull(index: number,): NullOr<T> {
        return getOrNullByArray(this.reference, index,)
    }

    public override getFirstOrNull(): NullOr<T> {
        return getFirstOrNullByArray(this.reference,)
    }

    public override getLastOrNull(): NullOr<T> {
        return getLastOrNullByArray(this.reference,)
    }

    //endregion -------------------- Get --------------------
    //region -------------------- Find first --------------------

    public override findFirst<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): S
    public override findFirst(predicate: BooleanCallback<T>,): T
    public override findFirst(predicate: BooleanCallback<T>,) {
        return findFirstByArray(this.reference, predicate,)
    }

    public override findFirstOrNull<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): NullOr<S>
    public override findFirstOrNull(predicate: BooleanCallback<T>,): NullOr<T>
    public override findFirstOrNull(predicate: BooleanCallback<T>,) {
        return findFirstOrNullByArray(this.reference, predicate,)
    }

    public override findFirstIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): S
    public override findFirstIndexed(predicate: ReverseBooleanCallback<T>,): T
    public override findFirstIndexed(predicate: ReverseBooleanCallback<T>,) {
        return findFirstIndexedByArray(this.reference, predicate,)
    }

    public override findFirstIndexedOrNull<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): NullOr<S>
    public override findFirstIndexedOrNull(predicate: ReverseBooleanCallback<T>,): NullOr<T>
    public override findFirstIndexedOrNull(predicate: ReverseBooleanCallback<T>,) {
        return findFirstIndexedOrNullByArray(this.reference, predicate,)
    }

    //endregion -------------------- Find first --------------------
    //region -------------------- Find last --------------------

    public override findLast<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): S
    public override findLast(predicate: BooleanCallback<T>,): T
    public override findLast(predicate: BooleanCallback<T>,) {
        return findLastByArray(this.reference, predicate,)
    }

    public override findLastOrNull<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): NullOr<S>
    public override findLastOrNull(predicate: BooleanCallback<T>,): NullOr<T>
    public override findLastOrNull(predicate: BooleanCallback<T>,) {
        return findLastOrNullByArray(this.reference, predicate,)
    }

    public override findLastIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): S
    public override findLastIndexed(predicate: ReverseBooleanCallback<T>,): T
    public override findLastIndexed(predicate: ReverseBooleanCallback<T>,) {
        return findLastIndexedByArray(this.reference, predicate,)
    }

    public override findLastIndexedOrNull<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): NullOr<S>
    public override findLastIndexedOrNull(predicate: ReverseBooleanCallback<T>,): NullOr<T>
    public override findLastIndexedOrNull(predicate: ReverseBooleanCallback<T>,) {
        return findLastIndexedOrNullByArray(this.reference, predicate,)
    }

    //endregion -------------------- Find last --------------------

    //endregion -------------------- Research methods --------------------
    //region -------------------- Index methods --------------------

    public override firstIndexOf(element: T, fromIndex?: NullableNumber, toIndex?: NullableNumber,): number {
        return firstIndexOfByArray(this.reference, element, fromIndex, toIndex,)
    }

    public override firstIndexOfOrNull(element: T, fromIndex?: NullableNumber, toIndex?: NullableNumber,): NullOrNumber {
        return firstIndexOfOrNullByArray(this.reference, element, fromIndex, toIndex,)
    }


    public override lastIndexOf(element: T, fromIndex?: NullableNumber, toIndex?: NullableNumber,): number {
        return lastIndexOfByArray(this.reference, element, fromIndex, toIndex,)
    }

    public override lastIndexOfOrNull(element: T, fromIndex?: NullableNumber, toIndex?: NullableNumber,): NullOrNumber {
        return lastIndexOfOrNullByArray(this.reference, element, fromIndex, toIndex,)
    }


    public override indexOfFirst(predicate: BooleanCallback<T>, fromIndex?: NullableNumber, toIndex?: NullableNumber,): number {
        return indexOfFirstByArray(this.reference, predicate, fromIndex, toIndex,)
    }

    public override indexOfFirstOrNull(predicate: BooleanCallback<T>, fromIndex?: NullableNumber, toIndex?: NullableNumber,): NullOrNumber {
        return indexOfFirstOrNullByArray(this.reference, predicate, fromIndex, toIndex,)
    }

    public override indexOfFirstIndexed(predicate: ReverseBooleanCallback<T>, fromIndex?: NullableNumber, toIndex?: NullableNumber,): number {
        return indexOfFirstIndexedByArray(this.reference, predicate, fromIndex, toIndex,)
    }

    public override indexOfFirstIndexedOrNull(predicate: ReverseBooleanCallback<T>, fromIndex?: NullableNumber, toIndex?: NullableNumber,): NullOrNumber {
        return indexOfFirstIndexedOrNullByArray(this.reference, predicate, fromIndex, toIndex,)
    }


    public override indexOfLast(predicate: BooleanCallback<T>, fromIndex?: NullableNumber, toIndex?: NullableNumber,): number {
        return indexOfLastByArray(this.reference, predicate, fromIndex, toIndex,)
    }

    public override indexOfLastOrNull(predicate: BooleanCallback<T>, fromIndex?: NullableNumber, toIndex?: NullableNumber,): NullOrNumber {
        return indexOfLastOrNullByArray(this.reference, predicate, fromIndex, toIndex,)
    }

    public override indexOfLastIndexed(predicate: ReverseBooleanCallback<T>, fromIndex?: NullableNumber, toIndex?: NullableNumber,): number {
        return indexOfLastIndexedByArray(this.reference, predicate, fromIndex, toIndex,)
    }

    public override indexOfLastIndexedOrNull(predicate: ReverseBooleanCallback<T>, fromIndex?: NullableNumber, toIndex?: NullableNumber,): NullOrNumber {
        return indexOfLastIndexedOrNullByArray(this.reference, predicate, fromIndex, toIndex,)
    }

    //endregion -------------------- Index methods --------------------
    //region -------------------- Validation methods --------------------

    //region -------------------- All --------------------

    public override all<S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): this is CollectionHolder<S>
    public override all(predicate: BooleanCallback<T>,): boolean
    public override all(predicate: BooleanCallback<T>,) {
        return allByArray(this.reference, predicate,)
    }

    //endregion -------------------- All --------------------
    //region -------------------- Any --------------------

    protected override _any(predicate: BooleanCallback<T>,): boolean {
        return anyByArray(this.reference, predicate,)
    }

    //endregion -------------------- Any --------------------
    //region -------------------- None --------------------

    protected override _none(predicate: BooleanCallback<T>,): boolean {
        return noneByArray(this.reference, predicate,)
    }

    //endregion -------------------- None --------------------

    //region -------------------- Has null --------------------

    public override get hasNull(): boolean {
        return hasNullByArray(this.reference,)
    }

    //endregion -------------------- Has null --------------------
    //region -------------------- Has duplicate --------------------

    public override get hasDuplicate(): boolean {
        return hasDuplicateByArray(this.reference,)
    }

    //endregion -------------------- Has duplicate --------------------

    //region -------------------- Has --------------------

    public override has(value: T,): boolean {
        return hasByArray(this.reference, value,)
    }

    //endregion -------------------- Has --------------------
    //region -------------------- Has one --------------------

    protected override _hasOneByArray(values: readonly T[],): boolean {
        return hasOneWithArrayByArray(this.reference, values,)
    }

    protected override _hasOneBySet(values: ReadonlySet<T>,): boolean {
        return hasOneWithSetByArray(this.reference, values,)
    }

    protected override _hasOneByMinimalistCollectionHolder(values: MinimalistCollectionHolder<T>,): boolean {
        return hasOneWithMinimalistCollectionHolderByArray(this.reference, values,)
    }

    protected override _hasOneByCollectionHolder(values: CollectionHolder<T>,): boolean {
        return hasOneWithCollectionHolderByArray(this.reference, values,)
    }

    protected override _hasOneByCollectionIterator(values: CollectionIterator<T>,): boolean {
        return hasOneWithCollectionIteratorByArray(this.reference, values,)
    }

    protected override _hasOneByIterable(values: Iterable<T>,): boolean {
        return hasOneWithIterableByArray(this.reference, values,)
    }

    //endregion -------------------- Has one --------------------
    //region -------------------- Has all --------------------

    protected override _hasAllByArray(values: readonly T[],): boolean {
        return hasAllWithArrayByArray(this.reference, values,)
    }

    protected override _hasAllBySet(values: ReadonlySet<T>,): boolean {
        return hasAllWithSetByArray(this.reference, values,)
    }

    protected override _hasAllByMinimalistCollectionHolder(values: MinimalistCollectionHolder<T>,): boolean {
        return hasAllWithMinimalistCollectionHolderByArray(this.reference, values,)
    }

    protected override _hasAllByCollectionHolder(values: CollectionHolder<T>,): boolean {
        return hasAllWithCollectionHolderByArray(this.reference, values,)
    }

    protected override _hasAllByCollectionIterator(values: CollectionIterator<T>,): boolean {
        return hasAllWithCollectionIteratorByArray(this.reference, values,)
    }

    protected override _hasAllByIterable(values: Iterable<T>,): boolean {
        return hasAllWithIterableByArray(this.reference, values,)
    }

    //endregion -------------------- Has all --------------------

    //region -------------------- Require no nulls --------------------

    public override requireNoNulls(): CollectionHolder<NonNullable<T>> {
        if (this.isEmpty)
            return this as CollectionHolder<NonNullable<T>>
        if (this.hasNull)
            throw new TypeError('Forbidden null value. The current collection contains null values.',)
        return this as CollectionHolder<NonNullable<T>>
    }

    //endregion -------------------- Require no nulls --------------------

    //endregion -------------------- Validation methods --------------------
    //region -------------------- Transformation methods --------------------

    //region -------------------- Filter --------------------

    public override filter<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override filter(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override filter(predicate: BooleanCallback<T>,) {
        return filterByArray(this.reference, predicate,)
    }

    public override filterIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override filterIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override filterIndexed(predicate: ReverseBooleanCallback<T>,) {
        return filterIndexedByArray(this.reference, predicate,)
    }


    public override filterNot<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>
    public override filterNot(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override filterNot(predicate: BooleanCallback<T>,) {
        return filterNotByArray(this.reference, predicate,)
    }

    public override filterNotIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>
    public override filterNotIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override filterNotIndexed(predicate: ReverseBooleanCallback<T>,) {
        return filterNotIndexedByArray(this.reference, predicate,)
    }


    public override filterNotNull(): CollectionHolder<NonNullable<T>> {
        if (this.isEmpty)
            return EMPTY_COLLECTION_HOLDER as unknown as CollectionHolder<never>
        if (this.hasNull)
            return new LazyGenericCollectionHolder(() => {
                const array = this.reference
                const newArray: NonNullable<T>[] = []
                const size = this.size
                let index = -1
                while (++index < size) {
                    const value = array[index] as T
                    if (value != null)
                        newArray.push(value,)
                }
                return newArray
            },)
        return this as CollectionHolder<NonNullable<T>>
    }

    //endregion -------------------- Filter --------------------
    //region -------------------- Slice --------------------

    protected override _sliceWith0Argument(): CollectionHolder<T> {
        return sliceWithARangeByArray(this.reference,)
    }

    protected override _sliceWith1Argument(fromIndex: number,): CollectionHolder<T> {
        return sliceWithARangeByArray(this.reference, fromIndex,)
    }

    protected override _sliceWith2Argument(fromIndex: number, toIndex: number,): CollectionHolder<T> {
        return sliceWithARangeByArray(this.reference, fromIndex, toIndex,)
    }

    protected override _sliceWith2ArgumentWhere1stIsNull(fromIndex: NullOrUndefined, toIndex: number,): CollectionHolder<T> {
        return sliceWithARangeByArray(this.reference, fromIndex, toIndex,)
    }

    protected override _sliceByArray(indices: readonly number[],): CollectionHolder<T> {
        return sliceWithArrayByArray(this.reference, indices,)
    }

    protected override _sliceBySet(indices: ReadonlySet<number>,): CollectionHolder<T> {
        return sliceWithSetByArray(this.reference, indices,)
    }

    protected override _sliceByMinimalistCollectionHolder(indices: MinimalistCollectionHolder<number>,): CollectionHolder<T> {
        return sliceWithMinimalistCollectionHolderByArray(this.reference, indices,)
    }

    protected override _sliceByCollectionHolder(indices: CollectionHolder<number>,): CollectionHolder<T> {
        return sliceWithCollectionHolderByArray(this.reference, indices,)
    }

    protected override _sliceByCollectionIterator(indices: CollectionIterator<number>,): CollectionHolder<T> {
        return sliceWithCollectionIteratorByArray(this.reference, indices,)
    }

    protected override _sliceByIterable(indices: Iterable<number>,): CollectionHolder<T> {
        return sliceWithIterableByArray(this.reference, indices,)
    }

    //endregion -------------------- Slice --------------------
    //region -------------------- Take --------------------

    public override take(n: number,): CollectionHolder<T> {
        return takeByArray(this.reference, n,)
    }

    public override takeWhile<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override takeWhile(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override takeWhile(predicate: BooleanCallback<T>,) {
        return takeWhileByArray(this.reference, predicate,)
    }

    public override takeWhileIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override takeWhileIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override takeWhileIndexed(predicate: ReverseBooleanCallback<T>,) {
        return takeWhileIndexedByArray(this.reference, predicate,)
    }


    public override takeLast(n: number,): CollectionHolder<T> {
        return takeLastByArray(this.reference, n,)
    }


    public override takeLastWhile<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override takeLastWhile(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override takeLastWhile(predicate: BooleanCallback<T>,) {
        return takeLastWhileByArray(this.reference, predicate,)
    }

    public override takeLastWhileIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override takeLastWhileIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override takeLastWhileIndexed(predicate: ReverseBooleanCallback<T>,) {
        return takeLastWhileIndexedByArray(this.reference, predicate,)
    }

    //endregion -------------------- Take --------------------
    //region -------------------- Drop --------------------

    public override drop(n: number,): CollectionHolder<T> {
        return dropByArray(this.reference, n,)
    }

    public override dropWhile<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override dropWhile(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override dropWhile(predicate: BooleanCallback<T>,) {
        return dropWhileByArray(this.reference, predicate,)
    }

    public override dropWhileIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override dropWhileIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override dropWhileIndexed(predicate: ReverseBooleanCallback<T>,) {
        return dropWhileIndexedByArray(this.reference, predicate,)
    }


    public override dropLast(n: number,): CollectionHolder<T> {
        return dropLastByArray(this.reference, n,)
    }

    public override dropLastWhile<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override dropLastWhile(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override dropLastWhile(predicate: BooleanCallback<T>,) {
        return dropLastWhileByArray(this.reference, predicate,)
    }

    public override dropLastWhileIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override dropLastWhileIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override dropLastWhileIndexed(predicate: ReverseBooleanCallback<T>,) {
        return dropLastWhileIndexedByArray(this.reference, predicate,)
    }

    //endregion -------------------- Drop --------------------
    //region -------------------- Map --------------------

    public override map<const U, >(transform: ValueIndexWithReturnCallback<T, U>,): CollectionHolder<U> {
        return mapByArray(this.reference, transform,)
    }

    public override mapIndexed<const U, >(transform: IndexValueWithReturnCallback<T, U>,): CollectionHolder<U> {
        return mapIndexedByArray(this.reference, transform,)
    }


    public override mapNotNull<const U extends NonNullable<unknown>, >(transform: ValueIndexWithReturnCallback<T, Nullable<U>>,): CollectionHolder<U> {
        return mapNotNullByArray(this.reference, transform,)
    }

    public override mapNotNullIndexed<const U extends NonNullable<unknown>, >(transform: IndexValueWithReturnCallback<T, Nullable<U>>,): CollectionHolder<U> {
        return mapNotNullIndexedByArray(this.reference, transform,)
    }

    //endregion -------------------- Map --------------------

    //endregion -------------------- Transformation methods --------------------
    //region -------------------- Loop methods --------------------

    //region -------------------- For each --------------------

    public override forEach(action: ValueIndexCallback<T>,): void {
        forEachByArray(this.reference, action,)
    }

    public override forEachIndexed(action: IndexValueCallback<T>,): void {
        forEachIndexedByArray(this.reference, action,)
    }

    //endregion -------------------- For each --------------------
    //region -------------------- On each --------------------

    public override onEach(action: ValueIndexCallback<T>,): this {
        onEachByArray(this.reference, action,)
        return this
    }

    public override onEachIndexed(action: IndexValueCallback<T>,): this {
        onEachIndexedByArray(this.reference, action,)
        return this
    }

    //endregion -------------------- On each --------------------

    //endregion -------------------- Loop methods --------------------
    //region -------------------- Reordering methods --------------------

    //region -------------------- To reverse --------------------

    public override toReverse(fromIndex?: NullableNumber, toIndex?: NullableNumber,): CollectionHolder<T> {
        return toReverseByArray(this.reference, fromIndex, toIndex,)
    }

    //endregion -------------------- To reverse --------------------

    //endregion -------------------- Reordering methods --------------------
    //region -------------------- JavaScript methods --------------------

    public override [Symbol.iterator](): CollectionIterator<T> {
        return toIteratorByArray(this.reference,) as CollectionIterator<T>
    }

    //endregion -------------------- JavaScript methods --------------------
    //region -------------------- Conversion methods --------------------

    //region -------------------- To other structure --------------------

    public override toArray(): readonly T[] {
        return toArrayByArray(this.reference,)
    }

    public override toMutableArray(): T[] {
        return toMutableArrayByArray(this.reference,)
    }

    public override toSet(): ReadonlySet<T> {
        return toSetByArray(this.reference,)
    }

    public override toMutableSet(): Set<T> {
        return toMutableSetByArray(this.reference,)
    }

    public override toMap(): ReadonlyMap<number, T> {
        return toMapByArray(this.reference,)
    }

    public override toMutableMap(): Map<number, T> {
        return toMutableMapByArray(this.reference,)
    }

    //endregion -------------------- To other structure --------------------
    //region -------------------- To string --------------------

    public override toString(): string {
        return toStringByArray(this.reference,)
    }

    public override toLocaleString(locale?: NullableString,): string {
        if (arguments.length === 0)
            return toLocaleStringByArray(this.reference,)
        return toLocaleStringByArray(this.reference, locale,)
    }


    public override toLowerCaseString(): string {
        return toLowerCaseStringByArray(this.reference,)
    }

    public override toLocaleLowerCaseString(locale?: NullableString,): string {
        if (arguments.length === 0)
            return toLocaleLowerCaseStringByArray(this.reference,)
        return toLocaleLowerCaseStringByArray(this.reference, locale,)
    }


    public override toUpperCaseString(): string {
        return toUpperCaseStringByArray(this.reference,)
    }

    public override toLocaleUpperCaseString(locale?: NullableString,): string {
        if (arguments.length === 0)
            return toLocaleUpperCaseStringByArray(this.reference,)
        return toLocaleUpperCaseStringByArray(this.reference, locale,)
    }

    //endregion -------------------- To string --------------------
    //region -------------------- Join to string --------------------

    public override joinToString(separator?: NullableString, prefix?: NullableString, postfix?: NullableString, limit?: NullableNumber, truncated?: NullableString, transform?: Nullable<StringCallback<T>>,): string {
        return joinToStringByArray(this.reference, separator, prefix, postfix, limit, truncated, transform,)
    }

    //endregion -------------------- Join to string --------------------

    //endregion -------------------- Conversion methods --------------------

    //endregion -------------------- Methods --------------------

}

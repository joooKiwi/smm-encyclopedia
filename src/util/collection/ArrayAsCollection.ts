import type {Nullable, NullableNumber, NullableString, NullOr, NullOrNumber, NullOrUndefined}                                                                                                                                                                   from '@joookiwi/type'
import type {CollectionHolder}                                                                                                                                                                                                                                  from '@joookiwi/collection'
import type {CollectionHolder as CollectionHolder2}                                                                                                                                                                                                             from '@joookiwi/collection/src/CollectionHolder'
import type {MinimalistCollectionHolder}                                                                                                                                                                                                                        from '@joookiwi/collection/src/MinimalistCollectionHolder'
import type {CollectionIterator}                                                                                                                                                                                                                                from '@joookiwi/collection'
import type {CollectionIterator as CollectionIterator2}                                                                                                                                                                                                         from '@joookiwi/collection/src/iterator/CollectionIterator'
import type {BooleanCallback, IndexValueCallback, IndexValueWithReturnCallback, IndexWithReturnCallback, RestrainedBooleanCallback, ReverseBooleanCallback, ReverseRestrainedBooleanCallback, StringCallback, ValueIndexCallback, ValueIndexWithReturnCallback} from '@joookiwi/collection/src/type/callback'

import {AbstractCollectionHolder}                    from '@joookiwi/collection'
import {LazyGenericCollectionHolder}                 from '@joookiwi/collection'
import {EmptyCollectionException}                    from '@joookiwi/collection/src/exception/EmptyCollectionException'
import {ForbiddenIndexException}                     from '@joookiwi/collection/src/exception/ForbiddenIndexException'
import {IndexOutOfBoundsException}                   from '@joookiwi/collection/src/exception/IndexOutOfBoundsException'
import {allByArray}                                  from '@joookiwi/collection/src/method/all'
import {anyByArray}                                  from '@joookiwi/collection/src/method/any'
import {dropByArray}                                 from '@joookiwi/collection/src/method/drop'
import {dropLastByArray}                             from '@joookiwi/collection/src/method/dropLast'
import {dropLastWhileByArray}                        from '@joookiwi/collection/src/method/dropLastWhile'
import {dropLastWhileIndexedByArray}                 from '@joookiwi/collection/src/method/dropLastWhileIndexed'
import {dropWhileByArray}                            from '@joookiwi/collection/src/method/dropWhile'
import {dropWhileIndexedByArray}                     from '@joookiwi/collection/src/method/dropWhileIndexed'
import {filterByArray}                               from '@joookiwi/collection/src/method/filter'
import {filterIndexedByArray}                        from '@joookiwi/collection/src/method/filterIndexed'
import {filterNotByArray}                            from '@joookiwi/collection/src/method/filterNot'
import {filterNotIndexedByArray}                     from '@joookiwi/collection/src/method/filterNotIndexed'
import {findFirstByArray}                            from '@joookiwi/collection/src/method/findFirst'
import {findFirstOrNullByArray}                      from '@joookiwi/collection/src/method/findFirstOrNull'
import {findFirstIndexedByArray}                     from '@joookiwi/collection/src/method/findFirstIndexed'
import {findFirstIndexedOrNullByArray}               from '@joookiwi/collection/src/method/findFirstIndexedOrNull'
import {findLastByArray}                             from '@joookiwi/collection/src/method/findLast'
import {findLastOrNullByArray}                       from '@joookiwi/collection/src/method/findLastOrNull'
import {findLastIndexedByArray}                      from '@joookiwi/collection/src/method/findLastIndexed'
import {findLastIndexedOrNullByArray}                from '@joookiwi/collection/src/method/findLastIndexedOrNull'
import {firstIndexOfByArray}                         from '@joookiwi/collection/src/method/firstIndexOf'
import {firstIndexOfOrNullByArray}                   from '@joookiwi/collection/src/method/firstIndexOfOrNull'
import {forEachByArray}                              from '@joookiwi/collection/src/method/forEach'
import {forEachIndexedByArray}                       from '@joookiwi/collection/src/method/forEachIndexed'
import {getFirstByArray}                             from '@joookiwi/collection/src/method/getFirst'
import {getLastByArray}                              from '@joookiwi/collection/src/method/getLast'
import {getOrElseByArray}                            from '@joookiwi/collection/src/method/getOrElse'
import {getOrNullByArray}                            from '@joookiwi/collection/src/method/getOrNull'
import {getFirstOrNullByArray}                       from '@joookiwi/collection/src/method/getFirstOrNull'
import {getLastOrNullByArray}                        from '@joookiwi/collection/src/method/getLastOrNull'
import {hasByArray}                                  from '@joookiwi/collection/src/method/has'
import {hasAllWithArrayByArray}                      from '@joookiwi/collection/src/method/hasAll.withArray'
import {hasAllWithCollectionHolderByArray}           from '@joookiwi/collection/src/method/hasAll.withCollectionHolder'
import {hasAllWithCollectionIteratorByArray}         from '@joookiwi/collection/src/method/hasAll.withCollectionIterator'
import {hasAllWithIterableByArray}                   from '@joookiwi/collection/src/method/hasAll.withIterable'
import {hasAllWithMinimalistCollectionHolderByArray} from '@joookiwi/collection/src/method/hasAll.withMinimalistCollectionHolder'
import {hasAllWithSetByArray}                        from '@joookiwi/collection/src/method/hasAll.withSet'
import {hasDuplicateByArray}                         from '@joookiwi/collection/src/method/hasDuplicate'
import {hasOneWithArrayByArray}                      from '@joookiwi/collection/src/method/hasOne.withArray'
import {hasOneWithCollectionHolderByArray}           from '@joookiwi/collection/src/method/hasOne.withCollectionHolder'
import {hasOneWithCollectionIteratorByArray}         from '@joookiwi/collection/src/method/hasOne.withCollectionIterator'
import {hasOneWithIterableByArray}                   from '@joookiwi/collection/src/method/hasOne.withIterable'
import {hasOneWithMinimalistCollectionHolderByArray} from '@joookiwi/collection/src/method/hasOne.withMinimalistCollectionHolder'
import {hasOneWithSetByArray}                        from '@joookiwi/collection/src/method/hasOne.withSet'
import {hasNullByArray}                              from '@joookiwi/collection/src/method/hasNull'
import {indexOfFirstByArray}                         from '@joookiwi/collection/src/method/indexOfFirst'
import {indexOfFirstIndexedByArray}                  from '@joookiwi/collection/src/method/indexOfFirstIndexed'
import {indexOfFirstIndexedOrNullByArray}            from '@joookiwi/collection/src/method/indexOfFirstIndexedOrNull'
import {indexOfFirstOrNullByArray}                   from '@joookiwi/collection/src/method/indexOfFirstOrNull'
import {indexOfLastByArray}                          from '@joookiwi/collection/src/method/indexOfLast'
import {indexOfLastIndexedByArray}                   from '@joookiwi/collection/src/method/indexOfLastIndexed'
import {indexOfLastIndexedOrNullByArray}             from '@joookiwi/collection/src/method/indexOfLastIndexedOrNull'
import {indexOfLastOrNullByArray}                    from '@joookiwi/collection/src/method/indexOfLastOrNull'
import {joinToStringByArray}                         from '@joookiwi/collection/src/method/joinToString'
import {lastIndexOfByArray}                          from '@joookiwi/collection/src/method/lastIndexOf'
import {lastIndexOfOrNullByArray}                    from '@joookiwi/collection/src/method/lastIndexOfOrNull'
import {noneByArray}                                 from '@joookiwi/collection/src/method/none'
import {mapByArray}                                  from '@joookiwi/collection/src/method/map'
import {mapIndexedByArray}                           from '@joookiwi/collection/src/method/mapIndexed'
import {mapNotNullByArray}                           from '@joookiwi/collection/src/method/mapNotNull'
import {mapNotNullIndexedByArray}                    from '@joookiwi/collection/src/method/mapNotNullIndexed'
import {onEachByArray}                               from '@joookiwi/collection/src/method/onEach'
import {onEachIndexedByArray}                        from '@joookiwi/collection/src/method/onEachIndexed'
import {sliceWithARangeByArray}                      from '@joookiwi/collection/src/method/slice.withARange'
import {sliceWithArrayByArray}                       from '@joookiwi/collection/src/method/slice.withArray'
import {sliceWithIterableByArray}                    from '@joookiwi/collection/src/method/slice.withIterable'
import {sliceWithCollectionHolderByArray}            from '@joookiwi/collection/src/method/slice.withCollectionHolder'
import {sliceWithCollectionIteratorByArray}          from '@joookiwi/collection/src/method/slice.withCollectionIterator'
import {sliceWithMinimalistCollectionHolderByArray}  from '@joookiwi/collection/src/method/slice.withMinimalistCollectionHolder'
import {sliceWithSetByArray}                         from '@joookiwi/collection/src/method/slice.withSet'
import {takeByArray}                                 from '@joookiwi/collection/src/method/take'
import {takeLastByArray}                             from '@joookiwi/collection/src/method/takeLast'
import {takeLastWhileByArray}                        from '@joookiwi/collection/src/method/takeLastWhile'
import {takeLastWhileIndexedByArray}                 from '@joookiwi/collection/src/method/takeLastWhileIndexed'
import {takeWhileByArray}                            from '@joookiwi/collection/src/method/takeWhile'
import {takeWhileIndexedByArray}                     from '@joookiwi/collection/src/method/takeWhileIndexed'
import {toArrayByArray}                              from '@joookiwi/collection/src/method/toArray'
import {toIteratorByArray}                           from '@joookiwi/collection/src/method/toIterator'
import {toLocaleLowerCaseStringByArray}              from '@joookiwi/collection/src/method/toLocaleLowerCaseString'
import {toLocaleStringByArray}                       from '@joookiwi/collection/src/method/toLocaleString'
import {toLocaleUpperCaseStringByArray}              from '@joookiwi/collection/src/method/toLocaleUpperCaseString'
import {toLowerCaseStringByArray}                    from '@joookiwi/collection/src/method/toLowerCaseString'
import {toMapByArray}                                from '@joookiwi/collection/src/method/toMap'
import {toMutableArrayByArray}                       from '@joookiwi/collection/src/method/toMutableArray'
import {toMutableMapByArray}                         from '@joookiwi/collection/src/method/toMutableMap'
import {toMutableSetByArray}                         from '@joookiwi/collection/src/method/toMutableSet'
import {toReverseByArray}                            from '@joookiwi/collection/src/method/toReverse'
import {toSetByArray}                                from '@joookiwi/collection/src/method/toSet'
import {toStringByArray}                             from '@joookiwi/collection/src/method/toString'
import {toUpperCaseStringByArray}                    from '@joookiwi/collection/src/method/toUpperCaseString'

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
        return hasOneWithCollectionHolderByArray(this.reference, values as CollectionHolder2<T>,)
    }

    protected override _hasOneByCollectionIterator(values: CollectionIterator<T>,): boolean {
        return hasOneWithCollectionIteratorByArray(this.reference, values as CollectionIterator2<T>,)
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
        return hasAllWithCollectionHolderByArray(this.reference, values as CollectionHolder2<T>,)
    }

    protected override _hasAllByCollectionIterator(values: CollectionIterator<T>,): boolean {
        return hasAllWithCollectionIteratorByArray(this.reference, values as CollectionIterator2<T>,)
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
        return filterByArray(this.reference, predicate,) as CollectionHolder<T>
    }

    public override filterIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override filterIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override filterIndexed(predicate: ReverseBooleanCallback<T>,) {
        return filterIndexedByArray(this.reference, predicate,) as CollectionHolder<T>
    }


    public override filterNot<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>
    public override filterNot(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override filterNot(predicate: BooleanCallback<T>,) {
        return filterNotByArray(this.reference, predicate,) as CollectionHolder<T>
    }

    public override filterNotIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<Exclude<T, S>>
    public override filterNotIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override filterNotIndexed(predicate: ReverseBooleanCallback<T>,) {
        return filterNotIndexedByArray(this.reference, predicate,) as CollectionHolder<T>
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
        return sliceWithARangeByArray(this.reference,) as CollectionHolder<T>
    }

    protected override _sliceWith1Argument(fromIndex: number,): CollectionHolder<T> {
        return sliceWithARangeByArray(this.reference, fromIndex,) as CollectionHolder<T>
    }

    protected override _sliceWith2Argument(fromIndex: number, toIndex: number,): CollectionHolder<T> {
        return sliceWithARangeByArray(this.reference, fromIndex, toIndex,) as CollectionHolder<T>
    }

    protected override _sliceWith2ArgumentWhere1stIsNull(fromIndex: NullOrUndefined, toIndex: number,): CollectionHolder<T> {
        return sliceWithARangeByArray(this.reference, fromIndex, toIndex,) as CollectionHolder<T>
    }

    protected override _sliceByArray(indices: readonly number[],): CollectionHolder<T> {
        return sliceWithArrayByArray(this.reference, indices,) as CollectionHolder<T>
    }

    protected override _sliceBySet(indices: ReadonlySet<number>,): CollectionHolder<T> {
        return sliceWithSetByArray(this.reference, indices,) as CollectionHolder<T>
    }

    protected override _sliceByMinimalistCollectionHolder(indices: MinimalistCollectionHolder<number>,): CollectionHolder<T> {
        return sliceWithMinimalistCollectionHolderByArray(this.reference, indices,) as CollectionHolder<T>
    }

    protected override _sliceByCollectionHolder(indices: CollectionHolder<number>,): CollectionHolder<T> {
        return sliceWithCollectionHolderByArray(this.reference, indices as CollectionHolder2<number>,) as CollectionHolder<T>
    }

    protected override _sliceByCollectionIterator(indices: CollectionIterator<number>,): CollectionHolder<T> {
        return sliceWithCollectionIteratorByArray(this.reference, indices as CollectionIterator2<number>,) as CollectionHolder<T>
    }

    protected override _sliceByIterable(indices: Iterable<number>,): CollectionHolder<T> {
        return sliceWithIterableByArray(this.reference, indices,) as CollectionHolder<T>
    }

    //endregion -------------------- Slice --------------------
    //region -------------------- Take --------------------

    public override take(n: number,): CollectionHolder<T> {
        return takeByArray(this.reference, n,) as CollectionHolder<T>
    }

    public override takeWhile<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override takeWhile(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override takeWhile(predicate: BooleanCallback<T>,) {
        return takeWhileByArray(this.reference, predicate,) as CollectionHolder<T>
    }

    public override takeWhileIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override takeWhileIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override takeWhileIndexed(predicate: ReverseBooleanCallback<T>,) {
        return takeWhileIndexedByArray(this.reference, predicate,) as CollectionHolder<T>
    }


    public override takeLast(n: number,): CollectionHolder<T> {
        return takeLastByArray(this.reference, n,) as CollectionHolder<T>
    }


    public override takeLastWhile<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override takeLastWhile(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override takeLastWhile(predicate: BooleanCallback<T>,) {
        return takeLastWhileByArray(this.reference, predicate,) as CollectionHolder<T>
    }

    public override takeLastWhileIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override takeLastWhileIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override takeLastWhileIndexed(predicate: ReverseBooleanCallback<T>,) {
        return takeLastWhileIndexedByArray(this.reference, predicate,) as CollectionHolder<T>
    }

    //endregion -------------------- Take --------------------
    //region -------------------- Drop --------------------

    public override drop(n: number,): CollectionHolder<T> {
        return dropByArray(this.reference, n,) as CollectionHolder<T>
    }

    public override dropWhile<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override dropWhile(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override dropWhile(predicate: BooleanCallback<T>,) {
        return dropWhileByArray(this.reference, predicate,) as CollectionHolder<T>
    }

    public override dropWhileIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override dropWhileIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override dropWhileIndexed(predicate: ReverseBooleanCallback<T>,) {
        return dropWhileIndexedByArray(this.reference, predicate,) as CollectionHolder<T>
    }


    public override dropLast(n: number,): CollectionHolder<T> {
        return dropLastByArray(this.reference, n,) as CollectionHolder<T>
    }

    public override dropLastWhile<const S extends T, >(predicate: RestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override dropLastWhile(predicate: BooleanCallback<T>,): CollectionHolder<T>
    public override dropLastWhile(predicate: BooleanCallback<T>,) {
        return dropLastWhileByArray(this.reference, predicate,) as CollectionHolder<T>
    }

    public override dropLastWhileIndexed<const S extends T, >(predicate: ReverseRestrainedBooleanCallback<T, S>,): CollectionHolder<S>
    public override dropLastWhileIndexed(predicate: ReverseBooleanCallback<T>,): CollectionHolder<T>
    public override dropLastWhileIndexed(predicate: ReverseBooleanCallback<T>,) {
        return dropLastWhileIndexedByArray(this.reference, predicate,) as CollectionHolder<T>
    }

    //endregion -------------------- Drop --------------------
    //region -------------------- Map --------------------

    public override map<const U, >(transform: ValueIndexWithReturnCallback<T, U>,): CollectionHolder<U> {
        return mapByArray(this.reference, transform,) as CollectionHolder<U>
    }

    public override mapIndexed<const U, >(transform: IndexValueWithReturnCallback<T, U>,): CollectionHolder<U> {
        return mapIndexedByArray(this.reference, transform,) as CollectionHolder<U>
    }


    public override mapNotNull<const U extends NonNullable<unknown>, >(transform: ValueIndexWithReturnCallback<T, Nullable<U>>,): CollectionHolder<U> {
        return mapNotNullByArray(this.reference, transform,) as CollectionHolder<U>
    }

    public override mapNotNullIndexed<const U extends NonNullable<unknown>, >(transform: IndexValueWithReturnCallback<T, Nullable<U>>,): CollectionHolder<U> {
        return mapNotNullIndexedByArray(this.reference, transform,) as CollectionHolder<U>
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
        return toReverseByArray(this.reference, fromIndex, toIndex,) as CollectionHolder<T>
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

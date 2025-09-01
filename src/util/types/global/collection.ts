import type {EmptyArray} from '@joookiwi/type'

declare global {

    type ArrayOf0 =       EmptyArray
    type ArrayOf1<T, > =  readonly [T,]
    type ArrayOf2<T, > =  readonly [T, T,]
    type ArrayOf3<T, > =  readonly [T, T, T,]
    type ArrayOf4<T, > =  readonly [T, T, T, T,]
    type ArrayOf5<T, > =  readonly [T, T, T, T, T,]
    type ArrayOf6<T, > =  readonly [T, T, T, T, T, T,]
    type ArrayOf7<T, > =  readonly [T, T, T, T, T, T, T,]
    type ArrayOf8<T, > =  readonly [T, T, T, T, T, T, T, T,]
    type ArrayOf9<T, > =  readonly [T, T, T, T, T, T, T, T, T,]
    type ArrayOf10<T, > = readonly [T, T, T, T, T, T, T, T, T, T,]
    type ArrayOf11<T, > = readonly [T, T, T, T, T, T, T, T, T, T, T,]
    type ArrayOf12<T, > = readonly [T, T, T, T, T, T, T, T, T, T, T, T,]

    type ArrayOf0To2<T, > =  | EmptyArray | ArrayOf1<T> | ArrayOf2<T>
    type ArrayOf0To3<T, > =  | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T>
    type ArrayOf0To4<T, > =  | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T>
    type ArrayOf0To5<T, > =  | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T>
    type ArrayOf0To6<T, > =  | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T>
    type ArrayOf0To7<T, > =  | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T>
    type ArrayOf0To8<T, > =  | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T>
    type ArrayOf0To9<T, > =  | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T> | ArrayOf9<T>
    type ArrayOf0To10<T, > = | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T> | ArrayOf9<T> | ArrayOf10<T>
    type ArrayOf0To11<T, > = | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T> | ArrayOf9<T> | ArrayOf10<T> | ArrayOf11<T>
    type ArrayOf0To12<T, > = | EmptyArray | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T> | ArrayOf9<T> | ArrayOf10<T> | ArrayOf11<T> | ArrayOf12<T>

    type ArrayOf1To2<T, > =  | ArrayOf1<T> | ArrayOf2<T>
    type ArrayOf1To3<T, > =  | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T>
    type ArrayOf1To4<T, > =  | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T>
    type ArrayOf1To5<T, > =  | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T>
    type ArrayOf1To6<T, > =  | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T>
    type ArrayOf1To7<T, > =  | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T>
    type ArrayOf1To8<T, > =  | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T>
    type ArrayOf1To9<T, > =  | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T> | ArrayOf9<T>
    type ArrayOf1To10<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T> | ArrayOf9<T> | ArrayOf10<T>
    type ArrayOf1To11<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T> | ArrayOf9<T> | ArrayOf10<T> | ArrayOf11<T>
    type ArrayOf1To12<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T> | ArrayOf9<T> | ArrayOf10<T> | ArrayOf11<T> | ArrayOf12<T>

}

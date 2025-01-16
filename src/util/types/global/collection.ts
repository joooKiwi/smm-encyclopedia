export {}

declare global {

    type ArrayOf1<T, > = | readonly [T,]
    type ArrayOf2<T, > = | readonly [T, T,]
    type ArrayOf3<T, > = | readonly [T, T, T,]
    type ArrayOf4<T, > = | readonly [T, T, T, T,]
    type ArrayOf5<T, > = | readonly [T, T, T, T, T,]
    type ArrayOf6<T, > = | readonly [T, T, T, T, T, T,]
    type ArrayOf7<T, > = | readonly [T, T, T, T, T, T, T,]
    type ArrayOf8<T, > = | readonly [T, T, T, T, T, T, T, T,]

    type ArrayOf1To2<T, > = | ArrayOf1<T> | ArrayOf2<T>
    type ArrayOf1To3<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T>
    type ArrayOf1To4<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T>
    type ArrayOf1To5<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T>
    type ArrayOf1To6<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T>
    type ArrayOf1To7<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T>
    type ArrayOf1To8<T, > = | ArrayOf1<T> | ArrayOf2<T> | ArrayOf3<T> | ArrayOf4<T> | ArrayOf5<T> | ArrayOf6<T> | ArrayOf7<T> | ArrayOf8<T>

}

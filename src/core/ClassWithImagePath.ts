export interface ClassWithImagePath<P extends string, > {

    get imagePath(): P

}

export interface ClassWithNullableSMM2ImagePath<P extends string, > {

    get SMM2ImagePath(): | P | null

}

export interface ClassWithSMM2ImagePath<P extends string, >
    extends ClassWithNullableSMM2ImagePath<P> {

    get SMM2ImagePath(): P

}

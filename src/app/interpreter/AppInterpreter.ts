import type {ClassWithEnglishName} from '../../core/ClassWithEnglishName';
import type {ClassWithReference}   from '../../core/ClassWithReference';
import type {Enum}                 from '../../util/enum/Enum';
import type {Name}                 from '../../lang/name/Name';

/**
 * An application interpreter when using {@link AbstractAppWithInterpreter}
 * to encapsulate a content list.
 */
export interface AppInterpreter<CONTENT extends Content = Content,> {

    /**
     * Get the iterable of the content
     */
    get iterable(): IterableIterator<CONTENT>

}

//TODO change the ClassWithReference<{nameContainer}> to be ClassHavingReferenceWithName
export type Content = Enum<any, any> & ClassWithEnglishName<string> & ClassWithReference<{ get nameContainer(): Name<string> }>;

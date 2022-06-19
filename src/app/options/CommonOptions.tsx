import {lazy, ReactElement} from 'react';

import type {ClassWithEnglishName}   from '../../core/ClassWithEnglishName';
import type {ClassWithReference}     from '../../core/ClassWithReference';
import type {Enum}                   from '../../util/enum/Enum';
import type {Name}                   from '../../lang/name/Name';
import type {NameTrait}              from '../../lang/name/NameTrait';
import type {NameTraitFromACategory} from '../../lang/name/NameTraitFromACategory';
import type {SingleHeaderContent}    from '../tools/table/SimpleHeader';

import ContentTranslationComponent     from '../../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {EmptyStringName}               from '../../lang/name/EmptyStringName';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';

//region -------------------- dynamic imports --------------------

const Image =         lazy(() => import('../tools/images/Image'));
const NameComponent = lazy(() => import('../../lang/name/component/Name.component'));

//endregion -------------------- dynamic imports --------------------

/**
 * @singleton
 */
export class CommonOptions {

    //region -------------------- Singleton usage --------------------

    static #instance?: CommonOptions;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Attributes --------------------

    #nameHeader?: SingleHeaderContent;

    #categoryHeader?: SingleHeaderContent;

    //endregion -------------------- Attributes --------------------

    public get nameHeader(): SingleHeaderContent {
        return this.#nameHeader ??= {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,};
    }

    public getNameContent(enumeration: EnumerationWithReference,): ReactElement {
        return <NameComponent id="name" name={enumeration.reference} popoverOrientation="left"/>;
    }


    public get categoryHeader(): SingleHeaderContent {
        return this.#categoryHeader ??= {key: 'category', element: <GameContentTranslationComponent translationKey="Category"/>,};
    }

    public getCategoryContent(enumeration: EnumerationWithCategoryReference, imagePath_or_nameCallback: () => | string | Name<string>,): ReactElement {
        const name = enumeration.reference.categoryNameContainer;
        if (name === EmptyStringName.get)
            return EMPTY_REACT_ELEMENT;

        const imagePath_or_name = imagePath_or_nameCallback();
        const englishName = name.english;
        const startingKey = `category name (${englishName})`;
        if (typeof imagePath_or_name == 'string')
            return <Image key={`${startingKey} image`} source={imagePath_or_name} fallbackName={`${name.english} - image`}/>;
        return <NameComponent key={`${startingKey} name`} id={`category-name-${enumeration.englishNameInHtml}`} name={name} popoverOrientation="left"/>;
    }

}

type EnumerationWithReference = Enum<any, any> & ClassWithEnglishName<string> & ClassWithReference<Name<string>>;
type EnumerationWithCategoryReference = Enum<any, any> & ClassWithEnglishName<string> & ClassWithReference<NameTraitFromACategory<string, NameTrait<string>>>;

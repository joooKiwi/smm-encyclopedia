import {lazy} from 'react';

import type {ClassInAnySuperMarioMakerGame} from '../../core/game/ClassInAnySuperMarioMakerGame';
import type {ClassWithEnglishName}          from '../../core/ClassWithEnglishName';
import type {ClassWithReference}            from '../../core/ClassWithReference';
import type {Enum}                          from '../../util/enum/Enum';
import type {Name}                          from '../../lang/name/Name';
import type {NameTrait}                     from '../../lang/name/NameTrait';
import type {NameTraitFromACategory}        from '../../lang/name/NameTraitFromACategory';
import type {ReactElement}                  from '../../util/react/ReactProperty';
import type {SingleHeaderContent}           from '../tools/table/SimpleHeader';
import type {Themes}                        from '../../core/theme/Themes';

import ContentTranslationComponent     from '../../lang/components/ContentTranslationComponent';
import {BASE_PATH}                     from '../../variables';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {EmptyStringName}               from '../../lang/name/EmptyStringName';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Games}                         from '../../core/game/Games';

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
    //region -------------------- Fields --------------------

    #nameHeader?: SingleHeaderContent;

    #categoryHeader?: SingleHeaderContent;

    //endregion -------------------- Fields --------------------

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


    /**
     * Get a {@link HTMLDivElement} containing each images (if true)
     * of the {@link Games} contained in the {@link Enumerable} {@link ClassWithReference reference}.
     *
     * @param enumeration The enumerable to retrieve the {@link Games} properties & {@link ClassWithEnglishName english name}.
     */
    public getGameContent(enumeration: EnumerationWithInSuperMarioMakerGameReference,): ReactElement {
        const reference = enumeration.reference;
        const isInSMM1 = reference.isInSuperMarioMaker1;
        const isInSMM3DS = reference.isInSuperMarioMakerFor3DS;
        const isInSMM2 = reference.isInSuperMarioMaker2;

        return <div key={`${enumeration.englishName} (game content images)`} id={`${enumeration.englishNameInHtml}-gameContentImages-container`} className="gameContentImages-container">
            {isInSMM1 ? Games.SUPER_MARIO_MAKER_1.renderSingleComponent : EMPTY_REACT_ELEMENT}
            {isInSMM3DS ? Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.renderSingleComponent : EMPTY_REACT_ELEMENT}
            {isInSMM2 ? Games.SUPER_MARIO_MAKER_2.renderSingleComponent : EMPTY_REACT_ELEMENT}
        </div>;
    }


    public getThemeContent(enumeration: Themes,): ReactElement {
        const reference = enumeration.reference;

        return <div key={`${enumeration.englishName} (theme content images)`} id={`${enumeration.englishNameInHtml}-themeContentImages-container`} className="themeContentImages-container">
            {reference.isInCourseTheme ? <Image source={`/${BASE_PATH}/theme/Course theme.tiff`} fallbackName="Course theme"/> : EMPTY_REACT_ELEMENT}
            {reference.isInWorldTheme ? <Image source={`/${BASE_PATH}/theme/World theme.tiff`} fallbackName="World theme"/> : EMPTY_REACT_ELEMENT}
        </div>;
    }

}

type EnumerationWithReference = Enum<any, any> & ClassWithEnglishName<string> & ClassWithReference<Name<string>>;
type EnumerationWithCategoryReference = Enum<any, any> & ClassWithEnglishName<string> & ClassWithReference<NameTraitFromACategory<string, NameTrait<string>>>;
type EnumerationWithInSuperMarioMakerGameReference = Enum<any, any> & ClassWithEnglishName<string> & ClassWithReference<ClassInAnySuperMarioMakerGame>;

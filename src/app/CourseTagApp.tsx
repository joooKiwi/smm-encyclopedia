import './CourseTagApp.scss';

import {Fragment} from 'react';

import type {AppInterpreterWithCardList,}                          from './interpreter/AppInterpreterWithCardList';
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList';
import type {ReactElement, ReactElementOrString}                   from '../util/react/ReactProperties';

import {AbstractCardListApp}           from './withInterpreter/AbstractCardListApp';
import {CourseTags}                    from '../core/courseTag/CourseTags';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {TranslationUtility}            from '../lang/components/TranslationUtility';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

export default class CourseTagApp
    extends AbstractCardListApp<AppInterpreterWithCardList<CourseTags>> {

    public constructor(props: {},) {
        super(props,);
        this.state = {typeDisplayed: ViewDisplays.CARD_LIST,};
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'courseTag';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent>{translation => <>{TranslationUtility.replaceAndInterpretTranslation(
            translation,
            'Every course tags', {
                course: <Fragment key="every course tag (lowercase course)">--course--</Fragment>,//TODO add course reference
                tags: <Fragment key="every course tag (plural lowercase tag)">--tags--</Fragment>,//TODO add tag reference
            },
        )}</>
        }</GameContentTranslationComponent>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithCardList<CourseTags> {
        return new class implements AppInterpreterWithCardList<CourseTags> {

            public get iterable(): IterableIterator<CourseTags> {
                return CourseTags[Symbol.iterator]();
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null;
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list';
            }

            public createCardListContent({reference: courseTag, englishName: name,}: CourseTags,): ReactElement {
                return courseTag.firstAppearance == null
                    ? EMPTY_REACT_ELEMENT
                    : <sub key={`${name} - first appearance`}>{courseTag.firstAppearance.simpleName}</sub>;
            }

            //endregion -------------------- Card list interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}

import './EveryCourseTagsApp.scss';

import {Fragment} from 'react';

import type {ReactElement} from '../util/react/ReactProperty';

import AbstractApp                     from './AbstractApp';
import {CourseTags}                    from '../core/courseTag/CourseTags';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import NameComponent                   from '../lang/name/component/Name.component';
import {TranslationUtility}            from '../lang/components/TranslationUtility';

export default class EveryCourseTagsApp
    extends AbstractApp {

    //region -------------------- Methods --------------------

    protected get header() {
        return <GameContentTranslationComponent>{translation => <h1
            className="text-center text-decoration-underline pb-3">{TranslationUtility.replaceAndInterpretTranslation(translation, 'Every course tags', {
            course: <Fragment key="every course tag (lowercase course)">--course--</Fragment>,//TODO add course reference
            tags: <Fragment key="every course tag (plural lowercase tag)">--tags--</Fragment>,//TODO add tag reference
        },)}</h1>
        }</GameContentTranslationComponent>;
    }

    protected get content() {
        return CourseTags.values
            .map(courseTag => ([courseTag.englishName, courseTag.reference,] as const))
            .map(([name, courseTag,]) =>//TODO move the popover to be on the span instead of the nameComponent only.
                <div key={`${name} - main container`} className="courseTag-container col-12 col-sm-6 col-md-3 col-lg-2">
                    <span key={`${name} - main text container`} className="rounded-pill">
                            <NameComponent key={`${name} - text container`} id="name" name={courseTag} popoverOrientation="left"/>
                        {courseTag.firstAppearance == null
                            ? EMPTY_REACT_ELEMENT
                            : <sub key={`${name} - first appearance`}>{courseTag.firstAppearance.simpleName}</sub>}
                    </span>
                </div>);
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent(): ReactElement {
        return <div id="courseTag-container">
            {this.header}
            <div className="container-fluid">{this.content}</div>
        </div>;
    }
}

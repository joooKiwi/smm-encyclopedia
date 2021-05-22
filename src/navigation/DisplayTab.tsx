import React, {Component}                     from 'react';
import {Link}                                 from 'react-router-dom';
import {TFuncKey, TFunction, withTranslation} from 'react-i18next';

import {Languages} from '../lang/Languages';

class DisplayTab
    extends Component<{ t: TFunction<'game' | 'content'> }> {


    private contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return this.props.t(value, {ns: 'content'});
    }

    private gameTranslation<TKeys extends TFuncKey<'game'>>(value: TKeys) {
        return this.props.t(value);
    }

    private static _createLi(key: string, partialPath: string, textContent: string): JSX.Element {
        return <li className="dropdown-item">
            <Link key={key} className="nav-link active" to={`/${Languages.currentLanguage.acronym}/${partialPath}`}>{textContent}</Link>
        </li>;
    }

    public render(): JSX.Element {
        return <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{this.contentTranslation('Display')}…</span>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                {DisplayTab._createLi('navigationEveryEntities', 'every/entity', this.gameTranslation('Display every entities'))}
                {DisplayTab._createLi('navigationEveryCategories', 'every/category', this.gameTranslation('Display every entity categories'))}
                {DisplayTab._createLi('navigationEveryGroups', 'every/group', this.gameTranslation('Display every entity groups'))}
                {DisplayTab._createLi('navigationEveryLimit', 'every/limit', this.gameTranslation('Display every limits'))}
                {DisplayTab._createLi('navigationEveryTheme', 'every/theme', this.gameTranslation('Display every themes'))}
            </ul>
        </li>;
    }

}

export default withTranslation(['game', 'content'])(DisplayTab);

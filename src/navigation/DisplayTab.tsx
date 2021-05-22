import React             from 'react';
import {Link}            from 'react-router-dom';
import {withTranslation} from 'react-i18next';

import {ComponentWithContentAndGameContentTranslation} from '../lang/components/ComponentWithContentAndGameContentTranslation';
import {Languages}                                     from '../lang/Languages';

class DisplayTab
    extends ComponentWithContentAndGameContentTranslation {


    private static _createLi(key: string, partialPath: string, textContent: string): JSX.Element {
        return <li className="dropdown-item">
            <Link key={key} className="nav-link active" to={`/${Languages.currentLanguage.acronym}/${partialPath}`}>{textContent}</Link>
        </li>;
    }

    public render(): JSX.Element {
        return <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{this.contentTranslation('Display')}…</span>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                {DisplayTab._createLi('navigationEveryEntities', 'every/entity', this.gameContentTranslation('Display every entities'))}
                {DisplayTab._createLi('navigationEveryCategories', 'every/category', this.gameContentTranslation('Display every entity categories'))}
                {DisplayTab._createLi('navigationEveryGroups', 'every/group', this.gameContentTranslation('Display every entity groups'))}
                {DisplayTab._createLi('navigationEveryLimit', 'every/limit', this.gameContentTranslation('Display every limits'))}
                {DisplayTab._createLi('navigationEveryTheme', 'every/theme', this.gameContentTranslation('Display every themes'))}
            </ul>
        </li>;
    }

}

export default withTranslation(['game', 'content'])(DisplayTab);

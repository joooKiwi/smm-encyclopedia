import React from "react";
import {Link} from "react-router-dom";
import {__} from "../Languages";

export default function LanguageChanger() {
    return <li key={'languageChanger'} className="nav-item dropdown d-flex">
        <span key={'languageChanger_changeTheLanguage'} id="languageChanger" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{__('Change the language')}</span>
        <ul className="dropdown-menu" aria-labelledby="languageChanger">
            <li><Link key="languageChanger_ja" className="dropdown-item" to="/ja">{__('Japanese')}</Link></li>
            <li><Link key="languageChanger_enUS" className="dropdown-item" to="/en_US">{`${__('English')} (${__('America')})`}</Link></li>
            <li><Link key="languageChanger_enEU" className="dropdown-item" to="/en_EU">{`${__('English')} (${__('Europe')})`}</Link></li>
            <li><Link key="languageChanger_spAM" className="dropdown-item" to="/es_AM">{`${__('Spanish')} (${__('America')})`}</Link></li>
            <li><Link key="languageChanger_spEU" className="dropdown-item" to="/es_EU">{`${__('Spanish')} (${__('Europe')})`}</Link></li>
            <li><Link key="languageChanger_frCA" className="dropdown-item" to="/fr_CA">{`${__('French')} (${__('Canada')})`}</Link></li>
            <li><Link key="languageChanger_frEU" className="dropdown-item" to="/fr_EU">{`${__('French')} (${__('Europe')})`}</Link></li>
            <li><Link key="languageChanger_nl" className="dropdown-item" to="/nl">{__('Dutch')}</Link></li>
            <li><Link key="languageChanger_de" className="dropdown-item" to="/de">{__('German')}</Link></li>
            <li><Link key="languageChanger_it" className="dropdown-item" to="/it">{__('Italian')}</Link></li>
            <li><Link key="languageChanger_ru" className="dropdown-item" to="/ru">{__('Russian')}</Link></li>
            <li><Link key="languageChanger_ko" className="dropdown-item" to="/ko">{__('Korean')}</Link></li>
            <li><Link key="languageChanger_zhT" className="dropdown-item" to="/zh_T">{__('Chinese (traditional)')}</Link></li>
            <li><Link key="languageChanger_zhS" className="dropdown-item" to="/zh_S">{__('Chinese (simplified)')}</Link></li>
        </ul>
    </li>
}
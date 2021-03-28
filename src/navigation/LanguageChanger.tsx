import React from "react";
import {Link} from "react-router-dom";
import {__} from "../Languages";

export default function LanguageChanger() {
    return <li key={'languageChanger'} className="nav-item dropdown d-flex">
        <span key={'languageChanger_changeTheLanguage'} id="languageChanger" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{__('Change the language')}</span>
        <ul className="dropdown-menu" aria-labelledby="languageChanger">
            <li><Link key={'languageChanger_enUS'} className="dropdown-item" to="/en_US">{`${__('English')} (${__('America')})`}</Link></li>
            <li><Link key={'languageChanger_enEU'} className="dropdown-item" to="/en_EU">{`${__('English')} (${__('Europe')})`}</Link></li>
            <li><Link key={'languageChanger_frCA'} className="dropdown-item" to="/fr_CA">{`${__('French')} (${__('Canada')})`}</Link></li>
            <li><Link key={'languageChanger_frEU'} className="dropdown-item" to="/fr_EU">{`${__('French')} (${__('Europe')})`}</Link></li>
            <li><Link key={'languageChanger_sp'} className="dropdown-item" to="/sp">{__('Spanish')}</Link></li>
            <li><Link key={'languageChanger_jp'} className="dropdown-item" to="/jp">{__('Japanese')}</Link></li>
            <li><Link key={'languageChanger_ko'} className="dropdown-item" to="/ko">{__('Korean')}</Link></li>
            <li><Link key={'languageChanger_chT'} className="dropdown-item" to="/chT">{__('Chinese (traditional)')}</Link></li>
            <li><Link key={'languageChanger_chS'} className="dropdown-item" to="/chS">{__('Chinese (simplified)')}</Link></li>
        </ul>
    </li>
}
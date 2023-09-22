import './Footer.scss'

import {contentTranslation}        from 'lang/components/translationMethods'
import SimpleDate                  from 'lang/date/SimpleDate'
import BottomLanguageChangerButton from 'navigation/button/BottomLanguageChanger.button'
import DiscordButton               from 'navigation/button/Discord.button'
import GithubButton                from 'navigation/button/Github.button'

/**
 * @reactComponent
 */
export default function Footer() {
    return <footer id="footer-container" className="bg-dark bg-gradient">
        <div className="container">
            <div id="helper-container" className="row justify-content-around justify-content-sm-center gy-2 gy-sm-0 pb-2">
                <div id="github-button-container" className="col-auto"><GithubButton/></div>
                <div id="discord-button-container" className="col-auto"><DiscordButton/></div>
                <div id="bottomLanguageChanger-button-container" className="col-auto col-sm-12"><BottomLanguageChangerButton/></div>
            </div>
            <div className="row">
                <small id="version" className="text-center text-light">
                    {contentTranslation('Version')} 0.20 <sub className="opacity-50">beta</sub>
                </small>
                <small id="copyright" className="text-center text-light">
                    {contentTranslation('Copyright')}<sup className="opacity-50">©</sup> Nintendo<span className="opacity-50">™</span>
                </small>
                <span id="copyright_madeBy" className="text-center text-light">
                    <small>{contentTranslation('React application made by')}: </small>JóôòKiwi
                </span>
                <small id="copyright_lastEdited" className="text-center text-light">
                    {contentTranslation('Last update')}: <i><SimpleDate day={16} month={6} year={2023}/></i>
                </small>
            </div>
        </div>
    </footer>
}

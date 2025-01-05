import './Footer.scss'

import {contentTranslation}        from 'lang/components/translationMethods'
import SimpleDate                  from 'lang/date/SimpleDate'
import BottomLanguageChangerButton from 'navigation/button/BottomLanguageChanger.button'
import DiscordButton               from 'navigation/button/Discord.button'
import GithubButton                from 'navigation/button/Github.button'

/** @reactComponent */
export default function Footer() {
    return <footer id="footer-container" className="bg-dark bg-gradient">
        <div className="container">
            <div id="helper-container" className="row justify-content-around justify-content-sm-center gy-2 gy-sm-0 pb-2">
                <div id="github-button-container" className="col-auto"><GithubButton/></div>
                <div id="discord-button-container" className="col-auto"><DiscordButton/></div>
                <div id="bottomLanguageChanger-button-container" className="col-auto col-sm-12"><BottomLanguageChangerButton/></div>
            </div>
            <div className="row">
                 <span className="text-center text-light">
                    <small>{contentTranslation('React application made by',)}: </small>JóôòKiwi
                </span>
                <small className="text-center text-light">
                    {contentTranslation('Every image and sound are the propriety of Nintendo', {
                        Nintendo: <strong key="Nintendo" className="Nintendo text-white bg-danger bg-opacity-75 rounded rounded-pill p-1">Nintendo<span className="opacity-50">™</span></strong>,
                    },)}
                </small>
                <small className="text-center text-light">
                    {contentTranslation('Last update',)}: <em><SimpleDate day={25} month={11} year={2024}/></em>
                </small>
                <small className="text-center text-light">
                    {contentTranslation('Version',)} 0.26 <sub className="opacity-50">beta</sub>
                </small>
            </div>
        </div>
    </footer>
}

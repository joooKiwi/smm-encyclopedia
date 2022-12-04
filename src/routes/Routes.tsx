import {HashRouter, Navigate, Route, Routes as ReactRoutes} from 'react-router-dom'
import {Suspense}                                           from 'react'

import LoadingApp          from 'app/LoadingApp'
import {ProjectLanguages}  from 'lang/ProjectLanguages'
import DirectRoute         from 'routes/DirectRoute'
import {everySimpleRoutes} from 'routes/everyRoutes'
import {redirectToHome}    from 'routes/redirectToHome'

/**
 *
 * @reactComponent
 */
export default function Routes() {
    return <HashRouter>
        <Suspense fallback={<LoadingApp/>}>
            <ReactRoutes>
                <Route path="/" element={redirectToHome()}/>
                {getRedirectRoutesToProjectRoute_InDefault()}
                {getRedirectRoutesToHome_InEveryLanguage()}
                {getRoutesToProjectRoute_InEveryLanguage()}
            </ReactRoutes>
        </Suspense>
    </HashRouter>
}

function getRedirectRoutesToProjectRoute_InDefault() {
    return everySimpleRoutes.map(route =>
        <Route key={`redirect route - ${route.path}`} path={route.path} element={
            <Navigate replace to={`/${ProjectLanguages.default.projectAcronym}${route.path}`}/>
        }/>
    )
}

function getRedirectRoutesToHome_InEveryLanguage() {
    return ProjectLanguages.values.map(language =>
        <Route key={`redirect route (home) (${language.projectAcronym})`} path={`/${language.projectAcronym}`} element={
            redirectToHome(language)
        }/>
    )
}

function getRoutesToProjectRoute_InEveryLanguage() {
    return ProjectLanguages.values.map(language => everySimpleRoutes.map(route =>
        <Route key={`direct route - ${route.name}(${language.projectAcronym})`} path={`/${language.projectAcronym}${route.path}`} element={
            <DirectRoute language={language} route={route}/>
        }/>
    )).toArray().flat()
}
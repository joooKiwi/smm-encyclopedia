import type {Metric} from 'web-vitals'

type ReportHandler = (metric: Metric,) => void

export default function reportWebVitals(handler?: ReportHandler,) {
    if (handler == null)
        return

    import('web-vitals').then(({onCLS, onFCP, onLCP, onTTFB,},) => {
        onCLS(handler,)
        onFCP(handler,)
        onLCP(handler,)
        onTTFB(handler,)
    })
}

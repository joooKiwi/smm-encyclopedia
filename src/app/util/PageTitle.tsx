import type {ReactProperties} from 'util/react/ReactProperties'

interface PageTitleProperties
    extends ReactProperties {

    readonly value: string

}

/** @reactComponent */
export default function PageTitle({value,}: PageTitleProperties,) {
    return <title>{`${value} | Super Mario Maker Encyclopedia`}</title>//— could also be used if | is not a good choice
}

import AbstractApp from './AbstractApp'

/**
 * @reactComponent
 */
export default class AboutApp
    extends AbstractApp {

    protected override _mainContent() {
        return <>About page</>
    }

}

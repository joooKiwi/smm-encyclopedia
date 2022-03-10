import 'bootstrap/dist/js/bootstrap.esm';
import './index.scss';
import './lang/i18n';

import ReactDOM        from 'react-dom';
import reportWebVitals from './reportWebVitals';
import IndexComponent  from './IndexComponent';

ReactDOM.render(
    <IndexComponent/>,
    document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}

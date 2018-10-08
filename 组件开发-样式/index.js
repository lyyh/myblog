/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";

const render = (App) => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./App', () => render(App))
}

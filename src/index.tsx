import React from 'react'
import ReactDOM from 'react-dom'

import App from '#/components/app'

const Index = () => (
  <App/>
)

document.addEventListener('DOMContentLoaded', e => {
    ReactDOM.render(
        <Index/>,
        document.querySelector('#app')
    )
})
import React from 'react'
import ReactDOM from 'react-dom'
//import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch'

const App = () => {
    return <div id='root'>
        <UserSearch />
    </div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
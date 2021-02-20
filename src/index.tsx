import ReactDOM from 'react-dom'
// import GuestList from './state/GuestList'
// import UserSearch from './state/UserSearch'
// import EventComponent from './events/EventComponent'
import UserSearch from './refs/UserSearch'

const App = () => {
    return <div id='root'>
        <UserSearch />
    </div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
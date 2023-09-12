
import { createRoot } from 'react-dom/client'
//import GuestList from './state/GuestList';
//import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent'
import UserSearch from './refs/UserSearch';

const App = () => {
    return(
        <div>
           {/* <GuestList /> */}
           <UserSearch />
        </div>
    )
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />)
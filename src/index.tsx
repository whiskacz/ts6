
import { createRoot } from 'react-dom/client'


const App = () => {
    return(
        <div>
            <h1>hejka</h1>
           
        </div>
    )
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />)
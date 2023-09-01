// Components Imports
import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'

// Styles Imports
import './App.scss'
import './styles/colors.scss'
import './styles/global.scss'

function App() {
  return (
    <div>
      <Header />
      <NewTask />
    </div>
  )
}

export default App

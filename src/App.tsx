import './App.css'
import { ToDoList } from './list/list'
import { Provider } from 'react-redux'
import { store } from './redux/root'

function App() {

  return (
    <>
      <Provider store={store}>
        <ToDoList />
      </Provider>
    </>
  )
}

export default App

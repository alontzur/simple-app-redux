import './App.css'
import { ToDoList } from './list/list'
import { Provider } from 'react-redux'
import { store } from './redux/root'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
      <Provider store={store}>
        <RecoilRoot>
          <ToDoList />
        </RecoilRoot>
      </Provider>
    </>
  )
}

export default App

import TaskProvider from './context/TaskContext';
import NavbarContainer from './pages/navbar/NavbarContainer';
import TaskFrom from './components/taskComp/TaskFrom';
import AllTask from './components/taskComp/AllTask';

const App = () => {
  return (
    <TaskProvider>
        <header>
            <NavbarContainer/>
        </header>
        <main className='flex-container'>
            <TaskFrom/>
            <AllTask/>
        </main>
    </TaskProvider>
  )
}

export default App
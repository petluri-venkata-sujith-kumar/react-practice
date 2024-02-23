import UserProvider from './context/userContext'
import Profile from './components/users/Profile'
import AirtelProvider from './context/AirtelContext'
import Shashi from './components/users/Shashi';
import Lavan from './components/users/Lavan';
import Counter from './components/Counter';
import CounterProvider from './context/CounterContext';
import Container from './components/Container';
import { ThemeContextApi, theme } from './context/ThemeContext';


const App = () => {
  return (
    // <UserProvider>
    //     <Profile/>
    // </UserProvider>
    // <AirtelProvider>
    //     <Shashi/>
    //     <Lavan/>
    // </AirtelProvider>
    // <section id='container'>
    //     <CounterProvider>
    //         <Counter/>
    //     </CounterProvider>
    // </section>
    <ThemeContextApi.Provider value={theme}>
        <Container/>
    </ThemeContextApi.Provider>
  )
}

export default App
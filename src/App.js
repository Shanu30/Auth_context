import { Navbar } from './Components/Navbar';
import { Body } from './Components/Body';
import { ThemeContext } from './Context/ThemeProvider';
import { AppWrapper } from './App.styled';
import {useContext} from "react";
function App() {
  const {theme}=useContext(ThemeContext)
  return (
    <AppWrapper theme={theme}>
    
     <Navbar />
     <Body />
    </AppWrapper>
  );
}

export default App;

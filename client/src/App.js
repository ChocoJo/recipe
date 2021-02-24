import { Routes } from "./routes/Routes";
import "./utils/css/Global.css"
import { UserProvider } from "./utils/provider/UserProvider";
import { Navigation } from './components/navigation/Navigation'

function App() {
  return (
    <UserProvider>
    <Routes>
      <Navigation/>    
    </Routes>
    </UserProvider>
  );
}

export default App;
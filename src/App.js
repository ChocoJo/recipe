import { Routes } from "./routes/Routes";
import { DesktopNavigation } from "./components/navigation/desktopnavigation/DesktopNavigation";
import "./utils/css/Global.css"
import { UserProvider } from "./utils/provider/UserProvider";

function App() {
  return (
    <UserProvider>
    <Routes>
      <DesktopNavigation />    
    </Routes>
    </UserProvider>
  );
}

export default App;
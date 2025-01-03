import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./login";
import { LogoutButton } from "./logout";
import { Profile } from "./profile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
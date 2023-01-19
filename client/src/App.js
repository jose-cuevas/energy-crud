import UserProvider from "./context/UserContext";

import Users from "./Pages/Users";

function App() {
  return (
    <div className="container">
      <UserProvider>
        <Users />
      </UserProvider>
    </div>
  );
}

export default App;

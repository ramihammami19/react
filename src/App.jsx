import React from "react";

// Render a YouTube video player
import "./App.css";
import Profile from "./compenents/Profile";
import Private from "./HOC/Private";

function App() {
  return (
    <>
      <div>
        <Private>
          <Profile data="my data props" />
        </Private>
      </div>
    </>
  );
}

export default App;

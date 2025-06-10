import React, { useEffect } from "react"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import MainPage from "./Components/MainPage"
import Layout from "./Components/Shared/Layout"

function App() {

  React.useLayoutEffect(() => {
    // 1. Load the widget script if not already present
    if (!document.getElementById("tailortalk-widget-script")) {
      const script = document.createElement("script");
      script.id = "tailortalk-widget-script";
      script.src="https://frontend-967663674421.us-central1.run.app/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.TailorTalk && window.TailorTalk.init({
          agentId: "test_QC_hello",         // <-- Replace with your agent ID
        agentName: "Akshat Awasthi",     // <-- Replace with your agent name
          position: { bottom: "20px", right: "20px" }, // or { bottom: "20px", left: "20px" }
          theme: "light",                   // or "dark", "default", "minimal"
        });
      };
    }

    // Cleanup: remove widget on unmount
    return () => {
      const container = document.querySelector(".tt-widget-container");
      if (container) container.remove();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

import React, { useEffect } from "react"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import MainPage from "./Components/MainPage"
import Layout from "./Components/Shared/Layout"

function App() {

  React.useLayoutEffect(() => {
    if (!document.getElementById("tailortalk-widget-script")) {
      const script = document.createElement("script");
      script.id = "tailortalk-widget-script";
      script.src = "https://plugins.tailortalk.ai/widget.js";
      script.async = true;
      document.body.appendChild(script);
  
      script.onload = () => {
        window.TailorTalk && window.TailorTalk.init({
          widgetName: "Akshat",
          agentId: "test_QC_akshat",
          color: "#888aec",
          position: {
          "bottom": "20px",
          "right": "20px"
  },
          options: {
          "buttonWidth": 140,
          "buttonHeight": 40,
          "buttonText": "Let's Chat"
  }
        });
      };
    }
  
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

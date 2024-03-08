import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

// Define CSS styles for layout
const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Set minimum height of the container to fill the viewport
};

const contentStyles = {
  flex: "1", // Allow the content to grow to fill the remaining space
};


const AppLayout = () => (
  <Router>
    <ChakraProvider>
      <div style={layoutStyles}>
        <Header />
        <div style={contentStyles}>
          <Routes>
            <Route path="/" exact element={<App />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </ChakraProvider>
  </Router>
);

// Render the layout
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
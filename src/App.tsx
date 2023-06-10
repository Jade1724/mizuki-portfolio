import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import GreenWork from "./pages/GreenWork";
import Journey from "./pages/Journey";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="green-work" element={<GreenWork />} />
                    <Route path="journey" element={<Journey />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

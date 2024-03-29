/*Movie.js*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Kategorie from "./routes/Kategorie";
import Save from "./routes/Save";
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/Asset/ScrollToTop";
import { Reset } from "styled-reset";
import "./App.css";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Reset />
                <Navigation />
                <ScrollToTop />
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/movie/:id`} element={<Detail />} />
                    <Route
                        path={`/page/:group/:page`}
                        element={<Kategorie />}
                    />
                    <Route path={`/search/:search`} element={<Search />} />
                    <Route path={`/save/`} element={<Save />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;

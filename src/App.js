/*Movie.js*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation/Navigation";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Detail />} />
                    <Route path={`/page/:group/:page`} element={<Home />} />
                    <Route path={`/search/:search`} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;

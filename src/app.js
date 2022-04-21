import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../src/components/home/home';
import Survey from "./components/Survey/Survey";
import Result from "./components/Result/Result";
import Result_test from "./components/Result_test/Result.js"
import GlobalStyle from "./styles/globalStyle";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<Survey />} />
                <Route path="/result/:mbtiName" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
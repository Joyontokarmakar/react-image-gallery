import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as route from './routes/Slugs'
import {Home} from "./pages/home.jsx";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
function App() {

    return (
        <>
            <BrowserRouter>
                <div className={'h-screen w-screen flex justify-center items-center'}>
                    <div className={'w-ful lg:w-1/2 h-[300px] bg-secondaryColor rounded-lg'}>
                        <Header/>
                        <div className={'min-h-[calc(300px-137px)] p-2'}>
                            <Routes>
                                <Route path={route.ROOT_PATH} element={<Home/>} />
                            </Routes>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App

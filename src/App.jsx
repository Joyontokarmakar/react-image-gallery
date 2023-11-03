import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as route from './routes/Slugs'
import {Home} from "./pages/home.jsx";
// import {Header} from "./components/Header.jsx";
// import {Footer} from "./components/Footer.jsx";
function App() {

    return (
        <>
            <BrowserRouter>
            {/* <div className={'h-screen w-full'}>
                <Header/> */}
                <div className={'h-screen flex justify-center items-center bg-ashColor'}>
                    <div className={'w-full lg:w-1/2 min-h-[300px] bg-white rounded-lg'}>
                        <div className={'min-h-[calc(300px-137px)] p-2'}>
                            <Routes>
                                <Route path={route.ROOT_PATH} element={<Home/>} />
                            </Routes>
                        </div>
                    </div>
                </div>
                {/* <Footer/>
            </div> */}
            </BrowserRouter>
        </>
    )
}

export default App

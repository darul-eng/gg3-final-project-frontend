import './App.css'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import Auth from "./pages/Auth";
import {useCookies} from "react-cookie";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Auth path={"/signup"}/>}></Route>
            <Route path='/login' element={<Auth path={"/signin"}/>}></Route>
            <Route path="/channels" element={
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>
            }>
            </Route>
            <Route path='/channels/:videoId' element={
                <ProtectedRoute>
                    <VideoDetail/>
                </ProtectedRoute>
            }/>
        </Route>
    )
)

function ProtectedRoute({children}) {
    const [cookies, setCookies] = useCookies(["access_token"])
    const token = cookies.access_token

    if (!token) return <Navigate to='/login'/>

    return children
}

const theme = extendTheme({
    colors: {
        brand: {
            900: '#1a202c',
        },
    },
    styles: {
        global: {
            body: {
                bg: 'brand.900',
                color: "white"
            },
        },
    },
});

function App() {
  return (
      <ChakraProvider theme={theme}>
          <RouterProvider router={router}/>
      </ChakraProvider>
  );
}

export default App;

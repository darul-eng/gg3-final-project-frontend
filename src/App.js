import logo from './logo.svg';
import './App.css';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/channels">
            <Route index element={<Home/>}/>
            <Route path='/channels/:videoId' element={<VideoDetail/>}/>
        </Route>
    )
)

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
          {/*<Outlet>*/}
              <RouterProvider router={router}/>
          {/*</Outlet>*/}
      </ChakraProvider>
  );
}

export default App;

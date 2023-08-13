import {createContext, useContext, useState} from "react";

const VideosContext = createContext();

export function VideosProvider({children}) {
    const [videos, setVideos] = useState(null);

    return (
        <VideosContext.Provider value={{videos, setVideos}}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideos() {
    return useContext(VideosContext)
}
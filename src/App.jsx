import React from "react";
import { Header, ModelViewer, ActionHandler } from "./components/index.js";

function App() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-[#9cd9ea]">
            <Header />
            <div className="mb-52 w-full max-w-lg h-96 bg-[#9cd9ea] flex items-center justify-center">
                <div
                    onClick={() => new Audio("/assets/audios/chirp.wav").play()}
                    className="w-48 h-48 bg-[#69b050] shadow-xl rounded-full flex items-center justify-center"
                >
                    <ModelViewer />
                </div>
            </div>
            <ActionHandler />
        </div>
    );
}

export default App;

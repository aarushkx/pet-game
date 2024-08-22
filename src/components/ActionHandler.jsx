import React, { useState } from "react";

function ActionHandler() {
    const [happiness, setHappiness] = useState(0);
    const [excitement, setExcitement] = useState(0);
    const [fear, setFear] = useState(0);

    const handleGrapeClick = () => {
        new Audio("/assets/audios/grape.mp3").play();

        setHappiness((prev) =>
            Math.min(100, prev + 5 + Math.floor(Math.random() * 5) + 1)
        );
        setExcitement((prev) =>
            Math.min(100, prev + 1 + Math.floor(Math.random() * 5) + 1)
        );
        setFear((prev) =>
            Math.max(0, prev - 1 - Math.floor(Math.random() * 5) + 1)
        );
    };

    const handleLeafClick = () => {
        new Audio("/assets/audios/leaf.mp3").play();

        setHappiness((prev) =>
            Math.min(100, prev + 1 + Math.floor(Math.random() * 5) + 1)
        );
        setExcitement((prev) =>
            Math.min(100, prev + 4 + Math.floor(Math.random() * 5) + 1)
        );
        setFear((prev) =>
            Math.max(0, prev - 5 - Math.floor(Math.random() * 5) + 1)
        );
    };

    const handleBombClick = () => {
        new Audio("/assets/audios/bomb.mp3").play();

        setHappiness((prev) => Math.max(0, prev - 10));
        setExcitement((prev) => Math.max(0, prev - 8));
        setFear((prev) =>
            Math.min(100, prev + 6 + Math.floor(Math.random() * 5) + 1)
        );
    };

    const calculateLove = (happiness, excitement, fear) => {
        happiness = Math.max(0, Math.min(100, happiness));
        excitement = Math.max(0, Math.min(100, excitement));
        fear = Math.max(0, Math.min(100, fear));

        let baseLove = (happiness + excitement) / 2;

        let fearFactor = (100 - fear) / 100;
        let love = baseLove * fearFactor;

        if (fear === 0 && happiness === 100 && excitement === 100) {
            love = 100;
        }
        return Math.floor(Math.max(0, Math.min(100, love)));
    };

    const love = calculateLove(happiness, excitement, fear);

    const labelClasses = "text-center text-3xl font-bold mb-2";
    const buttonClasses =
        "w-16 h-16 bg-[#d5e7d3] rounded-full flex items-center justify-center shadow-lg hover:bg-[#69b050] transition-colors text-4xl";
    return (
        <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center bg-[#b5d5a9] py-4 space-y-4 shadow-2xl z-10">
            <div className="text-4xl m-4 font-bold">💞: {love}</div>
            <div className="flex justify-evenly w-full">
                <div className="flex flex-col items-center">
                    <div className={labelClasses}>
                        😊:
                        {happiness}
                    </div>
                    <button
                        className={buttonClasses}
                        onClick={handleGrapeClick}
                    >
                        🍇
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <div className={labelClasses}>😃: {excitement}</div>
                    <button className={buttonClasses} onClick={handleLeafClick}>
                        🌿
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <div className={labelClasses}>😨: {fear}</div>
                    <button className={buttonClasses} onClick={handleBombClick}>
                        💣
                    </button>
                </div>
            </div>
            <p className="text-sm text-[#457534] text-center z-20">
                &copy; {new Date().getFullYear()} Aarush Kumar. All rights
                reserved.
            </p>
        </div>
    );
}

export default ActionHandler;

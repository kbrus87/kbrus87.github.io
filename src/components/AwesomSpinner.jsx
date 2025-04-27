import React, { useEffect, useState } from "react";
//import dinoWebp from "../../public/images/din3_.webp"

export default function AwesomSpinner() {
    const [text, setText] = useState("");
    const fullText = "LOADING ...";

    useEffect(() => {
        let index = 0;
        let direction = 1; // 1 = escribiendo, -1 = borrando

        const interval = setInterval(() => {
            if (direction === 1) {
                setText(fullText.slice(0, index + 1));
                index++;
                if (index >= fullText.length) {
                    direction = -1;
                    index = fullText.length - 1;
                }
            } else {
                setText(fullText.slice(0, index));
                index--;
                if (index < 0) {
                    direction = 1;
                    index = 0;
                }
            }
        }, 75);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <img
                // src="/images/dinosaur2no.png"
                src="/images/din3_.webp"
                alt="loading"
                className="w-70 h-70 mb-4"
            />
            <div className="text-xl tracking-widest font-audiowide text-white">{text}</div>
        </div>
    );
}

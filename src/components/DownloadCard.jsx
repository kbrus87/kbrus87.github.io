import React from "react";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const DownloadCard = ({ project, download, long }) => {
    const supportedOS = project.compatible_os.split(",").map((os) => os.trim());

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = download; // tu variable de descarga
        // link.download = ""; // podés especificar el nombre del archivo si querés
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`bg-white p-2 rounded-lg shadow-lg max-w-sm ${long ? "flex w-full space-x-3 w-fit" : "w-250"}`}>
            <div className={`${long ? "" : "mb-4"}`}>
                <button onClick={handleDownload} style={{ backgroundColor: "purple", fontSize: "1rem" }} className="bg-blue-500 text-white py-2 px-4 rounded-full flex items-center gap-2 w-full">
                    <HiDownload />
                    <span>Download {project.name}</span>
                </button>
            </div>

            <div className={`flex justify-around ${long ? "flex flex-col flex-wrap" : "w-250"}`}>
                <div className="flex align-center" style={{ fontSize: "0.8rem" }}>
                    <span className="font-medium">OS:</span>
                    <div className="ml-2 flex gap-3">
                        {supportedOS.includes("windows") ? <FaWindows className="text-gray-700" /> : <></>}
                        {supportedOS.includes("macos") ? <FaApple className="text-gray-700" /> : <></>}
                        {supportedOS.includes("linux") ? <FaLinux className="text-gray-700" /> : <></>}
                    </div>
                </div>

                <div className="flex align-center" style={{ fontSize: "0.8rem" }}>
                    <span className="font-medium">DAWs: </span>
                    <p className="text-gray-600">{project.hosts}</p>
                </div>
            </div>
        </div>
    );
};

export default DownloadCard;

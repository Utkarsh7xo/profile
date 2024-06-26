import { useState } from "react";
import About from "./Tab/About";
import Contacts from "./Tab/Contacts";
import Projects from "./Tab/Projects";
//import Skills from "./Tab/Skills";
export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["About", "Contacts", "Projects"];

    return (
        <div className="px-4 py-4 md:p-8 h-full">
            <div className="flex border-b transition md:fixed">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 -mb-px transition font-semibold focus:outline-none ${activeTab === index ?
                            "border-b-2 border-blue-800 text-blue-800" :
                            "border-b-2 border-transparent text-gray-700 hover:text-gray-900 md:text-gray-50"
                            }
                        `}
                        onClick={() => setActiveTab(index)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className="top-12 h-[95%] md:mt-10 md:overflow-y-auto no-scrollbar">
                {activeTab === 0 && <About/>}
                {activeTab === 1 && <Contacts/>}
                {activeTab === 2 && <Projects/>}
                {/* {activeTab === 3 && <Skills/>} */}
            </div>
        </div>
    );
}
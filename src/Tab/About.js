import React from "react";
export default function About() {
    return (
        <div className="pt-4">
            <div>Hi! My name is <p class=" inline w-auto bg-clip-text font-bold text-transparent bg-gradient-to-r from-rose-600 to-purple-500">Utkarsh Maurya </p>
                I am currently a third year undergraduate at <p className=" inline font-bold">IIT Bombay </p>
                in the department of <p className="inline font-bold">Electrical Engineering </p>
                with minor in <p className="inline font-bold">Data Science and Machine Learning</p>
                
            </div>
            <div className="w-full flex">
                <h1 className="text-xl my-4 border-b-2 border-blue-900">Interests</h1>
            </div>
            <div>
                AI / ML | Web Dev | App Dev | Physics simulations
            </div>
            <div className="w-full flex">
                <h1 className="text-xl my-4 border-b-2 border-blue-900">Education</h1>
            </div>
            <Card imgUrl="https://i.pinimg.com/originals/f7/b7/86/f7b786921ab3444631dba2ac1edb56f9.png" heading="Indian Institute of Technology , Bombay" description="Btech in Electrical Engineering" year="2022 - Present"/>
            <Card imgUrl="https://www.joonsquare.com/usermanage/image/business/bishop-johnson-school-and-college-prayagraj-3627/bishop-johnson-school-and-college-prayagraj-logo.jpg" heading="Bishop Johnson School and Collage" description="Class XII : 94.50%" year="2021"/>
            <Card imgUrl="https://www.joonsquare.com/usermanage/image/business/bishop-johnson-school-and-college-prayagraj-3627/bishop-johnson-school-and-college-prayagraj-logo.jpg" heading="Bishop Johnson School and Collage" description="Class X : 94.60%" year="2021"/>

        </div>
    );
}
function Card({ heading, description, imgUrl, year }) {
    return (
        <div className="w-full lg:w-2/3 flex-row cursor-pointer transition my-2">
            <div className="w-full h-24 bg-white bg-opacity-20 hover:bg-opacity-45 transition backdrop-blur-lg rounded-3xl flex overflow-hidden">
                <div className="md:w-1/3 w-1/4 h-full flex items-center justify-center">
                    <img src={imgUrl} alt={heading} className="object-cover h-full flex items-center" />

                </div>
                <div className="ml-5 tracking-tighter md:w-2/3 w-2/3 h-full flex-col mr-2">
                    <div className="pt-2 text-sm font-bold line-clamp-2"><h1>{heading}</h1></div>
                    <div className="py-1 tracking-tighter line-clamp-2 text-sm"><p>{description}</p></div>
                    <div className="py-1 tracking-tighter line-clamp-1 text-sm"><p>{year}</p></div>
                </div>
            </div>
        </div>
    );
}

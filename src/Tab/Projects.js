import React from "react";
const aimlProjects = [
    {
        "heading": "Satellite Image Segmentation and Change Detection",
        "description": "Smart India Hackathon 2023: Led a 6 member team to develop an ML model using the U-Net framework to segment Sentinel-2 and LISS-4 satellite images, achieving an accuracy of 92%. Among the top five teams nationally out of 171 submissions.",
        "imgUrl": "https://www.sih.gov.in/img/SIH_2018_logo.png",
        "tags": ['python', 'keras', 'TensorFlow', 'Scikit-Learn'],
        "url": ""
    },
    {
        "heading": "Chemical Factory ML Model",
        "description": "Applied advanced data preparation techniques and feature selection methods to optimize model performance. Identified essential independent variables and dropped irrelevant columns.",
        "imgUrl": "https://www.cannonartes.com/wp-content/uploads/2022/07/artes-markets-refining-petrochemicals-jpg-1024x683.jpg",
        "tags": ['ML', 'data preparation', 'feature selection'],
    }

];
const otherProjects = [
    {
        "heading": "CPU Design",
        "description": "Digital Design Project (Autumn 2023): Crafted detailed flow charts, FSMs, and component diagrams. Implemented all 14 instructions of the IITB-CPU’s ISA using VHDL to construct the controller-FSM.",
        "imgUrl": "https://cdn.arstechnica.net/wp-content/uploads/archive/hardware/floorplan.jpg",
        "tags": ['VHDL', 'FSM', 'ISA'],
        "url": ""
    },
    {
        "heading": "Line Follower Bot",
        "description": "Makerspace Project (Autumn 2022): Designed and developed a line follower bot with a mechanical claw using 3D modeling, Arduino IDE, and various sensors and actuators. Programmed the bot logic using C/C++.",
        "imgUrl": "https://circuitdigest.com/sites/default/files/inlineimages/Raspberry-pi-line-follower-robot-setup-2.jpg",
        "tags": ['Arduino', 'C/C++', 'sensors', 'actuators'],
        "url": ""
    },
    {
        "heading": "Unity Games",
        "description": "Self Project (2018): Developed 2D games for the Android platform using Unity and C#. Created games like Save The Day and Die Trying, implementing various game features such as UI, sound effects, animations, and leaderboards.",
        "imgUrl": "https://i.pinimg.com/originals/47/b1/81/47b1815866ebf696b1535a00b6fdf83c.png",
        "tags": ['Unity', 'C#', 'game development'],
        "url": ""
    },
    {
        "heading": "Simulations and Animations",
        "description": "Self Project (2017): Developed interactive simulations and animations using p5.js, exploring topics in physics, mathematics, nature, and art. Created over 25+ physics-based animations utilizing concepts like vector algebra, calculus, and particle dynamics.",
        "imgUrl": "https://seeklogo.com/images/P/p5-js-logo-85C733C6AD-seeklogo.com.png",
        "tags": ['p5.js', 'physics simulations', 'animations'],
        "url": ""
    }
];
const webProjects = [
    {
        "heading": "Discussion Forum with PHP",
        "description": "Self Project 2024: Developed an article discussion website with user registration and login using PHP and MySQL. Implemented secure authentication mechanisms, including password hashing and session management.",
        "imgUrl": "https://pngimg.com/uploads/mysql/mysql_PNG25.png",
        "tags": ['PHP', 'MySQL', 'authentication'],
        "url": ""
    },
    {
        "heading": "Course Registration REST API with Flask",
        "description": "Developed a RESTful API with Flask-RESTful and Flask-SQLAlchemy. Implemented CRUD operations for courses and students with error handling and adherence to REST principles and HTTP status codes.",
        "imgUrl": "https://www.pngkey.com/png/full/98-985032_flask-logo-flask-python-icon.png",
        "tags": ['Flask', 'REST API', 'SQLAlchemy'],
        "url": ""
    },
    {
        "heading": "Portfolio Website",
        "description": "Self Project (2024): Designed and developed a fully functional portfolio website showcasing web development skills. Created clean, modern, and user-friendly web interfaces using Reaact, tailwind-CSS, and HTML.",
        "imgUrl": "https://www.pngmart.com/files/23/React-Logo-PNG-Pic.png",
        "tags": ['React', 'tailwind', 'HTML'],
        "url": ""
    }
];



export default function Projects() {
    return (
        <div className="pt-4">
            <div className="w-full flex">
                <h1 className="text-xl ml-2 my-4 border-b-2 border-blue-900">AI/ML</h1>
            </div>
            {aimlProjects.map((project, index) => {
                return (
                    <Card
                        key={index}
                        url={project.url}
                        heading={project.heading}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        tags={project.tags}
                    />
                );
            })}
            <div className="w-full flex">
                <h1 className="text-xl ml-2 my-4 border-b-2 border-blue-900">Web Dev</h1>
            </div>
            {webProjects.map((project, index) => {
                return (
                    <Card
                        key={index}
                        url={project.url}
                        heading={project.heading}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        tags={project.tags}
                    />
                );
            })}
            <div className="w-full flex">
                <h1 className="text-xl ml-2 my-4 border-b-2 border-blue-900">Other Projects</h1>
            </div>
            {otherProjects.map((project, index) => {
                return (
                    <Card
                        key={index}
                        url={project.url}
                        heading={project.heading}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        tags={project.tags}
                    />
                );
            })}
        </div>
        
    );
}

function Card({ heading, url, description, imgUrl, tags }) {
    return (
        <div className="w-full lg:w-2/3 flex-row cursor-pointer transition mb-4" onClick={() => window.location.href = url}>
            <div className="w-full h-40 bg-red-50 rounded-3xl flex overflow-hidden">
            {/* bg-opacity-20 hover:bg-opacity-45 transition backdrop-blur-lg */}
                <div className="md:w-1/3 w-1/4 h-full flex">
                    <img src={imgUrl} alt={heading} className="object-cover w-full h-auto" />
                </div>
                <div className="ml-5 tracking-tighter md:w-2/3 w-2/3 h-full flex-col mr-2">
                    <div className="pt-2 text-sm font-bold line-clamp-2"><h1>{heading}</h1></div>
                    <div className="py-1 tracking-tighter line-clamp-3 text-sm"><p>{description}</p></div>
                    <div className="flex-row lnie-clamp-1 mt-1">
                        {tags.map((title, index) => {
                            return (<Tag key={index} title={title} />);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tag({ title }) {
    return (
        <p className="inline mr-1 px-1 text-xs rounded-lg bg-rose-400">{title}</p>
    );
}
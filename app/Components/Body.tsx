import Image from "next/image";
import Link from "next/link";

const Body = () => {
    const checkpoints = [
        {
            id: 4,
            title: "Founder at Growtechie (April 2023 - Present)",
            description: [
                "I am the founder of this company who is building an organization to help students across the globe to learn, network, grow & build stuff.",
                "This company is fully focused on knowledge-based learning & building rather than just for certificates.",
            ],
        },
        {
            id: 3,
            title: "Data Analyst at Chegg (December 2022 - March 2023)",
            description: [
                "Analyzed customer habits & created user-friendly reports using data manipulation to boost subscribers on social media by 32%.",
                "Deployed quantitative analysis & data mining/visualization to present data on user interaction with the product.",
                "Identified and analyzed the impact of marketing and product changes on customer acquisition, behavior, and retention.",
            ],
        },
        {
            id: 2,
            title: "Subject Matter Expert at Chegg (May 2021 - November 2023)",
            description: [
                "Data Processing, Transformation & Analysis.",
                "Helped students and professionals with their personal as well as industry projects.",
                "Provided solutions using Python, SQL, or Power BI.",
                "Assisted more than 500 students/professionals during this period.",
            ],
        },
        {
            id: 1,
            title: "Application Development Analyst at Accenture (May 2017 - April 2021)",
            description: [
                "Analyzed policyholder behavior and generated easily understandable reports through data manipulation to enhance the enrollment of insurance policies.",
                "Developed solutions using Python, SQL.",
                "Generated weekly reports and updated the resources with new data.",
                "Trained recruits in data storage structures and data cleansing while managing & maintaining master data.",
                "Resolved issues pertaining to dashboards and reporting database environment and oversaw the quality assurance of imported data.",
            ],
        },
    ];

    return (
        <div className="bg-[#F5F3EF] py-12 px-6 md:px-12 lg:px-24">
            {/* Professional Experience Section */}
            <div id="about">
                <div className="mt-24">
                    <h2 className="text-2xl font-bold">Professional Experience</h2>
                    <div className="flex flex-col space-y-8 items-start mt-6">
                        {checkpoints.map((checkpoint) => (
                            <div key={checkpoint.id} className="flex items-start">
                                <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                                <div className="flex-grow ml-4">
                                    <h3 className="text-lg font-medium">{checkpoint.title}</h3>
                                    {checkpoint.description.map((desc, index) => (
                                        <p className="text-gray-700" key={`${checkpoint.id}-${index}`}>
                                            - {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Professional Skillset Section */}
                <div className="mt-24">
      <div className="text-2xl font-bold">Professional Skillset</div>
      <div className="overflow-hidden relative mt-4">
        <div className="flex animate-marquee">
          {[
            "js.svg",
            "ts.svg",
            "cpp.svg",
            "react.svg",
            "angular.svg",
            "node.svg",
            "mongo.svg",
            "redis.svg",
            "kafka.svg",
            "docker.svg",
            "git.svg",
            "aws.svg",
          ].map((icon, index) => (
            <Image
              key={index}
              src={`/${icon}`}
              alt={icon.split(".")[0]}
              width={100}
              height={100}
              className="m-2"
            />
          ))}
        </div>
      </div>
    </div>
    </div>

            {/* Projects Section */}
            <div id="projects" className="mt-24">
                <div className="text-2xl font-bold">Projects</div>
                <div className="flex flex-wrap space-x-2 space-y-2">
                    {[
                        {
                            imgSrc: "/learnest.png",
                            title: "Learnest",
                            description: "Learnest is a web application designed for individual course creators. It enables you to create, manage, and display video tutorials to your viewers.",
                            githubLink: "https://github.com/abhishekp6/learnest",
                            liveLink: "https://learnest-fe.vercel.app",
                        },
                        {
                            imgSrc: "/yb.png",
                            title: "Youtube Browser",
                            description: "It is a simple YouTube wrapper, which fetches data from Google’s YouTube data API based on search terms and plays in an iframe. The application is solely created with React and Semantic UI.",
                            githubLink: "https://github.com/abhishekp6/youtube-browser",
                        },
                        {
                            imgSrc: "/live-editor.png",
                            title: "Live Editor",
                            description: "It's a live code editor with real-time output for HTML, CSS, and JavaScript, served by an Express server.",
                            githubLink: "https://github.com/abhishekp6/live-js-editor",
                        },
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="border-solid border rounded-md border-neutral-400 w-full sm:w-auto p-1 flex-1 flex flex-col h-[30rem]"
                        >
                            <Image src={project.imgSrc} alt={project.title} width={500} height={100} />
                            <div className="text-lg my-6 flex justify-center items-center font-bold">
                                {project.title}
                            </div>
                            <div className="mb-10 text-justify mx-2">{project.description}</div>
                            <div className="flex mt-auto">
                                <div className="w-24 h-8 mx-2 border rounded-md border-neutral-400 flex items-center justify-center text-slate-600 cursor-pointer">
                                    <Link href={project.githubLink} target="_blank">
                                        Github
                                    </Link>
                                    <span className="ml-2">
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                    </span>
                                </div>
                                {project.liveLink && (
                                    <div className="w-24 h-8 mx-2 border rounded-md border-neutral-400 flex items-center justify-center text-slate-600 cursor-pointer">
                                        <Link href={project.liveLink} target="_blank">
                                            Live
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;

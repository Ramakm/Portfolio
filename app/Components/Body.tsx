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
            "python-svgrepo-com.svg",
            "sql-database-sql-azure-svgrepo-com.svg",
            "powerbi-svgrepo-com.svg",
            "selenium-svgrepo-com.svg",
            "linux-svgrepo-com.svg",
            "js.svg",
            "ts.svg",
            "cpp.svg",
            "react.svg",
            "node.svg",
            "mongo.svg",
            "redis.svg",
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


            </div>
    );
};

export default Body;

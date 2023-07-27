import React, {useEffect} from "react";

const Custom_Timeline=({scrollToSectionId})=>{

    useEffect(() => {
        const scrollToSection = (sectionId) => {
            if (!sectionId) {
                const firstSection = document.getElementById("0");
                if (firstSection) {
                    firstSection.scrollIntoView({ behavior: "smooth", block:"center" });
                }
            } else {
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        };
        scrollToSection(scrollToSectionId);
    }, [scrollToSectionId]);

    return(
            <section>
                <div className="Timeline-Body">
                    <div className="Main-Timeline-Body">
                        <section id="0">
                            <div className="Timeline-Row">
                                <div className="left-content">
                                    <div className="Timeline-Card">
                                        <img 
                                            src="https://www.cloud4c.com/sites/default/files/2021-12/oracle-cloud-services-1_0.jpg"
                                            alt="Oracle Cloud Infastracture"/>
                                        <p>
                                            Oracle Cloud Infrastructure (OCI) is a cloud computing platform offered by Oracle Corporation that provides a wide range of infrastructure services to organizations, including computing power, storage, networking, and databases.
                                        </p>
                                    </div>
                                </div>
                                <div className="content-sperator">
                                    <div className="the-Shape">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <div className="Timeline-Title">
                                        <h1>
                                            Oracle Cloud Infastracture
                                        </h1>
                                    </div>
                                </div>    
                            </div>
                        </section>

                        <section id="1">
                            <div className="Timeline-Row">
                                <div className="left-content">
                                    <div className="Timeline-Title">
                                        <h1>
                                            Oracle Cloud Application
                                        </h1>
                                    </div>
                                </div>
                                <div className="content-sperator">
                                    <div className="the-Shape">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="right-content"> 
                                    <div className="Timeline-Card">
                                        <img 
                                        src="https://www.nagarro.com/hubfs/Oracle%20cloud%20infrastructure.png"
                                        alt="Oracle Cloud Application"
                                        />
                                        <p>
                                            Oracle Applications comprise the applications software or business software of the Oracle Corporation both in the cloud and on-premises. The term refers to the non-database and non-middleware parts.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                        </section>

                        <section id="2">
                            <div className="Timeline-Row">
                                <div className="left-content">
                                    <div className="Timeline-Card">
                                        <img 
                                        src="https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt3fb601577ca72826/632dfca7378d7a585394478e/cloudarchitecture-ArtemisDiana_AlamyStockPhoto.jpg"
                                        alt="Oracle Fusion Middleware"/>
                                        <p>
                                            The digital solution offered by Oracle for small, medium, and corporate enterprises is called Oracle Fusion Middleware. In client-server, web, and cloud contexts, it lets businesses to efficiently develop and run agile, intelligent applications.
                                        </p>
                                    </div>
                                </div>
                                <div className="content-sperator">
                                    <div className="the-Shape">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <div className="Timeline-Title">
                                        <h1>
                                            Oracle Fusion Middleware
                                        </h1>
                                    </div>
                                </div>    
                            </div>
                        </section>

                        <section id="3">
                            <div className="Timeline-Row">
                                <div className="left-content">
                                    <div className="Timeline-Title">
                                        <h1>
                                            BlockChain
                                        </h1>
                                    </div>
                                </div>
                                <div className="content-sperator">
                                    <div className="the-Shape">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="right-content"> 
                                    <div className="Timeline-Card">
                                        <img 
                                        src="https://www.hyperledger.org/wp-content/uploads/2016/08/hl_bg_banner.jpg"
                                        alt="BlockChain"/>
                                        <p>
                                            A blockchain oracle is a third-party service that connects smart contracts with the outside world, primarily to feed information in from the world, but also the reverse. Information from the world encapsulates multiple sources so that decentralised knowledge is obtained. Information to the world includes making payments and notifying parties. The oracle is the layer that queries, verifies, and authenticates external data sources, usually via trusted APIs, proprietary corporate data feeds and internet of things feeds and then relays that information.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                        </section>

                        <section id="4">
                            <div className="Timeline-Row">
                                <div className="left-content">
                                    <div className="Timeline-Card">
                                        <img 
                                        src="https://s3-us-west-2.amazonaws.com/aa.techdemand.io/wp-content/uploads/2022/04/28112755/shutterstock_1806547387-1024x631.jpg"
                                        alt="Hardware & Software"/>
                                        <p>
                                            Oracle Database<br/>Linux<br/>On-Premises Applications<br/>Servers and Storage<br/>Exadata
                                        </p>
                                    </div>
                                </div>
                                <div className="content-sperator">
                                    <div className="the-Shape">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <div className="Timeline-Title">
                                        <h1>
                                            Hardware & Software
                                        </h1>
                                    </div>
                                </div>    
                            </div>
                        </section>

                        <section id="5">
                            <div className="Timeline-Row">
                                <div className="left-content">
                                    <div className="Timeline-Title">
                                        <h1>
                                            Enterprise Wide Integration
                                        </h1>
                                    </div>
                                </div>
                                <div className="content-sperator">
                                    <div className="the-Shape">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="right-content"> 
                                    <div className="Timeline-Card">
                                        <img 
                                        src="https://www.ibis-solutions.rs/wp-content/uploads/2021/06/group-people-network-circuit-board-link-connection-technology-1-1.jpg"
                                        alt="Enterprise Wide Integration"/>
                                        <p>
                                            A framework for enterprise-wide integration is proposed for linking elements within complex and largescale organizations. The framework recognizes integration requirements imposed by an increasingly dynamic environment, which thereby demands dynamic integration schemes. Enterprise-wide integration is realized through the use of decision integration, data integration, and action integration.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                        </section>

                        <section id="6">
                            <div className="Timeline-Row">
                                <div className="left-content">
                                    <div className="Timeline-Card">
                                        <img 
                                        src="https://as2.ftcdn.net/v2/jpg/01/34/31/79/1000_F_134317941_li6kQGjxitx2oDONDgHmshYWhbAZJeov.jpg"
                                        alt="Software Solutions Experience"/>
                                        <p>
                                            Produced as a deliverable of a software development activity", and may include documents such as contracts, project plans and budgets, requirements documents, specifications, designs, source code, user documentation, support and maintenance documentation, test plans, test specifications, standards, and any other type of specialist work product.
                                        </p>
                                    </div>
                                </div>
                                <div className="content-sperator">
                                    <div className="the-Shape">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <div className="Timeline-Title">
                                        <h1>
                                            Software Solutions Experience
                                        </h1>
                                    </div>
                                </div>    
                            </div>
                        </section>

                        <section id="7">
                            <div className="Timeline-Row">
                                <div className="left-content">
                                    <div className="Timeline-Title">
                                        <h1>
                                            Hardware Solutions Experience
                                        </h1>
                                    </div>
                                </div>
                                <div className="content-sperator">
                                    <div className="the-Shape">
                                        <div className="line"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="right-content"> 
                                    <div className="Timeline-Card">
                                        <img 
                                        src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Hardware%20Section%201.jpeg"
                                        alt="Hardware Solutions Experience"/>
                                        <p>
                                            Ora-Tech Systems also offers physical networking services, involving the laying of cable and fiber, all the way up to termination and installing patch plates. We specialize in mainly 500+ node projects and have deployed several successful networking projects in the region.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                        </section>

                    </div>
                </div>
            </section>
    );

}

export default Custom_Timeline;
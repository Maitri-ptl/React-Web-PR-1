import React from "react";
import "./resume.css";
     
const Resume = () => {
    return (
        <section className="resume">
            <div className="container py-5">
                <h2 className="section-title pb-4 mb-4">Resume</h2>
                <p className="resume-subtitle">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <h4 className="resume-title">Summary</h4>
                        <div className="timeline">
                            <div className="timeline-item">
                                <h6 className="item-title">BRANDON JOHNSON</h6>
                                <p className="item-text">
                                    Innovative and deadline-driven Graphic Designer with 3+ years of experience designing
                                    and developing user-centered digital/print marketing material from initial concept to
                                    final, polished deliverable.
                                </p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                            </div>
                        </div>

                        <h4 className="resume-title mt-4">Education</h4>
                        <div className="timeline">
                            <div className="timeline-item">
                                <h6 className="item-title">MASTER OF FINE ARTS & GRAPHIC DESIGN</h6>
                                <span className="year">2015 - 2016</span>
                                <p className="item-text">
                                    Rochester Institute of Technology, Rochester, NY
                                </p>
                                <p className="item-text">
                                    Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero
                                    voluptatum qui ut dignissimos deleniti nerada porti sand markend
                                </p>
                            </div>

                            <div className="timeline-item">
                                <h6 className="item-title">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h6>
                                <span className="year">2010 - 2014</span>
                                <p className="item-text">
                                    Rochester Institute of Technology, Rochester, NY
                                </p>
                                <p className="item-text">
                                    Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel
                                    ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae
                                    consequatur neque etlon sader mart dila
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h4 className="resume-title">Professional Experience</h4>
                        <div className="timeline">
                            <div className="timeline-item">
                                <h6 className="item-title">SENIOR GRAPHIC DESIGN SPECIALIST</h6>
                                <span className="year">2019 - Present</span>
                                <p className="item-text">Experion, New York, NY</p>
                                <ul>
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                            </div>

                            <div className="timeline-item">
                                <h6 className="item-title">GRAPHIC DESIGN SPECIALIST</h6>
                                <span className="year">2017 - 2018</span>
                                <p className="item-text">Stepping Stone Advertising, New York, NY</p>
                                <ul>
                                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
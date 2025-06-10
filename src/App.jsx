import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Atom, SquareCode, FileText, Palette, Wind, Layout, Smartphone, Server, Rocket, Database, Code, Sparkles, Bot, Smile, Users, MessageSquare, Lightbulb, Headphones, Settings, Menu, X, ExternalLink, Github } from 'lucide-react';

const App = () => {
    const skillsData = {
        frontend: [
            { name: "React JS", icon: <Atom size={40} /> },
            { name: "Angular", icon: <SquareCode size={40} /> },
            { name: "HTML5", icon: <FileText size={40} /> },
            { name: "CSS3", icon: <Palette size={40} /> },
            { name: "Tailwind CSS", icon: <Wind size={40} /> },
            { name: "Bootstrap", icon: <Wind size={40} /> },
             { name: "Chakra UI", icon: <Wind size={40} /> },
            { name: "UI/UX Design", icon: <Layout size={40} /> },
            { name: "Responsive Design", icon: <Smartphone size={40} /> },
        ],
        backend: [
            { name: "Node.js", icon: <Server size={40} /> },
            { name: "Express.js", icon: <Rocket size={40} /> },
            { name: "PostgreSQL", icon: <Database size={40} /> },
            { name: "MongoDB", icon: <Database size={40} /> },
            { name: "SQL", icon: <Database size={40} /> },
        ],
        scripting: [
            { name: "JavaScript", icon: <Code size={40} /> },
            { name: "Python", icon: <Code size={40} /> },
            
        ],
        emerging: [
            { name: "Generative AI", icon: <Sparkles size={40} /> },
            { name: "LLM", icon: <Bot size={40} /> },
            { name: "Sentiment Analysis", icon: <Smile size={40} /> },
        ],
        soft: [
            { name: "Leadership", icon: <Users size={40} /> },
            { name: "Communication", icon: <MessageSquare size={40} /> },
            { name: "Problem Solving", icon: <Lightbulb size={40} /> },
            { name: "Customer Service", icon: <Headphones size={40} /> },
            { name: "Technical Support", icon: <Settings size={40} /> },
        ]
    };

    const timelineData = [
        {
            role: "Operations Manager - BBISv2",
            company: "MHNexus Sdn. Bhd",
            date: "Nov 2024 – Present",
            details: [
                "Oversaw nationwide operations and enhancements of the Blood Bank Information System (BBISv2), ensuring optimal system performance and user satisfaction.",
                "Collaborated with multidisciplinary teams and stakeholders to refine system features and user interfaces based on operational needs and direct user feedback.",
                "Managed project planning to ensure timely delivery of system updates that aligned with Ministry of Health standards and enhanced user experience.",
                "Acted as the primary liaison with software vendors, translating operational requirements into actionable development tasks and advocating for UI/UX refinements."
            ]
        },
        {
            role: "Information Technology Support Engineer",
            company: "MHNexus Sdn. Bhd",
            date: "Jul 2019 – Oct 2024",
            details: [
                "Provided comprehensive technical support for BBISv2, ensuring seamless software operation and a positive user experience.",
                "Collaborated with developers to implement front-end updates, enhancements, and configuration changes within BBISv2, significantly improving system usability.",
                "Diagnosed and resolved complex system issues, including front-end and back-end related bugs and performance bottlenecks.",
                "Ensured system reliability and compliance with data management and security protocols."
            ]
        },
        {
            role: "Senior Lecturer",
            company: "UNIVERSITY COLLEGE BESTARI (UCB)",
            date: "Sep 2011 – Jun 2019",
            details: [
                "Actively involved in software development projects as a System Analyst, Software Tester, and Software Developer, focusing on application design and UI considerations.",
                "Delivered lectures and hands-on training in core IT subjects relevant to modern web development practices.",
                "Mentored and supervised over 50 students on Final Year Projects, guiding them through the full software development lifecycle."
            ]
        },
        {
            role: "IT Lecturer cum IT Executive",
            company: "Kolej Teknologi Darulnaim",
            date: "Feb 2009 – Sep 2011",
            details: [
                "Taught core IT subjects, providing students with essential knowledge in software usage and functionality relevant to user interface interaction.",
                "Supervised students during Industrial Training, overseeing practical application development projects.",
                "Managed computer labs, ensuring optimal functionality of development tools and software."
            ]
        },
        {
            role: "IT Executive",
            company: "Info Age Technology Sdn Bhd",
            date: "Sep 2008 – Feb 2009",
            details: [
                "Delivered client-focused IT solutions, translating user needs into effective system configurations.",
                "Coordinated a team of technicians in the maintenance and optimization of PCs and IT systems."
            ]
        },
        {
            role: "IT Support Executive",
            company: "Chung Co Technology Sdn Bhd",
            date: "Aug 2007 – Sep 2008",
            details: [
                "Collaborated in a team to execute a PC upgrade project at HSBC Bank, enhancing system performance and user experience.",
                "Diagnosed and resolved PC-related issues across five HSBC Bank branches, improving system reliability and user satisfaction."
            ]
        }
    ];

    const projectData = [
        {
            title: "Interactive Resume (This App)",
            description: "A dynamic and responsive single-page application built with React and Tailwind CSS, featuring an interactive skills dashboard and an expandable career timeline. Demonstrates strong front-end development skills and UI/UX design.",
            vercelLink: "#", // Placeholder: Replace with actual Vercel link if deployed
            githubLink: "https://github.com/mohd-asri-omar/interactive-resume" // Placeholder: Replace with actual GitHub link
        },
        {
            title: "E-commerce Product Page",
            description: "A responsive product page mock-up, showcasing dynamic content loading, image galleries, and user interaction elements. Built with React and modern CSS practices.",
            vercelLink: "#", // Placeholder: Replace with actual Vercel link
            githubLink: "https://github.com/mohd-asri-omar/ecommerce-product-page" // Placeholder: Replace with actual GitHub link
        },
        {
            title: "Task Management App",
            description: "A simple full-stack task management application with a React front-end and Node.js/Express.js backend. Features CRUD operations and basic user authentication.",
            vercelLink: "#", // Placeholder: Replace with actual Vercel link
            githubLink: "https://github.com/mohd-asri-omar/task-manager-app" // Placeholder: Replace with actual GitHub link
        }
        // Add more projects here
    ];

    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeTimelineItem, setActiveTimelineItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Front-End', 'Back-End', 'Programming', 'Emerging Tech', 'Soft Skills'],
                datasets: [{
                    label: 'Skill Distribution',
                    data: [7, 4, 3, 3, 5],
                    backgroundColor: [
                        'rgba(249, 115, 22, 0.6)',
                        'rgba(55, 65, 81, 0.6)',
                        'rgba(107, 114, 128, 0.6)',
                        'rgba(234, 179, 8, 0.6)',
                        'rgba(34, 197, 94, 0.6)',
                    ],
                    borderColor: [
                        'rgba(249, 115, 22, 1)',
                        'rgba(55, 65, 81, 1)',
                        'rgba(107, 114, 128, 1)',
                        'rgba(234, 179, 8, 1)',
                        'rgba(34, 197, 94, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        pointLabels: {
                            display: true,
                            centerPointLabels: true,
                            font: {
                                size: 14
                            }
                        },
                        ticks: {
                            backdropColor: 'rgba(255, 255, 255, 0.75)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.r !== null) {
                                    label += context.parsed.r + ' skills';
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }, []);

    const getSkillsToShow = () => {
        return activeCategory === 'all'
            ? Object.values(skillsData).flat()
            : skillsData[activeCategory] || [];
    };

    const handleSkillButtonClick = (category) => {
        setActiveCategory(category);
    };

    const toggleTimelineItem = (index) => {
        setActiveTimelineItem(activeTimelineItem === index ? null : index);
    };

    return (
        <div className="bg-stone-50 text-stone-800 antialiased">
            <style>
                {`
                .timeline-item-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                    padding-top: 0; /* Ensure no top padding when collapsed */
                    padding-bottom: 0; /* Ensure no bottom padding when collapsed */
                }
                .timeline-item.active .timeline-item-content {
                    max-height: 1000px; /* Increased max-height for robustness */
                    padding: 1rem 1.5rem 1.5rem 1.5rem; /* Apply full padding when active */
                }
                .timeline-item.active .timeline-dot .w-2 {
                    transform: scale(1.5);
                }
                .skill-card {
                    transform: scale(0.9);
                    opacity: 0;
                    transition: transform 0.4s ease, opacity 0.4s ease;
                }
                .skill-card.visible {
                    transform: scale(1);
                    opacity: 1;
                }
                .chart-container {
                    position: relative;
                    width: 100%;
                    max-width: 450px;
                    margin-left: auto;
                    margin-right: auto;
                    height: 300px;
                    max-height: 40vh;
                }
                @media (min-width: 768px) {
                    .chart-container {
                        height: 350px;
                        max-height: 50vh;
                    }
                }
                `}
            </style>
            <header id="header" className="bg-stone-50/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
                <nav className="px-6 py-4 flex justify-between items-center w-full">
                    <div className="text-xl font-bold text-stone-900">
                        Mohd Asri Omar
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#summary" className="text-stone-600 hover:text-orange-600 transition-colors">Summary</a>
                        <a href="#skills" className="text-stone-600 hover:text-orange-600 transition-colors">Skills</a>
                        <a href="#projects" className="text-stone-600 hover:text-orange-600 transition-colors">Projects</a> {/* New Nav Link */}
                        <a href="#career" className="text-stone-600 hover:text-orange-600 transition-colors">Career</a>
                        <a href="#education" className="text-stone-600 hover:text-orange-600 transition-colors">Education</a>
                        <a href="mailto:mohdasriomar84@gmail.com" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">Contact Me</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600 focus:outline-none">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`md:hidden absolute top-0 left-0 w-full bg-stone-50/95 backdrop-blur-md z-40 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
                    <div className="flex flex-col items-center py-8 space-y-6">
                        <a href="#summary" onClick={() => setIsMenuOpen(false)} className="text-stone-800 text-lg hover:text-orange-600 transition-colors">Summary</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-stone-800 text-lg hover:text-orange-600 transition-colors">Skills</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-stone-800 text-lg hover:text-orange-600 transition-colors">Projects</a> {/* New Mobile Nav Link */}
                        <a href="#career" onClick={() => setIsMenuOpen(false)} className="text-stone-800 text-lg hover:text-orange-600 transition-colors">Career</a>
                        <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-stone-800 text-lg hover:text-orange-600 transition-colors">Education</a>
                        <a href="mailto:mohdasriomar84@gmail.com" onClick={() => setIsMenuOpen(false)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">Contact Me</a>
                    </div>
                </div>
            </header>

            <main className="px-6 py-8 md:py-16 w-full">
                <section id="summary" className="mb-16 md:mb-24 text-center">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Aspiring Front-End Developer</h1>
                        <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
                            Highly motivated IT professional with a robust foundation in software development and system operations, actively transitioning into a dedicated Front-End Developer role. Passionate about crafting intuitive, responsive, and visually appealing user interfaces.
                        </p>
                    </div>
                </section>

                <section id="skills" className="mb-16 md:mb-24">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-stone-900 mb-4">Skills Dashboard</h2>
                        <p className="text-lg text-stone-600 text-center max-w-2xl mx-auto mb-10">
                            This section provides an interactive overview of my technical abilities. The chart visualizes the distribution of my skills across key development areas. Click the buttons below to filter and explore specific technologies and competencies within each category.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full">
                            <div className="lg:col-span-2">
                                <div className="chart-container bg-white p-4 rounded-lg shadow-md">
                                    <canvas ref={chartRef} id="skillsChart"></canvas>
                                </div>
                            </div>
                            <div className="lg:col-span-3">
                                <div id="skill-buttons" className="flex flex-wrap justify-center gap-3 mb-6">
                                    <button
                                        data-category="all"
                                        onClick={() => handleSkillButtonClick('all')}
                                        className={`skill-btn py-3 px-6 rounded-lg shadow font-semibold transition-colors ${activeCategory === 'all' ? 'bg-orange-500 text-white' : 'bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 hover:border-orange-500'}`}
                                    >
                                        All Skills
                                    </button>
                                    <button
                                        data-category="frontend"
                                        onClick={() => handleSkillButtonClick('frontend')}
                                        className={`skill-btn py-3 px-6 rounded-lg shadow font-semibold transition-colors ${activeCategory === 'frontend' ? 'bg-orange-500 text-white' : 'bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 hover:border-orange-500'}`}
                                    >
                                        Front-End
                                    </button>
                                    <button
                                        data-category="backend"
                                        onClick={() => handleSkillButtonClick('backend')}
                                        className={`skill-btn py-3 px-6 rounded-lg shadow font-semibold transition-colors ${activeCategory === 'backend' ? 'bg-orange-500 text-white' : 'bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 hover:border-orange-500'}`}
                                    >
                                        Back-End
                                    </button>
                                    <button
                                        data-category="scripting"
                                        onClick={() => handleSkillButtonClick('scripting')}
                                        className={`skill-btn py-3 px-6 rounded-lg shadow font-semibold transition-colors ${activeCategory === 'scripting' ? 'bg-orange-500 text-white' : 'bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 hover:border-orange-500'}`}
                                    >
                                        Programming
                                    </button>
                                    <button
                                        data-category="emerging"
                                        onClick={() => handleSkillButtonClick('emerging')}
                                        className={`skill-btn py-3 px-6 rounded-lg shadow font-semibold transition-colors ${activeCategory === 'emerging' ? 'bg-orange-500 text-white' : 'bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 hover:border-orange-500'}`}
                                    >
                                        Emerging Tech
                                    </button>
                                    <button
                                        data-category="soft"
                                        onClick={() => handleSkillButtonClick('soft')}
                                        className={`skill-btn py-3 px-6 rounded-lg shadow font-semibold transition-colors ${activeCategory === 'soft' ? 'bg-orange-500 text-white' : 'bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 hover:border-orange-500'}`}
                                    >
                                        Soft Skills
                                    </button>
                                </div>
                                <div id="skills-container" className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {getSkillsToShow().map((skill, index) => (
                                        <div
                                            key={index}
                                            className="skill-card bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center text-center visible transform hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out border border-transparent hover:border-orange-200"
                                            style={{ transitionDelay: `${index * 50}ms` }}
                                        >
                                            <div className="mb-2 text-orange-600">
                                                {skill.icon}
                                            </div>
                                            <span className="text-sm font-medium text-stone-700">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Projects Section */}
                <section id="projects" className="mb-16 md:mb-24">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-stone-900 mb-4">My Projects</h2>
                        <p className="text-lg text-stone-600 text-center max-w-2xl mx-auto mb-10">
                            Here are some of the projects I've worked on, demonstrating my skills in front-end development and full-stack application building. Feel free to explore the live demos and source code.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectData.map((project, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                    <h3 className="text-xl font-bold text-orange-600 mb-2">{project.title}</h3>
                                    <p className="text-stone-700 text-sm flex-grow mb-4">{project.description}</p>
                                    <div className="flex justify-start space-x-4 mt-auto">
                                        {project.vercelLink && (
                                            <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-stone-600 hover:text-orange-600 transition-colors font-medium">
                                                <ExternalLink size={18} className="mr-1" /> Live Demo
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-stone-600 hover:text-orange-600 transition-colors font-medium">
                                                <Github size={18} className="mr-1" /> GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="career" className="mb-16 md:mb-24">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-stone-900 mb-4">Career Journey</h2>
                        <p className="text-lg text-stone-600 text-center max-w-2xl mx-auto mb-12">
                            My professional experience has provided me with a strong foundation in system operations, user support, and the software development lifecycle. The following interactive timeline outlines my career progression. Click on any role to see the detailed responsibilities and achievements.
                        </p>
                        <div id="timeline-container" className="relative w-full">
                            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-stone-300"></div>
                            {timelineData.map((item, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <div
                                        key={index}
                                        className={`timeline-item relative mb-8 flex items-center ${isLeft ? 'flex-row-reverse' : ''} ${activeTimelineItem === index ? 'active' : ''}`}
                                    >
                                        <div className="w-1/2 px-4">
                                            <div
                                                className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                                                onClick={() => toggleTimelineItem(index)}
                                            >
                                                <p className="text-xs text-stone-500">{item.date}</p>
                                                <h3 className="font-bold text-lg text-orange-600">{item.role}</h3>
                                                <p className="text-md text-stone-700 font-medium">{item.company}</p>
                                            </div>
                                            <div className="timeline-item-content bg-white rounded-b-lg shadow-md">
                                                <ul className="list-disc list-inside text-stone-600 space-y-2 text-sm">
                                                    {item.details.map((detail, detailIndex) => (
                                                        <li key={detailIndex}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="w-8 flex-shrink-0 flex justify-center">
                                            <div className="timeline-dot h-4 w-4 rounded-full bg-orange-500 flex items-center justify-center ring-4 ring-white">
                                                <div className="h-2 w-2 rounded-full bg-white transition-transform"></div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-4"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section id="education" className="text-center">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-6">Education</h2>
                        <p className="text-lg text-stone-600 text-center max-w-2xl mx-auto mb-8">
                            My academic background in Information Technology has provided the theoretical knowledge and foundational principles that underpin my practical skills in software development and computer science.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-auto text-center">
                                <h3 className="text-xl font-bold text-orange-600">Master of Information Technology (Informatics Management)</h3>
                                <p className="text-stone-700">Universiti Sultan Zainal Abidin</p>
                                <p className="text-stone-500 text-sm">Graduated 2019</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-auto text-center">
                                <h3 className="text-xl font-bold text-orange-600">Bachelor of Information Technology (Software Engineering)</h3>
                                <p className="text-stone-700">University Malaysia Terengganu </p>
                                <p className="text-stone-500 text-sm">Graduated 2006</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-stone-800 text-stone-200 mt-16">
                <div className="px-6 py-8 text-center w-full max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
                    <p className="mb-4">Feel free to reach out for opportunities or just to say hello.</p>
                    <a href="mailto:mohdasriomar84@gmail.com" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">mohdasriomar84@gmail.com</a>
                    <p className="mt-6 text-sm text-stone-400">&copy; 2025 Mohd Asri Omar. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;

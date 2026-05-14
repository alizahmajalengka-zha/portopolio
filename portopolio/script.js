const projects = [
    {
        id: 1,
        category: 'dev',
        title: "STG Smart TPM",
        shortDesc: "Digitalization system for inventory and machine maintenance.",
        fullDesc: "Innovative digital solution designed to transform machine maintenance management...",
        tags: ["Web Base", "Android Base", "Machine Inventory", "Machine Status", "Machine Maintenance"],
        image: "img/tpm.jpeg" // SUDAH DISESUAIKAN dengan file yang Anda upload
    },
    {
        id: 2,
        category: 'dev',
        title: "STG OEE Tracking",
        shortDesc: "Automated machine data recording and real-time monitoring system.",
        fullDesc: "Smart digital solution that automates machine data recording and enables real-time monitoring through sensor integration. Enhances productivity and transparency in production operations.",
        tags: ["Real-time", "Downtime", "Monitoring", "Web Base", "Android Base"],
        image: "img/oee.jpeg"
    },
    {
        id: 3,
        category: 'dev',
        title: "Output Tracker Dashboard",
        shortDesc: "Real-time production output tracking for target optimization.",
        fullDesc: "Developed to enhance productivity by monitoring production output in real-time. Streamlines issue recording and ensures timely corrective actions to achieve targets.",
        tags: ["Real-time", "Monitoring", "Analytics"],
        image: "img/output.jpeg"
    },
    {
        id: 4,
        category: 'dev',
        title: "Smart Mixing",
        shortDesc: "Automatic chemical consumption control with label printing.",
        fullDesc: "Android application designed to digitalize chemical supply management. Features automatic consumption calculations and label printing that reduces work time by over 94%.",
        tags: ["Android Base", "Reporting", "Efficiency"],
        image: "img/mixing.jpeg"
    },
    {
        id: 5,
        category: 'dev',
        title: "Machine Inventory Dashboard",
        shortDesc: "Real-time inventory sync reducing data feedback time by 99%.",
        fullDesc: "Digitalized existing machine inventory data update workflow. Reduces retrieval time from 8 hours to just 5 minutes, ensuring high accuracy and faster access.",
        tags: ["Web Base", "Data Sync", "Efficiency"],
        image: "img/view_inventory.jpeg"
    },
    {
        id: 6,
        category: 'dev',
        title: "Seasonal Model List",
        shortDesc: "Analysis system for tracking seasonal model production stages.",
        fullDesc: "Supports the IE team in analyzing machine data calculations and providing visibility for production tracking of each seasonal model.",
        tags: ["Web Base", "Planning", "IE Tools"],
        image: "img/seasonal.jpeg"
    },
    {
        id: 7,
        category: 'dev',
        title: "STG Extension App",
        shortDesc: "Directory app accelerating team communication by 37%.",
        fullDesc: "Android application simplifying phone extension searches. Replaces manual lists and reduces search time significantly to improve team coordination.",
        tags: ["Android Base", "Communication"],
        image: "img/ext.jpeg"
    },
    {
        id: 8,
        category: 'dev',
        title: "Machine Requirement Analyzer",
        shortDesc: "Analysis tool cutting processing time by 98%.",
        fullDesc: "Web-based application for identifying gaps in machine availability. Streamlines analysis lead time by 98% for faster decision-making.",
        tags: ["Web Base", "Resource Planning"],
        image: "img/mc_requirement.jpeg"
    },
    {
        id: 9,
        category: 'dev',
        title: "Laser Power Measurement",
        shortDesc: "Calibration app reducing measurement lead time by 30%.",
        fullDesc: "Android-based application for simplified recording of laser tube power measurements, improving calibration efficiency on auto cutting machines.",
        tags: ["Android Base", " Android Base", "Calibration"],
        image : "img/laser_power.jpeg"
    },
    {
        id: 10,
        category: 'dev',
        title: "TeamSync App",
        shortDesc: "Reporting app for documenting issues and ensuring readiness.",
        fullDesc: "Android-based application for trial teams to document daily activities and solve challenges before full-scale production.",
        tags: ["Android Base", "Problem Solving"],
        image : "img/teamSync.jpeg"
    },
    {
        id: 11,
        category: 'dev',
        title: "Automate Rate",
        shortDesc: "Digital solution for automated cutting and stitching calculations.",
        fullDesc: "Web solution that replaces manual processes with an automated system for faster, more accurate data calculations.",
        tags: ["Web Base", "Automation"],
        image : "img/automate_rate.jpeg"
    },
    {
        id: 12,
        category: 'dev',
        title: "Auto Box Weighing",
        shortDesc: "Real-time dashboard for monitoring box weight data.",
        fullDesc: "Integrated dashboard for monitoring and recording box weight results to ensure precise logistics and production tracking.",
        tags: ["Real-time", "Logistics", "Monitoring"],
        image : "img/weighing.jpeg"
    },
    {
        id: 13,
        category: 'dev',
        title: "DoChi",
        shortDesc: "Indonesian language learning platform for expatriates.",
        fullDesc: "Web-based application tailored for beginners to learn Bahasa Indonesia in a practical and enjoyable way to support faster adaptation.",
        tags: ["Education", "Web Base"],
        image : "img/dochi.jpeg"
    },
    {
        id: 14,
        category: 'dev',
        title: "TTrack",
        shortDesc: "System for managing machine presets and process flows.",
        fullDesc: "Developed to assist teams in managing machine preset parameters and configuration data, ensuring consistency and operational efficiency.",
        tags: ["Web Base", "Android Base", "Management"],
        image : "img/ttrack.jpeg"
    },
    {
        id: 15,
        category: 'dev',
        title: "Output Monitoring",
        shortDesc: "Tracking system with automated data sync and OEE calculation.",
        fullDesc: "Replaces manual Excel processes with automated master data synchronization and real-time OEE (Overall Equipment Effectiveness) reporting.",
        tags: ["Web Base", "OEE", "Analytics"],
        image : "img/omon.jpeg"
    },
    {
        id: 16,
        category: 'qa',
        title: "Apollo Management System QA",
        shortDesc: "End-to-end QA using Katalon automation and JMeter benchmarking.",
        fullDesc: "Comprehensive QA lifecycle including manual testing, Katalon automation for regression, and JMeter load testing for 1,500 concurrent users.",
        tags: ["Katalon", "JMeter", "Performance"]
    }
];

window.onload = () => {
    renderProjects('all');
};

function displayProjects(filter) {
    const container = document.getElementById('projectContainer');
    if (!container) return;
    
    container.innerHTML = "";
    
    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());
    
    filtered.forEach(p => {
        const isQA = p.category === 'qa';
        const label = isQA ? 'QA TESTING' : 'DIGITALIZATION';
        const labelClass = isQA ? 'tag-qa' : 'tag-dev';

        container.innerHTML += `
            <div class="project-card" onclick="openModal(${p.id})">
                <div class="project-cat ${labelClass}">${label}</div>
                <h3>${p.title}</h3>
                <p>${p.shortDesc}</p>
                <div class="tag-list">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
    });
}

function openModal(id) {
    const p = projects.find(item => item.id === id);
    const modal = document.getElementById('projectModal');
    const isQA = p.category === 'qa';
    const label = isQA ? 'QA TESTING' : 'DIGITALIZATION';
    
    document.getElementById('modalBody').innerHTML = `
        <div class="project-cat ${isQA ? 'tag-qa' : 'tag-dev'}" style="margin-bottom:10px">${label}</div>
        <h2 style="color:var(--dark); margin-bottom:15px; font-size:2rem;">${p.title}</h2>
        <p style="color:var(--slate-600); line-height:1.8; margin-bottom:25px;">${p.fullDesc}</p>
        <div class="tag-list" style="margin-bottom:30px;">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <button class="btn-primary" onclick="closeModal()" style="width:100%">Close Details</button>
    `;
    modal.style.display = "flex";
}

function closeModal() { document.getElementById('projectModal').style.display = "none"; }

function closeModalOnOutsideClick(event) {
    if (event.target.id === 'projectModal') closeModal();
}

function filterSelection(cat) { 
    displayProjects(cat);
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');
}
function renderProjects(filter = 'all') {
    const container = document.getElementById('projectContainer');
    container.innerHTML = '';
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    filtered.forEach(p => {
        container.innerHTML += `
            <div class="project-card" onclick="openModal(${p.id})">
                <div class="project-img-container">
                    <img src="${p.image}" alt="${p.title}" class="project-thumbnail" onerror="this.src='https://via.placeholder.com/400x250?text=Image+Not+Found'">
                </div>
                <div class="project-info">
                    <h3 class="project-title-text">${p.title}</h3>
                    <p class="project-short-desc">${p.shortDesc}</p>
                    <div class="tag-list">
                        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });
}

// Start
document.addEventListener('DOMContentLoaded', () => displayProjects('all'));
const projects = [
    {
        id: 1,
        category: 'dev',
        title: "STG Smart TPM",
        shortDesc: "Digitalization system for inventory and machine maintenance.",
        fullDesc: "STG Smart TPM is designed to simplify machine maintenance by digitizing scheduling and tracking. With a large number of machines, different types, and frequent relocations, manual scheduling becomes inefficient. This system ensure real-time updates, better tracking, and improve efficiency.",
        tags: ["Web Base", "Android Base", "Mc Inventory", "Mc Status", "Mc Location"],
        image: "img/tpm.jpg" // SUDAH DISESUAIKAN dengan file yang Anda upload
    },
    {
        id: 2,
        category: 'dev',
        title: "STG OEE Tracking",
        shortDesc: "Automated machine data recording and real-time monitoring system.",
        fullDesc: "Smart digital solution that automates machine data recording and enables real-time monitoring through sensor integration. Enhances productivity and transparency in production operations.",
        tags: ["Real-time", "Downtime", "Monitoring", "Web Base", "Android Base"],
        image: "img/oee.jpg"
    },
    {
        id: 3,
        category: 'dev',
        title: "Output Tracker Dashboard",
        shortDesc: "Real-time production output tracking for target optimization.",
        fullDesc: "Developed to enhance productivity by monitoring production output in real-time. Streamlines issue recording and ensures timely corrective actions to achieve targets.",
        tags: ["Real-time", "Monitoring", "Analytics"],
        image: "img/output.jpg"
    },
    {
        id: 4,
        category: 'dev',
        title: "Smart Mixing",
        shortDesc: "Automatic chemical consumption control with label printing.",
        fullDesc: "Android application designed to digitalize chemical supply management. Features automatic consumption calculations and label printing that reduces work time by over 94%.",
        tags: ["Android Base", "Reporting", "Efficiency"],
        image: "img/mixing.jpg"
    },
    {
        id: 5,
        category: 'dev',
        title: "Machine Inventory Dashboard",
        shortDesc: "Real-time inventory sync reducing data feedback time by 99%.",
        fullDesc: "Digitalized existing machine inventory data update workflow. Reduces retrieval time from 8 hours to just 5 minutes, ensuring high accuracy and faster access.",
        tags: ["Web Base", "Data Sync", "Efficiency"],
        image: "img/view_inventory.jpg"
    },
    {
        id: 6,
        category: 'dev',
        title: "Seasonal Model List",
        shortDesc: "Analysis system for tracking seasonal model production stages.",
        fullDesc: "Supports the IE team in analyzing machine data calculations and providing visibility for production tracking of each seasonal model.",
        tags: ["Web Base", "Planning", "IE Tools"],
        image: "img/seasonal.jpg"
    },
    {
        id: 7,
        category: 'dev',
        title: "STG Extension App",
        shortDesc: "Directory app accelerating team communication by 37%.",
        fullDesc: "Android application simplifying phone extension searches. Replaces manual lists and reduces search time significantly to improve team coordination.",
        tags: ["Android Base", "Communication"],
        image: "img/ext.jpg"
    },
    {
        id: 8,
        category: 'dev',
        title: "Machine Requirement Analyzer",
        shortDesc: "Analysis tool cutting processing time by 98%.",
        fullDesc: "Web-based application for identifying gaps in machine availability. Streamlines analysis lead time by 98% for faster decision-making.",
        tags: ["Web Base", "Resource Planning"],
        image: "img/mc_requirement.jpg"
    },
    {
        id: 9,
        category: 'dev',
        title: "Laser Power Measurement",
        shortDesc: "Calibration app reducing measurement lead time by 30%.",
        fullDesc: "Android-based application for simplified recording of laser tube power measurements, improving calibration efficiency on auto cutting machines.",
        tags: ["Web Base", " Android Base", "Calibration"],
        image : "img/laser_power.jpg"
    },
    {
        id: 10,
        category: 'dev',
        title: "TeamSync App",
        shortDesc: "Reporting app for documenting issues and ensuring readiness.",
        fullDesc: "Android-based application for trial teams to document daily activities and solve challenges before full-scale production.",
        tags: ["Android Base", "Problem Solving", "Web Base", "Issue Tracking"],
        image : "img/teamSync.jpg"
    },
    {
        id: 11,
        category: 'dev',
        title: "Automate Rate",
        shortDesc: "Digital solution for automated cutting and stitching calculations.",
        fullDesc: "Web solution that replaces manual processes with an automated system for faster, more accurate data calculations.",
        tags: ["Web Base", "Processing Data"],
        image : "img/automate_rate.jpg"
    },
    {
        id: 12,
        category: 'dev',
        title: "Auto Box Weighing",
        shortDesc: "Real-time dashboard for monitoring box weight data.",
        fullDesc: "Integrated dashboard for monitoring and recording box weight results to ensure precise logistics and production tracking.",
        tags: ["Real-time", "Logistics", "Monitoring"],
        image : "img/weighing.jpg"
    },
    {
        id: 13,
        category: 'dev',
        title: "DoChi",
        shortDesc: "Indonesian language learning platform for expatriates.",
        fullDesc: "Web-based application tailored for beginners to learn Bahasa Indonesia in a practical and enjoyable way to support faster adaptation.",
        tags: ["Education", "Web Base"],
        image : "img/dochi.jpg"
    },
    {
        id: 14,
        category: 'dev',
        title: "TTrack",
        shortDesc: "System for managing machine presets and process flows.",
        fullDesc: "Developed to assist teams in managing machine preset parameters and configuration data, ensuring consistency and operational efficiency.",
        tags: ["Web Base", "Android Base", "Processing Data", "Tracking"],
        image : "img/ttrack.jpg"
    },
    {
        id: 15,
        category: 'dev',
        title: "Output Monitoring",
        shortDesc: "Tracking system with automated data sync and OEE calculation.",
        fullDesc: "Replaces manual Excel processes with automated master data synchronization and real-time OEE (Overall Equipment Effectiveness) reporting.",
        tags: ["Web Base", "OEE", "Analytics"],
        image : "img/omon.jpg"
    },
    {
        id: 16,
        category: 'qa',
        title: "Apollo Management System QA",
        shortDesc: "End-to-end QA using Katalon automation and JMeter benchmarking.",
        fullDesc: "Comprehensive QA lifecycle including manual testing, Katalon automation for regression, and JMeter load testing for 1,500 concurrent users.",
        tags: ["Katalon", "JMeter", "Performance"],
        image : "img/qa.jpg"
    }
];

window.onload = () => {
    renderProjects('all');
};

function filterSelection(cat) { 
    renderProjects(cat); // Pastikan nama fungsi ini sama dengan di bawah
    
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Fungsi untuk menampilkan project ke HTML
function renderProjects(filter = 'all') {
    const container = document.getElementById('projectContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

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

// Fungsi Filter yang dipanggil dari Button HTML
function filterSelection(cat) { 
    // Jalankan fungsi render
    renderProjects(cat);
    
    // Kelola tampilan tombol active
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    // Jika event ada, tambahkan active ke tombol yang diklik
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

function openModal(id) {
    const project = projects.find(p => p.id === id);
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');
    
    body.innerHTML = `
        <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:10px; margin-bottom:20px;">
        <h2 style="margin-bottom:10px; color:var(--dark)">${project.title}</h2>
        <p style="color:var(--slate-600); line-height:1.6">${project.fullDesc}</p>
        <div class="tag-list" style="margin-top:20px">
            ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
    `;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

function closeModalOnOutsideClick(event) {
    if (event.target.id === 'projectModal') closeModal();
}

// Munculkan semua project saat pertama kali halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});

# Content and direction

## Inventory
Jose Santana; Orlando and Kissimmee; Hilton contact-center platforms serving 10,000+ users; six-route Madre Tierra site; 300 monthly visitors; 15 API endpoints; four normalized entities preserving historical prices; accessible piano feedback from MIDI and hand tracking; four-person Knight Hacks VIII team and Arduino UNO R4; seven homelab workloads across two VMs and five containers; Valencia-to-UCF study plan.

## Argument
Hero: Jose builds software connected to real users and physical systems → name, clear software-engineer description, ASCII monogram, direct work action.
Projects: work spans APIs, accessibility, hardware, and infrastructure → four fully described projects with exact technologies and links from the PDF.
Experience: he builds and supports production systems → Hilton and Madre Tierra roles, dates, and resume metrics.
About: current study and capabilities are concrete → Valencia education, future UCF plan, complete skills inventory.
Contact: visitors can start a conversation or review source → email, GitHub, LinkedIn, downloadable source resume.

## Idea
On this page, Jose Santana's initials and the signals between his piano tutor, phone dock, API, and homelab become a typographic terminal atlas of his work.
Live thing: filter real projects by software, hardware, and infrastructure, then open native case-study disclosures. Filters are shareable through URL parameters; all work remains readable without scripts.

## Copy deck
Hero: Jose Santana. Software engineer. I build accessible tools, reliable APIs, and software that reaches beyond the screen. Actions: Explore my work; Download resume. Location: Orlando, Florida.
Work: Selected work. From a piano keyboard to a PostgreSQL database, making the pieces work together.
Inventory API: Inventory, without the guesswork. Fifteen REST endpoints for inventory and orders, connected to a React frontend. Architecture separates routers, services, and CRUD. Four normalized PostgreSQL entities preserve historical sale prices through the order-product join table. Python, FastAPI, SQLModel, PostgreSQL, Alembic, Docker, React.
ADACVA: Piano learning, made accessible. A modular prototype for visually impaired learners, combining hand tracking, MIDI, sheet-music processing, playback, and spoken feedback. MediaPipe, Mido, Audiveris, GPT-4.1 mini via OpenAI API. Link from source PDF.
Study Buddy: A phone dock that starts focus. Four-person Knight Hacks VIII project connecting a Manifest V3 Chrome extension to an Arduino UNO R4 phone dock through a Python/Flask serial bridge. Browser navigation is checked against a user allowlist and signaled to the Arduino.
Homelab: A small lab. Real systems. Seven workloads on Proxmox VE: two virtual machines and five containers. Pi-hole filters DNS and Nextcloud syncs files with per-user access controls. No public repository claimed.
Experience: Built. Deployed. Supported. Hilton Grand Vacations, Customer Management Systems Specialist, Jan 2026–present, Kissimmee. NICE CXone and TCN administration for 10,000+ end users; Active Directory access support; Tier 1 troubleshooting, workstation setup and reimaging. Madre Tierra Cigars, Software Engineer Intern, Sep 2025–Jan 2026, Kissimmee. Six-route JavaScript site, 300 monthly visitors, session-scoped 21+ age confirmation, Vercel serverless email functions with 30-second duplicate-send cooldown.
About: Curious at every layer. Orlando-based developer connecting web software, accessibility, hardware, and self-hosted systems. Valencia College A.A., Computer Science Transfer Track, expected May 2027. Planned UCF B.S. Computer Science transfer Fall 2027, expected graduation December 2029. Coursework: Java, C, Python programming; database design; systems and networks.
Skills: Languages — Python, Java, C, JavaScript, SQL, HTML/CSS. Frameworks — FastAPI, React, Node.js, Flask, SQLModel, SQLAlchemy, Pydantic. Systems and tools — PostgreSQL, Git, Docker, Alembic, Linux, Vercel, Proxmox VE, Active Directory.
Contact: Let's build something useful. Email Jose; copy email; LinkedIn; GitHub; resume.

## Design decisions
Taste draw: Type and nothing else, seed 699128862. Large stacked name and varied typographic sections. Work redraw required: the dealt book-spine index assumes 20–40 projects, but the resume has four. Use a ledger with side previews instead. ASCII artwork replaces photography by explicit user request. No fabricated screenshots, portrait, testimonials, project dates, availability claims, or metrics.
UI/UX Pro Max's general design-system match was Swiss/minimalist and did not fit. A narrower style search verified `cyberpunk-ui`; use its dark terminal vocabulary with keyboard support, readable contrast, and reduced motion.

function injectHeader(activePage) {
	const header = document.querySelector('[data-site-header]');
	if (!header) return;

	const links = [
		{ href: 'index.html', label: 'Home', id: 'home' },
		{ href: 'projects.html', label: 'Projects', id: 'projects' },
		{ href: 'Certificates.html', label: 'Certifications', id: 'certificates' },
		{ href: 'index.html#contact', label: 'Contact', id: 'contact' }
	];

	header.innerHTML = `
		<a href="index.html" class="logo">${PROFILE.name}</a>
		<button class="nav-toggle" aria-label="Toggle menu" type="button">
			<i class="fas fa-bars"></i>
		</button>
		<ul class="site-nav">
			${links.map(l => `
				<li><a href="${l.href}"${activePage === l.id ? ' class="active"' : ''}>${l.label}</a></li>
			`).join('')}
			<li><a href="${PROFILE.resume}" download class="nav-resume">Resume</a></li>
		</ul>`;

	const toggle = header.querySelector('.nav-toggle');
	const nav = header.querySelector('.site-nav');
	toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

function injectFooter() {
	const footer = document.querySelector('[data-site-footer]');
	if (!footer) return;

	footer.innerHTML = `
		<div class="footer-inner">
			<div class="footer-links">
				<a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
				<a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
				<a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
			</div>
			<p class="footer-copy">© ${new Date().getFullYear()} ${PROFILE.name}. Data Analyst Portfolio.</p>
		</div>`;
}

function projectCardHTML(p) {
	return `
		<a href="${p.link}" target="_blank" rel="noopener" class="project-card" data-tool="${p.tool}">
			<img src="${p.image}" alt="${p.title}" loading="lazy" />
			<div class="project-card-body">
				<span class="project-tool">${p.tool}</span>
				<h3>${p.title}</h3>
				<p class="project-impact">${p.impact}</p>
				<p class="project-desc">${p.desc}</p>
			</div>
		</a>`;
}

function renderProjects(container, options = {}) {
	const { filter = 'all', featuredOnly = false, limit = null } = options;
	let list = featuredOnly ? PROJECTS.filter(p => p.featured) : [...PROJECTS];

	if (filter !== 'all') {
		list = list.filter(p => p.tool === filter);
	}
	if (limit) {
		list = list.slice(0, limit);
	}

	container.innerHTML = list.map(projectCardHTML).join('');
}

function renderProjectFilters(container, activeFilter) {
	const tools = ['all', ...new Set(PROJECTS.map(p => p.tool))];
	container.innerHTML = tools.map(tool => `
		<button type="button" class="filter-btn${tool === activeFilter ? ' active' : ''}" data-filter="${tool}">
			${tool === 'all' ? 'All' : tool}
		</button>
	`).join('');

	container.querySelectorAll('.filter-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			const filter = btn.dataset.filter;
			container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
			const grid = document.getElementById('projects-grid');
			if (grid) renderProjects(grid, { filter });
		});
	});
}

function renderCertificates(container, featuredOnly = false) {
	const list = featuredOnly ? CERTIFICATES.filter(c => c.featured) : CERTIFICATES;
	container.innerHTML = list.map(c => `
		<a href="${c.link}" target="_blank" rel="noopener" class="cert-card"${c.link === '#' ? ' onclick="return false;" style="cursor:default"' : ''}>
			<img src="${c.image}" alt="${c.title}" loading="lazy" />
			<div class="cert-card-body">
				<span class="cert-issuer">${c.issuer}</span>
				<h3>${c.title}</h3>
				<p>${c.highlight}</p>
			</div>
		</a>`).join('');
}

function initProjectsPage(defaultFilter) {
	injectHeader('projects');
	injectFooter();

	const filterBar = document.getElementById('project-filters');
	const grid = document.getElementById('projects-grid');
	const filter = defaultFilter || 'all';

	if (filterBar) renderProjectFilters(filterBar, filter);
	if (grid) renderProjects(grid, { filter });

	const count = document.getElementById('project-count');
	if (count) {
		const n = defaultFilter && defaultFilter !== 'all'
			? PROJECTS.filter(p => p.tool === defaultFilter).length
			: PROJECTS.length;
		count.textContent = `${n} project${n !== 1 ? 's' : ''}`;
	}
}

function initHomePage() {
	injectHeader('home');
	injectFooter();

	const stats = document.getElementById('stats-bar');
	if (stats) {
		stats.innerHTML = `
			<div class="stat"><strong>${PROJECTS.length}+</strong><span>Projects</span></div>
			<div class="stat"><strong>${Object.keys(TOOL_PAGES).length}</strong><span>Tools</span></div>
			<div class="stat"><strong>${CERTIFICATES.length}</strong><span>Certifications</span></div>
			<div class="stat"><strong>Google</strong><span>Data Analytics Certified</span></div>`;
	}

	const skillsGrid = document.getElementById('skills-grid');
	if (skillsGrid) {
		skillsGrid.innerHTML = SKILL_GROUPS.map(g => `
			<div class="skill-group">
				<h3>${g.label}</h3>
				<div class="skills">${g.skills.map(s => `<span class="skill">${s}</span>`).join('')}</div>
			</div>`).join('');
	}

	const experience = document.getElementById('experience-list');
	if (experience) {
		experience.innerHTML = EXPERIENCE.map(e => `
			<div class="experience-item">
				<div class="experience-head">
					<div>
						<h3>${e.role}</h3>
						<p class="experience-org">${e.org}</p>
					</div>
					<span class="experience-period">${e.period}</span>
				</div>
				<ul>${e.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
			</div>`).join('');
	}

	const featured = document.getElementById('featured-projects');
	if (featured) renderProjects(featured, { featuredOnly: true });

	const certs = document.getElementById('featured-certs');
	if (certs) renderCertificates(certs, true);
}

function initCertificatesPage() {
	injectHeader('certificates');
	injectFooter();

	const grid = document.getElementById('certificates-grid');
	if (grid) renderCertificates(grid, false);
}

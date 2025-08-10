
 
        // Skills data from resume with Material Icons
        const skills = [
            { name: 'HTML', level: 95, icon: 'code' },
            { name: 'CSS', level: 95, icon: 'palette' },
            { name: 'JavaScript', level: 90, icon: 'javascript' },
            { name: 'React', level: 85, icon: 'react' },
            { name: 'Angular', level: 80, icon: 'web' },
            { name: 'PHP', level: 80, icon: 'integration_instructions' },
            { name: 'Laravel', level: 75, icon: 'layers' },
            { name: 'C#', level: 75, icon: 'code_blocks' },
            { name: 'ASP .Net', level: 75, icon: 'web_asset' },
            { name: 'SQL', level: 85, icon: 'storage' },
            { name: 'MySQL', level: 85, icon: 'database' },
            { name: 'Git', level: 80, icon: 'source' },
            { name: 'GitHub', level: 85, icon: 'cloud_upload' },
            { name: 'Bootstrap', level: 90, icon: 'view_compact' },
            { name: 'jQuery', level: 85, icon: 'auto_fix_high' },
            { name: 'WordPress', level: 80, icon: 'article' }
        ];

        // Sample projects with Material Icons
        const projects = [
            {
               title: 'AI-Powered Chatbot',
                description: 'AI-Chatbot built with HTML, CSS, and JavaScript (API). Features include the toggle to open a Chat Bot .fastly AI response. Uploading folder/files images etc.Using Emmoji.Applied validations.',
                technologies: ['HTML', 'CSS', 'JavaScript(API)', 'Bootstrap'],
                icon: 'chat_bubble',
                link: 'https://github.com/MisbahZakirShah2005/AI-Chat-bot'
        },
            {
                title: 'Portfolio Website',
                description: 'Personal portfolio website showcasing projects and skills. Built with modern web technologies and responsive design principles.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
                icon: 'work',
                link: 'https://github.com/MisbahZakirShah2005'
            },
            {
            title: 'Product-Landing Page',
                description: 'A stylish, animated landing page designed for showcasing Diesel watches with modern aesthetics and interactive UI elements Using HTML-CSS & JS.',
                technologies: ['Html', 'JavaScript', 'CSS'],
                icon: 'shopping_cart',
                link: 'https://github.com/MisbahZakirShah2005/Product-landing-page'
             },
            {
                title: 'Weather Dashboard',
                description: 'Weather application with real-time data fetching from APIs. Displays current weather and 5-day forecast with beautiful UI.',
                technologies: ['JavaScript', 'API', 'CSS', 'HTML'],
                icon: 'wb_sunny',
                link: 'https://github.com/MisbahZakirShah2005/Weather-App'
            }
        ];

        // Populate skills
        function populateSkills() {
            const skillsGrid = document.getElementById('skillsGrid');
            skills.forEach((skill, index) => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card';
                skillCard.style.animationDelay = `${index * 0.1}s`;
                skillCard.innerHTML = `
                    <i class="material-icons skill-icon">${skill.icon}</i>
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-level">
                        <div class="skill-progress" style="--progress: ${skill.level}%; width: ${skill.level}%"></div>
                    </div>
                `;
                skillsGrid.appendChild(skillCard);
            });
        }

        // Populate projects
        function populateProjects() {
            const projectsGrid = document.getElementById('projectsGrid');
            projects.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.style.animationDelay = `${index * 0.2}s`;
                
                const techTags = project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('');
                
                projectCard.innerHTML = `
                    <div class="project-header">
                        <div class="project-icon">
                            <i class="material-icons">${project.icon}</i>
                        </div>
                        <div class="project-title">${project.title}</div>
                    </div>
                    <div class="project-description">${project.description}</div>
                    <div class="project-tech">${techTags}</div>
                    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
                `;
                projectsGrid.appendChild(projectCard);
            });
        }

        // Create floating particles
        function createParticles() {
            const particles = document.getElementById('particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particles.appendChild(particle);
            }
        }

        // Smooth scrolling for navigation
        function smoothScroll(target) {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
            populateSkills();
            populateProjects();
            createParticles();
            
            // Add scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe all sections
            document.querySelectorAll('.skills-section, .projects-section, .contact-section').forEach(section => {
                observer.observe(section);
            });
        });

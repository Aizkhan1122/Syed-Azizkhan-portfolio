import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    period: 'january 2026 - march 2026',
    title: 'Full-Stack Web Developer (Contract)',
    company: 'Freelance / Client Project',
    desc: 'Developed a multi-dashboard food delivery web application using HTML, CSS, JavaScript, Laravel, and MySQL. Collaborated on the design and implementation of a scalable platform featuring three dedicated dashboards for restaurant management, delivery riders, and customers.',
    tags: ['React', 'JavaScript', 'Laravel', 'MySQL', 'HTML', 'CSS'],
  },
  {
    period: 'september 2025 - december 2025',
    title: 'Full-Stack Developement (personal project)',
    project: 'Project Management System',
    desc: 'Built a full-stack Project Management System using React.js, Laravel, JavaScript, and MySQL. Developed features for project planning, task management, team collaboration, role-based access control, progress tracking, and reporting. Designed scalable APIs, optimized database performance, and delivered a responsive, production-ready application following modern software engineering practices.',
    tags: ['React.js', 'JavaScript', 'Laravel', 'MySQL'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative z-10 section-padding">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader label="Career Journey" title="Experience that Speaks" />
        <p className="text-center text-muted-foreground mb-8 md:mb-16 -mt-8 md:-mt-12 text-sm md:text-base">
          I've had the privilege of working with diverse teams and technologies, contributing to impactful projects that drive innovation and deliver value to clients.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-secondary/50 to-transparent" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-10 md:mb-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 glow-border" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-6 md:text-right' : 'md:pl-6 md:text-left'} pl-8 md:pl-0`}>
                  <span className="text-xs md:text-sm font-mono text-primary">{exp.period}</span>
                </div>
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pl-6' : 'md:pr-6'} pl-8 md:pl-0`}>
                  <div className="glass-card p-5 md:p-5 rounded-2xl">
                    <h3 className="text-base md:text-lg font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary text-xs md:text-sm mb-2 md:mb-3">{exp.company}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{exp.desc}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience
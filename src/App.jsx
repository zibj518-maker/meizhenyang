import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import ProjectPreviewModal from './components/ProjectPreviewModal';
import { cases, profile, projects } from './data/portfolio';

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCase(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="site-shell">
      <Navigation profile={profile} />
      <main>
        <Hero profile={profile} />
        <CaseStudies cases={cases} onSelect={setSelectedCase} />
        <About profile={profile} />
        <Services />
        <Projects
          projects={projects}
          activeProject={activeProject}
          onChange={setActiveProject}
          onPreview={setPreviewProject}
        />
        <Stats profile={profile} />
      </main>
      <Footer profile={profile} />
      <ImageModal item={selectedCase} onClose={() => setSelectedCase(null)} />
      <ProjectPreviewModal project={previewProject} onClose={() => setPreviewProject(null)} />
    </div>
  );
}

export default App;

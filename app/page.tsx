"use client";

import { useRef, useState } from "react";
import Motion from "./motion";
import { novaContent, type NovaContent } from "./nova-content";
import { SiteHeader } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { InnovationSection } from "./components/InnovationSection";
import { WorkSection } from "./components/WorkSection";
import { PossibilitiesSection } from "./components/PossibilitiesSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/Footer";
import { ProjectDialog } from "./components/ProjectDialog";

export interface HomeProps { content?: NovaContent }

export default function Home({ content = novaContent }: HomeProps = {}) {
  const { labels, projects, descriptions, about, innovation, possibilities } = content;
  const [motionPaused, setMotionPaused] = useState(false);
  const [filter, setFilter] = useState(labels.filters[0]);
  const [selected, setSelected] = useState(0);
  const [shareStatus, setShareStatus] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);

  const share = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href.split("#")[0])}`, "_blank", "noopener,noreferrer");
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href.split("#")[0]); setShareStatus("Portfolio link copied."); }
    catch { setShareStatus("Copy the address from your browser to share this portfolio."); }
  };

  return <div className="portfolio" data-motion-paused={motionPaused}>
    <Motion revision={filter} />
    <SiteHeader logo={labels.logo} nav={labels.nav} projectCount={labels.projectCount} availability={labels.availability} />
    <main>
      <Hero kicker={labels.heroKicker} title={labels.heroTitle} description={labels.heroDescription} cta={labels.heroCta} />
      <div className="discipline-strip">{labels.nav.concat(labels.filters).slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
      <AboutSection sectionLabel={labels.sections[0]} {...about} />
      <InnovationSection sectionLabel={labels.sections[1]} title={innovation.title} description={innovation.description} cards={innovation.cards} link={about.link} contactCta={labels.contactCta} />
      <WorkSection sectionLabel={labels.sections[2]} title={labels.heroTitle} projectCount={labels.projectCount} filters={labels.filters} filter={filter} projects={projects} projectBadge={labels.projectBadge} projectCaption={labels.projectCaption} motionPaused={motionPaused} pauseLabel={labels.pause} playLabel={labels.play} onFilter={setFilter} onMotionToggle={() => setMotionPaused((paused) => !paused)} onSelect={(index) => { setSelected(index); dialog.current?.showModal(); }} />
      <div className="archive"><span>{labels.archive[0]}</span><b>+</b><span>{labels.archive[1]}</span></div>
      <PossibilitiesSection sectionLabel={labels.sections[3]} {...possibilities} />
      <ContactSection title={labels.contactTitle} cta={labels.contactCta} />
    </main>
    <SiteFooter logo={labels.logo} nav={labels.nav} description={labels.footerDescription} shareLabel={labels.shareLabel} copyLabel={labels.copyLabel} shareStatus={shareStatus} onShare={share} onCopy={copyLink} />
    <ProjectDialog dialog={dialog} project={projects[selected]} description={descriptions[selected]} closeLabel={labels.closeLabel} />
  </div>;
}

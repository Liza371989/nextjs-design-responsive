import { Eyebrow, TextLink } from "./Text";

type Props = { sectionLabel: string; eyebrow: string; title: string; paragraphs: readonly string[]; link: string };

export function AboutSection({ sectionLabel, eyebrow, title, paragraphs, link }: Props) {
  return <section id="about" className="about vision-section"><div className="vision-aside"><Eyebrow>{sectionLabel}</Eyebrow><div className="vision-sculpture" aria-hidden="true"><span /><span /><span /><span /><span /><div className="vision-orbit" /></div><span className="vision-note">HUMAN IMAGINATION.<br />INFINITE DIMENSIONS.</span></div><div><span className="section-kicker">{eyebrow}</span><h2>{title}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<TextLink href="#innovation">{link}</TextLink></div></section>;
}

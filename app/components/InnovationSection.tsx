import { Card } from "./Card";
import { Eyebrow, TextLink } from "./Text";

type InnovationCard = { title: string; icon: string; tag: string; summary: string; detail: string };
type Props = { sectionLabel: string; title: string; description: readonly string[]; cards: readonly InnovationCard[]; link: string; contactCta: string };

export function InnovationSection({ sectionLabel, title, description, cards, link, contactCta }: Props) {
  return <section id="innovation" className="innovation"><div className="section-heading"><div><Eyebrow>{sectionLabel}</Eyebrow><h2>{title}</h2></div><p>{description.map((line) => <span key={line}>{line}<br /></span>)}</p></div><div className="innovation-grid">{cards.map((card) => <Card className="innovation-card" key={card.title}><details><summary><div className={`innovation-art ${card.icon}`} aria-hidden="true"><span /><span /><span /><span /></div><Eyebrow>{card.tag}</Eyebrow><h3>{card.title}</h3><p>{card.summary}</p><span className="card-expand">{link} <b>+</b></span></summary><div className="innovation-detail">{card.detail}<TextLink href="#contact">{contactCta}</TextLink></div></details></Card>)}</div></section>;
}

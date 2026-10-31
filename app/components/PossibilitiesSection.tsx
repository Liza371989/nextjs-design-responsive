import { Eyebrow } from "./Text";

type Props = { sectionLabel: string; eyebrow: string; title: string; description: readonly string[]; cta: string; footer: readonly string[] };

export function PossibilitiesSection({ sectionLabel, eyebrow, title, cta, footer }: Props) {
  return <section id="possibilities" className="possibilities"><div className="possibility-halo" aria-hidden="true" /><Eyebrow>{sectionLabel}</Eyebrow><h2>{eyebrow}</h2><p>{title}</p><a className="hero-cta" href="#contact">{cta}</a><div className="possibility-foot">{footer.map((item) => <span key={item}>{item}</span>)}</div></section>;
}

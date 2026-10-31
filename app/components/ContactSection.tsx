import { Eyebrow } from "./Text";

export function ContactSection({ title, cta }: { title: string; cta: string }) {
  return <section id="contact" className="contact"><div><Eyebrow><i /> OPEN TO WHAT&apos;S NEXT</Eyebrow><h2>{title}<br /><a href="mailto:hello@nova.studio">{cta}</a></h2></div><a className="contact-circle" href="mailto:hello@nova.studio">{cta}</a></section>;
}

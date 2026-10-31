import { Logo } from "./Text";

type Props = { logo: string; nav: readonly string[]; projectCount: string; availability: string };

export function SiteHeader({ logo, nav, projectCount, availability }: Props) {
  return <header><Logo label={logo} /><nav aria-label={logo}>{nav.map((item, index) => <a className={index === 0 ? "active" : ""} href={index === 0 ? "#work" : index === 1 ? "#about" : "#contact"} key={item}>{item}{index === 0 && <sup>{projectCount}</sup>}</a>)}</nav><span className="available"><i /> {availability}</span></header>;
}

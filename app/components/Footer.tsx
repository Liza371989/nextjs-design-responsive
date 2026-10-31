import { Button } from "./Button";
import { Logo } from "./Text";

type Props = { logo: string; nav: readonly string[]; description: readonly string[]; shareLabel: string; copyLabel: string; shareStatus: string; onShare: () => void; onCopy: () => void };

export function SiteFooter({ logo, nav, description, shareLabel, copyLabel, shareStatus, onShare, onCopy }: Props) {
  return <footer><div className="footer-brand"><Logo label={logo} /><p>{description.map((line) => <span key={line}>{line}<br /></span>)}</p></div><nav className="footer-navigation" aria-label={logo}>{nav.map((item, index) => <a href={index === 0 ? "#about" : index === 1 ? "#innovation" : index === 2 ? "#work" : "#contact"} key={item}>{item}</a>)}</nav><div className="footer-social"><a href="mailto:hello@nova.studio" aria-label={logo}>✉</a><Button variant="icon" aria-label={shareLabel} onClick={onShare}>in</Button><Button variant="icon" aria-label={copyLabel} onClick={onCopy}>↗</Button><span className="share-status" role="status">{shareStatus}</span></div><div className="footer-bottom"><span>© 2026 {logo.toUpperCase()} / CONCEPT PORTFOLIO</span><span>IMAGINED FOR TOMORROW. CRAFTED TODAY.</span><a href="#">BACK TO TOP ↑</a></div></footer>;
}

import Image from "next/image";
import { Button } from "./Button";
import { Eyebrow } from "./Text";
import type { NovaProject } from "../nova-content";

export function ProjectDialog({ dialog, project, description, closeLabel }: { dialog: React.RefObject<HTMLDialogElement | null>; project: NovaProject; description: string; closeLabel: string }) {
  return <dialog aria-labelledby="project-title" ref={dialog} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}><div className="dialog-content"><Button className="close" onClick={() => dialog.current?.close()} aria-label={closeLabel}>×</Button><div className="detail-image"><Image src={project[2]} alt={project[3]} fill unoptimized sizes="90vw" /></div><div className="detail-copy"><Eyebrow>{project[1]} / CONCEPT STUDY / 2026</Eyebrow><h2 id="project-title">{project[0]}</h2><p>{description}</p></div></div></dialog>;
}

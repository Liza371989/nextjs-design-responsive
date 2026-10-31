import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export interface PageProps {
  header: {
    brand: React.ReactNode;
    brandTitle: string;
    welcomePrefix: string;
    loginLabel: string;
    logoutLabel: string;
    createAccountLabel: string;
  };
  title: string;
  intro: string;
  guidance: string;
  patterns: string[];
  outro: string;
  tipLabel: string;
  tipText: string;
  userName: string;
}

export const Page: React.FC<PageProps> = ({
  header,
  title,
  intro,
  guidance,
  patterns,
  outro,
  tipLabel,
  tipText,
  userName,
}) => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        {...header}
        user={user}
        onLogin={() => setUser({ name: userName })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: userName })}
      />

      <section className="storybook-page">
        <h2>{title}</h2>
        <p>{intro}</p>
        <p>{guidance}</p>
        <ul>{patterns.map((pattern) => <li key={pattern}>{pattern}</li>)}</ul>
        <p>{outro}</p>
        <div className="tip-wrapper">
          <span className="tip">{tipLabel}</span> {tipText}
        </div>
      </section>
    </article>
  );
};

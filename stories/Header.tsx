import { Button } from './Button';
import './header.css';
import type { ReactNode } from 'react';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  brand: ReactNode;
  brandTitle: string;
  welcomePrefix: string;
  loginLabel: string;
  logoutLabel: string;
  createAccountLabel: string;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({
  user,
  brand,
  brandTitle,
  welcomePrefix,
  loginLabel,
  logoutLabel,
  createAccountLabel,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        {brand}
        <h1>{brandTitle}</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              {welcomePrefix} <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label={logoutLabel} />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label={loginLabel} />
            <Button primary size="small" onClick={onCreateAccount} label={createAccountLabel} />
          </>
        )}
      </div>
    </div>
  </header>
);

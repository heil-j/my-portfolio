import React from 'react';

export const Dock: React.FC<{ direction: string; children?: React.ReactNode }> = ({ direction, children }) => {
  return <div className={`dock dock-${direction}`}>{children}</div>;
};

export const DockIcon: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="dock-icon">{children}</div>;
};
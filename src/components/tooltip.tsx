import React from 'react';

interface TooltipProviderProps {
  children: React.ReactNode;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <div className="tooltip-provider">{children}</div>;
};

export const Tooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="tooltip">{children}</div>;
};

export const TooltipTrigger: React.FC<{ asChild?: boolean; children: React.ReactNode }> = ({ children }) => {
  return <div className="tooltip-trigger">{children}</div>;
};

export const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="tooltip-content">{children}</div>;
};
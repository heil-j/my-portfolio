import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={`rounded-md border bg-card text-card-foreground shadow-sm ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = "Card";

export { Card };

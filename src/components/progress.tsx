import React from "react";

interface ProgressProps extends React.HTMLAttributes<HTMLProgressElement> {
  value: number;
  max: number;
}

const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(
  ({ className, ...props }, ref) => {
    return (
      <progress
        className={`h-2 w-full appearance-none overflow-hidden rounded-md bg-secondary ${className}`}
        {...props}
        ref={ref}
      />
    );
  },
);
Progress.displayName = "Progress";

export { Progress };

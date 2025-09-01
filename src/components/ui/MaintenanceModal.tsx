"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Wrench, Clock } from "lucide-react";

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
}

export const MaintenanceModal: React.FC<MaintenanceModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="maintenance-title"
          aria-describedby="maintenance-description"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-md w-full mx-4 bg-gray-900/95 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
          >
            {/* Creative Graphic Background */}
            <div className="absolute inset-0 opacity-10">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="100%" stopColor="#0080ff" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="150" r="80" fill="url(#gradient)" opacity="0.3" />
                <circle cx="150" cy="100" r="40" fill="url(#gradient)" opacity="0.2" />
                <circle cx="250" cy="200" r="60" fill="url(#gradient)" opacity="0.2" />
                <path
                  d="M100 200 Q200 100 300 200 Q200 300 100 200"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close maintenance modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative p-8 text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center"
                  >
                    <Wrench className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center"
                  >
                    <Clock className="w-3 h-3 text-black" />
                  </motion.div>
                </div>
              </div>

              {/* Title */}
              <h2
                id="maintenance-title"
                className="text-2xl font-bold text-white mb-4"
              >
                Under Maintenance
              </h2>

              {/* Message */}
              <p
                id="maintenance-description"
                className="text-gray-300 mb-6 leading-relaxed"
              >
                {projectTitle ? (
                  <>
                    The <span className="text-cyan-400 font-semibold">{projectTitle}</span> project is currently undergoing maintenance.
                    We're working hard to bring you the best experience possible.
                  </>
                ) : (
                  "This section is currently under maintenance. We're working hard to bring you the best experience possible."
                )}
              </p>

              {/* Polite Note */}
              <p className="text-sm text-gray-400 mb-6">
                Thank you for your patience. Please check back soon!
              </p>

              {/* Action Button */}
              <button
                onClick={onClose}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Got it, thanks!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

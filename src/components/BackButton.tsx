"use client";

import { Row, Text, Icon } from "@once-ui-system/core";

interface BackButtonProps {
  href: string;
  label: string;
  className?: string;
}

export const BackButton = ({ href, label, className }: BackButtonProps) => {
  return (
    <>
      <style jsx>{`
        .back-button {
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 8px 12px;
          border-radius: 8px;
          margin-left: -12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .back-button:hover {
          background-color: var(--neutral-alpha-weak);
          transform: translateX(-4px);
        }
        
        .back-button:hover .back-text {
          color: var(--neutral-medium);
        }
        
        .back-icon {
          transform: rotate(180deg);
          transition: transform 0.2s ease;
        }
        
        .back-text {
          text-decoration: none;
          color: var(--neutral-weak);
          transition: color 0.2s ease;
          font-size: 14px;
        }
        
        @media (max-width: 768px) {
          .back-button {
            padding: 6px 10px;
            margin-left: -10px;
          }
          
          .back-text {
            font-size: 13px;
          }
        }
        
        @media (max-width: 480px) {
          .back-button {
            padding: 4px 8px;
            margin-left: -8px;
          }
          
          .back-text {
            font-size: 12px;
          }
        }
      `}</style>
      <div 
        className={`back-button ${className || ''}`}
        onClick={() => window.location.href = href}
      >
        <Icon 
          name="arrowRight" 
          className="back-icon"
        />
        <Text 
          as="a" 
          href={href} 
          variant="body-default-s"
          className="back-text"
        >
          {label}
        </Text>
      </div>
    </>
  );
};

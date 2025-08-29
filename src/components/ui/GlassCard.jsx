import React from "react";

export default function GlassCard({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag
      className={`glass ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

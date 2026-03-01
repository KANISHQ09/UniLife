"use client";
import React, { useRef, useState } from "react";
import "./styles/info-card.css";

// RTL detection
function isRTL(text: string) {
  return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
}

export interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  width?: number;
  height?: number;
  borderColor?: string;
  borderBgColor?: string;
  borderWidth?: number;
  borderPadding?: number;
  cardBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  fontFamily?: string;
  rtlFontFamily?: string;
  effectBgColor?: string;
  contentPadding?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  width = 388,
  height = 378,
  borderColor = "#45a3e4",
  borderBgColor = "white",
  borderWidth = 3,
  borderPadding = 14,
  cardBgColor = "#f3f4f6", // changed to a light gray backdrop
  textColor = "#000000",
  hoverTextColor = "#242424",
  fontFamily = "'Roboto Mono', monospace",
  rtlFontFamily = "'Montserrat', sans-serif",
  effectBgColor = "#45a3e4",
  contentPadding = "10px 16px",
}) => {
  const [hovered, setHovered] = useState(false);
  const borderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const border = borderRef.current;
    if (!border) return;

    const rect = border.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x);

    border.style.setProperty("--rotation", `${angle}rad`);
  };

  const rtl = isRTL(title) || isRTL(description);
  const effectiveFont = rtl ? rtlFontFamily : fontFamily;
  const titleDirection = isRTL(title) ? "rtl" : "ltr";
  const descDirection = isRTL(description) ? "rtl" : "ltr";

  const borderGradient = `conic-gradient(from var(--rotation,0deg), ${borderColor} 0deg, ${borderColor} 90deg, ${borderBgColor} 90deg, ${borderBgColor} 360deg)`;

  return (
    <div
      ref={borderRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        if (borderRef.current)
          borderRef.current.style.setProperty("--rotation", "0deg");
      }}
      style={{
        width,
        height,
        border: `${borderWidth}px solid transparent`,
        borderRadius: "1em",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        backgroundImage: `linear-gradient(${cardBgColor}, ${cardBgColor}), ${borderGradient}`,
        padding: borderPadding,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        userSelect: "none",
        transition: "box-shadow 0.3s, transform 0.2s",
        position: "relative",
        fontFamily: effectiveFont,
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered
          ? "0 22px 60px rgba(15, 23, 42, 0.20)"
          : "0 12px 40px rgba(15, 23, 42, 0.14)",
      }}
        >
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: contentPadding,
          gap: "14px",
          textAlign: "center",
        }}
      >
        {icon && (
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: effectBgColor,
              color: "#000",
            }}
          >
            {icon}
          </div>
        )}

        <h1
          style={{
            fontSize: 21,
            fontWeight: "bold",
            letterSpacing: "-.01em",
            color: hovered ? hoverTextColor : textColor,
            transition: "color 0.3s ease",
            position: "relative",
            overflow: "hidden",
            direction: titleDirection,
          }}
        >
          <span style={{ position: "relative", zIndex: 10 }}>{title}</span>

          <span
            style={{
              clipPath: hovered
                ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                : "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
              transition: "all cubic-bezier(.1,.5,.5,1) 0.4s",
              position: "absolute",
              inset: -4,
              backgroundColor: effectBgColor,
              zIndex: 0,
            }}
          />
        </h1>

        <p
          style={{
            fontSize: 14,
            color: textColor,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            direction: descDirection,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
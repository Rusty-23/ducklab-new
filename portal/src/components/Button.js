"use client";
import React from "react";
import classnames from "classnames";

export default function Button({
    className = "",
    color = "blue",
    colorWeight = 500,
    textColor = "white",
    textColorWeight = null,
    children,
    href,
    type = "button",
    onClick = () => {},
    disabled = false,
    size = "medium",
    ariaLabel = "",
    icon = null,
    shadow = true,
}) {
    const sizeClasses = {
        small: "text-sm px-2 py-1",
        medium: "text-base font-bold px-4 py-2",
        large: "text-lg font-bold px-6 py-3",
    };

    const baseStyles = {
        background: `bg-${color}-${colorWeight} hover:bg-${color}-${colorWeight + 200}`,
        text: `text-${textColor}${textColorWeight ? `-${textColorWeight}` : ""} hover:text-${textColorWeight ? `-${textColorWeight + 200}` : ""}`,
        size: sizeClasses[size],
        border: `rounded${shadow ? " shadow" : ""}`,
        focus: "focus:outline-none focus:shadow-outline",
    };

    const buttonClasses = classnames(
        ...Object.values(baseStyles),
        icon && "flex items-center gap-1",
        disabled && "opacity-50 cursor-not-allowed",
        className
    );

    const Tag = href ? "a" : "button";

    return (
        <Tag
            className={buttonClasses}
            disabled={disabled}
            type={type}
            href={href}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {icon}
            {children}
        </Tag>
    );
}

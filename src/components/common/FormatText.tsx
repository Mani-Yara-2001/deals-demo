"use client";
import React from "react";

function formatToTitleCase(input: string): string {
  if (!input) return "";
  return input
    .replace(/[_-]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export default function FormatText({ text }: { text: string }): React.JSX.Element {
  return <>{formatToTitleCase(text)}</>;
}

export { formatToTitleCase };




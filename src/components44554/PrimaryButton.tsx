import React from "react";

export default function PrimaryButton({ title }: { title: string }) {
  return (
    <button className="inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-primary rounded-sm  hover:bg-primary focus:bg-primary">
      {title}
    </button>
  );
}

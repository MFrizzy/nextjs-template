import classNames from "classnames";
import React from "react";
import Link from "next/link";

interface CommonProps {
  type?: "primary" | "secondary" | "outline";
  size?: "s" | "m" | "l";
  loading?: boolean; // TODO
}

interface ButtonProps extends CommonProps {
  onPress: () => void;
  disabled?: boolean;
}

interface LinkProps extends CommonProps {
  href: string;
  targetBlank?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps | LinkProps> = (props) => {
  const contextualClass = classNames(
    "flex items-center w-min whitespace-nowrap text-center font-medium focus:outline-none disabled:scale-100 disabled:opacity-50 tracking-widest rounded-xl hover:opacity-70",
    {
      "bg-blue-600 text-white": props.type === "primary" || !props.type,
      "bg-green-900 text-white": props.type === "secondary",
      "bg-transparent border border-blue-900 text-blue-900": props.type === "outline",
      "py-3 px-6 text-lg": props.size === "l",
      "py-2 px-5 text-base": props.size === "m" || !props.size,
      "py-2 px-4 text-xs": props.size === "s",
    },
  );

  if (props.disabled) {
    return (
      <button className={contextualClass} disabled={props.disabled}>
        {props.children}
      </button>
    );
  }

  return "onPress" in props ? (
    <button className={contextualClass} onClick={props.onPress}>
      {props.children}
    </button>
  ) : (
    <Link href={props.href} passHref>
      <a className={contextualClass} target={props.targetBlank ? "_blank" : undefined}>
        {props.children}
      </a>
    </Link>
  );
};

import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
	variant?: Variant;
	className?: string;
};

type ButtonAsButton = CommonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type ButtonAsLink = CommonProps & LinkProps & { as: "link" };

export function Button(props: ButtonAsButton | ButtonAsLink) {
	const {
		variant = "primary",
		className,
		children,
	} = props as ButtonAsButton | ButtonAsLink;

	const classes = clsx(styles.button, styles[variant], className);

	if ((props as ButtonAsLink).as === "link") {
		const linkProps = props as ButtonAsLink;
		return (
			<Link {...linkProps} className={classes}>
				{children}
			</Link>
		);
	}

	const buttonProps = props as ButtonAsButton;
	return (
		<button {...buttonProps} className={classes}>
			{children}
		</button>
	);
}

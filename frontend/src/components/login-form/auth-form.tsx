import { useForm } from "react-hook-form";
import styles from "./auth-form.module.css";
import { Button } from "../ui/button/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export type AuthMode = "login" | "register";

export type AuthValues = {
	email: string;
	password: string;
	confirmPassword?: string;
};

type AuthFormProps = {
	mode: AuthMode;
	title: string;
	text: string;
	onSubmit: (values: AuthValues) => Promise<void> | void;
};

export const AuthForm = ({ mode, title, text, onSubmit }: AuthFormProps) => {
	const {
		register,
		handleSubmit,
		watch,
		trigger,
		formState: { errors, isSubmitting, touchedFields },
	} = useForm<AuthValues>({
		mode: "onTouched",
		reValidateMode: "onChange",
		shouldUnregister: true,
	});

	const pwd = watch("password");

	useEffect(() => {
		if (touchedFields.confirmPassword) {
			void trigger("confirmPassword");
		}
	}, [pwd, trigger, touchedFields.confirmPassword]);

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img className={styles.img} src={"login.png"} alt={mode} />
			</div>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<div className={styles.fields}>
					<h2 className={styles.title}>{title}</h2>

					<div className={styles.field}>
						<label htmlFor="email" className={styles.label}>
							Email
						</label>
						<input
							id="email"
							type="email"
							autoComplete="email"
							placeholder="Email"
							className={styles.input}
							{...register("email", {
								required: "*Email is required",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "*Enter a valid email",
								},
							})}
						/>
						{errors.email && (
							<small className={styles.error}>{errors.email.message}</small>
						)}
					</div>

					<div className={styles.field}>
						<label htmlFor="password" className={styles.label}>
							Password
						</label>
						<input
							id="password"
							type="password"
							autoComplete={
								mode === "login" ? "current-password" : "new-password"
							}
							placeholder="Password"
							className={styles.input}
							{...register("password", {
								required: "*Password is required",
								minLength: { value: 8, message: "*Min 8 characters" },
							})}
						/>
						{errors.password && (
							<small className={styles.error}>{errors.password.message}</small>
						)}
					</div>

					{mode === "register" && (
						<div className={styles.field}>
							<label htmlFor="confirmPassword" className={styles.label}>
								Confirm password
							</label>
							<input
								id="confirmPassword"
								type="password"
								autoComplete="new-password"
								className={styles.input}
								placeholder="Confirm password"
								{...register("confirmPassword", {
									required: "*Please confirm password",
									validate: (v) => v === pwd || "*Passwords do not match",
								})}
							/>
							{errors.confirmPassword && (
								<small className={styles.error}>
									{errors.confirmPassword.message}
								</small>
							)}
						</div>
					)}
				</div>
				{mode === "login" && (
					<a href="" className={styles.link}>
						Forgot password?
					</a>
				)}

				<Button
					variant="primary"
					disabled={isSubmitting}
					type="submit"
					as="button"
					className={styles.submitButton}
				>
					{isSubmitting ? "Please wait..." : text}
				</Button>

				<div className={styles.redirect}>
					{mode === "login" ? (
						<p className={styles.hint}>
							Don't have an account?{" "}
							<Link to="/register" className={styles.link}>
								Sign Up
							</Link>
						</p>
					) : (
						<p className={styles.hint}>
							Already have an account?{" "}
							<Link to="/login" className={styles.link}>
								Sign In
							</Link>
						</p>
					)}
				</div>
			</form>
		</div>
	);
};

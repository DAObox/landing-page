import { motion } from "framer-motion"
import { useState } from "react";
import fetch from "isomorphic-unfetch";

export default function Newsletter() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	// Form submission handler
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email) {
			setError("Email is required");
			return;
		}

		try {
			// Make the API request
			const response = await fetch("/api/subscribeUser", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			// Handle the response
			if (response.ok) {
				// Successful subscription
				console.log("Subscribed successfully!");
				setEmail("");
				setError("");
			} else {
				// Error subscribing
				const { error } = await response.json();
				setError(error);
			}
		} catch (error) {
			console.error("An error occurred:", error);
			setError("An error occurred. Please try again later.");
		}
	};

	return (
		<div className="w-full h-full flex justify-center">
			<div className="max-w-xs px-2.5 sm:px-0 lg:px-5 xl:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full">
				<div className="flex flex-col lg:flex-row lg:space-x-10 space-y-5 lg:space-y-0 lg:items-center">
					<motion.div
						initial={{ opacity: 0.25, x: -150 }}
						animate={{ x: 1, opacity: 1 }}
						whileInView={{ x: 1, opacity: 1 }}
						transition={{ duration: 5 }}
						viewport={{ once: false }}
						className="lg:max-w-lg w-full"
					>
						<div>
							<p className="text-white">Stay updated</p>
						</div>
						<div>
							<h4 className="text-3xl text-white font-medium">
								Connect with us and never be left out
							</h4>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0.25, x: 0 }}
						animate={{ x: 1, opacity: 1 }}
						whileInView={{ x: 1, opacity: 1 }}
						transition={{ duration: 5 }}
						viewport={{ once: false }}
						className="w-full"
					>
						<div className="form-control">
							<form
								className="input-group"
								onSubmit={handleSubmit}
							>
								<input
									className="input input-bordered w-full"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email"
								/>
								<button
									className="btn btn-square btn-success w-fit px-2.5 text-white"
									type="submit"
								>
									Subscribe
								</button>
								{error && <p>{error}</p>}
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
import Image from "next/image";
import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Panchang } from "../utils/fonts";

export default function Subscribe() {
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
			<div className="flex flex-col items-center justify-center w-full h-full max-w-lg px-5 lg:max-w-4xl">
				<div className="flex justify-center lg:justify-between w-full h-[375px]">
					<Image
						src={"/laser.png"}
						width={6}
						height={6}
						alt="laser"
						className="hidden lg:block"
					/>
					<div>
						<Image
							src={"/trans-logo.png"}
							width={250}
							height={250}
							alt="laser"
						/>
					</div>
					<Image
						src={"/laser.png"}
						width={6}
						height={6}
						alt="laser"
						className="hidden lg:block"
					/>
				</div>
				<div className="flex flex-col items-center w-full -mt-32 space-y-4 text-center lg:max-w-3xl">
					<div className={Panchang.className}>
						<h1 className="text-3xl font-medium text-center text-white sm:text-5xl">
							Access DAOs through innovative tools
						</h1>
					</div>
					<p className="text-lg text-trans-ash">Subscribe to our waitlist.</p>
					<div className="bg-gradient-to-br from-[#1017251A] via-white to-[#1017251A] p-[0.5px] bg-[#101318] rounded-2xl max-w-sm">
						<form
							className="flex bg-[#101318] p-2.5 space-x-1.5 rounded-2xl"
							onSubmit={handleSubmit}
						>
							<input
								type="email"
								value={email}
								placeholder="Email address"
								onChange={(e) => setEmail(e.target.value)}
								className="w-full bg-[#101318] focus:outline-0 placeholder:text-trans-ash text-trans-ash"
							/>
							<button className="flex justify-center px-5 bg-white rounded-lg w-fit" type="submit">
								<div className="font-semibold flex items-center justify-center space-x-0.5 w-20 p-2.5">
									<p className="text-black">Subscribe</p>
									<span>
										<ChevronRightIcon className="w-6 h-6 text-black" />
									</span>
								</div>
							</button>
						</form>
					</div>
				</div>
			</div>
		);
}
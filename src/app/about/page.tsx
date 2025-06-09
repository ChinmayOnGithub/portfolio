export default function About() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-gray-50 selection:bg-gray-100 selection:text-gray-800 pt-16">
			<h1 className="text-7xl font-bold mb-8">About Me</h1>
			<div className="max-w-2xl text-center">
				<p className="text-xl text-gray-300 mb-4">
					I'm a passionate developer who loves building things for the web.
				</p>
				<p className="text-xl text-gray-300">
					This is where you'll learn more about my journey, skills, and what drives me.
				</p>
			</div>
		</div>
	);
}

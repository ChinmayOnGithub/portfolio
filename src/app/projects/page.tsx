export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-gray-50 selection:bg-gray-100 selection:text-gray-800 pt-16">
      <h1 className="text-7xl font-bold mb-8">Projects</h1>
      <div className="max-w-4xl text-center">
        <p className="text-xl text-gray-300 mb-8">
          Here's a showcase of my work and personal projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-300">Coming soon...</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project 2</h2>
            <p className="text-gray-300">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-gray-50 selection:bg-gray-100 selection:text-gray-800 pt-16">
      <h1 className="text-7xl font-bold mb-8">Experience</h1>
      <div className="max-w-3xl text-center">
        <p className="text-xl text-gray-300 mb-8">
          My professional journey and work experience.
        </p>
        <div className="space-y-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Position 1</h2>
            <p className="text-gray-400 mb-2">Company Name • 2020 - Present</p>
            <p className="text-gray-300">Coming soon...</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Position 2</h2>
            <p className="text-gray-400 mb-2">Company Name • 2018 - 2020</p>
            <p className="text-gray-300">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

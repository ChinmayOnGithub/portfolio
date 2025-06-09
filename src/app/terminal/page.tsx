export default function Terminal() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-gray-50 selection:bg-gray-100 selection:text-gray-800 pt-16">
      <h1 className="text-7xl font-bold mb-8">Terminal</h1>
      <div className="max-w-3xl w-full">
        <div className="bg-gray-900 p-6 rounded-lg font-mono">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-gray-400">chinmay@portfolio:~$</span>
          </div>
          <div className="text-gray-300">
            <p>Welcome to my interactive terminal!</p>
            <p className="mt-2">Type 'help' to see available commands.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

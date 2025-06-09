export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-gray-50 selection:bg-gray-100 selection:text-gray-800 pt-16">
      <h1 className="text-7xl font-bold mb-8">Contact</h1>
      <div className="max-w-2xl text-center">
        <p className="text-xl text-gray-300 mb-8">
          Let's connect! Feel free to reach out to me.
        </p>
        <div className="space-y-4">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Email</h2>
            <p className="text-gray-300">your.email@example.com</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Social Links</h2>
            <p className="text-gray-300">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

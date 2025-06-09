export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600/50 backdrop-blur-sm z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-50"></div>
    </div>
  );
} 
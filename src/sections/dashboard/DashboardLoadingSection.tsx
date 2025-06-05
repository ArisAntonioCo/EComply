export default function DashboardLoadingSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.02),transparent_50%)]"></div>
      
      {/* iOS-style floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      {/* Main loading content */}
      <div className="text-center pt-20 px-4 relative z-10">
        {/* iOS-style loading spinner container */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 mb-6">
          <div className="relative">
            {/* Primary spinner */}
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-200"></div>
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent absolute inset-0"></div>
          </div>
        </div>
        
        {/* Loading text with iOS typography */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
          Loading Dashboard
        </h2>
        <p className="text-gray-500 text-sm font-medium">
          Preparing your compliance workspace...
        </p>
        
        {/* iOS-style progress dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
}

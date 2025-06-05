export default function DashboardLoadingSection() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      {/* Add top padding to account for fixed navbar */}
      <div className="text-center pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-slate-300">Loading dashboard...</p>
      </div>
    </div>
  );
}

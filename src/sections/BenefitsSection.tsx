import { CheckCircle, TrendingUp, Users, FileText, Shield } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              Choose <span className="text-blue-600">EComply</span> for Complete <span className="font-playfair italic text-slate-900">Compliance</span>
            </h2><div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-slate-900 mb-2">Legal Protection</h3>
                  <p className="text-slate-600">Protect your business from legal issues and potential penalties by ensuring your policies meet all requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-slate-900 mb-2">Build Customer Trust</h3>
                  <p className="text-slate-600">Show your customers that you take their privacy and rights seriously with compliant, transparent policies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-slate-900 mb-2">Save Time & Money</h3>
                  <p className="text-slate-600">Avoid expensive legal consultations and get instant compliance analysis that would normally cost thousands.</p>
                </div>
              </div>
            </div>
          </div>          {/* Right Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-medium text-green-700 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Terms of Service
                  </span>
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-bold">92%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-medium text-blue-700 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </span>
                  <div className="flex items-center gap-2 text-blue-700">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-bold">88%</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg text-slate-900 border border-slate-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1 text-blue-600">90%</div>
                    <div className="text-slate-600">Overall Compliance Score</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-lg border border-blue-200"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-100 rounded-lg border border-emerald-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

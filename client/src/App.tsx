import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center transform transition-all hover:scale-105">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Welcome to Laundry App
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Your modern laundry management solution
          </p>

          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <p className="text-6xl font-bold text-blue-600 mb-4">{count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Click Me
            </button>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">React + TypeScript</h3>
                <p className="text-slate-600 text-sm">Modern web development stack</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Tailwind CSS</h3>
                <p className="text-slate-600 text-sm">Beautiful, responsive design</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Supabase Ready</h3>
                <p className="text-slate-600 text-sm">Database configured and ready to use</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

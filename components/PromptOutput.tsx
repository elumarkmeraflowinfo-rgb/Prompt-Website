
import React, { useState } from 'react';

interface PromptOutputProps {
  content: string | null;
}

const PromptOutput: React.FC<PromptOutputProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!content) {
    return (
      <div className="bg-slate-900 border border-slate-800 border-dashed rounded-2xl p-12 text-center text-slate-500">
        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <p className="font-medium">Configure and generate to view your master prompt.</p>
        <p className="text-sm mt-2 opacity-60">This prompt is optimized for Google AI Studio & Claude.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
        </div>
        <button 
          onClick={handleCopy}
          className={`flex items-center space-x-2 text-xs font-bold px-3 py-1 rounded transition-all ${
            copied ? 'bg-emerald-500 text-white' : 'bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
              <span>Copy Master Prompt</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-y-auto flex-grow mono text-sm leading-relaxed text-slate-300">
        <pre className="whitespace-pre-wrap">{content}</pre>
      </div>
      <div className="p-3 bg-slate-950/50 border-t border-slate-800 text-[10px] text-slate-500 uppercase tracking-widest flex items-center justify-center">
        <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        Optimized for production deployments
      </div>
    </div>
  );
};

export default PromptOutput;

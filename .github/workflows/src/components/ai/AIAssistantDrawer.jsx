import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  X, 
  ChevronRight, 
  BookOpen, 
  Lightbulb, 
  ArrowUpRight 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const AIAssistantDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      sender: 'ai',
      text: 'Namaste! I am your Karmayogi AI Learning Advisor. I analyze your cadre competencies, recent assessment scores, and upcoming civil service training mandates to recommend optimal courses. How can I assist your career progression today?'
    }
  ]);
  const { currentUser, competencies } = useAuth();

  const handleSend = (presetText) => {
    const textToSend = presetText || inputMessage;
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user', text: textToSend };
    setChatLog(prev => [...prev, userMsg]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      let aiReply = "Based on your role in the Central Secretariat, I recommend enrolling in 'Generative AI for Governance' and 'Cybersecurity DPDP Compliance' to close your current 30% gap in Domain competencies.";
      
      if (textToSend.toLowerCase().includes('procurement') || textToSend.toLowerCase().includes('gem')) {
        aiReply = "For Public Procurement, GFR 2017 Rule 149 mandates GeM purchases for goods up to ₹5 Lakhs through L1 comparison. I suggest taking our 'Public Procurement via GeM' certified module.";
      } else if (textToSend.toLowerCase().includes('gap') || textToSend.toLowerCase().includes('competency')) {
        aiReply = "Your lowest evaluated competency is 'AI & Emerging Tech in Governance' (55%). Completing the AI Governance Benchmark assessment will boost this score by +25 points!";
      } else if (textToSend.toLowerCase().includes('assessment') || textToSend.toLowerCase().includes('quiz')) {
        aiReply = "You have 1 pending assessment: 'National AI in Governance & Digital Ethics Benchmark' (10 mins, 5 questions). Passing score is 70%.";
      }

      setChatLog(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2.5 font-bold text-xs ring-4 ring-indigo-500/20"
      >
        <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
        <span className="hidden sm:inline">Ask Karmayogi AI</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slideLeft">
            
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/30 border border-indigo-400 flex items-center justify-center text-indigo-300">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Karmayogi AI Advisor</h3>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    RAG Knowledge Engine Connected
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
              {chatLog.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div 
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-xs shadow-sm font-medium'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <img src={currentUser.avatar} alt="User" className="w-6 h-6 rounded-md object-cover mt-0.5" />
                  )}
                </div>
              ))}
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="p-3 border-t border-slate-100 bg-white space-y-1.5">
              <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                <Lightbulb className="w-3 h-3 text-amber-500" />
                <span>Suggested Questions:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "What are my biggest competency gaps?",
                  "Recommend courses for Section Officer promotion",
                  "Explain GFR 2017 GeM thresholds"
                ].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="text-[11px] bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 px-2.5 py-1 rounded-full text-left transition-colors truncate max-w-full"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-slate-200 bg-white">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about courses, competencies, or rules..."
                  className="flex-1 bg-slate-100 border border-slate-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistantDrawer;

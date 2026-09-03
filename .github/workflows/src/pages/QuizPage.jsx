import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { QUIZ_DATA } from '../data/mockData';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  Sparkles, 
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import Badge from '../components/common/Badge';
import confetti from 'canvas-confetti';

export const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { recordAssessmentResult, assessments } = useAuth();

  const quiz = QUIZ_DATA[quizId] || QUIZ_DATA['asm-ai-gov'];
  const assessmentMeta = assessments.find(a => a.id === quizId) || assessments[0];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimitSeconds);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreData, setScoreData] = useState(null);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQIndex]: optIndex
    }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / quiz.questions.length) * 100);
    const passed = percentage >= assessmentMeta.passingScore;

    const result = {
      correctCount,
      totalCount: quiz.questions.length,
      percentage,
      passed,
    };

    setScoreData(result);
    setIsSubmitted(true);
    recordAssessmentResult(quizId || 'asm-ai-gov', percentage);

    if (passed) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentQIndex(0);
    setTimeLeft(quiz.timeLimitSeconds);
    setIsSubmitted(false);
    setScoreData(null);
  };

  const currentQuestion = quiz.questions[currentQIndex];
  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      
      {/* Top Bar / Header */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="purple" size="sm">
              <ShieldCheck className="w-3 h-3" />
              FRAC Assessment
            </Badge>
            <span className="text-xs text-slate-500">• {quiz.competencyTag}</span>
          </div>
          <h1 className="font-bold text-base sm:text-lg text-slate-900">{quiz.title}</h1>
        </div>

        {/* Timer Box */}
        {!isSubmitted && (
          <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-mono font-bold shadow-sm shrink-0 self-start sm:self-auto">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Time Left: {formatTime(timeLeft)}</span>
          </div>
        )}
      </div>

      {/* Main Quiz Flow */}
      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Question Box (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card flex flex-col justify-between min-h-[440px]">
            
            <div>
              {/* Question Index & Progress Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Question {currentQIndex + 1} of {totalQuestions}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {answeredCount} / {totalQuestions} Answered
                </span>
              </div>

              {/* Question Text */}
              <h2 className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed mb-6">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentQIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 text-xs sm:text-sm ${
                        isSelected
                          ? 'bg-indigo-50/80 border-indigo-600 text-indigo-950 font-semibold shadow-xs ring-1 ring-indigo-600'
                          : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                        isSelected 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-white border border-slate-300 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span className="pt-0.5 leading-relaxed">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons footer */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQIndex === 0}
                className="px-4 py-2 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl transition-colors disabled:opacity-40 flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {currentQIndex < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentQIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>Submit Exam</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Question Palette Sidebar (1 col) */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-card space-y-4">
            <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
              Question Navigator
            </h3>
            
            <div className="grid grid-cols-5 gap-2">
              {quiz.questions.map((_, idx) => {
                const isCurrent = currentQIndex === idx;
                const isAnswered = selectedAnswers[idx] !== undefined;

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`h-9 rounded-xl font-bold text-xs transition-all flex items-center justify-center ${
                      isCurrent
                        ? 'ring-2 ring-indigo-600 ring-offset-2 bg-indigo-600 text-white'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-300"></span>
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-slate-100"></span>
                <span>Unvisited ({totalQuestions - answeredCount})</span>
              </div>
            </div>

            <button
              onClick={handleSubmitQuiz}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors mt-4"
            >
              Submit Now
            </button>
          </div>

        </div>
      ) : (
        /* Result & Detailed Breakdown View */
        <div className="space-y-6">
          
          {/* Result Banner Card */}
          <div className={`rounded-3xl p-8 text-center text-white shadow-xl border relative overflow-hidden ${
            scoreData.passed 
              ? 'bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 border-emerald-500/40' 
              : 'bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900 border-amber-500/40'
          }`}>
            <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/20">
              {scoreData.passed ? (
                <Award className="w-8 h-8 text-amber-300" />
              ) : (
                <AlertCircle className="w-8 h-8 text-amber-400" />
              )}
            </div>

            <h2 className="text-2xl font-extrabold text-white mb-1">
              {scoreData.passed ? 'Benchmark Assessment Passed!' : 'Assessment Completed'}
            </h2>
            <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
              {scoreData.passed
                ? 'Your competency score has been updated in the National FRAC database and dispatched to DigiLocker.'
                : 'You are close to the target threshold. Review explanations below and retake when ready.'}
            </p>

            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15 mb-6">
              <div>
                <p className="text-3xl font-black text-white">{scoreData.percentage}%</p>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider">Final Score</p>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <p className="text-3xl font-black text-emerald-300">{scoreData.correctCount} / {scoreData.totalCount}</p>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider">Correct Answers</p>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <p className="text-3xl font-black text-purple-300">+25 pts</p>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider">FRAC Delta</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleRetake}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
              <Link
                to="/progress"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center gap-2"
              >
                <span>View Competency Passport</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card space-y-6">
            <h3 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3">
              Detailed Question-by-Question Diagnostics
            </h3>

            <div className="space-y-6">
              {quiz.questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/40 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                          Q{idx + 1}
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-slate-800 leading-snug">{q.question}</h4>
                      </div>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-xs font-bold shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full text-xs font-bold shrink-0">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, oIdx) => {
                        const isCorrectOption = oIdx === q.correctAnswer;
                        const isChosenByUser = userAns === oIdx;

                        return (
                          <div
                            key={oIdx}
                            className={`p-2.5 rounded-xl border ${
                              isCorrectOption
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                                : isChosenByUser
                                ? 'bg-rose-50 border-rose-300 text-rose-950 line-through'
                                : 'bg-white border-slate-200 text-slate-600'
                            }`}
                          >
                            <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* AI Explanation Box */}
                    <div className="bg-indigo-50/80 border border-indigo-100 rounded-xl p-3 text-xs text-slate-700">
                      <span className="font-bold text-indigo-900 block mb-0.5">Government Statutory Guidance / Explanation:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default QuizPage;

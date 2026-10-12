import { useState } from 'react';
import { X, Send, Pin, CheckCircle2, MessageSquare } from 'lucide-react';
import type { Comment } from '../../types';

interface CommentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  comments: Comment[];
  onAddComment: (text: string) => void;
  sellerName: string;
}

export function CommentDrawer({
  isOpen,
  onClose,
  comments,
  onAddComment,
  sellerName
}: CommentDrawerProps) {
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onAddComment(inputText);
    setInputText('');
  };

  const quickEmojis = ['🔥', '❤️', '😍', '👏', '✨', '👗', '💯'];

  const handleQuickEmoji = (emoji: string) => {
    onAddComment(emoji);
  };

  const pinnedComment = comments.find((c) => c.isPinned);
  const streamComments = comments.filter((c) => !c.isPinned);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm pointer-events-auto">
      {/* Background click to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide-up Comments Sheet */}
      <div className="w-full max-w-lg mx-auto bg-neutral-900 border-t border-neutral-800 rounded-t-2xl max-h-[75vh] flex flex-col shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="p-3.5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-red-500" />
            <h3 className="text-sm font-bold text-white">Live Stream Chat</h3>
            <span className="text-[11px] text-neutral-400">
              ({comments.length} comments)
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close comments"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Pinned Seller Announcement */}
        {pinnedComment && (
          <div className="bg-amber-950/40 border-b border-amber-500/20 px-3.5 py-2 flex items-start gap-2.5">
            <Pin className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0 fill-amber-400" />
            <div className="text-xs">
              <span className="font-bold text-amber-300 mr-1.5">
                {pinnedComment.userName} (Host):
              </span>
              <span className="text-amber-100/90">{pinnedComment.text}</span>
            </div>
          </div>
        )}

        {/* Scrollable Comments Feed */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 min-h-[220px]">
          {streamComments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-2.5 text-xs animate-fade-in">
              <img
                src={comment.userAvatar}
                alt={comment.userName}
                className="w-7 h-7 rounded-full object-cover shrink-0 border border-neutral-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80';
                }}
              />
              <div className="flex-1 min-w-0 bg-neutral-800/60 rounded-xl p-2.5 border border-neutral-700/50">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-semibold text-white truncate text-[11px]">
                    {comment.userName}
                  </span>
                  {comment.isSeller && (
                    <span className="bg-red-600/40 text-red-300 text-[9px] font-bold px-1.5 py-0.2 rounded">
                      HOST
                    </span>
                  )}
                  {comment.isVerifiedBuyer && (
                    <span className="flex items-center gap-0.5 text-emerald-400 text-[9px] font-medium">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Buyer
                    </span>
                  )}
                  <span className="text-[10px] text-neutral-400 ml-auto shrink-0">
                    {comment.timestamp}
                  </span>
                </div>
                <p className="text-neutral-200 text-xs leading-relaxed break-words">
                  {comment.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Emoji Bar */}
        <div className="px-3.5 py-1.5 bg-neutral-900 border-t border-neutral-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] text-neutral-400 font-medium shrink-0">Quick react:</span>
          {quickEmojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => handleQuickEmoji(emoji)}
              className="text-base hover:scale-125 active:scale-95 transition-transform px-1 py-0.5"
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Comment Input Form */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-neutral-800 bg-neutral-900/90 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Ask ${sellerName} about sizing, fabric, offers...`}
            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-full px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="w-9 h-9 rounded-full bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:hover:bg-red-600 text-white flex items-center justify-center transition-colors shrink-0"
            aria-label="Send comment"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

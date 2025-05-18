import { useState, useEffect } from "react";
import { MessageCircle, X, Sun, Moon } from "lucide-react";

function Chatbox() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("gemini-chat")) || [];
  });

  // 1. Read saved theme preference (or default to light)
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("gemini-theme") === "dark";
  });

  const [typing, setTyping] = useState(false);

  // 2. Whenever isDark changes, apply class explicitly and persist
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("gemini-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("gemini-theme", "light");
    }
  }, [isDark]);

  // 3. Persist messages
  useEffect(() => {
    localStorage.setItem("gemini-chat", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("https://chatbox-jcr3.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error talking to Gemini." },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {open && (
        <div className="w-80 bg-white dark:bg-gray-900 dark:text-white shadow-2xl rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 dark:bg-blue-800 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">Ask Anything</span>
            <div className="flex items-center space-x-2">
              {/* 4. Toggle button now reliably flips state
              <button onClick={() => setIsDark((prev) => !prev)}>
                {isDark ? (
                  <Sun className="w-5 h-5 " />
                ) : (
                  <Moon className="w-5 h-5" />
                )} 
              </button> */}
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-3 h-64 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded max-w-[85%] ${
                  msg.role === "user"
                    ? "bg-blue-100 dark:bg-blue-900 text-right ml-auto"
                    : "bg-gray-200 dark:bg-gray-800 mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="text-gray-500 dark:text-gray-400 italic animate-pulse">
                AI is typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t dark:border-gray-700 p-2 flex items-center">
            <input
              type="text"
              className="flex-grow border dark:border-gray-600 bg-white dark:bg-gray-800 rounded px-2 py-1 text-sm focus:outline-none"
              placeholder="Type here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbox;

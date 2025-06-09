'use client';

import { useState, useRef, useEffect } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { IoSend } from 'react-icons/io5';

const ChatButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'assistant', content: 'Hi! How can I help you today?' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    // Add ref for message container
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]); // Scroll when messages change or typing status changes

    const toggleChat = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || isLoading) return;

        try {
            setIsLoading(true);
            // Add user message to chat
            setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);

            // Add typing indicator
            setIsTyping(true);

            // Send message to backend
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: inputMessage }),
            });

            const data = await response.json();

            // Remove typing indicator and add AI response
            setIsTyping(false);
            setMessages(prev => [...prev, {
                type: 'assistant',
                content: data.response
            }]);
        } catch (error) {
            console.error('Chat error:', error);
            setIsTyping(false);
            setMessages(prev => [...prev, {
                type: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.'
            }]);
        } finally {
            setInputMessage('');
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50">
            <div className={`
                transform transition-all duration-300 ease-in-out origin-bottom-right
                ${isExpanded
                    ? 'scale-100 w-[300px] md:w-[320px] h-[400px] bg-black/90 backdrop-blur-md rounded-xl shadow-xl'
                    : 'scale-0 w-0 h-0'
                }
            `}>
                {/* Chat Interface */}
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                        <div className="flex items-center">
                            <h3 className="text-sm font-light text-white">Om Nathwani</h3>
                            <div className="w-2 h-2 bg-white/80 rounded-full ml-2"></div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-white/60 hover:text-white transition-colors"
                        >
                            <IoClose className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} 
                                           opacity-0 animate-fade-in`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div className={`
                                    max-w-[80%] rounded-lg px-3 py-2 text-sm font-light
                                    transform transition-all duration-200 ease-out
                                    ${message.type === 'user'
                                        ? 'bg-white/10 text-white'
                                        : 'bg-white/5 text-white/90'
                                    }
                                    hover:bg-white/20
                                `}>
                                    {message.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start opacity-0 animate-fade-in">
                                <div className="bg-white/5 text-white/90 max-w-[80%] rounded-lg px-3 py-2 text-sm font-light">
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} /> {/* Scroll anchor */}
                    </div>

                    {/* Input area with smooth transition */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-black/20 backdrop-blur-sm border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder={isLoading ? "Thinking..." : "Type a message..."}
                                disabled={isLoading}
                                className="flex-1 bg-white/5 text-white text-sm font-light rounded-lg px-3 py-1.5 
                                         focus:outline-none focus:bg-white/10 transition-all duration-200 ease-out
                                         placeholder:text-white/40 disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="text-white/60 hover:text-white transition-all duration-200 ease-out 
                                         disabled:opacity-50 transform hover:scale-110"
                            >
                                <IoSend className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Chat Button */}
            <button
                onClick={toggleChat}
                className={`
                    flex items-center gap-2 bg-black/90 backdrop-blur-sm rounded-full 
                    shadow-lg hover:bg-black transition-colors
                    ${isExpanded ? 'opacity-0' : 'opacity-100'}
                    ${!isExpanded ? 'p-2 md:px-4 md:py-2.5' : ''}
                `}
            >
                <FaRegCommentDots className="w-4 h-4 text-white" />
                <span className="hidden md:inline text-white text-sm font-light">Chat with Me</span>
            </button>
        </div>
    );
};

export default ChatButton; 
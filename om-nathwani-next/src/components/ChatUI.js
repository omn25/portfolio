'use client';

import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FiMaximize2 } from 'react-icons/fi';
import Image from 'next/image';

const ChatUI = ({ onClose }) => {
    return (
        <div className="absolute bottom-16 right-0 w-[380px] bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-black text-white">
                <h3 className="text-lg font-semibold">Messages</h3>
                <div className="flex items-center space-x-4">
                    <button className="hover:text-gray-300">
                        <FiMaximize2 className="w-5 h-5" />
                    </button>
                    <button onClick={onClose} className="hover:text-gray-300">
                        <IoClose className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Chat List */}
            <div className="h-[400px] overflow-y-auto">
                <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                {/* Profile image placeholder */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-4 flex-1">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold">Om Nathwani</h4>
                                <span className="text-xs text-gray-500">Active now</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Click to start chatting!</p>
                        </div>
                    </div>
                </div>

                {/* More chat items can be added here */}
                <div className="px-4 py-8 text-center text-gray-500">
                    <p className="text-sm">No more messages</p>
                </div>
            </div>
        </div>
    );
};

export default ChatUI; 
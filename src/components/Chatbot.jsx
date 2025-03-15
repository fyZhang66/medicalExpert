import axios from 'axios';
import React, { useState } from 'react'

import './Chatbot.css'

const presetQuestions = [
    { id: 1, value: 'What is your name?' },
    { id: 2, value: 'How old are you?' },
    { id: 3, value: 'What is your age?' },
    { id: 4, value: 'What is your age?' },
];

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: 'bot', message: 'Hello! How can I help you?' },
    ]);
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendBotMessage = (message) => {
        setMessages((prev) => [...prev, { sender: 'bot', message }]);
    };
    const sendUserMessage = (message) => {
        if (!message.trim()) return;
        setMessages((prev) => [...prev, { sender: 'user', message }]);
    }
    const handleSend = async (presetMsg) => {
        const message = (presetMsg || input).trim();
        if (!message) return;

        sendUserMessage(message);
        setInput('');
        setIsLoading(true);

        // backend logic
        try {
            const response = await axios.post('http://localhost:5000/chatbot', { message });
            const data = response.data;
            sendBotMessage(data.message || 'Sorry, I cannot understand your question.');
        } catch(err) {
            console.log(err);
            sendBotMessage('Sorry, I cannot understand your question.');
        } finally{
            setIsLoading(false);
        }
    }

    const handleRefresh = () => {
        setMessages([{ sender: 'bot', message: 'Hello! How can I help you?' }]);
        setSelectedQuestion('');
        setInput('');
    }

    return (
        <div className='chatbot-container'>
            <div className='chatbot-header'>
                <h1 className='header-text'>Ask Questions About Your Results</h1>
                <div className='header-controls'>
                    <div
                        className="dropdown"
                        onClick={(e) => {
                            if (e.target.classList.contains('dropdown-item')) {
                                e.preventDefault();
                                const selectedQuestion = e.target.textContent;
                                setSelectedQuestion(selectedQuestion);
                                handleSend(selectedQuestion);
                            }
                        }}
                    >
                        <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Your Question
                        </button>
                        <ul className="dropdown-menu">
                            {presetQuestions.map((question) => (
                                <li key={question.id}>
                                    <a className="dropdown-item" href="#">{question.value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='new-chat' onClick={() => handleRefresh()}>
                        <button type="button" className="btn btn-light btn-sm"><i className="bi bi-arrow-clockwise"></i> New Chat</button>
                    </div>
                </div>
            </div>
            <div className='chatbot-window'>
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.sender === 'bot' && <i className="bi bi-robot" style={{ fontSize: "1.75rem"}}></i>}
                        <div className={`message-content ${message.sender}`}>
                            {message.message}
                        </div>
                        {message.sender === 'user' && <i className="bi bi-person-fill" style={{ fontSize: "1.75rem"}}></i>}
                    </div>
                ))}
            </div>
            <div className='chatbot-input'>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Type your question here..."
                    aria-label="User message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                    <button className="btn btn-primary btn-sm" onClick={() => handleSend()} disabled={isLoading}>
                        <i className="bi bi-send"></i> Send
                    </button>
            </div>

        </div>
    )
}

export default Chatbot
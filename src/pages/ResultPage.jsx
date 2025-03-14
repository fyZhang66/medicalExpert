import React from 'react';
import Chatbot from '../components/Chatbot';

const ResultPage = () => {
  return (
    <div className="result-page">
      <h1>分析结果</h1>
      <p>这里将显示医疗报告的分析结果。</p>
      <Chatbot/>
    </div>
  );
};

export default ResultPage;
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { askQuestion } from "../api/index";
import { checkNull, convertDate } from "../utils/filters.js";
import MarkdownContent from "../components/MarkdownContent";
import Card from "../components/Card";
import Chatbot from "../components/Chatbot";
import "./ResultPage.scss";

const ResultPage = () => {
  const location = useLocation();
  const result = location.state?.result;

  const [question, setQuestion] = useState("");
  const [qaHistory, setQaHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (result) {
      setQaHistory([
        {
          type: "info",
          text: "Hello! I'm your medical AI assistant. I can help explain your test results or answer any questions you might have about them.",
        },
      ]);
    }
  }, [result]);

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    setIsLoading(true);
    setQaHistory([...qaHistory, { type: "question", text: question }]);
    setQuestion("");

    try {
      const response = await askQuestion(
        result?.original_content || "",
        question
      );
      if (response.success) {
        setQaHistory((prev) => [
          ...prev,
          { type: "answer", text: response.answer },
        ]);
      } else {
        setQaHistory((prev) => [
          ...prev,
          { type: "error", text: `Error: ${response.message}` },
        ]);
      }
    } catch (error) {
      setQaHistory((prev) => [
        ...prev,
        { type: "error", text: `Error: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderField = (label, value, filter) => (
    <div className="detail-item flex-col">
      <span className="label label-txt">{label}:</span>
      <span className="value">{filter ? filter(value) : checkNull(value)}</span>
    </div>
  );

  if (!result) {
    return (
      <div className="result-page">
        <div className="container">
          <h1>Unable to display results</h1>
          <p>
            No analysis results found. Please upload a medical report first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="result-page">
      <div className="container">
        <Card
          title="Medical Report Summary"
          titleRight={<button className="print-btn">Print Report</button>}
          className="report-summary"
        >
          <div className="summary-details">
            {renderField("Patient Name", result?.patient_name)}
            {renderField("Date of Birth", result?.date_of_birth, convertDate)}
            {renderField("Patient ID", result?.patient_id)}
            {renderField("Report Date", result?.report_date, convertDate)}
          </div>
        </Card>

        <Card
          className="test-results"
          title="Test Results"
          titleRight={
            <span className="results-date">
              Results as of {convertDate(result?.report_date)}
            </span>
          }
        >
          {result?.test_results?.abstractItems.length ? (
            result.test_results.abstractItems.map((test, index) => (
              <div key={index} className="test-item">
                <div className="test-info">
                  <span className="test-name">{test.name}</span>
                  <span className="test-date">
                    Conducted on {convertDate(test.date)}
                  </span>
                </div>
                <span className={`test-status ${test.status.toLowerCase()}`}>
                  {test.status}
                </span>
              </div>
            ))
          ) : (
            <p>No test results available.</p>
          )}
          <div>
            <MarkdownContent content={result?.test_results?.content} />
          </div>
        </Card>

        <Card
          title="AI Interpretation"
          titleRight={
            <div className="ai-confidence">
              <span className="ai-badge">AI Powered</span>
            </div>
          }
        >
          <div>
            <MarkdownContent content={result?.interpretation} />
          </div>
        </Card>

        <Chatbot />
      </div>
    </div>
  );
};

export default ResultPage;

export const mockResult = {
  patient_name: "John Doe",
  date_of_birth: "1980-01-01",
  patient_id: "123456",
  report_date: "2025-03-14",
  test_results: {
    abstractItems: [
      { name: "Blood Pressure", status: "Normal" },
      { name: "Cholesterol", status: "Borderline" },
      { name: "Blood Sugar", status: "Abnormal" },
    ],
    content: `### Extracted Text

1. **Personal Information:**
   - Name: [Patient's Name]
   - Date of Birth: [DOB]

2. **Test Items and Results:**

#### Audiometry (Audiogram)
- **Left Ear:**
  - Pure Tone Average (PTA): 48 dB
  - High Frequency (HF) Loss: 60 dB
  - Low Frequency (LF) Loss: 35 dB

- **Right Ear:**
  - PTA: 28 dB
  - HF Loss: 41 dB
  - LF Loss: 25 dB

#### Speech Discrimination Test (SDT)
- Left Ear: 64%
- Right Ear: 70%

3. **Additional Information:**
   - **Treatment Plan:**
     - i-Tone + d-Sound + TransFocus
   - **Hearing Aid Evaluation:**
     - Left Ear: 23 dB
     - Right Ear: 28 dB

4. **Notes:**
- **Observations:**
  - No significant changes in hearing thresholds.
  - Slight improvement in speech discrimination.

### Structured Format

#### Personal Information
- Name:
- Date of Birth:

#### Test Items and Results

| Test Item | Left Ear | Right Ear |
|-----------|----------|-----------|
| PTA       | 48 dB    | 28 dB     |
| HF Loss   | 60 dB    | 41 dB     |
| LF Loss   | 35 dB    | 25 dB     |

#### Additional Information

- **Treatment Plan:**
  - i-Tone + d-Sound + TransFocus
- **Hearing Aid Evaluation:**
  - Left Ear: 23 dB
  - Right Ear: 28 dB

### Notes
- No significant changes in hearing thresholds.
- Slight improvement in speech discrimination.

#### Abnormal Values
- Left Ear:
  - PTA: 48 dB (Normal range is typically below 15 dB)
  - High Frequency Loss: 60 dB (Normal range is typically below 25 dB)

- Right Ear:
  - PTA: 28 dB (Normal range is typically below 15 dB)
  - High Frequency Loss: 41 dB (Normal range is typically below 25 dB)`,
  },
  interpretation: `Hello there! Let's go over your medical report step by step in a way that's easy to understand.

First, I want to know if you're comfortable sharing your full name and date of birth so I can make sure to address you correctly. This helps me tailor the information specifically for you!

Now, let's break down this audiometry test. Audiometry is a test used to measure how well you hear different sounds at various frequencies.

For both your ears:

1. **Pure Tone Average (PTA)**: This number tells us the average hearing sensitivity across all tested frequencies.
   - Left Ear: 48 dB
   - Right Ear: 28 dB

2. **High Frequency Loss**: It shows how much hearing loss there is at higher pitches.
   - Left Ear: 60 dB
   - Right Ear: 41 dB

3. **Low Frequency Loss**: Shows how much hearing loss there is at lower pitches.
   - Left Ear: 35 dB
   - Right Ear: 25 dB

Now, for the Speech Discrimination Test (SDT), which measures your ability to understand speech.

- Left Ear: 64%
- Right Ear: 70%

You seem to have a slight improvement in understanding speech sounds compared to previous tests. That's good!

As for the hearing aid evaluation, these numbers tell us how much help each ear needs from a hearing aid:
- Left Ear: 23 dB
- Right Ear: 28 dB

These values indicate that both of your ears might benefit from hearing aids.

Lastly, it's important to note that while some of your test results are outside the normal range, they haven't changed much since last time. This means there hasn't been a significant increase in hearing loss over time.

Overall, you have slight hearing impairments which are relatively stable. The treatment plan includes using different types of devices (i-Tone + d-Sound + TransFocus) to help improve your hearing further.
  
Remember, it's always a good idea to discuss any medical concerns or changes with your doctor. If there's anything else I can clarify or if you have questions about the report, feel free to reach out!`,
  recommendations: [
    "Maintain a healthy diet.",
    "Exercise regularly.",
    "Monitor blood sugar levels daily.",
    "Consult with a healthcare provider for further evaluation.",
  ],
};

export const askMoc = {
  "success": true,
  "question": "Give some suggests",
  "answer": "Based on your medical report content and the key findings, here are some suggestions:\n\n1. **Vital Signs:** \n   - High Body Temperature: This could be a sign of illness or infection.\n   - Elevated Systolic and Diastolic Blood Pressure: This suggests a high risk of cardiovascular disease.\n\n2. **Laboratory Test Results:** \n   - High Fasting Blood Glucose: This indicates a high risk of diabetes.\n   - Elevated Total Cholesterol, LDL and HDL Cholesterol: These are indicators of atherosclerosis.\n   - High Triglycerides: This is a risk factor for heart disease.\n\n3. **General Advice:** \n   - For the user to consult a healthcare provider for further evaluation and treatment.\n\n4. **Recommendations:** \n   - For the user to consider a diet low in saturated fats and cholesterol, along with regular exercise.\n\n5. **Follow-up:** \n   - Schedule a follow-up appointment to monitor the user's health and any changes in their condition.\n\nIt's important for the user to take these recommendations into account and seek advice from a healthcare provider."
}
export const transMoc = {
  "success": true,
  "translated_text": "这个医学报告是关于名叫约翰·杜的个人，他于1967年3月10日出生。他目前57岁，并且他的性别是男性的。\n\n报告包括一些重要的信息，如体温（37.0°C），收缩压和舒张压，心率和氧气饱和度。这些数值在50岁左右的年龄范围内是正常的。\n\n报告还包括从血液中提取的一些结果，包括空腹血糖（7.5 mmol/L），餐后血糖（10.2 mmol/L），总胆固醇、低密度脂蛋白胆固醇和高密度脂蛋白胆固醇的水平。\n\n总体来说，这个报告是关于个人健康状况的一个总结。它提供了一些当前的状态和可能需要解决的问题的信息。\n\n报告的写作方式清晰，令人放心。它只提供最必要的信息来理解报告的目的和对个人健康的重要性。\n\n记得，这个报告只是关于一个人的健康状况的一个总结。它并不替代定期进行医疗检查和由医生提供健康建议来确保个人的健康。\n\n总之，这个报告只是对一个人的健康状况的一个简要总结。它并不替代定期进行医疗检查和由医生提供健康建议来确保个人的健康。",
  "language": "Chinese"
}
export const mockRes = {
  success: true,
  original_content:
    "**Key Medical Findings:**\n\n- **Vital Signs:** \n  - Body Temperature: 37.0°C (Normal)\n  - Systolic Blood Pressure: 135 mmHg (Elevated)\n  - Diastolic Blood Pressure: 85 mmHg (Elevated)\n  - Heart Rate: 88 bpm (Normal)\n  - Respiratory Rate: 18 breaths/min (Normal)\n  - Oxygen Saturation: 97% (Normal)\n\n- **Laboratory Test Results:**\n  - Fasting Blood Glucose: 7.5 mmol/L (High)\n  - Postprandial Blood Glucose: 10.2 mmol/L (High)\n  - Total Cholesterol: 5.8 mmol/L (High)\n  - LDL Cholesterol: 3.8 mmol/L (High)\n  - HDL Cholesterol: 1.1 mmol/L (Normal)\n  - Triglycerides: 2.1 mmol/L (High)",
  explanation:
    "This medical report is for a person named John Doe who was born on March 10, 1967. He is currently 57 years old and his gender is male.\n\nThe report includes some important details about the person's health, such as their body temperature (37.0°C), systolic and diastolic blood pressure, heart rate, respiratory rate, and oxygen saturation level. These numbers are normal for a person of his age.\n\nThe report also includes some test results from the person's blood, including fasting glucose (7.5 mmol/L), postprandial glucose (10.2 mmol/L), total cholesterol, LDL cholesterol, HDL cholesterol, and triglycerides.\n\nOverall, this report is a summary of the person's health status. It provides some information about their current state and any potential issues that may need to be addressed.\n\nThe report is written in a clear, reassuring tone. It provides only the most important information that is necessary to understand the report's purpose and its importance in a person's health.\n\nRemember, this report is just a summary of the person's health status. It does not replace the need for regular medical check-ups and advice from a healthcare provider about their health.",
  indicators: {
    "Fasting Blood Glucose": [7.5, 3.9, 6.1],
    "Postprandial Blood Glucose": [10.2, 3.9, 7.8],
    "Total Cholesterol": [5.8, 3.6, 5.2],
    "LDL Cholesterol": [3.8, 1.8, 3.4],
    "HDL Cholesterol": [1.1, 1.0, 1.5],
    Triglycerides: [2.1, 0.4, 1.7],
  },
  filename: "330d3a43-a8e2-40e2-a0cf-d05163ed691e.jpg",
};

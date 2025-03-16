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

export const mockRes = {
  success: true,
  original_content:
    "### Medical Report Analysis\n\n#### Patient Information:\n- **Name:** John Doe\n- **Age:** 57\n- **Gender:** Male\n- **Date of Birth:** March 10, 1967\n- **Medical Record Number:** 123456789\n- **Date of Report:** March 15, 2025\n\n#### Vital Signs:\n- **Temperature:** 37.0°C (Normal)\n- **Heart Rate:** 88 bpm (Normal)\n\n#### Laboratory Test Results:\n- **Fasting Blood Glucose:** 7.5 mmol/L (High)\n- **Postprandial Blood Glucose:** 10.2 mmol/L (Elevated)\n- **Total Cholesterol:** 5.8 mmol/L (High)\n- **LDL Cholesterol:** 3.8 mmol/L (High)\n- **HDL Cholesterol:** 1.1 mmol/L (Normal)\n- **Triglycerides:** 2.1 mmol/L (High)\n\n#### Key Medical Indicators:\n1. **Fasting Blood Glucose (7.5 mmol/L):** Elevated\n2. **Postprandial Blood Glucose (10.2 mmol/L):** Elevated\n3. **Total Cholesterol (5.8 mmol/L):** High\n4. **LDL Cholesterol (3.8 mmol/L):** High\n5. **HDL Cholesterol (1.1 mmol/L):** Normal\n6. **Triglycerides (2.1 mmol/L):** High\n\n#### Structure of the Report:\n- **Patient Information:** Name, Age, Gender, Date of Birth, Medical Record Number, Date of Report.\n- **Vital Signs:** Temperature, Heart Rate.\n- **Laboratory Test Results:** Fasting Blood Glucose, Postprandial Blood Glucose, Total Cholesterol, LDL Cholesterol, HDL Cholesterol, Triglycerides.\n\n#### Abnormal Values:\n1. **Fasting Blood Glucose (7.5 mmol/L):** Elevated\n2. **Postprandial Blood Glucose (10.2 mmol/L):** Elevated\n3. **Total Cholesterol (5.8 mmol/L):** High\n4. **LDL Cholesterol (3.8 mmol/L):** High\n5. **HDL Cholesterol (1.1 mmol/L):** Normal\n6. **Triglycerides (2.1 mmol/L):** High",
  explanation:
    "Hello John, I'm sorry to hear that you're feeling a bit unwell. Let's break down the medical report for you.\n\n### Patient Information:\n- Your name is John Doe.\n- You are 57 years old and male.\n- Your date of birth is March 10, 1967.\n- Your medical record number is 123456789.\n- The date of your report is March 15, 2025.\n\n### Vital Signs:\n- Your temperature is 37.0°C (normal).\n- Your heart rate is 88 beats per minute (normal).\n\n### Laboratory Test Results:\n- Your fasting blood glucose level is 7.5 mmol/L (high).\n- Your postprandial blood glucose level is 10.2 mmol/L (elevated).\n- Your total cholesterol level is 5.8 mmol/L (high).\n- Your LDL cholesterol level is 3.8 mmol/L (high).\n- Your HDL cholesterol level is 1.1 mmol/L (normal).\n- Your triglyceride level is 2.1 mmol/L (high).\n\n### Key Medical Indicators:\n1. **Fasting Blood Glucose (7.5 mmol/L):** Elevated.\n2. **Postprandial Blood Glucose (10.2 mmol/L):** Elevated.\n3. **Total Cholesterol (5.8 mmol/L):** High.\n4. **LDL Cholesterol (3.8 mmol/L):** High.\n5. **HDL Cholesterol (1.1 mmol/L):** Normal.\n6. **Triglycerides (2.1 mmol/L):** High.\n\n### Abnormal Values:\n- Your fasting blood glucose level is 7.5 mmol/L, which is considered high.\n- Your postprandial blood glucose level is 10.2 mmol/L, which is also considered high.\n- Your total cholesterol level is 5.8 mmol/L, which is considered high.\n- Your LDL cholesterol level is 3.8 mmol/L, which is considered high.\n- Your HDL cholesterol level is 1.1 mmol/L, which is considered normal.\n- Your triglyceride level is 2.1 mmol/L, which is considered high.\n\n### Conclusion:\nBased on the laboratory test results and key medical indicators, it appears that you have elevated fasting blood glucose levels (7.5 mmol/L), postprandial blood glucose levels (10.2 mmol/L), total cholesterol levels (5.8 mmol/L), LDL cholesterol levels (3.8 mmol/L), HDL cholesterol levels (1.1 mmol/L), and triglyceride levels (2.1 mmol/L). These elevated values suggest that you may have diabetes, which is a common condition where your body doesn't produce enough insulin to control blood sugar levels.\n\nIt's important to note that these results are not necessarily indicative of a diagnosis of diabetes but rather a warning sign that you might need further evaluation and treatment. If you're concerned about these findings, it would be best to speak with your healthcare provider for a thorough assessment and possible further testing.\n\nRemember, this is just a summary of the report. If you have any specific questions or concerns, feel free to ask!",
  indicators: {
    Hemoglobin: [14.2, 13.5, 17.5],
    "LDL Cholesterol": [3.8, 1.8, 3.4],
    "HDL Cholesterol": [1.1, 1.0, 1.5],
    Triglycerides: [2.1, 0.4, 1.7],
  },
  filename: "5ebcf556-949c-4393-a21e-53b21949c474.jpg",
};

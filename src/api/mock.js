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
  interpretation:
    "The patient's blood pressure is within the normal range. Cholesterol levels are borderline, and blood sugar levels are abnormal, indicating a potential risk for diabetes.",
  recommendations: [
    "Maintain a healthy diet.",
    "Exercise regularly.",
    "Monitor blood sugar levels daily.",
    "Consult with a healthcare provider for further evaluation.",
  ],
};

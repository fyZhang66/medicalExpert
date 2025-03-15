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

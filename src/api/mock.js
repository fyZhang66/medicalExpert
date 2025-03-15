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
    "success": true,
    "original_content": "Here is the extracted text from the medical report image:\n\n---\n\n**Medical Report**\n\n1. **Patient Information:**\n   - Name:\n   - Age:\n   - Gender:\n   - Date of Birth:\n   - Medical History:\n     - Allergies:\n     - Previous Treatments:\n     - Medications:\n\n2. **Test Items:**\n   - **Ear Function Test (EFT):**\n     - Left Ear:\n       - Threshold: 41 dB\n       - Hearing Loss Type: Sensorineural\n       - Frequency: 500 Hz, 1 kHz, 2 kHz, 3 kHz, 4 kHz, 6 kHz\n         - Results: [Insert values]\n   - **Right Ear:**\n     - Threshold: 28 dB\n     - Hearing Loss Type: Sensorineural\n     - Frequency: 500 Hz, 1 kHz, 2 kHz, 3 kHz, 4 kHz, 6 kHz\n       - Results: [Insert values]\n\n3. **Test Results:**\n   - **Left Ear:**\n     - Pure Tone Average (PTA): 41 dB\n     - Speech Discrimination Score (SDS): 90%\n   - **Right Ear:**\n     - Pure Tone Average (PTA): 28 dB\n     - Speech Discrimination Score (SDS): 95%\n\n4. **Additional Tests:**\n   - **Tinnitus Pitch and Loudness Matching Test (TMIST):**\n     - Left Ear:\n       - Threshold: 31 dB\n       - Loudness: 60 dB\n     - Right Ear:\n       - Threshold: 28 dB\n       - Loudness: 55 dB\n\n5. **Treatment Plan:**\n   - **Medication:**\n     - Name: [Insert name]\n     - Dosage: [Insert dosage]\n     - Frequency: [Insert frequency]\n   - **Follow-up:**\n     - Next Appointment Date:\n     - Instructions for Follow-up:\n\n6. **Notes:**\n   - Any additional notes or comments from the doctor.\n\n---\n\n**Highlighted Abnormal Values:**\n\n- Left Ear: Threshold 41 dB (Sensorineural hearing loss)\n- Right Ear: Threshold 28 dB (Sensorineural hearing loss)\n\nPlease note that this is a structured format of the extracted text. The actual values and details should be filled in based on the provided data from the image.",
    "explanation": "Hello there! I'm here to help you understand your medical report. Let's break it down step by step.\n\nFirst, let's look at the test results for your ears:\n\n- Your left ear has a threshold of 41 dB and shows sensorineural hearing loss. This means that sound is not reaching your inner ear properly.\n- Your right ear has a threshold of 28 dB and also shows sensorineural hearing loss.\n\nSensorineural hearing loss is when the problem lies in the inner ear or the nerve that connects your ear to your brain. It's often caused by aging, noise exposure, or other health conditions.\n\nNow, let's talk about the treatment plan:\n\n- You have been prescribed a medication called [insert name]. The dosage and frequency will be provided by your doctor.\n- Your next appointment is scheduled for [insert date]. Make sure to keep this date in mind so you can follow up with your healthcare provider.\n\nIf you notice any changes or concerns, please don't hesitate to reach out. It's always a good idea to discuss these things with your doctor.\n\nRemember, the most important thing right now is to take care of yourself and follow your treatment plan. If you have any questions or need further clarification, feel free to ask!",
    "filename": "553fc7ab-92cc-4dee-a6e8-b8ed953cb355.jpg"
}

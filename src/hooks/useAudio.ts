import { useState } from 'react';

export const useAudio = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    // Implement start recording logic
  };

  const stopRecording = () => {
    // Implement stop recording logic
  };

  return { isRecording, startRecording, stopRecording };
};
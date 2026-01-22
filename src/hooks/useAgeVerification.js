import { useState } from 'react';

export const useAgeVerification = () => {
  const [isVerified, setIsVerified] = useState(() => {
    return localStorage.getItem('ageVerified') === 'true';
  });

  const handleAccept = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  const handleReject = () => {
    localStorage.setItem('ageRejected', 'true');
    window.location.href = 'https://jakrzucicpalenie.pl/materialy-do-pobrania/';
  };

  return { isVerified, handleAccept, handleReject };
};
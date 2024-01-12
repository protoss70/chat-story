export default function generateUniqueID() {
    const getRandomChar = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return chars.charAt(Math.floor(Math.random() * chars.length));
    };
  
    let uniqueID;
    const idLength = Math.floor(Math.random() * 3) + 8; // Generates a length between 8 and 10 characters
    const attemptsLimit = 10;
    let attempts = 0;
  
    do {
      uniqueID = Array.from({ length: idLength }, getRandomChar).join('');
      attempts++;
    } while (document.getElementById(uniqueID) && attempts < attemptsLimit);
  
    if (attempts === attemptsLimit) {
      console.warn('Unable to generate a unique ID within the attempts limit.');
      return null;
    }
  
    return uniqueID;
  }
  
import CryptoJS from "crypto-js";

// Utility to encrypt and decrypt data
const encryptData = (data: any, key: string): string => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

const decryptData = (ciphertext: string, key: string): any => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Function to manage secure local storage
const SecureLocalStorage = {
  // Secret key for encryption/decryption (keep this safe!)
  secretKey: "my-secure-key", // Change this to a more secure key in production!

  // Store data securely in local storage
  saveData: function (key: string, data: any): void {
    const hash = this.generateHash(data);
    const encryptedData = encryptData(data, this.secretKey);

    localStorage.setItem(`${key}_data`, encryptedData);
    localStorage.setItem(`${key}_hash`, hash);
  },

  // Retrieve and validate data from local storage
  retrieveData: function (key: string): any | null {
    const storedData = localStorage.getItem(`${key}_data`);
    const storedHash = localStorage.getItem(`${key}_hash`);

    if (!storedData || !storedHash) {
      console.error("Data or hash missing!");
      return null;
    }

    const decryptedData = decryptData(storedData, this.secretKey);
    const recalculatedHash = this.generateHash(decryptedData);

    if (storedHash !== recalculatedHash) {
      console.error("Data has been tampered with! Clearing local storage...");
      localStorage.clear(); // Clear local storage
      console.log("Local storage cleared due to tampering of data.");
      return null;
    }

    console.log("Data is intact!");
    return decryptedData;
  },

  // Generate a SHA-256 hash for the given data
  generateHash: function (data: any): string {
    return CryptoJS.SHA256(JSON.stringify(data)).toString();
  },
};

// Example usage
// const initialData = { name: "John", age: 25 };

// Save data securely
// SecureLocalStorage.saveData("user", initialData);

// Retrieve and validate data
// const retrievedData = SecureLocalStorage.retrieveData("user");
// console.log(retrievedData); // Should log: { name: 'John', age: 25 }

// Export the utility
export default SecureLocalStorage;

// rates.js

// Encrypted pricing data (Base64 encoded JSON)
const encryptedPricing = "eyJ1bmlmb3JtX25vX2luc3RhdGlvbl9yb3VuZHRyaXAiOlt7Im1pbiI6MTIwLCJtYXgiOjIzOSwiZGF5IjoyLjE1LCJuaWdodCI6Mi41NX0s..."

function decryptPricing() {
    try {
        const decrypted = atob(encryptedPricing);
        const data = JSON.parse(decrypted);

        // Remove all slabs where min = 60 and max = 119
        for (const key in data) {
            if (Array.isArray(data[key])) {
                data[key] = data[key].filter(tier => !(tier.min === 60 && tier.max === 119));
            }
        }

        return data;
    } catch (error) {
        console.error('Error decrypting pricing data:', error);
        return null;
    }
}

// Initialize global pricingData
const pricingData = decryptPricing();

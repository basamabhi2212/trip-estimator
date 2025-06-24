// PASSWORD PROTECTION: This file contains sensitive pricing data
// Direct access requires authentication
(function() {
    // Check if this file is being accessed directly
    if (window.location && (window.location.pathname.endsWith('rates.js') || window.location.pathname.includes('rates.js'))) {
        const password = prompt("This file contains sensitive pricing data. Enter password to access:");
        if (password !== "Basam@2212") {
            document.body.innerHTML = "<h1>Access Denied</h1><p>Invalid password. Contact administrator for access.</p>";
            throw new Error("Unauthorized access");
        }
    }
})();

// Encrypted pricing data - Base64 encoded
const encryptedFareData = "Y29uc3QgZmFyZUNoYXJ0ID0geyJObyI6eyJJbnN0YXRpb24iOnsiUm91bmQgVHJpcCI6eyIwLTEyMCI6e2RheToyLjI1LG5pZ2h0OjIuNjB9LCIxMjEtMjQwIjp7ZGF5OjIuMTUsbmlnaHQ6Mi41NX0sIjI0MS00ODAiOntkaXk6Mi4xMCxuaWdodDoyLjQwfSwiNDgxLTYwMCI6e2RheToxLjkwLG5pZ2h0OjIuMzV9LCI2MDEtNzIwIjp7ZGF5OjEuODUsbmlnaHQ6Mi4zMH0sIjcyMS0xMDgwIjp7ZGF5OjEuNzAsbmlnaHQ6MS45NX0sIjEwODEtMTQ0MCI6e2RheToxLjUwLG5pZ2h0OjEuNTV9LCIxNDQxLTg2NDAiOntkaXk6MS4xNSxuaWdodDoxLjE1fSwiODY0MS0xMDAwMDAwIjp7ZGF5OjEuMDUsbmlnaHQ6MS4wNX19LCJPbmUgV2F5Ijp7IjAtMTIwIjp7ZGF5OjIuNzAsbmlnaHQ6NS41NX0sIjEyMS0yNDAiOntkaXk6Mi42MCxuaWdodDo1LjEwfSwiMjQxLTQ4MCI6e2RheTo6Mi40MCxuaWdodDo0LjYwfSwiNDgxLTYwMCI6e2RheToyLjE1LG5pZ2h0OjMuMTV9LCI2MDEtNzIwIjp7ZGF5OjIuMTUsbmlnaHQ6My4xNX0sIjcyMS0xMDgwIjp7ZGF5OjIuMTAsbmlnaHQ6Mi42MH0sIjEwODEtMTQ0MCI6e2RheToxLjgwLG5pZ2h0OjEuOTB9LCIxNDQxLTg2NDAiOntkaXk6MS41MCxuaWdodDoxLjUwfSwiODY0MS0xMDAwMDAwIjp7ZGF5OjEuMzAsbmlnaHQ6MS4zMH19fSwiT3V0c3RhdGlvbiI6eyJSb3VuZCBUcmlwIjp7IjAtMTIwIjp7ZGF5OjIuNjAsbmlnaHQ6My4wNX0sIjEyMS0yNDAiOntkaXk6Mi41NSxuaWdodDozLjAwfSwiMjQxLTQ4MCI6e2RheTo6Mi4yNSxuaWdodDoyLjQ1fSwiNDgxLTYwMCI6e2RheToyLjE1LG5pZ2h0OjIuNDB9LCI2MDEtNzIwIjp7ZGF5OjIuMTUsbmlnaHQ6Mi40MH0sIjcyMS0xMDgwIjp7ZGF5OjIuMDAsbmlnaHQ6Mi4yNX0sIjEwODEtMTQ0MCI6e2RheToxLjcwLG5pZ2h0OjEuNzB9LCIxNDQxLTg2NDAiOntkaXk6MS4yMCxuaWdodDoxLjIwfSwiODY0MS0xMDAwMDAwIjp7ZGF5OjEuMTUsbmlnaHQ6MS4xNX19LCJPbmUgV2F5Ijp7IjAtMTIwIjp7ZGF5OjYuMzAsbmlnaHQ6Ni4zMH0sIjEyMS0yNDAiOntkaXk6NS45MCxuaWdodDo1LjkwfSwiMjQxLTQ4MCI6e2RheTo6NS45MCxuaWdodDo1LjkwfSwiNDgxLTYwMCI6e2RheTo1LjkwLG5pZ2h0OjUuOTB9LCI2MDEtNzIwIjp7ZGF5OjUuOTAsbmlnaHQ6NS45MH0sIjcyMS0xMDgwIjp7ZGF5OjUuMjAsbmlnaHQ6NS4yMH0sIjEwODEtMTQ0MCI6e2RheTozLjgwLG5pZ2h0OjMuODB9LCIxNDQxLTg2NDAiOntkaXk6My4wMCxuaWdodDozLjAwfSwiODY0MS0xMDAwMDAwIjp7ZGF5OjIuMTUsbmlnaHQ6Mi4xNX19fX0sIlllcyI6eyJJbnN0YXRpb24iOnsiUm91bmQgVHJpcCI6eyIwLTEyMCI6e2RheToyLjMwLG5pZ2h0OjIuNjV9LCIxMjEtMjQwIjp7ZGl5OjIuMjAsbmlnaHQ6Mi42MH0sIjI0MS00ODAiOntkaXk6Mi4xNSxuaWdodDoyLjQ1fSwiNDgxLTYwMCI6e2RheToxLjk1LG5pZ2h0OjIuNDB9LCI2MDEtNzIwIjp7ZGF5OjEuOTAsbmlnaHQ6Mi4zNX0sIjcyMS0xMDgwIjp7ZGF5OjEuNzUsbmlnaHQ6Mi4wMH0sIjEwODEtMTQ0MCI6e2RheToxLjU1LG5pZ2h0OjEuNjB9LCIxNDQxLTg2NDAiOntkaXk6MS4yMCxuaWdodDoxLjIwfSwiODY0MS0xMDAwMDAwIjp7ZGF5OjEuMTAsbmlnaHQ6MS4xMH19LCJPbmUgV2F5Ijp7IjAtMTIwIjp7ZGF5OjIuNzUsbmlnaHQ6NS42MH0sIjEyMS0yNDAiOntkaXk6Mi42NSxuaWdodDo1LjE1fSwiMjQxLTQ4MCI6e2RheTo6Mi40NSxuaWdodDo0LjY1fSwiNDgxLTYwMCI6e2RheToyLjIwLG5pZ2h0OjMuMjB9LCI2MDEtNzIwIjp7ZGF5OjIuMjAsbmlnaHQ6My4yMH0sIjcyMS0xMDgwIjp7ZGF5OjIuMTUsbmlnaHQ6Mi42NX0sIjEwODEtMTQ0MCI6e2RheToxLjg1LG5pZ2h0OjEuOTV9LCIxNDQxLTg2NDAiOntkaXk6MS41NSxuaWdodDoxLjU1fSwiODY0MS0xMDAwMDAwIjp7ZGF5OjEuMzUsbmlnaHQ6MS4zNX19fSwiT3V0c3RhdGlvbiI6eyJSb3VuZCBUcmlwIjp7IjAtMTIwIjp7ZGF5OjIuNjUsbmlnaHQ6My4xMH0sIjEyMS0yNDAiOntkaXk6Mi42MCxuaWdodDozLjA1fSwiMjQxLTQ4MCI6e2RheTo6Mi4zMCxuaWdodDoyLjUwfSwiNDgxLTYwMCI6e2RheToyLjIwLG5pZ2h0OjIuNDV9LCI2MDEtNzIwIjp7ZGF5OjIuMjAsbmlnaHQ6Mi40NX0sIjcyMS0xMDgwIjp7ZGF5OjIuMDUsbmlnaHQ6Mi4zMH0sIjEwODEtMTQ0MCI6e2RheToxLjc1LG5pZ2h0OjEuNzV9LCIxNDQxLTg2NDAiOntkaXk6MS4yNSxuaWdodDoxLjI1fSwiODY0MS0xMDAwMDAwIjp7ZGF5OjEuMjAsbmlnaHQ6MS4yMH19LCJPbmUgV2F5Ijp7IjAtMTIwIjp7ZGF5OjYuMzUsbmlnaHQ6Ni4zNX0sIjEyMS0yNDAiOntkaXk6NS45NSxuaWdodDo1Ljk1fSwiMjQxLTQ4MCI6e2RheTo6NS45NSxuaWdodDo1Ljk1fSwiNDgxLTYwMCI6e2RheTo1Ljk1LG5pZ2h0OjUuOTV9LCI2MDEtNzIwIjp7ZGF5OjUuOTUsbmlnaHQ6NS45NX0sIjcyMS0xMDgwIjp7ZGF5OjUuMjUsbmlnaHQ6NS4yNX0sIjEwODEtMTQ0MCI6e2RheTozLjg1LG5pZ2h0OjMuODV9LCIxNDQxLTg2NDAiOntkaXk6My4wNSxuaWdodDozLjA1fSwiODY0MS0xMDAwMDAwIjp7ZGF5OjIuMjAsbmlnaHQ6Mi4yMH19fX19Ow==";

// Global variables
let fareChart = null;
let isDataDecrypted = false;

// Simple XOR encryption/decryption
function simpleDecrypt(base64Data, password) {
    try {
        // Decode base64
        const decoded = atob(base64Data);
        
        // Apply XOR decryption with password
        let decrypted = '';
        for (let i = 0; i < decoded.length; i++) {
            const char = decoded.charCodeAt(i);
            const key = password.charCodeAt(i % password.length);
            decrypted += String.fromCharCode(char ^ key);
        }
        
        return decrypted;
    } catch (e) {
        return null;
    }
}

// Initialize pricing data on load
function initializePricingData() {
    if (isDataDecrypted && fareChart) return true;
    
    try {
        // For this implementation, we'll use base64 decoded data directly
        // as a simpler encryption method
        const decodedData = atob(encryptedFareData);
        
        // Execute the decoded JavaScript to get fareChart
        eval(decodedData);
        
        isDataDecrypted = true;
        return true;
    } catch (e) {
        console.error("Failed to decrypt pricing data");
        return false;
    }
}

// Initialize on load
if (!initializePricingData()) {
    throw new Error("Unable to initialize pricing data");
}

/**
 * Get the appropriate fare rates based on total minutes
 * @param {number} totalMinutes - Total trip duration in minutes
 * @param {string} uniform - Uniform selection (Yes/No)
 * @param {string} tripType - Trip type (Instation/Outstation)
 * @param {string} mode - Trip mode (One Way/Round Trip)
 * @returns {Object} Object containing day and night rates
 */
function getFareRates(totalMinutes, uniform, tripType, mode) {
    if (!isDataDecrypted || !fareChart) {
        throw new Error("Pricing data not available");
    }
    
    const rates = fareChart[uniform][tripType][mode];
    
    // Define time ranges in order
    const timeRanges = [
        "0-120", "121-240", "241-480", "481-600", "601-720",
        "721-1080", "1081-1440", "1441-8640", "8641-1000000"
    ];
    
    // Find the appropriate time range
    for (const range of timeRanges) {
        const [min, max] = range.split('-').map(Number);
        if (totalMinutes >= min && totalMinutes <= max) {
            return rates[range];
        }
    }
    
    // Fallback to the highest range
    return rates["8641-1000000"];
}

/**
 * Calculate day and night minutes for a trip
 * @param {Date} start - Start date/time
 * @param {Date} end - End date/time
 * @returns {Object} Object containing dayMinutes and nightMinutes
 */
function calculateDayNightMinutes(start, end) {
    let dayMinutes = 0;
    let nightMinutes = 0;
    
    let current = new Date(start);
    while (current < end) {
        const hour = current.getHours();
        const isDay = hour >= 7 && hour < 22; // 7 AM to 9:59 PM is day
        
        if (isDay) {
            dayMinutes++;
        } else {
            nightMinutes++;
        }
        
        current.setMinutes(current.getMinutes() + 1);
    }
    
    return { dayMinutes, nightMinutes };
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    
    errorDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <i class="fas fa-exclamation-triangle me-2"></i>
            <strong>Error:</strong> ${message}
        </div>
    `;
    errorDiv.style.display = 'block';
    resultDiv.style.display = 'none';
}

/**
 * Show calculation results
 * @param {Object} results - Calculation results object
 */
function showResults(results) {
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    
    // Store trip data for copying
    window.tripData = results;
    
    resultDiv.innerHTML = `
        <div class="card bg-success text-white">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="card-title mb-0">
                    <i class="fas fa-receipt me-2"></i>
                    Trip Fare Calculation Results
                </h4>
                <button class="btn btn-light btn-sm" onclick="copyTripSummary()">
                    <i class="fas fa-copy me-1"></i>Copy Summary
                </button>
            </div>
            <div class="card-body">
                <div><strong>Total Minutes:</strong> ${results.totalMinutes} mins</div>
                <div><strong>Day:</strong> ${results.dayMinutes} mins | <strong>Night:</strong> ${results.nightMinutes} mins</div>
                <div><strong>Rate per Minute:</strong> ₹${results.dayRate.toFixed(2)} (Day), ₹${results.nightRate.toFixed(2)} (Night)</div>
                <div><strong>Base Price:</strong> ₹${results.basePrice.toFixed(2)}</div>
                <div><strong>GST (18%):</strong> ₹${results.gst}</div>
                <div><strong><u>Total Price:</u></strong> ₹${results.totalPrice}</div>
            </div>
        </div>
    `;
    
    resultDiv.style.display = 'block';
    errorDiv.style.display = 'none';
}

/**
 * Copy trip summary to clipboard in the requested format
 */
function copyTripSummary() {
    if (!window.tripData) {
        showError("No trip data available to copy.");
        return;
    }
    
    // Get form values for copying
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const uniform = document.getElementById("uniform").value;
    const tripType = document.getElementById("tripType").value;
    const mode = document.getElementById("mode").value;
    
    // Format times for display
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    const formatDateTime = (date) => {
        return date.toLocaleString('en-IN', {
            day: '2-digit',
            month: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };
    
    // Format total time as HH:MM
    const totalTimeFormatted = `${String(window.tripData.hours).padStart(2, '0')}:${String(window.tripData.mins).padStart(2, '0')}`;
    
    // Create formatted summary
    const summary = `Trip Start Time - ${formatDateTime(startDate)}
Trip End Time - ${formatDateTime(endDate)}
Trip Type - ${tripType}
Trip Route - ${mode}
Total Time - ${totalTimeFormatted}
Total Price - ₹${window.tripData.totalPrice}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(summary).then(() => {
        // Show success message
        const copyButton = document.querySelector('[onclick="copyTripSummary()"]');
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = '<i class="fas fa-check me-1"></i>Copied!';
        copyButton.classList.remove('btn-light');
        copyButton.classList.add('btn-success');
        
        setTimeout(() => {
            copyButton.innerHTML = originalText;
            copyButton.classList.remove('btn-success');
            copyButton.classList.add('btn-light');
        }, 2000);
    }).catch(err => {
        showError("Failed to copy to clipboard. Please try again.");
        console.error('Copy failed:', err);
    });
}

/**
 * Main function to calculate trip fare
 */
function calculateFare() {
    // Get form values
    const start = new Date(document.getElementById("startTime").value);
    const end = new Date(document.getElementById("endTime").value);
    const uniform = document.getElementById("uniform").value;
    const tripType = document.getElementById("tripType").value;
    const mode = document.getElementById("mode").value;
    
    // Validate inputs
    if (isNaN(start) || isNaN(end)) {
        showError("Please enter valid start and end times.");
        return;
    }
    
    if (end <= start) {
        showError("End time must be after start time.");
        return;
    }
    
    // Calculate day and night minutes
    let { dayMinutes, nightMinutes } = calculateDayNightMinutes(start, end);
    let totalMinutes = dayMinutes + nightMinutes;
    
    // Enforce minimum 120 minutes billing
    if (totalMinutes < 120) {
        const diff = 120 - totalMinutes;
        let tempTime = new Date(end);
        
        // Add remaining minutes to reach 120 minimum
        for (let i = 0; i < diff; i++) {
            const hour = tempTime.getHours();
            const isDay = hour >= 7 && hour < 22;
            
            if (isDay) {
                dayMinutes++;
            } else {
                nightMinutes++;
            }
            
            tempTime.setMinutes(tempTime.getMinutes() + 1);
        }
        
        totalMinutes = 120;
    }
    
    // Get fare rates based on total minutes
    const rates = getFareRates(totalMinutes, uniform, tripType, mode);
    
    // Calculate fare
    const dayFare = dayMinutes * rates.day;
    const nightFare = nightMinutes * rates.night;
    const basePrice = dayFare + nightFare;
    const gst = Math.round(basePrice * 0.18);
    const totalPrice = Math.round(basePrice + gst);
    
    // Calculate hours and minutes for display
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    
    // Show results
    showResults({
        totalMinutes,
        hours,
        mins,
        dayMinutes,
        nightMinutes,
        dayRate: rates.day,
        nightRate: rates.night,
        basePrice,
        gst,
        totalPrice
    });
}
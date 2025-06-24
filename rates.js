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

// Updated pricing structure based on the provided rates
const fareChart = {
    "No": {
        "Instation": {
            "Round Trip": {
                "0-120": { day: 2.25, night: 2.60 },
                "121-240": { day: 2.15, night: 2.55 },
                "241-480": { day: 2.10, night: 2.40 },
                "481-600": { day: 1.90, night: 2.35 },
                "601-720": { day: 1.85, night: 2.30 },
                "721-1080": { day: 1.70, night: 1.95 },
                "1081-1440": { day: 1.50, night: 1.55 },
                "1441-8640": { day: 1.15, night: 1.15 },
                "8641-1000000": { day: 1.05, night: 1.05 }
            },
            "One Way": {
                "0-120": { day: 2.70, night: 5.55 },
                "121-240": { day: 2.60, night: 5.10 },
                "241-480": { day: 2.40, night: 4.60 },
                "481-600": { day: 2.15, night: 3.15 },
                "601-720": { day: 2.15, night: 3.15 },
                "721-1080": { day: 2.10, night: 2.60 },
                "1081-1440": { day: 1.80, night: 1.90 },
                "1441-8640": { day: 1.50, night: 1.50 },
                "8641-1000000": { day: 1.30, night: 1.30 }
            }
        },
        "Outstation": {
            "Round Trip": {
                "0-120": { day: 2.60, night: 3.05 },
                "121-240": { day: 2.55, night: 3.00 },
                "241-480": { day: 2.25, night: 2.45 },
                "481-600": { day: 2.15, night: 2.40 },
                "601-720": { day: 2.15, night: 2.40 },
                "721-1080": { day: 2.00, night: 2.25 },
                "1081-1440": { day: 1.70, night: 1.70 },
                "1441-8640": { day: 1.20, night: 1.20 },
                "8641-1000000": { day: 1.15, night: 1.15 }
            },
            "One Way": {
                "0-120": { day: 6.30, night: 6.30 },
                "121-240": { day: 5.90, night: 5.90 },
                "241-480": { day: 5.90, night: 5.90 },
                "481-600": { day: 5.90, night: 5.90 },
                "601-720": { day: 5.90, night: 5.90 },
                "721-1080": { day: 5.20, night: 5.20 },
                "1081-1440": { day: 3.80, night: 3.80 },
                "1441-8640": { day: 3.00, night: 3.00 },
                "8641-1000000": { day: 2.15, night: 2.15 }
            }
        }
    },
    "Yes": {
        "Instation": {
            "Round Trip": {
                "0-120": { day: 2.30, night: 2.65 },
                "121-240": { day: 2.20, night: 2.60 },
                "241-480": { day: 2.15, night: 2.45 },
                "481-600": { day: 1.95, night: 2.40 },
                "601-720": { day: 1.90, night: 2.35 },
                "721-1080": { day: 1.75, night: 2.00 },
                "1081-1440": { day: 1.55, night: 1.60 },
                "1441-8640": { day: 1.20, night: 1.20 },
                "8641-1000000": { day: 1.10, night: 1.10 }
            },
            "One Way": {
                "0-120": { day: 2.75, night: 5.60 },
                "121-240": { day: 2.65, night: 5.15 },
                "241-480": { day: 2.45, night: 4.65 },
                "481-600": { day: 2.20, night: 3.20 },
                "601-720": { day: 2.20, night: 3.20 },
                "721-1080": { day: 2.15, night: 2.65 },
                "1081-1440": { day: 1.85, night: 1.95 },
                "1441-8640": { day: 1.55, night: 1.55 },
                "8641-1000000": { day: 1.35, night: 1.35 }
            }
        },
        "Outstation": {
            "Round Trip": {
                "0-120": { day: 2.65, night: 3.10 },
                "121-240": { day: 2.60, night: 3.05 },
                "241-480": { day: 2.30, night: 2.50 },
                "481-600": { day: 2.20, night: 2.45 },
                "601-720": { day: 2.20, night: 2.45 },
                "721-1080": { day: 2.05, night: 2.30 },
                "1081-1440": { day: 1.75, night: 1.75 },
                "1441-8640": { day: 1.25, night: 1.25 },
                "8641-1000000": { day: 1.20, night: 1.20 }
            },
            "One Way": {
                "0-120": { day: 6.35, night: 6.35 },
                "121-240": { day: 5.95, night: 5.95 },
                "241-480": { day: 5.95, night: 5.95 },
                "481-600": { day: 5.95, night: 5.95 },
                "601-720": { day: 5.95, night: 5.95 },
                "721-1080": { day: 5.25, night: 5.25 },
                "1081-1440": { day: 3.85, night: 3.85 },
                "1441-8640": { day: 3.05, night: 3.05 },
                "8641-1000000": { day: 2.20, night: 2.20 }
            }
        }
    }
};

/**
 * Get the appropriate fare rates based on total minutes
 * @param {number} totalMinutes - Total trip duration in minutes
 * @param {string} uniform - Uniform selection (Yes/No)
 * @param {string} tripType - Trip type (Instation/Outstation)
 * @param {string} mode - Trip mode (One Way/Round Trip)
 * @returns {Object} Object containing day and night rates
 */
function getFareRates(totalMinutes, uniform, tripType, mode) {
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
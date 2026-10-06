function calculateGoldValue(weight, karat, pricePerGram) {
if (!Number.isFinite(weight) || weight < 0) {
throw new Error("Weight must be a non-negative number.");
}

if (!Number.isFinite(karat) || karat <= 0 || karat > 24) {
throw new Error("Karat must be between 1 and 24.");
}

if (!Number.isFinite(pricePerGram) || pricePerGram < 0) {
throw new Error("Price per gram must be a non-negative number.");
}

const purity = karat / 24;
return weight * purity * pricePerGram;
}

function calculatePurity(karat) {
if (!Number.isFinite(karat) || karat <= 0 || karat > 24) {
throw new Error("Karat must be between 1 and 24.");
}

return karat / 24;
}

module.exports = {
calculateGoldValue,
calculatePurity
};

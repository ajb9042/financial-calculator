// 1. Compound Interest Logic
function calcCompoundInterest() {
    const p = parseFloat(document.getElementById('ci-principal').value);
    const r = parseFloat(document.getElementById('ci-rate').value) / 100;
    const t = parseFloat(document.getElementById('ci-years').value);
    const amount = p * Math.pow((1 + r), t);
    document.getElementById('ci-result').innerText = amount.toFixed(2);
}

// 2. Mortgage Logic
function calcMortgage() {
    const p = parseFloat(document.getElementById('m-amount').value);
    const i = (parseFloat(document.getElementById('m-rate').value) / 100) / 12;
    const n = parseFloat(document.getElementById('m-years').value) * 12;
    const monthly = p * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    document.getElementById('m-result').innerText = monthly.toFixed(2);
}

// 3. ROI Logic
function calcROI() {
    const initial = parseFloat(document.getElementById('roi-invested').value);
    const final = parseFloat(document.getElementById('roi-returned').value);
    const roi = ((final - initial) / initial) * 100;
    document.getElementById('roi-result').innerText = roi.toFixed(2);
}

// 4. Savings Logic
function calcSavings() {
    const goal = parseFloat(document.getElementById('sg-goal').value);
    const months = parseFloat(document.getElementById('sg-months').value);
    const needed = goal / months;
    document.getElementById('sg-result').innerText = needed.toFixed(2);
}

// 5. Inflation Logic
function calcInflation() {
    const amount = parseFloat(document.getElementById('inf-amount').value);
    const years = parseFloat(document.getElementById('inf-years').value);
    const rate = 0.03;
    const todayValue = amount / Math.pow((1 + rate), years);
    document.getElementById('inf-result').innerText = todayValue.toFixed(2);
}
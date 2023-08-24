function calculateTax() {
    var paymentFrequency = document.getElementById("paymentFrequency").value;
    var income = parseFloat(document.getElementById("incomeInput").value);

    if (isNaN(income)) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    var tax;
    if (paymentFrequency === "weekly") {
        var annualIncome = income * 52;
        tax = calculateTaxAmount(annualIncome) / 52;
    } else if (paymentFrequency === "fortnightly") {
        var annualIncome = income * 26;
        tax = calculateTaxAmount(annualIncome) / 26;
    } else if (paymentFrequency === "monthly") {
        var annualIncome = income * 12;
        tax = calculateTaxAmount(annualIncome) / 12;
    } else {
        alert("Frecuencia de pago no válida");
        return;
    }

    document.getElementById("result").textContent = "Your tax " + paymentFrequency + " is $" + tax.toFixed(2);
}

function calculateTaxAmount(income) {
    if (income <= 18200) {
        return 0;
    } else if (income <= 45000) {
        return (income - 18200) * 0.19;
    } else if (income <= 120000) {
        return 5092 + (income - 45000) * 0.325;
    } else if (income <= 180000) {
        return 29467 + (income - 120000) * 0.37;
    } else {
        return 51667 + (income - 180000) * 0.45;
    }
}

const form = document.getElementById('tax-form');
const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');


calculateBtn.addEventListener('click', function () {
    calculateTax();
});

resetBtn.addEventListener('click', function () {
    document.getElementById("result").textContent = "";
});


// Agregar evento al presionar Enter en campos de entrada
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateTax();
    }
});

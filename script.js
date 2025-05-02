
document.getElementById("escrowForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("summarySeller").textContent = document.getElementById("seller").value;
    document.getElementById("summaryBuyer").textContent = document.getElementById("buyer").value;
    document.getElementById("summaryAmount").textContent = document.getElementById("amount").value;
    document.getElementById("summaryDetails").textContent = document.getElementById("details").value;

    document.getElementById("transactionSummary").classList.remove("hidden");
});

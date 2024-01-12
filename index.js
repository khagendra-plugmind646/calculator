const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function delete_value() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        var equation = display.value;
        var result = eval(equation);

        // Append the equation and result to the history tab
        var historyContent = generateHistoryContent();
        historyContent += '<p>' + equation + ' = ' + result + '</p>';
        document.querySelector('.history-content').innerHTML = historyContent;

        // Display the result on the main display
        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
}

function toggleHistory() {
    var historyTab = document.querySelector('.history-tab');
    historyTab.classList.toggle('active');
}

function clearHistory() {
    document.querySelector('.history-content').innerHTML = "<p>History content here.</p>";
}

function allClear() {
    clearDisplay();
    clearHistory();
}

function generateHistoryContent() {
    var existingHistory = document.querySelector('.history-content').innerHTML;
    return existingHistory || "";
}
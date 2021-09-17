// target inner text 
const innerText = id => {
    const elm = document.getElementById(id).innerText;
    const elmVal = parseFloat(elm);
    return elmVal;
}

// select option onchange data clear
function getOnChange() {
    const allOptions = document.getElementById('all-options')
    const results = document.getElementById('results');
    results.textContent = '';
}

// fifteen percent interest function
function fifteenPercentInt() {
    const allOptions = document.getElementById('all-options')
    let loanAmount = parseFloat(allOptions.options[allOptions.selectedIndex].text);
    const fifteenPercent = innerText('fifteen-percent')
    const interest = parseFloat(loanAmount * fifteenPercent / 100);
    const totalAmountPayable = loanAmount + interest;
    const perMonthPayable = totalAmountPayable / 12;

    // display results 
    const results = document.getElementById('results');
    results.textContent = '';
    results.innerHTML = `
        <div class="total-result">
            <h2>Loan amount calculation for 12 months</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Grand Amount</th>
                        <th scope="col">Interest rate 15%</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Total Payable</th>
                        <th scope="col">Per month install</th>
                    </tr>
                </thead>
                <tbody>
                    <td>${loanAmount}</td>
                    <td>${interest}</td>
                    <td>12 Months</td>
                    <td>${totalAmountPayable}</td>
                    <td>${perMonthPayable.toFixed(2)}</td>
                </tbody>
            </table>
        </div>
    
    `;
}
// ten percent interest function
function tenPercentInt() {
    const allOptions = document.getElementById('all-options')
    let loanAmount = parseFloat(allOptions.options[allOptions.selectedIndex].text);
    const tenPercent = innerText('ten-percent')
    const interest = parseFloat(loanAmount * tenPercent / 100);
    const totalAmountPayable = loanAmount + interest;
    const perMonthPayable = totalAmountPayable / 6;

    // display results 
    const results = document.getElementById('results');
    results.textContent = '';
    results.innerHTML = `
        <div class="total-result">
            <h2>Loan amount calculation for 6 months</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Grand Amount</th>
                        <th scope="col">Interest rate 10%</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Total Payable</th>
                        <th scope="col">Per month install</th>
                    </tr>
                </thead>
                <tbody>
                    <td>${loanAmount}</td>
                    <td>${interest}</td>
                    <td>6 Months</td>
                    <td>${totalAmountPayable}</td>
                    <td>${perMonthPayable.toFixed(2)}</td>
                </tbody>
            </table>
        </div>
    
    `;
}
// five percent interest function
function fivePercentInt() {
    const allOptions = document.getElementById('all-options')
    let loanAmount = parseFloat(allOptions.options[allOptions.selectedIndex].text);
    const tenPercent = innerText('five-percent')
    const interest = parseFloat(loanAmount * tenPercent / 100);
    const totalAmountPayable = loanAmount + interest;
    const perMonthPayable = totalAmountPayable / 3;

    // display results 
    const results = document.getElementById('results');
    results.textContent = '';
    results.innerHTML = `
        <div class="total-result">
            <h2>Loan amount calculation for 3 months</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Grand Amount</th>
                        <th scope="col">Interest rate 5%</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Total Payable</th>
                        <th scope="col">Per month install</th>
                    </tr>
                </thead>
                <tbody>
                    <td>${loanAmount}</td>
                    <td>${interest}</td>
                    <td>3 Months</td>
                    <td>${totalAmountPayable}</td>
                    <td>${perMonthPayable.toFixed(2)}</td>
                </tbody>
            </table>
        </div>
    
    `;
};

// interest active amount
function interestActive(targetArea) {
    const targetedCol = document.getElementById(targetArea);
    const btns = targetedCol.getElementsByClassName('interest');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            let current = targetedCol.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', "");
            this.className += ' active '
        })
    }
}
interestActive('interest-col')
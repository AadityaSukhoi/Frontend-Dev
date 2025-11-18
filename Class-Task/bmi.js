function calculateBMI() {
    console.log("=== BMI Calculation Started ===");

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("result");
    let bar = document.getElementById("progressBar");

    console.log("Raw weight:", weight);
    console.log("Raw height:", height);

    if (!weight || !height) {
        result.innerText = "Please enter valid values.";
        bar.style.width = "0%";
        bar.style.background = "#111";
        console.log("Invalid input — missing weight/height");
        return;
    }

    if (height > 3) {
        height = height / 100;
        console.log("Height converted to meters:", height);
    } else {
        console.log("Height entered in meters:", height);
    }

    let bmi = (weight / (height * height)).toFixed(2);
    console.log("Calculated BMI:", bmi);

    let status = "";
    let color = "";

    if (bmi < 18.5) {
        status = "Underweight";
        color = "#f1c40f";
    } 
    else if (bmi < 24.9) {
        status = "Normal";
        color = "#2ecc71";
    } 
    else if (bmi < 29.9) {
        status = "Overweight";
        color = "#e67e22";
    } 
    else {
        status = "Obese";
        color = "#e74c3c";
    }

    console.log("Category:", status);
    console.log("Color:", color);

    result.innerText = `BMI: ${bmi} → ${status}`;

    let barWidth = Math.min(bmi * 2.5, 100);
    bar.style.width = barWidth + "%";
    bar.style.background = color;

    console.log("Progress bar width:", barWidth + "%");
    console.log("=== BMI Calculation Finished ===\n");
}
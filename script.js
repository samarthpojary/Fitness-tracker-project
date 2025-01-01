document.getElementById('exercise-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;

    const caloriesBurned = calculateCalories(exercise, duration);
    document.getElementById('result').innerText = `Calories burned: ${caloriesBurned} kcal`;
});

function calculateCalories(exercise, duration) {
    let caloriesPerMinute;

    switch (exercise) {
        case 'running':
            caloriesPerMinute = 10; // Example value
            break;
        case 'cycling':
            caloriesPerMinute = 8; // Example value
            break;
        case 'swimming':
            caloriesPerMinute = 7; // Example value
            break;
        case 'weightlifting':
            caloriesPerMinute = 6; // Example value
            break;
        case 'yoga':
            caloriesPerMinute = 3; // Example value
            break;
        default:
            caloriesPerMinute = 0;
    }

    return caloriesPerMinute * duration;
}
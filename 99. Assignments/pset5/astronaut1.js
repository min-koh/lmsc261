function pickRandomActivity() {
    const dailyActivities = [
        "Clean Solar Panel",
        "Video Chat with Houston",
        "Hydrate Space Food",
        "Take Earth Picture",
        "Learn Russian",
        "Play Pokemon",
        "Get Some Good Sleep"
    ];
    let randomIndex = Math.floor(Math.random() * dailyActivities.length);
    return dailyActivities[randomIndex];
}

print("Todays activity is: " + pickRandomActivity());
function updateProgressBars() {
    const now = new Date();

    // Year progress
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;
    document.getElementById('year-progress').style.width = yearProgress + '%';

    // Month progress
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const monthProgress = ((now - startOfMonth) / (endOfMonth - startOfMonth)) * 100;
    document.getElementById('month-progress').style.width = monthProgress + '%';

    // Day progress
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const dayProgress = ((now - startOfDay) / (endOfDay - startOfDay)) * 100;
    document.getElementById('day-progress').style.width = dayProgress + '%';

    // Hour progress
    const startOfHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
    const endOfHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1);
    const hourProgress = ((now - startOfHour) / (endOfHour - startOfHour)) * 100;
    document.getElementById('hour-progress').style.width = hourProgress + '%';

    // Minute progress
    const startOfMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
    const endOfMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1);
    const minuteProgress = ((now - startOfMinute) / (endOfMinute - startOfMinute)) * 100;
    document.getElementById('minute-progress').style.width = minuteProgress + '%';

}

// Update progress bars every second
setInterval(updateProgressBars, 1000);

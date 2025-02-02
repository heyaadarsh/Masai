let tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

tasks = tasks.slice(1);
tasks = ["High-priority Task 1", "High-priority Task 2", ...tasks];
tasks[tasks.length - 1] = "New Task";
console.log(tasks);

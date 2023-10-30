// Example array of tasks with due dates
const tasks = [
  { task_name: 'Task 1', due_date: new Date('2023-10-31') },
  { task_name: 'Task 2', due_date: new Date('2023-10-30') },
  { task_name: 'Task 3', due_date: new Date('2023-10-31') },
  { task_name: 'Task 4', due_date: new Date('2023-10-28') },
  { task_name: 'Task 5', due_date: new Date('2023-10-29') }
];

// Step 1: Find the most recent due date
const mostRecentDueDate = tasks.reduce((maxDueDate, task) => {
  return task.due_date < maxDueDate ? task.due_date : maxDueDate;
}, tasks[0].due_date);

// Step 2: Find tasks with due dates equal to the most recent due date
const tasksWithMostRecentDueDate = tasks.filter(task => task.due_date.getTime() === mostRecentDueDate.getTime());

// Display the most recent due date and tasks with the most recent due date
console.log(`Most Recent Due Date: ${mostRecentDueDate}`);
console.log('Tasks with Most Recent Due Date:');
tasksWithMostRecentDueDate.forEach(task => {
  console.log(task.task_name);
});
import data from "./data.js";
import date from "./date.js";

const opportunitiesId = 'krr78o0l7rfkozoQ78Bo'
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6ImtRNXlRRnMzcnlPWVJ2T3VNSkV6IiwiY29tcGFueV9pZCI6Ikw0bkdZYkdrbFdFc3NuYmt2dmZrIiwidmVyc2lvbiI6MSwiaWF0IjoxNjk4NDIyNzcwNjkxLCJzdWIiOiJMdkN6Vk5wYzN3THd2YWJmOEZQSCJ9.obYm3dIQzCGEGsaN5zlpy309jK7-j44wBFuOaABvqUQ";

// getting user id (assignTo)
export async function contactCredentials(opportunitiesId) {
  let employee;
  let employer;
  let taskArray = [];
  let tasksWithMostRecentDueDate = [];

  let _headers = new Headers();
  _headers.append("Authorization", `Bearer ${token} `);

  var requestOptions = {
    method: "GET",
    headers: _headers,
    redirect: "follow",
  };
  await fetch(
    ` https://rest.gohighlevel.com/v1/pipelines/MPQxitGYgwKI10JCKJKM/opportunities/${opportunitiesId}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      employee = result.assignedTo;
      employer = result.contact.id;
      // console.log(employee, employer);
    })
    .catch((error) => console.log("error", error));

  let desiredId = "f5Xj1Lp9GmMLUV4jNHRN"; // employee =  user it found in the mock array (data),
  const filteredObjects = data.find((obj) => obj._id === desiredId);
  const assigToName = filteredObjects._data.name; // name to use


  await fetch(
    `https://rest.gohighlevel.com/v1/contacts/${employer}/tasks/`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      taskArray = result;
    })
    .catch((error) => console.log("error", error));
  const assignedToTaskArray = taskArray.tasks.filter(
    (task) => task.assignedTo === "2kmSSouNyjaZZRbYXzsi" //use instead employee variable
  );

  if (date.length == 1) {
    // repace date by assignedToTaskArray
    tasksWithMostRecentDueDate = date;
  } else {
    const mostRecentDueDate = date.reduce((maxDueDate, date) => {
      return new Date(date.dueDate) < maxDueDate
        ? new Date(date.dueDate)
        : maxDueDate;
    }, new Date(date[0].dueDate));

    tasksWithMostRecentDueDate = date.filter(
      (task) => new Date(task.dueDate).getTime() === mostRecentDueDate.getTime()
    );
  }

  const UserInfo = tasksWithMostRecentDueDate.map((item) => {
    return {
      ...item,
      name: assigToName,
    };
  });
  return UserInfo;
}


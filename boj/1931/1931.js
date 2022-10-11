const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const N = parseInt(inputData[0]);
const meetingList = [...inputData].map((meeting) =>
  meeting.split(" ").map((n) => parseInt(n))
);
meetingList.shift();

//지금 진행중인 회의에 2개이상 회의를 할 수 있으면? 그걸로 갈아치우기 X
//회의 끝나는 시간 기준으로 정렬해서, 인덱스를 늘려가며 배열에 담기,
meetingList.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

// console.log(meetingList);

function assignmentMeetingRoom(meetingList) {
  let assignedList = [];
  let index = 0;
  while (index < meetingList.length) {
    if (assignedList.length === 0) {
      assignedList.push(meetingList[0]);
      index++;
      continue;
    }
    const last = assignedList[assignedList.length - 1];
    const current = meetingList[index];
    console.log(last, current);
    if (last[1] <= current[0]) {
      assignedList.push(current);
    }
    index++;
  }
  //   console.log(meetingList);
  //   console.log(assignedList);
  return assignedList.length;
}

console.log(assignmentMeetingRoom(meetingList));

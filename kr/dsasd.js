function solution(participants, completed) {
	let temp = participants.slice();

	for (let i = temp.length; i > -1; i--) {
		for (let j = 0; j < completed.length - 1; j++) {
			if (
				participants[i] === completed[j] &&
				participants[i] === participants[participants.length - 1]
			) {
				console.log(temp.length);
				console.log(participants);
				console.log(participants[i]);
				console.log(participants[participants.length - 1]);
				participants.pop();
			}
		}
	}
}
debugger;
solution(["leo", "kiki", "eden"], ["eden", "kiki"]);

function solution(participants, completed) {
	participants.find(
		(participant) => !completed[participant]--,
		completed.map(
			(completedPerson) =>
				(completed[completedPerson] = (completed[completedPerson] | 0) + 1)
		)
	);
}

var solution = (participant, completion) =>
	participant.find(
		(name) => !completion[name]--,
		completion.map((name) => (completion[name] = (completion[name] || 0) + 1))
	);
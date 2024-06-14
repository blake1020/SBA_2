function getLearnerData(CourseInfo,assignmentGroup,learnerSubmission) {
    //getting the name of the student

  

        try {
            // Validate course ID
            // if (CourseInfo.course_id !== assignmentGroup.course_id) {
            //     throw new Error("AssignmentGroup does not belong to its course");
            // }
    
            const results = [];
    
            // Loop through each assignment in the assignment group
            for (let assignment of assignmentGroup.assignments) {
                // Find corresponding submission for the assignment
                const submission = learnerSubmission.find(submission => submission.assignment_id === assignment.id);
    
                // Skip if no submission found or assignment is past due
                if (!submission || new Date(submission.submitted_at) > new Date(assignment.due_at)) {
                    continue;
                }
    
                // Convert score to number
                let score = submission.score;
                if (typeof score !== 'number') {
                    score = Number(score);
                    // if (isNaN(score)) {
                    //     throw new Error("Invalid score for assignment");
                    // }
                }
    
                // Convert points_possible to number
                let pointsPossible = assignment.points_possible;
                if (typeof pointsPossible !== 'number') {
                    pointsPossible = Number(pointsPossible);
                    // if (isNaN(pointsPossible) || pointsPossible === 0) {
                    // //     throw new Error("Invalid points_possible for assignment");
                    // // }
                }
    console.log(LearnerSubmissions[1].submission.submitted_at);
    
                // Calculate percentage score
                const percentageScore = (submission.submission.score / pointsPossible) * 100;
                console.log(submission.submission.score);
                // Add assignment score to result
                results.push({
                    [assignment.id]: percentageScore
                });
            }
    
            return results;
            //catch statemnet to match try
        } catch (error) {
            return [{error: error.message}]; // throws error message as array also 
        }
    }
   
 





   const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  console.log(AssignmentGroup.name);

  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  for (let i = 0; i < LearnerSubmissions.length; i++){
    console.log(LearnerSubmissions[i])
  }
  //console log learner_id and Score
  console.log("ID: "+LearnerSubmissions[3].learner_id+" Score " + LearnerSubmissions[3].submission.score);
  const results = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(results);

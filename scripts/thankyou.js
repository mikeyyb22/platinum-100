// ******** DOM ********
const submissionDetails = document.querySelector('#submission-details');

// ******** DATA ********
const name = localStorage.getItem('feedbackName');
const email = localStorage.getItem('feedbackEmail');
const type = localStorage.getItem('feedbackType');
const subject = localStorage.getItem('feedbackSubject');
const feedback = localStorage.getItem('feedbackFeedback');

// ******** DISPLAY ********
function showSubmission() {
    const fields = [
        { label: 'Name', value: name },
        { label: 'Email', value: email },
        { label: 'Feedback Type', value: type },
        { label: 'Subject', value: subject },
        { label: 'Feedback', value: feedback }
    ];

    fields.forEach((field) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${field.label}:</strong> ${field.value}`;
        submissionDetails.appendChild(li);
    });

    localStorage.removeItem('feedbackName');
    localStorage.removeItem('feedbackEmail');
    localStorage.removeItem('feedbackType');
    localStorage.removeItem('feedbackSubject');
    localStorage.removeItem('feedbackFeedback');
}

showSubmission();
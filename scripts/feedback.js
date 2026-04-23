// ******** DOM ********
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const type = document.querySelector('input[name="type"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const feedback = document.querySelector('input[name="feedback"]').value;

    localStorage.setItem('feedbackName', name);
    localStorage.setItem('feedbackEmail', email);
    localStorage.setItem('feedbackType', type);
    localStorage.setItem('feedbackSubject', subject);
    localStorage.setItem('feedbackFeedback', feedback);
});
// Об'єкт з початковими значеннями
let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// --- Відновлення даних з localStorage при завантаженні ---
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// --- Делегування події input ---
form.addEventListener('input', e => {
  if (e.target.name) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// --- Обробка сабміту ---
form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});

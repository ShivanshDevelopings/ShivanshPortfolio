document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('todo-form');
  const list = document.getElementById('todo-list');
  const modeToggle = document.getElementById('mode-toggle');

  // Theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    modeToggle.textContent = '☀️';
  }

  // Toggle Light/Dark Mode
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    modeToggle.textContent = isDark ? '☀️' : '🌙';
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = document.getElementById('task').value.trim();
    const date = document.getElementById('date').value;

    if (!task || !date) return;

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task} <span class="time">📅 ${date}</span></span>
      <div>
        <button onclick="completeTask(this)">✅</button>
        <button onclick="deleteTask(this)">❌</button>
      </div>
    `;

    list.appendChild(li);

    form.reset();
  });
});

function completeTask(button) {
  button.closest('li').classList.toggle('completed');
}

function deleteTask(button) {
  button.closest('li').remove();
}

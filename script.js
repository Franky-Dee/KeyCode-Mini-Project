window.addEventListener('keydown', (e) => {
    const insert = document.getElementById('insert');

    insert.innerHTML = `
      <div class="key">
        ${e.key === ' ' ? 'Space' : e.key}
        <small>Key</small>
      </div>

      <div class="key">
        ${e.keyCode}
        <small>KeyCode</small>
      </div>

      <div class="key">
        ${e.code}
        <small>Code</small>
      </div>
    `;
});
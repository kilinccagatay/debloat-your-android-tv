const promptNode = document.querySelector('#agent-prompt');
const copyButton = document.querySelector('[data-copy-prompt]');
const copyStatus = document.querySelector('#copy-status');
let promptText = '';

fetch('prompt.txt')
  .then((response) => {
    if (!response.ok) throw new Error('Prompt could not be loaded.');
    return response.text();
  })
  .then((text) => {
    promptText = text.trim();
    promptNode.textContent = promptText;
  })
  .catch(() => {
    promptNode.textContent = 'Open prompt.txt to read and copy the complete prompt.';
    copyButton.disabled = true;
    copyStatus.textContent = 'The prompt could not be loaded on this page. Open prompt.txt instead.';
  });

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(promptText);
    copyButton.textContent = 'Copied';
    copyStatus.textContent = 'Prompt copied. Replace the three bracketed device fields before starting.';
  } catch {
    copyStatus.textContent = 'Copy failed. Select the prompt text or open prompt.txt.';
  }
});

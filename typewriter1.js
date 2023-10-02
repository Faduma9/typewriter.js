const sentence = "How are you doing";

function typeLettersWithDelay() {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 300; // 0.3 seconds delay between letters
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, sentence.length * 300);
}

typeLettersWithDelay();

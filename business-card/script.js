const copyEmailButton = document.querySelector("#copy-email");
const copyMessage = document.querySelector("#copy-message");
const email = "hello@example.com";

copyEmailButton.addEventListener("click", async () => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(email);
    } else {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = email;
      document.body.append(temporaryInput);
      temporaryInput.select();
      document.execCommand("copy");
      temporaryInput.remove();
    }
    copyMessage.textContent = "이메일 주소를 복사했어요!";
  } catch {
    copyMessage.textContent = "복사하지 못했어요. 이메일 주소를 직접 선택해 복사해 주세요.";
  }
});

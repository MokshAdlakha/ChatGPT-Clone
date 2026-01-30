async function send() {
  let input = document.getElementById("msg");
  let chat = document.getElementById("chat");
  let message = input.value;

  if (!message) return;

  // User bubble
  chat.innerHTML += `<div class="message user">${message}</div>`;
  input.value = "";

  // AI placeholder
  chat.innerHTML += `<div class="message bot" id="typing">Thinking...</div>`;
  chat.scrollTop = chat.scrollHeight;

  const res = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();

  document.getElementById("typing").remove();
  chat.innerHTML += `<div class="message bot">${data.choices[0].message.content}</div>`;
  chat.scrollTop = chat.scrollHeight;
}
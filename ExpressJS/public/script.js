document.getElementById("getBtn").addEventListener("click", async () => {
  const response = await fetch("/api/message");
  const data = await response.json();
  document.getElementById("output").textContent = data.message;
});

document.getElementById("postBtn").addEventListener("click", async () => {
  const response = await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Aman", message: "Hello Server!" }),
  });
  const data = await response.json();
  document.getElementById("output").textContent = JSON.stringify(data);
});

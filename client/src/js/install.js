const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
  event.preventDefault();
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();
  const choiceResult = await promptEvent.userChoice;
  if (choiceResult.outcome === "accepted") {
    console.log("User has accepted");
  } else {
    console.log("User has not accepted the A2HS prompt");
  }
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  console.log("App has been installed");
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

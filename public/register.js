if ("serviceWorker" in navigator) {
  window.addEventListener(
    "load",
    navigator.serviceWorker.register("./sw.js").then(
      (registration) => {
        console.log(registration);
      },
      (err) => {
        console.log(err);
      }
    )
  );
}

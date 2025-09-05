const cfs = document.querySelectorAll(".container-fluid");
cfs.forEach((cf) => {
  const hr = document.createElement("hr");
  cf.insertAdjacentElement("afterend", hr);
})
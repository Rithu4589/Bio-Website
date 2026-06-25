function searchPage() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let elements = document.querySelectorAll("h1, h2, p");

  for (let el of elements) {
    if (input !== "" && el.innerText.toLowerCase().includes(input)) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.backgroundColor = "yellow";
      return;
    }
  }

  alert("No results found");
}
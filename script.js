function search() {
	const inputElement = document.getElementById("pesquisa");
	const value = inputElement.value;
	window.location.href = "https://www.google.com/search?q=" + value;
}

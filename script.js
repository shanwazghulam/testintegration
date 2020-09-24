btnAfficher.onclick = e => {
  e.preventDefault();

  if (btnAfficher.textContent == "AFFICHER") {
    btnAfficher.textContent = "MASQUER";
    pass_id.type = "text";
  } else {
    btnAfficher.textContent = "AFFICHER";
    pass_id.type = "password";
  }
};

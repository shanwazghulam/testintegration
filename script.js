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

function outline(el) {
  el.onfocus = () => el.parentElement.classList.add("border");
  el.onblur = () => el.parentElement.classList.remove("border");
}

outline(mail_id);
outline(pass_id);

function passwordStrength(pw) {
  let count =
    /.{5,}/.test(pw) /* at least 5 characters */ +
    (/.{8,}/.test(pw) /* bonus if longer */ +
    /[a-z]/.test(pw) /* a lower letter */ +
    /[A-Z]/.test(pw) /* a upper letter */ +
    /\d/.test(pw) /* a digit */ +
      /[^A-Za-z0-9]/.test(pw)); /* a special character */
  infoProgress.style.visibility = count == 6 ? "visible" : "hidden";
  return count;
}

pass_id.addEventListener("keyup", function() {
  strength.value = passwordStrength(pass_id.value);
});

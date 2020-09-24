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
  return (
    /.{8,}/.test(pw) /* at least 8 characters */ *
    (/.{12,}/.test(pw) /* bonus if longer */ +
    /[a-z]/.test(pw) /* a lower letter */ +
    /[A-Z]/.test(pw) /* a upper letter */ +
    /\d/.test(pw) /* a digit */ +
      /[^A-Za-z0-9]/.test(pw)) /* a special character */
  );
}

let pwInput = document.getElementById("pass_id");

pwInput.addEventListener("keyup", function() {
  document.getElementById("strength").value = passwordStrength(pwInput.value);
});

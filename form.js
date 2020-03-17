function buat_login(){
    let hilang = document.getElementById("X");
    hilang.parentElement.removeChild(hilang);

    let par = document.createElement("p");
    par.className = "tulisan_login";
    par.innerHTML = "Silahkan Login";

    let tempeldiv = document.getElementsByTagName("div")[0];
    tempeldiv.appendChild(par);

    let form = document.createElement("form");
    tempeldiv.appendChild(form);

    let label_n = document.createElement("label");
    label_n.innerHTML = "Nama User";
    form.appendChild(label_n);
    let input_n = document.createElement("input");
    input_n.type = "text";
    input_n.name = "name";
    input_n.value = "Nama User...";
    input_n.className = "form_login";
    form.appendChild(input_n);

    let label_h = document.createElement("label");
    label_h.innerHTML = "Nomor Handphone";
    form.appendChild(label_h);
    let input_h = document.createElement("input");
    input_h.type = "text";
    input_h.name = "hp";
    input_h.value = "Nomor Handphone...";
    input_h.className = "form_login";
    form.appendChild(input_h);

    let label_u = document.createElement("label");
    label_u.innerHTML = "Username";
    form.appendChild(label_u);
    let input_u = document.createElement("input");
    input_u.type = "text";
    input_u.name = "username";
    input_u.value = "Username atau email...";
    input_u.className = "form_login";
    form.appendChild(input_u);

    let label_p = document.createElement("label");
    label_p.innerHTML = "Password";
    form.appendChild(label_p);
    let input_p = document.createElement("input");
    input_p.type = "password";
    input_p.name = "password";
    input_p.value = "Password...";
    input_p.className = "form_login";
    form.appendChild(input_p);

    let input_s = document.createElement("input");
    input_s.type = "submit";
    input_s.name = "submit";
    input_s.value = "Daftar Sekarang";
    input_s.className = "tombol_login";
    form.appendChild(input_s);
};
function hitungKelilingSegitiga() {
    let sisiA = parseFloat(document.getElementById("sisi1-input").value);
    let sisiB = parseFloat(document.getElementById("sisi2-input").value);
    let sisiC = parseFloat(document.getElementById("sisi3-input").value);
    let keliling = sisiA + sisiB + sisiC;
    document.getElementById("keliling-s").value = keliling;
  }

  function resetSegitiga() {
    document.getElementById("sisi1-input").value = "";
    document.getElementById("sisi2-input").value = "";
    document.getElementById("sisi3-input").value = "";
    document.getElementById("keliling-s").value = "";
    document.getElementById("alas-input").value = "";
    document.getElementById("tinggi-input").value = "";
    document.getElementById("luas-s").value = "";
  }

  function hitungLuasSegitiga() {
    let alas = parseFloat(document.getElementById("alas-input").value);
    let tinggi = parseFloat(document.getElementById("tinggi-input").value);
    let luas = 0.5*alas*tinggi;
    document.getElementById("luas-s").value = luas;
  }

  function hitungKelilingJajarGenjang() {
    let vertikal = parseFloat(document.getElementById("s1-input").value);
    let horizontal = parseFloat(document.getElementById("s2-input").value);
    let keliling = 2*(vertikal+horizontal);
    document.getElementById("keliling-j").value = keliling;
  }

  function resetjajargenjang() {
    document.getElementById("s1-input").value = "";
    document.getElementById("s2-input").value = "";
    document.getElementById("keliling-j").value = "";
    document.getElementById("alasj-input").value = "";
    document.getElementById("tinggij-input").value = "";
    document.getElementById("luas-j").value = "";
  }

  function hitungLuasJajarGenjang() {
    let alas = parseFloat(document.getElementById("alasj-input").value);
    let tinggi = parseFloat(document.getElementById("tinggij-input").value);
    let luas = alas*tinggi;
    document.getElementById("luas-j").value = luas;
  }
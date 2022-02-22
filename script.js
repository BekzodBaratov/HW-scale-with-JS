let namel;
let weight;
let height;
let myScale = 71 / 1.7 ** 2;

if (
  confirm("Saytga hush kelibsiz, tarozida men bilan o`zingizni solishtiring!")
) {
  namel = prompt("Ismingizni kiriting");
  weight = prompt("og`irligingizni kiriting");
  height = prompt("bo`yingizni kiriting");

  alert(
    "salom" +
      " " +
      namel +
      " OK ni bosing va o`zingiz haqingizda ma`lumotga ega bo`ling"
  );
} else {
  alert("Hayir");
}

let nameA = weight / height ** 2;

if (myScale > nameA) {
  alert("Siz semirishiz kerak mendan ozg`in ekansiz");
} else {
  alert("Sizning tanangizda yog` miqdori ortib ketgan mendan semiz ekansiz");
}

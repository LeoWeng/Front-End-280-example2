function Pokemon(nationalNo, hp, type, species, height, weight, abilities, localNo, japanese) {
    this.nationalNo = nationalNo;
    this.hp = hp;
    this.type = type;
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.localNo = localNo;
    this.japanese = japanese;
    this.attack = function (other) {
        other.hp -= 20;
    };
}

var Fushigidane = new Pokemon(
    1,
    1200,
    ["GRASS", "POISON"],
    "Seed Pokémon",
    0.71,
    6.9,
    "Overgrow",
    [1, 226, 231, 80],
    "Fushigidane"
);

var Hapinasu = new Pokemon(
    242,
    2200,
    ["NORMAL"],
    "Happiness Pokémon",
    1.50,
    46.8,
    "Natural_Cure",
    [218, 098, 098, 223, 034],
    "Hapinasu"
);

$(function () {
    function Render() {
        $("#fushigidane-name").text(Fushigidane.japanese);
        $("#fushigidane-hp").text(Fushigidane.hp);
        $("#hapinasu-name").text(Hapinasu.japanese);
        $("#hapinasu-hp").text(Hapinasu.hp);
    }
    Render();
    $("#fushigidane-btn").click(function () {
        Fushigidane.attack(Hapinasu);
        Render();
    });

    $("#hapinasu-btn").click(function () {
        Hapinasu.attack(Fushigidane);
        Render();
    });
});

console.log(Hapinasu.japanese + " HP:" + Hapinasu.hp);
console.log(Fushigidane.japanese + " HP:" + Fushigidane.hp);
Hapinasu.attack(Fushigidane);
console.log(Hapinasu.japanese + " <ATT> " + Fushigidane.japanese);
console.log(Fushigidane.japanese + " HP:" + Fushigidane.hp);
Fushigidane.attack(Hapinasu);
console.log(Fushigidane.japanese + " <ATT> " + Hapinasu.japanese);
console.log(Hapinasu.japanese + " HP:" + Hapinasu.hp);
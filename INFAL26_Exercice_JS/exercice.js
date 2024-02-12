//* DONE 1 - Déclarez une variable nommée 'nomZoo' et assignez-lui la valeur "Zoo Fantastique".
var nomZoo = "Zoo Fantastique";
//* DONE 2 - Déclarez une variable nommée 'budget' et assignez-lui la valeur initiale de 50000.
var budget = 50000;
//* DONE 3 - Déclarez un tableau nommé 'animaux'. Ce tableau sera utilisé pour stocker les objets de vos animaux.
// const animaux: AnimalType[] = [];
//* DONE 4 - Définissez une classe 'Animal'. Elle devrait avoir un constructeur qui prend trois paramètres : nom, espece, et sante.
//^ À l'intérieur du constructeur, initialisez les propriétés de l'animal avec ces valeurs.
var Animal = /** @class */ (function () {
    function Animal(nom, espece, sante, ajouterAuxAnimaux) {
        var _this = this;
        this.nourrir = function () {
            switch (_this.sante) {
                case "critique":
                    _this.sante = "moyen";
                    break;
                case "moyen":
                    _this.sante = "bon";
                    break;
            }
        };
        this.nom = nom;
        this.espece = espece;
        this.sante = sante;
        this.ajouterAuxAnimaux = ajouterAuxAnimaux;
        if (this.ajouterAuxAnimaux)
            Animal.animaux.push(this);
    }
    Animal.animaux = [];
    return Animal;
}());
//* DONE 5 - Ajoutez une méthode nommée 'nourrir' à la classe 'Animal'. Cette méthode doit améliorer l'état de santé de l'animal.
//^ L'état de santé de l'animal doit changer de 'critique' à 'moyen', puis de 'moyen' à 'bon' lorsqu'il est nourri.
//* 6 - Créez deux instances d'Animal avec les propriétés suivantes et ajoutez-les au tableau 'animaux'.
//^ Première instance : "Simba", "Lion", "critique"
//^ Deuxième instance : "Nemo", "Poisson-clown", "bon"
var jungleAnimal = new Animal("Simba", "Lion", "critique", true);
var oceanFish = new Animal("Nemo", "Poisson-clown", "bon", true);
//* DONE 7 - Écrivez une fonction nommée 'verifierBudget'. Cette fonction prend en paramètre la variable 'budget' et vérifie
//^ si le budget est inférieur à 20000. Si c'est le cas, elle doit afficher un message dans la console : "Attention : Le budget est très bas !"
var verifierBudget = function (budget) {
    return budget < 20000 && console.log("Attention : Le budget est très bas !");
};
//* 8 - Écrivez une boucle qui parcourt tous les animaux du tableau 'animaux' et affiche leur statut dans la console.
//^ Le format du message dans la console doit être : "L'animal [nom] ([espece]) est en état de santé : [sante]"
//^ Par exemple, pour un animal nommé "Simba" de l'espèce "Lion" et en état de santé "critique", le message devrait être :
//^ "L'animal Simba (Lion) est en état de santé : critique"
//^ Ces messages seront vérifiés dans les tests. Utilisez également la fonction 'verifierBudget' dans cette boucle pour vérifier l'état du budget.
Animal.animaux.forEach(function (animal) {
    return "L'animal ".concat(animal.nom, " (").concat(animal.espece, ") est en \u00E9tat de sant\u00E9 : ").concat(animal.sante);
});
// ! Ne pas supprimer
// @ts-ignore
module.exports = { Animal: Animal, verifierBudget: verifierBudget };

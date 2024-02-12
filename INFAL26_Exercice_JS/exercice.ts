type QualiteDeSante = "critique" | "moyen" | "bon";

//* DONE 1 - Déclarez une variable nommée 'nomZoo' et assignez-lui la valeur "Zoo Fantastique".
const nomZoo = "Zoo Fantastique";

//* DONE 2 - Déclarez une variable nommée 'budget' et assignez-lui la valeur initiale de 50000.
const budget = 50000;

//* DONE 3 - Déclarez un tableau nommé 'animaux'. Ce tableau sera utilisé pour stocker les objets de vos animaux.
// const animaux: AnimalType[] = [];

//* DONE 4 - Définissez une classe 'Animal'. Elle devrait avoir un constructeur qui prend trois paramètres : nom, espece, et sante.
//^ À l'intérieur du constructeur, initialisez les propriétés de l'animal avec ces valeurs.

class Animal {
  static animaux: Animal[] = [];

  nom: string;
  espece: string;
  sante: QualiteDeSante;
  ajouterAuxAnimaux: boolean;

  constructor(nom, espece, sante, ajouterAuxAnimaux) {
    this.nom = nom;
    this.espece = espece;
    this.sante = sante;
    this.ajouterAuxAnimaux = ajouterAuxAnimaux;

    if (this.ajouterAuxAnimaux) Animal.animaux.push(this);
  }

  nourrir = () => {
    switch (this.sante) {
      case "critique":
        this.sante = "moyen";
        break;
      case "moyen":
        this.sante = "bon";
        break;
    }
  };
}

//* DONE 5 - Ajoutez une méthode nommée 'nourrir' à la classe 'Animal'. Cette méthode doit améliorer l'état de santé de l'animal.
//^ L'état de santé de l'animal doit changer de 'critique' à 'moyen', puis de 'moyen' à 'bon' lorsqu'il est nourri.

//* 6 - Créez deux instances d'Animal avec les propriétés suivantes et ajoutez-les au tableau 'animaux'.
//^ Première instance : "Simba", "Lion", "critique"
//^ Deuxième instance : "Nemo", "Poisson-clown", "bon"

const jungleAnimal = new Animal("Simba", "Lion", "critique", true);
const oceanFish = new Animal("Nemo", "Poisson-clown", "bon", true);

//* DONE 7 - Écrivez une fonction nommée 'verifierBudget'. Cette fonction prend en paramètre la variable 'budget' et vérifie
//^ si le budget est inférieur à 20000. Si c'est le cas, elle doit afficher un message dans la console : "Attention : Le budget est très bas !"

const verifierBudget = (budget: number) =>
  budget < 20000 && console.log("Attention : Le budget est très bas !");

//* 8 - Écrivez une boucle qui parcourt tous les animaux du tableau 'animaux' et affiche leur statut dans la console.
//^ Le format du message dans la console doit être : "L'animal [nom] ([espece]) est en état de santé : [sante]"
//^ Par exemple, pour un animal nommé "Simba" de l'espèce "Lion" et en état de santé "critique", le message devrait être :
//^ "L'animal Simba (Lion) est en état de santé : critique"
//^ Ces messages seront vérifiés dans les tests. Utilisez également la fonction 'verifierBudget' dans cette boucle pour vérifier l'état du budget.

Animal.animaux.forEach(
  (animal) =>
    `L'animal ${animal.nom} (${animal.espece}) est en état de santé : ${animal.sante}`
);

// ! Ne pas supprimer
export default { Animal, verifierBudget };

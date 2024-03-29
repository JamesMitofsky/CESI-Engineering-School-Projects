//* 1 - Créez une interface 'IVoiture' avec les propriétés suivantes:
//         'marque': une chaîne de caractères (string)
//         'kilometrage': un nombre (number)

interface IVoiture {
  marque: string;
  kilometrage: number;
}

//* 2 - Définissez une classe 'Voiture' qui implémente l'interface 'IVoiture'.

class Voiture implements IVoiture {
  marque: string;
  kilometrage: number;
  test;
  constructor(marque: string, kilometrage: number) {
    this.marque = marque;
    this.kilometrage = kilometrage;
  }

  afficherDetails = () => {
    console.log(`Marque: ${this.marque} - Kilométrage: ${this.kilometrage} km`);
  };
}

//* DONE 3 - Ajoutez un constructeur à la classe 'Voiture' qui initialise les propriétés 'marque' et 'kilometrage'.
//       Le constructeur doit avoir deux paramètres qui correspondent aux propriétés de 'IVoiture' et les affecte aux propriétés de la classe.

//* DONE 4 - Ajoutez une méthode 'afficherDetails' à la classe 'Voiture'.
//       Cette méthode ne prend pas de paramètres et retourne void.
//       Elle doit afficher dans la console le message suivant:
//       "Marque: [marque de la voiture] - Kilométrage: [kilométrage de la voiture] km".
//       Remplacez [marque de la voiture] et [kilométrage de la voiture] par les valeurs des propriétés de l'instance de 'Voiture'.

//* 5 - Créez une instance de la classe 'Voiture' nommée 'maVoiture' avec les valeurs suivantes:
//       marque: "Toyota"
//       kilometrage: 50000

const testCar = new Voiture("Toyota", 50000);

//* 6 - Appelez la méthode 'afficherDetails' pour l'instance 'maVoiture' créée à l'étape précédente.
testCar.afficherDetails();

// Notez que vous devez exporter la classe 'Voiture' pour qu'elle soit testée.
// Utilisez 'export' avant la déclaration de classe pour l'exporter.

export { Voiture };

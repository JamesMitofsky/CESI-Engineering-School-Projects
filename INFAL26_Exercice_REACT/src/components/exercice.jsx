import { useState } from "react";
import { v4 as uuid } from "uuid";
// ? Instructions:

// 1. Créez un composant fonctionnel nommé `TodoList`.

export default function TodoList() {
  // Initalize variables
  const [tasks, setTasks] = useState([]);
  const [inputOfNewTask, setInputOfNewTask] = useState("");

  // Update input value as the user types
  const handleInputChange = (event) => {
    setInputOfNewTask(event.target.value);
  };

  // Add whatever the user has currently in the input field to their list of tasks
  const handleAddTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { key: uuid(), info: inputOfNewTask },
    ]);
    setInputOfNewTask("");
  };

  return (
    <>
      <h1>Liste des Todos:</h1>
      <input
        type="text"
        placeholder="Entrez une nouvelle tâche"
        value={inputOfNewTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Ajouter tâche</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.key}>{task.info}</li>
        ))}
      </ul>
    </>
  );
}

// 2. Utilisez le hook `useState` pour créer une variable d'état `tasks` initialisée à un tableau vide.

// 3. Créez une autre variable d'état `newTask` pour le champ de saisie de la nouvelle tâche, initialisée à une chaîne vide.

// 4. Ajoutez un champ de saisie (`<input>`) pour que l'utilisateur puisse taper le nom de la nouvelle tâche.
//    - Le champ doit être contrôlé par `newTask`.
//    - Mettez à jour `newTask` avec la valeur saisie par l'utilisateur.

// 5. Ajoutez un bouton "Ajouter" qui, lorsqu'il est cliqué, ajoute `newTask` à la liste des `tasks`.
//    - N'oubliez pas de réinitialiser `newTask` à une chaîne vide après l'ajout.

// 6. Affichez la liste des tâches sous le champ de saisie en utilisant `.map()` pour générer un `<li>` pour chaque tâche dans `tasks`.

// 7. Assurez-vous d'attribuer une `key` unique à chaque `<li>` pour aider React à identifier quels éléments ont changé.

// 8. Exportez le composant `TodoList` pour qu'il puisse être utilisé et testé.

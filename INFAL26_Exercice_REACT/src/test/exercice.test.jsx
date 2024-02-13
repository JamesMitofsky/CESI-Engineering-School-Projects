import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Exercice from "../components/exercice";

describe("TodoList Component", () => {
  test("permet aux utilisateurs d’ajouter des tâches à la liste", () => {
    render(<Exercice />);

    const inputElement = screen.getByPlaceholderText(
      /Entrez une nouvelle tâche/i
    );
    const addButton = screen.getByText(/Ajouter/i);

    // Simuler l'entrée de l'utilisateur et l'ajout d'une tâche
    fireEvent.change(inputElement, {
      target: { value: "Apprendre React" },
    });
    fireEvent.click(addButton);

    // Vérifier que la nouvelle tâche est affichée dans la liste
    expect(screen.getByText(/Apprendre React/i)).toBeInTheDocument();
  });
});

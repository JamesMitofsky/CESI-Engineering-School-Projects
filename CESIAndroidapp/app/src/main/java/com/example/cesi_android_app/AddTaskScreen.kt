package com.example.cesi_android_app

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.text.input.KeyboardType
import androidx.navigation.NavController
import java.util.UUID

@Composable
fun AddTaskScreen(navigateToTaskListScreen: () -> Unit, onTaskAdded: (Task) -> Unit) {
    var taskInput by remember { mutableStateOf("") }

    Column(){
        Text(text="Add Task", style = MaterialTheme.typography.headlineLarge)

        OutlinedTextField(
            value = taskInput,
            onValueChange = { taskInput = it },
            label = { Text("Task") },
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Text)
        )

        Button(onClick = {
            onTaskAdded(Task(id = UUID.randomUUID(), description = taskInput, completed = false))
            taskInput = ""
            navigateToTaskListScreen()
        }) {
            Text("Submit Task")
        }

        Button(onClick = navigateToTaskListScreen) {
            Text("View existing tasks")
        }
    }
}
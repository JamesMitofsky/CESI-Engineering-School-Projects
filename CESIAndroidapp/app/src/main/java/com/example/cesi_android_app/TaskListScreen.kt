package com.example.cesi_android_app

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.navigation.NavController

@Composable
fun TaskListScreen(navController: NavController, tasks: List<String>) {
    Column() {
        Text(text = "Tasks", style = MaterialTheme.typography.headlineLarge)

        tasks.forEach { task ->
            Text(text = task, style = MaterialTheme.typography.bodyMedium)
        }

        Button(onClick = { navController.navigate(Screen.AddTaskScreen.route) }) {
            Text("Add Task")
        }
    }
}
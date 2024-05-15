package com.example.cesi_android_app

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.navigation.NavController
import java.lang.reflect.Modifier

@Composable
fun TaskListScreen(navController: NavController, tasks: List<Task>) {
    Column() {
        Text(text = "Tasks", style = MaterialTheme.typography.headlineLarge)

        tasks.forEach { task ->
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(text = task.description, style = MaterialTheme.typography.bodyMedium)
                Text(text = task.completed.toString(), style = MaterialTheme.typography.bodyMedium)
            }
        }

        Button(onClick = { navController.navigate(Screen.AddTaskScreen.route) }) {
            Text("Add Task")
        }
    }
}
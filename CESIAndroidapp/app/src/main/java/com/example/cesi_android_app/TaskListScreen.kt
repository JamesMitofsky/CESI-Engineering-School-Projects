package com.example.cesi_android_app

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavController

@Composable
fun TaskListScreen(navigateToAddTaskScreen: () -> Unit, tasks: List<Task>) {
    Column {
        Text(text = "Task List", style = MaterialTheme.typography.headlineLarge)

        tasks.forEach { task ->
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(text = task.description, style = MaterialTheme.typography.bodyMedium)
                Text(text = task.completed.toString(), style = MaterialTheme.typography.bodyMedium)
            }
        }

        Button(onClick = navigateToAddTaskScreen) {
            Text("Add Task")
        }
    }
}
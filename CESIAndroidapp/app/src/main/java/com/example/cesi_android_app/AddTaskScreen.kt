package com.example.cesi_android_app

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.navigation.NavController

@Composable
fun AddTaskScreen(navController: NavController) {
    Column(){
        Text(text="Add Task", style = MaterialTheme.typography.headlineLarge)

        Button(onClick = { navController.navigate(Screen.TaskListScreen.route) }) {
            Text("View existing tasks")
        }
    }

}
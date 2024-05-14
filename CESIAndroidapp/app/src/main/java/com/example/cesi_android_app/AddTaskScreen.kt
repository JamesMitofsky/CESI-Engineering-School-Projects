package com.example.cesi_android_app

import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.navigation.NavController

@Composable
fun AddTaskScreen(navController: NavController) {
    // Your code here
    Button(onClick = { navController.navigate(Screen.TaskListScreen.route) }) {
        Text("Go back to Task List Screen")
    }
}
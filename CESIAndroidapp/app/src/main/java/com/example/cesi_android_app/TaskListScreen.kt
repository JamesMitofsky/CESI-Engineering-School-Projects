package com.example.cesi_android_app

import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.navigation.NavController

@Composable
fun TaskListScreen(navController: NavController) {
    // Your code here
    Button(onClick = { navController.navigate(Screen.AddTaskScreen.route) }) {
        Text("Go to Add Task Screen")
    }
}
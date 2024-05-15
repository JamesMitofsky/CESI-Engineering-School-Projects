package com.example.cesi_android_app

import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
//import androidx.compose.runtime.Composable
//import androidx.compose.runtime.MutableState
import java.util.UUID


//fun deleteTask(taskId: UUID) {
//}

@Composable
fun TaskDialog(taskId: UUID?, onDialogClose: () -> Unit) {
    if (taskId != null) {
        AlertDialog(
            onDismissRequest = { onDialogClose() },
            title = { Text("Task Dialog") },
            text = { Text("Task ID: $taskId") },
            confirmButton = {
                Button(onClick = { onDialogClose() }) {
                    Text("Close")
                }
            }
        )
    }
}
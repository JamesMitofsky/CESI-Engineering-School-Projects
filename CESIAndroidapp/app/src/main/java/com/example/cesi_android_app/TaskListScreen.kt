package com.example.cesi_android_app

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.material3.Checkbox
import androidx.compose.material3.CheckboxDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme.colorScheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults.topAppBarColors
import androidx.compose.runtime.remember
import androidx.compose.ui.unit.dp
import java.util.UUID

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TaskListScreen(navigateToAddTaskScreen: () -> Unit, tasks: List<Task>, onTaskStatusChange: (taskId: UUID, isChecked: Boolean) -> Unit) {
    Scaffold(
        topBar = {
            TopAppBar(
                colors = topAppBarColors(
                    containerColor = colorScheme.primaryContainer,
                    titleContentColor = colorScheme.primary,
                ),
                title = {
                    Text("Task List")
                }
            )
        },
        floatingActionButton = {
            FloatingActionButton(onClick = navigateToAddTaskScreen) {
                Icon(Icons.Filled.Add, "Add Task")
            }
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding),
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            // internal content

            tasks.forEach { task ->
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Text(text = task.description, style = MaterialTheme.typography.bodyMedium)
                    Checkbox(
                        checked = task.completed,
                        onCheckedChange = { isChecked -> onTaskStatusChange(task.id, isChecked) },
                        colors = CheckboxDefaults.colors(
                            checkmarkColor = colorScheme.onSurface,
                            uncheckedColor = colorScheme.onSurface,
                            checkedColor = colorScheme.primary
                        )
                    )
                }
            }
        }
    }
}
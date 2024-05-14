package com.example.cesi_android_app
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.cesi_android_app.ui.theme.CESIAndroidappTheme
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

sealed class Screen(val route: String) {
    object TaskListScreen : Screen("taskListScreen")
    object AddTaskScreen : Screen("addTaskScreen")
}

@Composable
fun AppNavigator() {
    val navController = rememberNavController()
    var tasks by remember { mutableStateOf(listOf<String>()) }

    NavHost(navController = navController, startDestination = Screen.TaskListScreen.route) {
        composable(Screen.TaskListScreen.route) {
            TaskListScreen(navController = navController, tasks = tasks)
        }
        composable(Screen.AddTaskScreen.route) {
            AddTaskScreen(navController = navController, onTaskAdded = { task ->
                tasks = tasks + task
            })
        }
    }
}


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            CESIAndroidappTheme {
                Surface(
                    modifier = Modifier.fillMaxSize().padding(top = 45.dp),
                    color = MaterialTheme.colorScheme.background
                ) {
                    AppNavigator()
                }
            }
        }
    }
}

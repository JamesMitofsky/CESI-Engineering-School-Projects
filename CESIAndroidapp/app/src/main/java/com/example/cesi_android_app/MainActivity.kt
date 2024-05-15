package com.example.cesi_android_app
import android.app.Application
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.AndroidViewModel
import com.example.cesi_android_app.ui.theme.CESIAndroidappTheme
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.room.ColumnInfo
import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Entity
import androidx.room.Insert
import androidx.room.PrimaryKey
import androidx.room.Query
import androidx.room.Room
import java.util.UUID

sealed class Screen(val route: String) {
    object TaskListScreen : Screen("taskListScreen")
    object AddTaskScreen : Screen("addTaskScreen")
}

class TaskViewModel(application: Application) : AndroidViewModel(application) {
    val db = Room.databaseBuilder(
        application,
        AppDatabase::class.java,
        "tasks-database"
    ).build()

    val taskDao = db.taskDao()
}

@Composable
fun AppNavigator(taskViewModel: TaskViewModel) {
    val navController = rememberNavController()

    // Start the database
    var tasks: List<Task> = taskViewModel.taskDao.getAll()

    val idOfTaskToShowDialogFor = remember { mutableStateOf<UUID?>(null)}

    fun onTaskStatusChange(taskId: UUID, isChecked: Boolean) {
        tasks = tasks.map { task ->
            if (task.id == taskId) {
                task.copy(completed = isChecked)
            } else {
                task
            }
        }
    }

    NavHost(navController, startDestination = Screen.TaskListScreen.route) {
        composable(Screen.TaskListScreen.route) {
            TaskListScreen(navigateToAddTaskScreen = { navController.navigate(Screen.AddTaskScreen.route) }, tasks, {taskId, isChecked -> onTaskStatusChange(taskId, isChecked)}, { taskId -> idOfTaskToShowDialogFor.value = taskId })
        }
        composable(Screen.AddTaskScreen.route) {
            AddTaskScreen(navigateToTaskListScreen = { navController.navigate(Screen.TaskListScreen.route) }, onTaskAdded = { newTask ->
                tasks = tasks + newTask
            })
        }
    }

    TaskDialog(taskId = idOfTaskToShowDialogFor.value, onDialogClose = { idOfTaskToShowDialogFor.value = null })
}


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            CESIAndroidappTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    AppNavigator(taskViewModel = TaskViewModel(application))
                }
            }
        }
    }
}

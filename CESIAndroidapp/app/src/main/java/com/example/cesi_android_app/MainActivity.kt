package com.example.cesi_android_app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.cesi_android_app.ui.theme.CESIAndroidappTheme
import androidx.compose.foundation.layout.Column
import androidx.compose.ui.unit.dp



// begin working on the tasks assignment

class Task(
    val id: String,
    var title: String,
    var description: String,
    var isDone: Boolean = false
)

class TaskList {
    // A collection of all the tasks that exist.
    private val listOfTasks = mutableListOf<Task>()

    init {
        listOfTasks.add(Task("1", "Task 1", "description one lorem ipsum"))
        listOfTasks.add(Task("2", "Task 2", "description two lorem ipsum"))
        listOfTasks.add(Task("3", "Task 3", "description three lorem ipsum"))
    }

    fun getAllTasks(): List<Task> {
        return listOfTasks
    }

    fun addTasks(tasks: List<Task>) {
        for (task in tasks) {
            listOfTasks.add(task)
        }
    }

    fun removeTask(taskId: String) {
        listOfTasks.removeIf { it.id == taskId }
    }

    fun markTaskAsCompleted(taskId: String) {
        val taskToMarkCompleted = listOfTasks.find { it.id == taskId }
        if (taskToMarkCompleted != null) {
            taskToMarkCompleted.isDone = true
        } else {
            println("ERROR: The given Task ID does not exist in the list of Tasks.")
        }
    }

    fun printAllTasks() {
        println("Tasks:")
        listOfTasks.forEach { task ->
            println("ID: ${task.id}, Title: ${task.title}, Status: ${if (task.isDone) "Done" else "Incomplete"}")
        }
    }

    fun updateTask(idOfTaskToUpdate: String, title: String?, description: String?, isDone: Boolean? = null) {
        val taskToUpdate = listOfTasks.find { it.id == idOfTaskToUpdate }
        if (taskToUpdate != null) {
            title?.let { taskToUpdate.title = it }
            description?.let { taskToUpdate.description = it }
            isDone?.let { taskToUpdate.isDone = it }
            println("Task with ID '$idOfTaskToUpdate' updated successfully.")
        } else {
            println("Task with ID '$idOfTaskToUpdate' not found.")
        }
    }

    fun onlyTasksThatAreIncomplete(): List<Task> {
        return listOfTasks.filter { !it.isDone }
    }

    fun onlyTasksThatAreDone(): List<Task> {
        return listOfTasks.filter { it.isDone }
    }
}

fun main() {
    println("Starting program")
    println("Adding task")
    val taskList = TaskList()
    val task1 = Task("1232sdf13", "Task 1", "Description for Task 1")
    val task2 = Task("54a9d82e", "Task 2", "Description for Task 2")
    val task3 = Task("98f3h21k", "Task 3", "Description for Task 3")

    taskList.addTasks(listOf(task1, task2, task3))
    taskList.printAllTasks()

    println("\n\nMark task '1232sdf13' as done.")
    taskList.markTaskAsCompleted("1232sdf13")
    taskList.printAllTasks()

    println("\n\nUpdate the title of the task with the ID '1232sdf13'.")
    taskList.updateTask("1232sdf13", "Updated Title", null, null)
    taskList.printAllTasks()

    println("\n\nOnly show tasks that are incomplete.")
    val incompleteTasks = taskList.onlyTasksThatAreIncomplete()
    for (task in incompleteTasks) {
        println("${task.title}")
    }

    println("\n\nOnly show tasks that are done.")
    val doneTasks = taskList.onlyTasksThatAreDone()
    for (task in doneTasks) {
        println("${task.title}")
    }

    println("\n\nRemove the task with the ID of the title of '1232sdf13'.")
    taskList.removeTask("1232sdf13")
    taskList.printAllTasks()
}

class MainActivity : ComponentActivity() {
    private val taskList = TaskList()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            CESIAndroidappTheme {
                TaskListContent(taskList = taskList)
            }
        }
    }
}


@Composable
fun TaskItem(task: Task) {
    Column(modifier = Modifier.padding(vertical = 8.dp)) {
        Text("ID: ${task.id}")
        Text("Title: ${task.title}")
        Text("Status: ${if (task.isDone) "Done" else "Incomplete"}")
    }
}

@Composable
fun TaskListContent(taskList: TaskList, modifier: Modifier = Modifier) {
    val tasks = taskList.getAllTasks()

    Column(modifier = modifier.padding(16.dp)) {
        tasks.forEach { task ->
            TaskItem(task)
        }
    }
}



@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
            text = "Hello $name! This ain't so bad, no?",
            modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    CESIAndroidappTheme {
        Greeting("Android")
    }
}
package com.example.cesi_android_app

import androidx.room.ColumnInfo
import androidx.room.Dao
import androidx.room.Database
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.Query
import androidx.room.RoomDatabase
import java.util.UUID

@Entity
data class Task(
    @PrimaryKey val id: UUID,
    @ColumnInfo var description: String,
    @ColumnInfo var completed: Boolean,
)

@Dao
interface TaskDao {
    @Query("SELECT * FROM task")
    fun getAll(): List<Task>
//    @Query("SELECT * FROM task WHERE id IN (:taskIds)")
//    fun loadAllByIds(userIds: Array<UUID>): List<Task>
//    @Insert
//    fun insertAll(vararg tasks: Task)
//    @Delete
//    fun delete(task: Task)
}

@Database(
    entities = [Task::class],
    version = 1,
)
abstract class AppDatabase : RoomDatabase() {
    abstract fun taskDao(): TaskDao
}
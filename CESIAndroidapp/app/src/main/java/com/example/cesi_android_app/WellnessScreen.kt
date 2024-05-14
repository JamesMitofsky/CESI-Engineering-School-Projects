package com.example.cesi_android_app

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun WellnessScreen(modifier: Modifier = Modifier) {
    val count = remember { mutableIntStateOf(0) }
    Column(modifier = modifier) {
        Text(
            text = "You've had ${count.value} glasses.",
            modifier = modifier.padding(16.dp)
        )
        Button(onClick = { count.intValue++ }, Modifier.padding(top = 8.dp)) {
            Text("Add one")
        }
    }
}
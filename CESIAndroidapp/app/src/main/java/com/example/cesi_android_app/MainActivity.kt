package com.example.cesi_android_app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.cesi_android_app.ui.theme.CESIAndroidappTheme


class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            CESIAndroidappTheme {
                LandingPage()
            }
        }
    }
}


//@Composable
//fun QuarterOfScreenCard(
//    title: String,
//    subtitle: String,
//    modifier: Modifier = Modifier,
//    isDark: Boolean? = false,
//) {
//    Card(
//        modifier = modifier
//            .fillMaxWidth()
//            .height(200.dp),
//        elevation = 4.dp,
//        backgroundColor = if (isDark == true) Color.DarkGray else Color.White
//    ) {
//        Column(
//            modifier = Modifier
//                .fillMaxSize()
//                .padding(16.dp)
//        ) {
//            Text(
//                text = title,
//                style = MaterialTheme.typography.h6,
//            )
//            Spacer(
//                modifier = Modifier.height(
//                    8.dp
//                )
//            )
//            Text(
//                text = subtitle,
//                style = MaterialTheme.typography.body2,
//            )
//        }
//    }
//}


@Composable
fun LandingPage() {
    val imagePainter = painterResource(id = R.drawable.bg_compose_background)
    Column(modifier = Modifier
        .padding(top = 48.dp)
    ) {
        Image(painter = imagePainter, contentDescription = "Header image")
        Text(
            text = "Jetpack Compose tutorial",
            modifier = Modifier.padding(16.dp),
            fontSize = 24.sp
        )
        Text(
            text = "Jetpack Compose is a modern toolkit for building native Android UI. Compose simplifies and accelerates UI development on Android with less code, powerful tools, and intuitive Kotlin APIs.",
            modifier = Modifier.padding(start = 16.dp, end = 16.dp),
            textAlign = TextAlign.Justify
        )
        Text(
            text = "In this tutorial, you build a simple UI component with declarative functions. You call Compose functions to say what elements you want and the Compose compiler does the rest. Compose is built around Composable functions. These functions let you define your app\'s UI programmatically because they let you describe how it should look and provide data dependencies, rather than focus on the process of the UI\'s construction, such as initializing an element and then attaching it to a parent. To create a Composable function, you add the @Composable annotation to the function name.",
            modifier = Modifier.padding(16.dp),
            textAlign = TextAlign.Justify
        )
    }
}
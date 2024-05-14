package com.example.cesi_android_app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.cesi_android_app.ui.theme.CESIAndroidappTheme
import androidx.compose.runtime.mutableStateOf


class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            CESIAndroidappTheme {
                val card1 = CardData("Lorem ipsum", "Dolor sit amet")
                val card2 = CardData("Consectetur adipiscing", "Elit, sed do eiusmod")
                val card3 = CardData("Tempor incididunt", "Ut labore et dolore")
                val card4 = CardData("Magna aliqua", "Ut enim ad minim veniam")

                AllCards(card1, card2, card3, card4)
            }
        }
    }
}


// based on these instructions: https://developer.android.com/codelabs/basic-android-kotlin-compose-composables-practice-problems#3

data class CardData(
    val title: String,
    val subtitle: String
)

@Composable
fun AllCards(card1: CardData, card2: CardData, card3: CardData, card4: CardData) {
    Column(
        modifier = Modifier.fillMaxSize()
    ) {
        Row(
            modifier = Modifier.weight(1f)
        ) {
            QuarterOfScreenCard(card1.title, card1.subtitle, Modifier.weight(1f))
            QuarterOfScreenCard(card2.title, card2.subtitle, Modifier.weight(1f))
        }
        Row(
            modifier = Modifier.weight(1f)
        ) {
            QuarterOfScreenCard(card3.title, card3.subtitle, Modifier.weight(1f))
            QuarterOfScreenCard(card4.title, card4.subtitle, Modifier.weight(1f))
        }
    }
}
@Composable
fun QuarterOfScreenCard(
    title: String,
    subtitle: String,
    modifier: Modifier = Modifier,
//    isDark: Boolean = false,
) {
    Card(
        modifier = modifier.fillMaxSize(),
        shape = RoundedCornerShape(0.dp),
        // inspired by this: https://stackoverflow.com/a/77229005/5395435
        colors = CardDefaults.cardColors(
            containerColor = Color.DarkGray,
            contentColor = Color.White
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            Text(
                text = title,
                style = MaterialTheme.typography.headlineSmall,
            )
            Spacer(
                modifier = Modifier.height(
                    8.dp
                )
            )
            Text(
                text = subtitle,
                style = MaterialTheme.typography.bodySmall,
            )
        }
    }
}


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
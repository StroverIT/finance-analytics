package com.strover.finance.widgets

import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.SharedPreferences
import android.widget.RemoteViews
import com.strover.finance.R
import android.content.ComponentName
import android.util.Log;
import org.json.JSONObject

class MyAppWidgetProvider : AppWidgetProvider() {

    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        updateWidget(context, appWidgetManager, appWidgetIds)

    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)

        if (intent.action == "android.appwidget.action.APPWIDGET_UPDATE") {
            val appWidgetManager = AppWidgetManager.getInstance(context)
            val thisAppWidget = ComponentName(context.packageName, MyAppWidgetProvider::class.java.name)
            val appWidgetIds = appWidgetManager.getAppWidgetIds(thisAppWidget)
            onUpdate(context, appWidgetManager, appWidgetIds)
        }
    }

    private fun updateWidget(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        // Get the updated data from SharedPreferences
        val sharedPreferences = context.getSharedPreferences("WidgetData", Context.MODE_PRIVATE)
        val jsonString = sharedPreferences.getString("widget_text", null)

        var expense = 0
        var income = 0

        if (jsonString != null) {
            try {
                // Parse the JSON string to access properties
                val jsonObject = JSONObject(jsonString)
                expense = jsonObject.getInt("totalExpense")
                income = jsonObject.getInt("totalIncome")
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
        // Update each widget instance
        for (appWidgetId in appWidgetIds) {
            val views = RemoteViews(context.packageName, R.layout.widget_layout)

            // Set the new data to the TextView in the widget layout
            views.setTextViewText(R.id.widgetTextView, expense.toString())
            views.setTextViewText(R.id.widgetTextView, "/ $income")

            // Apply the changes to the widget
            appWidgetManager.updateAppWidget(appWidgetId, views)
        }
    }

}

package com.strover.finance

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

class MyAppWidgetProvider : AppWidgetProvider() {

    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        val sharedPreferences = context.getSharedPreferences("WidgetData", Context.MODE_PRIVATE)
        val widgetText = sharedPreferences.getString("WidgetData", "Default Widget Text")
        Log.d("Inter+++++ widgettext", "Could not access BuildConfig field " + widgetText );

        for (appWidgetId in appWidgetIds) {
            val views = RemoteViews(context.packageName, R.layout.widget_layout)

            // Update the widget text with saved data
            views.setTextViewText(R.id.widgetTextView, widgetText)

            appWidgetManager.updateAppWidget(appWidgetId, views)
        }
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)
        Log.d("Inter+++++", "Could not access BuildConfig field " + intent );

        if (intent.action == "android.appwidget.action.APPWIDGET_UPDATE") {
            val appWidgetManager = AppWidgetManager.getInstance(context)
            val thisAppWidget = ComponentName(context.packageName, MyAppWidgetProvider::class.java.name)
            val appWidgetIds = appWidgetManager.getAppWidgetIds(thisAppWidget)
            onUpdate(context, appWidgetManager, appWidgetIds)
        }
    }
}

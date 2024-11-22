package com.strover.finance

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.content.Intent
import android.appwidget.AppWidgetManager
import android.util.Log;

class SharedPreferencesModule(reactApplicationContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactApplicationContext) {

    private val sharedPreferences: SharedPreferences =
        reactApplicationContext.getSharedPreferences("WidgetData", Context.MODE_PRIVATE)

    override fun getName(): String {
        return "SharedPreferencesModule"
    }

    @ReactMethod
    fun setWidgetData(key: String, value: String) {
        with(sharedPreferences.edit()) {
            putString(key, value)
            apply()
        }

         // Broadcast an intent to notify the widget that data has changed
         val intent = Intent("android.appwidget.action.APPWIDGET_UPDATE")
         reactApplicationContext.sendBroadcast(intent)
    }
}

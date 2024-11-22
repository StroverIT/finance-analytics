package com.strover.finance

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SharedPreferencesModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private val sharedPreferences: SharedPreferences =
        reactContext.getSharedPreferences("WidgetData", Context.MODE_PRIVATE)

    override fun getName(): String {
        return "SharedPreferencesModule"
    }

    @ReactMethod
    fun setWidgetData(key: String, value: String) {
        with(sharedPreferences.edit()) {
            putString(key, value)
            apply()
        }
    }
}

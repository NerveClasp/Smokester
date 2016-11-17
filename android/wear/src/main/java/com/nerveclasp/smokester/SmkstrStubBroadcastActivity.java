package com.nerveclasp.smokester;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;


/**
 * Example shell activity which simply broadcasts to our receiver and exits.
 */
public class SmkstrStubBroadcastActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent i = new Intent();
        i.setAction("com.nerveclasp.smokester.SHOW_NOTIFICATION");
        i.putExtra(SmkstrPostNotificationReceiver.CONTENT_KEY, getString(R.string.title));
        sendBroadcast(i);
        finish();
    }
}

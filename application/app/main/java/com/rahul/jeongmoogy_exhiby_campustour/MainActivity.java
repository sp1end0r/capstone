package com.rahul.jeongmoogy_exhiby_campustour;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.CardView;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        CardView cardView = (CardView) findViewById(R.id.TajMahal);

        cardView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                launchScan("Taj");

            }
        });
    }

    public void launchScan(String tag){
        Intent intent = new Intent(this, ScanActivity.class);
        intent.putExtra(Intent.EXTRA_TEXT, tag);
        startActivity(intent);
    }
}

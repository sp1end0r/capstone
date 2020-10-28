package com.rahul.jeongmoogy_exhiby_campustour;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;


import com.androidnetworking.AndroidNetworking;
import com.androidnetworking.common.Priority;
import com.androidnetworking.error.ANError;
import com.androidnetworking.interfaces.JSONObjectRequestListener;
import com.androidnetworking.widget.ANImageView;
import com.jacksonandroidnetworking.JacksonParserFactory;

import org.json.JSONException;
import org.json.JSONObject;

import static android.view.View.GONE;

public class InformationActivity extends AppCompatActivity {

    private TextView mTextView, getmTextView2;
    private ANImageView imageView;
    private JSONObject mObject;
    private String imageUrl;
    private LinearLayout mainPB, imagePB;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_information);
        AndroidNetworking.initialize(getApplicationContext());

        // Then set the JacksonParserFactory like below
        AndroidNetworking.setParserFactory(new JacksonParserFactory());

        mainPB =  findViewById(R.id.pb_main_load);
        imagePB = findViewById(R.id.pb_image_loader);

        mTextView = findViewById(R.id.tv_name);
        getmTextView2 = findViewById(R.id.tv_description);
        imageView = findViewById(R.id.imageView);
        Intent intent = getIntent();
        MakeRequest(intent.getStringExtra(Intent.EXTRA_TEXT));

    }

    public void MakeRequest(String url) {
        AndroidNetworking.get(url)
                .setPriority(Priority.LOW)
                .build()
                .getAsJSONObject(new JSONObjectRequestListener() {
                    @Override
                    public void onResponse(JSONObject response) {
                        mObject = response;
                        String name = "";
                        String description = "";
                        imageUrl= "";
                        try {
                            name = mObject.getString("name");
                            Log.v("name", name);
                            description = mObject.getString("description");
                            Log.v("description", description);
                            imageUrl = mObject.getString("image");
                            Log.v("Image",imageUrl);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        mTextView.setText(name);
                        getmTextView2.setText(description);


                        mainPB.setVisibility(GONE);
                        imagePB.setVisibility(View.VISIBLE);

                        InformationActivity.this.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                setImage(imageUrl);
                            }
                        });

                    }

                    @Override
                    public void onError(ANError anError) {
                        Log.v("error", "Found error" + anError);
                    }
                });
    }


    public void setImage(String url){
        imageView.setImageUrl(url);


        imagePB.setVisibility(GONE);
    }
}

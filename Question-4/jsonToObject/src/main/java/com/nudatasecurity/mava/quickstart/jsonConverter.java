package com.nudatasecurity.mava.quickstart;

import com.google.gson.Gson;

public class jsonConverter implements jsonToObjService {

	public FirstClassObject convertFromJSON(String jsonString)
	{
        Gson gson = new Gson();
        return gson.fromJson(jsonString, FirstClassObject.class);
	}
}

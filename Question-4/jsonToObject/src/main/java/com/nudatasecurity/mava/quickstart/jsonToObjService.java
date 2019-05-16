package com.nudatasecurity.mava.quickstart;

public interface jsonToObjService
{
    /**
    * @param jsonString string to convert
    * @return T
    */
	FirstClassObject convertFromJSON(String jsonString);
}

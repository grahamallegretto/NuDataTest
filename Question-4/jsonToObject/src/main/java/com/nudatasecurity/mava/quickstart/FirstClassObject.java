package com.nudatasecurity.mava.quickstart;

public class FirstClassObject {
	
	private String firstClassString;
	private Integer firstClassInt;
	
    public FirstClassObject(String firstClassString, Integer firstClassInt) {
        this.firstClassString = firstClassString;
        this.firstClassInt = firstClassInt;
    }
    
    @Override
    public String toString() {
      return (this.firstClassString + " " + this.firstClassInt.toString());
    }
}

package com.nudatasecurity.mava.quickstart;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testApp()
    {
        System.out.println("Starting Tests:");
    	jsonConverter converter = new jsonConverter();
    	String jsonString = "{'firstClassString' : 'Hola', 'firstClassInt' : 5}";
    	FirstClassObject temp = converter.convertFromJSON(jsonString);
        assertTrue( temp.toString().contentEquals("Hola 5") );
    }
}

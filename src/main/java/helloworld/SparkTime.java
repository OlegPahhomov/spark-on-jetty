package helloworld;

import spark.servlet.SparkApplication;

import static spark.SparkBase.staticFileLocation;


public class SparkTime implements SparkApplication{

    @Override
    public void init() {
        staticFileLocation("/public");

    }
}
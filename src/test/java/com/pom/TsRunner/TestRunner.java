package com.pom.TsRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty","html:target/cucumber","html:target/htmlreport"},
features={"src/test/resources/FeatureCollection/login1.feature"},
glue={"com.pom.mercuryLogin"},
monochrome=true,
tags={"@smokeTest"})
public class TestRunner 
{
		
}

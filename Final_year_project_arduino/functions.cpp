#include "functions.h"
#include <Arduino.h>

#define TRIG_PIN 18 // trig pin
#define ECHO_PIN 5 // echo pin
#define TANK_LEVEL 10 //Level of tank
#define PI 3.14
#define RADIUS 6.5

float pulseTime, distance_above_water, water_level, distance;
float filterArray[20]; // stores twenty samples of data for noise filtering

//Tank Volume in millilitres
float tankVolume(){
  float tank_capacity;
  tank_capacity = (PI * RADIUS * RADIUS * TANK_LEVEL) ; //converted from cm3 to millilitres
  return round(tank_capacity);
}

//Water level in tank
 float ultrasonicMeasure(){
  //  10ms pulse to trig pin
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  //  duration of pulse from echo pin
  pulseTime = pulseIn(ECHO_PIN, HIGH);

//  distance above water
  distance_above_water = 0.017 * pulseTime;

//  water level
  water_level = TANK_LEVEL - int(distance_above_water);

  return round(water_level);
 }

 float waterHeight(){
  //  Storing multiple samples
  for (int sample = 0; sample < 20; sample++){
    filterArray[sample] = ultrasonicMeasure();
    delay(30); //Avoids interference
  }
  
  //  Sort array in ascending order
  for(int i = 0; i < 19; i++){
    for (int j = i + 1; j < 20; j++){
      if (filterArray[i] > filterArray[j]) {
      float swap = filterArray[i];
      filterArray[i] = filterArray[j];
      filterArray[j] = swap;
    }
  }
  }
  
  double sum = 0;
  for (int sample = 5; sample < 15; sample++) {
  sum+=filterArray[sample];
  }
  
  distance = sum / 10;

  return distance;
 }

 
//Water volume in tank in terms of millilitres
 float waterVolume(){
  float water_volume;
  water_volume = PI * RADIUS * RADIUS * waterHeight();
  if (water_volume >=0) {
    return round(water_volume);
  }else {
    return 0;
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 }

// Water level percentage
float waterPercentage(){
  float water_level_percentage;
  water_level_percentage = (waterVolume() * 100 ) / tankVolume(); //percentage of water in tank

  return round(water_level_percentage);
}

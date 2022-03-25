/* Arduino - Ultrasonic Sensor HC-SR04
*
* Wiring: Ultrasonic Sensor -> Arduino:
* - VCC  -> 5VDC
* - TRIG -> Pin 18
* - ECHO -> Pin 5
* - GND  -> GND
*/
#include <WiFi.h>
#include <FirebaseESP32.h>
#include <math.h>
#include "functions.h"
#define TRIG_PIN 18 // trig pin
#define ECHO_PIN 5 // echo pin

//Network Credentials
#define FIREBASE_HOST "https://water-management-system-3cc2b-default-rtdb.firebaseio.com/"
#define FIREBASE_Authorization_key "ZHSZJWp1t8hG2kn4n1FP6mrtYxL4sukR5b0HgoJ0"
#define WIFI_SSID "Manuel Techs"
#define WIFI_PASSWORD "manuel254techs"

FirebaseData firebaseData;
FirebaseJson json;
float water_level_percentage;

void setup(){
Serial.begin(115200);
WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
Serial.print("Connecting...");
while(WiFi.status() != WL_CONNECTED){
  Serial.print(".");
  delay(300);
}
Serial.println();
Serial.print("IP Address: ");
Serial.println(WiFi.localIP());

Firebase.begin(FIREBASE_HOST, FIREBASE_Authorization_key);

//  Trigger pin to output mode
pinMode(TRIG_PIN, OUTPUT);
//  Echo pin to input mode
pinMode(ECHO_PIN, INPUT);
}

void loop(){
//  Tank Volume
Serial.print("Tank capacity(ml): ");
Serial.print(tankVolume());
Serial.println("ml");

//Water volume
Serial.print("Current capacity (ml): ");
Serial.print(waterVolume());
Serial.println("ml");

// Water level percentage
Serial.print("Water Level (%): ");
Serial.print(waterPercentage());
Serial.println(" %");

//Tank status
if (waterPercentage() >= 0 && waterPercentage() <=30) {
  Serial.print("Tank status: ");
  Serial.println("Low");
  Firebase.setString(firebaseData,"/data/Tank Status","Low");
}else if(waterPercentage() >= 31 && waterPercentage() <=50){
  Serial.print("Tank status: ");
  Serial.println("Normal");
  Firebase.setString(firebaseData,"/data/Tank Status","Normal");
}
else{
  Serial.print("Tank status: ");
  Serial.println("High");
  Firebase.setString(firebaseData,"/data/Tank Status","High");
}

Firebase.setFloat(firebaseData,"/data/Tank Capacity",tankVolume());
Firebase.setFloat(firebaseData,"/data/Current Capacity",waterVolume());
Firebase.setFloat(firebaseData,"/data/Water Percentage",waterPercentage());
}

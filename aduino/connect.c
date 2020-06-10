#include <SoftwareSerial.h>
#define RX 2
#define TX 3

SoftwareSerial HM10(RX,TX);
void setup() {  
  Serial.begin(9600);
  HM10.begin(9600);
}

void loop() {
  if (HM10.available()) {
    Serial.write(HM10.read());
  }
  if (Serial.available()) {
    HM10.write(Serial.read());
  }
}

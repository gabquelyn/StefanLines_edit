//for table 1


function calc1(){
    input=document.getElementById("inp-given").value;
    







// for Mass
    mass=document.getElementById("mass-p").value;
    
    
    
    if(mass != 0 && mass !="")
    {
        //    For given prefix
    massprefix1=document.getElementById("m-prefix-1");
    massprefix1v=massprefix1.value;
    if (massprefix1v != 0){
        massprefix1t=massprefix1.options[massprefix1.selectedIndex].text;
    }
    else {
        massprefix1t="";
    }
    
    // for given unit
    massgiven1=document.getElementById("mass-given");
    massgiven1t=massgiven1.options[massgiven1.selectedIndex].text;
    massgiven1v=massgiven1.value;

    // mass mirroring in 2nd Power

    //    For required prefix
    massprefix2=document.getElementById("m-prefix-2");
    massprefix2v=massprefix2.value;    
    if (massprefix2v != 0){
        massprefix2t=massprefix1.options[massprefix2.selectedIndex].text;
    }
    else {
        massprefix2t="";
    }
    
        // for required unit
        massreq1=document.getElementById("mass-req");
        massreq1t=massreq1.options[massreq1.selectedIndex].text;
        massreq1v=massreq1.value;

        // unit remove or not
        massgivenunit=massprefix1t+massgiven1t+"^"+eval(mass);
        massrequnit=massprefix2t+massreq1t+"^"+eval(mass);

        // massresult=Math.pow((Math.pow(massgiven1v,massprefix1v)) /(Math.pow(massreq1v,massprefix2v)),mass);
        massresult=Math.pow((massgiven1v*(Math.pow(10,massprefix1v)))/(massreq1v*(Math.pow(10,massprefix2v))),mass);
    }

    else{
massgivenunit="";
massrequnit="";
massresult=1;
    }
   






// for Time
time=document.getElementById("time-p").value;
    
if(time != 0 && time !="")
{
    //    For given prefix
timeprefix1=document.getElementById("t-prefix-1");
timeprefix1v=timeprefix1.value;
if (timeprefix1v != 0){
    timeprefix1t=timeprefix1.options[timeprefix1.selectedIndex].text;
}
else {
    timeprefix1t="";
}

// for given unit
timegiven1=document.getElementById("time-given");
timegiven1t=timegiven1.options[timegiven1.selectedIndex].text;
timegiven1v=timegiven1.value;

// time mirroring in 2nd Power

//    For required prefix
timeprefix2=document.getElementById("t-prefix-2");
timeprefix2v=timeprefix2.value;    
if (timeprefix2v != 0){
    timeprefix2t=timeprefix1.options[timeprefix2.selectedIndex].text;
}
else {
    timeprefix2t="";
}

    // for required unit
    timereq1=document.getElementById("time-req");
    timereq1t=timereq1.options[timereq1.selectedIndex].text;
    timereq1v=timereq1.value;

    // unit remove or not
    timegivenunit=timeprefix1t+timegiven1t+"^"+eval(time);
    timerequnit=timeprefix2t+timereq1t+"^"+eval(time);

    // timeresult=Math.pow((Math.pow(timegiven1v,timeprefix1v)) /(Math.pow(timereq1v,timeprefix2v)),time);
    timeresult=Math.pow((timegiven1v*(Math.pow(10,timeprefix1v)))/(timereq1v*(Math.pow(10,timeprefix2v))),time);
}

else{
timegivenunit="";
timerequnit="";
timeresult=1;
}










// for Length
length=document.getElementById("length-p").value;

    
if(length != 0 && length !="")
{
    //    For given prefix
lengthprefix1=document.getElementById("l-prefix-1");
lengthprefix1v=lengthprefix1.value;
if (lengthprefix1v != 0){
    lengthprefix1t=lengthprefix1.options[lengthprefix1.selectedIndex].text;
}
else {
    lengthprefix1t="";
}

// for given unit
lengthgiven1=document.getElementById("length-given");
lengthgiven1t=lengthgiven1.options[lengthgiven1.selectedIndex].text;
lengthgiven1v=lengthgiven1.value;

// length mirroring in 2nd Power

//    For required prefix
lengthprefix2=document.getElementById("l-prefix-2");
lengthprefix2v=lengthprefix2.value;    
if (lengthprefix2v != 0){
    lengthprefix2t=lengthprefix1.options[lengthprefix2.selectedIndex].text;
}
else {
    lengthprefix2t="";
}

    // for required unit
    lengthreq1=document.getElementById("length-req");
    lengthreq1t=lengthreq1.options[lengthreq1.selectedIndex].text;
    lengthreq1v=lengthreq1.value;

    // unit remove or not
    lengthgivenunit=lengthprefix1t+lengthgiven1t+"^"+eval(length);
    lengthrequnit=lengthprefix2t+lengthreq1t+"^"+eval(length);

    // lengthresult=Math.pow((Math.pow(lengthgiven1v,lengthprefix1v)) /(Math.pow(lengthreq1v,lengthprefix2v)),length);
    lengthresult=Math.pow((lengthgiven1v*(Math.pow(10,lengthprefix1v)))/(lengthreq1v*(Math.pow(10,lengthprefix2v))),length);
}

else{
lengthgivenunit="";
lengthrequnit="";
lengthresult=1;
}








// for Temperature
temperature=document.getElementById("temperature-p").value;
    
if(temperature != 0 && temperature !="")
{
    //    For given prefix
temperatureprefix1=document.getElementById("tp-prefix-1");
temperatureprefix1v=temperatureprefix1.value;
if (temperatureprefix1v != 0){
    temperatureprefix1t=temperatureprefix1.options[temperatureprefix1.selectedIndex].text;
}
else {
    temperatureprefix1t="";
}

// for given unit
temperaturegiven1=document.getElementById("temperature-given");
temperaturegiven1t=temperaturegiven1.options[temperaturegiven1.selectedIndex].text;
temperaturegiven1v=temperaturegiven1.value;

// temperature mirroring in 2nd Power

//    For required prefix
temperatureprefix2=document.getElementById("tp-prefix-2");
temperatureprefix2v=temperatureprefix2.value;    
if (temperatureprefix2v != 0){
    temperatureprefix2t=temperatureprefix1.options[temperatureprefix2.selectedIndex].text;
}
else {
    temperatureprefix2t="";
}

    // for required unit
    temperaturereq1=document.getElementById("temperature-req");
    temperaturereq1t=temperaturereq1.options[temperaturereq1.selectedIndex].text;
    temperaturereq1v=temperaturereq1.value;

    // unit remove or not
    temperaturegivenunit=temperatureprefix1t+temperaturegiven1t+"^"+eval(temperature);
    temperaturerequnit=temperatureprefix2t+temperaturereq1t+"^"+eval(temperature);

    // temperatureresult=Math.pow((Math.pow(temperaturegiven1v,temperatureprefix1v)) /(Math.pow(temperaturereq1v,temperatureprefix2v)),temperature);
    temperatureresult=Math.pow((temperaturegiven1v*(Math.pow(10,temperatureprefix1v)))/(temperaturereq1v*(Math.pow(10,temperatureprefix2v))),temperature);
}

else{
temperaturegivenunit="";
temperaturerequnit="";
temperatureresult=1;
}








// for Energy
energy=document.getElementById("energy-p").value;

    
if(energy != 0 && energy !="")
{
    //    For given prefix
energyprefix1=document.getElementById("e-prefix-1");
energyprefix1v=energyprefix1.value;
if (energyprefix1v != 0){
    energyprefix1t=energyprefix1.options[energyprefix1.selectedIndex].text;
}
else {
    energyprefix1t="";
}

// for given unit
energygiven1=document.getElementById("energy-given");
energygiven1t=energygiven1.options[energygiven1.selectedIndex].text;
energygiven1v=energygiven1.value;

// energy mirroring in 2nd Power

//    For required prefix
energyprefix2=document.getElementById("e-prefix-2");
energyprefix2v=energyprefix2.value;    
if (energyprefix2v != 0){
    energyprefix2t=energyprefix1.options[energyprefix2.selectedIndex].text;
}
else {
    energyprefix2t="";
}

    // for required unit
    energyreq1=document.getElementById("energy-req");
    energyreq1t=energyreq1.options[energyreq1.selectedIndex].text;
    energyreq1v=energyreq1.value;

    // unit remove or not
    energygivenunit=energyprefix1t+energygiven1t+"^"+eval(energy);
    energyrequnit=energyprefix2t+energyreq1t+"^"+eval(energy);

    // energyresult=Math.pow((Math.pow(energygiven1v,energyprefix1v)) /(Math.pow(energyreq1v,energyprefix2v)),energy);
    energyresult=Math.pow((energygiven1v*(Math.pow(10,energyprefix1v)))/(energyreq1v*(Math.pow(10,energyprefix2v))),energy);
}

else{
energygivenunit="";
energyrequnit="";
energyresult=1;
}







// for Torque
Torque=document.getElementById("Torque-p").value;
    
if(Torque != 0 && Torque !="")
{
    //    For given prefix
Torqueprefix1=document.getElementById("to-prefix-1");
Torqueprefix1v=Torqueprefix1.value;
if (Torqueprefix1v != 0){
    Torqueprefix1t=Torqueprefix1.options[Torqueprefix1.selectedIndex].text;
}
else {
    Torqueprefix1t="";
}

// for given unit
Torquegiven1=document.getElementById("Torque-given");
Torquegiven1t=Torquegiven1.options[Torquegiven1.selectedIndex].text;
Torquegiven1v=Torquegiven1.value;

// Torque mirroring in 2nd Power

//    For required prefix
Torqueprefix2=document.getElementById("to-prefix-2");
Torqueprefix2v=Torqueprefix2.value;    
if (Torqueprefix2v != 0){
    Torqueprefix2t=Torqueprefix1.options[Torqueprefix2.selectedIndex].text;
}
else {
    Torqueprefix2t="";
}

    // for required unit
    Torquereq1=document.getElementById("Torque-req");
    Torquereq1t=Torquereq1.options[Torquereq1.selectedIndex].text;
    Torquereq1v=Torquereq1.value;

    // unit remove or not
    Torquegivenunit=Torqueprefix1t+Torquegiven1t+"^"+eval(Torque);
    Torquerequnit=Torqueprefix2t+Torquereq1t+"^"+eval(Torque);

    // Torqueresult=Math.pow((Math.pow(Torquegiven1v,Torqueprefix1v)) /(Math.pow(Torquereq1v,Torqueprefix2v)),Torque);
    Torqueresult=Math.pow((Torquegiven1v*(Math.pow(10,Torqueprefix1v)))/(Torquereq1v*(Math.pow(10,Torqueprefix2v))),Torque);
}

else{
Torquegivenunit="";
Torquerequnit="";
Torqueresult=1;
}








// for Power
Power=document.getElementById("Power-p").value;

    
if(Power != 0 && Power !="")
{
    //    For given prefix
Powerprefix1=document.getElementById("p-prefix-1");
Powerprefix1v=Powerprefix1.value;
if (Powerprefix1v != 0){
    Powerprefix1t=Powerprefix1.options[Powerprefix1.selectedIndex].text;
}
else {
    Powerprefix1t="";
}

// for given unit
Powergiven1=document.getElementById("Power-given");
Powergiven1t=Powergiven1.options[Powergiven1.selectedIndex].text;
Powergiven1v=Powergiven1.value;

// Power mirroring in 2nd Power

//    For required prefix
Powerprefix2=document.getElementById("p-prefix-2");
Powerprefix2v=Powerprefix2.value;    
if (Powerprefix2v != 0){
    Powerprefix2t=Powerprefix1.options[Powerprefix2.selectedIndex].text;
}
else {
    Powerprefix2t="";
}

    // for required unit
    Powerreq1=document.getElementById("Power-req");
    Powerreq1t=Powerreq1.options[Powerreq1.selectedIndex].text;
    Powerreq1v=Powerreq1.value;

    // unit remove or not
    Powergivenunit=Powerprefix1t+Powergiven1t+"^"+eval(Power);
    Powerrequnit=Powerprefix2t+Powerreq1t+"^"+eval(Power);

    // Powerresult=Math.pow((Math.pow(Powergiven1v,Powerprefix1v)) /(Math.pow(Powerreq1v,Powerprefix2v)),Power);
    Powerresult=Math.pow((Powergiven1v*(Math.pow(10,Powerprefix1v)))/(Powerreq1v*(Math.pow(10,Powerprefix2v))),Power);
}

else{
Powergivenunit="";
Powerrequnit="";
Powerresult=1;
}








// for Pressure
Pressure=document.getElementById("Pressure-p").value;

if(Pressure != 0 && Pressure !="")
{
    //    For given prefix
Pressureprefix1=document.getElementById("pr-prefix-1");
Pressureprefix1v=Pressureprefix1.value;
if (Pressureprefix1v != 0){
    Pressureprefix1t=Pressureprefix1.options[Pressureprefix1.selectedIndex].text;
}
else {
    Pressureprefix1t="";
}

// for given unit
Pressuregiven1=document.getElementById("Pressure-given");
Pressuregiven1t=Pressuregiven1.options[Pressuregiven1.selectedIndex].text;
Pressuregiven1v=Pressuregiven1.value;

// Pressure mirroring in 2nd Power


//    For required prefix
Pressureprefix2=document.getElementById("pr-prefix-2");
Pressureprefix2v=Pressureprefix2.value;    
if (Pressureprefix2v != 0){
    Pressureprefix2t=Pressureprefix1.options[Pressureprefix2.selectedIndex].text;
}
else {
    Pressureprefix2t="";
}

    // for required unit
    Pressurereq1=document.getElementById("Pressure-req");
    Pressurereq1t=Pressurereq1.options[Pressurereq1.selectedIndex].text;
    Pressurereq1v=Pressurereq1.value;

    // unit remove or not
    Pressuregivenunit=Pressureprefix1t+Pressuregiven1t+"^"+eval(Pressure);
    Pressurerequnit=Pressureprefix2t+Pressurereq1t+"^"+eval(Pressure);

    // Pressureresult=Math.pow((Math.pow(Pressuregiven1v,Pressureprefix1v)) /(Math.pow(Pressurereq1v,Pressureprefix2v)),Pressure);
    Pressureresult=Math.pow((Pressuregiven1v*(Math.pow(10,Pressureprefix1v)))/(Pressurereq1v*(Math.pow(10,Pressureprefix2v))),Pressure);
}

else{
Pressuregivenunit="";
Pressurerequnit="";
Pressureresult=1;
}









// for Force
Force=document.getElementById("Force-p").value;
    
if(Force != 0 && Force !="")
{
    //    For given prefix
Forceprefix1=document.getElementById("f-prefix-1");
Forceprefix1v=Forceprefix1.value;
if (Forceprefix1v != 0){
    Forceprefix1t=Forceprefix1.options[Forceprefix1.selectedIndex].text;
}
else {
    Forceprefix1t="";
}

// for given unit
Forcegiven1=document.getElementById("Force-given");
Forcegiven1t=Forcegiven1.options[Forcegiven1.selectedIndex].text;
Forcegiven1v=Forcegiven1.value;

// Force mirroring in 2nd Power

//    For required prefix
Forceprefix2=document.getElementById("f-prefix-2");
Forceprefix2v=Forceprefix2.value;    
if (Forceprefix2v != 0){
    Forceprefix2t=Forceprefix1.options[Forceprefix2.selectedIndex].text;
}
else {
    Forceprefix2t="";
}

    // for required unit
    Forcereq1=document.getElementById("Force-req");
    Forcereq1t=Forcereq1.options[Forcereq1.selectedIndex].text;
    Forcereq1v=Forcereq1.value;

    // unit remove or not
    Forcegivenunit=Forceprefix1t+Forcegiven1t+"^"+eval(Force);
    Forcerequnit=Forceprefix2t+Forcereq1t+"^"+eval(Force);

    // Forceresult=Math.pow((Math.pow(Forcegiven1v,Forceprefix1v)) /(Math.pow(Forcereq1v,Forceprefix2v)),Force);
    Forceresult=Math.pow((Forcegiven1v*(Math.pow(10,Forceprefix1v)))/(Forcereq1v*(Math.pow(10,Forceprefix2v))),Force);
}

else{
Forcegivenunit="";
Forcerequnit="";
Forceresult=1;
}








// for Volume
Volume=document.getElementById("Volume-p").value;
    
if(Volume != 0 && Volume !="")
{
    //    For given prefix
Volumeprefix1=document.getElementById("v-prefix-1");
Volumeprefix1v=Volumeprefix1.value;
if (Volumeprefix1v != 0){
    Volumeprefix1t=Volumeprefix1.options[Volumeprefix1.selectedIndex].text;
}
else {
    Volumeprefix1t="";
}

// for given unit
Volumegiven1=document.getElementById("Volume-given");
Volumegiven1t=Volumegiven1.options[Volumegiven1.selectedIndex].text;
Volumegiven1v=Volumegiven1.value;

// Volume mirroring in 2nd Power

//    For required prefix
Volumeprefix2=document.getElementById("v-prefix-2");
Volumeprefix2v=Volumeprefix2.value;    
if (Volumeprefix2v != 0){
    Volumeprefix2t=Volumeprefix1.options[Volumeprefix2.selectedIndex].text;
}
else {
    Volumeprefix2t="";
}

    // for required unit
    Volumereq1=document.getElementById("Volume-req");
    Volumereq1t=Volumereq1.options[Volumereq1.selectedIndex].text;
    Volumereq1v=Volumereq1.value;

    // unit remove or not
    Volumegivenunit=Volumeprefix1t+Volumegiven1t+"^"+eval(Volume);
    Volumerequnit=Volumeprefix2t+Volumereq1t+"^"+eval(Volume);

    // Volumeresult=Math.pow((Math.pow(Volumegiven1v,Volumeprefix1v)) /(Math.pow(Volumereq1v,Volumeprefix2v)),Volume);
    Volumeresult=Math.pow((Volumegiven1v*(Math.pow(10,Volumeprefix1v)))/(Volumereq1v*(Math.pow(10,Volumeprefix2v))),Volume);
}

else{
Volumegivenunit="";
Volumerequnit="";
Volumeresult=1;
}








// for Area
Area=document.getElementById("Area-p").value;

    
if(Area != 0 && Area !="")
{
    //    For given prefix
Areaprefix1=document.getElementById("a-prefix-1");
Areaprefix1v=Areaprefix1.value;
if (Areaprefix1v != 0){
    Areaprefix1t=Areaprefix1.options[Areaprefix1.selectedIndex].text;
}
else {
    Areaprefix1t="";
}

// for given unit
Areagiven1=document.getElementById("Area-given");
Areagiven1t=Areagiven1.options[Areagiven1.selectedIndex].text;
Areagiven1v=Areagiven1.value;

// Area mirroring in 2nd Power

//    For required prefix
Areaprefix2=document.getElementById("a-prefix-2");
Areaprefix2v=Areaprefix2.value;    
if (Areaprefix2v != 0){
    Areaprefix2t=Areaprefix1.options[Areaprefix2.selectedIndex].text;
}
else {
    Areaprefix2t="";
}

    // for required unit
    Areareq1=document.getElementById("Area-req");
    Areareq1t=Areareq1.options[Areareq1.selectedIndex].text;
    Areareq1v=Areareq1.value;

    // unit remove or not
    Areagivenunit=Areaprefix1t+Areagiven1t+"^"+eval(Area);
    Arearequnit=Areaprefix2t+Areareq1t+"^"+eval(Area);

    // Arearesult=Math.pow((Math.pow(Areagiven1v,Areaprefix1v)) /(Math.pow(Areareq1v,Areaprefix2v)),Area);
    Arearesult=Math.pow((Areagiven1v*(Math.pow(10,Areaprefix1v)))/(Areareq1v*(Math.pow(10,Areaprefix2v))),Area);
}

else{
Areagivenunit="";
Arearequnit="";
Arearesult=1;
}








// for Velocity
Velocity=document.getElementById("Velocity-p").value;   

if(Velocity != 0 && Velocity !="")
{
    //    For given prefix
Velocityprefix1=document.getElementById("ve-prefix-1");
Velocityprefix1v=Velocityprefix1.value;
if (Velocityprefix1v != 0){
    Velocityprefix1t=Velocityprefix1.options[Velocityprefix1.selectedIndex].text;
}
else {
    Velocityprefix1t="";
}

// for given unit
Velocitygiven1=document.getElementById("Velocity-given");
Velocitygiven1t=Velocitygiven1.options[Velocitygiven1.selectedIndex].text;
Velocitygiven1v=Velocitygiven1.value;

// Velocity mirroring in 2nd Power


//    For required prefix
Velocityprefix2=document.getElementById("ve-prefix-2");
Velocityprefix2v=Velocityprefix2.value;    
if (Velocityprefix2v != 0){
    Velocityprefix2t=Velocityprefix1.options[Velocityprefix2.selectedIndex].text;
}
else {
    Velocityprefix2t="";
}

    // for required unit
    Velocityreq1=document.getElementById("Velocity-req");
    Velocityreq1t=Velocityreq1.options[Velocityreq1.selectedIndex].text;
    Velocityreq1v=Velocityreq1.value;

    // unit remove or not
    Velocitygivenunit=Velocityprefix1t+Velocitygiven1t+"^"+eval(Velocity);
    Velocityrequnit=Velocityprefix2t+Velocityreq1t+"^"+eval(Velocity);

    // Velocityresult=Math.pow((Math.pow(Velocitygiven1v,Velocityprefix1v)) /(Math.pow(Velocityreq1v,Velocityprefix2v)),Velocity);
    Velocityresult=Math.pow((Velocitygiven1v*(Math.pow(10,Velocityprefix1v)))/(Velocityreq1v*(Math.pow(10,Velocityprefix2v))),Velocity);
}

else{
Velocitygivenunit="";
Velocityrequnit="";
Velocityresult=1;
}








// for Acceleration
Acceleration=document.getElementById("Acceleration-p").value;

if(Acceleration != 0 && Acceleration !="")
{
    //    For given prefix
Accelerationprefix1=document.getElementById("ac-prefix-1");
Accelerationprefix1v=Accelerationprefix1.value;
if (Accelerationprefix1v != 0){
    Accelerationprefix1t=Accelerationprefix1.options[Accelerationprefix1.selectedIndex].text;
}
else {
    Accelerationprefix1t="";
}

// for given unit
Accelerationgiven1=document.getElementById("Acceleration-given");
Accelerationgiven1t=Accelerationgiven1.options[Accelerationgiven1.selectedIndex].text;
Accelerationgiven1v=Accelerationgiven1.value;


//    For required prefix
Accelerationprefix2=document.getElementById("ac-prefix-2");
Accelerationprefix2v=Accelerationprefix2.value;    
if (Accelerationprefix2v != 0){
    Accelerationprefix2t=Accelerationprefix1.options[Accelerationprefix2.selectedIndex].text;
}
else {
    Accelerationprefix2t="";
}

    // for required unit
    Accelerationreq1=document.getElementById("Acceleration-req");
    Accelerationreq1t=Accelerationreq1.options[Accelerationreq1.selectedIndex].text;
    Accelerationreq1v=Accelerationreq1.value;

    // unit remove or not
    Accelerationgivenunit=Accelerationprefix1t+Accelerationgiven1t+"^"+eval(Acceleration);
    Accelerationrequnit=Accelerationprefix2t+Accelerationreq1t+"^"+eval(Acceleration);

    // Accelerationresult=Math.pow((Math.pow(Accelerationgiven1v,Accelerationprefix1v)) /(Math.pow(Accelerationreq1v,Accelerationprefix2v)),Acceleration);
    Accelerationresult=Math.pow((Accelerationgiven1v*(Math.pow(10,Accelerationprefix1v)))/(Accelerationreq1v*(Math.pow(10,Accelerationprefix2v))),Acceleration);
}

else{
    
Accelerationgivenunit="";
Accelerationrequnit="";
Accelerationresult=1;
}








// for Dynamic Viscocity
Dynamic=document.getElementById("Dynamic-p").value;

if(Dynamic != 0 && Dynamic !="")
{
    //    For given prefix
Dynamicprefix1=document.getElementById("DV-prefix-1");
Dynamicprefix1v=Dynamicprefix1.value;
if (Dynamicprefix1v != 0){
    Dynamicprefix1t=Dynamicprefix1.options[Dynamicprefix1.selectedIndex].text;
}
else {
    Dynamicprefix1t="";
}

// for given unit
Dynamicgiven1=document.getElementById("Dynamic-given");
Dynamicgiven1t=Dynamicgiven1.options[Dynamicgiven1.selectedIndex].text;
Dynamicgiven1v=Dynamicgiven1.value;


//    For required prefix
Dynamicprefix2=document.getElementById("DV-prefix-2");
Dynamicprefix2v=Dynamicprefix2.value;    
if (Dynamicprefix2v != 0){
    Dynamicprefix2t=Dynamicprefix1.options[Dynamicprefix2.selectedIndex].text;
}
else {
    Dynamicprefix2t="";
}

    // for required unit
    Dynamicreq1=document.getElementById("Dynamic-req");
    Dynamicreq1t=Dynamicreq1.options[Dynamicreq1.selectedIndex].text;
    Dynamicreq1v=Dynamicreq1.value;

    // unit remove or not
    Dynamicgivenunit=Dynamicprefix1t+Dynamicgiven1t+"^"+eval(Dynamic);
    Dynamicrequnit=Dynamicprefix2t+Dynamicreq1t+"^"+eval(Dynamic);

    // Accelerationresult=Math.pow((Math.pow(Accelerationgiven1v,Accelerationprefix1v)) /(Math.pow(Accelerationreq1v,Accelerationprefix2v)),Acceleration);
    Dynamicresult=Math.pow((Dynamicgiven1v*(Math.pow(10,Dynamicprefix1v)))/(Dynamicreq1v*(Math.pow(10,Dynamicprefix2v))),Dynamic);
}

else{
    
Dynamicgivenunit="";
Dynamicrequnit="";
Dynamicresult=1;
}







// for Kinematic Viscocity
Kinematic=document.getElementById("Kinematic-p").value;

if(Kinematic != 0 && Kinematic !="")
{
    //    For given prefix
Kinematicprefix1=document.getElementById("KV-prefix-1");
Kinematicprefix1v=Kinematicprefix1.value;
if (Kinematicprefix1v != 0){
    Kinematicprefix1t=Kinematicprefix1.options[Kinematicprefix1.selectedIndex].text;
}
else {
    Kinematicprefix1t="";
}

// for given unit
Kinematicgiven1=document.getElementById("Kinematic-given");
Kinematicgiven1t=Kinematicgiven1.options[Kinematicgiven1.selectedIndex].text;
Kinematicgiven1v=Kinematicgiven1.value;


//    For required prefix
Kinematicprefix2=document.getElementById("KV-prefix-2");
Kinematicprefix2v=Kinematicprefix2.value;    
if (Kinematicprefix2v != 0){
    Kinematicprefix2t=Kinematicprefix1.options[Kinematicprefix2.selectedIndex].text;
}
else {
    Kinematicprefix2t="";
}

    // for required unit
    Kinematicreq1=document.getElementById("Kinematic-req");
    Kinematicreq1t=Kinematicreq1.options[Kinematicreq1.selectedIndex].text;
    Kinematicreq1v=Kinematicreq1.value;

    // unit remove or not
    Kinematicgivenunit=Kinematicprefix1t+Kinematicgiven1t+"^"+eval(Kinematic);
    Kinematicrequnit=Kinematicprefix2t+Kinematicreq1t+"^"+eval(Kinematic);

    // Accelerationresult=Math.pow((Math.pow(Accelerationgiven1v,Accelerationprefix1v)) /(Math.pow(Accelerationreq1v,Accelerationprefix2v)),Acceleration);
    Kinematicresult=Math.pow((Kinematicgiven1v*(Math.pow(10,Kinematicprefix1v)))/(Kinematicreq1v*(Math.pow(10,Kinematicprefix2v))),Kinematic);
}

else{
    
Kinematicgivenunit="";
Kinematicrequnit="";
Kinematicresult=1;
}







// for Charge
Charge=document.getElementById("Charge-p").value;

if(Charge != 0 && Charge !="")
{
    //    For given prefix
Chargeprefix1=document.getElementById("C-prefix-1");
Chargeprefix1v=Chargeprefix1.value;
if (Chargeprefix1v != 0){
    Chargeprefix1t=Chargeprefix1.options[Chargeprefix1.selectedIndex].text;
}
else {
    Chargeprefix1t="";
}

// for given unit
Chargegiven1=document.getElementById("Charge-given");
Chargegiven1t=Chargegiven1.options[Chargegiven1.selectedIndex].text;
Chargegiven1v=Chargegiven1.value;


//    For required prefix
Chargeprefix2=document.getElementById("C-prefix-2");
Chargeprefix2v=Chargeprefix2.value;    
if (Chargeprefix2v != 0){
    Chargeprefix2t=Chargeprefix1.options[Chargeprefix2.selectedIndex].text;
}
else {
    Chargeprefix2t="";
}

    // for required unit
    Chargereq1=document.getElementById("Charge-req");
    Chargereq1t=Chargereq1.options[Chargereq1.selectedIndex].text;
    Chargereq1v=Chargereq1.value;

    // unit remove or not
    Chargegivenunit=Chargeprefix1t+Chargegiven1t+"^"+eval(Charge);
    Chargerequnit=Chargeprefix2t+Chargereq1t+"^"+eval(Charge);

    // Accelerationresult=Math.pow((Math.pow(Accelerationgiven1v,Accelerationprefix1v)) /(Math.pow(Accelerationreq1v,Accelerationprefix2v)),Acceleration);
    Chargeresult=Math.pow((Chargegiven1v*(Math.pow(10,Chargeprefix1v)))/(Chargereq1v*(Math.pow(10,Chargeprefix2v))),Charge);
}

else{
    
Chargegivenunit="";
Chargerequnit="";
Chargeresult=1;
}





// for Current
Current=document.getElementById("Current-p").value;

if(Current != 0 && Current !="")
{
    //    For given prefix
    Currentprefix1=document.getElementById("Cu-prefix-1");
    Currentprefix1v=Currentprefix1.value;
if (Currentprefix1v != 0){
    Currentprefix1t=Currentprefix1.options[Currentprefix1.selectedIndex].text;
}
else {
    Currentprefix1t="";
}

// for given unit
Currentgiven1=document.getElementById("Current-given");
Currentgiven1t=Currentgiven1.options[Currentgiven1.selectedIndex].text;
Currentgiven1v=Currentgiven1.value;


//    For required prefix
Currentprefix2=document.getElementById("Cu-prefix-2");
Currentprefix2v=Currentprefix2.value;    
if (Currentprefix2v != 0){
    Currentprefix2t=Currentprefix1.options[Currentprefix2.selectedIndex].text;
}
else {
    Currentprefix2t="";
}

    // for required unit
    Currentreq1=document.getElementById("Current-req");
    Currentreq1t=Currentreq1.options[Currentreq1.selectedIndex].text;
    Currentreq1v=Currentreq1.value;

    // unit remove or not
    Currentgivenunit=Currentprefix1t+Currentgiven1t+"^"+eval(Current);
    Currentrequnit=Currentprefix2t+Currentreq1t+"^"+eval(Current);

    // Accelerationresult=Math.pow((Math.pow(Accelerationgiven1v,Accelerationprefix1v)) /(Math.pow(Accelerationreq1v,Accelerationprefix2v)),Acceleration);
    Currentresult=Math.pow((Currentgiven1v*(Math.pow(10,Currentprefix1v)))/(Currentreq1v*(Math.pow(10,Currentprefix2v))),Current);
}

else{
    
    Currentgivenunit="";
    Currentrequnit="";
    Currentresult=1;
}






// for Luminous Intensity
Luminous=document.getElementById("Luminous-p").value;

if(Luminous != 0 && Luminous !="")
{
    //    For given prefix
Luminousprefix1=document.getElementById("Lu-prefix-1");
Luminousprefix1v=Luminousprefix1.value;
if (Luminousprefix1v != 0){
    Luminousprefix1t=Luminousprefix1.options[Luminousprefix1.selectedIndex].text;
}
else {
    Luminousprefix1t="";
}

// for given unit
Luminousgiven1=document.getElementById("Luminous-given");
Luminousgiven1t=Luminousgiven1.options[Luminousgiven1.selectedIndex].text;
Luminousgiven1v=Luminousgiven1.value;


//    For required prefix
Luminousprefix2=document.getElementById("Lu-prefix-2");
Luminousprefix2v=Luminousprefix2.value;    
if (Luminousprefix2v != 0){
    Luminousprefix2t=Luminousprefix1.options[Luminousprefix2.selectedIndex].text;
}
else {
    Luminousprefix2t="";
}

    // for required unit
    Luminousreq1=document.getElementById("Luminous-req");
    Luminousreq1t=Luminousreq1.options[Luminousreq1.selectedIndex].text;
    Luminousreq1v=Luminousreq1.value;

    // unit remove or not
    Luminousgivenunit=Luminousprefix1t+Luminousgiven1t+"^"+eval(Luminous);
    Luminousrequnit=Luminousprefix2t+Luminousreq1t+"^"+eval(Luminous);

    // Accelerationresult=Math.pow((Math.pow(Accelerationgiven1v,Accelerationprefix1v)) /(Math.pow(Accelerationreq1v,Accelerationprefix2v)),Acceleration);
    Luminousresult=Math.pow((Luminousgiven1v*(Math.pow(10,Luminousprefix1v)))/(Luminousreq1v*(Math.pow(10,Luminousprefix2v))),Luminous);
}

else{
    
    Luminousgivenunit="";
    Luminousrequnit="";
    Luminousresult=1;
}







// for Amount of Substance
Amount=document.getElementById("Amount-p").value;

if(Amount != 0 && Amount !="")
{
    //    For given prefix
    Amountprefix1=document.getElementById("AOS-prefix-1");
    Amountprefix1v=Amountprefix1.value;
if (Amountprefix1v != 0){
    Amountprefix1t=Amountprefix1.options[Amountprefix1.selectedIndex].text;
}
else {
    Amountprefix1t="";
}

// for given unit
Amountgiven1=document.getElementById("Amount-given");
Amountgiven1t=Amountgiven1.options[Amountgiven1.selectedIndex].text;
Amountgiven1v=Amountgiven1.value;


//    For required prefix
Amountprefix2=document.getElementById("AOS-prefix-2");
Amountprefix2v=Amountprefix2.value;    
if (Amountprefix2v != 0){
    Amountprefix2t=Amountprefix1.options[Amountprefix2.selectedIndex].text;
}
else {
    Amountprefix2t="";
}

    // for required unit
    Amountreq1=document.getElementById("Amount-req");
    Amountreq1t=Amountreq1.options[Amountreq1.selectedIndex].text;
    Amountreq1v=Amountreq1.value;

    // unit remove or not
    Amountgivenunit=Amountprefix1t+Amountgiven1t+"^"+eval(Amount);
    Amountrequnit=Amountprefix2t+Amountreq1t+"^"+eval(Amount);

    // Accelerationresult=Math.pow((Math.pow(Accelerationgiven1v,Accelerationprefix1v)) /(Math.pow(Accelerationreq1v,Accelerationprefix2v)),Acceleration);
    Amountresult=Math.pow((Amountgiven1v*(Math.pow(10,Amountprefix1v)))/(Amountreq1v*(Math.pow(10,Amountprefix2v))),Amount);
}

else{
    
Amountgivenunit="";
Amountrequnit="";
Amountresult=1;
}







   finalresult=eval(massresult*timeresult*lengthresult*temperatureresult*energyresult*Torqueresult*Powerresult*Pressureresult*Volumeresult*Forceresult*Arearesult*Velocityresult*Accelerationresult*Dynamicresult*Kinematicresult*Chargeresult*Currentresult*Luminousresult*Amountresult*input);
    unitgivenf=massgivenunit+" "+timegivenunit+" "+lengthgivenunit+" "+temperaturegivenunit+" "+energygivenunit+" "+Torquegivenunit+" "+Powergivenunit+" "+Pressuregivenunit+" "+Volumegivenunit+" "+Forcegivenunit+" "+Areagivenunit+" "+Velocitygivenunit+" "+Accelerationgivenunit+" "+Dynamicgivenunit+" "+Kinematicgivenunit+" "+Chargegivenunit+" "+Currentgivenunit+" "+Luminousgivenunit+" "+Amountgivenunit; 
    unitreqf=massrequnit+" "+timerequnit+" "+lengthrequnit+" "+temperaturerequnit+" "+energyrequnit+" "+Torquerequnit+" "+Powerrequnit+" "+Pressurerequnit+" "+Volumerequnit+" "+Forcerequnit+" "+Arearequnit+" "+Velocityrequnit+" "+Accelerationrequnit+" "+Dynamicrequnit+" "+Kinematicrequnit+" "+Chargerequnit+" "+Currentgivenunit+" "+Luminousgivenunit+" "+Amountrequnit;
    document.getElementById("given-unit").value=unitgivenf.replace(/\s+/g,' ').trim();
    document.getElementById("req-unit").value=unitreqf.replace(/\s+/g,' ').trim();



    var finalres12=finalresult.toPrecision(15);
    document.getElementById("out-req").value=finalres12.toUpperCase(); 
   
   

};





// for table 2 

function calc2(){
    mass1=document.getElementById("mass1").value;
    time1=document.getElementById("time1").value;
    length1=document.getElementById("length1").value;
    temperature1=document.getElementById("temperature1").value;
    energy1=document.getElementById("energy1").value;
    torque1=document.getElementById("torque1").value;
    power1=document.getElementById("power1").value;
    pressure1=document.getElementById("pressure1").value;
    force1=document.getElementById("force1").value;
    volume1=document.getElementById("volume1").value;
    area1=document.getElementById("area1").value;
    velocity1=document.getElementById("velocity1").value;
    acceleration1=document.getElementById("acceleration1").value;
    Dynamic1=document.getElementById("Dynamic1").value;
    Kinematic1=document.getElementById("Kinematic1").value;
    Density1=document.getElementById("Density1").value;


    massf=eval(mass1*1)+"+"+eval(energy1*1)+"+"+eval(torque1*1)+"+"+eval(power1*1)+"+"+eval(pressure1*1)+"+"+eval(force1*1)+"+"+eval(Dynamic1*1)+"+"+eval(Density1*1);
    timef=time1-(energy1*(2))-(torque1*(2))-(power1*(3))-(pressure1*(2))-(force1*(2))-velocity1-(acceleration1*(2))-(Dynamic1*(1))-(Kinematic1*(1));
    lengthf=eval(length1*1)+"+"+eval(energy1*2)+"+"+eval(torque1*2)+"+"+eval(power1*2)+"+"+eval(force1*1)+"+"+eval(volume1*3)+"+"+eval(area1*2)+"+"+eval(velocity1*1)+"+"+eval(acceleration1*1)+"+"+eval(pressure1*(-1))+"+"+eval(Dynamic1*(-1))+"+"+eval(Kinematic1*(2))+"+"+eval(Density1*(-3));
    temperaturef=eval(temperature1*1);
    timef1=eval(timef);
    massf1=eval(massf);
    lengthf1=eval(lengthf);
    temperaturef1=eval(temperaturef);


    document.getElementById("mass2").value=massf1;
    document.getElementById("time2").value=timef1;
    document.getElementById("length2").value=lengthf1;
    document.getElementById("temperature2").value=temperaturef1;

};










// for equivalence checker

function calc3(){
    mass3=document.getElementById("mass3");
    time3=document.getElementById("time3");
    length3=document.getElementById("length3");
    temperature3=document.getElementById("temperature3");
    
    mass4=document.getElementById("mass4");
    time4=document.getElementById("time4");
    length4=document.getElementById("length4");
    temperature4=document.getElementById("temperature4");

    result3=document.getElementById("result3");

    if(mass3.value==mass4.value && time3.value==time4.value && length3.value==length4.value && temperature3.value==temperature4.value){
        result3.innerText="YES";
        result3.style.color="Green";
    }
    else{
        result3.innerText="NO";
        result3.style.color="red";
    }
};



function calc4(){
mass3.value=document.getElementById("mass2").value;
time3.value=document.getElementById("time2").value;
length3.value=document.getElementById("length2").value;
temperature3.value=document.getElementById("temperature2").value;

calc3();
}




function calc5(){
mass4.value=document.getElementById("mass2").value;
time4.value=document.getElementById("time2").value;
length4.value=document.getElementById("length2").value;
temperature4.value=document.getElementById("temperature2").value;

calc3();
}
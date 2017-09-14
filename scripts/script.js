$.getJSON('http://xdigu.dyndns.org:8082/v1/gpuinfo', function( data ) {

    console.log(data)

    var driveversion = document.createElement('h4');
    driveversion.innerHTML = data.DriveVersion;
    document.getElementById('driveversion').appendChild(driveversion);

    var gpuname = document.createElement('h4');
    gpuname.innerHTML = data.Gpu.GpuName;
    document.getElementById('gpuname').appendChild(gpuname);


    var biosversion = document.createElement('h4');
    biosversion.innerHTML = data.Gpu.BiosVersion;
    document.getElementById('biosversion').appendChild(biosversion);

    var fanspeed = document.createElement('h4');
    fanspeed.innerHTML = data.Gpu.FanSpeed;
    document.getElementById('fanspeed').appendChild(fanspeed);

    var temperature = document.createElement('h4');
    temperature.innerHTML = data.Gpu.Temperature.GpuTemp;
    document.getElementById('temperature').appendChild(temperature);
 });
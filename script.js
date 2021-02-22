let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let tens = document.getElementById("tens");
let interval;
let minutes_value = 0;
let second_value = 0;
let tens_value = 0;

function startTimer()
{
	tens_value++;

	if(tens_value < 9)
	{
		tens.innerText = "0" + tens_value;
	}
	if(tens_value > 9)
	{
		tens.innerText = tens_value;
	}
	if(tens_value > 99)
	{
		second_value++;
		seconds.innerText = "0" + second_value;
		tens_value = 0;
		tens.innerText = "0" + tens_value;
	}
	if(second_value < 9)
	{
		seconds.innerText = "0" + second_value;
	}
	if(second_value > 9)
	{
		seconds.innerText = second_value;
	}
	if(second_value > 59)
	{
		minutes_value++;
		minutes.innerText = "0" + minutes_value;
		second_value = 0;
		seconds.innerText = "0" + second_value;
		tens_value = 0;
		tens.innerText = "0" + tens_value;
	}
	if(minutes_value < 9)
	{
		minutes.innerText = "0" + minutes_value;
	}
	if(minutes_value > 9)
	{
		minutes.innerText = minutes_value;
	}
}

function startStopwatch()
{
	clearInterval(interval);
	interval = setInterval(startTimer,10);
}
startButton.onclick = startStopwatch;

function stopStopwatch()
{
	clearInterval(interval);
}
stopButton.onclick = stopStopwatch;

function resetStopwatch()
{
	clearInterval(interval);
	minutes_value = 0;
	second_value = 0;
	tens_value = 0;
	minutes.innerText = "00";
	seconds.innerText = "00";
	tens.innerText = "00";
}
resetButton.onclick = resetStopwatch;
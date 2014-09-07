(function (document, battery) {

	'use strict';

	var charging = document.getElementById('charging'),
		batteryLevel = document.getElementById('battery-level'),
		batteryLevelMeter = document.getElementById('battery-level-meter');

	function showCharging() {
		if (battery.charging) {
			charging.classList.add('show');
		} else {
			charging.classList.remove('show');
		}
	}

	function showBatteryLevel() {
		batteryLevel.textContent = battery.level * 100;
		batteryLevelMeter.value = battery.level;
	}

	showCharging();
	showBatteryLevel();

	battery.addEventListener('chargingchange', showCharging);
	battery.addEventListener('levelchange', showBatteryLevel);

})(document, navigator.battery);
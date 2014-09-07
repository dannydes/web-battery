(function (document, battery) {

	'use strict';

	function showCharging() {
		var charging = document.getElementById('charging');
		if (battery.charging) {
			charging.classList.add('show');
		} else {
			charging.classList.remove('show');
		}
	}

	function showBatteryLevel() {
		document.getElementById('battery-level').textContent = battery.level * 100;
		document.getElementById('battery-level-meter').value = battery.level;
	}

	showCharging();
	showBatteryLevel();

	battery.addEventListener('chargingchange', showCharging);
	battery.addEventListener('levelchange', showBatteryLevel);

})(document, navigator.battery);
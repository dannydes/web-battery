(function (document, battery) {
	
	'use strict';

	function showCharging() {
		if (battery.charging) {
			document.getElementById('charging').classList.add('show');
		}
	}

	function showBatteryLevel() {
		document.getElementById('battery-level').textContent = battery.level * 100;
	}

	showCharging();
	showBatteryLevel();

	battery.addEventListener('chargingchange', showCharging);
	battery.addEventListener('levelchange', showBatteryLevel);

})(document, navigator.battery);
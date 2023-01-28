Java.perform(() => {
 
	
	var loadedClasses = Java.enumerateLoadedClassesSync();
	
	// bypass No. 1 root
	
	if (loadedClasses.indexOf('java.lang.String') != -1) {
	
		var bypassStrings = [
							 "test-keys"
							];
		var stringClass = Java.use('java.lang.String');
		stringClass.contains.implementation = function(stringArgument) {
			for(var i = 0; i < bypassStrings.length; i = i + 1){
				if (stringArgument == bypassStrings[i]) {
					console.log("bypassed " +stringArgument+ " check" );
					return false;
				}
			}
			return this.contains.call(this, stringArgument);
		};
	
	
		
		// bypass No. 2 root
		stringClass.equals.implementation = function(stringArgument) {
			for(var i = 0; i < bypassStrings.length; i = i + 1){
				if (stringArgument == bypassStrings[i]) {
					console.log("bypassed " +stringArgument+ " check" );
					return false;
				}
			}
			return this.equals.call(this, stringArgument);
		};
	}
	
	
	
	// bypass No. 3 root
	if (loadedClasses.indexOf('java.io.File') != -1) {
		var suPaths = ["/system/app/Superuser.apk",  "/system/xbin/daemonsu", "/system/etc/init.d/99SuperSUDaemon","/system/bin/.ext/.su", "/system/etc/.has_su_daemon", "/system/etc/.installed_su_daemon",  "/dev/com.koushikdutta.superuser.daemon/",  "/system/xbin/su",  "/system/bin/su",  "/data/app/eu.chainfire.supersu", "/data/app/com.noshufou.android.su", "/system/bin/su", "su"];
		const fileClass =  Java.use("java.io.File");
		fileClass.exists.implementation = function() {
			var currentFileName = fileClass.getName.call(this);
			for(var i = 0; i < suPaths.length; i = i + 1){
				if(currentFileName == suPaths[i]){
					console.log("bypassed file path: " + currentFileName);
					return false;
				}
			}
			
			return this.exists.call(this);
		};
	}
	
	
	// bypass No. 4 root
	if (loadedClasses.indexOf('java.lang.Runtime') != -1) {
		var runtimeClass = Java.use('java.lang.Runtime');
		var suCommand = runtimeClass.exec.overload('java.lang.String');
		suCommand.implementation = function(command) {
			if (command == "su") {
				console.log("Bypass " + command + " command");
				return suCommand.call(this, "throw_exception");
			}
			return suCommand.call(this, command);
		};
	}
	
	
	// bypass No. 5 emulator
	if (loadedClasses.indexOf('android.os.Build') != -1) {
		var buildSystemInfo = Java.use('android.os.Build');
		buildSystemInfo.MODEL.value = "licenta2022_MODEL";// != sdk
		buildSystemInfo.DEVICE.value = "licenta2022_MODEL";// != generic
		buildSystemInfo.BOARD.value = "licenta2022_BOARD";// != unknown
		buildSystemInfo.PRODUCT.value = "licenta2022_PRODUCT";// != sdk
		buildSystemInfo.HARDWARE.value = "licenta2022_HARDWARE";// != goldfish
		buildSystemInfo.FINGERPRINT.value = "licenta2022_FINGERPRINT"// != generic
		buildSystemInfo.MANUFACTURER.value = "licenta2022_MANUFACTURER";// != unknown
		buildSystemInfo.BRAND.value = "licenta2022_BRAND ";// != generic
		buildSystemInfo.HOST.value = "licenta2022_HOST";// != android-test
		buildSystemInfo.ID.value = "licenta2022_ID";// != FRF91
		buildSystemInfo.TAGS.value = "licenta2022_TAGS";// != test-keys
		buildSystemInfo.SERIAL.value = "licenta2022_SERIAL"; // != null
		buildSystemInfo.USER.value = "licenta2022_USER"; // != android-build
	}
	
	// bypass No. 5 emulator
	if (loadedClasses.indexOf('android.telephony.TelephonyManager') != -1) {
		const telephonyManagerClass = Java.use('android.telephony.TelephonyManager');
		// Done
		telephonyManagerClass.getDeviceId.overloads[0].implementation = function(){
			console.log("Bypassed TelephonyManager.getDeviceId");
			return "licenta2022_getDeviceId";
		}
		
		// Done
		telephonyManagerClass.getLine1Number.overloads[0].implementation = function() {
			console.log("Bypassed TelephonyManager.getLine1Number");
			return "licenta2022_getLine1Number";
		}
		
		// Done
		telephonyManagerClass.getNetworkCountryIso.overloads[0].implementation = function(){
			console.log("Bypassed TelephonyManager.getNetworkCountryIso");
			return "licenta2022_getNetworkCountryIso";
		}
		
		// Done
		telephonyManagerClass.getNetworkType.overload.implementation = function(){
			console.log("Bypassed TelephonyManager.getNetworkType");
			return 2; // !3
		}
		
		// Done
		telephonyManagerClass.getNetworkOperator.overload.implementation = function(){
			console.log("Bypassed TelephonyManager.getNetworkOperator");
			return "licenta2022_ggetNetworkOperator";
		}
		
		
		// Done
		telephonyManagerClass.getPhoneType.overload.implementation = function(){
			console.log("Bypassed TelephonyManager.getPhoneType");
			return 999;
		}
		
		// Done
		telephonyManagerClass.getSimCountryIso.overload.implementation = function(){
			console.log("Bypassed TelephonyManager.getSimCountryIso");
			return "licenta2022_getSimCountryIso";
		}
		
		// Done
		telephonyManagerClass.getSimSerialNumber.overload.implementation = function(){
			console.log("Bypassed TelephonyManager.getSimSerialNumber");
			return "licenta2022_getSimSerialNumber";
		}

		// Done
		telephonyManagerClass.getSubscriberId.overload.implementation = function(){
			console.log("Bypassed TelephonyManager.getSubscriberId");
			return "licenta2022_getSubscriberId";
		}
		
		// Done
		telephonyManagerClass.getVoiceMailNumber.overload.implementation = function(){
			console.log("Bypassed TelephonyManager.getVoiceMailNumber");
			return "licenta2022_getVoiceMailNumber";
		}
	}
	
	
	
	
 });
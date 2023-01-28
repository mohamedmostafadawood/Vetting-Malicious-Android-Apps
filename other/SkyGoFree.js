function monitorAppActivity()
{

	//AppActivity
    Java.perform(function () {
        var target = Java.use("com.sysmanager.Main");

        target.onResume.overload().implementation = function() {
            console.log("[Main].[onResume]");
            this.onResume();
        };

		target.onCreate.overload('android.os.Bundle').implementation = function(param) {
            console.log("[Main].[onCreate]");
            this.onCreate(param);
        };

		target.onDestroy.overload().implementation = function() {
            console.log("[Main].[onDestroy]");
            this.onDestroy();
        };

		target.onStop.overload().implementation = function() {
            console.log("[Main].[onStop]");
            this.onStop();
        };

        target.createDirectory.overload('java.io.File').implementation = function(param) {
            console.log("[Main].[createDirectory].[" + param + "]");
            this.createDirectory(param);
        };

        target.RegistrationToGoogleGCM.overload().implementation = function() {
            console.log("[Main].[RegistrationToGoogleGCM]");
            this.RegistrationToGoogleGCM();
        };

        target.RemoveAPKFiles.overload().implementation = function() {
            console.log("[Main].[RemoveAPKFiles]");
            this.RemoveAPKFiles();
        };

        target.checkPlayServices.overload().implementation = function() {
            console.log("[Main].[checkPlayServices]");
            return this.checkPlayServices();
        };

        target.RegistrationToGoogleGCM.overload().implementation = function() {
            console.log("[Main].[RegistrationToGoogleGCM]");
            return this.RegistrationToGoogleGCM();
        };

        target.runApp.overload('boolean').implementation = function(param) {
            console.log("[Main].[runApp]");
            this.runApp(param);
        };

    });

	//Cocos2dxActivity
	Java.perform(function () {
        var target = Java.use("com.sysmanager.storage.DataBoot");

        target.getAmbientale.overload().implementation = function() {
            console.log("[DataBoot].[getAmbientale].["+this.getAmbientale()+"]");
            return this.getAmbientale();
        };

        target.getAttivazione.overload().implementation = function() {
            console.log("[DataBoot].[getAttivazione].["+this.getAttivazione()+"]");
            return this.getAttivazione();
        };

        target.getId.overload().implementation = function() {
            console.log("[DataBoot].[getId].["+this.getId()+"]");
            return this.getId();
        };


        target.getSerialnumber.overload().implementation = function() {
            console.log("[DataBoot].[getSerialnumber].["+this.getSerialnumber()+"]");
            return this.getSerialnumber();
        };


        target.getWifi3g.overload().implementation = function() {
            console.log("[DataBoot].[getWifi3g]");
            return this.getWifi3g();
        };
        //
        target.setAmbientale.overload('int').implementation = function(param) {
            console.log("[DataBoot].[setAmbientale].[");
             this.setAmbientale(param);
        };

        target.setAttivazione.overload('int').implementation = function(param) {
            console.log("[DataBoot].[setAttivazione]");
             this.getAttivazione();
        };

        target.setId.overload('int').implementation = function(param) {
            console.log("[DataBoot].[setId]");
             this.getId();
        };


        target.setSerialnumber.overload('java.lang.String').implementation = function(param) {
            console.log("[DataBoot].[setSerialnumber]");
             this.getSerialnumber();
        };


        target.setWifi3g.overload('int').implementation = function(param) {
            console.log("[DataBoot].[setWifi3g]");
             this.getWifi3g();
        };

    });


	//Cell
    Java.perform(function () {
        var target = Java.use("com.sysmanager.storage.Cell");

        target.$init.overload('java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String').implementation = function(param1,param2,param3,param4,param5){
            console.log("[Cell].[Constructor].[" + param1+"].[" + param2+"].["+param3+"].["+param4+"].["+param5+"]");
            return this.$init(param1,param2,param3,param4,param5);
        };

        target.convertCellToJSON.overload().implementation = function() {
            console.log("[Cell].[convertCellToJSON].["+this.convertCellToJSON()+"]");
             return this.convertCellToJSON();
        };

    });


	//HTTPUtility
	Java.perform(function () {
        var target = Java.use("com.sysmanager.network.HTTPUtility");

        target.HttpPostRequest.overload('java.lang.String', 'org.json.JSONObject', 'java.lang.String').implementation = function(param1, param2, param3) {
            console.log("[HTTPUtility].[HttpPostRequest].["+param1+"].["+param2+"].["+param3+"]");
             this.HttpPostRequest();
        };

        target.InvioCommandoConferma.overload('java.lang.String', 'android.content.Context', 'java.lang.String').implementation = function(param1, param2, param3) {
            console.log("[HTTPUtility].[InvioCommandoConferma].[" + param1+"].[" + prama3 +"]");
             this.InvioCommandoConferma(param1, param2, param3);
        };

        target.InvioCommandoPresenza.overload('java.lang.String', 'android.content.Context', 'java.lang.String').implementation = function(param1, param2, param3) {
            console.log("[HTTPUtility].[InvioCommandoPresenza].[" + param1+"].[" + prama3 +"]");
             this.InvioCommandoPresenza(param1, param2, param3);
        };

    });

	//GeoUtils
    Java.perform(function () {
        var target = Java.use("com.sysmanager.utils.GeoUtils");

        target.bearing.overload('double','double','double','double').implementation = function(param1, param2, param3,param4) {
            console.log("[GeoUtils].[bearing].["+param1+"].["+param2+"].["+param3+"].["+param4+"]");
            return this.bearing(param1, param2, param3,param4);
        };

        target.distanceKm.overload('double','double','double','double').implementation = function(param1, param2, param3,param4) {
            console.log("[GeoUtils].[distanceKm].["+param1+"].["+param2+"].["+param3+"].["+param4+"]");
            return this.distanceKm(param1, param2, param3,param4);
        };

        target.radToBearing.overload('double').implementation = function(param1) {
            console.log("[GeoUtils].[radToBearing].["+param1+"]");
            return this.radToBearing();
        };

    });

	//InstanceIDMessage
    Java.perform(function () {
        var target = Java.use("com.sysmanager.InstanceIDMessage");

        target.onTokenRefresh.overload().implementation = function() {
            console.log("[InstanceIDMessage].[onTokenRefresh]");
            this.onTokenRefresh();
        };
    });

	//MainWeb
    Java.perform(function () {
        var target = Java.use("com.sysmanager.MainWeb");

        target.onResume.overload().implementation = function() {
            console.log("[MainWeb].[onResume]");
            this.onResume();
        };

		target.onCreate.overload('android.os.Bundle').implementation = function(param) {
            console.log("[MainWeb].[onCreate]");
            this.onCreate(param);
        };

		target.onDestroy.overload().implementation = function() {
            console.log("[MainWeb].[onDestroy]");
            this.onDestroy();
        };

		target.onStop.overload().implementation = function() {
            console.log("[MainWeb].[onStop]");
            this.onStop();
        };

        target.CreateCacheDirectories.overload('java.io.File', 'java.io.File').implementation = function(param1, param2) {
            console.log("[MainWeb].[CreateCacheDirectories].["+param1.getName()+"].["+param2.getName()+"]");
            this.CreateCacheDirectories(param1, param2);
        };

        target.checkPlayServices.overload().implementation = function() {
            console.log("[MainWeb].[checkPlayServices]");
            return this.checkPlayServices();
        };

        target.createDirectory.overload('java.io.File').implementation = function(param1) {
            console.log("[MainWeb].[createDirectory].["+param1.getName()+"]");
            this.createDirectory(param1);
        };

        target.RegistrationToGoogleGCM.overload().implementation = function() {
            console.log("[MainWeb].[RegistrationToGoogleGCM]");
            return this.RegistrationToGoogleGCM();
        };

        target.ThreadRegistration.overload().implementation = function() {
            console.log("[MainWeb].[ThreadRegistration]");
            this.ThreadRegistration();
        };

        target.alive.overload('android.content.Context').implementation = function(param) {
            console.log("[MainWeb].[alive]");
            this.alive(param);
        };

        target.runApp.overload('boolean').implementation = function(param) {
            console.log("[MainWeb].[runApp]");
            this.runApp(param);
        };

    });

	//MessageManagement
    Java.perform(function () {
        var target = Java.use("com.sysmanager.MessageManagement");

        target.fixEncoding.overload('java.lang.String').implementation = function(param1) {
            console.log("[MessageManagement].[fixEncoding].["+param1+"]");
            return this.onTokenRefresh(param1);
        };

        target.sendNotification.overload('java.lang.String').implementation = function(param1) {
            console.log("[MessageManagement].[sendNotification].["+param1+"]");
            this.onTokenRefresh(param1);
        };

        target.updateData.overload('java.lang.String', 'int', 'android.content.Context').implementation = function(param1,param2,param3) {
            console.log("[MessageManagement].[updateData].["+param1+"].["+param2+"]");
            this.updateData(param1,param2,param3);
        };

        target.CallRegisterEnabled.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[CallRegisterEnabled].["+param1+"]");
            this.CallRegisterEnabled(param1);
        };

        target.addWifiConfig.overload('java.lang.String','java.lang.String','java.lang.String','java.lang.String').implementation = function(param1,param2,param3,param4) {
            console.log("[MessageManagement].[addWifiConfig].["+param1+"].["+param2+"].["+param3+"].["+param4+"]");
            this.addWifiConfig(param1,param2,param3,param4);
        };

        target.cameraEnabled.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[cameraEnabled]");
            this.cameraEnabled(param1);
        };


        target.cellaEnabled.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[cellaEnabled]");
            this.cellaEnabled(param1);
        };

        target.cellaStop.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[cellaStop]");
            this.cellaStop(param1);
        };

        target.disableGPS.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[disableGPS]");
            this.disableGPS(param1);
        };

        target.disableNET.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[disableNET]");
            this.disableNET(param1);
        };

        target.enableGPS.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[enableGPS]");
            this.enableGPS(param1);
        };

        target.enableNET.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[enableNET]");
            this.enableNET(param1);
        };

        target.historyEnabled.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[historyEnabled]");
            this.historyEnabled(param1);
        };

        target.infoEnabled.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[infoEnabled]");
            this.infoEnabled(param1);
        };

        target.listaApps.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[listaApps]");
            this.listaApps(param1);
        };

        target.listaFile.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[listaFile]");
            this.listaFile(param1);
        };

        target.mobileConnectionEnable.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[mobileConnectionEnable]");
            this.mobileConnectionEnable(param1);
        };

        target.onMessageReceived.overload('java.lang.String','android.os.Bundle').implementation = function(param1,param2) {
            console.log("[MessageManagement].[onMessageReceived]");
            this.onMessageReceived(param1,param2);
        };

        target.rubricaEnabled.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[rubricaEnabled]");
            this.rubricaEnabled(param1);
        };

        target.smsEnabled.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[smsEnabled]");
            this.smsEnabled(param1);
        };

        target.sendFileChoose.overload('android.content.Context','java.lang.String').implementation = function(param1,param2) {
            console.log("[MessageManagement].[sendFileChoose]");
            this.sendFileChoose(param1,param2);
        };

        target.startRecording.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[startRecording]");
            this.startRecording(param1);
        };

        target.statusEnabled.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[statusEnabled]");
            this.statusEnabled(param1);
        };

        target.stopRecording.overload('android.content.Context').implementation = function(param1) {
            console.log("[MessageManagement].[stopRecording]");
            this.stopRecording(param1);
        };

        target.whatsappEnabled.overload('android.content.Context','java.lang.String').implementation = function(param1,param2) {
            console.log("[MessageManagement].[whatsappEnabled]");
            this.whatsappEnabled(param1,param2);
        };

        target.wifi3gsettingEnabled.overload('android.content.Context','java.lang.String').implementation = function(param1,param2) {
            console.log("[MessageManagement].[wifi3gsettingEnabled]");
            this.wifi3gsettingEnabled(param1,param2);
        };

        target.wifiManageConfiguration.overload('android.content.Context','java.lang.String').implementation = function(param1,param2) {
            console.log("[MessageManagement].[wifiManageConfiguration]");
            this.wifiManageConfiguration(param1,param2);
        };

    });

	//OnBootReceiver
    Java.perform(function () {
        var target = Java.use("com.sysmanager.OnBootReceiver");

        target.checkPlayServices.overload('android.content.Context').implementation = function(param1) {
            console.log("[OnBootReceiver].[checkPlayServices]");
            return this.checkPlayServices(param1);
        };

        target.createDirectory.overload('java.io.File').implementation = function(param1) {
            console.log("[OnBootReceiver].[createDirectory].["+param1.getName()+"]");
            this.createDirectory(param1);
        };

        target.createWorkingDirectory.overload('android.content.Context').implementation = function(param1) {
            console.log("[OnBootReceiver].[createWorkingDirectory]");
            this.createWorkingDirectory(param1);
        };

        target.CheckGCMRegistration.overload('android.content.Context', 'java.lang.String').implementation = function(param1,param2) {
            console.log("[OnBootReceiver].[CheckGCMRegistration].["+param2+"]");
            this.CheckGCMRegistration(param1,param2);
        };

        target.LoadSharedPreferences.overload('android.content.Context').implementation = function(param1) {
            console.log("[OnBootReceiver].[LoadSharedPreferences]");
            this.LoadSharedPreferences(param1);
        };

        target.RegistrationToGoogleGCM.overload('android.content.Context', 'java.lang.String').implementation = function(param1, param2) {
            console.log("[OnBootReceiver].[RegistrationToGoogleGCM].["+param2+"]");
            return this.RegistrationToGoogleGCM(param1, param2);
        };

        target.execCommand.overload('java.lang.String').implementation = function(param2) {
            console.log("[OnBootReceiver].[execCommand].["+param2+"]");
            return this.execCommand(param2);
        };
    });

	//RegistrationIntentService
    Java.perform(function () {
        var target = Java.use("com.sysmanager.RegistrationIntentService");

        target.sendRegistrationToServer.overload('java.lang.String').implementation = function(param1) {
            console.log("[RegistrationIntentService].[sendRegistrationToServer].["+param1+"]");
            this.sendRegistrationToServer(param1);
        };

        target.subscribeTopics.overload('java.lang.String').implementation = function(param1) {
            console.log("[RegistrationIntentService].[subscribeTopics].["+param1+"]");
            this.subscribeTopics(param1);
        };
    });

	//ConnectivityCheckUtility
    Java.perform(function () {
        var target = Java.use("com.sysmanager.network.utils.ConnectivityCheckUtility");

        target.isOnline.overload('android.content.Context').implementation = function(param1) {
            console.log("[InstanceIDMessage].[isOnline]");
            this.isOnline(param1);
        };
    });

	//HTTPUtility
    Java.perform(function () {
        var target = Java.use("com.sysmanager.network.HTTPUtility");

        target.HttpPostRequest.overload('java.lang.String','org.json.JSONObject','java.lang.String').implementation = function(param1,param2,param3) {
            console.log("[HTTPUtility].[HttpPostRequest].["param1+"].["+param3+"]");
            this.HttpPostRequest(param1,param2,param3);
        };

        target.InvioCommandoConferma.overload('java.lang.String','android.content.Context','java.lang.String').implementation = function(param1,param2,param3) {
            console.log("[HTTPUtility].[InvioCommandoConferma].["param1+"].["+param3+"]");
            this.InvioCommandoConferma(param1,param2,param3);
        };

        target.InvioCommandoPresenza.overload('java.lang.String','android.content.Context','java.lang.String').implementation = function(param1,param2,param3) {
            console.log("[HTTPUtility].[InvioCommandoPresenza].["param1+"].["+param3+"]");
            this.InvioCommandoPresenza(param1,param2,param3);
        };

        target.doFileUpload.overload('java.io.File','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String').implementation = function(param1,param2,param3,param4,param5,param6) {
            console.log("[HTTPUtility].[doFileUpload].["+param1.getName()+"].["+param2+"].["+param3+"].["+param4+"].["+param5+"].["+param6+"]");
            return this.doFileUpload(param1,param2,param3,param4,param5,param6);
        };

        target.excuteHttpPost.overload('java.lang.String','boolean','org.json.JSONObject').implementation = function(param1,param2,param3) {
            console.log("[HTTPUtility].[excuteHttpPost].["+param1+"].["+param2+"].["+param3+"]");
            return this.excuteHttpPost(param1,param2,param3);
        };

        target.excuteHttpPostServer.overload('java.lang.String','boolean','org.json.JSONObject').implementation = function(param1,param2,param3) {
            console.log("[HTTPUtility].[excuteHttpPostServer].["+param1+"].["+param2+"].["+param3+"]");
            return this.excuteHttpPostServer(param1,param2,param3);
        };

        target.obtainHostName.overload('java.lang.String').implementation = function(param1) {
            console.log("[HTTPUtility].[obtainHostName].["+param1+"]");
            return this.obtainHostName(param1);
        };

    });

	//NetworkServices
    Java.perform(function () {
        var target = Java.use("com.sysmanager.network.NetworkServices");

        target.registerCell.overload('java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String').implementation = function(param1,param2,param3,param4,param5,param6) {
            console.log("[NetworkServices].[registerCell].[" + param1+"].["+param2+"].["+param3+"].["+param4+"].["+param5+"].["+param6 + "]");
            this.registerCell(param1,param2,param3,param4,param5,param6);
        };

        target.registerCellLista.overload('java.lang.String','java.lang.String').implementation = function(param1,param2) {
            console.log("[NetworkServices].[registerCellLista].["+param1+"].["+param2+"]");
            this.registerCellLista(param1,param2);
        };

        target.registerGps.overload('java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String','java.lang.String').implementation = function(q,w,e,r,t,y,u,i,o,p,a,s,d) {
            console.log("[NetworkServices].[registerGps].["+q+"].["+w+"].["+e+"].["+r+"].["+t+"].["+y+"].["+u+"].["+i+"].["+o+"].["+p+"].["+a+"].["+s+"].["+d+"]");
            this.registerGps(q,w,e,r,t,y,u,i,o,p,a,s,d);
        };

        target.registerGpsLista.overload('java.lang.String','java.lang.String').implementation = function(param1,param2) {
            console.log("[NetworkServices].[registerGpsLista].["+param1+"].["+param2+"]");
            this.registerGpsLista(param1,param2);
        };

        target.registerToken.overload('java.lang.String','java.lang.String','java.lang.String').implementation = function(param1,param2,param3) {
            console.log("[NetworkServices].[registerToken].["+param1+"].["+param2+"].["+param3+"]");
            this.registerToken(param1,param2,param3);
        };

        target.sendAliveEvent.overload('java.lang.String','java.lang.String','java.lang.String', 'java.lang.String').implementation = function(param1,param2,param3,param4) {
            console.log("[NetworkServices].[sendAliveEvent].["+param1+"].["+param2+"].["+param3+"].["+param4 +"]");
            this.sendAliveEvent(param1,param2,param3,param4);
        };

    });

	//NetworkUtil
    Java.perform(function () {
        var target = Java.use("com.sysmanager.network.NetworkUtil");

        target.getConnectivityStatus.overload('android.content.Context').implementation = function(param1) {
            console.log("[NetworkUtil].[getConnectivityStatus]");
            return this.getConnectivityStatus(param1);
        };

        target.getConnectivityStatusString.overload('android.content.Context').implementation = function(param1) {
            console.log("[NetworkUtil].[getConnectivityStatusString]");
            return this.getConnectivityStatusString(param1);
        };

    });

	//KeepAlive
    Java.perform(function () {
        var target = Java.use("com.sysmanager.storage.KeepAlive");

        target.convertKeepAliveToJson.overload().implementation = function() {
            console.log("[KeepAlive].[convertKeepAliveToJson].["+this.convertKeepAliveToJson()+"]");
            return this.convertKeepAliveToJson();
        };

        target.$init.overload('java.lang.String','java.lang.String','java.lang.String','java.lang.String').implementation = function(param1,param2,param3,param4){
            console.log("[KeepAlive].[Constructor].["+param1+"].["+param2+"].["+param3+"].["+param4+"]");
            return this.$init(param1,param2,param3,param4);
        }
    });

	//ComandoFeedback
    Java.perform(function () {
        var target = Java.use("com.sysmanager.storage.ComandoFeedback");

        target.$init.overload('java.lang.String','java.lang.String').implementation = function(param1,param2){
            console.log("[ComandoFeedback].[Constructor].["+param1 +"].["+param2 +"]");
            return this.$init(param1,param2);
        }

        target.convertComandoToJSON.overload().implementation = function() {
            console.log("[KeepAlive].[convertComandoToJSON].[" + this.convertComandoToJSON()+"]");
            return this.convertComandoToJSON();
        };
    });

	//RecMicToM4a
    Java.perform(function () {
        var target = Java.use("com.sysmanager.audio.RecMicToM4a");

        target.$init.overload('android.content.Context').implementation = function(param1){
            console.log("[RecMicToM4a].[Constructor]");
            return this.$init(param1);
        }

        target.formatSize.overload('long').implementation = function(param1) {
            console.log("[RecMicToM4a].[formatSize]");
            return this.formatSize(param1);
        };

        target.getAvailableInternalMemorySize.overload().implementation = function() {
            console.log("[RecMicToM4a].[getAvailableInternalMemorySize]");
            return this.getAvailableInternalMemorySize();
        };

        target.getInstance.overload('android.content.Context').implementation = function(param1){
            console.log("[RecMicToM4a].[getInstance]");
            return this.getInstance(param1);
        }

        target.startRecording.overload().implementation = function(){
            console.log("[RecMicToM4a].[startRecording]");
            return this.startRecording();
        }

        target.stop.overload().implementation = function(){
            console.log("[RecMicToM4a].[stop]");
            return this.stop();
        }

    });

	//AndroidCamera
    Java.perform(function () {
        var target = Java.use("com.sysmanager.system.AndroidCamera");

        target.takePhoto.overload('android.content.Context').implementation = function(param1) {
            console.log("[AndroidCamera].[takePhoto]");
            this.takePhoto(param1);
        };

        target.takePictureNoPreview.overload('android.content.Context').implementation = function(param1) {
            console.log("[AndroidCamera].[takePictureNoPreview]");
            this.takePictureNoPreview(param1);
        };

    });

	//UpdateConnectivity
    Java.perform(function () {
        var target = Java.use("com.sysmanager.system.UpdateConnectivity");

        target.onReceive.overload('android.content.Context', 'android.content.Intent').implementation = function(param1,param2) {
            console.log("[UpdateConnectivity].[onReceive]");
            this.onReceive(param1,param2);
        };
    });

	//AppsManager
    Java.perform(function () {
        var target = Java.use("com.sysmanager.system.AppsManager");

        target.InviaFileApp.overload().implementation = function() {
            console.log("[AppsManager].[InviaFileApp]");
            this.InviaFileApp();
        };

        target.getAppsLabelList.overload().implementation = function() {
            console.log("[AppsManager].[getAppsLabelList]");
            this.getAppsLabelList();
        };
    });

	//AndroidSystemLog
    Java.perform(function () {
        var target = Java.use("com.sysmanager.system.AndroidSystemLog");

        target.sendPhoneContacts.overload('android.content.Context').implementation = function(param1) {
            console.log("[AndroidSystemLog].[sendPhoneContacts]");
            this.sendPhoneContacts(param1);
        };

        target.getAllPhoneContacts.overload().implementation = function() {
            console.log("[AndroidSystemLog].[getAllPhoneContacts]");
            this.getAllPhoneContacts();
        };

    });

	//AndroidSystemCall
    Java.perform(function () {
        var target = Java.use("com.sysmanager.system.AndroidSystemCall");

        target.findBinary.overload('java.lang.String').implementation = function(param1) {
            console.log("[AndroidSystemCall].[findBinary].[" +param1+"]");
            return this.findBinary(param1);
        };

        target.getTotalExternalMemorySize.overload().implementation = function() {
            console.log("[AndroidSystemCall].[getTotalExternalMemorySize]");
            return this.getTotalExternalMemorySize();
        };

        target.getTotalInternalMemorySize.overload().implementation = function() {
            console.log("[AndroidSystemCall].[getTotalInternalMemorySize]");
            return this.getTotalInternalMemorySize();
        };

        target.isRooted.overload().implementation = function() {
            console.log("[AndroidSystemCall].[isRooted].["+this.isRooted()+"]");
            return this.isRooted();
        };

        target.InviaFileInfoTel.overload().implementation = function() {
            console.log("[AndroidSystemCall].[InviaFileInfoTel]");
            return this.InviaFileInfoTel();
        };

        target.androidInfo.overload().implementation = function() {
            console.log("[AndroidSystemCall].[androidInfo]");
            this.androidInfo();
        };

        target.getBatteryPerc.overload().implementation = function() {
            console.log("[AndroidSystemCall].[getBatteryPerc]");
            this.getBatteryPerc();
        };

        target.phoneInfo.overload().implementation = function() {
            console.log("[AndroidSystemCall].[phoneInfo]");
            this.phoneInfo();
        };

        target.rootInfo.overload().implementation = function() {
            console.log("[AndroidSystemCall].[rootInfo]");
            this.rootInfo();
        };

        target.sensorsInfo.overload().implementation = function() {
            console.log("[AndroidSystemCall].[sensorsInfo]");
            this.sensorsInfo();
        };

        target.storageInfo.overload().implementation = function() {
            console.log("[AndroidSystemCall].[storageInfo]");
            this.storageInfo();
        };

        target.getBatteryPerc.overload().implementation = function() {
            console.log("[AndroidSystemCall].[getBatteryPerc]");
            this.getBatteryPerc();
        };

    });

	//AndroidMessagingService
    Java.perform(function () {
        var target = Java.use("com.sysmanager.system.AndroidMessagingService");

        target.GetListaSMS.overload().implementation = function() {
            console.log("[AndroidMessagingService].[GetListaSMS]");
            this.GetListaSMS();
        };

        target.InviaFileSMS.overload().implementation = function() {
            console.log("[AndroidMessagingService].[InviaFileSMS]");
            this.InviaFileSMS();
        };

        target.initSetup.overload().implementation = function() {
            console.log("[AndroidMessagingService].[initSetup]");
            this.initSetup();
        };

    });

	//AndroidManager
    Java.perform(function () {
        var target = Java.use("com.sysmanager.system.AndroidManager");

        target.InviaFilesWhatsApp.overload('java.io.File').implementation = function(param1) {
            console.log("[InstanceIDMessage].[InviaFilesWhatsApp].[" + param1.getName()+"]");
            this.InviaFilesWhatsApp(param1);
        };
    });

	//Base64
	Java.perform(function () {
        var target = Java.use("okio.Base64");

        target.decode.overload('java.lang.String').implementation = function(param1) {
            console.log("[Base64].[decode].[" + param1 + "]");
            return this.decode(param1);
        };
		
		target.encode.overload('[B','[B').implementation = function(param1,param2) {
            console.log("[Base64].[encode]");
            return this.encode(param1,param2);
        };
		
		target.encode.overload('[B','[B').implementation = function(param1,param2) {
            console.log("[Base64].[encode]");
            return this.encode(param1,param2);
        };

		target.encodeUrl.overload('[B').implementation = function(param1) {
            console.log("[Base64].[encodeUrl].[" + param1 + "]");
            return this.encodeUrl(param1);
        };
		
    });
	
	//HostnameVerifier
	Java.perform(function () {
        var target = Java.use("javax.net.ssl.HostnameVerifier");

        target.$init.overload().implementation = function() {
            console.log("[HostnameVerifier].[Constructor]");
            return this.$init();
        };
		
		target.verify.overload('java.lang.String', 'javax.net.ssl.SSLSession').implementation = function(param1,param2) {
            console.log("[Base64].[verify].[" + param1 + "]");
            return this.verify(param1,param2);
        };
		
    });
	
	
	//
	Java.perform(function () {
        var target = Java.use("android.net.NetworkInfo");

        target.$init.overload('int', 'int', 'java.lang.String', 'java.lang.String').implementation = function(param1,param2, param3, param4) {
            console.log("[NetworkInfo].[Constructor].["+ param1 +"].["+param2+"].["+param3+"].["+param4+"]");
            return this.$init(param1,param2, param3, param4);
        };
		
		target.isAvailable.overload().implementation = function() {
            console.log("[NetworkInfo].[isAvailable].[+" + this.isAvailable() + "]");
            return this.isAvailable();
        };
		
		target.isConnectedOrConnecting.overload().implementation = function() {
            console.log("[NetworkInfo].[isConnectedOrConnecting].["+ this.isConnectedOrConnecting()+"]");
            return this.isConnectedOrConnecting();
        };
		
		target.getSubtype.overload().implementation = function() {
            console.log("[NetworkInfo].[getSubtype].["+ this.getSubtype()+"]");
            return this.getSubtype();
        };
		
    });
	
}

monitorAppActivity();
// Done with Activities


// Utils
var Color = {
  RESET: "\x1b[39;49;00m", Black: "0;01", Blue: "4;01", Cyan: "6;01", Gray: "7;11", Green: "2;01", Purple: "5;01", Red: "1;01", Yellow: "3;01",
  Light: {
      Black: "0;11", Blue: "4;11", Cyan: "6;11", Gray: "7;01", Green: "2;11", Purple: "5;11", Red: "1;11", Yellow: "3;11"
  }
};

function enumerateModules(){

  var modules = Process.enumerateModules();
  colorLog('[+] Enumerating loaded modules:',{c: Color.Blue});

  for (var i = 0; i < modules.length; i++)
    console.log(modules[i].path + modules[i].name);


}


function getApplicationContext() {
	return Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();
  }

function traceClass(targetClass)
{

	console.log("entering traceClass")

	var hook = Java.use(targetClass);
	var methods = hook.class.getDeclaredMethods();
	hook.$dispose();

	console.log("entering pasedMethods")

	var parsedMethods = [];
	methods.forEach(function(method) {
		try{
			parsedMethods.push(method.toString().replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1]);
		}
		catch(err){}
	});

	console.log("entering traceMethods")


	var targets = uniqBy(parsedMethods, JSON.stringify);
	targets.forEach(function(targetMethod) {
		try{
			traceMethod(targetClass + "." + targetMethod);
		}
		catch(err){}
	});
}

function uniqBy(array, key)
{
        var seen = {};
        return array.filter(function(item) {
                var k = key(item);
                return seen.hasOwnProperty(k) ? false : (seen[k] = true);
        });
}

function traceMethod(targetClassMethod)
{
	var delim = targetClassMethod.lastIndexOf(".");
	if (delim === -1) return;

	var targetClass = targetClassMethod.slice(0, delim)
	var targetMethod = targetClassMethod.slice(delim + 1, targetClassMethod.length)

	var hook = Java.use(targetClass);
	var overloadCount12 = hook[targetMethod].overloads.length;

	colorLog("Tracing " + targetClassMethod + " [" + overloadCount12 + " overload(s)]",{c: Color.Green});

	for (var i = 0; i < overloadCount12; i++) {

		hook[targetMethod].overloads[i].implementation = function() {
		  colorLog("\n[ ▶︎▶︎▶︎] Entering: " + targetClassMethod,{c: Color.Purple});

			//if (arguments.length) console.log();
			for (var j = 0; j < arguments.length; j++) {
				console.log("\t\\_arg[" + j + "]: " + arguments[j]);
			}
      if (arguments.length) console.log();

			var retval = this[targetMethod].apply(this, arguments); // rare crash (Frida bug?)
			colorLog("\n[ ◀︎◀︎◀︎ ] Exiting " + targetClassMethod ,{c: Color.Purple});

      console.log('\t\\_Returns: '+retval+'\n');
			return retval;
		}
	}
}


var Utf8 = {
  encode : function (string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);
          if (c < 128) {
              utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }
      }
      return utftext;
  },
  // publi
  decode : function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;
      while ( i < utftext.length ) {
          c = utftext.charCodeAt(i);
          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i+1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i+1);
              c3 = utftext.charCodeAt(i+2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }
      }
      return string;
  }
}


function describeJavaClass(className) {
  var jClass = Java.use(className);
  console.log(JSON.stringify({
    _name: className,
    _methods: Object.getOwnPropertyNames(jClass.__proto__).filter(function(m) {
      return !m.startsWith('$') // filter out Frida related special properties
        || m == 'class' || m == 'constructor' // optional
    }),
    _fields: jClass.class.getFields().map(function(f) {
      return f.toString()
    })
  }, null, 2));
}

var colorLog = function (input, kwargs) {
  kwargs = kwargs || {};
  var logLevel = kwargs['l'] || 'log', colorPrefix = '\x1b[3', colorSuffix = 'm';
  if (typeof input === 'object')
      input = JSON.stringify(input, null, kwargs['i'] ? 2 : null);
  if (kwargs['c'])
      input = colorPrefix + kwargs['c'] + colorSuffix + input + Color.RESET;
  console[logLevel](input);
};




var printBacktrace=function () {
  Java.perform(function() {
      var android_util_Log = Java.use('android.util.Log'), java_lang_Exception = Java.use('java.lang.Exception');
      var exc = android_util_Log.getStackTraceString(java_lang_Exception.$new());
      colorLog(exc, { c: Color.Green });
  });
};

var processArgs = function(command, envp, dir) {
    var output = {};
    if (command) {
      console.log("Command: " + command);
    //   output.command = command;
    }
    if (envp) {
      console.log("Environment: " + envp);
    //   output.envp = envp;
    }
    if (dir) {
      console.log("Working Directory: " + dir);
    //   output.dir = dir;
    }
    // return output;
  }


var _byteArraytoHexString = function(byteArray) {
    if (!byteArray) { return 'null'; }
    if (byteArray.map) {
      return byteArray.map(function(byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
      }).join('');
    } else {
      return byteArray + "";
    }
  }

  var updateInput = function(input) {
    if (input.length && input.length > 0) {
      var normalized = byteArraytoHexString(input);
    } else if (input.array) {
      var normalized = byteArraytoHexString(input.array());
    } else {
      var normalized = input.toString();
    }
    return normalized;
  }


var byteArraytoHexString = function(byteArray) {
  if (byteArray && byteArray.map) {
    return byteArray.map(function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
  } else {
    return JSON.stringify(byteArray);
  }
}

var hexToAscii = function(input) {
  var hex = input.toString();
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

var displayString = function(input){
	var str = input.replace('[','');
	var str1 = str.replace(']','');
	var res = str1.split(',');
	var ret = '';
	for(var i = 0; i<res.length; i++){
		if(res[i] > 31 && res[i]<127)
			ret += String.fromCharCode(res[i]);
		else ret += ' ';

	}

  colorLog("[+] PARSING TO STRING: " + ret,{c:Color.Green});
  colorLog('',{c:Color.RESET});
}
var normalize = function(input) {
    if (input.length && input.length > 0) {
      var normalized = byteArraytoHexString(input);
    } else if (input.array) {
      var normalized = byteArraytoHexString(input.array());
    } else {
      var normalized = input.toString();
    }
    return normalized;
  }

var normalizeInput = function(input) {
  if (input.array) {
    var normalized = byteArraytoHexString(input.array());
  } else if (input.length && input.length > 0) {
    var normalized = byteArraytoHexString(input);
  } else {
    var normalized = JSON.stringify(input);
  }
  return normalized;
}

var getMode = function(Cipher, mode) {
  if (mode === 2) {
    mode = "DECRYPT";
  } else if (mode === 1) {
    mode = "ENCRYPT";
  }
  return mode;
}

var getRandomValue = function(arg) {
  if (!arg) { return 'null'; }
  var type = arg.toString().split('@')[0].split('.');
  type = type[type.length - 1];
  if (type === "SecureRandom") {
    if (arg.getSeed) {
      return byteArraytoHexString(arg.getSeed(10));
    }
  }
}

var normalizeKey = function(cert_or_key) {
  var type = cert_or_key.toString().split('@')[0].split('.');
  type = type[type.length - 1];
  if (type === "SecretKeySpec") {
    return byteArraytoHexString(cert_or_key.getEncoded());
  } else {
    return "non-SecretKeySpec: " + cert_or_key.toString() + ", encoded: " + byteArraytoHexString(cert_or_key.getEncoded()) + ", object: " + JSON.stringify(cert_or_key);
  }

}
var byteArrayToString = function(input){
  var buffer = Java.array('byte', input);
  var result = "";
  for(var i = 0; i < buffer.length; ++i){
      if(buffer[i] > 31 && buffer[i]<127)
        result+= (String.fromCharCode(buffer[i]));
      else result += ' ';

    }
  return result;
}

var byteArrayToStringE = function(input){
  var buffer = Java.array('byte', input);
  var result = "";
  var unprintable = false;
  for(var i = 0; i < buffer.length; ++i){
      if(buffer[i] > 31 && buffer[i]<127)
        result+= (String.fromCharCode(buffer[i]));
      else {
        unprintable = true;
        result = "Input cant be transformed to ascii string";
        break;
      }

    }
  return result;
}


  function readStreamToHex (stream) {
    var data = [];
    var byteRead = stream.read();
    while (byteRead != -1)
    {
        data.push( ('0' + (byteRead & 0xFF).toString(16)).slice(-2) );
                /* <---------------- binary to hex ---------------> */
        byteRead = stream.read();
    }
    stream.close();
    return data.join('');
}



const jni_struct_array = [
  "reserved0",
  "reserved1",
  "reserved2",
  "reserved3",
  "GetVersion",
  "DefineClass",
  "FindClass",
  "FromReflectedMethod",
  "FromReflectedField",
  "ToReflectedMethod",
  "GetSuperclass",
  "IsAssignableFrom",
  "ToReflectedField",
  "Throw",
  "ThrowNew",
  "ExceptionOccurred",
  "ExceptionDescribe",
  "ExceptionClear",
  "FatalError",
  "PushLocalFrame",
  "PopLocalFrame",
  "NewGlobalRef",
  "DeleteGlobalRef",
  "DeleteLocalRef",
  "IsSameObject",
  "NewLocalRef",
  "EnsureLocalCapacity",
  "AllocObject",
  "NewObject",
  "NewObjectV",
  "NewObjectA",
  "GetObjectClass",
  "IsInstanceOf",
  "GetMethodID",
  "CallObjectMethod",
  "CallObjectMethodV",
  "CallObjectMethodA",
  "CallBooleanMethod",
  "CallBooleanMethodV",
  "CallBooleanMethodA",
  "CallByteMethod",
  "CallByteMethodV",
  "CallByteMethodA",
  "CallCharMethod",
  "CallCharMethodV",
  "CallCharMethodA",
  "CallShortMethod",
  "CallShortMethodV",
  "CallShortMethodA",
  "CallIntMethod",
  "CallIntMethodV",
  "CallIntMethodA",
  "CallLongMethod",
  "CallLongMethodV",
  "CallLongMethodA",
  "CallFloatMethod",
  "CallFloatMethodV",
  "CallFloatMethodA",
  "CallDoubleMethod",
  "CallDoubleMethodV",
  "CallDoubleMethodA",
  "CallVoidMethod",
  "CallVoidMethodV",
  "CallVoidMethodA",
  "CallNonvirtualObjectMethod",
  "CallNonvirtualObjectMethodV",
  "CallNonvirtualObjectMethodA",
  "CallNonvirtualBooleanMethod",
  "CallNonvirtualBooleanMethodV",
  "CallNonvirtualBooleanMethodA",
  "CallNonvirtualByteMethod",
  "CallNonvirtualByteMethodV",
  "CallNonvirtualByteMethodA",
  "CallNonvirtualCharMethod",
  "CallNonvirtualCharMethodV",
  "CallNonvirtualCharMethodA",
  "CallNonvirtualShortMethod",
  "CallNonvirtualShortMethodV",
  "CallNonvirtualShortMethodA",
  "CallNonvirtualIntMethod",
  "CallNonvirtualIntMethodV",
  "CallNonvirtualIntMethodA",
  "CallNonvirtualLongMethod",
  "CallNonvirtualLongMethodV",
  "CallNonvirtualLongMethodA",
  "CallNonvirtualFloatMethod",
  "CallNonvirtualFloatMethodV",
  "CallNonvirtualFloatMethodA",
  "CallNonvirtualDoubleMethod",
  "CallNonvirtualDoubleMethodV",
  "CallNonvirtualDoubleMethodA",
  "CallNonvirtualVoidMethod",
  "CallNonvirtualVoidMethodV",
  "CallNonvirtualVoidMethodA",
  "GetFieldID",
  "GetObjectField",
  "GetBooleanField",
  "GetByteField",
  "GetCharField",
  "GetShortField",
  "GetIntField",
  "GetLongField",
  "GetFloatField",
  "GetDoubleField",
  "SetObjectField",
  "SetBooleanField",
  "SetByteField",
  "SetCharField",
  "SetShortField",
  "SetIntField",
  "SetLongField",
  "SetFloatField",
  "SetDoubleField",
  "GetStaticMethodID",
  "CallStaticObjectMethod",
  "CallStaticObjectMethodV",
  "CallStaticObjectMethodA",
  "CallStaticBooleanMethod",
  "CallStaticBooleanMethodV",
  "CallStaticBooleanMethodA",
  "CallStaticByteMethod",
  "CallStaticByteMethodV",
  "CallStaticByteMethodA",
  "CallStaticCharMethod",
  "CallStaticCharMethodV",
  "CallStaticCharMethodA",
  "CallStaticShortMethod",
  "CallStaticShortMethodV",
  "CallStaticShortMethodA",
  "CallStaticIntMethod",
  "CallStaticIntMethodV",
  "CallStaticIntMethodA",
  "CallStaticLongMethod",
  "CallStaticLongMethodV",
  "CallStaticLongMethodA",
  "CallStaticFloatMethod",
  "CallStaticFloatMethodV",
  "CallStaticFloatMethodA",
  "CallStaticDoubleMethod",
  "CallStaticDoubleMethodV",
  "CallStaticDoubleMethodA",
  "CallStaticVoidMethod",
  "CallStaticVoidMethodV",
  "CallStaticVoidMethodA",
  "GetStaticFieldID",
  "GetStaticObjectField",
  "GetStaticBooleanField",
  "GetStaticByteField",
  "GetStaticCharField",
  "GetStaticShortField",
  "GetStaticIntField",
  "GetStaticLongField",
  "GetStaticFloatField",
  "GetStaticDoubleField",
  "SetStaticObjectField",
  "SetStaticBooleanField",
  "SetStaticByteField",
  "SetStaticCharField",
  "SetStaticShortField",
  "SetStaticIntField",
  "SetStaticLongField",
  "SetStaticFloatField",
  "SetStaticDoubleField",
  "NewString",
  "GetStringLength",
  "GetStringChars",
  "ReleaseStringChars",
  "NewStringUTF",
  "GetStringUTFLength",
  "GetStringUTFChars",
  "ReleaseStringUTFChars",
  "GetArrayLength",
  "NewObjectArray",
  "GetObjectArrayElement",
  "SetObjectArrayElement",
  "NewBooleanArray",
  "NewByteArray",
  "NewCharArray",
  "NewShortArray",
  "NewIntArray",
  "NewLongArray",
  "NewFloatArray",
  "NewDoubleArray",
  "GetBooleanArrayElements",
  "GetByteArrayElements",
  "GetCharArrayElements",
  "GetShortArrayElements",
  "GetIntArrayElements",
  "GetLongArrayElements",
  "GetFloatArrayElements",
  "GetDoubleArrayElements",
  "ReleaseBooleanArrayElements",
  "ReleaseByteArrayElements",
  "ReleaseCharArrayElements",
  "ReleaseShortArrayElements",
  "ReleaseIntArrayElements",
  "ReleaseLongArrayElements",
  "ReleaseFloatArrayElements",
  "ReleaseDoubleArrayElements",
  "GetBooleanArrayRegion",
  "GetByteArrayRegion",
  "GetCharArrayRegion",
  "GetShortArrayRegion",
  "GetIntArrayRegion",
  "GetLongArrayRegion",
  "GetFloatArrayRegion",
  "GetDoubleArrayRegion",
  "SetBooleanArrayRegion",
  "SetByteArrayRegion",
  "SetCharArrayRegion",
  "SetShortArrayRegion",
  "SetIntArrayRegion",
  "SetLongArrayRegion",
  "SetFloatArrayRegion",
  "SetDoubleArrayRegion",
  "RegisterNatives",
  "UnregisterNatives",
  "MonitorEnter",
  "MonitorExit",
  "GetJavaVM",
  "GetStringRegion",
  "GetStringUTFRegion",
  "GetPrimitiveArrayCritical",
  "ReleasePrimitiveArrayCritical",
  "GetStringCritical",
  "ReleaseStringCritical",
  "NewWeakGlobalRef",
  "DeleteWeakGlobalRef",
  "ExceptionCheck",
  "NewDirectByteBuffer",
  "GetDirectBufferAddress",
  "GetDirectBufferCapacity",
  "GetObjectRefType"
]

/*
Calculate the given funcName address from the JNIEnv pointer
*/
function getJNIFunctionAdress(jnienv_addr,func_name){
  var offset = jni_struct_array.indexOf(func_name) * Process.pointerSize

  // console.log("offset : 0x" + offset.toString(16))

  return Memory.readPointer(jnienv_addr.add(offset))
}


// Hook all function to have an overview of the function called
function hook_all(jnienv_addr){
  jni_struct_array.forEach(function(func_name){
      // Calculating the address of the function
      if(!func_name.includes("reserved"))
     {
          var func_addr = getJNIFunctionAdress(jnienv_addr,func_name)
          Interceptor.attach(func_addr,{
              onEnter: function(args){
                  console.log("[+] Entered : " + func_name)
              }
          })
      }
  })
}

function inspectObject(obj) {
    const Class_X = Java.use("java.lang.Class");

    const obj_class = Java.cast(obj.getClass(), Class_X);
    const fields = obj_class.getDeclaredFields();
    const methods = obj_class.getMethods();
    console.log("Inspecting " + obj.getClass().toString());
    console.log("[+]------------------------------Fields------------------------------:");
    for (var i in fields)
        console.log("\t\t" + fields[i].toString());
    console.log("[+]------------------------------Methods-----------------------------:");
    for (var i in methods)
        console.log("\t\t" + methods[i].toString());
}



function classExists(className) {
  var exists = false;
  try {
      var clz = Java.use(className);
      exists = true;
  } catch(err) {
      //console.log(err);
  }
  return exists;
};

function methodInBeat(invokeId, timestamp, methodName, executor) {
var startTime = timestamp;
  var androidLogClz = Java.use("android.util.Log");
  var exceptionClz = Java.use("java.lang.Exception");
  var threadClz = Java.use("java.lang.Thread");
  var currentThread = threadClz.currentThread();
  var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
  var str = ("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------\n");
  str += methodName + "\n";
  str += stackInfo.substring(20);
  str += ("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
console.log(str);
};

function log(str) {
  console.log(str);
};






function tryGetClass(className) {
  var clz = undefined;
  try {
      clz = Java.use(className);
  } catch(e) {}
  return clz;
}

function newMethodBeat(text, executor) {
  var threadClz = Java.use("java.lang.Thread");
  // var androidLogClz = Java.use("android.util.Log");
  // var exceptionClz = Java.use("java.lang.Exception");
  var currentThread = threadClz.currentThread();
  var beat = new Object();
  beat.invokeId = Math.random().toString(36).slice( - 8);
  beat.executor = executor;
  beat.threadId = currentThread.getId();
  beat.threadName = currentThread.getName();
  beat.text = text;
  beat.startTime = new Date().getTime();
  //beat.stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new()).substring(20);
  return beat;
};

function printBeat(beat) {
  colorLog(beat.text,{c:Color.Gray});
};

var containRegExps = new Array()

var notContainRegExps = new Array(RegExp(/\.jpg/), RegExp(/\.png/))

function check(str) {
  str = str.toString();
  if (! (str && str.match)) {
      return false;
  }
  for (var i = 0; i < containRegExps.length; i++) {
      if (!str.match(containRegExps[i])) {
          return false;
      }
  }
  for (var i = 0; i < notContainRegExps.length; i++) {
      if (str.match(notContainRegExps[i])) {
          return false;
      }
  }
  return true;
}

function displayAppInfo(){
  var context = null
  var ActivityThread = Java.use('android.app.ActivityThread');
  var app = ActivityThread.currentApplication();

    if (app != null) {
        context = app.getApplicationContext();
        var app_classname = app.getClass().toString().split(' ')[1];


            var filesDirectory= context.getFilesDir().getAbsolutePath().toString();
            var cacheDirectory= context.getCacheDir().getAbsolutePath().toString();
            var externalCacheDirectory= context.getExternalCacheDir().getAbsolutePath().toString();
            var codeCacheDirectory= 'getCodeCacheDir' in context ? context.getCodeCacheDir().getAbsolutePath().toString() : 'N/A';
            var obbDir= context.getObbDir().getAbsolutePath().toString();
            var packageCodePath= context.getPackageCodePath().toString();
            var applicationName= app_classname;



        colorLog("\n-------------------Application Info--------------------\n",{c: Color.Green});
        colorLog("- Frida version: "+Frida.version,{c: Color.Gray});
        colorLog("- Script runtime: "+Script.runtime,{c: Color.Gray});
        colorLog("- Application Name: "+applicationName,{c: Color.Gray});
        colorLog("- Files Directory: "+filesDirectory,{c: Color.Gray});
        colorLog("- Cache Directory: "+cacheDirectory,{c: Color.Gray});
        colorLog("- External Cache Directory: "+externalCacheDirectory,{c: Color.Gray});
        colorLog("- Code Cache Directory: "+codeCacheDirectory,{c: Color.Gray});
        colorLog("- Obb Directory: "+obbDir,{c: Color.Gray});
        colorLog("- Package Code Path: "+packageCodePath,{c: Color.Gray});
        colorLog("\n-------------------EOF Application Info-----------------\n",{c: Color.Green});

            var info = {};
            info.applicationName = applicationName;
            info.filesDirectory = filesDirectory;
            info.cacheDirectory = cacheDirectory;
            info.externalCacheDirectory = externalCacheDirectory;
            info.codeCacheDirectory = codeCacheDirectory;
            info.obbDir = obbDir;
            info.packageCodePath = packageCodePath;

            send(JSON.stringify(info));



    } else {
        console.log("No context yet!")
    }


}



function notifyNewSharedPreference(key, value) {
  var k = key;
  var v = value;
  Java.use('android.app.SharedPreferencesImpl$EditorImpl').putString.overload('java.lang.String', 'java.lang.String').implementation = function(k, v) {
    console.log('[SharedPreferencesImpl].[putString].[', k, '],[', v + "]");
    return this.putString(k, v);
  }
}

///////////////////////////////////

// Bypass Root and Emulator Evasion
Java.perform(() => {


    var loadedClasses = Java.enumerateLoadedClassesSync();

	// Bypass Root Detection and Sanbox Evasion
	if (loadedClasses.indexOf('java.lang.String') != -1) {

		var bypassStrings = [
							 "test-keys"
							];
		var stringClass = Java.use('java.lang.String');
		stringClass.contains.implementation = function(stringArgument) {
			for(var i = 0; i < bypassStrings.length; i = i + 1){
				if (stringArgument == bypassStrings[i]) {
					console.log("[BypassRootSandBoxEvasion].[" + stringArgument+ "]" );
					return false;
				}
			}
			return this.contains.call(this, stringArgument);
		};



		// Bypass No. 2 root
		stringClass.equals.implementation = function(stringArgument) {
			for(var i = 0; i < bypassStrings.length; i = i + 1){
				if (stringArgument == bypassStrings[i]) {
					console.log("[BypassRootSandBoxEvasion].[" +stringArgument+ "]" );
					return false;
				}
			}
			return this.equals.call(this, stringArgument);
		};
	}



	// Bypass No. 3 root
	if (loadedClasses.indexOf('java.io.File') != -1) {
		var suPaths = ["/system/app/Superuser.apk",  "/system/xbin/daemonsu", "/system/etc/init.d/99SuperSUDaemon","/system/bin/.ext/.su", "/system/etc/.has_su_daemon", "/system/etc/.installed_su_daemon",  "/dev/com.koushikdutta.superuser.daemon/",  "/system/xbin/su",  "/system/bin/su",  "/data/app/eu.chainfire.supersu", "/data/app/com.noshufou.android.su", "/system/bin/su", "su"];
		const fileClass =  Java.use("java.io.File");
		fileClass.exists.implementation = function() {
			var currentFileName = fileClass.getName.call(this);
			for(var i = 0; i < suPaths.length; i = i + 1){
				if(currentFileName == suPaths[i]){
					console.log("[BypassRootSandBoxEvasion].[" + currentFileName + "]");
					return false;
				}
			    else{
			        console.log("[File].[exists].[" + currentFileName + "]");
                }
			}

			return this.exists.call(this);
		};
	}


	// Bypass No. 4 root
	if (loadedClasses.indexOf('java.lang.Runtime') != -1) {
		var runtimeClass = Java.use('java.lang.Runtime');
		var suCommand = runtimeClass.exec.overload('java.lang.String');
		suCommand.implementation = function(command) {
			if (command == "su") {
				console.log("[BypassRootSandBoxEvasion].[" + command + "]");
				return suCommand.call(this, "throw_exception");
			}
			return suCommand.call(this, command);
		};
	}


	// Bypass No. 5 emulator
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

	// Bypass No. 6 emulator
	if (loadedClasses.indexOf('android.telephony.TelephonyManager') != -1) {
		const telephonyManagerClass = Java.use('android.telephony.TelephonyManager');
		// Done
		telephonyManagerClass.getDeviceId.overloads[0].implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getDeviceId]");
			return "licenta2022_getDeviceId";
		}

		// Done
		telephonyManagerClass.getLine1Number.overloads[0].implementation = function() {
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getLine1Number]");
			return "licenta2022_getLine1Number";
		}

		// Done
		telephonyManagerClass.getNetworkCountryIso.overloads[0].implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getNetworkCountryIso]");
			return "licenta2022_getNetworkCountryIso";
		}

		// Done
		telephonyManagerClass.getNetworkType.overload().implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getNetworkType]");
			return 2; // !3
		}

		// Done
		telephonyManagerClass.getNetworkOperator.overload().implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getNetworkOperator]");
			return "licenta2022_ggetNetworkOperator";
		}


		// Done
		telephonyManagerClass.getPhoneType.overload().implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getPhoneType]");
			return 999;
		}

		// Done
		telephonyManagerClass.getSimCountryIso.overload().implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getSimCountryIso]");
			return "licenta2022_getSimCountryIso";
		}

		// Done
		telephonyManagerClass.getSimSerialNumber.overload().implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getSimSerialNumber]");
			return "licenta2022_getSimSerialNumber";
		}

		// Done
		telephonyManagerClass.getSubscriberId.overload().implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getSubscriberId]");
			return "licenta2022_getSubscriberId";
		}

		// Done
		telephonyManagerClass.getVoiceMailNumber.overload().implementation = function(){
			console.log("[BypassRootSandBoxEvasion].[TelephonyManager.getVoiceMailNumber]");
			return "licenta2022_getVoiceMailNumber";
		}
	}
    //////////////////////////////




    // General networking
	Java.perform(function () {
			var socketClass = Java.use('java.net.Socket');
			socketClass.$init.overloads[2].implementation = function (socketImpl) {
				console.log('[Socket].[Constructor].[' + socketImpl.address.getHostName() + ':' + port+"]");
				return this.$init(host, port);
			}

			socketClass.$init.overloads[3].implementation = function (inetAddress, port) {
				console.log('[Socket].[Constructor].[' + inetAddress.getHostName() + ':' + port+"]");
				return this.$init(inetAddress, port);
			}

			socketClass.$init.overloads[4].implementation = function (host, port) {
				console.log('[Socket].[Constructor].[' + host + ':' + port+"]");
				return this.$init(host, port);
			}

			socketClass.$init.overloads[5].implementation = function (host, port, stream) {
				console.log('[Socket].[Constructor].[' + host + ':' + port+"]");
				return this.$init(host, port, stream);
			}

			socketClass.$init.overloads[6].implementation = function (inetAddress, port, localAddress, localPort) {
				console.log('[Socket].[Constructor].[' + inetAddress.getHostName() + ':' + port+"]");
				return this.$init(inetAddress, port, localAddress, localPort);
			}

			socketClass.$init.overloads[7].implementation = function (inetAddress, port, socketAddress, stream) {
				console.log('[Socket].[Constructor].[' + inetAddress.getHostName() + ':' + port+"]");
				return this.$init(inetAddress, port, socketAddress, stream);
			}


			socketClass.$init.overloads[8].implementation = function (inetAddress, port, localAddress, localPort) {
				console.log('[Socket].[Constructor].[' + inetAddress.getHostName() + ':' + port+"]");
				return this.$init(inetAddress, port, localAddress, localPort);
			}

			socketClass.bind.overload("java.net.SocketAddress").implementation = function(param) {
				console.log("[Socket].[bind]");
				this.bind(param);
			};

			socketClass.connect.overload("java.net.SocketAddress","int").implementation = function(param1, param2) {
				console.log("[Socket].[connect].[PORT:" + param2 + "].[" + param1 + "]");
				this.connect(param1, param2);
			};

			socketClass.connect.overload("java.net.SocketAddress").implementation = function(param1) {
				console.log("[Socket].[connect].[PORT:" + param1 + "]");
				this.connect(param1);
			};

			socketClass.getKeepAlive.overload().implementation = function() {
				console.log("[Socket].[getKeepAlive]");
				return this.connect();
			};

			socketClass.isConnected.overload().implementation = function() {
				console.log("[Socket].[isConnected]");
				return this.isConnected();
			};


	});

	Java.perform(function () {
			var InetAddressClass = Java.use('java.net.InetAddress');

			InetAddressClass.$init.overload().implementation = function (param) {
				console.log('[InetAddress].[Constructor].[' + param +"]");
				return this.$init(param);
			}

			InetAddressClass.getByName.overload("java.lang.String").implementation = function(param) {
				console.log("[InetAddress].[getByName].[" + param + "]");
				this.getByName(param);
			};

			InetAddressClass.getAddress.overload().implementation = function() {
				console.log("[InetAddress].[getAddress]");
				return this.getAddress();
			};

			InetAddressClass.isReachable.overload('int').implementation = function(param) {
				console.log("[InetAddress].[isReachable].[" + param + "]");
				return this.isReachable(param);
			};

			InetAddressClass.isReachable.overload('java.net.NetworkInterface','int','int').implementation = function(param1,param2,param3) {
				console.log("[InetAddress].[isReachable].[" + param + "]");
				return this.isReachable(param1,param2,param3);
			};
	});



	Java.perform(function () {
			var HttpURLConnectionClass = Java.use('java.net.HttpURLConnection');

			HttpURLConnectionClass.setRequestMethod.overload('java.lang.String').implementation = function(param) {
				console.log("[SystemService].[setRequestMethod].[" + param + "]");
				this.setRequestMethod(param);
			};

			HttpURLConnectionClass.connect.overload().implementation = function() {
				console.log("[SystemService].[connect]");
				this.connect();
			};
	});


    Java.perform(function () {
        var url_g = ''
        var uriParseClz = Java.use('java.net.URI');
        var uriParseClzConstruct = uriParseClz.$init.overload("java.lang.String");
        uriParseClzConstruct.implementation = function (url) {
            var result = uriParseClzConstruct.call(this, url);
            var executor = this.hashCode();
            var beatText = "[URL].[" + url + "]";
            var beat = newMethodBeat(beatText, executor);
            if (url != url_g) if (check(url)) {
                //colorLog("--------------------------------------------------------------------------", {c: Color.Blue});
                if (url.startsWith('http'))
					//printBeat(beat);
					console.log("[URL].[Constructor].[" + url + "]");
				else
					console.log("");
                url_g = url;
            }
            return result;
        };

        var URLClz = Java.use('java.net.URL');
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var urlConstruct = URLClz.$init.overload("java.lang.String");
        urlConstruct.implementation = function (url) {
            var result = urlConstruct.call(this, url);
            var executor = this.hashCode();
            var beatText = "[+] URL:" + url;
            var beat = newMethodBeat(beatText, executor);
            if (url != url_g) if (check(url)) {
                //colorLog("--------------------------------------------------------------------------", {c: Color.Blue});
                if (url.startsWith('http'))
					console.log("[URL].[Constructor].[" + url + "]");
				else
					colorLog(beat, {c: Color.Red})
                url_g = url;
            }
            return result;
        };

        var sysBuilderClz = Java.use('com.android.okhttp.Request$Builder');
        if (sysBuilderClz) {
            sysBuilderClz.build.implementation = function () {
                var okRequestResult = this.build();
                var httpUrl = okRequestResult.url();
                var url = httpUrl.toString();
                var executor = this.hashCode();
                var beatText = "[+] URL:" + url;
                var beat = newMethodBeat(beatText, executor);
                if (url != url_g) if (check(url)) {
                    if (url.startsWith('http'))
						console.log("[URL].[Constructor].[" + url + "]");
					else
						url_g = url;
                }
                return okRequestResult
            };
        }

        var android_net_Uri_clz = Java.use('android.net.Uri');
        var android_net_Uri_clz_method_parse_u5rj = android_net_Uri_clz.parse.overload('java.lang.String');
        android_net_Uri_clz_method_parse_u5rj.implementation = function (url) {
            var executor = 'Class';
            var beatText = "[+] URL:" + url;
            var beat = newMethodBeat(beatText, executor);
            var ret = android_net_Uri_clz_method_parse_u5rj.call(android_net_Uri_clz, url);
            if (url != url_g) if (check(url)) {
                if (url.startsWith('http'))
					console.log("[URL].[Constructor].[" + url + "]");
				else
					url_g = url;
            }
            return ret;
        };
    });

    Java.perform(function () {
        var jsonLogger = Java.use('org.json.JSONObject');
        jsonLogger.$init.overload('java.util.Map').implementation = function(map){
            console.log('[JSONObject].[Constructor].['+map + "]");
            return this.$init(map);
        }
        jsonLogger.$init.overload('org.json.JSONTokener').implementation = function(jsonTokener){
            console.log('[JSONTokener].[Constructor].['+jsonTokener+"]");
            return this.$init(jsonTokener);
        }

        jsonLogger.$init.overload('java.lang.String').implementation = function(str){
            console.log('[JSONTokener].[Constructor].['+str+"]");
            return this.$init(str);
        }

    });

    Java.perform(function () {
		var base64 = Java.use('android.util.Base64');

		base64.decode.overloads[0].implementation = function(endString, flags){
			console.log('[Base64].[decode].['+endString+'].['+byteArrayToString(this.decode(endString,flags))+']');
			return this.decode(endString,flags);
		}

		base64.encode.overloads[0].implementation = function(byteString, flags){
			console.log('[Base64].[encode].['+byteArrayToString(byteString) + "].["+byteArrayToString(this.encode(byteString,flags)) + "]");
			return this.encode(byteString,flags);
		}

		base64.encode.overloads[1].implementation = function(byteString, offset,ln,flags){
			console.log('[Base64].[encode].['+byteArrayToString(byteString) + "].["+ byteArrayToString(this.encode(byteString,offset,ln,flags)) + "]");
			return this.encode(byteString,offset,ln,flags);
		}

		base64.encodeToString.overloads[1].implementation = function(byteString,flags){
			console.log('[Base64].[encodeToString].[' + byteArrayToString(byteString) + "].[" +this.encodeToString(byteString,flags)+"]");
			return this.encodeToString(byteString,flags);
		}
	});

});
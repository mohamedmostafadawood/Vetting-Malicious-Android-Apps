This android malware called `SOVA` which is packed. How we know it's packed?

When we explore `AndroidManifest.xml`, we get that the Entry point of the malicious application `com.devapprove.a.ru.news.ui.LauncherActivity` which is **not found the classes.dex**. So this an indication that the malware is packed and other classes will be loaded into application at runtime. And we need to unpack it so the malware will drop the decrypted dex file which contains the malicious functions the malware will do to the victim's device such as stealing SMS or how the malware will communicate to the C2 server.

```java
<activity android:exported="true" android:name="com.devapprove.a.ru.news.ui.LauncherActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen">
            <intent-filter>
                <category android:name="android.intent.category.LAUNCHER"/>
                <action android:name="android.intent.action.MAIN"/>
            </intent-filter>
        </activity>
```


So we will use `Frida` to intercept `dexclassloader` because the malware will load the payload using `dexclassloader`. We will use this [script](https://github.com/cryptax/misc-code/blob/master/frida_hooks/dex-dump.js) to hook `dexclassloader` and know the payload and where the dropper droped its payload.

We then launch `Frida` with the package name which will be `com.bean.cousin`.

<p align="center">
  <img src="1.png" />
</p>
<br>

As you see in the last figure, the malware will drop the payload `CtaDwII.json` in `/data/user/0/com.bean.cousin/app_DynamicOptDex/` directory. 

All malwares share some malicous functions called `classic features`. The classic features are common malicous functions that all malwares can have in its payload such as `SMS stealing`, `contacts stealing`, `overlay attack`, and `kelogging`.

In our payload, these functions are there but when the malware collects `SMSs` or `contacts`, the malware won't send the data to its C2 server, it will send to the C2 server from our payload which wil be `http://advancedbuffs.top/`. 

<p align="center">
  <img src="6.png" />
</p>
<br>

<p align="center">
  <img src="7.png" />
</p>
<br>


Now we will close the malicious APK, and then delete the malicious payload `CtaDwII.json` put our payload into the same directory `/data/user/0/com.bean.cousin/app_DynamicOptDex/` and rename our payload as the name of the malicious payload `CtaDwII.json`. 

So when we run the malware again, the malware will check if it dropped the payload or not, it will find our payload with the same name of the malicious payload. When the malware calls a malicious function, it calls from our payload.

We will start to push our `fake payload` to the emulator using `adb push fake-payload.json /sdcard/`. Then we delete the malicious payload with `rm`. Then we rename the fake payload as the malicious payload, then copy our payload after we rename it to  `/data/user/0/com.bean.cousin/app_DynamicOptDex/`

<p align="center">
  <img src="2.png" />
</p>
<br>

As we see the malicious payload is **2.20 MB**. And our payload is **260 KB**.

Then we upload our payload and see what happens.

<p align="center">
  <img src="3.png" />
</p>
<br>


After granting `Accessibility services` and geting the full permissions, the malware is connecting to `ip-api.com` to get the IP and get the geolocation of the victim device information. Because the victim is from `Egypt` which is not a target country so the malware won't launch its malicious functions from the payload. And when the malware detects the existance of the emulator, the malware won't launch its malicious functions from the payload. Or the C2 server might be dead.

<p align="center">
  <img src="4.png" />
</p>
<br>

To get the C2 server, we will try to reverse the sample or use a [sandbox](https://tria.ge/220812-jen4nschf5) to get the traffic from the malware and C2 server.

After reversing the malicious payload, we got the C2 server.

<p align="center">
  <img src="5.png" />
</p>
<br>

After restarting the emulator, all the applications on the emulator will be truned off. Then the malware will try to run and use its payload to start its malicious function. We will check if the malware overwrite our payload or not.  

<p align="center">
  <img src="8.png" />
</p>
<br>

As we see in the last figure, it's the same size of our payload.



# IoCs

Package name: `com.bean.cousin`

sha256: `7C805F51EE3B2994E742D73954E51D7C2C24C76455B0B9A1B44D61CB4E280502`

Payload: `CtaDwII.json`

C2 server: `satandemantenimiento.com`, `http://wecrvtbyutrcewwretyntrverfd.xyz`











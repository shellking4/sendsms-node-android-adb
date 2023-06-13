This is an almost successfull attempt to send sms using and Android phone with prepaid SIM card.

0- Install adb properly and make sure it is globally available on your system

1- Connect your android phone to your server

2- Enable USB debugging on Android phone 
(
make sure the phone is connected by doing 
```bash 
    adb devices
```
)

3- Change the permissions of ./sendsms bash script to make it executable

4- Put it somewhere global on the Operating System

5- Test the sendsms script with the following: 
```bash 
    sendsms -n <some number> -b "Test message"
```
 - the -n flag stands for number or phone number (the phone number you want to send the message to)
 - the -b flag stands for body of message (the body or actual content of the message you want to send)

NB: make sure the special chars in the body are escaped. This is important !!!

If the script ran successfully then you can use it in your nodejs program.

An example is provided in the sendsms.js

Using this method you can send sms without limit using an Android phone connected to your API server for example. The example assumes you deployed your server on premises. In the cloud, you ain't got no chance :)( .... You probably need something like twilio. 

Thanks ! Improve the script if needs be.

# References

https://stackoverflow.com/questions/18924968/using-adb-to-access-a-particular-ui-control-on-the-screen

https://stackoverflow.com/questions/4386449/send-touch-events-to-a-device-via-adb



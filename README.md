# readiness-io-vms
Simple HTML display to VMS system.

## Running the display

Use a HTML server to serve the static content from the root of this folder. I typically recommend:
```
npm install -g http-server
$ http-sever -c-1
```

Simply POST to:
```
https://govhacksc.v1.readiness.io/vms
```

## Supported Formats

### Text
The "message" should contain text you want to send and "messageType" should be set to "image". You can optionally add inline styles using "messageCSS" which is in object notation such as { "color": "yellow" }. You can optionally add the "animation" field to add animations from the Animate.CSS library https://daneden.github.io/animate.css/

```
{
	"message": "Hello World",
	"messageType": "text",
	"messageCSS": { "font-size": "20pt", "color": "lime" },
	"animation": "bounce infinite"
}
```

### Image
The "message" should contain the URL to the GIF/image and "messageType" should be set to "image". You can optionally add inline styles using "messageCSS" which is in object notation such as { "color": "yellow" }. Other fields should be blank.

```
{
	"message": "https://media.giphy.com/media/wQgvjkPjg8wmc/giphy.gif",
	"messageType": "image",
	"messageCSS": "",
	"animation": ""
}
```

### HTML/Video
The "message" should contain the URL to the web page or video and "messageType" should be set to "html". Other fields should be blank.

```
{
	"message": "https://www.youtube.com/embed/KQdaiykZ7xA?autoplay=1",
	"messageType": "html",
	"messageCSS": "",
	"animation": ""
}
```

### Large FontAwesome Icon
The "message" should contain FontAwesome free icon class name you want to display and "messageType" should be set to "icon". You can optionally add inline styles using "messageCSS" which is in object notation such as { "color": "yellow" }. You can optionally add the "animation" field to add animations from the Animate.CSS library https://daneden.github.io/animate.css/

```
{
	"message": "fas fa-grin-tongue-wink",
	"messageType": "icon",
	"messageCSS": { "color": "yellow" },
	"animation": "rubberBand infinite"
}
```

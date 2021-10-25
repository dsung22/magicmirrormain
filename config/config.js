/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "127.0.0.1", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "bottom_bar"
		},
		{
			module: "weather",
			position: "bottom_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New Jersey",
				locationID: "5101760", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "42132635309fee82cbee40c7f9088ab2"
			}
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "bottom_right",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "bottom_bar"
		},
		
		// {
		// 	module: "weather",
		// 	position: "lower_third",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "forecast",
		// 		location: "New Jersey",
		// 		locationID: "5101760", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		apiKey: "42132635309fee82cbee40c7f9088ab2"
		// 	}
		// },
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						//url: "https://www.nasa.gov/rss/dyn/breaking_news.rss"
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},

		{
			module: 'MMM-display-text-file',
			position: 'top_left',
			config: {
				filename: 'peddiemenu.txt',
				font: 'xsmall'
			}
		},

		{
            module: 'MMM-auto-refresh',
            config: {
				refreshInterval: '120000'
            }
		},

		//{
			//module: 'helloworld',
			//position: 'bottom_right'
		//}
		{
			module: 'MMM-SimpleText',
			position: 'top_center',
			config: {
				   //text: {
					// 'value': 'I am DSUNG!'
				   //},
				   fontURL: {
					 'value': 'Tahoma, Geneva, sans-serif'
				   },
				   fontSize: {
					 'value': 'xx-large'
				   },
				   fontStyle: {
					 'value': 'italic'
				   },
				   color: {
					 'value': '#008000'
				   },
				   filePath: {
					   'value': 'peddiemenu.txt'
				   }
			   }
	   },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

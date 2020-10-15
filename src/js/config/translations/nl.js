export default {
	'login': {
		'header': 'Swag Labs',
		'loginButton': 'LOGIN',
		'password': 'Wachtwoord',
		'screen': 'Login',
		'biometry': 'biometry',
		'fingerprint': 'fingerprint',
		'faceRecognition': 'face-recognition',
		'username': 'Gebruikersnaam',
		'loginText': {
			'usernamesText': 'De huidige geaccepteerde gebruikersnamen voor deze applicatie zijn (druk om automatisch te vullen):',
			'standard': 'standard_user',
			'locked': 'locked_out_user',
			'problem': 'problem_user',
			'passwordText': 'En het wachtwoord voor iedere gebruiker is:',
			'password': 'secret_sauce',
		},
		'errors': {
			'container': 'Error bericht',
			'epicSadFace': 'Epic sadface: ',
			'password': 'Wachtwoord is verplicht',
			'lockedOut': 'Sorry, deze gebuiker is niet toegestaan.',
			'noMatch': 'Gebruikersnaam en wachtwoord komen niet overeen met een geregistreerde gebuiker.',
			'username': 'Gebruikersnaam is verplicht',
		},
	},
	'username': 'Gebruikersnaam',
	'cartContent': {
		'checkout': 'CHECKOUT',
		'continueShopping': 'VERDER WINKELEN',
		'description': 'OMSCHRIJVING',
		'header': 'UW WINKELWAGEN',
		'quantity': 'AANT',
		'screen': 'Winkelwagen inhoud',
		'cartItem': {
			'itemContainer': 'Item',
			'description': 'Omschrijving',
			'amount': 'Aantal',
			'remove': 'VERWIJDEREN',
			'delete': 'Delete',
			'price': 'Prijs',
		},
	},
	'checkoutPageOne': {
		'errors': {
			'container': 'Error bericht',
			'epicSadFace': 'Epic sadface: ',
			'firstName': 'Voornaam is verplicht',
			'lastName': 'Achternaam is verplicht',
			'postalCode': 'Postcode is verplicht',
		},
		'header': 'CHECKOUT: INFORMATIE',
		'firstName': 'Voornaam',
		'lastName': 'Achternaam',
		'postalCode': 'Postcode',
		'screen': 'Checkout: Uw informatie',
		'cancelButton': 'ANNULEREN',
		'continueButton': 'GA DOOR',
	},
	'checkoutPageTwo': {
		'header': 'CHECKOUT: OVERZICHT',
		'screen': 'CHECKOUT: OVERZICHT',
		'description': 'OMSCHRIJVING',
		'quantity': 'AANT',
		'item': {
			'container': 'Item',
			'description': 'Omschrijving',
			'amount': 'Aantal',
			'price': 'Prijs',
		},
		'summary': {
			'paymentLabel': 'Betaal Informatie:',
			'card': 'SauceCard #31337',
			'shippingLabel': 'Verzend informatie:',
			'shippingText': 'GRATIS PAARDEN EXPRESS VERZENDING!',
			'itemsTotal': 'Produkt totaal: ',
			'itemsTax': 'BTW: ',
			'totalAmount': 'Totaal: ',
		},
		'finishButton': 'BEVESTIGEN',
		'cancelButton': 'ANNULEREN',
	},
	'checkoutCompletePage': {
		'header': 'CHECKOUT: KLAAR!',
		'screen': 'CHECKOUT: KLAAR!',
		'completeContainer': {
			'header': 'BEDANKT VOOR UW ORDER',
			'text': 'Wij hebben uw order ontvangen en deze zal zo snel als ons paard is bij u arriveren!',
		},
		'goToButton': 'NAAR ALLE ITEMS',
	},
	'inventoryListPage': {
		'header': 'PRODUKTEN',
		'screen': 'PRODUKTEN',
		'dropZone': 'Winkelwagen drop zone',
		'addButton': 'VOEG TOE',
		'removeButton': 'VERWIJDEREN',
		'itemContainer': 'Product',
		'itemTitle': 'Produkt titel',
		'itemDescription': 'Produkt beschrijving',
		'dragHandle': 'Drag Handle',
		'price': 'Prijs',
		'toggle': 'Toggle',
	},
	'inventoryItemPage': {
		'screen': 'Produkt pagina',
		'itemNotFound': {
			'name': 'PRODUkT NIET GEVONDEN',
			'description': 'Het spijt ons, maar wij kunnen uw order niet in ontvangst nemen vanwege een technische storing.',
			'price': '√-1',
		},
		'imageContainer': 'Image Container',
		'addButton': 'VOEG TOE',
		'backButton': 'TERUG NAAR PRODUKTEN',
		'removeButton': 'VERWIJDEREN',
		'itemDescription': 'Omschrijving',
		'price': 'Prijs',
	},
	'webview': {
		'header': 'WEBVIEW',
		'screen': 'WEBVIEW SELECTIE',
		'errorContainer': 'Error bericht',
		'placeholder': 'vul een https adres in...',
		'urlError': 'Vul een correcte https url in',
		'go': 'GA NAAR DE WEBSITE',
	},
	'modalSelector': {
		'button': 'Modal Selector knop',
		'cancel': 'Annuleren',
		'container': 'Selector container',
		'sectionLabel': 'Sorteer items op...',
		'azLabel': 'Naam (A - Z)',
		'zaLabel': 'Naam (Z - A)',
		'loHiLabel': 'Prijs (laag - hoog)',
		'hiLoLabel': 'Prijs (hoog - laag)',
	},
	'cart': {
		'label': 'Winkelwagen',
	},
	'menu': {
		'label': 'Menu',
		'close': 'Sluiten',
		'allItems': 'ALLE ITEMS',
		'about': 'OVER',
		'logout': 'UITLOGGEN',
		'reset': 'RESET APP STATE',
		'qrCode': 'QR CODE SCANNER',
		'geoLocation': 'GEO LOCATION',
		'webview': 'WEBVIEW',
	},
	'geoLocation':{
		'header': 'GEO LOCATION',
		'screen': 'GEO LOCATION-SCREEN',
		'text': 'Hieronder vind je de breedte- en lengtegraad. Deze kun je met Appium wijzigen, zie',
		'appiumLink': 'http://appium.io/docs/en/commands/session/geolocation/set-geolocation/',
		'this':' deze ',
		'link':'link.',
		'determinePosition': 'Het bepalen van de locatie voor Android kan enige tijd duren.',
		'errorSettings': 'De Settings kunnen niet worden geopend.',
		'locationPermission': 'Locatietoestemming geweigerd.',
		'enableLocation': 'Schakel Locatieservices in om uw locatie te bepalen.',
		'toSettings': 'Ga naar de Settings',
		'dontUse':'Gebruik de locatieservice niet.',
		'deniedByUser': 'Locatietoestemming geweigerd door de gebruiker.',
		'position': 'Locatie bepalen...',
		'latitude': 'breedtegraad',
		'longitude': 'lengtegraad',
	},
	'appHeader': {
		'label': 'Swag Labs',
		'url': 'https://saucelabs.com/',
		'404Url': 'https://saucelabs.com/error/404',
	},
	'footer': {
		'rights': 'Sauce Labs. Alle rechten voorbehouden.',
		'termsAndPrivacy': 'Voorwaarden | Privacy Policy',
	},
	'products': {
		'backpack': {
			name: 'Sauce Labs Backpack',
			desc: 'carry.allTheThings() met het gestroomlijnde Sly Pack dat compromisloze stijl combineert met ongeëvenaarde laptop- en tabletbescherming.',
			price: 29.99,
		},
		'bikeLight': {
			name: 'Sauce Labs Fiets Licht',
			desc: 'Een rood licht is niet de gewenste status tijdens het testen, maar het helpt zeker als u \'s nachts op uw fiets rijdt. Waterbestendig met 3 verlichtingsmodi, inclusief 1 AAA-batterij.',
			price: 9.99,
		},
		'boltShirt': {
			name: 'Sauce Labs Bolt T-Shirt',
			desc: 'Trek je test-superheld aan met het Sauce Labs bolt T-shirt. Van American Apparel, 100% ringgesponnen gekamd katoen, heidegrijs met rode bolt.',
			price: 15.99,
		},
		'fleeceJacket': {
			name: 'Sauce Labs Fleece Jas',
			desc: 'Het is niet elke dag dat je een middelzwaar fleecejack met kwartrits tegenkomt dat alles aankan, van een ontspannende dag buiten tot een drukke dag op kantoor.',
			price: 49.99,
		},
		'onesie': {
			name: 'Sauce Labs Onesie',
			desc: 'Rib snap baby onesie voor de junior automation engineer in ontwikkeling. Versterkte 3-kliks bodemsluiting, twee-naaldige zoom en onderkant zullen niet ontrafelen.',
			price: 7.99,
		},
		'tattRed': {
			name: 'Test.allTheThings() T-Shirt (Rood)',
			desc: 'Dit klassieke Sauce Labs t-shirt is perfect om te dragen bij het klaarmaken van je toetsenbord om een paar tests te automatiseren. Superzachte en comfortabele ringgesponnen gekamd katoen.',
			price: 15.99,
		},
	},
};

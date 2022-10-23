# ReadMe van de Applicatie Pixam

Dit is een installatiehandleiding om de applicatie Pixan te runnen

1) Applicatie starten

Nadat u het project gecloned hebt naar jouw locale machine,
installeert u eerst de node_modules door het volgende commando 
in de terminal te runnen:

### `npm install`

Wanneer dit klaar is, kunt u de applicatie starten door de volgende 
commando te typen in je terminal:

### `npm start`


2. React-Hook-Form installeren

Vervolgens kunt u de React-Hook-Form library installeren door de 
volgende commando te typen in uw terminal:

### `npm install react-hook-form`

3. React-Router installeren

Vervolgens kunt u de React-router library installeren met behulp van de volgende commando:

### `npm i react-router-dom@5.2.0 `

4) Axios installeren

Daarna kunt u een GET/POST-request maken naar de Unsplash API. Dit doet u door de volgende commando te typen in uw terminal:

### `npm install axios`

5) Backend installeren

De backend draait op een Heroku server. Deze server wordt automatisch inactief wanneer er een tijdje geen requests gemaakt worden. De eerste request die de server weer uit de 'slaapstand' haalt zal daarom maximaal 30 seconden op zich kunnen laten wachten. Daarna zal de responsetijd normaal zijn. Voer daarom altijd eerst een test-request uit.
const link = "http://api.weatherstack.com/current?access_key=b7ea469f8dec31ceff8887b5c1eff67c";

const root = document.getElementById('root');
const popup = document.getElementById('popup');
const textInput = document.getElementById('text-input');
const form = document.getElementById('form');
const closeButton = document.getElementById('close');

let store = {
	city: "Vladivostok",
	feelslike: 0,
	temperature: 0,
	observationTime: "00:00 AM",
	isDay: "no",
	description: "",
	properties: {
		cloudcover: {},
    humidity: {},
    windSpeed: {},
    pressure: {},
    uvIndex: {},
    visibility: {},
	}
}

const fetchData = async () => {
try {
	const query = localStorage.getItem('query') || store.city;
	const result = await fetch(`${link}&query=${query}`);
	const data = await result.json();

	const {
		current: {
			cloudcover, 
			temperature,
			humidity, 
			observation_time: observationTime, 
			pressure, 
			uv_index: uvIndex, 
			visibility,
			is_day: isDay,
			weather_descriptions: description,
			wind_speed: windSpeed,
		},
		location: {
			name
		}
	} = data;

	store = {
		...store,
		city: name,
		temperature,
		observationTime,
		isDay,
		description: description[0],
		windSpeed,
		properties: {
			cloudcover: {
				title: 'Cloudcover',
				value: `${cloudcover}%`,
				icon: 'cloud.png'
			},
			humidity: {
				title: 'Humidity',
				value: `${humidity}%`,
				icon: 'humidity.png'
			},
			windSpeed: {
				title: 'Wind speed',
				value: `${windSpeed} m/s`,
				icon: 'wind.png'
			},
			pressure: {
				title: 'Pressure',
				value: `${pressure} mm Hg`,
				icon: 'gauge.png'
			},
			uvIndex: {
				title: 'Uv-index',
				value: `${uvIndex}`,
				icon: 'uv-index.png'
			},
			visibility: {
				title: 'Visibility',
				value: `${visibility}/10`,
				icon: 'visibility.png'
			},
		}
	};

	renderComponent();
} catch (err) {
	console.log(err);
}
};

const getImage = (description) => {
	const value = description.toLowerCase();

  switch (value) {
    case "partly cloudy":
      return "partly.png";
    case "cloud":
      return "cloud.png";
    case "fog":
      return "fog.png";
    case "sunny":
      return "sunny.png";
    case "cloud":
      return "cloud.png";
    default:
      return "the.png";
  }
}

const renderProperty = (properties) => {
	return Object.values(properties).map(({title, value, icon}) => {
		return `<div class="property">
						<div class="property-icon">
							<img src="/Images/Weather_img/icons/${icon}" alt="">
						</div>
						<div class="property-info">
							<div class="property-info__value">${value}</div>
							<div class="property-info__description">${title}</div>
						</div>
					</div>`
	}).join("");
}

const markUp = () => {
	const { city, description, observationTime, temperature, isDay, properties} = store;

	const containerClass = isDay === "yes" ? 'is-day' : '';

	return `<div class="container ${containerClass}">
					<div class="top">
						<div class="city">
							<div class="city-subtitle">Weather Today in</div>
								<div class="city-title" id="city">
								<span>${city}</span>
							</div>
						</div>
						<div class="city-info">
							<div class="top-left">
							<img class="icon" src="/Images/Weather_img/${getImage(description)}" alt="" />
							<div class="description">${description}</div>
						</div>
					
						<div class="top-right">
							<div class="city-info__subtitle">as of ${observationTime}</div>
							<div class="city-info__title">${temperature}°</div>
						</div>
					</div>
				</div>
				<div id="properties">${renderProperty(properties)}</div>
				</div>`
}

const toggleClass = () => {
	popup.classList.toggle('active');
}

const renderComponent = () => {
	root.innerHTML = markUp();

	const city = document.getElementById('city');
 	city.addEventListener('click', toggleClass);
};

const handelInput = (e) => {
	store = {
		...store,
		city: e.target.value,
	}
};

const handleSubmit = (e) => {
	e.preventDefault();

	const value = store.city;

	if(!value) return null;
	localStorage.setItem('query', value);

	fetchData();
	toggleClass();
}

form.addEventListener('submit', handleSubmit);
textInput.addEventListener('input', handelInput);
closeButton.addEventListener('click' , toggleClass);

fetchData ();
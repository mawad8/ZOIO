

// start writing arr for all the .....


// Array of all data
var bb = [
	{
		name: "Aquarius" ,
		 date: "JAN 20 - FEB 18,",
		image: "img/aq.jpg",
		good: "Friendly, honest, loyal, inventive, independent, and intellectual.",
		bad: "Intractible, contrarian, perverse, unpredictable, and detached."
	},
	{
		name: "Pisces",
		date:" FEB 19 - MAR 20",
		image: "img/pi.jpg",
		good: "Imaginative, sensitive, compassionate, selfless, and sympathetic.",
		bad: "Escapist, idealistic, secretive, vague, and weak-willed."
	},
	{
		name: "Aries",
		date:" MAR 21 - APR 19",
		image: "img/ar.jpg",
		good: "Adventurous, energetic, courageous, enthusiastic, confident, dynamic, and witty.",
		bad: "Selfish, quick-tempered, impulsive, and impatient."
	},
	{
		name: "Taurus ",
		date:"APR 20 - MAY 20",
		image: "img/ta.jpg",
		good: "Patient, reliable, warmhearted, loving, persistent, and determined.",
		bad: "Jealous, possessive, resentful, inflexible, and greedy."
	},
	{
		name: "Gemini",
		date:" MAY 21 - JUN 20",
		image: "img/ge.jpg",
		good: "Adaptable, versatile, communicative, witty, intellectual, eloquent, and lively.",
		bad: "Nervous, tense, superficial, inconsistent, and shrewd."
	},
	{
		name: "Cancer ",
		date:"JUN 21 - JUL 22",
		image: "img/ca.jpg",
		good: "Loving, intuitive, imaginative, cautious, protective, and sympathetic.",
		bad: "Moody, touchy, and clingy."
	},
	{
		name: "Leo",
		date:" JUL 23 - AUG 22",
		image: "img/le.png",
		good: "Generous, warmhearted, creative, enthusiastic, open-minded, and faithful.",
		bad: "Pompous, patronizing, bossy, and intolerant."
	},
	{
		name: "Virgo ",
		date:"AUG 23 - SEP 22",
		image: "img/vi.jpg",
	 good: "Modest, meticulous, reliable, practical, diligent, intelligent, and analytical.",
		bad: "Fussy, anxious, over-critical, and conservative."
	},
	{
		name: "Libra ",
		date:"SEP 23 - OCT 22",
		image: "img/li.jpg",
		good: "Diplomatic, romantic, charming, easygoing, sociable, and idealistic.",
		bad: "Indecisive, changeable, gullible, flirtatious, and self-indulgent."
	},
	{
		name: "Scorpio",
		date:" OCT 23 - NOV 21",
		image: "img/sc.jpg",
		good: "Determined, forceful, emotional, intuitive, passionate, exciting, and magnetic.",
		bad: "Jealous, resentful, compulsive, obsessive, and secretive."
	},
	{
		name: "Sagittarius",
		date:" NOV 22 - DEC 21",
		image: "img/sag.jpg",
		good: "Jovial, good-humored, honest, intellectual, and philosophical.",
		bad: "Blindly optimistic, careless, irresponsible, superficial, and tactless."
	},
	{
		name: "Capricorn",
		date:" DEC 22 - JAN 19",
		image: "img/cap.jpg",
		good: "Practical, prudent, ambitious, disciplined, patient, careful, humorous, and reserved.",
		bad: "Pessimistic, fatalistic, miserly, and grudging."
	}
];

// for loop to go through the array and but the names inside the dropdown menu and create a option tag 



for ( var i = 0; i < bb.length; i++){

	var sele = document.getElementById('ml');
	var ope = document.createElement('option');

	 ope.value = bb[i].name;
	 ope.textContent = bb[i].name;
	 sele.appendChild(ope);

}
// create the fun the fun name it has to be the same like the var in the for loop
sele.onchange = function() {
	// bring all the tags by id from the HTML
	var ala = document.getElementById('di');
	var hh = document.getElementById('sign');
	var ima = document.getElementById('ima');
	var h4h = document.getElementById('good');
	var h44h = document.getElementById('bad');
	var dates = document.getElementById('date')
	
	// Creating a function, storing it as a variable. This function removes the 
	// animate.css classes from an element so that when they get re-applied, the animation happens again
  	var animation = function() {
			ala.className = 'form-group di';
		};
// for loop to go through the array again and make sure the option  we choose its ganna give us the value fo it  
	for ( var i = 0; i < bb.length; i++ ){
		if (this.value == bb[0].name && i == 0 || this.value == bb[2].name && i == 2){
			// bbl.style = "display: none"
			hh.textContent = "You're an" + "  " + bb[i].name;
			dates.textContent = bb[i].date;
			ima.src = bb[i].image;
			ima.width = "200";
			ima.height = "200";

			h4h.textContent = "Good traits" + " : " + bb[i].good;
			h44h.textContent = "Bad traits" + " : "  + bb[i].bad
			ala.className = "form-group di animated zoomIn";
			setTimeout(animation, 1000);

		}

		// we decide about that from the if statement 

		else if (this.value == bb[i].name) {
                       

                       // give all the tags value 
                       // bbl.style = "display: none"
			hh.textContent = "You're a" + "  " + bb[i].name;
			dates.textContent = bb[i].date;
			ima.src = bb[i].image;
			ima.width = "200";
			ima.height = "200";
			h4h.textContent = "Good traits" + " : " + bb[i].good;
			h44h.textContent = "Bad traits" + " : "  + bb[i].bad
			ala
			.className = "form-group di animated zoomIn";
			setTimeout(animation, 1000);
		};

	};
};
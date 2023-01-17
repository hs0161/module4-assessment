module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A lifetime of happiness lies ahead of you.", "All will go well with your new project.", "Curiosity kills boredom. Nothing can kill curiosity.", "If you think you can do a thing or think you cannot do a thing, you are right.", "Savor your freedom, it is precious."];
      
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    postCompliment: (req, res) => {
		const {compliment} = req.body;
		compliments.push({
			id: nextId++,
			text: compliment
		});

		res.status(200).send(compliments[compliments.length - 1]);
	},

	updateCompliment: (req, res) => {
		const {id} = req.params;
		const {compliment} = req.body;
		
		const compToUpdate = compliments.find((comp) => comp.id === +id);
		compToUpdate.text = compliment;

		res.status(200).send(compToUpdate);
	},

	deleteCompliment: (req, res) => {
		const {id} = req.params;
		
		const updateIndex = compliments.findIndex((comp) => comp.id === +id);

		compliments.splice(updateIndex, 1);

		res.status(200).send('deleted');
	},

	getComplimentList: (req, res) => {
		res.status(200).send(compliments);
	}
    
};



//Compliment Button
const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment);

//Added compliment feature
const complimentOut = document.getElementById("complimentOutput");
const complimentContainer = document.getElementById("complimentList");
const complimentIn = document.getElementById("complimentInput");
const complimentSmt = document.getElementById("complimentSubmit");

const addCompliment = (e) => {
    e.preventDefault();
    const body = {compliment: complimentIn.value};
	complimentIn.value = '';
    axios.post("http://localhost:4000/api/compliment/", body)
		.then((res) => {
			getComplimentList();
		})
		.catch((res) => {
			alert('Uh-oh. Something went wrong.');
	});
};

const updateCompliment = (e) => {
    e.preventDefault();
    const id = e.target.parentElement.id;
    const body = {
		compliment: prompt('What new compliment would you like to write?')
	};
    
	axios.put(`http://localhost:4000/api/compliment/${id}`, body)
		.then((res) => {
			getComplimentList();
		})
		.catch((res) => {
			console.log(res)
			alert('Uh-oh. Something went wrong.');
	});
};
complimentSmt.addEventListener('click', addCompliment);

const deleteCompliment = (e) => {
    e.preventDefault();
    const id = e.target.parentElement.id;

    axios.delete(`http://localhost:4000/api/compliment/${id}`)
		.then((res) => {
			getComplimentList();
		})
		.catch((res) => {
			alert('Uh-oh. Something went wrong.');
	});
};

const createCompliment = (comp) => {
	let card = document.createElement('div');
	const text = document.createElement('p');
	const edt = document.createElement('button');
	const del = document.createElement('button');
	card.id = comp.id

	text.innerText = comp.text;
	edt.innerText = 'edit';
	del.innerText = 'delete';
	edt.addEventListener('click', updateCompliment);
	del.addEventListener('click', deleteCompliment);

	card.appendChild(text);
	card.appendChild(edt);
	card.appendChild(del);

	return card;
};

const getComplimentList = () => {
    axios.get("http://localhost:4000/api/complimentList/")
        .then(res => {
            const compList = res.data;
			complimentContainer.innerHTML = ``;
			compList.forEach((element) => {
				complimentContainer.appendChild(createCompliment(element));
			});
    });
};
getComplimentList();



//Fortune Button
const fortuneButton = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};
fortuneButton.addEventListener('click', getFortune);



//Goals List
const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
};

const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
};

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("goalsList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
};



//Dropdown Goals
function displayGoals() {
    let select = document.getElementById('goals'); 
    let value = select.options[select.selectedIndex].value; 
    console.log(value);

    if(value === "inspire") {
        alert("Some inspiration quote");
    } else if (value === "encourage"){
        alert("Some encouragement quote")
    } else if (value === "help"){
        alert("help quotes")
    } else {
        alert("You don't need a push? Just try one out!")
    }
}
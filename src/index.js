document.addEventListener("DOMContentLoaded", () => {
    const baseURL = "http://localhost:3000/characters";
    const characterBar = document.getElementById("character-bar");

    fetch(baseURL)
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const span = document.createElement("span");
                span.textContent = character.name;
                span.style.cursor = "pointer"; 
                characterBar.appendChild(span);

                
                span.addEventListener("click", () => showCharacterDetails(character));
            });
        })
        .catch(error => console.error("Error fetching characters:", error));
});


function showCharacterDetails(character) {
    const characterInfo = document.getElementById("detailed-info");
    characterInfo.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}" style="width:200px">
        <p>Votes: <span id="vote-count">${character.votes}</span></p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const voteForm = document.getElementById("votes-form");

    voteForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const voteInput = document.getElementById("votes"); 
        const voteCountSpan = document.getElementById("vote-count"); 

        if (voteCountSpan && voteInput.value) {
            let currentVotes = parseInt(voteCountSpan.textContent); 
            let newVotes = parseInt(voteInput.value); 

            voteCountSpan.textContent = currentVotes + newVotes; 

            voteInput.value = ""; 
        }
    });
});

function showCharacterDetails(character) {
    const characterInfo = document.getElementById("detailed-info");
    
    
    characterInfo.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}" style="width:200px">
        <p>Votes: <span id="vote-count">${character.votes}</span></p>
    `;

    
    if (!document.getElementById("votes-form")) {
        const voteForm = document.createElement("form");
        voteForm.id = "votes-form";
        voteForm.innerHTML = `
            <input type="number" id="votes" name="votes" min="1" required />
            <button type="submit">Add Votes</button>
        `;
        characterInfo.appendChild(voteForm);

        
        voteForm.addEventListener("submit", (event) => {
            event.preventDefault(); 

            const voteInput = document.getElementById("votes");
            const voteCountSpan = document.getElementById("vote-count");

            if (voteCountSpan && voteInput.value) {
                let currentVotes = parseInt(voteCountSpan.textContent);
                let newVotes = parseInt(voteInput.value);

                voteCountSpan.textContent = currentVotes + newVotes;
                voteInput.value = ""; 
            }
        });
    }
}

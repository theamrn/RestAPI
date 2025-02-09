async function getData(term) {
    const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`;
    
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "b0f8f0e155msh2b59065ca6c542ap12138ajsn5856ba815d47", 
            "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com"
        }
    };    

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data.list.length > 0) {
            document.getElementById("result").innerHTML = `<p><strong>${term}:</strong> ${data.list[0].definition}</p>`;
        } else {
            document.getElementById("result").innerHTML = "<p>No definition found.</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("result").innerHTML = "<p>Something went wrong.</p>";
    }
}

// Event listener for button click
document.getElementById("searchBtn").addEventListener("click", function() {
    const term = document.getElementById("searchTerm").value;
    if (term.trim() !== "") {
        getData(term);
    }
});
let freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }];
    let names = ["Alice", "Bob", "Carol", "David", "Eve", "Eric", "Austin", "Gary", "Rose"];
let occupations = ["Writer", "Teacher", "Programmer", "Designer", "Photographer", "Sculptor", "Fashion Designer", "Rapper", "Vigilante", "Poet", "Chef", "Line Cook", "Bouncer", "Security Guard", "Emergency Preparedness Coordinator"];
function renderFreelancers() {
    const freelancersList = document.getElementById("freelancers-list");
    freelancersList.innerHTML = ""; // Clear existing content
    freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement("div");
        freelancerDiv.textContent = `${freelancer.name} (${freelancer.occupation}) - $${freelancer.startingPrice}`;
        freelancersList.appendChild(freelancerDiv);
    });
}
function renderFreelancers() {
    const freelancersList = document.getElementById("freelancers-list");
    freelancersList.innerHTML = ""; // Clear existing content
    freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement("div");
        freelancerDiv.textContent = `${freelancer.name} (${freelancer.occupation}) - $${freelancer.startingPrice}`;
        freelancersList.appendChild(freelancerDiv);
    });
}

function addRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 10; // This inserts Random price between $10-$100
    freelancers.push({ name: randomName, occupation: randomOccupation, startingPrice: randomPrice });
    renderFreelancers();
    updateAveragePrice();
}
setInterval(addRandomFreelancer, 1500); // Adds a freelancer every 3 seconds

renderFreelancers();
updateAveragePrice();

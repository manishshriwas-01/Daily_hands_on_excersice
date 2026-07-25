const taskContainer = document.getElementById("taskContainer");

fetch("../output.json")
    .then(response => response.json())
    .then(tasks => {

        document.getElementById("total").textContent = tasks.length;

        const completed = tasks.filter(task => task.status === "Completed").length;

        const pending = tasks.filter(task => task.status === "Pending").length;

        document.getElementById("completed").textContent = completed;
        document.getElementById("pending").textContent = pending;

        tasks.forEach(task => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${task.title}</h3>
                <p><strong>ID:</strong> ${task.id}</p>
                <p>
                    <strong>Status:</strong>
                    <span class="${task.status.toLowerCase()}">
                        ${task.status}
                    </span>
                </p>
            `;

            taskContainer.appendChild(card);

        });

    })
    .catch(error => {
        console.log(error);
    });
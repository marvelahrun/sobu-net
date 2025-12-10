fetch("posts.json")
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById("blog-container");

        posts.forEach(post => {
            const card = document.createElement("a");
            card.href = post.file;
            card.className = "post-card";

            card.innerHTML = `
                ${post.thumb ? `<img src="${post.thumb}" class="thumb">` : ""}
                <h2>${post.title}</h2>
                <p class="date">${post.date}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Error loading posts:", error));

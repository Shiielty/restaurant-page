const aboutUsPage = () => console.log("About Us module loaded successfully!")

const about = () => {
    
    const container = document.createElement("div");
    const headerContainer = document.createElement("div");
    const bgFilter = document.createElement("div");
    const title = document.createElement("h1");
    const contentContainer = document.createElement("div");
    const desc = document.createElement("p");
    const infoContainer = document.createElement("div");
    const img = document.createElement("img");
    const contacts = document.createElement("div");
    const contactList = document.createElement("ul");
    const address = document.createElement("li");
    const phone = document.createElement("li");
    const email = document.createElement("li");
    const ig = document.createElement("li");

    headerContainer.classList.add("about-header");
    bgFilter.classList.add("about-bg-filter");
    title.classList.add("about-title");
    infoContainer.classList.add("about-info");
    img.classList.add("about-img");

    title.textContent = "About Us";
    desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates adipisci. Vel, asperiores necessitatibus. Est amet doloremque error laborum expedita officiis eos magni tenetur reiciendis blanditiis doloribus, commodi qui molestias in corrupti. Illo, ipsa voluptatem earum assumenda et optio amet modi quod ad nemo soluta corrupti quas deleniti officia aspernatur.";
    address.textContent = "Somewhere st., here, there, 00XZY";
    phone.textContent = "+00000000";
    email.textContent = "our.restaurant@example.com";
    ig.textContent = "@example";

    bgFilter.appendChild(title);
    headerContainer.appendChild(bgFilter);
    contactList.appendChild(address);
    contactList.appendChild(phone);
    contactList.appendChild(email);
    contactList.appendChild(ig);
    contacts.appendChild(contactList);
    infoContainer.appendChild(img);
    infoContainer.appendChild(contacts);
    contentContainer.appendChild(desc);
    contentContainer.appendChild(infoContainer);
    container.appendChild(headerContainer);
    container.appendChild(contentContainer);

    return container;
}

export{ aboutUsPage, about }
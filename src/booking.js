const bookingPage = () => console.log("Loading booking page... Success")

const booking = () => {

    // Create DOMs
    const container = document.createElement("div");
    const pic = document.createElement("div");
    const bgFilter = document.createElement("div");
    const formContainer = document.createElement("div");
    const formTitle = document.createElement("h1");

    container.classList.add("booking-container");
    pic.classList.add("booking-pic");
    bgFilter.classList.add("bg-filter");
    formContainer.classList.add("form-container");

    formTitle.textContent = "Book a Seat"

    // Create form
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "full-name")
    nameLabel.textContent = "Full Name"

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "full-name");
    nameInput.setAttribute("placeholder", "Your Name");

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email")
    emailLabel.textContent = "E-mail"

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("placeholder", "email@example.com");

    const guestLabel = document.createElement("label");
    guestLabel.setAttribute("for", "guest-number")
    guestLabel.textContent = "#of Guest"

    const guestInput = document.createElement("input");
    guestInput.setAttribute("type", "number");
    guestInput.setAttribute("name", "guest-number");
    guestInput.setAttribute("placeholder", "2");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date")
    dateLabel.textContent = "Date";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "button");
    submitBtn.textContent = "Submit";

    const quote = document.createElement("blockquote");
    quote.textContent = "\"We shall never deny a guest, \r\neven the most ridiculous request.\""

    const labelArr = [nameLabel, emailLabel, guestLabel, dateLabel];
    const inputArr = [nameInput, emailInput, guestInput, dateInput];

    // append DOMs

    labelArr.forEach((label) => {
        const formRow = document.createElement("div");
        formRow.classList.add("form-row");

        formRow.appendChild(label);
        formRow.appendChild(inputArr[labelArr.indexOf(label)]);

        form.appendChild(formRow);
    })

    form.appendChild(submitBtn);
    
    formContainer.appendChild(formTitle);
    formContainer.appendChild(form);
    formContainer.appendChild(quote);

    pic.appendChild(bgFilter);

    container.appendChild(pic);
    container.appendChild(formContainer);

    return container;
}


// 1. div : bg with filter
// 2. div : title and form container
// 3. div > h1 : form title "Booking/Reserve Seat?"
// 4. div > form : form container
//          full name, e-mail, #of Guests, date, submit button

export{ bookingPage, booking }
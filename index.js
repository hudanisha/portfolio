function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };  

    if (!params.name || !params.email || !params.message) {
        alert("Please fill in all fields.");
        return;
    }

    const serviceID = "service_oq6qwpr"; // Replace with your actual service ID
    const templateID = "template_l9l1vdd"; // Replace with your actual template ID

    emailjs.send(serviceID, templateID, params)
        .then(response => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log("Success!", response.status, response.text);
            alert("Your message was sent successfully!");
        })
        .catch(error => {
            console.error("Failed to send email:", error);
            alert("There was an error sending your message. Please try again.");
        });
}
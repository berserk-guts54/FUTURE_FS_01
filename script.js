emailjs.init({
    publicKey: "zWwdB_VqtZmGf1o-x"
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    const templateParams = {
        name: name,
        email: email,
        message: message
    };
    emailjs.send(
        "service_p8qrhyk",
        "template_ue24o02",
        templateParams
    )
      .then(function () {

        alert("Message sent successfully!");

        contactForm.reset();
    })
     .catch(function (error) {

        console.log("Email sending failed:", error);

        alert("Something went wrong. Please try again.");

    });

});
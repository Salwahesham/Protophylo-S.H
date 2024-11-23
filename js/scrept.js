 function sendMail() {
        (function() {
            emailjs.init("wf6BNW53JxSweQ8n-"); // Account Public Key
        })();

        var params = {
            sendername: document.querySelector("#fullname").value,
            to: document.querySelector("#email").value,
            subject: document.querySelector("#subject").value,
           replyto: document.querySelector("#replyto").value,
            message: document.querySelector("#message").value,
        };

        var serviceID = "salwaelkady171@gmail.com"; // Email Service ID
        var templateID = "template_7va6lo9"; // Email Template ID

        emailjs.send(serviceID, templateID, params)
            .then(function(res) {
                alert("Email Sent Successfully!");
            })
            .catch(function(err) {
                console.error("Error:", err);
                alert('عذراً، حدث خطأ أثناء إرسال الرسالة.');
            });
    }
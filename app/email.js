const newsletterForm = document.querySelector('.emailInput');
const userEmail = document.querySelector('.userEmail');
const submitBtn = document.querySelector(".sendEmail");


const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', settings);
    return response;
};

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        service_id: 'service_owcs19u',
        template_id: 'template_wsondwn',
        user_id: 'IV492EF6AY5e5lbyU',
        template_params: {
            'from_email': userEmail.value,
        }
    };

    sendEmail(body) 
        .then((response) => {
            console.log(response.status);
            Toastify({
                text: "Tu mensaje ha sido enviado correctamente",
                duration: 1500,
                style: {
                    background: "#367E18",
                },
            }).showToast();
            userEmail.value = "";
        })
        .catch((error) => {
            console.log(error);
        })
})


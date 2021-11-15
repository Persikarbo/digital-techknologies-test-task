(function() {
    let modal = document.getElementById("modal-window");
    let overlay = document.getElementById("overlay");
    let openModalBtn = document.getElementById("open-modal-btn");
    let closeIcon = document.getElementById("close-icon");
    let seeOurProjectBtn = document.getElementById("see-our-project-btn");
    let moreClientsBtn = document.getElementById("clients-logos-table").rows[1].cells[3];
    let navigation = document.getElementById("menu-icon");
    let modalWindowSubmitBtn = document.getElementById("modal__submit-btn");
    let nameInput = document.getElementById("modal__input-name");
    let emailInput = document.getElementById("modal__input-email");
    let messageInput = document.getElementById("modal__input-message");
    let errorMessage = document.getElementById("error-message");
    let successMessage = document.getElementById("success-message");

    let errorColor = "#DB4F4F";
    let inputBorderColor = "#356EAD";
    let patternName = /^[а-яёА-ЯЁa-zA-Z\s]+$/;
    let patternEmail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;

    function learnMoreBtnOnClick() {

    }

    seeOurProjectBtn.onclick = function () {

    }

    moreClientsBtn.onclick = function () {

    }

    navigation.onclick = function () {

    }

    async function postData(url='', data={}) {
        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }


    modalWindowSubmitBtn.onclick = async function () {
        let isError = false;
        if (nameInput.value === "" || !patternName.test(nameInput.value)) {
            nameInput.style.borderColor = errorColor;
            isError = true;
        }
        if (emailInput.value === "" || !patternEmail.test(emailInput.value)) {
            emailInput.style.borderColor = errorColor;
            isError = true
        }
        if (messageInput.value === "") {
            messageInput.style.borderColor = errorColor;
            isError = true;
        }

        if (isError) {
            errorMessage.style.opacity = "1";
        } else {
            let data = {name: nameInput.value, email: emailInput.value, message: messageInput.value}
            try {
                let res = await postData('http://ptsv2.com/t/s1yc9-1636897333/post', data);
                if (res.ok) {
                    successMessage.style.opacity = "1";
                    setTimeout(function(){
                        successMessage.style.opacity = "0";
                    }, 2000);
                }
            }
            catch (e) {
                errorMessage.innerText = 'An error has occurred, please try again later';
                errorMessage.style.opacity = "1";
                setTimeout(function(){
                    errorMessage.style.opacity = "0";
                }, 2000);
            }
        }
    }

    nameInput.onfocus = function () {
        nameInput.style.borderColor = inputBorderColor;
        errorMessage.style.opacity = "0";
    }

    emailInput.onfocus = function () {
        emailInput.style.borderColor = inputBorderColor;
        errorMessage.style.opacity = "0";
    }

    messageInput.onfocus = function () {
        messageInput.style.borderColor = inputBorderColor;
        errorMessage.style.opacity = "0";
    }

    function enableBodyScroll () {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    openModalBtn.onclick = function() {
        document.body.style.top = `-${window.scrollY}px`;
        modal.style.display = "flex";
        overlay.style.display = "block";
        document.body.style.position = 'fixed';
    }


    closeIcon.onclick = function() {
        modal.style.display = "none";
        overlay.style.display = "none";
        enableBodyScroll();
    }


    window.onclick = function(event) {
        if (event.target === overlay) {
            modal.style.display = "none";
            overlay.style.display = "none";
            enableBodyScroll();
        }
    }
})();

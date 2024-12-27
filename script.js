    // script.js

    // Function to handle form submission
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Gather form data
            const firstname = document.getElementById("firstname").value;
            const lastname = document.getElementById("lastname").value;
            const email = document.getElementById("email").value;
            const number = document.getElementById("number").value;
            const habilidades = document.getElementById("Habilidades").value;
            const idade = document.getElementById("confirmold").value;
            const gender = document.querySelector('input[name="gender"]:checked');

            if (!gender) {
                alert("Por favor, selecione seu gênero.");
                return;
            }

            
            const formData = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                number: number,
                habilidades: habilidades,
                idade: idade,
                gender: gender.id
            };

    
            console.log("Dados do formulário:", formData);

            
            alert("inscrição realizada, aguarde o contato!");
            
            
            form.reset();
        });
    });

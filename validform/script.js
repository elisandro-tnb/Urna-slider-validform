//Criando um obj com varias funcoes
let B7Validator = {
    handleSubmit:(event)=>{
        //parando o evento
        event.preventDefault();
        // enviar o formulario = sim
        let send = true;
        // verificando os inputs (campos do formulario)
        let inputs = form.querySelectorAll('input');
        //loop para veficar cada campo individualmente

        B7Validator.clearErrors();



        for(let i=0; i<inputs.length;i++){
            //pengando os campos
            let input = inputs[i];
            //vendo no console o que pegou
            console.log('PEGANDO OS INPUTS '+input);
            //lendo dados do input
            let check = B7Validator.checkInput(input);
           //se o retorno for falso
            if(check !== true){
                //nao enviar
                send = false;
              //console.log(check);                
               B7Validator.showError(input,check);
            }
        }      
       
        //Se for valido o envio
        if(send){
            //envie o formulario
            form.submit();
        }
    },
    checkInput:(input) =>{
        //verificar se exite regra
        let rules = input.getAttribute('data-rules');
        // se existir regras
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');
                //acaoes para cada regra
                switch(rDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Campo não pode ser vazio. '
                        }
                   break;
                    case 'min' :
                        if(input.value.length < rDetails[1]){
                            return 'Quantidade minima de carecteres é '+ rDetails[1]+'  ! '
                        }
                        
                    break;

                    case 'email' :
                        if(input.value !=''){
                            //expressao regular de email
                            let regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

                            if(!regex.test(input.value.toLowerCase())){
                                return 'Digite email valido ';
                            }
                           
                        }
                        
                    break;
                }
            }
        }
        return true;
    },
    showError:(input, error) => {
           //alterando cor da borda do campo 
        input.style.borderColor = '#FF0000';
         //criando um nova div
        let errorElement = document.createElement('div');
        //criando a classe error (para poder estilizar no css)
        errorElement.classList.add('error');
        //recendoa mensagem de erro
        errorElement.innerHTML = error;
        //escrevendo o alerta de erro abaixo do input
        input.parentElement.insertBefore(errorElement,input.ElementSibling);

    },
    clearErrors:()=>{
        //vamos limpar os erros e style dos inputs
        let errorElement = document.querySelectorAll('.error');
        let inputs = form.querySelectorAll('input');
        
        for(let i=0;i<errorElement.length;i++){
            errorElement[i].remove();
        }

        for(let i=0;i<inputs.length;i++){
            inputs[i].style='';
        }       
       
    }
};
//Vamos procurar um formulario com a classe que queremos
let form = document.querySelector('.b7validator');
//Monitorando o evendo se tiver uma acao  submit , faca isso
form.addEventListener('submit', B7Validator.handleSubmit);

//lembrar de revalidar esses dados no back-end
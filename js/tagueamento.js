// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.


// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//Todas as páginas:
window.onload=function(){pageView()} //conta visualização


//index.html:
if(window.location.pathname=="/"){
    document.getElementsByClassName("menu-lista-link menu-lista-contato")[0].onclick = function(){
        send ('entre_em_contato',{
            event_category: 'menu',
            event_label: 'link_externo'
        }); 
    }

    document.getElementsByClassName('menu-lista-link menu-lista-download')[0].onclick = function(){
        send ('download_pdf',{
            event_category: 'menu',
            event_label: 'download_pdf'
        });
    }
}

//analise.html:
if(window.location.pathname=="/analise"){
    var cards = document.getElementsByClassName('card card-montadoras')
    Array.prototype.forEach.call(cards, element => {    
        element.onclick = function(){
            send ('ver_mais',{
                event_category: 'analise',
                event_label: element.getAttribute("data-id")
            });
        }
    })
}


//sobre.html:
if(window.location.pathname=="/sobre"){
    var inputs = document.getElementsByClassName('contato')[0].getElementsByTagName('input')
    Array.prototype.forEach.call(inputs, input => {    
        input.onchange = function(){
            send (input.id,{
                event_category: 'contato',
                event_label: 'preencheu'
            });
        }
    })
    document.getElementsByClassName('contato')[0].onsubmit = function(){
        send ('enviado',{
            event_category: 'contato',
            event_label: 'enviado'
        });
    }
}


//funções:
function pageView(){
    gtag('send','pageview')
}
function send(eventName, element){
    gtag('event', eventName, element)
}
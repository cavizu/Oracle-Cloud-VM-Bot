// ==UserScript==
// @name         Oracle Cloud - Robô B (Navegador de Job)
// @namespace    https://github.com/Cavizu/Oracle-Cloud-VM-Bot (exemplo)
// @version      1.0
// @description  Na página de "Job details", monitora o status. Se falhar, navega de volta para a página da Stack.
// @author       Cavizu & Assistente de IA
// @match        https://cloud.oracle.com/resourcemanager/jobs/COLE_A_URL_DE_UM_JOB_FALHO_AQUI*
// @grant        none
// ==/UserScript==

// =================================================================================================================
// INSTRUÇÕES DE EDIÇÃO (LEIA COM ATENÇÃO):
// 1. Edite a constante STACK_URL abaixo, colando a URL completa da sua página de "Stack details" entre as aspas.
// 2. Na linha "@match" acima, substitua "COLE_A_URL_DE_UM_JOB_FALHO_AQUI" pela URL completa de um dos seus jobs que falharam.
// 3. Este script DEVE ser usado em conjunto com o Robô A e o Robô C.
// =================================================================================================================

(function() {
    'use-strict';

    // ***** ATENÇÃO, USUÁRIO: EDITE A LINHA ABAIXO! *****
    const STACK_URL = "COLE_A_URL_COMPLETA_DA_SUA_PAGINA_DE_STACK_DETAILS_AQUI";

    const checker = setInterval(() => {
        const iframe = document.querySelector('iframe');
        if (iframe && iframe.contentDocument) {
            const doc = iframe.contentDocument;
            const successStatus = doc.querySelector('span[role="status"].oui-text-success');
            if (successStatus) {
                alert("SUCESSO! A instância foi criada!");
                clearInterval(checker);
                return;
            }

            const failedStatus = doc.querySelector('span[role="status"].oui-text-danger');
            if (failedStatus) {
                clearInterval(checker);
                // Valida se a URL da stack foi preenchida antes de navegar
                if (STACK_URL.startsWith("http")) {
                   window.location.href = STACK_URL;
                }
                return;
            }
        }
    }, 20000); // Verifica a cada 20 segundos
})();

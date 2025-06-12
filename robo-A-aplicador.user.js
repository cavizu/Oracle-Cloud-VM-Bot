// ==UserScript==
// @name         Oracle Cloud - Robô A (Aplicador de Stack)
// @namespace    https://github.com/Cavizu/Oracle-Cloud-VM-Bot (exemplo)
// @version      1.0
// @description  Na página de "Stack details", clica automaticamente no botão "Apply" e confirma no popup para iniciar um job.
// @author       Cavizu & Assistente de IA
// @match        https://cloud.oracle.com/resourcemanager/stacks/COLE_A_URL_DA_SUA_STACK_AQUI*
// @grant        none
// ==/UserScript==

// =================================================================================================================
// INSTRUÇÕES DE EDIÇÃO (LEIA COM ATENÇÃO):
// 1. Na linha "@match" acima, substitua a parte "COLE_A_URL_DA_SUA_STACK_AQUI" pela URL completa da sua página de Stack Details.
//    EXEMPLO: se sua URL é "https://cloud.oracle.com/resourcemanager/stacks/ocid1.ormstack.oc1.sa-saopaulo-1.xxxxxx",
//    a linha @match deve ficar: @match https://cloud.oracle.com/resourcemanager/stacks/ocid1.ormstack.oc1.sa-saopaulo-1.xxxxxx*
// 2. Este script DEVE ser usado em conjunto com o Robô B e o Robô C.
// =================================================================================================================

(function() {
    'use strict';
    // Espera 8 segundos para garantir que a página e o iframe interno carreguem completamente.
    setTimeout(() => {
        const mainIframe = document.querySelector('iframe');
        if (mainIframe && mainIframe.contentDocument) {
            const mainDoc = mainIframe.contentDocument;
            const applyButton = mainDoc.querySelector('#tfa_apply'); // Seletor do botão Apply principal

            if (applyButton && !applyButton.disabled) {
                applyButton.click();

                // Espera 5 segundos para o popup de confirmação aparecer
                setTimeout(() => {
                    const allFrames = document.querySelectorAll('iframe');
                    let confirmButtonFound = false;
                    allFrames.forEach(frame => {
                        try {
                            const frameDoc = frame.contentDocument;
                            if (frameDoc) {
                                const confirmButton = frameDoc.querySelector('[data-test-id="createJobButton"]');
                                if (confirmButton) {
                                    confirmButton.click();
                                    confirmButtonFound = true;
                                }
                            }
                        } catch (e) { /* Ignora erros de segurança */ }
                    });
                    // Se não achou em nenhum iframe, tenta na página principal por garantia
                    if (!confirmButtonFound) {
                        const confirmButton = document.querySelector('[data-test-id="createJobButton"]');
                        if (confirmButton) {
                             confirmButton.click();
                        }
                    }
                }, 5000);
            }
        }
    }, 8000);
})();

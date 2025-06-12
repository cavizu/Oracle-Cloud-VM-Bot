// ==UserScript==
// @name         Oracle Cloud - Robô C (Vigia de URL)
// @namespace    https://github.com/Cavizu/Oracle-Cloud-VM-Bot (exemplo)
// @version      1.0
// @description  Resolve o problema de navegação de SPA da Oracle. Força o recarregamento da página do Job para ativar os outros robôs.
// @author       Cavizu & Assistente de IA
// @match        https://cloud.oracle.com/resourcemanager/*
// @grant        window.onurlchange
// ==/UserScript==

// =================================================================================================================
// INSTRUÇÕES DE EDIÇÃO:
// Este script é o "maestro" e geralmente não precisa de edições.
// Ele garante que, após o Robô A iniciar um job, a página do job seja recarregada
// para que o Robô B possa acordar e começar a monitorar.
// =================================================================================================================

(function() {
    'use strict';
    // Limpa a memória de recarregamento quando voltamos para a página da Stack
    if (window.location.href.includes('/stacks/ocid1.ormstack')) {
        sessionStorage.removeItem('jobPageReloadedByVigia');
    }

    // Escuta por mudanças na URL (a mágica do SPA)
    if (window.onurlchange === null) {
        window.addEventListener('urlchange', (info) => {
            const newUrl = info.url;
            // Se a nova URL mudou para uma página de job e ainda não recarregamos esta sessão
            if (newUrl.includes('/jobs/ocid1.ormjob') && sessionStorage.getItem('jobPageReloadedByVigia') !== 'true') {
                // Anota na memória que estamos prestes a recarregar
                sessionStorage.setItem('jobPageReloadedByVigia', 'true');
                // Espera 1.5s e recarrega
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        });
    }
})();

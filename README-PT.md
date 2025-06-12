# Robôs de Automação para Instância "Always Free" da Oracle Cloud

Cansado de receber o erro "Out of capacity" ao tentar criar sua instância gratuita Ampere A1 na Oracle Cloud? Este conjunto de 3 scripts para a extensão de navegador **Tampermonkey** automatiza o processo de tentativa e erro, poupando seu tempo e paciência.

**Desenvolvido por Cavizu em colaboração com um assistente de IA.**

> **Nota de Segurança:** Os scripts são totalmente seguros. Eles não copiam ou acessam informações sensíveis como senhas ou outros dados. A função deles é apenas acessar as páginas necessárias da Oracle Cloud e automatizar os cliques e recarregamentos para evitar o trabalho manual de tentar repetidamente até a criação da sua estação.

---

## Pré-requisitos: O Método "Save as Stack"

Estes robôs **não funcionam** na tela inicial de "Create Instance". Eles são projetados para trabalhar a partir de uma **"Stack"**, que é um plano de construção salvo.

**Para criar sua Stack, siga estes passos PRIMEIRO:**

1. Tente criar sua instância gratuita normalmente.
2. Quando receber o erro **"Out of capacity"**, **não feche a página**.
3. Role a tela até o final e clique no botão **"Save as stack"**.
4. Dê um nome (ex: `Minha-VM-Gratuita`) e salve.
5. Você será levado para a página de **"Stack details"**. É nesta página que nossos robôs irão trabalhar.

---

## Como Funciona o Esquadrão de Robôs

O sistema usa 3 scripts especialistas que trabalham em equipe:

- **🤖 Robô A (Aplicador):** Fica na página da sua "Stack" e tenta iniciar a criação da instância clicando nos botões "Apply".
- **🤖 Robô C (Vigia):** Detecta quando a Oracle te leva para a página de "Job" e a recarrega, garantindo que o próximo robô acorde.
- **🤖 Robô B (Navegador):** Roda na página do "Job", monitora o status. Se falhar, ele te leva de volta para a página da Stack para o Robô A tentar de novo, criando um ciclo persistente.

---

## ⚙️ Instalação e Configuração

#### **1. Instale a Extensão**
- Instale a extensão de navegador [Tampermonkey](https://www.tampermonkey.net/) para Chrome, Firefox ou Edge.
  *(Esta extensão serve para rodar os scripts de automação na página que é indicada).*

#### **2. (No Oracle) Encontre sua Página da Stack**
- Se você não estiver na página "Stack details", navegue no painel da Oracle:
  - **Menu ☰ > Developer Services > Stacks**.
- Clique no nome da stack que você criou e garanta que esteja na aba **"Stack Information"**.
- Na página da stack, o caminho no topo deve ser: `Resource Manager > Stacks > Stack details`.

> **Entendendo o Fluxo:** Ao clicar em "Apply" na página da Stack e confirmar, você será direcionado para a página do job. O caminho mudará para: `Resource Manager > Stacks > Stack details > Job details`. Nossos robôs automatizam exatamente este ciclo.

#### **3. Instale os 3 Robôs**
- Instale cada um dos três scripts abaixo. Para cada um, clique no link e depois no botão "Instalar" na tela do Tampermonkey.
  - **[Link para o Robô A (Aplicador)](URL_DO_SEU_GITHUB_AQUI)**
  - **[Link para o Robô B (Navegador)](URL_DO_SEU_GITHUB_AQUI)**
  - **[Link para o Robô C (Vigia)](URL_DO_SEU_GITHUB_AQUI)**

#### **4. Edite os Scripts (Passo Crucial!)**
- No painel do Tampermonkey, você precisará editar os Robôs A e B para que eles funcionem na sua conta específica. As instruções estão dentro de cada arquivo de script.

  - **No Robô A:** Atualize a linha `@match` com a URL da sua página de **Stack Details**.
    - (Vá na aba "Stack Details" no seu Oracle, copie a URL completa da barra de endereços e cole no script).

  - **No Robô B:**
    1. Atualize a constante `STACK_URL` com a URL da sua página de **Stack Details**.
    2. Atualize a linha `@match` com a URL de um dos seus jobs que deu como status **"Failed"**.
       - (Vá na aba "Job Details" de um job falho no seu Oracle, copie a URL e cole no script).

#### **5. Ative o Esquadrão**
- Com os 3 scripts instalados, editados e ativos no Tampermonkey, vá para a sua página de **"Stack details"** na Oracle Cloud e **atualize com F5**.
- Deixe esta aba aberta e o computador ligado. Os robôs repetirão o processo de tentativa de implementar sua estação.
- Quando a instância for criada com sucesso, o Robô B exibirá um alerta na tela.

---

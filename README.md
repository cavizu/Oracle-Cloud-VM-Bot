[Leia este guia em Português](README-PT.md)

---

# Oracle Cloud "Always Free" Instance Automation Bots

Tired of getting the "Out of capacity" error when trying to create your free Ampere A1 instance on Oracle Cloud? This set of 3 scripts for the **Tampermonkey** browser extension automates the trial-and-error process, saving you time and patience.

**Developed by Cavizu in collaboration with an AI assistant.**

> **Safety Note:** These scripts are completely safe. They do not copy or access any sensitive information like passwords or other data. Their only function is to access the necessary Oracle Cloud pages and automate the clicks and reloads to spare you the manual work of repeatedly trying to get your instance created.

---

## Prerequisite: The "Save as Stack" Method

These bots **will not work** on the initial "Create Instance" screen. They are designed to work from a **"Stack"**, which is a saved deployment plan.

**To create your Stack, you MUST follow these steps FIRST:**

1. Try to create your free instance normally through the Oracle Cloud panel.
2. When you receive the **"Out of capacity"** error, **do not close the page**.
3. Scroll to the bottom and click the **"Save as stack"** button.
4. Give it a name (e.g., `My-Free-VM`) and save it.
5. You will be taken to the **"Stack details"** page. **This is the page where our bots will operate.**

---

## How the Bot Squad Works

The system uses 3 specialist scripts that work as a team:

- **🤖 Bot A (The Applier):** Lives on your "Stack" page and attempts to start the instance creation by clicking the "Apply" buttons.
- **🤖 Bot C (The URL Watcher):** Detects when Oracle navigates you to the "Job" page and reloads it, ensuring the next bot wakes up.
- **🤖 Bot B (The Job Navigator):** Runs on the "Job" page, monitoring its status. If it fails, it navigates you back to the Stack page for Bot A to try again, creating a persistent cycle.

---

## ⚙️ Installation and Configuration

#### **1. Install the Extension**
- Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension for Chrome, Firefox, or Edge.
  *(This extension allows the automation scripts to run on the specified pages).*

#### **2. (In Oracle) Find Your Stack Page**
- If you are not on the "Stack details" page, navigate through the Oracle panel:
  - **Menu ☰ > Developer Services > Stacks**.
- Click on the name of the stack you created and make sure you are on the **"Stack Information"** tab.
- On the stack page, the breadcrumb navigation at the top should look like this: `Resource Manager > Stacks > Stack details`.

> **Understanding the Flow:** When "Apply" is clicked on the Stack page and confirmed, you will be redirected to the job page. The breadcrumbs will change to: `Resource Manager > Stacks > Stack details > Job details`. Our bots automate this exact cycle.

#### **3. Install the 3 Bots**
- Install each of the three scripts below. For each one, click the link and then the "Install" button on the Tampermonkey screen.
  - **[Link to Bot A (The Applier)](https://github.com/cavizu/Oracle-Cloud-VM-Bot/raw/refs/heads/main/robo-A-aplicador.user.js)**
  - **[Link to Bot B (The Job Navigator)](URL_TO_YOUR_GITHUB_FILE_B)**
  - **[Link to Bot C (The URL Watcher)](URL_TO_YOUR_GITHUB_FILE_C)**

#### **4. Edit the Scripts (Crucial Step!)**
- In the Tampermonkey dashboard, you will need to edit Bots A and B to work with your specific account. The instructions are also commented inside each script file.

  - **For Bot A:** You need to update the `@match` line with the URL of *your* **Stack Details** page.
    - (Go to your "Stack Details" tab in Oracle, copy the full URL from the address bar, and paste it into the script).

  - **For Bot B:**
    1. Update the `STACK_URL` constant with the URL of *your* **Stack Details** page.
    2. Update the `@match` line with the URL of one of your jobs that has a **"Failed"** status.
       - (Go to the "Job Details" tab of a failed job in Oracle, copy the URL, and paste it into the script).

#### **5. Activate the Squad**
- With all 3 scripts installed, edited, and enabled in Tampermonkey, go to your **"Stack details"** page in Oracle Cloud and **refresh the page (F5)**.
- Leave this tab open and your computer on. The bots will now repeat the process of trying to provision your instance.
- When the instance is successfully created, Bot B will display an `alert` on your screen.

---

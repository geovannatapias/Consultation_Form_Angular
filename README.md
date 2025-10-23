# 🧾 Customer Registration – Angular Frontend

A **Single Page Application (SPA)** built with **Angular** and **Angular Material** for managing customer data — including **create**, **read**, **update**, and **delete (CRUD)** operations.  
It features a modern, responsive interface integrated with **BrazilAPI** for dynamic state and city lookup.

## ✨ Features

### 🏠 Home Page
- Navigation toolbar with access to **Form** and **Consultation** pages  
- Welcome card with quick navigation buttons  
- Clean design with **gradients**, **soft shadows**, and **hover animations**
  
  <img width="700" height="955" alt="readme1" src="https://github.com/user-attachments/assets/5ae0f76d-abee-44c5-95e4-855883adf83f" />

### 👤 Customer Registration
- Form fields:
  - Name  
  - Email  
  - CPF (with input mask)  
  - Birth date (with input mask)  
  - State (UF) – loaded from [BrazilAPI](https://brasilapi.com.br/)  
  - City – dynamically loaded based on selected state
- Actions:
  - Create new customer  
  - Edit existing customer  
  - Feedback messages via **MatSnackBar**
    
<img width="700" height="848" alt="readme2" src="https://github.com/user-attachments/assets/958a6446-c678-40f5-9fbe-8867eae89d96" />


### 🔍 Customer Consultation
- Search customers by name  
- Interactive table displaying:
  - ID  
  - Name  
  - CPF  
  - Birth Date  
  - Email  
- Action buttons:
  - ✏️ **Edit** – navigates to the form with pre-filled data  
  - 🗑️ **Delete** – requires confirmation before deletion  
- Real-time visual feedback after deletion

<img width="700" height="839" alt="readme3" src="https://github.com/user-attachments/assets/b11031cb-be61-4628-9dbc-cac98f84c7a0" />

## 🧱 Project Structure

src/
├── app/
│ ├── cadastro/ # Customer registration page
│ │ ├── cadastro.component.ts
│ │ ├── cadastro.component.html
│ │ └── cadastro.component.scss
│ ├── consulta/ # Customer consultation page
│ │ ├── consulta.component.ts
│ │ ├── consulta.component.html
│ │ └── consulta.component.scss
│ ├── client.service.ts # CRUD logic (mock/local storage)
│ ├── brazilapi.service.ts # Fetches Brazilian states and cities
│ ├── client.ts # Customer model class
│ ├── app-routing.module.ts # Routing configuration
│ └── app.component.* # Toolbar + home page
└── assets/
└── screenshots/ # (optional) UI images

yaml
Copiar código

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Angular 17+** | Main frontend framework |
| **Angular Material** | UI components and styling |
| **Flex Layout** | Responsive design with Flexbox |
| **NgxMask** | Input masks for CPF and date fields |
| **BrazilAPI** | Fetches Brazilian states and cities |
| **UUID** | Generates unique IDs for customers |
| **MatSnackBar** | User feedback and alerts |
| **SCSS** | Custom styles and transitions |

---

## ⚙️ How to Run

### 1️⃣ Prerequisites
- Node.js (LTS version)
- Angular CLI installed globally  
  ```bash
  npm install -g @angular/cli

# Auto de Agendamentos — Frontend

Frontend do sistema de autoatendimento para agendamento de reuniões.

O projeto foi desenvolvido utilizando React + TypeScript + TailwindCSS, com foco em:

- experiência moderna
- layout premium
- responsividade
- escalabilidade
- componentização
- integração futura com APIs

---

# Objetivo do Frontend

O frontend tem como objetivo permitir que o cliente:

- visualize horários disponíveis
- escolha datas
- selecione duração da reunião
- realize agendamentos
- confirme informações
- visualize resumo do agendamento
- futuramente reagende ou cancele reuniões

Tudo isso em uma interface moderna e intuitiva.

---

# Tecnologias Utilizadas

## Core

- React
- TypeScript
- Vite

---

## Estilização

- TailwindCSS

---

## Roteamento

- React Router DOM

---

## Datas

- Dayjs

---

## Ícones

- Lucide React

---

# Estrutura Atual do Projeto



```bash
src/
│
├── components/
│   ├── calendar/
│   │   ├── ScheduleCalendar.tsx
│   │   ├── TimeSlots.tsx
│   │   ├── DurationSelector.tsx
│   │
│   ├── layout/
│   │   ├── PublicLayout.tsx
│   │   ├── PrivateLayout.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│
├── contexts/
│   ├── AuthContext.tsx
│
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Schedule/
│   ├── Admin/
│
├── routes/
│
├── styles/
│
├── App.tsx
├── main.tsx


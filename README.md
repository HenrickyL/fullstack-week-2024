# Fullstack Week


* **Notion:** [link](https://narrow-beach-a00.notion.site/Full-Stack-Week-3-Edi-o-f633d6a03555413e874a5e826bbaaf35)

## requires:

* **ts-node** `npm install -D ts-node`



## Day 1 - Project Setup & HomeScreen

### Next
* `npx create-next-app@latest .`
  - require: `npm install -g create-next-app` 

### Prisma
* `npm install prisma -D`
* `npx prisma init --datasource-provider postgresql`
* **use** [supabase](https://supabase.com/) to host database
* Commands:
  - **if necessary** `npx prisma format`
  - migrations `npx prisma migrate dev --name add_initial_tables`

### Use Shadcn/ui
* `npx shadcn-ui@latest init`
* add card: `npx shadcn-ui add card`
* add button: `npx shadcn-ui add button`
* add input: `npx shadcn-ui add input`
* add badge: `npx shadcn-ui add badge`
* add avatar: `npx shadcn-ui add avatar`


### Date Format:
* date-fns
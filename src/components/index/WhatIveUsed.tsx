import { useState } from "kaioken";
import { UsedBadge } from "./UsedBadge";
import { React } from "./icons/react";
import { Svelte } from "./icons/svelte";
import { Vue } from "./icons/vue";
import { Next } from "./icons/next";
import { Nuxt } from "./icons/nuxt";
import { Quasar } from "./icons/quasar";
import { Gatsby } from "./icons/gatsby";
import { ReactQuery } from "./icons/react-query";
import { Redux } from "./icons/redux";
import { ReactHookForm } from "./icons/react-hook-form";
import { P5 } from "./icons/p5";
import { Tailwind } from "./icons/tailwind";
import { Windi } from "./icons/windi";
import { Vite } from "./icons/vite";
import { Fastify } from "./icons/fastify";
import { Express } from "./icons/express";
import { Nest } from "./icons/nest";
import { Sequelize } from "./icons/sequelize";
import { Prisma } from "./icons/prisma";
import { TypeScript } from "./icons/typescript";
import { Deno } from "./icons/deno";
import { Strapi } from "./icons/strapi";
import { Docker } from "./icons/docker";
import { Vercel } from "./icons/vercel";
import { Vultr } from "./icons/vultr";
import { OVH } from "./icons/ovh";
import { Cloudflare } from "./icons/cloudflare";
import { Neovim } from "./icons/neovim";
import { VsCode } from "./icons/vscode";
import { Gitpod } from "./icons/gitpod";
import "../../styles/UsedBadge.css"

export const WhatIveUsed = () => {
  const [readMore, setReadMore] = useState(false);
  const onReadMore = () => setReadMore(!readMore);

  return (
    <section className="w-full">
    <ul className={`w-full flex justify-center md:justify-start flex-wrap gap-2 ${readMore ? 'cancel' : ''}`}>
        <UsedBadge data-color="#61DAFB">
          <React slot="icon" /> React
        </UsedBadge>
        <UsedBadge data-color="#F1413D">
          <Svelte slot="icon" /> Svelte
        </UsedBadge>
        <UsedBadge data-color="#4FC08D">
          <Vue slot="icon" /> Vuejs
        </UsedBadge>
        <UsedBadge data-color="#FFFFFF">
          <Next slot="icon" /> Next
        </UsedBadge>
        <UsedBadge data-color="#00DC82">
          <Nuxt slot="icon" /> Nuxt
        </UsedBadge>
        <UsedBadge data-color="#16B7FB">
          <Quasar slot="icon" /> Quasar
        </UsedBadge>
        <UsedBadge data-color="#663399">
          <Gatsby slot="icon" /> Gatsby
        </UsedBadge>
        <UsedBadge data-color="#FF4154">
          <ReactQuery slot="icon" /> React Query
        </UsedBadge>
        <UsedBadge data-color="#593D88">
          <Redux slot="icon" /> Redux
        </UsedBadge>
        <UsedBadge data-color="#EC5990">
          <ReactHookForm slot="icon" /> React Hook Form
        </UsedBadge>
        <UsedBadge data-color="#ED225D">
          <P5 slot="icon" /> p5.js
        </UsedBadge>
        <UsedBadge data-color="#38B2AC">
          <Tailwind slot="icon" /> TailwindCss
        </UsedBadge>
        <UsedBadge data-color="#48B0F1">
          <Windi slot="icon" /> WindiCss
        </UsedBadge>
        <UsedBadge data-color="#646CFF">
          <Vite slot="icon" /> Vite
        </UsedBadge>
        <UsedBadge data-color="#06080B">
          <Fastify slot="icon" /> Fastify
        </UsedBadge>
        <UsedBadge data-color="#404D59">
          <Express slot="icon" /> Express.js
        </UsedBadge>
        <UsedBadge data-color="#E0234E">
          <Nest slot="icon" /> Nestjs
        </UsedBadge>
        <UsedBadge data-color="#52B0E7">
          <Sequelize slot="icon" /> Sequelize
        </UsedBadge>
        <UsedBadge data-color="#3982CE">
          <Prisma slot="icon" /> Prisma
        </UsedBadge>
        <UsedBadge data-color="#007ACC">
          <TypeScript slot="icon" /> Typescript
        </UsedBadge>
        <UsedBadge data-color="#FFFFFF">
          <Deno slot="icon" /> Deno js
        </UsedBadge>
        <UsedBadge data-color="#2E7EEA">
          <Strapi slot="icon" /> Strapi
        </UsedBadge>
        <UsedBadge data-color="#0DB7ED">
          <Docker slot="icon" /> Docker
        </UsedBadge>
        <UsedBadge data-color="#FFFFFF">
          <Vercel slot="icon" />
          Vercel
        </UsedBadge>
        <UsedBadge data-color="#007BFC">
          <Vultr slot="icon" /> Vultr
        </UsedBadge>
        <UsedBadge data-color="#123F6D">
          <OVH slot="icon" /> OVH
        </UsedBadge>
        <UsedBadge data-color="#F38020">
          <Cloudflare slot="icon" /> Cloudflare
        </UsedBadge>
        <UsedBadge data-color="#57A143">
          <Neovim slot="icon" /> Neovim
        </UsedBadge>
        <UsedBadge data-color="#0078D7">
          <VsCode slot="icon" /> Visual Studio Code
        </UsedBadge>
        <UsedBadge data-color="#F06611">
          <Gitpod slot="icon" /> Gitpod
        </UsedBadge>

        <li>
          <button
            onclick={onReadMore}
            className="text-yellow-300 inline md:hidden font-semibold rounded-full px-4 py-2"
          >
            {readMore ? "Show Less" : "Show More"}
          </button>
        </li>
      </ul>
    </section>
  );
};

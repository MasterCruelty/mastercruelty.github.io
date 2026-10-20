/* ════════════════════════════════════════════════
   MasterCruelty: site content
   Edit the data here; markup is generated in app.js
   ════════════════════════════════════════════════ */

const SITE = {
  skills: [
    'Python', 'Telegram Bots', 'Linux', 'Data Analysis', 'C / Go', 'Cloud',
  ],

  links: [
    { key: 'github',    val: '@MasterCruelty',  href: 'https://github.com/MasterCruelty' },
    { key: 'telegram',  val: 'atm channel',     href: 'https://t.me/atmshitpostingChannel' },
    { key: 'facebook',  val: 'atm shitposting', href: 'https://www.facebook.com/atmshitposting/' },
    { key: 'instagram', val: '@atm_shitposting', href: 'https://www.instagram.com/atm_shitposting' },
  ],

  stats: [
    { num: '15', plus: true,  label: 'public repos' },
    { num: '2017',            label: 'atm shitposting founded' },
  ],

  university: [
    {
      tag: 'embedded',
      title: 'Alarm Project',
      desc: 'A small alarm built around a microcontroller, for the embedded systems course.',
      tech: ['C', 'Arduino'],
      href: 'https://github.com/MasterCruelty/alarm-project',
    },
    {
      tag: 'architecture',
      title: 'Half-Life Assembly',
      desc: 'Computer architecture project, working close to the metal in assembly.',
      tech: ['Assembly', 'x86'],
      href: 'https://github.com/MasterCruelty/halflifeassembly',
    },
    {
      tag: 'software-eng',
      title: 'Bike Sharing',
      desc: 'Software engineering project, from requirements to a working prototype.',
      tech: ['Java', 'UML'],
      href: 'https://github.com/MasterCruelty/bikesharingproject',
    },
    {
      tag: 'thesis',
      title: "Bachelor's Thesis (IAC)",
      desc: "Final dissertation work for the bachelor's degree.",
      tech: ['Research', 'LaTeX'],
      href: 'https://github.com/MasterCruelty/Thesis-IAC',
    },
    {
      tag: 'thesis',
      title: "Master's Thesis (CIS Assessment)",
      desc: 'A PowerShell tool that checks compliance with the CIS Benchmarks on Azure and VMware environments, plus the LaTeX source of the thesis.',
      tech: ['PowerShell', 'Azure', 'VMware'],
      href: 'https://github.com/MasterCruelty/Thesis-CIS-Assessment',
    },
    {
      tag: 'notes',
      title: 'Statistic Stuffs',
      desc: 'A growing pile of notes and exercises on statistics.',
      tech: ['Stats', 'R'],
      href: 'https://github.com/MasterCruelty/StatisticStuffs',
    },
    {
      tag: 'algorithms',
      title: 'C / Go Algorithms',
      desc: 'Notes and source code for classic algorithms, in C and Go.',
      tech: ['C', 'Go'],
      href: 'https://github.com/MasterCruelty/C-Go-Algorithms',
    },
    {
      tag: 'cloud',
      title: 'Cloud Computing',
      desc: 'A simple cloud architecture project for the cloud computing course.',
      tech: ['Cloud', 'Docker'],
      href: 'https://github.com/MasterCruelty/cloud-computing-technologies',
    },
    {
      tag: 'affective-computing',
      title: 'AC-ISC-HR',
      desc: 'Affective Computing exam project. Detects heart-rate synchronization between subjects during narrative stimuli, reproducing Pérez et al. (2021) on the BBBD dataset.',
      tech: ['Python', 'SciPy', 'statsmodels'],
      href: 'https://github.com/MasterCruelty/AC-ISC-HR',
    },
    {
      tag: 'nlp',
      title: 'Scientific Journal Analysis',
      desc: "Measures how well each article matches a scientific journal's official scope, using sentence embeddings on articles fetched from the Crossref API.",
      tech: ['Python', 'Sentence Transformers', 'Pandas'],
      href: 'https://github.com/MasterCruelty/nlp-scientific-journal-analysis',
    },
  ],

  personal: [
    {
      tag: 'telegram',
      title: 'my-tg-app',
      desc: 'A Telegram userbot packed with utilities I use every day.',
      tech: ['Python', 'Telethon'],
      href: 'https://github.com/MasterCruelty/my-tg-app',
    },
    {
      tag: 'telegram',
      title: 'robbot',
      desc: 'My personal Telegram bot, a group helper and a playground for experiments.',
      tech: ['Python', 'Bot API'],
      href: 'https://github.com/MasterCruelty/robbot',
    },
    {
      tag: 'linux',
      title: 'eMerger',
      desc: 'A handy CLI tool for Linux devices.',
      tech: ['Shell', 'Linux'],
      href: 'https://github.com/TheMergers/emerger',
      coauthors: [
        { name: 'archetipico', href: 'https://archetipico.github.io/' },
      ],
    },
    {
      tag: 'transit',
      title: 'Metro Flow Router',
      desc: 'Calculates routes and fetches live data about metro systems.',
      tech: ['Python', 'Graphs'],
      href: 'https://github.com/MasterCruelty/MetroFlowRouter',
    },
    {
      tag: 'data',
      title: 'GoKart Data Hub',
      desc: 'Data analysis on go-kart races.',
      tech: ['Python', 'Pandas'],
      href: 'https://github.com/MasterCruelty/gokart-data-hub',
    },
    {
      tag: 'data',
      title: 'Telegram Chat Insights',
      desc: 'Userbot that runs simple analytics on your personal chat interactions.',
      tech: ['Python', 'Telethon'],
      href: 'https://github.com/MasterCruelty/TelegramChatInsights',
    },
    {
      tag: 'template',
      title: 'tg-bot-skeleton',
      desc: 'A starter template to spin up a Telegram bot or userbot fast.',
      tech: ['Python', 'Boilerplate'],
      href: 'https://github.com/MasterCruelty/tg-bot-skeleton',
    },
    {
      tag: 'vmware',
      title: 'VMware Magic Deploy',
      desc: 'A tool to automatically deploy an entire VMware infrastructure (vCenter and ESXi), based on Ansible and PowerShell.',
      tech: ['Ansible', 'PowerShell'],
      href: 'https://github.com/MasterCruelty/VMwareMagicDeploy',
    },
    {
      tag: 'vmware',
      title: 'VMware PowerCLI',
      desc: 'A collection of PowerShell scripts that use VMware PowerCLI to automate everyday tasks.',
      tech: ['PowerShell', 'PowerCLI'],
      href: 'https://github.com/MasterCruelty/VMware-PowerCLI',
    },
    {
      tag: 'iac',
      title: 'Terraform NSX VMC',
      desc: 'Builds VMware NSX segments, services and security groups with Terraform, to migrate an on-prem infrastructure to VMware Cloud on AWS.',
      tech: ['Terraform', 'NSX'],
      href: 'https://github.com/MasterCruelty/Terraform-NSX-VMC',
    },
    {
      tag: 'networking',
      title: 'Setup Juniper EX2300',
      desc: 'My notes and scripts for setting up a Juniper EX2300 switch.',
      tech: ['Shell', 'Junos'],
      href: 'https://github.com/MasterCruelty/setup-JuniperEX2300',
    },
  ],

  games: [
    {
      tag: 'shooter',
      title: 'Combat Augmented',
      desc: 'A pixel-art 2D side-scrolling shooter for the browser, with a CRT effect and procedurally generated graphics and audio.',
      tech: ['JavaScript', 'Docker'],
      href: 'https://github.com/MasterCruelty/human-combat-augmented',
    },
    {
      tag: 'survival',
      title: 'Dead Perimeter',
      desc: 'A 2D zombie siege survival game. Hold Fort Omega for 30 waves, scavenge the ruined city between waves and carry the vaccine out in the finale.',
      tech: ['React', 'Canvas 2D', 'Vite'],
      href: 'https://github.com/MasterCruelty/DeadPerimeter',
    },
    {
      tag: 'puzzle',
      title: 'Province Italiane',
      desc: 'A route game: connect the starting province to the destination by naming every province you cross along the way.',
      tech: ['JavaScript', 'Docker'],
      href: 'https://github.com/MasterCruelty/travel-italian-provinces',
    },
  ],

  socials: [
    {
      brand: 'facebook',
      tag: 'main',
      title: 'Facebook',
      desc: "The community's main page, with original memes and chronicles.",
      cta: 'visit on facebook →',
      href: 'https://www.facebook.com/atmshitposting/',
    },
    {
      brand: 'instagram',
      tag: 'visual',
      title: 'Instagram',
      desc: 'Visual content and a steady feed of fresh memes.',
      cta: 'visit on instagram →',
      href: 'https://www.instagram.com/atm_shitposting',
    },
    {
      brand: 'telegram',
      tag: 'updates',
      title: 'Telegram',
      desc: 'Official channel for updates and behind-the-scenes posts.',
      cta: 'visit on telegram →',
      href: 'https://t.me/atmshitpostingChannel',
      rel: 'noopener noreferrer nofollow',
    },
  ],

  press: [
    {
      tag: 'interview',
      title: 'Linea Diretta on Medium',
      desc: 'ATM themselves interviewing the community and its memes.',
      cta: 'read the interview →',
      href: 'https://medium.com/lineadiretta/atm-incontra-suo-figlio-nato-a-suon-di-meme-cb6d82baaaea',
      rel: 'noopener noreferrer nofollow',
    },
    {
      tag: 'video',
      title: 'Milano AllNews on YouTube',
      desc: 'Video interview by Milano AllNews on the page and its origins.',
      cta: 'watch the video →',
      href: 'https://www.youtube.com/watch?v=d8mGHGavPSk&ab_channel=MilanoAllNews',
    },
  ],
};

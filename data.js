/* ════════════════════════════════════════════════
   MasterCruelty: site content
   Edit the data here; markup is generated in app.js
   ════════════════════════════════════════════════ */

const SITE = {
  skills: [
    'Python', 'PowerShell', 'VMware', 'Terraform', 'Linux', 'Go', 'Telegram bots', 'Data analysis',
  ],

  links: [
    { key: 'github',    val: '@MasterCruelty',  href: 'https://github.com/MasterCruelty' },
    { key: 'telegram',  val: 'atm channel',     href: 'https://t.me/atmshitpostingChannel' },
    { key: 'facebook',  val: 'atm shitposting', href: 'https://www.facebook.com/atmshitposting/' },
    { key: 'instagram', val: '@atm_shitposting', href: 'https://www.instagram.com/atm_shitposting' },
  ],

  // the "projects" stat is counted automatically at the bottom of this file
  stats: [
    { num: '2017', label: 'atm shitposting founded' },
  ],

  university: [
    {
      tag: 'embedded',
      title: 'Alarm Project',
      desc: 'An alarm made for the embedded systems exam. Ultrasonic sensors watch the room and, if something moves, a buzzer goes off and an alert is sent via MQTT.',
      tech: ['Arduino', 'C++', 'MQTT'],
      href: 'https://github.com/MasterCruelty/alarm-project',
    },
    {
      tag: 'architecture',
      title: 'Half-Life Assembly',
      desc: 'A text-based game about the first Half-Life, made for the computer architecture exam. Help Gordon Freeman escape from Black Mesa!',
      tech: ['MIPS', 'QtSpim'],
      href: 'https://github.com/MasterCruelty/halflifeassembly',
    },
    {
      tag: 'software-eng',
      title: 'Bike Sharing',
      desc: 'A bike sharing simulator: you sign up, buy a subscription, rent a bike and pay when you give it back.',
      tech: ['Java', 'MySQL', 'StarUML'],
      href: 'https://github.com/MasterCruelty/bikesharingproject',
    },
    {
      tag: 'thesis',
      title: "Bachelor's Thesis (IAC)",
      desc: 'An Infrastructure as Code solution to deploy an infrastructure for DevOps environments, with the Jenkins pipelines and the LaTeX source of the thesis.',
      tech: ['Terraform', 'Jenkins', 'Bash'],
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
      desc: 'A bunch of notes about statistics: theory written in LaTeX and some practice in Jupyter.',
      tech: ['LaTeX', 'Jupyter'],
      href: 'https://github.com/MasterCruelty/StatisticStuffs',
    },
    {
      tag: 'algorithms',
      title: 'C / Go Algorithms',
      desc: 'A bunch of source files in C and Go I wrote to prepare the Algorithms & Data Structures exam.',
      tech: ['C', 'Go'],
      href: 'https://github.com/MasterCruelty/C-Go-Algorithms',
    },
    {
      tag: 'cloud',
      title: 'Cloud Computing',
      desc: 'A small microservices architecture behind an API gateway, made for the cloud computing exam.',
      tech: ['Python', 'Flask', 'Docker', 'Nginx'],
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
      desc: 'A Telegram userbot with a lot of features I needed day by day.',
      tech: ['Python', 'Pyrogram'],
      href: 'https://github.com/MasterCruelty/my-tg-app',
    },
    {
      tag: 'telegram',
      title: 'robbot',
      desc: 'My Telegram bot. It shares some commands with my userbot and adds new ones, using APIs like OpenWeatherMap, OpenAI and Unsplash.',
      tech: ['Python', 'Pyrogram'],
      href: 'https://github.com/MasterCruelty/robbot',
    },
    {
      tag: 'cli',
      title: 'eMerger',
      desc: 'One command, up, to update and clean every package manager on Linux, macOS and Windows.',
      tech: ['Bash', 'PowerShell'],
      href: 'https://github.com/MasterCruelty/eMerger',
      coauthors: [
        { name: 'archetipico', href: 'https://archetipico.github.io/' },
      ],
    },
    {
      tag: 'transit',
      title: 'Metro Flow Router',
      desc: 'A funny tool to explore the metro network of your favourite cities and find the shortest route between two stations.',
      tech: ['Go', 'Graphs'],
      href: 'https://github.com/MasterCruelty/MetroFlowRouter',
    },
    {
      tag: 'data',
      title: 'GoKart Data Hub',
      desc: 'Reads a CSV with your go-kart races and plots a few graphs to show your trend over the years.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      href: 'https://github.com/MasterCruelty/gokart-data-hub',
    },
    {
      tag: 'data',
      title: 'Telegram Chat Insights',
      desc: 'A userbot that plots charts about your personal chats.',
      tech: ['Python', 'Pyrogram'],
      href: 'https://github.com/MasterCruelty/TelegramChatInsights',
    },
    {
      tag: 'template',
      title: 'tg-bot-skeleton',
      desc: 'A skeleton to quickly create a Telegram bot or userbot.',
      tech: ['Python', 'Pyrogram'],
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
      desc: 'A bunch of PowerShell scripts that use VMware PowerCLI to automate some tasks.',
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
      desc: 'A few notes and scripts of mine on setting up a Juniper EX2300 switch.',
      tech: ['Shell', 'Junos'],
      href: 'https://github.com/MasterCruelty/setup-JuniperEX2300',
    },
  ],

  games: [
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
      desc: 'The main page of the community.',
      cta: 'visit on facebook →',
      href: 'https://www.facebook.com/atmshitposting/',
    },
    {
      brand: 'instagram',
      tag: 'visual',
      title: 'Instagram',
      desc: 'Memes and visual content.',
      cta: 'visit on instagram →',
      href: 'https://www.instagram.com/atm_shitposting',
    },
    {
      brand: 'telegram',
      tag: 'updates',
      title: 'Telegram',
      desc: 'The official channel for updates.',
      cta: 'visit on telegram →',
      href: 'https://t.me/atmshitpostingChannel',
      rel: 'noopener noreferrer nofollow',
    },
  ],

  press: [
    {
      tag: 'interview',
      title: 'Linea Diretta on Medium',
      desc: 'An interview by ATM itself about the community and the memes.',
      cta: 'read the interview →',
      href: 'https://medium.com/lineadiretta/atm-incontra-suo-figlio-nato-a-suon-di-meme-cb6d82baaaea',
      rel: 'noopener noreferrer nofollow',
    },
    {
      tag: 'video',
      title: 'Milano AllNews on YouTube',
      desc: 'A video interview by Milano AllNews.',
      cta: 'watch the video →',
      href: 'https://www.youtube.com/watch?v=d8mGHGavPSk&ab_channel=MilanoAllNews',
    },
  ],
};

// counted from the lists above, so it never goes out of date
SITE.stats.unshift({
  num: String(SITE.university.length + SITE.personal.length + SITE.games.length),
  label: 'projects on this page',
});

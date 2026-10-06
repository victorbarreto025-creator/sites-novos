import Link from "next/link";
import { ArrowRight, BrainCircuit, CircleDollarSign, Play, Sparkles, Users, WandSparkles } from "lucide-react";

const paths = [
  { tag: "Aprender", title: "Viralize em 4 Semanas", text: "Aprenda narrativa, clipping e distribuição para transformar vídeos em conteúdo que prende atenção.", icon: Play },
  { tag: "Criar", title: "Crie com inteligência artificial", text: "Encontre momentos fortes, prepare cortes verticais e acelere as tarefas repetitivas.", icon: WandSparkles },
  { tag: "Conectar", title: "Comunidade de clipadores", text: "Troque referências, estratégias e experiências com pessoas que vivem o mesmo mercado.", icon: Users },
  { tag: "Ganhar", title: "Oportunidades", text: "Descubra campanhas e transforme sua habilidade com conteúdo em novas oportunidades.", icon: CircleDollarSign },
];

const steps = ["Começar", "Aprender", "Criar", "Publicar", "Monetizar", "Evoluir"];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#07090d] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07090d]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#8b5cf6] shadow-[0_0_30px_rgba(139,92,246,.35)]"><Sparkles size={19}/></span>
            CLIPFLOW
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/65 lg:flex">
            <a href="#aprender">Aprenda</a><a href="#ia">IA de cortes</a><a href="#comunidade">Comunidade</a><a href="#oportunidades">Oportunidades</a>
          </nav>
          <a href="#oportunidades" className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-black transition hover:bg-white/90">Começar agora</a>
        </div>
      </header>

      <section className="relative px-6 pb-28 pt-40 sm:pt-48">
        <div className="hero-glow absolute left-1/2 top-10 -z-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-70"/>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-violet-300">
            <BrainCircuit size={15}/> Ecossistema de clipadores
          </div>
          <h1 className="text-balance text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-7xl lg:text-[88px]">
            A nova geração de <span className="gradient-text">criadores</span> começa aqui
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
            Aprenda a trabalhar com vídeos sem precisar aparecer. Formação, tecnologia, comunidade e oportunidades reunidas em uma experiência feita para quem cria conteúdo curto.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#oportunidades" className="group flex items-center gap-2 rounded-2xl bg-[#8b5cf6] px-6 py-3.5 font-bold shadow-[0_15px_50px_rgba(124,58,237,.3)] transition hover:-translate-y-0.5">Começar agora <ArrowRight className="transition group-hover:translate-x-1" size={18}/></a>
            <a href="#ecossistema" className="rounded-2xl border border-white/12 bg-white/[.04] px-6 py-3.5 font-bold text-white/80">Explorar o ecossistema</a>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-24 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
          {["Aprender", "Criar", "Conectar", "Ganhar"].map((item, i) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[.035] p-5 backdrop-blur">
              <span className="text-xs font-bold text-violet-400">0{i + 1}</span>
              <div className="mt-2 font-bold">{item}</div>
              <div className="mt-1 text-xs text-white/35">{["Formação prática","IA para cortes","Comunidade","Oportunidades"][i]}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="ecossistema" className="border-y border-white/10 bg-white/[.02] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Seu caminho</p>
          <div className="mt-3 grid gap-12 lg:grid-cols-2">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Não importa onde você está — existe um próximo passo.</h2>
            <p className="max-w-xl text-lg leading-8 text-white/50">Alguns chegam sem nunca ter feito um corte. Outros já editam e querem transformar habilidade em oportunidade. A plataforma acompanha cada etapa dessa jornada.</p>
          </div>
          <div className="mt-14 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, i) => <div key={step} className="rounded-2xl border border-white/10 bg-[#0d1016] p-5"><span className="text-xs text-white/25">0{i+1}</span><p className="mt-8 font-bold">{step}</p></div>)}
          </div>
        </div>
      </section>

      <section id="aprender" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Tudo em um só ecossistema</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Quatro caminhos, uma carreira.</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {paths.map(({tag,title,text,icon:Icon}) => (
              <article key={title} className="group rounded-[28px] border border-white/10 bg-[#0d1016] p-7 transition hover:-translate-y-1 hover:border-violet-400/35">
                <div className="flex items-start justify-between"><span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-300">{tag}</span><Icon className="text-violet-400" size={28}/></div>
                <h3 className="mt-12 text-2xl font-bold">{title}</h3><p className="mt-3 max-w-lg leading-7 text-white/45">{text}</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-white/80">Conhecer <ArrowRight size={15}/></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ia" className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111520] to-[#0b0d12] lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow">Inteligência artificial</p><h2 className="mt-4 text-4xl font-black tracking-tight">Você continua sendo o criador. A IA acelera o trabalho.</h2><p className="mt-6 leading-8 text-white/50">Encontre momentos, reenquadre para vertical e prepare conteúdo com mais velocidade. Use seu tempo naquilo que diferencia um bom clipador: história e audiência.</p><a href="#oportunidades" className="mt-8 inline-flex items-center gap-2 font-bold text-violet-300">Conhecer <ArrowRight size={17}/></a></div>
          <div className="relative min-h-[430px] border-t border-white/10 p-8 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.18),transparent_60%)]"/>
            <div className="relative mx-auto mt-8 max-w-md rounded-3xl border border-white/10 bg-black/40 p-5 shadow-2xl">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-violet-950 to-slate-950 p-5"><div className="flex h-full items-center justify-center"><div className="grid h-16 w-16 place-items-center rounded-full bg-white text-black"><Play fill="currentColor"/></div></div></div>
              <div className="mt-5 flex items-center gap-2">{["07:37","22:45","54:00"].map(x=><span key={x} className="rounded-lg bg-white/5 px-3 py-2 text-xs text-white/50">{x}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="comunidade" className="border-y border-white/10 bg-violet-500 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.2em] text-white/65">Comunidade</p><div className="mt-4 grid gap-12 lg:grid-cols-2"><h2 className="text-5xl font-black tracking-tight">Ninguém cresce sozinho.</h2><p className="text-lg leading-8 text-white/75">Formatos mudam, plataformas mudam, estratégias mudam. Crescer ao lado de pessoas vivendo os mesmos desafios acelera tudo.</p></div><div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">{[["12 mil","membros"],["480 mi","views geradas"],["120","campanhas"],["R$ 1,4 mi","em oportunidades"]].map(([n,l])=><div key={l} className="rounded-2xl bg-black/15 p-6"><div className="text-3xl font-black">{n}</div><div className="mt-1 text-sm text-white/65">{l}</div></div>)}</div></div>
      </section>

      <section id="oportunidades" className="px-6 py-28">
        <div className="mx-auto max-w-7xl text-center"><p className="eyebrow">Oportunidades</p><h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Sua habilidade pode colocar conteúdo em movimento.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">Creators e marcas precisam alcançar novas audiências. Clipadores transformam histórias em conteúdos preparados para circular pelas redes.</p><a href="mailto:contato@example.com" className="mt-9 inline-flex rounded-2xl bg-white px-6 py-3.5 font-bold text-black">Quero começar</a></div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/35 sm:flex-row"><span className="font-bold text-white">CLIPFLOW</span><span>Plataforma demonstrativa inspirada no mercado de clipping.</span></div></footer>
    </main>
  );
}

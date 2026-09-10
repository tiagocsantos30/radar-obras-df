import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label as FormLabel } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Radar } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RadarObrasDF — Obras aprovadas no DF antes dos concorrentes" },
      {
        name: "description",
        content:
          "Alvarás de construção, reforma, demolição e habite-se publicados no DODF, no seu WhatsApp às 8h. Solicite uma amostra personalizada.",
      },
      {
        property: "og:title",
        content: "RadarObrasDF — Obras aprovadas no DF antes dos concorrentes",
      },
      {
        property: "og:description",
        content:
          "Radar diário de obras aprovadas pela SEDUH/CAP no Distrito Federal. Alerta no WhatsApp às 8h e painel filtrável por região.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA_HREF = "#planos";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="term-label text-muted-foreground">{children}</span>
  );
}

function SampleForm({ trigger }: { trigger: React.ReactNode }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Olá, meu nome é ${name}. Gostaria de receber a amostra de obras de hoje (PDF).`);
    window.location.href = `https://wa.me/5561995576586?text=${message}`;
  };

  if (submitted) {
    return (
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-signal">
            Solicitação recebida!
          </DialogTitle>
          <DialogDescription className="pt-4 text-lg leading-relaxed text-foreground">
            Para garantir que você receba os dados mais relevantes para o seu nicho, um consultor enviará sua amostra personalizada diretamente no seu WhatsApp em instantes.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-end">
          <Button
            onClick={() => setSubmitted(false)}
            className="bg-primary font-mono text-sm font-bold uppercase tracking-widest"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl font-bold uppercase tracking-tight">
            Receber Amostra Personalizada
          </DialogTitle>
          <DialogDescription>
            Informe seus dados para receber o PDF com as obras de hoje no seu
            WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          <div className="grid gap-2">
            <FormLabel htmlFor="name" className="font-mono text-xs uppercase">
              Nome
            </FormLabel>
            <Input
              id="name"
              placeholder="Seu nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-none border-border bg-background focus-visible:ring-signal"
            />
          </div>
          <div className="grid gap-2">
            <FormLabel
              htmlFor="whatsapp"
              className="font-mono text-xs uppercase"
            >
              WhatsApp
            </FormLabel>
            <Input
              id="whatsapp"
              placeholder="(61) 99999-9999"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="rounded-none border-border bg-background focus-visible:ring-signal"
            />
          </div>
          <Button
            type="submit"
            className="mt-2 w-full bg-primary py-6 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-85"
          >
            Solicitar Amostra (PDF)
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <SampleForm
      trigger={
        <button
          className={`inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-85 ${className}`}
        >
          Receber Amostra de Obras de Hoje (PDF)
        </button>
      }
    />
  );
}

const passos = [
  {
    id: "01",
    titulo: "Varredura diária do DODF",
    texto:
      "Todo dia útil o radar lê as publicações da SEDUH/CAP no Diário Oficial do Distrito Federal, sem depender de ninguém abrir PDF.",
  },
  {
    id: "02",
    titulo: "Extração dos alvarás",
    texto:
      "Alvará de construção, reforma, demolição e habite-se com dados completos: requerente, endereço, região administrativa, metragem, responsável técnico e processo SEI.",
  },
  {
    id: "03",
    titulo: "Comodidade no WhatsApp",
    texto:
      "Receba a lista mastigada no WhatsApp às 8h. Filtre por região e decida onde sua equipe vai atacar hoje, sem perder tempo lendo o Diário Oficial.",
  },
];

const beneficios = [
  {
    titulo: "Alerta no mesmo dia",
    texto:
      "Publicou no DODF, chegou no seu WhatsApp às 8h. Você liga enquanto o concorrente ainda não sabe que a obra existe.",
  },
  {
    titulo: "Dados completos do processo",
    texto:
      "Requerente, endereço, metragem, tipo de obra, responsável técnico e número do processo SEI para abordar com contexto.",
  },
  {
    titulo: "Filtro por região administrativa",
    texto:
      "Asa Sul, Asa Norte, Lago Sul, Lago Norte, Águas Claras, Vicente Pires, Park Way, SIA, Taguatinga, Ceilândia, Guará.",
  },
  {
    titulo: "Filtro por metragem e tipo",
    texto:
      "Separe reforma de 80 m² de torre de 12 mil m². Cada equipe recebe só o que fecha contrato.",
  },
  {
    titulo: "Exportação CSV / Excel",
    texto:
      "Leve a lista para o seu CRM ou para a planilha do time comercial em um clique.",
  },
  {
    titulo: "Multi-usuário",
    texto:
      "Vendedor de caçamba, vendedor de andaime e o dono acompanham o mesmo radar, cada um com seu filtro.",
  },
];

const segmentos = [
  "Locadoras de caçambas e gestão de entulho",
  "Locadoras de andaimes e equipamentos",
  "Instaladores de energia solar",
  "Ar-condicionado corporativo e exaustão",
  "Cercamento provisório e segurança de canteiro",
];

const dores = [
  {
    titulo: "O concorrente fechou antes",
    texto:
      "Quando você descobre a obra pelo boca a boca, o contrato de locação já está assinado com outro fornecedor.",
  },
  {
    titulo: "A obra já começou",
    texto:
      "Chegar depois da primeira semana de canteiro é chegar quando as decisões de fornecedor já foram tomadas.",
  },
  {
    titulo: "Caçamba e andaime parados",
    texto:
      "Equipamento parado é prejuízo diário. Garanta que sua frota esteja sempre em campo com um fluxo ininterrupto de novos alvarás.",
  },
  {
    titulo: "Prospecção no escuro",
    texto:
      "Time comercial rodando bairro atrás de tapume é caro, lento e depende de sorte.",
  },
];

const planos = [
  {
    nome: "Básico",
    preco: "R$ 490",
    resumo: "Para quem quer testar o radar com um vendedor.",
    itens: [
      "Alertas diários no WhatsApp",
      "Painel web filtrável",
      "1 usuário",
      "Todas as regiões administrativas",
    ],
    destaque: false,
    cta: "Assinar e Ativar Radar",
  },
  {
    nome: "Pro",
    preco: "R$ 890",
    resumo: "Para o time comercial inteiro trabalhar o radar.",
    itens: [
      "Tudo do Básico",
      "Multi-usuários",
      "Exportação CSV / Excel",
      "Filtros salvos por vendedor",
      "Prioridade no suporte",
      "Inclui exportação para CRM e suporte prioritário para grandes frotas.",
    ],
    destaque: true,
    cta: "Assinar e Ativar Radar",
  },
];

function Index() {
  return (
    <main className="min-h-screen">
      {/* Barra de status */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <Radar className="size-5 text-signal" />
            <span className="font-mono text-sm font-bold tracking-tight">
              RadarObras<span className="text-signal">DF</span>
            </span>
          </div>
          <div className="hidden font-mono text-xs text-muted-foreground sm:block">
            fonte: DODF · SEDUH/CAP · dias úteis 08:00
          </div>
          <SampleForm
            trigger={
              <button className="font-mono text-xs font-bold uppercase tracking-widest text-signal hover:underline">
                Receber Amostra
              </button>
            }
          />
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <Label>Radar de obras · Distrito Federal</Label>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Chegue primeiro na obra.{" "}
              <span className="text-signal">Feche antes do concorrente.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              O RadarObrasDF monitora o DODF todos os dias úteis e entrega no seu
              WhatsApp, às 8h, cada obra e reforma aprovada pela SEDUH/CAP — com
              requerente, endereço, metragem e responsável técnico.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryCta />
            </div>
            <p className="mt-8 border-l-2 border-signal pl-4 font-mono text-sm text-muted-foreground">
              Usado por locadoras de caçamba, andaime e equipamentos que vendem
              para canteiros no DF.
            </p>
          </div>

          {/* Terminal de alertas */}
          <div className="border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="term-label text-muted-foreground">
                alertas_do_dia.log
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-signal">
                <span className="signal-dot block size-1.5 rounded-full bg-signal" />
                ao vivo
              </span>
            </div>
            <div className="space-y-3 p-4 font-mono text-xs leading-relaxed">
              {[
                {
                  tipo: "ALVARÁ DE CONSTRUÇÃO",
                  ra: "Lago Sul",
                  m: "1.240 m²",
                  req: "Requerente: incorporadora residencial",
                },
                {
                  tipo: "ALVARÁ DE REFORMA",
                  ra: "Asa Sul",
                  m: "380 m²",
                  req: "Requerente: condomínio comercial",
                },
                {
                  tipo: "DEMOLIÇÃO",
                  ra: "Vicente Pires",
                  m: "620 m²",
                  req: "Requerente: pessoa física",
                },
                {
                  tipo: "HABITE-SE",
                  ra: "Águas Claras",
                  m: "8.900 m²",
                  req: "Requerente: construtora",
                },
              ].map((a) => (
                <div
                  key={a.tipo + a.ra}
                  className="border border-border bg-background p-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-signal">{a.tipo}</span>
                    <span className="text-accent">{a.m}</span>
                  </div>
                  <div className="mt-1.5 text-muted-foreground">
                    RA: {a.ra} · {a.req}
                  </div>
                  <div className="mt-1 text-muted-foreground">
                    processo SEI registrado · responsável técnico identificado
                  </div>
                </div>
              ))}
              <div className="pt-1 text-muted-foreground">
                &gt; entrega diária no WhatsApp às 08:00_
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Label>O prejuízo de descobrir tarde</Label>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Toda obra que você descobre tarde é receita que foi para outro
            fornecedor.
          </h2>
          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
            {dores.map((d) => (
              <div key={d.titulo} className="bg-card p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 block size-2 shrink-0 bg-destructive" />
                  <div>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-wide">
                      {d.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {d.texto}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Label>Como funciona</Label>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Três passos entre a publicação no DODF e a sua proposta.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {passos.map((p) => (
              <div key={p.id} className="border border-border bg-card p-6">
                <span className="font-mono text-3xl font-bold text-signal">
                  {p.id}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Label>O que vem no radar</Label>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Informação pronta para o vendedor usar no mesmo dia.
          </h2>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <div key={b.titulo} className="bg-card p-6">
                <span className="block size-2 bg-signal" />
                <h3 className="mt-4 font-mono text-sm font-bold uppercase tracking-wide">
                  {b.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Label>Para quem é</Label>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Se você vende para canteiro de obra no DF, o radar é seu.
          </h2>
          <ul className="mt-10 divide-y divide-border border border-border bg-card">
            {segmentos.map((s, i) => (
              <li key={s} className="flex items-center gap-4 px-6 py-5">
                <span className="font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ROI */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="relative border border-signal/40 bg-card p-8 md:p-12">
            <div className="absolute -top-3 right-8 bg-signal px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-lg">
              ROI Garantido
            </div>
            <Label>Conta rápida</Label>
            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">
              Um único contrato de obra rende de{" "}
              <span className="text-signal">R$ 4.000 a R$ 20.000</span> para uma
              locadora. O radar se paga no primeiro contrato fechado — o resto do
              mês é lucro.
            </p>
            <p className="mt-4 font-mono text-sm font-bold text-signal">
              * Uma única obra fechada paga 12 meses de assinatura do Radar.
            </p>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                { k: "1 contrato", v: "R$ 4.000 – R$ 20.000" },
                { k: "Custo do radar", v: "a partir de R$ 490/mês" },
                { k: "Alertas por ano", v: "todos os dias úteis" },
              ].map((x) => (
                <div key={x.k} className="bg-card p-5">
                  <div className="term-label text-muted-foreground">{x.k}</div>
                  <div className="mt-2 font-mono text-lg font-bold text-accent">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREÇOS */}
      <section id="planos" className="border-b border-border scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Label>Planos</Label>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Escolha o plano e comece hoje.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {planos.map((p) => (
              <div
                key={p.nome}
                className={`flex flex-col border bg-card p-8 ${
                  p.destaque
                    ? "border-signal shadow-[0_0_0_1px_var(--signal)]"
                    : "border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold uppercase tracking-widest">
                    {p.nome}
                  </span>
                  {p.destaque && (
                    <span className="bg-signal px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                      mais escolhido
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    {p.preco}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    /mês
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.resumo}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.itens.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-1.5 block size-1.5 shrink-0 ${
                          p.destaque ? "bg-signal" : "bg-muted-foreground"
                        }`}
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5561995576586?text=Olá, quero assinar o plano ${p.nome} do RadarObrasDF`}
                  className={`mt-8 inline-flex items-center justify-center px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-85 ${
                    p.destaque
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            Assinatura mensal sem fidelidade · cancele quando quiser.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="final" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
          <Label>Última chamada</Label>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Quero receber obras antes dos concorrentes.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Ative o radar hoje e receba amanhã, às 8h no WhatsApp, as obras
            aprovadas no Distrito Federal.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <PrimaryCta className="w-full max-w-sm" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Label>Dúvidas Frequentes</Label>
          <h2 className="mb-10 mt-4 text-3xl font-bold tracking-tight md:text-4xl text-center">
            FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="font-mono text-sm font-bold uppercase tracking-wide hover:no-underline">
                Os dados são oficiais?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim, monitoramos o DODF em tempo real e extraímos as informações
                diretamente das publicações da SEDUH/CAP.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="font-mono text-sm font-bold uppercase tracking-wide hover:no-underline">
                Posso cancelar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim, nossa assinatura é mensal e não possui fidelidade. Você pode
                cancelar a qualquer momento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="font-mono text-sm font-bold uppercase tracking-wide hover:no-underline">
                Como recebo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Você recebe alertas diários via Telegram/WhatsApp às 8h e também
                possui acesso ao nosso painel web exclusivo para assinantes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>RadarObrasDF · Distrito Federal</span>
          <span>Fonte pública: DODF — publicações SEDUH/CAP</span>
        </div>
      </footer>
    </main>
  );
}

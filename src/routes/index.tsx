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
      { title: "RadarObrasDF — Inteligência de Mercado B2B no DF" },
      {
        name: "description",
        content:
          "Monitore grandes contratos públicos e obras privadas em tempo real no DF. Antecipe-se à demanda de insumos, máquinas pesadas e serviços.",
      },
      {
        property: "og:title",
        content: "RadarObrasDF — Inteligência de Mercado B2B no DF",
      },
      {
        property: "og:description",
        content:
          "Inteligência de mercado para fornecedores da construção no DF. Monitore contratos e obras em tempo real.",
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
            Para garantir que você receba a inteligência mais estratégica para o seu negócio, um consultor enviará sua amostra personalizada de contratos e obras diretamente no seu WhatsApp em instantes.
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
            Amostra de Inteligência de Mercado
          </DialogTitle>
          <DialogDescription>
            Informe seus dados para receber o PDF com os contratos e obras de hoje no seu
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
            Receber Amostra de Inteligência (PDF)
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
    titulo: "Monitoramento de Contratos e Obras",
    texto:
      "Varredura diária de grandes contratos públicos e obras privadas de alto impacto no DF, capturando oportunidades antes de chegarem ao mercado.",
  },
  {
    id: "02",
    titulo: "Inteligência de Dados",
    texto:
      "Extração detalhada de alvarás e contratos: valor do contrato, metragem, requerente, localização e responsáveis, tudo identificado via processo SEI.",
  },
  {
    id: "03",
    titulo: "Ação Comercial Imediata",
    texto:
      "Receba a central de inteligência no seu WhatsApp às 8h. Antecipe-se à demanda de insumos e máquinas pesadas enquanto a concorrência ainda nem sabe do projeto.",
  },
];

const beneficios = [
  {
    titulo: "Alerta de Grandes Contratos",
    texto:
      "Publicou no DODF ou identificado em licitações, chegou no seu WhatsApp às 8h. Antecipe-se à demanda de cimento, aço e máquinas.",
  },
  {
    titulo: "Inteligência de Mercado",
    texto:
      "Requerente, endereço, metragem, tipo de obra e processo SEI completo para uma abordagem comercial consultiva e estratégica.",
  },
  {
    titulo: "Filtro por RA e Escala",
    texto:
      "Monitore todo o DF ou regiões específicas. Ideal para logística de insumos e posicionamento de frotas pesadas.",
  },
  {
    titulo: "Monitoramento de Projetos",
    texto:
      "Acompanhe desde o alvará de construção até o habite-se. Esteja presente em todas as fases críticas de suprimento.",
  },
  {
    titulo: "Integração com CRM",
    texto:
      "Exportação CSV / Excel para alimentar seu funil de vendas B2B com leads qualificados de alto valor.",
  },
  {
    titulo: "Múltiplos Consultores",
    texto:
      "Equipes comercial e operacional conectadas à mesma central de inteligência, cada uma focada no seu segmento.",
  },
];

const segmentos = [
  "Indústrias de Insumos: Fornecedores de concreto, aço, cimento e materiais de base.",
  "Frotas de Máquinas Pesadas: Locadoras de escavadeiras, guindastes, patrolas e pavimentação.",
  "Serviços de Engenharia: Escritórios de projetos, consultoria ambiental e gerenciamento.",
  "Segurança e Infraestrutura: Cercamento de canteiro, vigilância e instalações provisórias.",
  "EPIs e Ferramentas: Fornecedores de equipamentos de proteção e ferramentas industriais.",
];

const dores = [
  {
    titulo: "Insumos Vendidos pela Concorrência",
    texto:
      "Quando você descobre o contrato, o fornecedor de concreto e aço já foi escolhido. A antecipação é a chave no B2B.",
  },
  {
    titulo: "Frotas Ociosas no Pátio",
    texto:
      "Máquina pesada parada é custo alto. Garanta um fluxo constante de novas obras e contratos para manter sua frota em campo.",
  },
  {
    titulo: "Vendas sem Estratégia",
    texto:
      "Sua equipe comercial prospecta no escuro, sem saber quem realmente tem poder de compra e contratos assinados no momento.",
  },
  {
    titulo: "Perda de Prazos de Licitação",
    texto:
      "Não monitorar contratos públicos significa perder a chance de subcontratação e fornecimento para grandes obras de infraestrutura.",
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
      "Monitoramento de Alvarás e Contratos",
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
      "Exportação CSV / Excel para CRM",
      "Filtros avançados por consultor",
      "Prioridade no suporte",
      "Relatórios de inteligência customizados para grandes frotas e indústrias.",
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
              Plataforma de Inteligência<span className="text-signal"> B2B</span>
            </span>
          </div>
          <div className="hidden font-mono text-xs text-muted-foreground sm:block">
            monitoramento em tempo real · contratos e insumos · DF
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
            <Label>Inteligência de Mercado B2B · Distrito Federal</Label>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Inteligência de Mercado para Fornecedores da Construção no DF.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Monitore grandes contratos públicos e obras privadas em tempo real. 
              Antecipe-se à demanda de insumos, máquinas pesadas e serviços especializados.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryCta />
            </div>
            <p className="mt-8 border-l-2 border-signal pl-4 font-mono text-sm text-muted-foreground">
              A central de inteligência para indústrias de concreto, aço e locação de frotas pesadas no DF.
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
                  tipo: "CONTRATO PÚBLICO",
                  ra: "SIA/Guará · Complexo Viário",
                  m: "R$ 39.375.515,77",
                  req: "Empresa: Hytec Construções",
                },
                {
                  tipo: "ALVARÁ DE CONSTRUÇÃO",
                  ra: "Lago Sul",
                  m: "1.240 m²",
                  req: "Requerente: Incorporadora Residencial",
                },
                {
                  tipo: "OBRA PÚBLICA",
                  ra: "Planaltina · Parque Linear",
                  m: "R$ 6.100.000,00",
                  req: "Processo SEI identificado",
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
                    Local: {a.ra} · {a.req}
                  </div>
                  <div className="mt-1 text-muted-foreground">
                    inteligência em tempo real · monitoramento de contratos
                  </div>
                </div>
              ))}
              <div className="pt-1 text-muted-foreground">
                &gt; entrega diária de inteligência às 08:00_
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
          <Label>Público-Alvo</Label>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Inteligência estratégica para quem move a construção civil no DF.
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
              ROI Exponencial
            </div>
            <Label>Argumento de Valor</Label>
            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">
              Um único contrato de fornecimento de concreto ou uma semana de locação de frota paga o investimento no Radar por anos. 
              <span className="text-signal"> Nossa inteligência se paga no primeiro lead qualificado</span> — o resto é escala para o seu comercial.
            </p>
            <p className="mt-4 font-mono text-sm font-bold text-signal">
              * O ticket médio alto desses contratos torna o investimento no Radar irrelevante frente ao lucro gerado.
            </p>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                { k: "Ticket Médio", v: "Alta Escala B2B" },
                { k: "Investimento", v: "R$ 490/mês" },
                { k: "Retorno", v: "No 1º lead qualificado" },
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
          <Label>Central de Inteligência</Label>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Escolha sua escala de monitoramento.
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
          <Label>Decisão Estratégica</Label>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Domine o mercado de insumos e contratos no DF.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Ative sua central de inteligência hoje e receba amanhã, às 8h no WhatsApp, os novos contratos e obras do Distrito Federal.
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
                Como os contratos são identificados?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Monitoramos o DODF, licitações públicas e alvarás da SEDUH/CAP em tempo real, utilizando processamento de dados para identificar novos contratos de alto valor e obras de impacto.
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
                Qual o formato da entrega?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Você recebe alertas estratégicos via WhatsApp às 8h e possui acesso a um painel de inteligência web para filtros avançados e exportação de dados.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Plataforma de Inteligência B2B · Distrito Federal</span>
          <span>Fonte: DODF e Monitoramento de Contratos Públicos</span>
        </div>
      </footer>
    </main>
  );
}

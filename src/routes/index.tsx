import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { inject } from "@vercel/analytics";

// Initialize Analytics
inject();

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
    const message = encodeURIComponent(`Quero receber 3 Leads de hoje no WhatsApp (Grátis). Vi que você se interessou pelas obras de hoje, tenho os detalhes aqui, quer que eu te envie?`);
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
            Receber 3 Leads de Hoje
          </DialogTitle>
          <DialogDescription>
            Informe seus dados para receber os detalhes de 3 obras reais publicadas hoje no seu
            WhatsApp (Grátis).
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          <div className="grid gap-2">
            <FormLabel htmlFor="name" className="font-mono text-xs uppercase">
              Seu Nome
            </FormLabel>
            <Input
              id="name"
              placeholder="Como podemos te chamar?"
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
              Seu WhatsApp
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
            Quero Meus 3 Leads Grátis Agora
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
          Receber 3 Leads de hoje no WhatsApp (Grátis)
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
    nome: "Lead Grátis",
    preco: "Grátis",
    resumo: "Receba 3 leads de hoje no WhatsApp.",
    itens: [
      "Amostra de 3 obras reais",
      "Receba direto no WhatsApp",
      "Ideal para primeiro contato",
    ],
    destaque: false,
    cta: "Receber 3 Leads de hoje no WhatsApp (Grátis)",
    link: "https://wa.me/5561995576586?text=Quero+receber+3+leads+de+hoje+no+WhatsApp+Grátis",
  },
  {
    nome: "Radar Flash",
    preco: "R$ 47",
    resumo: "Teste o radar por 7 dias. Ideal para o primeiro contrato.",
    itens: [
      "Acesso por 7 dias",
      "Alertas diários no WhatsApp",
      "Custo menor que um almoço",
    ],
    destaque: true,
    cta: "Testar Radar Flash",
    link: "https://wa.me/5561995576586?text=Quero+testar+o+Radar+Flash+por+7+dias+por+R$47",
  },
  {
    nome: "Profissional",
    preco: "R$ 490",
    resumo: "Acesso total e alertas em tempo real. O custo de 1 lead paga 1 ano.",
    itens: [
      "Acesso total",
      "Alertas em tempo real",
      "Monitoramento completo DODF/SEAPE",
      "Suporte exclusivo",
    ],
    destaque: false,
    cta: "Assinar Plano Profissional",
    link: "https://wa.me/5561995576586?text=Quero+acessar+o+Plano+Profissional+do+RadarObrasDF",
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
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center bg-signal/10 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-signal border border-signal/20">
                Radar Atualizado: 14 Novas Obras e Licitações detectadas no DF hoje (21/09)
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Não chegue quando o tapume já subiu.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Acesse alvarás, projetos e contratos publicados no DODF de hoje antes da sua concorrência.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryCta />
            </div>
            
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-signal/10">
                  <span className="block size-2 rounded-full bg-signal animate-pulse" />
                </div>
                <div className="font-mono text-xs">
                  <span className="block font-bold uppercase">Última varredura concluída às 11:40</span>
                  <span className="text-muted-foreground">85 editais abertos e 1486 contratos monitorados na base</span>
                </div>
              </div>
              <div className="flex items-center gap-2 border border-border bg-card p-3 w-fit">
                <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">Selo de Verificação:</span>
                <span className="font-mono text-[10px] font-bold text-foreground">Dados extraídos diretamente do DODF e SEAPE</span>
              </div>
            </div>
          </div>

          {/* Vitrine de Oportunidades */}
          <div className="flex flex-col gap-4">
            <div className="border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <span className="term-label text-muted-foreground font-bold">
                  VITRINE DE OPORTUNIDADES (21/09)
                </span>
                <span className="flex items-center gap-2 font-mono text-xs text-signal">
                  <span className="signal-dot block size-1.5 rounded-full bg-signal" />
                  AO VIVO
                </span>
              </div>
              <div className="divide-y divide-border overflow-hidden">
                {[
                  {
                    obra: "Requalificação de Sistema Viário",
                    local: "Lago Sul (QI 9/11)",
                    cta: "Liberar Contato no Whats",
                    msg: "Quero+acessar+as+obras+do+Lago+Sul+que+saíram+no+DODF+de+hoje"
                  },
                  {
                    obra: "Manutenção Predial Emergencial",
                    local: "SES-DF (Brasília)",
                    cta: "Liberar Detalhes no Whats",
                    msg: "Quero+detalhes+da+manutenção+emergencial+da+SES-DF+de+hoje"
                  },
                  {
                    obra: "Reversão de Desdobro (Comercial)",
                    local: "Lago Sul (QI 28)",
                    cta: "Falar com Consultor",
                    msg: "Quero+informações+sobre+a+reversão+de+desdobro+no+Lago+Sul+de+hoje"
                  },
                  {
                    obra: "Licitação: Eng. Civil e Elétrica",
                    local: "Brasília (Min. Defesa)",
                    cta: "Ver Edital no Whats",
                    msg: "Quero+acessar+o+edital+da+licitação+do+Min+Defesa+de+hoje"
                  },
                ].map((item) => (
                  <div key={item.obra} className="group relative bg-background p-4 transition-colors hover:bg-muted/50">
                    <div className="mb-1 flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] font-bold text-signal uppercase">Oportunidade Detectada</span>
                      <span className="text-[10px] text-muted-foreground">{item.local}</span>
                    </div>
                    <h3 className="text-sm font-bold leading-tight">{item.obra}</h3>
                    <a 
                      href={`https://wa.me/5561995576586?text=${item.msg}`}
                      className="mt-3 inline-flex w-full items-center justify-center border border-signal px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
                    >
                      {item.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground text-center">
              * Isso prova que o sistema funciona em tempo real.
            </p>
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                  {p.nome !== "Lead Grátis" && (
                    <span className="font-mono text-sm text-muted-foreground">
                      {p.nome === "Radar Flash" ? "/7 dias" : "/mês"}
                    </span>
                  )}
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
                  href={p.link}
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
              <AccordionTrigger className="font-mono text-sm font-bold uppercase tracking-wide hover:no-underline text-left">
                Como os contratos são identificados?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Monitoramos o DODF, licitações públicas e alvarás da SEDUH/CAP em tempo real, utilizando processamento de dados para identificar novos contratos de alto valor e obras de impacto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="font-mono text-sm font-bold uppercase tracking-wide hover:no-underline text-left">
                Posso cancelar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim, nossa assinatura é mensal e não possui fidelidade. Você pode
                cancelar a qualquer momento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="font-mono text-sm font-bold uppercase tracking-wide hover:no-underline text-left">
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
          <span>Fonte: DODF, SEAPE e Monitoramento de Contratos Públicos</span>
        </div>
      </footer>
    </main>
  );
}

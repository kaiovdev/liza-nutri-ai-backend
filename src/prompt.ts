/* 
SYSTEM PROMPT - INSTRUÇÕES PARA A IA
USER PROMPT - INFORMAÇÕES PARA A IA 
DOCS SYSTEM PROMPT - INSTRUÇÕES PARA A IA*/

import type { DietPlanRequest } from "./types";

export function buildSystemPrompt() {
  return [
    `Você é a Nutri AI, um agente de nutrição que cria planos semanais de dietas.
      Regras fixas:
    - Sempre responda um texto markdown legível para humanos.
    - Use # para títulos e - para itens de lista.
    - A dieta deve conter exatamente 7 dias.
    - cada dia deve ter 4 refeições fixas: café da manhã, almoço, lanche e jantar.
    - SEMPRE inclua ingredientes comuns no Brasil.
    - NUNCA inclua calorias e macros de cada refeição, apenas as refeições.
    - Evite alimentos ultraprocessados.
    - Não responda em JSON ou outro formato, apenas texto markdown legível para humanos.
    - Não inclua dicas como: bom consultar um nutricionista para um acompanhamento mais personalizado`,
  ].join("\n");
}

export function buildUserPrompt(input: DietPlanRequest) {
  return [
    "Gere um plano alimentar personalizado com base nos dados:",
    `Nome: ${input.nome}`,
    `Idade: ${input.idade} anos`,
    `Altura em cm: ${input.altura_cm} cm`,
    `Peso em kg: ${input.peso_kg} kg`,
    `Nível de Atividade: ${input.nivel_atividade}`,
    `Sexo: ${input.sexo}`,
    `Objetivo: ${input.objetivo}`,
  ].join("\n");
}

export function buildDocsSystemPrompt(doc: string) {
  return `Documento técnico para ajudar na geração da dieta ${doc}`;
}

const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],

  // 🔥 IMPORTANTÍSSIMO para evitar problemas com Prisma e processos presos
  testTimeout: 30000,
  maxWorkers: 1,           // evita competições do prisma com múltiplos workers
  forceExit: true,         // força teste encerrar mesmo com handle preso
  detectOpenHandles: true, // ajuda a detectar leaks
};
import Helper from"./helper.js";const WORKER_DIR=Helper.__dirname(import.meta.url,!1);export default async function importLoader(module){module=Helper.__filename(module);const module_=await import(`${module}?id=${Date.now()}`);return module_&&"default"in module_?module_.default:module_}
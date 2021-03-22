import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@home/navbar",
  app: () => System.import("@home/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@home/body",
  app: () => System.import("@home/body"),
  activeWhen: [(location) => location.pathname === "/"],
});

start({
  urlRerouteOnly: true,
});

import React from "react";

declare module "inferno" {
  declare var exports: React;
}
declare module "inferno-component" {
  declare var Component: React.Component;
}

declare module "inferno-dom" {
  declare function render(el: any, node: any): void;
}

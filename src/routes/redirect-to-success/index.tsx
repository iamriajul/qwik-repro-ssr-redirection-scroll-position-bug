import { routeLoader$ } from "@builder.io/qwik-city";
import {component$} from "@builder.io/qwik";

export const useRedirectLoader = routeLoader$((ctx) => {
  throw ctx.redirect(303, '/success');
});

export default component$(() => {
  useRedirectLoader();
  return <div>Redirecting...</div>;
});
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";
import {Form, Link, routeAction$} from "@builder.io/qwik-city";

export const formSubmitAction = routeAction$(async (values, ctx) => {
  throw ctx.redirect(303, "/success");
});

export default component$(() => {
  const formSubmit = formSubmitAction();

  return (
    <>
      <Hero/>
      <Starter/>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br/> on me
        </h3>
        <Counter/>
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            CLI Commands
          </div>
          <>
            <p>
              <code>npm run dev</code>
              <br/>
              Starts the development server and watches for changes
            </p>
            <p>
              <code>npm run preview</code>
              <br/>
              Creates production build and starts a server to preview it
            </p>
            <p>
              <code>npm run build</code>
              <br/>
              Creates production build
            </p>
            <p>
              <code>npm run qwik add</code>
              <br/>
              Runs the qwik CLI to add integrations
            </p>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Example Apps
            </div>
            <p>
              Have a look at the <a href="/demo/flower">Flower App</a> or the{" "}
              <a href="/demo/todolist">Todo App</a>.
            </p>
          </Infobox>

          <Infobox>
            <div q:slot="title" class="icon icon-community">
              Community
            </div>
            <ul>
              <li>
                <span>Questions or just want to say hi? </span>
                <a href="https://qwik.builder.io/chat" target="_blank">
                  Chat on discord!
                </a>
              </li>
              <li>
                <span>Follow </span>
                <a href="https://twitter.com/QwikDev" target="_blank">
                  @QwikDev
                </a>
                <span> on Twitter</span>
              </li>
              <li>
                <span>Open issues and contribute on </span>
                <a href="https://github.com/BuilderIO/qwik" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <span>Watch </span>
                <a href="https://qwik.builder.io/media/" target="_blank">
                  Presentations, Podcasts, Videos, etc.
                </a>
              </li>
            </ul>
          </Infobox>
        </div>
      </div>

      <div class="container container-center container-spacing-xl">
        <h2>The Form</h2>
        <p>This form submit will trigger a redirect to success page</p>
        <Form
          action={formSubmit}
          class="container container-flex"
        >
          <input type="text" name="name" placeholder="Name"/>
          <button type="submit">Submit</button>
        </Form>
      </div>

      <div class="container container-center container-spacing-xl">
        <p>Action submit withou Form component test</p>
        <button
          type="button"
          onClick$={() => {
            formSubmit.submit();
          }}
        >Redirect to Success Page using Route Action</button>
      </div>

      <div class="container container-center container-spacing-xl">
        <p>Click the Link, This redirect works as expected, it does reset the scroll position to 0</p>
        <Link href="/redirect-to-success">Redirect to Success Page using Link component</Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

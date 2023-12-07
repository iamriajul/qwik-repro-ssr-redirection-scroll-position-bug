import {useNavigate} from "@builder.io/qwik-city";
import {component$, Slot, useVisibleTask$} from "@builder.io/qwik";


export default component$(() => {
  useVisibleTask$(() => {
    setTimeout(async () => {
      const defaults = {
        spread: 360,
        ticks: 70,
        gravity: 0,
        decay: 0.95,
        startVelocity: 30,
        colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
        origin: {
          x: 0.5,
          y: 0.35,
        },
      };

      function loadConfetti() {
        return new Promise<(opts: any) => void>((resolve, reject) => {
          if ((globalThis as any).confetti) {
            return resolve((globalThis as any).confetti as any);
          }
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js";
          script.onload = () =>
            resolve((globalThis as any).confetti as any);
          script.onerror = reject;
          document.head.appendChild(script);
          script.remove();
        });
      }

      const confetti = await loadConfetti();

      function shoot() {
        confetti({
          ...defaults,
          particleCount: 80,
          scalar: 1.2,
        });

        confetti({
          ...defaults,
          particleCount: 60,
          scalar: 0.75,
        });
      }

      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
      setTimeout(shoot, 300);
      setTimeout(shoot, 400);
    }, 10);
  });

  return <div
    style={{
      minHeight: "80vh",
      backgroundColor: "#f2f2f2",
      color: '#000',
    }}
  >
    <div class="wrapper py-8 3xl:py-16">
      <div class="container mx-auto">
        <div class="flex items-center flex-col justify-center h-[367px]">
          <div class="text-center">
            <svg class="inline-block mb-2" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33398C10.8334 3.33398 3.33337 10.834 3.33337 20.0007C3.33337 29.1673 10.8334 36.6673 20 36.6673C29.1667 36.6673 36.6667 29.1673 36.6667 20.0007C36.6667 10.834 29.1667 3.33398 20 3.33398ZM27 17.1673L19 25.1673C18.3334 25.834 17.3334 25.834 16.6667 25.1673L13 21.5007C12.3334 20.834 12.3334 19.834 13 19.1673C13.6667 18.5007 14.6667 18.5007 15.3334 19.1673L17.8334 21.6673L24.6667 14.834C25.3334 14.1673 26.3334 14.1673 27 14.834C27.6667 15.5007 27.6667 16.5007 27 17.1673Z" fill="#078FF7"/>
            </svg>
            <h1 class="text-lg font-bold text-black-tint-100 my-2" style={{color: 'black'}}>Your request has been submitted successfully.</h1>
            <p class="text-xs text-black-tint-200">One of our agent will get back to you within 30 minutes with the update of the ambulance.</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
});
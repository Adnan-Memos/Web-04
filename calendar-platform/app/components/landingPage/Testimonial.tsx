import { SVGProps } from "react";

export function Testimonial() {
  return (
    <>
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Blockquote */}
        <blockquote className="text-center lg:mx-auto lg:w-3/5">
          <footer className="mt-6">
            <div className="font-semibold ">Adnan Siddiqui</div>
            <div className="text-sm text-muted-foreground">
              Programmer | Designer
            </div>
          </footer>
        </blockquote>
        {/* End Blockquote */}
      </div>
    </>
  );
}


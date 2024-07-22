import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper>
          <div>
            <div>
              <div>
                <Image
                  src="/snake-1.png"
                  alt="Snake"
                  width={500}
                  height={500}
                />
              </div>
              <h1>
                Your Image on a <span>Custom</span> Phone Case
              </h1>
              <p>
                Transform your favorite memories into unique art with our{" "}
                <span>one-of-a-kind</span> phone cases. With Case-Cobra, you
                protect not just your phone, but the moments that matter most.
              </p>
              <ul className="flex flex-col font-medium items-center text-left mt-8 space-y-2 sm:items-start">
                <div>
                  <li>
                    <Check className="h-5 w-5 text-green-600" />
                    High quality, durable material
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

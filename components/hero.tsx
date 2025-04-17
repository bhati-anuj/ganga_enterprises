import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-small-primary/10 [mask-image:linear-gradient(to_bottom_left,white,transparent,white)]"></div>
      <div className="container relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Industrial Automation Solutions
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Complete Repairing & Service of Industrial Instruments, PLC, HMI, Touch Panel and Electronic/Electrical
                Spare Parts
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] rounded-full bg-primary/10 p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-background p-6 shadow-lg">
                  <h3 className="mb-2 text-xl font-bold text-primary">Ganga Enterprises</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Your trusted partner for industrial automation solutions
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-lg bg-primary/10 p-2 text-center">
                      <span className="font-medium">PLC</span>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-2 text-center">
                      <span className="font-medium">HMI</span>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-2 text-center">
                      <span className="font-medium">Touch Panel</span>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-2 text-center">
                      <span className="font-medium">AC Drives</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
